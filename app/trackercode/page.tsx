import { promises as fs } from "fs";
import path from "path";
import { codeToHtml } from "shiki";
import type { BundledLanguage } from "shiki";

type ProjectEntry = {
  id: string;
  label: string;
  codePath: string;
  language: BundledLanguage;
  notesPath?: string;
};

const PROJECT_FILES: ProjectEntry[] = [
  {
    id: "expense-tracker",
    label: "Expense Tracker File",
    codePath: "app/components/projects/expense-tracker.tsx",
    language: "tsx",
    notesPath: "app/trackercode/expensetrackernotes.txt",
  },
  {
    id: "tracker-logic",
    label: "Tracker Logic File",
    codePath: "app/components/projects/tracker-logic.tsx",
    language: "tsx",
  },
]

type LoadedProject = ProjectEntry & {
  code: string;
  notes?: string;
};

type HighlightedProject = LoadedProject & {
  html: string;
};

async function loadProjectFiles(files: ProjectEntry[]): Promise<LoadedProject[]> {
  const root = process.cwd();

  const loaded = await Promise.all(
    files.map(async (file) => {
      const absoluteCodePath = path.join(root, file.codePath);
      const code = await fs.readFile(absoluteCodePath, "utf8");
      let notes: string | undefined;

      if (file.notesPath) {
        const absoluteNotesPath = path.join(root, file.notesPath);
        notes = await fs.readFile(absoluteNotesPath, "utf8");
      }

      return {
        ...file,
        code,
        notes,
      };
    })
  );

  return loaded;
}

export default async function TrackerCode(){

     const projects = await loadProjectFiles(PROJECT_FILES);
     const highlightedProjects: HighlightedProject[] = await Promise.all(
        projects.map(async (file) => {
          const html = await codeToHtml(file.code, {
            lang: file.language,
            themes: { light: "github-dark", dark: "github-dark" },
          });

          return {
            ...file,
            html,
          };
        })
     );

    return (
        <div id="trackercode" >
            <main className=" min-w-full p-8 space-y-6 bg-gray-400">
                {highlightedProjects.map((file) => (
                    <section className=" rounded-md p-4" key={file.id}>
                        <h2 className="font-inter font-bold mb-4">{file.label}</h2>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                          <div
                            className="text-sm overflow-x-auto rounded-md border"
                            dangerouslySetInnerHTML={{ __html: file.html }}
                          />
                          <aside className="rounded-md border bg-[#24292e] p-4">
                            <h3 className="font-inter text-white mb-2 font-semibold">Notes</h3>
                            <p className="whitespace-pre-line break-words text-sm text-white font-inter">
                              {file.notes ?? "No notes added yet for this file."}
                            </p>
                          </aside>
                        </div>
                    </section>
                ))}
            
            </main>
        </div>
    )
}