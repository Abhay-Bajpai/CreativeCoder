import React from 'react';

const TimelineItem = ({ title, institution, year, grade }) => {
  return (
    <>
      <div className="timeline-dot"></div>
      <div className="bg-gray-800 p-6 rounded-lg ml-4">
        <h4 className="text-lg font-semibold mb-1 flex justify-between">
          <span>{title}</span>
          <span className="text-primary/80">{year}</span>
        </h4>
        <p className="text-gray-400 mb-3">{institution}</p>
        <span className="inline-block bg-primary/20 text-primary/90 text-sm px-3 py-1 rounded-md">
          {grade}
        </span>
      </div>
    </>
  );
};

export default TimelineItem;
