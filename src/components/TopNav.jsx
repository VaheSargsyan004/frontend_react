import { NavLink, useLocation } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/signup', 'Signup'],
  ['/admin-dashboard', 'Admin Dashboard'],
  ['/employer-dashboard', 'Employer Dashboard'],
  ['/employee-dashboard', 'Employee Dashboard'],
  ['/admin-schedule', 'Admin Schedule'],
  ['/employer-schedule', 'Employer Schedule'],
  ['/employee-schedule', 'Employee Schedule'],
];

export default function TopNav() {
  const { pathname } = useLocation();
  const isSignup = pathname === '/signup';
  if (isSignup) return null;

  return (
    <nav className="top-nav">
      {links.map(([to, label]) => (
        <NavLink key={to} to={to} className={({ isActive }) => `tab-link ${isActive ? 'active' : ''}`}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
