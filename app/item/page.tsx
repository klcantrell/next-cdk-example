"use client";

import { useSearchParams } from "next/navigation";

export default function ItemDetailPage() {
  const params = useSearchParams();
  return (
    <div className="flex justify-center mt-4">
      <h2>Item {params.get('id')}</h2>
    </div>
  );
}
