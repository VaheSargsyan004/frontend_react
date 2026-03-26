import { BrandHeader, StatsRow } from '../../components/CommonBlocks';

export default function AdminDashboardPage() {
  return (
    <main className="page dashboard">
      <BrandHeader links={['Dashboard', 'Schedule']} user="AU" />
      <div className="title-row"><div><h1>Admin Dashboard</h1><p className="muted">Platform management and oversight</p></div><button className="btn-dark">View Schedule</button></div>
      <div className="tabs"><span className="active">Overview</span><span>Users</span><span>System</span><span>Analytics</span><span>Profile</span></div>
      <StatsRow items={[{ title: 'Total Users', value: '2,847', note: '+12%' }, { title: 'Active Companies', value: '156', note: '+8%' }, { title: 'Monthly Hires', value: '492', note: '+23%' }, { title: 'System Health', value: '99.8%', note: 'stable' }]} />
    </main>
  );
}
