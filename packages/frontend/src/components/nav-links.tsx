import {
  CalendarIcon,
  HomeIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Overview', href: '/admin/dashboard', icon: HomeIcon },
  { name: 'Scheduling', href: '/admin/dashboard/scheduling', icon: CalendarIcon },
  {
    name: 'Settings',
    href: '/admin/dashboard/settings',
    icon: Cog8ToothIcon,
  },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-nav-bg p-3 text-sm font-medium hover:bg-nav-bg-hover text-white md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
