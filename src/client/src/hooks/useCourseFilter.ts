
import { useState, useEffect } from 'react';
import { CourseData } from '@/types/course';
import { filterBySearchTerm, filterByType } from '@/utils/courseFilters';

export const useCourseFilter = (initialCourses: CourseData[]) => {
  const [courses, setCourses] = useState<CourseData[]>(initialCourses);
  const [filteredCourses, setFilteredCourses] = useState<CourseData[]>(initialCourses);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeType, setActiveType] = useState('all');

  useEffect(() => {
    setCourses(initialCourses);
    handleFilterChange(activeType, searchTerm);
  }, [initialCourses]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    handleFilterChange(activeType, term);
  };

  const handleFilterChange = (type: string, term: string = searchTerm) => {
    setActiveType(type);
    setFilteredCourses(filterByType(courses, type, term));
  };

  return {
    filteredCourses,
    searchTerm,
    activeType,
    handleSearch,
    handleFilterChange
  };
};

export default useCourseFilter;
