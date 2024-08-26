import { prisma } from "./prisma";

export const getContacts = async (search:string, current_page:number) => {
  try {
    return await prisma.contact.findMany({
      where: {
        OR: [
          { name: { contains: search.trim(), mode: "insensitive" } },
          { phone: { contains: search.replace(/[ ]/gi, '').trim(), mode: "insensitive" } }
        ]
      }
    });
  } catch (e) {
    throw new Error("Failed to fetch contacts" + e);
  }
};

export const getContactById = async (id: string) => {
  try {
    return await prisma.contact.findUnique({ where: { id } });
  } catch (e) {
    throw new Error("Failed to fetch contacts" + e);
  }
};