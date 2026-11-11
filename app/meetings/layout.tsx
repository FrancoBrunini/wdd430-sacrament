import { Suspense } from 'react';
import NavLinks from '@/components/NavLinks';

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="bg-white border-b shadow-sm rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
          <h2 className="text-lg font-bold text-blue-900">Sacrament Meetings Portal</h2>
          <p className="text-sm text-blue-700">Browse schedules, view detailed agendas, or jump directly to this week&apos;s program.</p>
        </div>
        <Suspense fallback={<div className="p-4 text-sm text-gray-500">Loading navigation...</div>}>
          <NavLinks />
        </Suspense>
      </div>
      <div className="mt-6">
        {children}
      </div>
    </div>
  );
}