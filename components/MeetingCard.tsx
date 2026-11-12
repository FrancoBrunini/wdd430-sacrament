import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded">
            {meeting.meetingType}
          </span>
          <span className="text-sm text-gray-500">{meeting.date}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">Presiding: {meeting.presiding}</h3>
        <p className="text-sm text-gray-600">Conducting: {meeting.conducting}</p>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
        <Link
          href={`/meetings/${meeting.id}`}
          className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          View Full Agenda &rarr;
        </Link>
      </div>
    </div>
  );
}