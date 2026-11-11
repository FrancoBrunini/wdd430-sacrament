import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },
  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Bishop Smith',
    openingHymn: { number: 70, title: 'Sing We Now at Parting' },
    openingPrayer: 'Brother Taylor',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
    speakers: [],
    closingHymn: { number: 136, title: 'I Know That My Redeemer Lives' },
    closingPrayer: 'Sister Martinez',
    announcements: ['Youth activity on Wednesday at 7:00 PM']
  },
  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'regular',
    presiding: 'President Johnson',
    conducting: 'Brother Jones',
    openingHymn: { number: 26, title: 'Joseph Smith’s First Prayer' },
    openingPrayer: 'Sister Clark',
    wardBusiness: [{ description: 'Release of Elder White from Elders Quorum presidency' }],
    stakeBusiness: true,
    sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
    speakers: [
      { name: 'President Johnson', topic: 'Following the Prophet', type: 'speaker' },
      { name: 'Brother Garcia', topic: 'Personal Revelation', type: 'speaker' }
    ],
    closingHymn: { number: 247, title: 'We Love Thy House, O God' },
    closingPrayer: 'Brother Robinson',
    announcements: ['Stake Conference next weekend']
  },
  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Lee',
    openingHymn: { number: 85, title: 'How Firm a Foundation' },
    openingPrayer: 'Sister Anderson',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 175, title: 'O God, the Eternal Father' },
    speakers: [
      { name: 'Sister White', topic: 'Gratitude and Service', type: 'speaker' },
      { name: 'Brother Harris', topic: 'The Power of the Book of Mormon', type: 'speaker' }
    ],
    closingHymn: { number: 152, title: 'God Be With You Till We Meet Again' },
    closingPrayer: 'Sister Moore',
    announcements: ['Fast andimony preparation meeting on Thursday']
  },
  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'general',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 134, title: 'I Believe in Christ' },
    openingPrayer: 'Brother Thomas',
    wardBusiness: [{ description: 'Welcoming new move-ins' }],
    stakeBusiness: false,
    sacramentHymn: { number: 178, title: 'O Lord, With Wonder and With Awe' },
    speakers: [
      { name: 'Youth Speaker 1', topic: 'Being a Light to the World', type: 'speaker' },
      { name: 'Youth Speaker 2', topic: 'Keeping the Sabbath Day Holy', type: 'speaker' }
    ],
    closingHymn: { number: 67, title: 'Glory to God on High' },
    closingPrayer: 'Sister Jackson',
    announcements: ['Bishopric Youth Fireside tonight at 8:00 PM']
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}