"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SearchForm({ initialSearch }: { initialSearch: string }) {
  const [tagName, setTagName] = useState(initialSearch ?? "");
  const router = useRouter();

  useEffect(() => {
    setTagName(initialSearch);
  }, [initialSearch]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
        router.refresh();
      }}
      className="mb-4"
    >
      <div className="flex gap-2">
        <input
          className="input input-bordered p-2 w-full rounded"
          onChange={(e) => setTagName(e.currentTarget.value)}
          placeholder="Search by tag"
          value={tagName ? tagName : ""}
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </div>
    </form>
  );
}