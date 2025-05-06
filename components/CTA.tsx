"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";

export default function CounselingSection() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  

  

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row justify-between gap-10 items-start">
        {/* Left: Text + CTA */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Need Free B.A.M.S. Counseling with our Experts?</h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-xl">
            Our expert team is here to guide you through the BAMS admission and counselling process. 
            Whether you have questions about seat allocation, eligibility, or the counseling process, we are here to help you with the right information and support.
          </p>
          <div className="flex flex-wrap gap-4">
            <Dialog open={open} onOpenChange={setOpen}>
            <Button onClick={() => setOpen(true)} className="bg-green-500 hover:bg-green-600 text-white">
              Get Counselling Support
            </Button>
              <DialogContent className="sm:max-w-md px-4">
                <DialogHeader>
                  <DialogTitle>Get Counselling Support</DialogTitle>
                  <DialogDescription>
                    Fill in your details and our team will contact you soon.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input autoFocus={false} id="name" placeholder="Your full name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input autoFocus={false} id="phone" placeholder="+91 9876543210" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input autoFocus={false} id="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Query</Label>
                    <Textarea autoFocus={false} id="query" rows={2} placeholder="Ask any question or simply leave a message for us" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">
                    Submit
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button onClick={() => router.push("/colleges")} variant="outline">
              Explore BAMS Colleges
            </Button>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
            <Mail className="text-gray-600 w-5 h-5 mt-1" />
            <div className="flex-1">
              <p className="font-semibold text-gray-900 flex items-center gap-2">
                Email <ExternalLink className="w-4 h-4" />
              </p>
              <p className="text-sm text-gray-700">info@ayufinders.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 border p-4 rounded-xl">
            <Phone className="text-gray-600 w-5 h-5 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">Phone number</p>
              <p className="text-sm text-gray-700">+91 8881820484</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
