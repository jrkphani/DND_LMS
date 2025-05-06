
import React from 'react';
import { Book } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import { CourseData } from '@/types/course';

interface CourseGridProps {
  courses: CourseData[];
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => {
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Book className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold mb-1">No courses found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filter to find what you're looking for
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map(course => (
        <CourseCard
          key={course.id}
          title={course.title}
          type={course.type}
          duration={course.duration}
          enrollmentCount={course.enrollmentCount}
          status={course.status}
          progress={course.progress}
        />
      ))}
    </div>
  );
};

export default CourseGrid;
