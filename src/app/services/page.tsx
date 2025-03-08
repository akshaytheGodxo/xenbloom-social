"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/app/_components/global/card";
import { Loader } from "lucide-react";
import Navbar from "../_components/ui/nav";
const Services = () => {
  return (
    <div>
      <Navbar />
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <Card className="w-full max-w-md rounded-2xl bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-gray-900">
            Our Services
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex flex-col items-center gap-4">
            <Loader size={32} className="animate-spin text-gray-600" />
            <p className="text-lg text-gray-700">
              This page is under construction. Stay tuned!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
  );
};

export default Services;
