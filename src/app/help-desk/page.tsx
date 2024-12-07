"use client";

import React, { useState } from "react";
import Sidebar from "@/components/main/sidebar"; // Assuming Sidebar component is available
import { Button } from "@/components/ui/button"; // Assuming Button is a ShadCN component
import { Input } from "@/components/ui/input"; // Assuming Input is a ShadCN component
import { Textarea } from "@/components/ui/textarea"; // Assuming Textarea is a ShadCN component
import { Card } from "@/components/ui/card"; // Assuming Card is a ShadCN component
import { Label } from "@/components/ui/label"; // Assuming Label is a ShadCN component
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // Alert from ShadCN
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const HelpDeskPage: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [isAsking, setIsAsking] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleAskQuestion = async () => {
    if (!question.trim()) {
      setErrorMessage("Please enter a valid question.");
      return;
    }
    setIsAsking(true);
    setErrorMessage("");

    try {
      // Simulate API call to generate answer (This can be replaced by a real API)
      // In a real-world scenario, you would send the question to an API and get an answer
      setTimeout(() => {
        const generatedAnswer = `Answer to your question: "${question}". This is a simulated response.`;
        setAnswer(generatedAnswer);
        setIsAsking(false);
      }, 2000);
    } catch (error) {
      setIsAsking(false);
      setErrorMessage("An error occurred while generating the answer.");
    }
  };

  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-grow ml-[256px] p-8 space-y-6 max-w-3xl mx-auto">
        <Card className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
          <h2 className={`text-2xl font-semibold text-gray-900 ${caveat.className} dark:text-white mb-4`}>Help Desk</h2>

          {/* Question Section */}
          <div className="space-y-4">
            <Label htmlFor="question" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Ask a Question
            </Label>
            <Textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full"
              placeholder="Enter your question here"
            />

            <Button
              className={`${caveat.className} mt-4 bg-blue-500 text-white hover:bg-blue-600 text-xl rounded-md py-2 transition duration-300`}
              onClick={handleAskQuestion}
              disabled={isAsking}
            >
              {isAsking ? "Asking..." : "Ask Question"}
            </Button>

            {/* Error Message */}
            {errorMessage && (
              <Alert className="mt-4" variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{errorMessage}</AlertDescription>
              </Alert>
            )}
          </div>

          {/* Display the Answer */}
          {answer && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Answer</h3>
              <p className="text-gray-800 dark:text-gray-300">{answer}</p>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
};

export default HelpDeskPage;
