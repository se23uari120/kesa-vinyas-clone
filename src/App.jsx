import React from 'react';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import { storyData } from './data';
import './index.css'; // Make sure this is imported

function App() {
  return (
    <div className="app-container">
      <Hero />
      {storyData.map((data, index) => (
        <StorySection key={data.id} data={data} index={index} />
      ))}
    </div>
  );
}

export default App;
