"use client";

import React, { useState } from "react";
import Sidebar from "@/components/main/sidebar";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";  // Assuming Button is a ShadCN component
import { Input } from "@/components/ui/input";  // Assuming Input is a ShadCN component
import { Separator } from "@/components/ui/separator"; // Assuming Separator is a ShadCN component
import { Card } from "@/components/ui/card";  // Assuming Card is a ShadCN component
import { Progress } from "@/components/ui/progress"; // Assuming Progress is a ShadCN component
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Assuming Avatar is a ShadCN component
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"; // Assuming Popover is a ShadCN component

const Conversation: React.FC = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
    const [messages, setMessages] = useState([
        { id: 1, sender: "John", content: "Hey! How are you?", timestamp: "10:30 AM" },
        { id: 2, sender: "You", content: "I'm good, thanks! How about you?", timestamp: "10:32 AM" },
        { id: 3, sender: "John", content: "Doing great, just checking in.", timestamp: "10:33 AM" },
    ]);
    const [newMessage, setNewMessage] = useState("");
    const [showEmoticons, setShowEmoticons] = useState(false);

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { id: prevMessages.length + 1, sender: "You", content: newMessage.trim(), timestamp: new Date().toLocaleTimeString() },
            ]);
            setNewMessage("");
        }
    };

    const handleAddEmoji = (emoji: string) => {
        setNewMessage(prevMessage => prevMessage + emoji);
        setShowEmoticons(false); // Close emoji picker after selecting an emoji
    };

    return (
        <TooltipProvider>
            <div className="flex h-screen">
                {/* Left Sidebar */}
                <div
                    className="bg-white shadow-lg flex flex-col overflow-auto flex-shrink-0"
                    style={{ width: `${sidebarWidth}px` }}
                >
                    <Sidebar />
                </div>

                {/* Right Sidebar */}
                <div
                    className="bg-gray-200 shadow-lg flex flex-col overflow-auto flex-shrink-0"
                    style={{ width: `${sidebarWidth}px` }}
                >
                    <div className="flex flex-col h-full p-4 space-y-4">
                        {/* Status Bar using ShadCN Progress component */}
                        {["Text 1", "Text 2", "Text 3", "Text 4", "Text 5", "Text 6"].map((text, index) => (
                            <div key={index} className="flex flex-col items-start space-y-2">
                                <span className="text-sm font-semibold">{text}</span>
                                <Progress value={index * 16.67} max={100} className="w-full h-2 rounded-md" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Chat Section */}
                <div className="flex flex-col flex-1 bg-gray-100">
                    {/* Header with Profile Picture, Name, and Timestamp */}
                    <div className="bg-white px-4 py-2 shadow-md flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile Picture" />
                            <AvatarFallback>J</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-lg font-bold">John Doe</h1>
                            <p className="text-sm text-gray-500">Last seen: 10:33 AM</p>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${
                                    message.sender === "You" ? "justify-end" : "justify-start"
                                }`}
                            >
                                <Card
                                    className={`rounded-lg p-3 max-w-xs ${
                                        message.sender === "You"
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-300 text-black"
                                    }`}
                                >
                                    <p>{message.content}</p>
                                    <span className="text-xs text-gray-400">{message.timestamp}</span>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Input Area with Attachment and Emoji Buttons */}
                    <div className="bg-white px-4 py-2 flex items-center space-x-2 border-t">
                        {/* Attachment Button */}
                        <Button variant="outline" className="px-4 py-2">
                            📎
                        </Button>

                        {/* Emoji Button */}
                        <Popover open={showEmoticons} onOpenChange={setShowEmoticons}>
                            <PopoverTrigger>
                                <Button variant="outline" className="px-4 py-2">
                                    😊
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-2 grid grid-cols-4 gap-2">
                                {["😀", "😂", "😎", "😍", "😢", "😡", "🥳", "😱"].map((emoji) => (
                                    <Button key={emoji} variant="link" onClick={() => handleAddEmoji(emoji)}>
                                        {emoji}
                                    </Button>
                                ))}
                            </PopoverContent>
                        </Popover>

                        {/* Message Input */}
                        <Input
                            type="text"
                            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type a message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") handleSendMessage();
                            }}
                        />

                        {/* Send Button */}
                        <Button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            onClick={handleSendMessage}
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
};

export default Conversation;
