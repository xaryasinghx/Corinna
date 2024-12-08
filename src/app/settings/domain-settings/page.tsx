'use client'; // Ensure this is a client component

import React, { useState } from 'react';
import Navbar from '@/components/main/navbar'; // Import Navbar component
import Sidebar from '@/components/main/sidebar'; // Import Sidebar component
import { Caveat } from "next/font/google";
import TabsDemo from '@/components/main/settingdemopart';

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const DomainSettings: React.FC = () => {
  const [generatedUrl, setGeneratedUrl] = useState("https://example.com/generated-url");
  const [avatarUrl, setAvatarUrl] = useState("https://via.placeholder.com/48");
  const [isImageSelected, setIsImageSelected] = useState(false);

  // Handle copying the URL
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedUrl);
    alert("URL copied to clipboard!");
  };

  // Handle file upload
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setAvatarUrl(reader.result as string); // Set avatar URL to the uploaded image
        setIsImageSelected(true);
      };
      
      reader.readAsDataURL(file); // Convert image to base64 URL
    }
  };

  // Handle saving the image (you can add logic to save the image as required)
  const handleSave = () => {
    alert("Image saved!");
  };

  // Handle deleting the image
  const handleDelete = () => {
    setAvatarUrl("https://via.placeholder.com/48"); // Reset to default avatar
    setIsImageSelected(false);
  };

  return (
    <div className="h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col dark:bg-gray-900 md:ml-64">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="p-8 space-y-6">

          {/* Domain Settings Section */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md">
              <h2 className={`${caveat.className} text-3xl font-semibold text-gray-800 dark:text-gray-100 font-[Caveat] mb-2`}>
                Domain Settings
              </h2>

              {/* Domain Name Section */}
              <div className="space-y-2">
                <label className="block text-md font-medium text-gray-700 dark:text-gray-300">
                  Domain Name
                </label>
                <div className="flex items-center justify-between space-x-4">
                  <textarea
                    className="w-3/5 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    rows={1}
                    placeholder="Enter your domain name here..."
                  ></textarea>
                  <div className="flex space-x-4">
                    <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition">
                      Copy Snippet
                    </button>
                    <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition">
                      Paste Snippet
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* URL Generation Section */}
            <div className="bg-white dark:bg-gray-800 p-2 px-4 rounded-lg shadow-md">
              <label className="block text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                Generated URL
              </label>
              <div className='flex justify-between'>
              <div className="flex items-center space-x-2 px-4 py-2 md:w-3/5 w-4/5 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="flex-1 text-gray-800 dark:text-gray-200">
                  {generatedUrl}
                </span>
              </div>
              <button
                  onClick={handleCopy}
                  className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
                >
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

            {/* Avatar and Upload Section */}
            <div className="flex grid grid-cols-1 md:grid-cols-2 justify-between items-center space-x-8 px-16">
              {/* Avatar Section (Left side) */}
              <div className="flex flex-col items-center md:-ml-12">
                <h1 className='text-xl font-semibold mb-2 '>Change icon</h1>
                <div className="h-24 w-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4 shadow-md">
                  <img
                    src={avatarUrl}
                    alt="Avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="file-upload"
                  onChange={handleUpload}
                />
                <label htmlFor="file-upload" className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md cursor-pointer transition">
                  Upload
                </label>
                {/* Input Fields */}
                <div className="space-y-4 mt-6">
                <input
                    type="text"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    placeholder="Enter first input..."
                />
                <input
                    type="text"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    placeholder="Enter second input..."
                />
                </div>
              </div>

              {/* Image Section (Right side, Fixed width) */}
              <div className="flex-shrink-0 md:w-7/12 w-4/5 space-y-4 md:-mr-8 -md:mt-6 mt-2">
                <div className="h-56 w-full bg-gray-100 dark:bg-gray-700 rounded-md shadow-md mb-4 md:ml-28">
                  {/* Image preview or placeholder */}
                </div>
                <div className="flex justify-center space-x-4 md:ml-32">
                  <button onClick={handleSave} className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition">
                    Save
                  </button>
                  <button onClick={handleDelete} className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TabsDemo/>
      </div>
    </div>
  );
};

export default DomainSettings;
