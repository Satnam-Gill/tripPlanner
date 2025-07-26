"use client";
import TripForm, { TripData } from "@/components/TripForm";
import { useRouter } from "next/navigation";

export default function SubmitPage() {
  const router = useRouter();

  const handleSubmit = async (data: TripData) => {
    await fetch("http://localhost:5000/api/trips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Plan Your Adventure
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Fill in the details below to add a new trip to your dashboard.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Trip Details
          </h2>
          <TripForm onSubmit={handleSubmit} />
        </div>
      </div>
    </main>
  );
}