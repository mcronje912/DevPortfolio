// src/layouts/default.tsx
import { Navbar } from "@/components/navbar";
import { useScrollToTop } from "@/hooks/useScrollToTop";
// Import other hooks as needed

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
      <footer className="bg-rich-black text-white py-12 relative">
        {/* Footer content */}
      </footer>
    </div>
  );
}