// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Viewer from './components/Viewer';

const App = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response = await axios.get('/api/parts');
        setParts(response.data);
      } catch (error) {
        console.error('Error fetching parts:', error);
      }
    };
    fetchParts();
  }, []);

  return (
    <div className="h-screen bg-gray-900 text-white">
      <h1 className="text-center text-4xl font-bold py-6">Firearm Builder</h1>
      <Viewer parts={parts} />
    </div>
  );
};

export default App;
