"use client";

import React from "react";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Home: React.FC = () => {
  const handleLoginClick = () => {
    toast("Redirecting to Login...", {
      icon: "🔑",
      style: { backgroundColor: "#3b82f6", color: "white"},
    });
  };

  const handleSignupClick = () => {
    toast("Redirecting to Sign Up...", {
      icon: "📝",
      style: { backgroundColor: "#3b82f6", color: "white" },
    });
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-blue-600 shadow-md">
        <div className={`text-white text-3xl ${caveat.className}`}>Corinna</div>
        <div className="flex">
          <Link href="/login">
            <Button
              onClick={handleLoginClick}
              className={`mr-4 bg-white text-2xl text-blue-700 px-6 py-2 rounded-full ${caveat.className} hover:bg-blue-800 shadow-md`}
            >
              Login
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col justify-center items-center flex-1 p-6 text-center">
        <h1 className={`text-4xl font-semibold text-black mb-4 ${caveat.className}`}>Welcome to Corinna</h1>
        <p className="text-lg text-gray-700 -mt-3">
          Your gateway to seamless experiences. Login or sign up to get started!
        </p>

        {/* Avatar */}
        <Avatar className="w-60 h-65 -mb-2 rounded-sm -mt-3">
          <AvatarImage
            src="/10613259_10118.svg" // Replace with your image path
            alt="Illustrative Image"
            className="object-fill w-full h-full rounded-sm"
          />
          <AvatarFallback className="bg-blue-200 text-blue-800">Image</AvatarFallback>
        </Avatar>

        {/* Pricing Cards Section */}
        <div className="flex flex-wrap justify-center gap-6 -mt-5 max-w-screen-lg">
          {/* Pricing Card 1 */}
          <div className="flex-1 max-w-xs p-6 bg-white border border-gray-200 shadow-md rounded-lg text-center transition-transform transform hover:scale-105">
            <h3 className={`text-xl font-semibold text-black ${caveat.className}`}>Pricing Card 1</h3>
            <p className="text-gray-700 mt-2">
              Description for pricing card 1. Offers basic features.
            </p>
            <Button className={`mt-4 text-xl bg-blue-600 text-white px-6 py-2 rounded-full ${caveat.className} hover:bg-blue-700 shadow-md`}>
              Get Started
            </Button>
          </div>

          {/* Pricing Card 2 */}
          <div className="flex-1 max-w-xs p-6 bg-white border border-gray-200 shadow-md rounded-lg text-center transition-transform transform hover:scale-105">
            <h3 className={`text-xl font-semibold text-black ${caveat.className}`}>Pricing Card 2</h3>
            <p className="text-gray-700 mt-2">
              Description for pricing card 2. Offers additional features.
            </p>
            <Button className={`mt-4 text-xl bg-blue-600 text-white px-6 py-2 rounded-full ${caveat.className} hover:bg-blue-700 shadow-md`}>
              Get Started
            </Button>
          </div>

          {/* Pricing Card 3 */}
          <div className="flex-1 max-w-xs p-6 bg-white border border-gray-200 shadow-md rounded-lg text-center transition-transform transform hover:scale-105">
            <h3 className={`text-xl font-semibold text-black ${caveat.className}`}>Pricing Card 3</h3>
            <p className="text-gray-700 mt-2">
              Description for pricing card 3. Offers premium features.
            </p>
            <Button className={`mt-4 bg-blue-600 text-xl text-white px-6 py-2 rounded-full ${caveat.className} hover:bg-blue-700 shadow-md`}>
              Get Started
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-center p-4 text-white shadow-md">
        <p>&copy; 2024 Corinna. All rights reserved.</p>
      </footer>

      {/* Toaster */}
      <Toaster />
    </div>
  );
};

export default Home;
