import { CreateButton } from "@/components/button";
import Search from "@/components/contacts/search";
import Table from "@/components/contacts/table";

export default function Contacts() {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <Table />
    </div>
  )
}
