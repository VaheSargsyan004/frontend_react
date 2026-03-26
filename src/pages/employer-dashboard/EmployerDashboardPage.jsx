import { BrandHeader, StatsRow } from '../../components/CommonBlocks';

export default function EmployerDashboardPage() {
  return (
    <main className="page dashboard">
      <BrandHeader links={['Dashboard', 'Schedule']} user="EU" />
      <div className="title-row"><div><h1>Employer Dashboard</h1><p className="muted">Welcome back, Armen Sarkissian</p></div><div className="inline-actions"><button className="btn-light">Schedule</button><button className="btn-dark">Post New Job</button></div></div>
      <div className="tabs"><span className="active">Overview</span><span>AI Agent</span><span>Job Posts</span><span>Candidates</span><span>Analytics</span><span>Profile</span></div>
      <StatsRow items={[{ title: 'Active Jobs', value: '8', note: '+2 this week' }, { title: 'Total Applications', value: '342', note: '+23 today' }, { title: 'AI Matches', value: '89', note: '94% accuracy' }, { title: 'Interviews Scheduled', value: '15', note: 'This week' }]} />
    </main>
  );
}
