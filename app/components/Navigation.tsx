import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import classNames from "classnames";

import { NAVIGATION } from "@/app/constants";

function Navigation() {
  const router = useRouter();

  const { pathname } = router;

  const onLinkage = (route: string) => (e: any) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <div className="mx-auto mt-5 max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {NAVIGATION.map(({ label, route }) => (
                <Link
                  key={label}
                  href={route}
                  onClick={onLinkage(route)}
                  className={classNames(
                    "rounded-md px-3 py-2 text-sm font-medium",
                    {
                      "bg-gray-900 text-white": pathname === route,
                      "text-gray-400 hover:bg-gray-700 hover:text-white":
                        pathname !== route,
                    }
                  )}
                  aria-current={pathname === route ? "page" : undefined}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
