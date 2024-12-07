"use client";

import React, { useState } from "react";
import { Toaster } from "sonner";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip"; // Ensure TooltipProvider is imported from Radix
import { Button } from "@/components/ui/button"; // ShadCN button and progress components
import { Progress } from "@/components/ui/progress"; // ShadCN button and progress components
import Sidebar from "@/components/main/sidebar";

const Dashboard: React.FC = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);

    const handleSignOut = () => {
        alert("Sign out clicked!");
    };

    return (
        <TooltipProvider> {/* Wrap the entire component in TooltipProvider */}
            <div className="flex h-screen">
                {/* Sidebar */}
                <div
                    className={`w-[${sidebarWidth}px] bg-white shadow-lg flex flex-col overflow-auto`}
                >
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div
                    className="flex-1 flex flex-col gap-6 p-6 bg-white rounded-lg shadow-lg"
                    style={{ marginLeft: `${sidebarWidth}px` }} // Adjust the left margin
                >
                    {/* Containers Section */}
                    <div className="flex flex-col gap-6">
                        {/* Top Horizontal Containers */}
                        <div className="flex gap-6">
                            {[1, 2, 3, 4].map((number) => (
                                <div
                                    key={number}
                                    className="flex-1 h-40 bg-blue-100 rounded-lg shadow-md flex items-center justify-center"
                                >
                                    <h3 className="text-lg font-semibold text-blue-800">Text {number}</h3>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Horizontal Container */}
                        <div className="flex">
                            {/* Status Bars Section */}
                            <div className="w-1/5 flex flex-col gap-6 mr-6">
                                {[1, 2, 3].map((number) => (
                                    <div key={number}>
                                        <h4 className="text-sm text-blue-600 mb-1">Status bar {number}</h4>
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
                            <div className="flex-1 h-40 bg-blue-100 rounded-lg shadow-md flex items-center justify-center">
                                <h3 className="text-lg font-semibold text-blue-800">Transaction Box Like Bill Pro</h3>
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
