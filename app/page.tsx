import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="relative rounded-2xl overflow-hidden shadow-lg bg-blue-900 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Sacrament Meeting Planner
          </h1>
          <p className="text-blue-100 text-lg">
            Streamline your wards weekly agendas, manage speakers, hymns, and business items seamlessly.
          </p>
          <div>
            <Link
              href="/meetings"
              className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition-colors"
            >
              View Meetings
            </Link>
          </div>
        </div>

        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg my-6">          <Image
          src="/hero-planning.jpg"
          alt="Bishopric members planning sacrament meeting agenda"
          width={800}
          height={570}
          priority
          className="object-cover w-full h-full"
        />
        </div>
      </section>
    </div>
  );
}