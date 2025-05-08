import Link from "next/link";
import { institutionType } from "@/lib/data";

const menuItems = [
  {
    title: "home",
    label: "Home",
    href: "/admin",
  },
  {
    title: institutionType == "ngo" ? "donorLists" : "employees",
    label: institutionType == "ngo" ? "Donor Lists" : "Employees",
    href: institutionType == "ngo" ? "/donor-lists" : "employees",
  },
  {
    title: "aiOutreach",
    label: "AI Outreach",
    href: "/ai-outreach",
  },
  {
    title: "reports",
    label: "Reports",
    href: "/reports",
  },
  {
    title: "campaigns",
    label: "Campaigns",
    href: "/campaigns",
  },
];

const Menu = () => {
  return (
    <div className="flex flex-row gap-6">
      {menuItems.map((i) => (
        <div key={i.title} className="w-[115px] text-center">
          <Link
            href={i.href}
            className="text-jhSecondary03 py-2 md:px-2 rounded-md hover:bg-jhSecondary02"
            key={i.title}
          >
            <span>{i.label}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
