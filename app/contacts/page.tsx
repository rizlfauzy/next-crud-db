import { CreateButton } from "@/components/button";
import Search from "@/components/contacts/search";
import Table from "@/components/contacts/table";
import Pagination from "@/components/contacts/pagination";
import { getContactPages } from "@/utils/contacts";

export default async function Contacts({ searchParams }: { searchParams?: { search?: string; page?: string } }) {
  const search = searchParams?.search || "";
  const current_page = Number(searchParams?.page) || 1;
  const total_pages = await getContactPages(search);

  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <Table search={search} current_page={current_page} />
      <div className="flex justify-center mt-4">
        <Pagination total_pages={total_pages} />
      </div>
    </div>
  );
}
