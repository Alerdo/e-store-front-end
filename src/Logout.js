import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any stored state, tokens, etc here
    // For example, if you're storing the login state in localStorage
    localStorage.removeItem('isLoggedIn');

    // Redirect to login page or home page
    navigate('/');
  }, [navigate]);

  return (
    <div>
      Logging you out...
    </div>
  );
};

export default Logout;
