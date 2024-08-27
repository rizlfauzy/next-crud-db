import moment from 'moment';
import { getContacts } from '@/utils/contacts';
import { EditButton, DeleteButton } from '@/components/button';
import { format_phone_number } from '@/utils/format';

export default async function Table({ search = '', current_page = 1 }: { search?: string;current_page?: number }) {
  const contatcs = await getContacts(search, current_page);
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {contatcs.map((contact, i) => (
          <tr key={contact.id} className="bg-white border-b">
            <td className="py-3 px-6">{current_page > 1 ? 5 + i + 1 : i + 1}</td>
            <td className="py-3 px-6">{contact.name}</td>
            <td className="py-3 px-6">{format_phone_number(contact.phone)}</td>
            <td className="py-3 px-6">{moment(contact.createdAt).format("YYYY-MM-DD HH:mm")}</td>
            <td>
              <div className="flex gap-1 items-center justify-center py-3">
                <EditButton id={contact.id} />
                <DeleteButton id={contact.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
