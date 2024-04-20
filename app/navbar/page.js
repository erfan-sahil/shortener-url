import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-4 xl:px-10">
      <p className={`text-3xl font-bold text-[#27221f]`}>Shortly</p>

      <div className="">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent className="w-full" side="top">
              <SheetHeader className="w-full">
                <div className="flex flex-col items-center gap-3 mt-5">
                  <Link
                    className="font-medium hover:bg-secondary w-full  rounded-md"
                    href="/login"
                  >
                    <SheetClose className="font-medium hover:bg-secondary w-full py-2 rounded-md">
                      Login
                    </SheetClose>
                  </Link>
                  <Link
                    className="font-medium hover:bg-secondary w-full rounded-md"
                    href="/register"
                  >
                    <SheetClose className="font-medium hover:bg-secondary w-full py-2 rounded-md">
                      Register
                    </SheetClose>
                  </Link>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex items-center gap-5 ">
          <Link className="font-medium" href="/login">
            Login
          </Link>
          <Link className="font-medium" href="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
