import { SacramentMeeting } from '@/lib/types';
import MeetingCard from '@/components/MeetingCard';

async function getMeetingsFromApi(): Promise<SacramentMeeting[]> {
const baseUrl = process.env.NEXT_PUBLIC_API_URL 
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');  const res = await fetch(`${baseUrl}/api/meetings`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch meetings from API');
  }

  return res.json();
}

export default async function MeetingsPage() {
  const meetings = await getMeetingsFromApi();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">All Scheduled Meetings</h2>
        <span className="text-sm text-gray-500">{meetings.length} records found</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </div>
  );
}