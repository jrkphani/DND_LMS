
import { CourseData, CourseType } from "@/types/course";

// Static course data - in a real app, this would come from an API
export const coursesData: CourseData[] = [
  {
    id: 1,
    title: '3S Orientation: Sales Fundamentals',
    type: '3s-orientation',
    description: 'Learn the essential sales techniques for Yamaha products and services.',
    duration: '4 hours',
    enrollmentCount: 245,
    modules: 8,
    status: 'in-progress',
    progress: 35
  },
  {
    id: 2,
    title: 'Service Department Operations',
    type: '3s-orientation',
    description: 'Comprehensive guide to running an efficient service department.',
    duration: '5 hours',
    enrollmentCount: 189,
    modules: 6,
    status: 'not-started'
  },
  {
    id: 3,
    title: 'Spare Parts Management',
    type: '3s-orientation',
    description: 'Inventory control and management for Yamaha spare parts.',
    duration: '3 hours',
    enrollmentCount: 156,
    modules: 5,
    status: 'completed',
    progress: 100
  },
  {
    id: 4,
    title: 'Customer Service Excellence',
    type: 'refresher',
    description: 'Update your customer service skills with the latest best practices.',
    duration: '2 hours',
    enrollmentCount: 324,
    modules: 4,
    status: 'not-started'
  },
  {
    id: 5,
    title: 'Yamaha Product Knowledge 2025',
    type: 'refresher',
    description: "Latest updates on Yamaha's product lineup for 2025.",
    duration: '3 hours',
    enrollmentCount: 278,
    modules: 6,
    status: 'not-started'
  },
  {
    id: 6,
    title: 'Yamaha Learning Academy: Advanced Sales',
    type: 'advanced',
    description: 'Advanced sales techniques for experienced staff.',
    duration: '8 hours',
    enrollmentCount: 87,
    modules: 10,
    status: 'not-started'
  },
  {
    id: 7,
    title: 'Yamaha Service Academy: Engine Diagnostics',
    type: 'advanced',
    description: 'Advanced diagnostic techniques for Yamaha engines.',
    duration: '10 hours',
    enrollmentCount: 65,
    modules: 8,
    status: 'not-started'
  },
  {
    id: 8,
    title: 'Yamaha Certification: Sales Specialist',
    type: 'advanced',
    description: 'Certification program for Yamaha sales specialists.',
    duration: '12 hours',
    enrollmentCount: 43,
    modules: 12,
    status: 'not-started'
  }
];

// Simulating an API service call
export const fetchCourses = (): Promise<CourseData[]> => {
  return Promise.resolve(coursesData);
};
