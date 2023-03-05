import Navbar from '@/components/partials/navbar';
import Footer from '@/components/partials/footer';
import MobileMenu from '@/components/partials/mobile-menu';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <div className="main">{children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;
