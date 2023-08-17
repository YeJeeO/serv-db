import { useStore } from '@nanostores/react';
import getStores from '../store/generateStores';
import columns from '../includes/columns'
import EditableComponent from '../components/EditableComponent';

const
  usersStores = getStores('/api/public/user/');

export default function Home() {

  const
    { fetcherStore, addStore, delStore, updateStore } = usersStores,
    { data, loading, error } = useStore(fetcherStore),
    { mutate: onAdd } = useStore(addStore),
    { mutate: onDelete } = useStore(delStore),
    { mutate: onEdit } = useStore(updateStore);

  // console.log('data=', data);

  if (error) return <>Error={error}</>;
  if (data) return <EditableComponent
    columns={columns}
    data={data}
    onAdd={onAdd}
    onDelete={onDelete}
    onEdit={onEdit}
  />;
  if (loading) return <div className='spinner'></div>;
}