import { SacramentMeeting } from '@/lib/types';
import MeetingDetail from '@/components/MeetingDetail';
import Link from 'next/link';
import { notFound } from 'next/navigation';


interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getMeetingFromApi(id: string): Promise<SacramentMeeting | null> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/meetings/${id}`, { cache: 'no-store' });

  if (res.status === 404 || res.status === 400) {
    return null;
  }

  if (!res.ok) {
    throw new Error('Failed to fetch meeting detail from API');
  }

  return res.json();
}

export default async function MeetingDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const meeting = await getMeetingFromApi(resolvedParams.id);

  if (!meeting) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/meetings"
          className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          &larr; Back to all meetings
        </Link>
      </div>
      <MeetingDetail meeting={meeting} />
    </div>
  );
}