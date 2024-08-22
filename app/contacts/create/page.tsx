import CreateForm from "@/components/contacts/create-form";

export default function CreateContactPage() {
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Add New Contact</h1>
      <CreateForm />
    </div>
  )
}
