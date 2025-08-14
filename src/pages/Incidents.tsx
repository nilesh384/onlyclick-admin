import { AdminLayout } from "@/components/AdminLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Shield,
  Clock,
  FileText,
  Eye,
  MessageSquare,
  Ban,
  CheckCircle
} from "lucide-react";

export default function Incidents() {
  // Mock data
  const incidents = [
    {
      id: "INC001",
      type: "Safety Concern",
      title: "Task Master reported unsafe working conditions",
      description: "TM reported customer demanding work in unsafe electrical conditions",
      severity: "High",
      status: "investigating",
      reportedBy: "Mike Wilson (TM001)",
      linkedBooking: "BK001",
      createdAt: "2024-01-15 10:30",
      assignedTo: "Security Team",
      evidence: ["Photo", "Statement"]
    },
    {
      id: "INC002", 
      type: "Service Dispute",
      title: "Major service quality complaint escalated",
      description: "Customer claims incomplete work and demands full refund plus compensation",
      severity: "Medium",
      status: "resolved",
      reportedBy: "Customer Support",
      linkedBooking: "BK012",
      createdAt: "2024-01-14 16:45",
      assignedTo: "Operations Manager",
      evidence: ["Photos", "Call Recording", "Messages"]
    },
    {
      id: "INC003",
      type: "Fraud Alert",
      title: "Suspicious payment activity detected",
      description: "Multiple failed payment attempts from same device with different cards",
      severity: "High", 
      status: "investigating",
      reportedBy: "System Auto-Detection",
      linkedBooking: "BK045",
      createdAt: "2024-01-15 14:20",
      assignedTo: "Fraud Prevention Team",
      evidence: ["Transaction Logs", "Device Fingerprint"]
    },
    {
      id: "INC004",
      type: "Task Master Misconduct",
      title: "Inappropriate behavior reported",
      description: "Customer reported unprofessional conduct and inappropriate comments",
      severity: "High",
      status: "action-taken",
      reportedBy: "Sarah Johnson (Customer)",
      linkedBooking: "BK034",
      createdAt: "2024-01-13 12:15",
      assignedTo: "HR Team",
      evidence: ["Statement", "Messages", "Call Recording"]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'investigating':
        return <Clock className="h-4 w-4" />;
      case 'resolved':
        return <CheckCircle className="h-4 w-4" />;
      case 'action-taken':
        return <Shield className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Incident & Escalation Center</h1>
            <p className="text-muted-foreground mt-1">Handle critical incidents and escalations</p>
          </div>
          <Button>
            <AlertTriangle className="h-4 w-4 mr-2" />
            Report Incident
          </Button>
        </div>

        {/* Incident Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Incidents</p>
                  <p className="text-2xl font-bold text-red-600">7</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Under Investigation</p>
                  <p className="text-2xl font-bold text-yellow-600">3</p>
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
                  <p className="text-2xl font-bold text-green-600">5</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Resolution</p>
                  <p className="text-2xl font-bold">4.2h</p>
                </div>
                <Shield className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Incidents List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Incidents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {incidents.map((incident) => (
                <div key={incident.id} className="border rounded-lg p-6 bg-card">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-bold text-lg">{incident.id}</span>
                        <Badge className={getSeverityColor(incident.severity)}>
                          {incident.severity} Priority
                        </Badge>
                        <div className="flex items-center space-x-1">
                          {getStatusIcon(incident.status)}
                          <StatusBadge status={incident.status as any} />
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <h3 className="font-semibold text-foreground mb-1">{incident.title}</h3>
                        <p className="text-sm text-muted-foreground">{incident.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-muted-foreground">Type:</span>
                          <p>{incident.type}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Reported By:</span>
                          <p>{incident.reportedBy}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Linked Booking:</span>
                          <p className="font-mono text-blue-600">{incident.linkedBooking}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Assigned To:</span>
                          <p>{incident.assignedTo}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <span className="font-medium text-muted-foreground text-sm">Evidence:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {incident.evidence.map((evidence, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              <FileText className="h-3 w-3 mr-1" />
                              {evidence}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mt-4">
                        Created: {new Date(incident.createdAt).toLocaleString()}
                      </p>
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-4">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Add Note
                      </Button>
                      {incident.status === 'investigating' && (
                        <>
                          <Button variant="outline" size="sm" className="text-red-600">
                            <Ban className="h-4 w-4 mr-1" />
                            Suspend User
                          </Button>
                          <Button variant="default" size="sm">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Resolve
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Emergency Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1 border-red-200 text-red-600 hover:bg-red-50">
                <Ban className="h-5 w-5" />
                <span className="text-sm">Suspend Account</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1 border-yellow-200 text-yellow-600 hover:bg-yellow-50">
                <AlertTriangle className="h-5 w-5" />
                <span className="text-sm">Issue Warning</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1 border-blue-200 text-blue-600 hover:bg-blue-50">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Security Review</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1 border-green-200 text-green-600 hover:bg-green-50">
                <FileText className="h-5 w-5" />
                <span className="text-sm">Generate Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}