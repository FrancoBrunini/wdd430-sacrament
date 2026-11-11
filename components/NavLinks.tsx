'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/meetings', label: 'Meetings' },
  ];

  return (
    <nav className="flex space-x-6 py-3 px-6 bg-white border-b shadow-sm">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`font-medium transition-colors ${
              isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}