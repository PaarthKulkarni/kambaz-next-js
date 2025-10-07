"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxDividerVertical } from "react-icons/rx";
export default function AccountNavigation() {
  const path = usePathname();
 return (
      <div id="wd-accounts-navigation"  className="wd list-group fs-5 rounded-0"> 
      <Link href="Signin" id="wd-account-link" className={`list-group-item border-0 ${path.includes("Signin") ? "active" : "text-danger"}`}>Signin</Link>
      <Link href="Signup" id="wd-account-link" className={`list-group-item border-0 ${path.includes("Signup") ? "active" : "text-danger"}`}>Signup</Link>
      <Link href="Profile" id="wd-account-link" className={`list-group-item border-0 ${path.includes("Profile") ? "active" : "text-danger"}`}>Profile</Link>
    </div>
);}
