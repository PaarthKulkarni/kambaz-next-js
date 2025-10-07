"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxDividerVertical } from "react-icons/rx";
export default function AccountNavigation() {
  const path = usePathname();
 return (
      <div id="wd-accounts-navigation"  className="wd list-group fs-5 rounded-0"> 
      <Link href="Signin" id="wd-account-link" className={`${path.includes("Signin") ? "text-black" : "text-danger"} text-decoration-none`}>
         {path.includes("Signin") && <RxDividerVertical size={24} className="me-1 fs-1 text-black"/>}
         Signin
       </Link>
      <Link href="Signup" id="wd-account-link" className={`${path.includes("Signup") ? "text-black" : "text-danger"} text-decoration-none`}>
         {path.includes("Signup") && <RxDividerVertical size={24} className="me-1 fs-1 text-black"/>}
         Signup
       </Link>
      <Link href="Profile" id="wd-account-link" className={`${path.includes("Profile") ? "text-black" : "text-danger"} text-decoration-none`}>
         {path.includes("Profile") && <RxDividerVertical size={24} className="me-1 fs-1 text-black"/>}
         Profile
       </Link>
    </div>
);}
