import TBody from '@/components/EditableTable/TBody';
import { columns } from '@/datatypes/tablebd';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient;

async function getClients() {
  return await prisma.character.findMany();
}

export default async function RnM() {
  const clients = await getClients();
  return <>
    <h1>DS</h1>
    <table>
      <TBody rows={clients} columns={columns} />
    </table>
  </>;
}