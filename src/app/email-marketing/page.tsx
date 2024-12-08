'use client';

import React from 'react';
import Sidebar from "@/components/main/sidebar";
import { Caveat } from "next/font/google";
import { Button } from '@/components/ui/button';

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const EmailMarketing: React.FC = () => {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow md:ml-64 p-6">
        <div className="flex space-x-8">
          {/* Marketing Section */}
          <div className="w-1/2 space-y-6 h-[93vh] overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 py-4">
              <h2 className={`text-3xl text-center font-semibold text-blue-600 dark:text-white ${caveat.className}`}>Marketing</h2>
            </div>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i}>
                <label
                  htmlFor={`marketingText${i + 1}`}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Marketing Text {i + 1}
                </label>
                <textarea
                  id={`marketingText${i + 1}`}
                  className="w-full min-h-[100px] bg-blue-50 mt-2 p-4 rounded-md shadow-sm"
                  placeholder="Enter marketing text"
                />
              </div>
            ))}
          </div>

          {/* Campaigns Section */}
          <div className="w-1/2 space-y-6 h-[93vh] overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 py-4">
              <h2 className={`text-3xl text-center font-semibold text-blue-600 dark:text-white ${caveat.className}`}>Campaigns</h2>
            </div>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i}>
                <label
                  htmlFor={`campaignText${i + 1}`}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Campaign{i + 1}
                </label>
                <div className='w-full h-auto bg-blue-50  mt-2 p-4 rounded-md shadow-sm'> 
                  <div className='flex text-black justify-between'>
                    <p>Text</p>
                    <p>Text</p>
                  </div>
                  <div className='flex text-black justify-between mt-2'>
                    <div className='mt-2'>Text</div>
                    <div className='flex space-x-2 -mr-2'>
                      <Button>click</Button>
                      <Button>click</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
