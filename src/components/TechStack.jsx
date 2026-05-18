import React from 'react'

function TechStack({ items }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item} className="skill-chip">
          {item}
        </div>
      ))}
    </div>
  );
}

export default TechStack;
