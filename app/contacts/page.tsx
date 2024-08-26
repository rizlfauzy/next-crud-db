import { CreateButton } from "@/components/button";
import Search from "@/components/contacts/search";
import Table from "@/components/contacts/table";

export default function Contacts({ searchParams }: { searchParams?: { search?: string; page?: string } }) {
  const search = searchParams?.search || "";
  const current_page = Number(searchParams?.page) || 1;

  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <Table search={search} current_page={current_page} />
    </div>
  )
}
