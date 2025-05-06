
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CourseGrid from './CourseGrid';
import { CourseData } from '@/types/course';
import { filterByStatus } from '@/utils/courseFilters';

interface CourseTabsProps {
  courses: CourseData[];
  allCourses: CourseData[];
  onTabChange: (type: string) => void;
}

const CourseTabs: React.FC<CourseTabsProps> = ({ 
  courses, 
  allCourses,
  onTabChange 
}) => {
  return (
    <Tabs defaultValue="all">
      <TabsList>
        <TabsTrigger value="all" onClick={() => onTabChange('all')}>
          All Courses
        </TabsTrigger>
        <TabsTrigger value="enrolled">
          Enrolled
        </TabsTrigger>
        <TabsTrigger value="completed">
          Completed
        </TabsTrigger>
        <TabsTrigger value="required">
          Required
        </TabsTrigger>
      </TabsList>

      <TabsContent value="all" className="mt-6">
        <CourseGrid courses={courses} />
      </TabsContent>

      <TabsContent value="enrolled" className="mt-6">
        <CourseGrid courses={filterByStatus(allCourses, 'in-progress')} />
      </TabsContent>

      <TabsContent value="completed" className="mt-6">
        <CourseGrid courses={filterByStatus(allCourses, 'completed')} />
      </TabsContent>

      <TabsContent value="required" className="mt-6">
        <CourseGrid courses={allCourses.filter(course => course.type === '3s-orientation')} />
      </TabsContent>
    </Tabs>
  );
};

export default CourseTabs;
