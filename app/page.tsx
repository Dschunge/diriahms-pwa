"use client";

import { useState, useEffect } from "react";
import { subscribeUser, unsubscribeUser, sendNotification } from "./actions";
import { BottomTabBar } from "@/components/bottom-tab-bar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to Your PWA</h1>
        <p>This is the main content area of your Progressive Web App.</p>
      </main>
      <BottomTabBar />
    </div>
  );
}
