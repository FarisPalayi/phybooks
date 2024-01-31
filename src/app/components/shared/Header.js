"use client";
import Image from "next/image";
import header from "../../styles/components/Header.module.scss";
import { useState } from "react";
import Link from "next/link";
import MenuIcon from "../icons/MenuIcon.js";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <header className={header.header}>
      <Link href="/" className={header.logo}>
        <Image
          src="/images/logo.svg"
          alt="PhyBooks"
          width={130}
          height={25}
          priority
        />
      </Link>

      <div className={header.iconContainer}>
        <button aria-label="search" title="search">
          <Image src="/images/search.svg" alt="" width={24} height={24} />
        </button>
        <button
          onClick={toggleSidebar}
          className={isSidebarOpen ? header.closeMenu : undefined}
          aria-label="menu"
          title="menu"
        >
          <MenuIcon width={30} height={30} />
        </button>
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>
    </header>
  );
}
