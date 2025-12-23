import { ReactNode } from "react";
import { PublicNavbar } from "./PublicNavbar";
import { Footer } from "./Footer";

interface PublicLayoutProps {
  children: ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background bg-mesh">
      <PublicNavbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
