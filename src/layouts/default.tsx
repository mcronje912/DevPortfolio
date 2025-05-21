// src/layouts/default.tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use scroll to top hook to ensure pages start at the top when navigating
  useScrollToTop();

  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}