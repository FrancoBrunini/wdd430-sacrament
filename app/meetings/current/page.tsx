import { connection } from 'next/server';
import { getMeetings } from '@/lib/meetings-db';
import { redirect } from 'next/navigation';

export default async function CurrentMeetingPage() {
  await connection();

  const today = new Date();
  const sunday = new Date(today);
  const dayOfWeek = today.getDay();
  sunday.setDate(today.getDate() - dayOfWeek);

  const formattedDate = sunday.toISOString().split('T')[0];

  const meetings = getMeetings(formattedDate);
  
  if (meetings.length > 0) {
    redirect(`/meetings/${meetings[0].id}`);
  } else {
    redirect('/meetings');
  }
}