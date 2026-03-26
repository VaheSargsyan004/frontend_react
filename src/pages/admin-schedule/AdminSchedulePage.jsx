import { BrandHeader, EventCards } from '../../components/CommonBlocks';

export default function AdminSchedulePage() {
  const events = [
    { title: 'System Review Meeting', time: '2024-01-15 · 10:00 AM (60 mins)', metaA: 'Participants: Tech Team, HR Team', metaB: 'Conference Room A', status: 'confirmed', primary: 'Get Directions' },
    { title: 'Client Onboarding - Tech Armenia', time: '2024-01-16 · 2:00 PM (90 mins)', metaA: 'Participants: Armen Sarkissian, Gayane Mkrtchyan', metaB: 'Virtual Meeting', status: 'pending', primary: 'Join Meeting' },
  ];

  return (
    <main className="page dashboard">
      <BrandHeader links={['Dashboard', 'Schedule']} user="AU" />
      <div className="title-row"><div><h1>Administrative Schedule</h1><p className="muted">Overview of all platform activities</p></div><button className="btn-dark">Add Event</button></div>
      <EventCards events={events} />
    </main>
  );
}
