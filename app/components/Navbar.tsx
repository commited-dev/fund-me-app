import Link from 'next/link';
import Image from 'next/image';
import { auth } from '@/auth';
import SignIn from '@/app/components/sign-in';
import SignOut from '@/app/components/sign-out';

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={40} />
        </Link>
        <div className="flex items-center gap-5 text-blue-600">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <SignOut />

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <SignIn />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
