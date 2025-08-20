"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[999]">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600"></div>
    </div>
  );
}
