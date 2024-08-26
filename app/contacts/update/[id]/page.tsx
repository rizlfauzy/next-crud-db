import UpdateForm from "@/components/contacts/update-form";
import { getContactById } from "@/utils/contacts";
import { notFound } from "next/navigation";

export default async function UpdateContactPage({ params }: { params: { id: string } }) {
  const contact = await getContactById(params.id);
  if (!contact) return notFound();

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update Contact</h1>
      <UpdateForm cont={contact} />
    </div>
  );
}
