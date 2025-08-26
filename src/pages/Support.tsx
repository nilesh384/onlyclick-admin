import { AdminLayout } from "@/components/AdminLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Filter,
  Eye,
  MessageSquare,
  Phone,
  User,
  Clock,
  AlertTriangle,
  FileText,
  DollarSign
} from "lucide-react";

export default function Support() {
  // Mock data
  const complaints = [
    {
      id: "TCK001",
      type: "Service Quality",
      title: "Poor cleaning service quality",
      customerName: "John Doe",
      customerPhone: "+91 9876543210",
      linkedBooking: "BK001",
      priority: "High",
      status: "open",
      assignedAgent: "Sarah Wilson",
      createdAt: "2024-01-15 14:30",
      description: "The cleaning service was incomplete. Many areas were left untouched and the quality was poor."
    },
    {
      id: "TCK002",
      type: "Delay",
      title: "Task Master arrived 2 hours late",
      customerName: "Emily Davis",
      customerPhone: "+91 9876543216",
      linkedBooking: "BK004",
      priority: "Medium",
      status: "in-progress",
      assignedAgent: "Mike Johnson",
      createdAt: "2024-01-15 12:15",
      description: "Task Master was supposed to arrive at 2 PM but came at 4 PM without prior notice."
    },
    {
      id: "TCK003",
      type: "Payment Issue",
      title: "Double charge on payment",
      customerName: "Robert Brown",
      customerPhone: "+91 9876543214",
      linkedBooking: "BK003",
      priority: "High",
      status: "open",
      assignedAgent: "Lisa Chen",
      createdAt: "2024-01-15 11:45",
      description: "Customer was charged twice for the same service. Requesting immediate refund."
    },
    {
      id: "TCK004",
      type: "App Issue",
      title: "Unable to track Task Master location",
      customerName: "Sarah Johnson",
      customerPhone: "+91 9876543212",
      linkedBooking: "BK002",
      priority: "Low",
      status: "closed",
      assignedAgent: "David Kumar",
      createdAt: "2024-01-14 16:20",
      description: "App was not showing live location of Task Master during service."
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <StatusBadge status="pending" />;
      case 'in-progress':
        return <StatusBadge status="in-progress" />;
      case 'closed':
        return <StatusBadge status="completed" />;
      default:
        return <StatusBadge status="pending" />;
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Support & Complaints</h1>
            <p className="text-muted-foreground mt-1">Manage customer issues and support tickets</p>
          </div>
          <Button>Create Ticket</Button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Open Tickets</p>
                  <p className="text-2xl font-bold">23</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                  <p className="text-2xl font-bold">15</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Resolved Today</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <FileText className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Response Time</p>
                  <p className="text-2xl font-bold">2.4h</p>
                </div>
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by ticket ID, customer name, or issue..."
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="quality">Service Quality</SelectItem>
                  <SelectItem value="delay">Delay</SelectItem>
                  <SelectItem value="payment">Payment Issue</SelectItem>
                  <SelectItem value="app">App Issue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Support Tickets Table */}
        <Card className="data-table">
          <CardHeader>
            <CardTitle>Support Tickets</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Ticket Details</th>
                    <th>Customer</th>
                    <th>Issue Description</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Assigned Agent</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((complaint) => (
                    <tr key={complaint.id}>
                      <td>
                        <div>
                          <p className="font-medium">{complaint.id}</p>
                          <div className="text-xs text-muted-foreground mt-1">
                            <span className="bg-muted px-2 py-1 rounded">{complaint.type}</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Booking: <span className="font-mono">{complaint.linkedBooking}</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {new Date(complaint.createdAt).toLocaleDateString()} {new Date(complaint.createdAt).toLocaleTimeString()}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-muted-foreground" />
                            <p className="font-medium">{complaint.customerName}</p>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Phone className="h-3 w-3 mr-1" />
                            {complaint.customerPhone}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <p className="font-medium text-sm">{complaint.title}</p>
                          <p className="text-xs text-muted-foreground mt-1 max-w-xs">
                            {complaint.description}
                          </p>
                        </div>
                      </td>
                      <td>
                        <Badge className={getPriorityColor(complaint.priority)}>
                          {complaint.priority}
                        </Badge>
                      </td>
                      <td>
                        {getStatusBadge(complaint.status)}
                      </td>
                      <td>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="text-sm">{complaint.assignedAgent}</span>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <DollarSign className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
                <DollarSign className="h-5 w-5" />
                <span className="text-sm">Issue Refund</span>
              </Button>
              
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing 1 to 4 of 67 tickets
          </p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="default" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}