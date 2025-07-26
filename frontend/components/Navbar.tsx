"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/submit", label: "Submit Trip" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo or Branding */}
          <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700">
            Trip Planner
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium ${
                  pathname === href ? "text-blue-600" : "text-gray-600"
                } hover:text-blue-500 transition duration-150 ease-in-out`}
              >
                {label}
              </Link>
            ))}
          </div>

         
        </div>
      </div>
    </nav>
  );
}