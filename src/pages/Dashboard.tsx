import { AdminLayout } from "@/components/AdminLayout";
import { MetricCard } from "@/components/MetricCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Calendar,
  DollarSign,
  Star,
  TrendingUp,
  AlertTriangle,
  Clock,
  CheckCircle,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  // Mock data
  const recentBookings = [
    {
      id: "BK001",
      customerName: "John Doe",
      service: "Plumbing",
      taskMaster: "Mike Wilson",
      status: "in-progress" as const,
      amount: "₹1,200",
      time: "2 hours ago"
    },
    {
      id: "BK002",
      customerName: "Sarah Johnson",
      service: "House Cleaning",
      taskMaster: "Lisa Chen",
      status: "completed" as const,
      amount: "₹800",
      time: "4 hours ago"
    },
    {
      id: "BK003",
      customerName: "Robert Brown",
      service: "AC Repair",
      taskMaster: "David Kumar",
      status: "pending" as const,
      amount: "₹1,500",
      time: "6 hours ago"
    },
    {
      id: "BK004",
      customerName: "Emily Davis",
      service: "Electrical Work",
      taskMaster: "Amit Sharma",
      status: "cancelled" as const,
      amount: "₹900",
      time: "8 hours ago"
    }
  ];

  const liveIssues = [
    {
      id: "ISS001",
      type: "Complaint",
      description: "Task Master arrived 2 hours late",
      priority: "High",
      time: "30 min ago"
    },
    {
      id: "ISS002",
      type: "Payment Issue",
      description: "Payment failed for booking BK005",
      priority: "Medium",
      time: "1 hour ago"
    },
    {
      id: "ISS003",
      type: "Quality Issue",
      description: "Poor service quality reported",
      priority: "High",
      time: "2 hours ago"
    }
  ];

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening today.</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">Export Report</Button>
            <Button>View Analytics</Button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Users"
            value="12,450"
            change={{ value: "12%", type: "increase" }}
            icon={Users}
            variant="primary"
          />
          <MetricCard
            title="Active Task Masters"
            value="1,280"
            change={{ value: "8%", type: "increase" }}
            icon={Users}
            variant="success"
          />
          <MetricCard
            title="Today's Bookings"
            value="89"
            change={{ value: "23%", type: "increase" }}
            icon={Calendar}
          />
          <MetricCard
            title="Revenue (This Month)"
            value="₹8,45,230"
            change={{ value: "15%", type: "increase" }}
            icon={DollarSign}
            variant="success"
          />
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            title="Average Rating"
            value="4.8"
            change={{ value: "0.2", type: "increase" }}
            icon={Star}
            variant="warning"
          />
          <MetricCard
            title="Completion Rate"
            value="94.5%"
            change={{ value: "2.1%", type: "increase" }}
            icon={CheckCircle}
            variant="success"
          />
          <MetricCard
            title="Response Time"
            value="12 min"
            change={{ value: "3 min", type: "decrease" }}
            icon={Clock}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Bookings */}
          <Card className="data-table">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Recent Bookings</span>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th>Booking ID</th>
                      <th>Customer</th>
                      <th>Service</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking.id}>
                        <td className="font-medium">{booking.id}</td>
                        <td>
                          <div>
                            <p className="font-medium">{booking.customerName}</p>
                            <p className="text-xs text-muted-foreground">{booking.time}</p>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p>{booking.service}</p>
                            <p className="text-xs text-muted-foreground">{booking.taskMaster}</p>
                          </div>
                        </td>
                        <td>
                          <StatusBadge status={booking.status} />
                        </td>
                        <td className="font-medium">{booking.amount}</td>
                        <td>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Live Issues */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                  Live Issues
                </span>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {liveIssues.map((issue) => (
                  <div key={issue.id} className="border-l-4 border-amber-400 pl-4 py-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">{issue.type}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            issue.priority === 'High' 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {issue.priority}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{issue.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{issue.time}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Resolve
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2"
                onClick={() => navigate('/task-masters#add')}
              >
                <Users className="h-6 w-6" />
                <span className="text-sm">Add Task Master</span>
              </Button>
              
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}