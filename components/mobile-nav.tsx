"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect, Fragment } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Transition, Dialog } from "@headlessui/react";
import { useParams, usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const MobileNav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Overview",
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Billboards",
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Categories",
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: "Sizes",
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: "Colors",
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: "Products",
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Orders",
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        className="flex lg:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Menu
          color="white"
          className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span className="sr-only">Menu bar</span>
      </Button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-[100%] max-w-md">
                    <div className="flex h-full flex-col overflow-hidden bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-900"></Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Đóng</span>
                              <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Content */}
                        <div className="text-lg font-semibold leading-6 text-gray-400">
                          Options
                        </div>
                        <nav className="flex flex-1 flex-col">
                          <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-7"
                          >
                            <li>
                              <ul role="list" className="ml-3 mt-2 space-y-1">
                                {routes.map((route) => {
                                  return (
                                    <li key={route.href}>
                                      <Link
                                        key={route.href}
                                        href={route.href}
                                        className={cn(
                                          "text-sm font-medium p-2 transition-colors hover:text-primary",
                                          route.active
                                            ? "text-black dark:text-white"
                                            : "text-muted-foreground"
                                        )}
                                      >
                                        <span className="truncate">
                                          {route.label}
                                        </span>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </li>
                          </ul>
                        </nav>
                        {/* content end */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default MobileNav;
