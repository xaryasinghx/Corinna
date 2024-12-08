"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon, Settings2 } from "lucide-react";
import Link from "next/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    alert("Password changed successfully!");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordError("");
  };

  return (
    <div className="p-8 pt-20 space-y-6 max-w-3xl mx-auto">
      {/* Dark Mode Toggle */}
      <Card className="flex justify-between p-6 bg-white dark:bg-neutral-800 shadow-lg rounded-xl">
        <h2 className={`text-3xl font-bold text-gray-900 dark:text-white ${caveat.className}`}>
          Theme Settings
        </h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
          <Link href="/settings/domain-settings">
            <Button
              className={`text-xl bg-blue-600 text-white hover:bg-blue-700 rounded-md py-2 transition duration-300 ${caveat.className}`}
            > 
              Domain Settings <Settings2/>
            </Button>
          </Link>
            <Button
              variant="link"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
              onClick={handleToggleDarkMode}
            >
              {darkMode ? (
                <Moon className="w-6 h-6 text-yellow-500" />
              ) : (
                <Sun className="w-6 h-6 text-yellow-500" />
              )}
            </Button>
          </div>
        </div>
      </Card>

      {/* Password Change Form */}
      <Card className="p-6 bg-white dark:bg-neutral-800 shadow-lg rounded-xl">
        <h2 className={`text-3xl font-bold text-gray-900 dark:text-white ${caveat.className}`}>
          Change Password
        </h2>
        <div className="space-y-4 mt-4">
          <div>
            <label
              htmlFor="oldPassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Old Password
            </label>
            <Input
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full mt-2 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-md shadow-sm"
              placeholder="Enter your old password"
            />
          </div>

          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              New Password
            </label>
            <Input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full mt-2 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-md shadow-sm"
              placeholder="Enter your new password"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Confirm New Password
            </label>
            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-2 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-md shadow-sm"
              placeholder="Confirm your new password"
            />
          </div>

          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

          <Button
            className={`w-full mt-4 bg-blue-500 text-xl text-white hover:bg-blue-600 rounded-md py-2 transition duration-300 ${caveat.className}`}
            onClick={handleChangePassword}
          >
            Change Password
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
