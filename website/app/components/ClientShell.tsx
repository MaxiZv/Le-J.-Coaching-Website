"use client";

import StaggeredNav from "./StaggeredNav";
import Preloader from "./Preloader";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      <StaggeredNav />
      <main>{children}</main>
    </>
  );
}
