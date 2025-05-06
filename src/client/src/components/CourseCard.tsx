import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Book, Clock, Users } from 'lucide-react';

export type CourseType = '3s-orientation' | 'refresher' | 'advanced';
export type CourseStatus = 'not-started' | 'in-progress' | 'completed';

interface CourseCardProps {
  title: string;
  type: CourseType;
  duration: string;
  enrollmentCount?: number;
  thumbnail?: string;
  status?: CourseStatus;
  progress?: number;
  className?: string;
}

const CourseCard = ({
  title,
  type,
  duration,
  enrollmentCount,
  thumbnail = '',
  status = 'not-started',
  progress = 0,
  className,
}: CourseCardProps) => {
  const getTypeLabel = (type: CourseType) => {
    switch (type) {
      case '3s-orientation':
        return { label: '3S Orientation', color: 'bg-blue-500' };
      case 'refresher':
        return { label: 'Refresher', color: 'bg-green-500' };
      case 'advanced':
        return { label: 'Advanced', color: 'bg-purple-500' };
      default:
        return { label: 'Course', color: 'bg-gray-500' };
    }
  };

  const typeInfo = getTypeLabel(type);

  const getStatusButton = (status: CourseStatus) => {
    switch (status) {
      case 'not-started':
        return <Button>Enroll Now</Button>;
      case 'in-progress':
        return <Button>Continue Learning</Button>;
      case 'completed':
        return <Button variant="outline">Review Course</Button>;
      default:
        return <Button>View Course</Button>;
    }
  };

  return (
    <div className={cn("course-card", className)}>
      <div className="aspect-video relative overflow-hidden">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <Book className="h-12 w-12 text-muted-foreground/40" />
          </div>
        )}
        <Badge className={`absolute top-3 right-3 ${typeInfo.color} hover:${typeInfo.color}`}>
          {typeInfo.label}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          {enrollmentCount && (
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{enrollmentCount} enrolled</span>
            </div>
          )}
        </div>
        
        {status === 'in-progress' && (
          <div className="mb-4">
            <div className="flex justify-between mb-1 text-xs">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white border border-blue-100 shadow-sm">
              <div
                className="h-2 rounded-full bg-violet-700 transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {getStatusButton(status)}
      </div>
    </div>
  );
};

export default CourseCard;
