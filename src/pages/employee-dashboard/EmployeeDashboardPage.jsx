import { BrandHeader, StatsRow } from '../../components/CommonBlocks';

export default function EmployeeDashboardPage() {
  return (
    <main className="page dashboard">
      <BrandHeader links={['Dashboard', 'Schedule', 'Find Jobs']} user="EU" />
      <div className="title-row"><div><h1>Welcome back, Davit!</h1><p className="muted">Track your applications and manage your career journey</p></div><div className="inline-actions"><button className="btn-light">My Schedule</button><button className="btn-dark">Find Jobs</button></div></div>
      <div className="tabs"><span className="active">Overview</span><span>Resume</span><span>Applications</span><span>Job Search</span><span>Profile</span></div>
      <StatsRow items={[{ title: 'Applications Sent', value: '12', note: '+3 this week' }, { title: 'Profile Views', value: '47', note: '+8 today' }, { title: 'Interview Invites', value: '5', note: 'This month' }, { title: 'Match Score', value: '91%', note: 'Average' }]} />
    </main>
  );
}
