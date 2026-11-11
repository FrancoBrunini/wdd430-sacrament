import type { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 border border-gray-100">
      <div className="border-b pb-4 mb-6 flex justify-between items-center">
        <div>
          <span className="text-xs uppercase bg-blue-100 text-blue-800 font-semibold px-2.5 py-1 rounded">
            {meeting.meetingType} Meeting
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mt-2">Date: {meeting.date}</h2>
        </div>
        <div className="text-right text-sm text-gray-600">
          <p><span className="font-semibold">Presiding:</span> {meeting.presiding}</p>
          <p><span className="font-semibold">Conducting:</span> {meeting.conducting}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md">
          <div>
            <p className="text-sm text-gray-500 font-medium">Opening Hymn</p>
            <p className="font-semibold text-gray-800">#{meeting.openingHymn.number} - {meeting.openingHymn.title}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Opening Prayer</p>
            <p className="font-semibold text-gray-800">{meeting.openingPrayer}</p>
          </div>
        </div>

        <div>
          <h3 className="text-md font-bold text-gray-800 mb-2">Ward & Stake Business</h3>
          {meeting.wardBusiness.length > 0 ? (
            <ul className="list-disc list-inside bg-white border rounded-md p-3 space-y-1 text-gray-700">
              {meeting.wardBusiness.map((item, index) => (
                <li key={index}>{item.description}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 italic">No business items scheduled.</p>
          )}
          {meeting.stakeBusiness && (
            <p className="text-xs font-semibold text-purple-600 mt-1">Includes Stake Business Matters</p>
          )}
        </div>

        <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
          <p className="text-sm text-blue-700 font-medium">Sacrament Hymn</p>
          <p className="font-semibold text-blue-900 mb-3">#{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}</p>
          <p className="text-xs text-blue-600 italic">Administration and passing of the Sacrament</p>
        </div>

        <div>
          <h3 className="text-md font-bold text-gray-800 mb-3">Speakers & Programs</h3>
          {meeting.speakers.length > 0 ? (
            <div className="space-y-3">
              {meeting.speakers.map((speaker, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-800">{speaker.name}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{speaker.type}</span>
                  </div>
                  {speaker.topic && <p className="text-sm text-gray-600">Topic: {speaker.topic}</p>}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">Fast and Testimony meeting (No scheduled speakers).</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md">
          <div>
            <p className="text-sm text-gray-500 font-medium">Closing Hymn</p>
            <p className="font-semibold text-gray-800">#{meeting.closingHymn.number} - {meeting.closingHymn.title}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Closing Prayer</p>
            <p className="font-semibold text-gray-800">{meeting.closingPrayer}</p>
          </div>
        </div>

        {meeting.announcements && meeting.announcements.length > 0 && (
          <div className="border-t pt-4">
            <h3 className="text-md font-bold text-gray-800 mb-2">Announcements</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {meeting.announcements.map((announcement, index) => (
                <li key={index}>{announcement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}