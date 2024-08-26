"use server";
import { z } from "zod";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Contact = {
  name: string;
  phone: string;
};

const ContactSchema = z.object({
  name: z.string().min(6),
  phone: z.string().min(11),
});

export async function SaveContact(prev_state: any,form_data: FormData) {
  const data: Contact = Object.fromEntries(form_data.entries()) as Contact;
  data.phone = data.phone.replace(/[ ]/gi, "");
  const validated_data = ContactSchema.safeParse(data);
  if (!validated_data.success) return { Error: validated_data.error.flatten().fieldErrors };
  try {
    await prisma.contact.create({ data: validated_data.data });
    // return { error: false, message: "Contact saved successfully" };
  } catch (error) {
    return { message: "Failed to save contact", error: true };
  }
  revalidatePath("/contacts");
  redirect("/contacts");
}

export async function UpdateContact(id:string, prev_state: any,form_data: FormData) {
  const data: Contact = Object.fromEntries(form_data.entries()) as Contact;
  data.phone = data.phone.replace(/[ ]/gi, "");
  const validated_data = ContactSchema.safeParse(data);
  if (!validated_data.success) return { Error: validated_data.error.flatten().fieldErrors };
  try {
    await prisma.contact.update({ where: { id }, data: validated_data.data });
    // return { error: false, message: "Contact updated successfully" };
  } catch (error) {
    return { message: "Failed to update contact", error: true };
  }
  revalidatePath("/contacts");
  redirect("/contacts");
}

export async function DeleteContact(id: string) {
  try {
    await prisma.contact.delete({ where: { id } });
    // return { error: false, message: "Contact deleted successfully" };
  } catch (error) {
    return { message: "Failed to delete contact", error: true };
  }
  revalidatePath("/contacts");
}