export default function Header({ wardName, currentDate }: { wardName: string; currentDate: string }) {
  return (
    <header className="bg-blue-900 text-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-wide">{wardName} Sacrament Meetings</h1>
      <span className="text-sm text-blue-200">{currentDate}</span>
    </header>
  );
}