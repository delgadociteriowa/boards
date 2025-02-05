import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => (
  <>
    <Navigation />
    <>{children}</>
    <Footer />
  </>
);

export default MainLayout;
