"use client";

import { useState, useRef,useCallback, useLayoutEffect } from "react";
import { SubmitButton } from "@/components/button";
import Link from "next/link";
import { format_phone_number } from "@/utils/format";
import type { Contact } from "@prisma/client";
import { UpdateContact } from "@/utils/actions";
import { useFormState } from "react-dom";

export default function UpdateForm({ cont }: { cont: Contact }) {
  const updateContactBindId = UpdateContact.bind(null, cont.id);
  const [state, formAction] = useFormState(updateContactBindId, null);
  const [contact, setContact] = useState({ name: cont.name, phone: format_phone_number(cont.phone) });
  const input_nama_ref = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    input_nama_ref.current?.focus();
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: name == "phone" ? format_phone_number(value) : value }));
  }, []);
  return (
    <form action={formAction}>
      <div className="mb-5">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Full Name
        </label>
        <input
          ref={input_nama_ref}
          type="text"
          value={contact.name}
          name="name"
          id="name"
          placeholder="Full Name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={handleChange}
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.name && state.Error.name}</p>
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="phone" className="block text-sm font-medium text-white">
          Phone Number
        </label>
        <input
          type="text"
          value={contact.phone}
          name="phone"
          id="phone"
          placeholder="Phone Number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={handleChange}
        />
        <div id="phone-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.phone && state.Error.phone}</p>
        </div>
      </div>
      <div id="message-error" aria-live="polite" aria-atomic="true">
        <p className="mt-2 text-sm text-red-500">{state?.message}</p>
      </div>
      <SubmitButton label="update" />
      <Link href="/contacts" className="text-white bg-gray-400 hover:bg-gray-700 font-medium rounded-sm text-sm w-full px-5 py-3 text-center inline-block mt-5">
        Back
      </Link>
    </form>
  );
}
