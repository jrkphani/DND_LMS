
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface CourseSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const CourseSearch: React.FC<CourseSearchProps> = ({ value, onChange }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative flex-grow">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input 
        placeholder="Search courses..." 
        className="pl-10" 
        value={value}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default CourseSearch;
