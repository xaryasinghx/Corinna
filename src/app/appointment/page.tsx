"use client";
import React, { useState } from "react";
import { Caveat } from "next/font/google";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Sidebar from "@/components/main/sidebar";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Dashboard: React.FC = () => {
  const [upcomingBoxes, setUpcomingBoxes] = useState<string[]>([]);

  // Function to add a new upcoming box
  const addUpcomingBox = () => {
    setUpcomingBoxes((prevBoxes) => [...prevBoxes, `Box ${prevBoxes.length + 1}`]);
  };

  return (
    <div>
        <Sidebar/>
    <div className="flex bg-white min-h-screen">
      <div className="flex-1 p-6 white mt-6 ml-64">
        {/* Workflows Section */}
        <div className="border border-gray-200 rounded-lg p-4 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-3xl font-semibold ${caveat.className}`}>
              Appointments
            </h2>
            <button
              onClick={addUpcomingBox}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add
            </button>
          </div>
          <div className="flex justify-center text-center text-gray-700 mb-4">
            All appointments are listed below.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {upcomingBoxes.map((box, index) => (
              <Link href={`/workflows/${box}`} key={index}>
                <div className="text-black font-semibold border border-gray-200 rounded-md p-4 shadow-sm cursor-pointer hover:bg-gray-50">
                  {box}
                  <div className="flex items-center space-x-4 mt-4">
                    <Skeleton className="h-12 w-12 rounded-full bg-blue-100" />
                    <div className="space-y-2 w-full">
                      <Skeleton className="h-4 w-[80%] bg-blue-100" />
                      <Skeleton className="h-4 w-[90%] bg-blue-100" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;