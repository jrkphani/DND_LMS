
import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard = ({
  title,
  value,
  icon,
  description,
  trend,
  className,
}: StatCardProps) => {
  return (
    <div className={cn("stat-card", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
          {trend && (
            <div className={`flex items-center mt-2 text-xs ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              <span>{trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%</span>
              <span className="ml-1">from last month</span>
            </div>
          )}
        </div>
        <div className="bg-primary/10 p-2 rounded-full text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
