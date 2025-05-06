
/**
 * Utility functions for filtering course data
 */

import { CourseData } from "@/types/course";

/**
 * Filter courses by search term
 */
export const filterBySearchTerm = (courses: CourseData[], searchTerm: string) => {
  if (!searchTerm) return courses;
  
  const term = searchTerm.toLowerCase();
  return courses.filter(course => 
    course.title.toLowerCase().includes(term) || 
    course.description.toLowerCase().includes(term)
  );
};

/**
 * Filter courses by type
 */
export const filterByType = (courses: CourseData[], type: string, searchTerm: string = '') => {
  if (type === 'all') {
    return filterBySearchTerm(courses, searchTerm);
  }
  
  return courses.filter(course => 
    course.type === type && 
    (searchTerm ? 
      (course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       course.description.toLowerCase().includes(searchTerm.toLowerCase())) : 
      true
    )
  );
};

/**
 * Filter courses by status
 */
export const filterByStatus = (courses: CourseData[], status: string) => {
  return courses.filter(course => course.status === status);
};
