import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

const MainLayout = ({ children }) => (
  <>
    <Navigation />
    <>{children}</>
    <Footer />
  </>
);

export default MainLayout;
