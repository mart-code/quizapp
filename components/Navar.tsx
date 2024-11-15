'use client'

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { MdQuiz } from "react-icons/md";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return <div className="pt-5">
    <div className="max-w-[1500px] mx-auto flex justify-between w-[90%] items-center border-b pb-5">
      <div>
        <Link href="/" className="flex gap-1 items-center">
          <h1 className="text-2xl"></h1>
        </Link>
      </div>
    </div>
  </div>;
};

export default Navbar;
