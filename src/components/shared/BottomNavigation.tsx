"use client";

import { Home, MessageCircle, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "chat", label: "Chat", icon: MessageCircle, href: "/chat" },
  { id: "profile", label: "Profile", icon: User, href: "/profile" },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 rounded-t-4xl border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-md">
        <nav className="flex">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = pathname === tab.href;

            return (
              <Link
                key={tab.id}
                href={tab.href}
                className={`flex flex-1 flex-col items-center justify-center px-2 py-3 transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon className="mb-1 h-6 w-6" />
                <span className="text-xs font-medium">{tab.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
