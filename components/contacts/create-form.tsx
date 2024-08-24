"use client";

import { SaveContact } from "@/utils/actions";
import { useState, useCallback } from "react";
import { useFormState } from "react-dom";
import { format_phone_number } from "@/utils/format";

export default function CreateForm() {
  const [contact, setContact] = useState({ name: "", phone: "" });
  const [state, formAction] = useFormState (SaveContact, null);

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
          type="text"
          value={contact.name}
          name="name"
          id="name"
          placeholder="Full Name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={handleChange}
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">
            {state?.Error?.name && state.Error.name}
          </p>
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
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">
        Save
      </button>
    </form>
  );
}
