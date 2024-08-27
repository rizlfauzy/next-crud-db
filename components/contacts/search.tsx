"use client";
import { IoSearch } from "react-icons/io5";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {
  const search_params = useSearchParams();
  const path = usePathname();
  const {replace} = useRouter();

  // create function debounce
  const debounce = (fn: Function, delay: number) => {
    let timer: NodeJS.Timeout;
    return function (...args: any) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(search_params);
    params.set("page", "1");
    if (e.target.value) params.set("search", e.target.value);
    else params.delete("search");
    replace(`${path}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 ">
      <input type="text" name="search" id="search" defaultValue={search_params.get("search")?.toString()} className="w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm" placeholder="Search..." onChange={handleSearch} />
      <IoSearch className="absolute top-2 left-3 h-5 w-5 text-gray-500" />
    </div>
  );
}
