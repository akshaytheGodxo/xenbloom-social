"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/app/_components/global/card";
import { Button } from "~/app/_components/global/button";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Navbar from "../_components/ui/nav";
import Link from "next/link";
const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen  p-6">
        <Card className="w-full max-w-lg bg-[#333333] shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-white text-2xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 text-white text-center">
              <p className="text-gray-300">
                Have questions or need support? Reach out to us via email, phone, or join our WhatsApp group.
              </p>

              <div className="flex flex-col space-y-4">
                <Button variant="outline" className="flex items-center gap-2 w-full border-gray-600 text-white">
                  <Mail size={18} /> aadrika@singhal.com
                </Button>

                <Button variant="outline" className="flex items-center gap-2 w-full border-gray-600 text-white">
                  <Phone size={18} /> +91 90845 90954
                </Button>

                <a href="https://wa.me/message/LUWXI6TUHYC6M1" target="_blank" rel="noopener noreferrer">
                    <Link href={"https://wa.me/message/6R6ZS35J6NUHE1"}>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center gap-2">
                    <MessageCircle size={18} /> Join WhatsApp Group
                  </Button>
                    </Link>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
