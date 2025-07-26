import PaginatedFilterGrid from "@/components/PaginatedFilterGrid";

const fetchTrips = async () => {
  const res = await fetch("http://localhost:5000/api/trips", { cache: "no-store" });
  return res.json();
};

export default async function Dashboard() {
  const trips = await fetchTrips();

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">All Trips</h2>
          <p className="mt-2 text-lg text-gray-600">Here are all your planned adventures!</p>
        </header>

        <PaginatedFilterGrid items={trips} />
      </div>
    </main>
  );
}