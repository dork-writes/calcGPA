import { useEffect, useState } from 'react';
import './App.css';
import GPAForm from './components/GPAForm';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [rendered, setRendered] = useState(false);

  useEffect(() =>
  {
    if (!rendered)
    {
      navigate('/calcGPA');
      setRendered(true);
    }
  }, [navigate, rendered]);

  return (
    <div className="App-header text-gray-200">
      <GPAForm />
    </div>
  );
}

export default App;
