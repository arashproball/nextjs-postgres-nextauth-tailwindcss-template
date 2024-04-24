import { getUsers } from '@/lib/db';
import { UsersTable } from './users-table';
import { Search } from './search';

interface User {
  id: number;
  name: string | null;
  username: string | null;
  email: string | null;
}

const users: User[] = [
  { id: 1, name: 'gholi', email: 'gholi@hashem.com', username: 'gholi' },
  { id: 2, name: 'gholi', email: 'gholi@hashem.com', username: 'gholi' },
  { id: 3, name: 'gholi', email: 'gholi@hashem.com', username: 'gholi' },
  { id: 4, name: 'gholi', email: 'gholi@hashem.com', username: 'gholi' },
  { id: 5, name: 'gholi', email: 'gholi@hashem.com', username: 'gholi' },
  { id: 6, name: 'gholi', email: 'gholi@hashem.com', username: 'gholi' },
  { id: 7, name: 'gholi', email: 'gholi@hashem.com', username: 'gholi' },
  { id: 8, name: 'gholi', email: 'gholi@hashem.com', username: 'gholi' },
  { id: 9, name: 'gholi', email: 'gholi@hashem.com', username: 'gholi' }
];

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
      </div>
      <div className="w-full mb-4">
        <Search value={searchParams.q} />
      </div>
      <UsersTable users={users} offset={10} />
    </main>
  );
}
