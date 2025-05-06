
export type CourseType = '3s-orientation' | 'refresher' | 'advanced';
export type CourseStatus = 'not-started' | 'in-progress' | 'completed';

export interface CourseData {
  id: number;
  title: string;
  type: CourseType;
  description: string;
  duration: string;
  enrollmentCount: number;
  modules: number;
  status: CourseStatus;
  progress?: number;
}
