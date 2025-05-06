
import React from 'react';

interface CourseHeaderProps {
  title: string;
  description: string;
}

const CourseHeader: React.FC<CourseHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default CourseHeader;
