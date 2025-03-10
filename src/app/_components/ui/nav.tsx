"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "~/app/_components/global/button"
import { Sheet, SheetContent, SheetTrigger } from "~/app/_components/global/sheet"

interface NavbarProps {
  logo: string
}

export default function Navbar({ logo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contacts", label: "Contact Us" },
  ]

  return (
    <nav className="h-12 flex items-center justify-between px-4 items-center ">
      <div className="pl-4 md:pl-16">
        <Image src={logo || "/placeholder.svg"} alt="Logo" width={50} height={50} />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block pr-16">
        <ul className="flex space-x-14">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden ">
        <Sheet open={isOpen} onOpenChange={setIsOpen} >
          <SheetTrigger asChild >
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px] bg-white">
            <div className="flex flex-col gap-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium hover:text-primary transition-colors border-b"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

