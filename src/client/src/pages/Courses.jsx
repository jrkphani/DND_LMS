import React, { useEffect, useState } from 'react';
import { fetchCourses } from '@/services/courseService';
import useCourseFilter from '@/hooks/useCourseFilter';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseSearch from '@/components/courses/CourseSearch';
import CourseFilters from '@/components/courses/CourseFilters';
import CourseTabs from '@/components/courses/CourseTabs';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const {
    filteredCourses,
    searchTerm,
    handleSearch,
    handleFilterChange
  } = useCourseFilter(courses);
  
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadCourses();
  }, []);
  
  if (loading) {
    return <div className="p-6">Loading courses...</div>;
  }
  
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        <CourseHeader 
          title="Course Catalog" 
          description="Browse and enroll in training courses" 
        />
        
        <div className="flex flex-col md:flex-row gap-4">
          <CourseSearch 
            value={searchTerm} 
            onChange={handleSearch} 
          />
          <CourseFilters 
            onFilterChange={handleFilterChange} 
          />
        </div>
        
        <CourseTabs 
          courses={filteredCourses} 
          allCourses={courses}
          onTabChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default Courses; 