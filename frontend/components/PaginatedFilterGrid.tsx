"use client";

import { useState, useMemo } from "react";
import TripCard from "@/components/TripCard";

interface Trip {
  _id: string;
  title: string;
  destination: string;
  days: number;
  budget: number;
  createdAt: string;
}

interface Props {
  items: Trip[];
}

export default function PaginatedFilterGrid({ items }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [destinationTerm, setDestinationTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const itemsPerPage = 6;

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesTitle = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDestination = item.destination.toLowerCase().includes(destinationTerm.toLowerCase());
      const matchesPrice = maxPrice === "" || item.budget <= Number(maxPrice);
      return matchesTitle && matchesDestination && matchesPrice;
    });
  }, [items, searchTerm, destinationTerm, maxPrice]);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(start, start + itemsPerPage);
  }, [filteredItems, currentPage]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Filter Controls */}
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Filter by trip name"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Filter by destination"
            value={destinationTerm}
            onChange={(e) => {
              setDestinationTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Max budget"
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Trip Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedItems.map((item) => (
            <TripCard key={item._id} trip={item} />
          ))}
        </section>

        {/* Pagination Controls */}
        <div className="mt-10 flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}