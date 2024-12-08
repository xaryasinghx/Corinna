"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Caveat } from "next/font/google";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const TabsDemo: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("account");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };
  const [upcomingBoxes, setUpcomingBoxes] = useState<string[]>([]);

  // Function to add a new upcoming box
  const addUpcomingBox = () => {
    setUpcomingBoxes((prevBoxes) => [...prevBoxes, `Box ${prevBoxes.length + 1}`]);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const handleSubmit = () => {
    console.log("Input 1:", inputOne);
    console.log("Input 2:", inputTwo);
    closeDialog();
  };

  return (
    <div>
    <div className="flex justify-center items-start"> {/* Center horizontally and optionally vertically */}
      <div className="w-[400px]">
        {/* Tabs List */}
        <div className="grid w-full grid-cols-2">
          <button
            className={`py-2 px-4 text-center font-semibold ${
              selectedTab === "account"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => handleTabClick("account")}
          >
            Account
          </button>
          <button
            className={`py-2 px-4 text-center font-semibold ${
              selectedTab === "password"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => handleTabClick("password")}
          >
            Password
          </button>
        </div>

        {/* Account Tab Content */}
        {selectedTab === "account" && (
          <div className="mt-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
          </div>
        )}

        {/* Password Tab Content */}
        {selectedTab === "password" && (
          <div className="mt-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Helpdesk</h3>
              <p className="text-gray-600 mb-4">
                Resolve your any query here we will get back to you asap
              </p>
              <div className="space-y-1">
                <div>
                  <label htmlFor="current" className="block text-lg text-gray-700">
                    Question
                  </label>
                  <textarea
                    id="current"
                    rows={1}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="new" className="block text-lg text-gray-700">
                    Answer
                  </label>
                  <textarea
                    id="new"
                    rows={1}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button className="mt-4 w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    <div className="flex bg-white min-h-screen">
      <div className="flex-1 p-6 white mt-6 md:ml-64">
        {/* Workflows Section */}
        <div className="border border-gray-200 rounded-lg p-4 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-3xl font-semibold ${caveat.className}`}>
              All products
            </h2>
            <h2 className={`text-3xl font-semibold ${caveat.className}`}>
              Live
            </h2>
            <div>
              {/* Button to trigger dialog */}
              <button
                onClick={openDialog}
                className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Open Dialog
              </button>

              {/* Dialog Box */}
              {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-2/5">
                    <h2 className="text-xl font-semibold mb-4">Enter Details</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="inputOne" className="block text-sm text-gray-700">
                          Input 1
                        </label>
                        <input
                          id="inputOne"
                          type="text"
                          value={inputOne}
                          onChange={(e) => setInputOne(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="inputTwo" className="block text-sm text-gray-700">
                          Input 2
                        </label>
                        <input
                          id="inputTwo"
                          type="text"
                          value={inputTwo}
                          onChange={(e) => setInputTwo(e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 flex justify-between">
                      <button
                        onClick={closeDialog}
                        className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
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

export default TabsDemo;
