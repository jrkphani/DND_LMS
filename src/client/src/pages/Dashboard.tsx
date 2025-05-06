
import React, { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  FileCheck, 
  FileText, 
  Book, 
  RefreshCw,
  Award
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import StatCard from '@/components/StatCard';
import CourseCard, { CourseType } from '@/components/CourseCard';

// Placeholder data
const statsData = [
  { 
    title: 'Total Registered', 
    value: '7,861', 
    icon: <Users className="h-5 w-5" />,
    trend: { value: 8.2, isPositive: true } 
  },
  { 
    title: 'Updated Profiles', 
    value: '362', 
    icon: <UserCheck className="h-5 w-5" />, 
    trend: { value: 4.5, isPositive: true }
  },
  { 
    title: 'Total Applications', 
    value: '36', 
    icon: <FileText className="h-5 w-5" />, 
    trend: { value: 2.1, isPositive: false }
  },
  { 
    title: 'Completed Applications', 
    value: '29', 
    icon: <FileCheck className="h-5 w-5" />, 
    trend: { value: 12.5, isPositive: true }
  }
];

const courseTypeFilters: { label: string; value: CourseType | 'all' }[] = [
  { label: 'All Courses', value: 'all' },
  { label: '3S Orientation', value: '3s-orientation' },
  { label: 'Refresher', value: 'refresher' },
  { label: 'Advanced', value: 'advanced' },
];

const mockCourses = [
  {
    id: 1,
    title: '3S Orientation: Sales Fundamentals',
    type: '3s-orientation' as CourseType,
    duration: '4 hours',
    enrollmentCount: 245,
    status: 'in-progress' as const,
    progress: 35
  },
  {
    id: 2,
    title: 'Service Department Operations',
    type: '3s-orientation' as CourseType,
    duration: '5 hours',
    enrollmentCount: 189,
    status: 'not-started' as const
  },
  {
    id: 3,
    title: 'Spare Parts Management',
    type: '3s-orientation' as CourseType,
    duration: '3 hours',
    enrollmentCount: 156,
    status: 'completed' as const,
    progress: 100
  },
  {
    id: 4,
    title: 'Customer Service Excellence',
    type: 'refresher' as CourseType,
    duration: '2 hours',
    enrollmentCount: 324,
    status: 'not-started' as const
  },
  {
    id: 5,
    title: 'Yamaha Product Knowledge 2025',
    type: 'refresher' as CourseType,
    duration: '3 hours',
    enrollmentCount: 278,
    status: 'not-started' as const
  },
  {
    id: 6,
    title: 'Yamaha Learning Academy: Advanced Sales',
    type: 'advanced' as CourseType,
    duration: '8 hours',
    enrollmentCount: 87,
    status: 'not-started' as const
  }
];

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState<CourseType | 'all'>('all');
  const [activeCourses, setActiveCourses] = useState(mockCourses);

  const handleFilterChange = (filter: CourseType | 'all') => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setActiveCourses(mockCourses);
    } else {
      setActiveCourses(mockCourses.filter(course => course.type === filter));
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's what's happening with your learning journey today.</p>
        </div>
        <Button className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh Data
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <StatCard 
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>

      <Tabs defaultValue="courses" className="w-full">
        <TabsList>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>
        <TabsContent value="courses">
          <div className="mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Learning Progress</CardTitle>
                <CardDescription>You are enrolled in 3 courses and have completed 1 course.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>3S Orientation</span>
                      <span>66%</span>
                    </div>
                    <Progress value={66} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Overall Completion</span>
                      <span>33%</span>
                    </div>
                    <Progress value={33} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <CardTitle>Available Courses</CardTitle>
                  <CardDescription>Browse courses available for your role</CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  {courseTypeFilters.map((filter) => (
                    <Button 
                      key={filter.value}
                      variant={activeFilter === filter.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleFilterChange(filter.value)}
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {activeCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    title={course.title}
                    type={course.type}
                    duration={course.duration}
                    enrollmentCount={course.enrollmentCount}
                    status={course.status}
                    progress={course.progress}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="certifications">
          <Card>
            <CardHeader>
              <CardTitle>Your Certifications</CardTitle>
              <CardDescription>Manage your completed certifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Award className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-medium">3S Orientation: Service</h4>
                    <p className="text-sm text-muted-foreground">Completed on April 15, 2025</p>
                  </div>
                </div>
                <Button variant="outline">Download</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Award className="h-10 w-10 text-primary" />
                  <div>
                    <h4 className="font-medium">Product Knowledge 2024</h4>
                    <p className="text-sm text-muted-foreground">Completed on January 22, 2025</p>
                  </div>
                </div>
                <Button variant="outline">Download</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
              <CardDescription>Track your training applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Yamaha Learning Academy</h4>
                    <p className="text-sm text-muted-foreground">Submitted on May 2, 2025</p>
                  </div>
                  <div>
                    <Badge className="bg-amber-500">Pending Approval</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Yamaha Service Academy</h4>
                    <p className="text-sm text-muted-foreground">Submitted on April 25, 2025</p>
                  </div>
                  <div>
                    <Badge className="bg-green-500">Approved</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
