'use client'; // Ensure this is a client component

import React from 'react';
import Navbar from '@/components/main/navbar'; // Import Navbar component
import Sidebar from '@/components/main/sidebar'; // Import Sidebar component
import Link from "next/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const DomainSettings: React.FC = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900 ml-[256px]">
                {/* Navbar */}
                <Navbar />

                {/* Main Content */}
                <div className="p-8 space-y-12">

                    {/* Domain Settings Section */}
                    <div className="space-y-12">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <h2 className={`${caveat.className} text-3xl font-semibold text-gray-800 dark:text-gray-100 font-[Caveat] mb-6`}>
                                Domain Settings
                            </h2>

                            {/* Domain Name Section */}
                            <div className="space-y-6">
                                <label className="block text-xl font-medium text-gray-700 dark:text-gray-300">
                                    Domain Name
                                </label>
                                <textarea
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                    rows={4}
                                    placeholder="Enter your domain name here..."
                                ></textarea>
                                <div className="flex space-x-4">
                                    <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition">
                                        Copy Snippet
                                    </button>
                                    <button className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md transition">
                                        Paste Snippet
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* URL Generation Section */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <label className="block text-xl font-medium text-gray-700 dark:text-gray-300">
                                Generated URL
                            </label>
                            <div className="flex items-center space-x-4 p-4 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <span className="flex-1 text-gray-800 dark:text-gray-200">
                                    https://example.com/generated-url
                                </span>
                                <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition">
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Chat Settings Section */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className={`${caveat.className} text-3xl font-semibold text-gray-800 dark:text-gray-100 font-[Caveat] mb-6`}>
                            Chat Settings
                        </h2>

                        {/* Change Icon Section */}
                        <div className="flex items-start justify-between">
                            {/* Left Side */}
                            <div className="flex-1 space-y-6">
                                <label className="block text-xl font-medium text-gray-700 dark:text-gray-300">
                                    Change Icon
                                </label>
                                <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition">
                                    Upload
                                </button>
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                        placeholder="Enter first input..."
                                    />
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                        placeholder="Enter second input..."
                                    />
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="flex flex-col items-center">
                                {/* Icon Preview */}
                                <div className="h-20 w-20 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4 shadow-md">
                                    <img
                                        src="https://via.placeholder.com/48"
                                        alt="Icon"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                {/* Save and Delete Buttons */}
                                <div className="flex space-x-4">
                                    <button className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md transition">
                                        Save
                                    </button>
                                    <button className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md transition">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DomainSettings;
