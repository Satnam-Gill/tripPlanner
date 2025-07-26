"use client";
import TripForm, { TripData } from "@/components/TripForm";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditPage() {
  const { id } = useParams();
  const router = useRouter();
  const [trip, setTrip] = useState<TripData | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/trips")
      .then(res => res.json())
      .then(data => {
        const found = data.find((t:any) => t._id === id);
        setTrip(found);
      });
  }, [id]);

  const handleSubmit = async (data: TripData) => {
    await fetch(`http://localhost:5000/api/trips/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    router.push("/dashboard");
  };

  if (!trip) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="text-gray-600 text-lg">Loading...</span>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Edit Trip
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Update your travel plan details below.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <TripForm
            onSubmit={handleSubmit}
            initialData={trip}
            submitLabel="Update"
          />
        </div>
      </div>
    </main>
  );
}