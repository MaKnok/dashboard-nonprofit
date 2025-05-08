import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[100%] bg-jhBackground overflow-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
