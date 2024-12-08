"use client";

import React, { useState } from "react";
import { Toaster } from "sonner";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip"; // Ensure TooltipProvider is imported from Radix
import { Progress } from "@/components/ui/progress"; // ShadCN button and progress components
import Sidebar from "@/components/main/sidebar";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';
import { Plus } from "lucide-react";

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });


const Dashboard: React.FC = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);

    const handleSignOut = () => {
        alert("Sign out clicked!");
    };
    const [recentItems, setRecentItems] = useState(["Item 1", "Item 2"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to add a new recent item
  const addRecentItem = () => {
    setRecentItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  };

    return (
        <TooltipProvider> {/* Wrap the entire component in TooltipProvider */}
        <Sidebar />
            <div className="flex h-screen">
                {/* Sidebar */}

                {/* Main Content */}
                <div
                    className="flex-1 flex flex-col gap-6 p-6 bg-white rounded-lg shadow-lg mt-6 md:ml-64"
                >
                    {/* Containers Section */}
                    <div className="flex flex-col gap-6">
                        {/* Top Horizontal Containers */}
                        <div className="flex gap-6">
                            {[1, 2, 3, 4].map((number) => (
                                <div
                                    key={number}
                                    className="flex-1 h-40 bg-blue-100 rounded-lg shadow-md  text-center p-4 space-y-12"
                                >
                                    <div className="flex justify-between mt-4">
                                    <h3 className="text-lg font-semibold text-blue-800">Text {number}</h3>
                                    <h3 className="text-lg font-semibold text-blue-800">Text {number}</h3>
                                    </div>
                                    <h3 className="text-lg font-semibold text-blue-800">Text {number}</h3>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Horizontal Container */}
                        <div className="flex mt-8">
                            {/* Status Bars Section */}
                            <div className="w-2/5 flex flex-col gap-6 mr-6 shadow-md rounded-md justify-center px-6 h-[325px] mt-4">
                                <span className={`${caveat.className} text-3xl text-blue-600 text-center -mt-24 font-semibold`}>Status bars</span>
                                {[1, 2, 3].map((number) => (
                                    <div key={number}>
                                        <h4 className="text-sm text-gray-600 mb-1">Status bar {number}</h4>
                                        <Progress
                                            value={number * 33}
                                            className="h-2 rounded-md"
                                            color="blue"
                                        /*size="lg"*/
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Additional Content */}
                            <div className="flex-1 h-40 flex items-center justify-center h-auto p-4">
                                {/* Recent Section */}
                                <div className="w-full h-[325px] bg-white shadow rounded-md p-2">
                                    <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl text-blue-600 font-semibold">
                                        <span className={`${caveat.className}`}>Recent</span>
                                    </h2>
                                    {/* Plus Button */}
                                    <button
                                        onClick={addRecentItem}
                                        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
                                    >
                                        <Plus size={16} />
                                    </button>
                                    </div>
                                    {/* Scrollable Recent Items */}
                                    <div className="space-y-4 overflow-y-auto h-[270px] -mt-2">
                                    {recentItems.map((item, index) => (
                                        <div key={index} className="p-2 bg-blue-50 rounded-md">
                                        {item}
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster />
            </div>
        </TooltipProvider>
    );
};

export default Dashboard;
