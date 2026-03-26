import { BrandHeader, EventCards } from '../../components/CommonBlocks';

export default function EmployeeSchedulePage() {
  const events = [
    { title: 'Interview - Tech Startup Hub', time: '2024-01-15 · 2:00 PM (45 mins)', metaA: 'Position: Frontend Developer', metaB: 'Virtual Meeting', status: 'confirmed', primary: 'Join Meeting' },
    { title: 'Technical Assessment', time: '2024-01-16 · 10:00 AM (120 mins)', metaA: 'Position: Full Stack Developer', metaB: 'Online Platform', status: 'confirmed', primary: 'Get Directions' },
    { title: 'Final Interview - CEO Meeting', time: '2024-01-18 · 4:00 PM (30 mins)', metaA: 'Position: Senior Developer', metaB: 'Krisp Office', status: 'scheduled', primary: 'Get Directions' },
  ];

  return (
    <main className="page dashboard">
      <BrandHeader links={['Dashboard', 'Schedule', 'Find Jobs']} user="EU" />
      <div className="title-row"><div><h1>My Interview Schedule</h1><p className="muted">View your upcoming interviews and assessments</p></div><button className="btn-dark">Add Event</button></div>
      <EventCards events={events} />
    </main>
  );
}
