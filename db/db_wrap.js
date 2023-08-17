import { PrismaClient } from '@prisma/client';

const
  prisma = new PrismaClient();


export async function getAllUsers(){
  return await prisma.user.findMany({
    include: { name: true, phone: true }
  });
}

export async function addNewUser({ name, phone, ...user }) {
  return await prisma.user.create({
    data: {
      ...user,
      phone: {
        create: { ...phone }
      },
      name: {
        create: { ...name }
      }
    },
    include: { phone: true,name: true }
  });
}


/**
 * 
 * @param  id {number}
 * @returns 
 */
export async function deleteUser(id) {
  return await prisma.user.delete({
    where: { id }
  });
}