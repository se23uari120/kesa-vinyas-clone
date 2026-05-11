import React from 'react';

const GridSection = ({ categoryData }) => {
  return (
    <div className="grid-container">
      <h2 className="grid-title">{categoryData.title}</h2>
      <div className="grid-content">
        {categoryData.items.map((item) => (
          <div key={item.id} className="grid-card">
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
