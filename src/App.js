import { useContext, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './admin/dashboard';
import { AuthContext } from './context/AuthContext';
import Home from './home';
import Login from './login';
import NotFound from './not-found';
import ThankYouPage from './ThankYouPage';
import AboutUs from './components/screens/About';
import ContactUs from './components/screens/Contact-us';
import Creta from './vehicles/Creta';
import Venue from './vehicles/Venue';
import Exter from './vehicles/Exter';
import Verna from './vehicles/verna';
import Aura from './vehicles/Aura';
import Alcazar from './vehicles/Alcazar';
import I20 from './vehicles/i20';
import GrandI10Nios from './vehicles/Grandi10Nios';
import Tucson from './vehicles/Tucson';
import CretaNLine from './vehicles/creta-n-line';
import Ioniq5 from './Electric-vechicles/Ioniq5';
import CretaEV from './Electric-vechicles/CretaEV';
import PrivacyPolicy from './components/screens/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import OutletsPage from './components/screens/OutletsPage';
import Gallery from './components/screens/Gallery';
import VenueNLine from './vehicles/VenueNLine';
import Accessories from './components/Accessories';

const App = () => {
  const { currentUser } = useContext(AuthContext);

  console.log('currentUser', currentUser);

  const ProtectedRoute = ({ children }) => {
    return currentUser ? children : <Navigate to='/' />;
  };

  const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <>
      <ScrollTop />
      <Toaster />
      <Routes>
   
        <Route path='/thank-you' element={<ThankYouPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/About-us' element={<AboutUs />} />
        <Route path='/vehicles/creta' element={<Creta />} />
        <Route path='/vehicles/venue' element={<Venue />} />
        <Route path='/vehicles/exter' element={<Exter />} />
        <Route path='/vehicles/verna' element={<Verna />} />
        <Route path='/vehicles/aura' element={<Aura />} />
        <Route path='/vehicles/alcazar' element={<Alcazar />} />
        <Route path='/vehicles/i20' element={<I20 />} />
        <Route path='/vehicles/nios' element={<GrandI10Nios />} />
        <Route path='/vehicles/tucson' element={<Tucson />} />
        <Route path='/vehicles/creta-n-line' element={<CretaNLine />} />
        <Route path='/vehicles/ioniq-5' element={<Ioniq5 />} />
        <Route path='/vehicles/creta-ev' element={<CretaEV />} />
        <Route path='/vehicles/venue-n-line' element={<VenueNLine />} />

        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/terms-conditions' element={<TermsConditions />} />
        <Route path='/outlets' element={<OutletsPage />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/accessories' element={<Accessories />} />
        {/* ===========Admin authentication=========== */}
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<NotFound />} />

        {/* ===========admin routes=========== */}
        <Route
          path='/admin/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
           <Route
          path="/dashboard/:city"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      
    </>
  );
};

export default App;
