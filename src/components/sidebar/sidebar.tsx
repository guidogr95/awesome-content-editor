import { cn } from "@/lib/utils";
import Link from "next/link";
import useAuth from "@/hooks/use-auth/use-auth";
import { FaPencil, FaFilePen } from "react-icons/fa6";

const Sidebar = () => {
  const { handleLogout } = useAuth();

  return (
    <aside className="min-w-[230px] flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
      <a href="#">
        <img
          className="w-auto h-6 sm:h-7"
          src="https://merakiui.com/images/logo.svg"
          alt=""
        />
      </a>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="flex flex-col gap-3">
          <Link
            href="/content-editor"
            className={cn(
              "flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md no-underline",
            )}>
            <FaPencil />

            <span className="ml-4 font-medium">
              Content Editor
            </span>
          </Link>

          <Link
            href="/asset-manager"
            className={cn(
              "flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md no-underline",
            )}>
            <FaFilePen />

            <span className="ml-4 font-medium">
              Asset Manager
            </span>
          </Link>

        </nav>
        <div
          onClick={handleLogout}
          className={cn(
            "cursor-pointer flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md",
          )}>
          <svg
            fill="none"
						className="w-5 h-5"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
            />
          </svg>

          <span className="ml-4 font-medium">Log out</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
