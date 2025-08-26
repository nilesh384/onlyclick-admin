import { useState } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { MetricCard } from "@/components/MetricCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Search, 
  Filter, 
  Eye, 
  CheckCircle, 
  XCircle, 
  Phone, 
  MapPin, 
  Calendar,
  FileText,
  Download
} from "lucide-react";

interface TaskMaster {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  services: string[];
  appliedDate: string;
  status: 'pending' | 'under_review' | 'approved' | 'rejected';
  experience: string;
  rating?: number;
  aadharNumber: string;
  aadharVerified: boolean;
  documents: {
    aadharCard: string;
    photo: string;
    certificate?: string;
  };
}

const mockTaskMasters: TaskMaster[] = [
  {
    id: "TM001",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    phone: "+91 9876543210",
    location: "Delhi, India",
    services: ["Plumbing", "Electrical"],
    appliedDate: "2024-01-15",
    status: "pending",
    experience: "5 years",
    aadharNumber: "1234 5678 9012",
    aadharVerified: true,
    documents: {
      aadharCard: "/api/placeholder/400/250",
      photo: "/api/placeholder/150/150"
    }
  },
  {
    id: "TM002",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 8765432109",
    location: "Mumbai, India",
    services: ["Cleaning", "Cooking"],
    appliedDate: "2024-01-14",
    status: "under_review",
    experience: "3 years",
    aadharNumber: "9876 5432 1098",
    aadharVerified: true,
    documents: {
      aadharCard: "/api/placeholder/400/250",
      photo: "/api/placeholder/150/150"
    }
  },
  {
    id: "TM003",
    name: "Mohammed Ali",
    email: "mohammed.ali@email.com",
    phone: "+91 7654321098",
    location: "Bangalore, India",
    services: ["AC Repair", "Appliance Repair"],
    appliedDate: "2024-01-13",
    status: "pending",
    experience: "7 years",
    aadharNumber: "5678 9012 3456",
    aadharVerified: false,
    documents: {
      aadharCard: "/api/placeholder/400/250",
      photo: "/api/placeholder/150/150"
    }
  }
];

export default function TaskMasterApproval() {
  const [selectedTaskMaster, setSelectedTaskMaster] = useState<TaskMaster | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredTaskMasters = mockTaskMasters.filter(tm => {
    const matchesSearch = tm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tm.phone.includes(searchTerm) ||
                         tm.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || tm.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleApprove = (id: string) => {
    console.log(`Approving Task Master: ${id}`);
    // API call to approve
    setSelectedTaskMaster(null);
  };

  const handleReject = (id: string) => {
    console.log(`Rejecting Task Master: ${id}`);
    // API call to reject
    setSelectedTaskMaster(null);
  };

  const mapStatusToStatusType = (status: string): 'completed' | 'pending' | 'cancelled' | 'in-progress' | 'approved' | 'rejected' => {
    switch (status) {
      case 'under_review': return 'in-progress';
      case 'approved': return 'approved';
      case 'rejected': return 'rejected';
      case 'pending': 
      default: return 'pending';
    }
  };

  const pendingCount = mockTaskMasters.filter(tm => tm.status === 'pending').length;
  const underReviewCount = mockTaskMasters.filter(tm => tm.status === 'under_review').length;
  const totalApplications = mockTaskMasters.length;

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Task Master Approval</h1>
          <p className="text-muted-foreground">Review and approve Task Master applications</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <MetricCard
            title="Pending Applications"
            value={pendingCount.toString()}
            icon={FileText}
            change={{ value: "12% from last month", type: "decrease" }}
          />
          <MetricCard
            title="Under Review"
            value={underReviewCount.toString()}
            icon={Eye}
            change={{ value: "5% from last month", type: "increase" }}
          />
          <MetricCard
            title="Total Applications"
            value={totalApplications.toString()}
            icon={CheckCircle}
          />
          <MetricCard
            title="Approval Rate"
            value="78%"
            icon={CheckCircle}
            change={{ value: "3% from last month", type: "increase" }}
          />
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search by name, phone, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="under_review">Under Review</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            {/* Task Masters List */}
            <div className="space-y-4">
              {filteredTaskMasters.map((taskMaster) => (
                <div
                  key={taskMaster.id}
                  className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => setSelectedTaskMaster(taskMaster)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={taskMaster.documents.photo} alt={taskMaster.name} />
                        <AvatarFallback>{taskMaster.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-foreground">{taskMaster.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {taskMaster.id}
                          </Badge>
                          {taskMaster.aadharVerified && (
                            <Badge variant="outline" className="text-xs text-success">
                              Aadhar Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center">
                            <Phone className="h-3 w-3 mr-1" />
                            {taskMaster.phone}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {taskMaster.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            Applied: {new Date(taskMaster.appliedDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-sm text-muted-foreground">Services:</span>
                          {taskMaster.services.map((service, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <StatusBadge status={mapStatusToStatusType(taskMaster.status)} />
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detail Modal */}
        <Dialog open={!!selectedTaskMaster} onOpenChange={() => setSelectedTaskMaster(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedTaskMaster && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={selectedTaskMaster.documents.photo} alt={selectedTaskMaster.name} />
                      <AvatarFallback>{selectedTaskMaster.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="text-xl">{selectedTaskMaster.name}</span>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline">{selectedTaskMaster.id}</Badge>
                        <StatusBadge 
                          status={mapStatusToStatusType(selectedTaskMaster.status)} 
                        />
                      </div>
                    </div>
                  </DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                      Personal Information
                    </h3>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Email</label>
                        <p className="text-foreground">{selectedTaskMaster.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Phone</label>
                        <p className="text-foreground">{selectedTaskMaster.phone}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Location</label>
                        <p className="text-foreground">{selectedTaskMaster.location}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Experience</label>
                        <p className="text-foreground">{selectedTaskMaster.experience}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Services</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {selectedTaskMaster.services.map((service, index) => (
                            <Badge key={index} variant="secondary">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                      Documents & Verification
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm font-medium text-muted-foreground">Aadhar Number</label>
                          {selectedTaskMaster.aadharVerified ? (
                            <Badge variant="outline" className="text-success">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-destructive">
                              <XCircle className="h-3 w-3 mr-1" />
                              Pending
                            </Badge>
                          )}
                        </div>
                        <p className="text-foreground font-mono">{selectedTaskMaster.aadharNumber}</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm font-medium text-muted-foreground">Aadhar Card</label>
                          <Button variant="outline" size="sm">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </div>
                        <div className="border border-border rounded-lg p-2 bg-muted/20">
                          <img 
                            src={selectedTaskMaster.documents.aadharCard} 
                            alt="Aadhar Card" 
                            className="w-full h-32 object-cover rounded"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Profile Photo</label>
                        <div className="border border-border rounded-lg p-2 bg-muted/20 mt-2">
                          <img 
                            src={selectedTaskMaster.documents.photo} 
                            alt="Profile" 
                            className="w-full h-32 object-cover rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3 pt-6 border-t border-border">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedTaskMaster(null)}
                  >
                    Close
                  </Button>
                  <Button 
                    variant="destructive" 
                    onClick={() => handleReject(selectedTaskMaster.id)}
                    className="flex items-center"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                  <Button 
                    onClick={() => handleApprove(selectedTaskMaster.id)}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Approve
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}