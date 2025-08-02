import  { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MethodologyPage from './pages/MethodologyPage';
import CasesPage from './pages/CasesPage';
import ContactPage from './pages/ContactPage';
import ToolsPage from './pages/ToolsPage';
import PatientDashboardPage from './pages/PatientDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import TreatmentGeneratorPage from './pages/TreatmentGeneratorPage';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/patient-dashboard" element={<PatientDashboardPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/treatment-generator" element={<TreatmentGeneratorPage />} />
        </Routes>
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default App;
 