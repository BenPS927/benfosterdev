import { prisma } from "@/app/lib/prisma";

export async function ContactFormError(message: string) {
  await prisma.contact_form_debug.create({
    data: {
      webhook: "Success",
      receive_email: "Success",
      send_email: "Success",
      notes: message,
    },
  });
}
