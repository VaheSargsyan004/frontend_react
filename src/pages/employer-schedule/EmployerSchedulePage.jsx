import { BrandHeader, EventCards } from '../../components/CommonBlocks';

export default function EmployerSchedulePage() {
  const events = [
    { title: 'Interview - Senior Developer', time: '2024-01-15 · 11:00 AM (45 mins)', metaA: 'Candidate: Davit Harutyunyan', metaB: 'Virtual Meeting', status: 'confirmed', primary: 'Join Meeting' },
    { title: 'AI Agent Training Session', time: '2024-01-16 · 3:00 PM (30 mins)', metaA: 'Participants: HireAI Support Team', metaB: 'Virtual Meeting', status: 'confirmed', primary: 'Join Meeting' },
    { title: 'Interview - Product Manager', time: '2024-01-17 · 1:00 PM (60 mins)', metaA: 'Candidate: Anna Grigoryan', metaB: 'Office - Room 204', status: 'pending', primary: 'Get Directions' },
  ];

  return (
    <main className="page dashboard">
      <BrandHeader links={['Dashboard', 'Schedule']} user="EU" />
      <div className="title-row"><div><h1>Interview & Meeting Schedule</h1><p className="muted">Manage your interview schedule and meetings</p></div><button className="btn-dark">Add Event</button></div>
      <EventCards events={events} />
    </main>
  );
}
