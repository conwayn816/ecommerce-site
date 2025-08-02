import { Container } from 'react-bootstrap'
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import { setCsrfToken } from './slices/authSlice';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const response = await fetch('/api/csrf-token');
      const data = await response.json();
      dispatch(setCsrfToken(data.csrfToken));
    };

    fetchCsrfToken();
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App
