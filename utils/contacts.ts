import { prisma } from "./prisma";

export const getContacts = async () => {
  try {
    return await prisma.contact.findMany();
  } catch (e) {
    throw new Error("Failed to fetch contacts" + e);
  }
};
