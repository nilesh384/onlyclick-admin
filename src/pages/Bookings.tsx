import { AdminLayout } from "@/components/AdminLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Search,
  Filter,
  Eye,
  MoreHorizontal,
  Calendar,
  MapPin,
  Phone,
  User
} from "lucide-react";

export default function Bookings() {
  // Mock data
  const bookings = [
    {
      id: "BK001",
      customerName: "John Doe",
      customerPhone: "+91 9876543210",
      service: "Plumbing",
      taskMaster: "Mike Wilson",
      taskMasterPhone: "+91 9876543211",
      status: "in-progress" as const,
      amount: "₹1,200",
      scheduledTime: "2024-01-15 14:00",
      location: "Sector 15, Gurgaon",
      otp: "1234"
    },
    {
      id: "BK002",
      customerName: "Sarah Johnson",
      customerPhone: "+91 9876543212",
      service: "House Cleaning",
      taskMaster: "Lisa Chen",
      taskMasterPhone: "+91 9876543213",
      status: "completed" as const,
      amount: "₹800",
      scheduledTime: "2024-01-15 10:00",
      location: "DLF Phase 2, Gurgaon",
      otp: "5678"
    },
    {
      id: "BK003",
      customerName: "Robert Brown",
      customerPhone: "+91 9876543214",
      service: "AC Repair",
      taskMaster: "David Kumar",
      taskMasterPhone: "+91 9876543215",
      status: "pending" as const,
      amount: "₹1,500",
      scheduledTime: "2024-01-16 09:00",
      location: "Cyber City, Gurgaon",
      otp: "9012"
    },
    {
      id: "BK004",
      customerName: "Emily Davis",
      customerPhone: "+91 9876543216",
      service: "Electrical Work",
      taskMaster: "Amit Sharma",
      taskMasterPhone: "+91 9876543217",
      status: "cancelled" as const,
      amount: "₹900",
      scheduledTime: "2024-01-15 16:00",
      location: "MG Road, Gurgaon",
      otp: "3456"
    }
  ];

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Bookings Management</h1>
            <p className="text-muted-foreground mt-1">View and manage all user bookings</p>
          </div>
          <Button>Create Booking</Button>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by booking ID, customer name, or service..."
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                  <SelectItem value="cleaning">House Cleaning</SelectItem>
                  <SelectItem value="electrical">Electrical Work</SelectItem>
                  <SelectItem value="ac-repair">AC Repair</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bookings Table */}
        <Card className="data-table">
          <CardHeader>
            <CardTitle>All Bookings</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Booking Details</th>
                    <th>Customer</th>
                    <th>Task Master</th>
                    <th>Service</th>
                    <th>Schedule</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>
                        <div>
                          <p className="font-medium">{booking.id}</p>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            {booking.location}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            OTP: <span className="font-mono bg-muted px-1 rounded">{booking.otp}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-muted-foreground" />
                            <p className="font-medium">{booking.customerName}</p>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Phone className="h-3 w-3 mr-1" />
                            {booking.customerPhone}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-muted-foreground" />
                            <p className="font-medium">{booking.taskMaster}</p>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Phone className="h-3 w-3 mr-1" />
                            {booking.taskMasterPhone}
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="font-medium">{booking.service}</span>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <div>
                            <p className="text-sm">{new Date(booking.scheduledTime).toLocaleDateString()}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(booking.scheduledTime).toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <StatusBadge status={booking.status} />
                      </td>
                      <td>
                        <span className="font-medium">{booking.amount}</span>
                      </td>
                      <td>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
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

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing 1 to 4 of 150 bookings
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