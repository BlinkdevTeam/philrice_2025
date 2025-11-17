// components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showLayout = pathname !== "/Posters";

  return (
    <>
      {showLayout && <Navbar />}
      {children}
      {showLayout && <Footer />}
    </>
  );
}
