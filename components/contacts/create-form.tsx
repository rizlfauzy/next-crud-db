import { SaveContact } from "@/utils/actions";

export default function CreateForm() {
  return (
    <form action={SaveContact}>
      <div className="mb-5">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Full Name
        </label>
        <input type="text" name="name" id="name" placeholder="Full Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
      </div>
      <div className="mb-5">
        <label htmlFor="phone" className="block text-sm font-medium text-white">
          Phone Number
        </label>
        <input type="text" name="phone" id="phone" placeholder="Phone Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">Save</button>
    </form>
  );
}
