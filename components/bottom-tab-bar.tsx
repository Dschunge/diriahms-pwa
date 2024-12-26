"use client";

import { useState } from "react";
import { Home, Search, Bell, User } from "lucide-react";
import Link from "next/link";

const tabs = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Search", icon: Search, href: "/search" },
  { name: "Notifications", icon: Bell, href: "/notifications" },
  { name: "Profile", icon: User, href: "/profile" },
];

export function BottomTabBar() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe">
      <ul className="flex justify-around">
        {tabs.map((tab) => (
          <li key={tab.name} className="flex-1">
            <Link
              href={tab.href}
              className={`flex flex-col items-center pt-2 pb-1 text-xs ${
                activeTab === tab.name ? "text-blue-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              <tab.icon className="h-6 w-6 mb-1" />
              {tab.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
