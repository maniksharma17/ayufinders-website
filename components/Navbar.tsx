"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/colleges", label: "Colleges" },
  { href: "/admissions", label: "Admissions" },
  { href: "/latest-updates", label: "Notifications" },
  { href: "/question-papers", label: "Question Papers" },
  { href: "/job-updates", label: "Jobs" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false)

  // Detect scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Change the state if scrolled more than 50px
      } else {
        setIsScrolled(false); // Reset the state if scrolled back to top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    <header className={cn("floating-navbar transition-all bg-slate-50 duration-300", {
      "bg-white shadow-sm": isScrolled,})}>
      <div className="container mx-auto">
        <div className="flex h-16 md:h-20 items-center justify-between px-4">

          <div className="flex justify-flex-start items-center gap-12"> 
            <Link href="/" className="flex items-center gap-2">
              <span className="tracking-tight text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                AyuFinders
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="h-full hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-2 text-md h-full font-light transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-primary-100 hover:text-primary",
                    pathname === link.href
                      ? "text-primary bg-primary-200 font-semibold border-primary border-b-2"
                      : "text-gray-600 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Call Button */}
          <Button
            className="hover:bg-gradient-to-r text-gray-100 transition-all duration-300 ease-in-out cursor-pointer from-primary to-gray-400 hidden lg:flex items-center font-light text-lg gap-2 rounded-full"
            size="lg"
          >
            <Phone className="h-5 w-5" />
            <span>Contact us</span>
          </Button>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96 pt-20">
                <Link href="/" className="flex items-center gap-2">
                  <span className="tracking-tight text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    AyuFinders
                  </span>
                </Link>
                <div className="mt-6 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={()=>{setOpen(false)}}
                      className={cn(
                        "text-base font-light transition-colors hover:bg-primary/10",
                        pathname === link.href
                          ? "text-primary w-fit border-b-2 border-primary font-medium"
                          : "text-gray-600"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button className="mt-4 rounded-full" size="lg">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>Contact Us</span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
