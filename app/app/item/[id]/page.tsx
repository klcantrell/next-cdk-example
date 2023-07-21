"use client";

import { useParams } from "next/navigation";

export default function ItemDetailPage() {
  const params = useParams();
  return (
    <div className="flex justify-center mt-4">
      <h2>Item {params.id}</h2>
    </div>
  );
}
