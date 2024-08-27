import { prisma } from "./prisma";
const ITEMS_PER_PAGE = 5;

export const getContacts = async (search: string, current_page: number) => {
  const offset = (current_page - 1) * ITEMS_PER_PAGE;
  try {
    return await prisma.contact.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
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

export const getContactPages = async (search: string) => {
  try {
    const contacts =  await prisma.contact.count({
      where: {
        OR: [{ name: { contains: search.trim(), mode: "insensitive" } }, { phone: { contains: search.replace(/[ ]/gi, "").trim(), mode: "insensitive" } }],
      },
    });
    return Math.ceil(Number(contacts) / ITEMS_PER_PAGE);
  } catch (e) {
    throw new Error("Failed to fetch contacts" + e);
  }
};