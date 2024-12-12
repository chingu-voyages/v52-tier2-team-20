import Link from 'next/link';
import NavLinks from './nav-links';
import Logo from './logo';

export default function SideNav() {
  return (
    <div className="flex h-full bg-nav-bg flex-col px-3 py-4 md:px-2">
      <Link className="mb-2 flex h-72 items-end justify-start rounded-md bg-nav-bg p-4 md:h-40"
        href="/admin/dashboard">
        <div className="w-72 text-white md:w-40">
          <Logo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-nav-bg md:block"></div>
        <form>
          <Link className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-nav-bg p-3 text-sm font-medium hover:bg-nav-bg-hover text-white md:flex-none md:justify-start md:p-2 md:px-3" href={'/admin/login'}>
            <div className="hidden md:block">Sign Out</div>
          </Link>
        </form>
      </div>
    </div>
  );
}
