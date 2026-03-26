import { Navigate, Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav';
import HomePage from './pages/home/HomePage';
import SignupPage from './pages/signup/SignupPage';
import AdminDashboardPage from './pages/admin-dashboard/AdminDashboardPage';
import EmployerDashboardPage from './pages/employer-dashboard/EmployerDashboardPage';
import EmployeeDashboardPage from './pages/employee-dashboard/EmployeeDashboardPage';
import AdminSchedulePage from './pages/admin-schedule/AdminSchedulePage';
import EmployerSchedulePage from './pages/employer-schedule/EmployerSchedulePage';
import EmployeeSchedulePage from './pages/employee-schedule/EmployeeSchedulePage';

export default function App() {
  return (
    <div className="app-shell">
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/employer-dashboard" element={<EmployerDashboardPage />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboardPage />} />
        <Route path="/admin-schedule" element={<AdminSchedulePage />} />
        <Route path="/employer-schedule" element={<EmployerSchedulePage />} />
        <Route path="/employee-schedule" element={<EmployeeSchedulePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
