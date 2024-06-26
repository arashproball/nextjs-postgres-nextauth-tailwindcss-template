'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  name: string | null;
  username: string | null;
  email: string | null;
}

export function UsersTable({
  users,
  offset
}: {
  users: User[];
  offset: number | null;
}) {
  const router = useRouter();

  function onClick() {
    router.replace(`/?offset=${offset}`);
  }

  return (
    <>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">نام</TableHead>
              <TableHead className="hidden md:table-cell">توضیحات</TableHead>
              <TableHead className="hidden md:table-cell">دسته</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </form>
      {offset !== null && (
        <Button
          className="mt-4 w-40"
          variant="secondary"
          onClick={() => onClick()}
        >
          Next Page
        </Button>
      )}
    </>
  );
}

function UserRow({ user }: { user: User }) {
  const userId = user.id;

  return (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell className="hidden md:table-cell">{user.email}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell className="flex justify-between">
        <Button className="" size="sm" variant="outline" disabled>
          Edit
        </Button>
        <Button className="" size="sm" variant="outline" disabled>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
