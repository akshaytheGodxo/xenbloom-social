"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/app/_components/global/card";
import { Loader } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-gray-900 text-2xl">About Us</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex flex-col items-center gap-4">
            <Loader size={32} className="animate-spin text-gray-600" />
            <p className="text-gray-700 text-lg">This page is under construction. Stay tuned!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;
