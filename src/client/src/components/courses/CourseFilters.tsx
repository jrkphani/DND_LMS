
import React from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CourseFiltersProps {
  onFilterChange: (type: string) => void;
}

const CourseFilters: React.FC<CourseFiltersProps> = ({ onFilterChange }) => {
  return (
    <div className="flex gap-4">
      <Select defaultValue="all" onValueChange={onFilterChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Courses</SelectItem>
          <SelectItem value="3s-orientation">3S Orientation</SelectItem>
          <SelectItem value="refresher">Refresher</SelectItem>
          <SelectItem value="advanced">Advanced</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline">
        <Filter className="h-4 w-4 mr-2" />
        More Filters
      </Button>
    </div>
  );
};

export default CourseFilters;
