import NavbarTop from '../common/NavbarTop';
import Footer from '../common/Footer';
import { Outlet } from 'react-router-dom';

function Principal() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', minWidth: '100vw' }}>
        <NavbarTop />
        <main className="container my-4" style={{ flex: 1 }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Principal;