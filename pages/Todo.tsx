import RTable from '../components/RTable';
import getStores from '../store/generateStores';
import { columnsArray } from '../datatypes/types';
 import { TodoItem } from '@prisma/client';

const
  TodoItemStores = getStores<TodoItem>('/api/public/todoItem/'),
  columns: columnsArray<TodoItem>[] = [
    { name: 'id', getVal: ({ id }) => id },
      { name: 'name', getVal: ({ name }) => name, setVal: name => ({ name}) },
    { name: 'phone', getVal: ({ phone }) => phone, setVal: phone => ({ phone}) },
  ];



export default function Todo() {
  return < RTable<TodoItem> columns={columns} apiStores={TodoItemStores} />;
}