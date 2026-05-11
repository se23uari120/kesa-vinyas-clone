import React, { useState } from 'react';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import GridSection from './components/GridSection';
import { categories } from './data';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('art');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Hero />
      
      <nav className="category-nav">
        {Object.keys(categories).map((key) => (
          <button 
            key={key} 
            className={`nav-btn ${activeTab === key ? 'active' : ''}`}
            onClick={() => handleTabChange(key)}
          >
            {categories[key].title}
          </button>
        ))}
      </nav>

      <main className="main-content">
        {activeTab === 'art' ? (
          categories.art.items.map((data, index) => (
            <StorySection key={data.id} data={data} index={index} />
          ))
        ) : (
          <GridSection categoryData={categories[activeTab]} />
        )}
      </main>
    </div>
  );
}

export default App;
