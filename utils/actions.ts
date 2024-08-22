"use server";

export async function SaveContact(form_data: FormData) {
  const data = Object.fromEntries(form_data.entries());
  console.log(data);
}