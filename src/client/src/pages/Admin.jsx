import React from 'react';
import { 
  Users, 
  FileText, 
  CheckCircle, 
  Clock, 
  Calendar,
  ChevronRight,
  Download
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import StatCard from '@/components/StatCard';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const statsData = [
  { 
    title: 'Total Staff Registered', 
    value: '7,861', 
    icon: <Users className="h-5 w-5" />,
    description: 'Across all dealerships'
  },
  { 
    title: 'Pending Applications', 
    value: '7', 
    icon: <Clock className="h-5 w-5" />, 
    description: 'Waiting for review'
  },
  { 
    title: 'Approved Applications', 
    value: '29', 
    icon: <CheckCircle className="h-5 w-5" />, 
    description: 'This month'
  },
  { 
    title: 'Scheduled Sessions', 
    value: '12', 
    icon: <Calendar className="h-5 w-5" />, 
    description: 'Upcoming in next 30 days'
  }
];

const recentApplications = [
  {
    id: 'APP-001',
    name: 'Jane Smith',
    dealership: 'Yamaha Motors Central',
    position: 'Sales Executive',
    program: 'YLA: Advanced Sales',
    date: '2025-05-02',
    status: 'pending'
  },
  {
    id: 'APP-002',
    name: 'Robert Johnson',
    dealership: 'Yamaha City Branch',
    position: 'Service Manager',
    program: 'YSA: Engine Diagnostics',
    date: '2025-05-01',
    status: 'approved'
  },
  {
    id: 'APP-003',
    name: 'Emily Williams',
    dealership: 'Yamaha Flagship Store',
    position: 'Spare Parts Supervisor',
    program: 'YC: Inventory Specialist',
    date: '2025-04-30',
    status: 'approved'
  },
  {
    id: 'APP-004',
    name: 'Michael Brown',
    dealership: 'Yamaha Motors West',
    position: 'Sales Manager',
    program: 'YLA: Leadership',
    date: '2025-04-29',
    status: 'pending'
  },
  {
    id: 'APP-005',
    name: 'Sarah Davis',
    dealership: 'Yamaha Motors East',
    position: 'Service Technician',
    program: 'YSA: Electronics',
    date: '2025-04-28',
    status: 'approved'
  }
];

const newDealerships = [
  {
    id: 'D-001',
    name: 'Yamaha Premier City',
    location: 'Chicago, IL',
    staff: 12,
    openingDate: '2025-05-15',
    orientationStatus: 'scheduled'
  },
  {
    id: 'D-002',
    name: 'Yamaha Motors Downtown',
    location: 'Miami, FL',
    staff: 8,
    openingDate: '2025-05-20',
    orientationStatus: 'pending'
  },
  {
    id: 'D-003',
    name: 'Yamaha Flagship West',
    location: 'Los Angeles, CA',
    staff: 15,
    openingDate: '2025-06-01',
    orientationStatus: 'pending'
  }
];

const Admin = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage training programs, applications and user accounts</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <StatCard 
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            description={stat.description}
          />
        ))}
      </div>

      <Tabs defaultValue="applications" className="w-full">
        <TabsList>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="new-dealers">New Dealerships</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="applications" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Manage training program applications</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Dealership</TableHead>
                    <TableHead>Program</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell>{application.id}</TableCell>
                      <TableCell>{application.name}</TableCell>
                      <TableCell>{application.dealership}</TableCell>
                      <TableCell>{application.program}</TableCell>
                      <TableCell>{application.date}</TableCell>
                      <TableCell>
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                          application.status === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {application.status === 'pending' ? 'Pending' : 'Approved'}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="new-dealers" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>New Dealerships</CardTitle>
                <CardDescription>Manage orientation for new dealerships</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Add Dealership
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Dealership</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Staff Count</TableHead>
                    <TableHead>Opening Date</TableHead>
                    <TableHead>Orientation</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {newDealerships.map((dealership) => (
                    <TableRow key={dealership.id}>
                      <TableCell>{dealership.id}</TableCell>
                      <TableCell>{dealership.name}</TableCell>
                      <TableCell>{dealership.location}</TableCell>
                      <TableCell>{dealership.staff}</TableCell>
                      <TableCell>{dealership.openingDate}</TableCell>
                      <TableCell>
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                          dealership.orientationStatus === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {dealership.orientationStatus === 'pending' ? 'Pending' : 'Scheduled'}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Download training and application reports</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="mr-2">
                <FileText className="h-4 w-4 mr-2" /> Download Staff Report
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" /> Download Application Report
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin; 