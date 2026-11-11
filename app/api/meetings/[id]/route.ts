import { getMeetingById } from '@/lib/meetings-db';

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: Request, { params }: RouteContext) {
  const resolvedParams = await params; 
  const idNumber = Number(resolvedParams.id);

  if (isNaN(idNumber)) {
    return Response.json(
      { error: 'Invalid ID format. The ID must be a valid number.' },
      { status: 400 }
    );
  }

  const meeting = getMeetingById(idNumber);

  if (!meeting) {
    return Response.json(
      { error: `Meeting with ID ${resolvedParams.id} not found.` },
      { status: 404 }
    );
  }

  return Response.json(meeting);
}