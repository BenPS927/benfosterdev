import DesktopProjectsPage from "@/app/components/projects/desktop-projects-page"
import MobileProjectsPage from "@/app/components/projects/mobile-projects-page"

export default function ProjectsPage() {
    return (
        <div>
            <div className="hidden lg:block">
                <DesktopProjectsPage />
            </div>
            <div className="block lg:hidden">
                <MobileProjectsPage />
            </div>
        </div>
    )
}