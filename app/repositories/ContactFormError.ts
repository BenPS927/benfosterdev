import { prisma } from "@/app/lib/prisma";

export async function ContactFormError(message: string) {
    const data = {
        webhook: "Failed",
        receive_email: "N/A",
        send_email: "N/A",
        notes: message,
    };

    console.log(data);

    const result = await prisma.contact_form_debug.create({
        data,
    }); 
    console.log(result)
}