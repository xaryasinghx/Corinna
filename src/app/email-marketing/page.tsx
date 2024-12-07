'use client';

import React, { useState } from 'react';
import Sidebar from "@/components/main/sidebar";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const EmailMarketing: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow ml-[256px] p-8">
        <div className="flex space-x-8">
          {/* Marketing Section */}
          <div className="w-1/2 space-y-6">
            <h2 className={`text-2xl font-semibold text-gray-900 dark:text-white ${caveat.className}`}>Marketing</h2>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i}>
                <label
                  htmlFor={`marketingText${i + 1}`}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Marketing Text {i + 1}
                </label>
                <textarea
                  id={`marketingText${i + 1}`}
                  className="w-full mt-2 p-4 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-md shadow-sm"
                  placeholder="Enter marketing text"
                />
              </div>
            ))}
          </div>

          {/* Campaigns Section */}
          <div className="w-1/2 space-y-6">
            <h2 className={`text-2xl font-semibold text-gray-900 dark:text-white ${caveat.className}`}>Campaigns</h2>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i}>
                <label
                  htmlFor={`campaignText${i + 1}`}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Campaign Text {i + 1}
                </label>
                <textarea
                  id={`campaignText${i + 1}`}
                  className="w-full mt-2 p-4 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-md shadow-sm"
                  placeholder="Enter campaign text"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
