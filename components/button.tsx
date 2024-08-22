import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";

export function CreateButton() {
  return (
    <Link href="/contacts/create" className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
      <IoAddSharp size={20} />
      Create
    </Link>
  )
}

export function EditButton() {
  return (
    <Link href="/contacts/update" className="rounded-sm border p-1 hover:bg-gray-100">
      <IoPencil size={20} />
    </Link>
  );
}

export function DeleteButton() {
  return (
    <button className="rounded-sm border p-1 hover:bg-gray-100">
      <IoTrashOutline size={20} />
    </button>
  );
}