import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  Bars3Icon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Link from 'next/link'
import logo from "../images/logo.png";

export default function Navigation() {
  return (
    <div className="mx-auto max-w-7xl px-2 py-5">
      <div className="flex items-center justify-between">
        <Link href='/' className="hover:underline hover:decoration-gray-700/50">
        <div className="flex items-center px-5 sm:px-0">
          <Image src={logo} alt="" className="mr-2" />
            <h1 className="text-2xl font-extralight md:text-4xl">kabel.</h1>
        </div>
        </Link>
        <div className="flex">
          <div className="hidden items-center sm:flex">
            <div className="px-1">
              <Link href='/auth/login'>
                <button className="rounded-lg border border-brand bg-transparent px-4 py-2.5 font-semibold text-brand">
                  Log In
                </button>
              </Link>
            </div>
            <div className="px-1">
              <Link href='/auth/register'>
                <button className="rounded-lg border border-brand bg-brand px-4 py-2.5 font-semibold text-dark">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <Menu as="div" className="px-5">
              <div>
                <Menu.Button className="rounded-lg border border-brand bg-transparent px-4 py-2 font-semibold">
                  <Bars3Icon className="h-6 w-6 text-brand" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-7 mt-4 origin-top-right divide-y divide-gray-100 rounded-lg bg-[#0B0D0F] px-2 shadow-2xl ring-1 ring-white ring-opacity-75">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      <div className="flex items-center">
                        <ArrowRightOnRectangleIcon className="h-8 w-8" />
                        <Link href='/auth/login'>
                          <button className="group flex w-full items-center rounded-md px-2 py-2 text-lg text-white">
                            Log In
                          </button>
                        </Link>
                      </div>
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      <div className="flex items-center">
                        <UserPlusIcon className="h-8 w-8" />
                        <Link href='/auth/register'>
                          <button className="group flex w-full items-center rounded-md px-2 py-2 text-lg text-white">
                            Sign Up
                          </button>
                        </Link>
                      </div>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
