import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">AyuFinders</h3>
            <p className="mb-4 font-light text-gray-300">
              Your ultimate guide to BAMS education in India. We help students
              find the right colleges, counselling, admission updates, and job
              opportunities.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/colleges"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Colleges
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/latest-updates"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Latest Updates
                </Link>
              </li>
              <li>
                <Link
                  href="/question-papers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Question Papers
                </Link>
              </li>
              <li>
                <Link
                  href="/job-updates"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Job Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Polcies */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/colleges"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Fair Use Guidelines
                </Link>
              </li>
            </ul>
          </div>
        

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 mt-1 text-primary" />
              <span className="text-gray-300">+91 8881820484</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 mt-1 text-primary" />
              <span className="text-gray-300">info@ayufinders.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-5 w-5 mt-1 text-primary" />
              <span className="text-gray-300">
                Mon - Sat: 9:00 AM - 6:00 PM
              </span>
            </li>
          </ul>
        </div>
      </div>

        <div className="mt-8 pt-4 border-t border-gray-800 font-thin text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} AyuFinders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
