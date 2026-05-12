import React from 'react';

const GridSection = ({ categoryData }) => {
  return (
    <div className="grid-container">
      <h2 className="grid-title">{categoryData.title}</h2>
      <div className="grid-content">
        {categoryData.items.map((item) => (
          <div key={item.id} className="grid-card">
            {item.image && (
              <a href={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`} target="_blank" rel="noopener noreferrer" className="grid-image-link">
                <img 
                  src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`} 
                  alt={item.imageAlt || item.title} 
                  className="grid-image"
                />
              </a>
            )}
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            {item.subContent && <p className="sub-content">{item.subContent}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridSection;
