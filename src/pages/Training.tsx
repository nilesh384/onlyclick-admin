import { AdminLayout } from "@/components/AdminLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Search,
  Plus,
  Eye,
  Send
} from "lucide-react";

export default function Training() {
  // Mock data
  const trainingModules = [
    {
      id: "MOD001",
      name: "Basic Service Standards",
      description: "Foundation course covering service quality and customer interaction",
      duration: "2 hours",
      completionRate: 85,
      enrolledTMs: 45,
      completedTMs: 38
    },
    {
      id: "MOD002", 
      name: "Advanced Technical Skills",
      description: "Specialized training for complex technical services",
      duration: "4 hours",
      completionRate: 72,
      enrolledTMs: 32,
      completedTMs: 23
    },
    {
      id: "MOD003",
      name: "Customer Communication",
      description: "Professional communication and conflict resolution",
      duration: "1.5 hours", 
      completionRate: 90,
      enrolledTMs: 58,
      completedTMs: 52
    }
  ];

  const taskMasterProgress = [
    {
      id: "TM001",
      name: "Mike Wilson",
      basicComplete: true,
      advancedComplete: false,
      communicationComplete: true,
      overallProgress: 67,
      lastActivity: "2024-01-14"
    },
    {
      id: "TM002",
      name: "Lisa Chen",
      basicComplete: true,
      advancedComplete: true,
      communicationComplete: true,
      overallProgress: 100,
      lastActivity: "2024-01-12"
    },
    {
      id: "TM003",
      name: "David Kumar", 
      basicComplete: true,
      advancedComplete: false,
      communicationComplete: false,
      overallProgress: 33,
      lastActivity: "2024-01-10"
    }
  ];

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Training Management</h1>
            <p className="text-muted-foreground mt-1">Manage training modules and track Task Master progress</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Module
          </Button>
        </div>

        {/* Training Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Modules</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Enrolled TMs</p>
                  <p className="text-2xl font-bold">135</p>
                </div>
                <Users className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Completion</p>
                  <p className="text-2xl font-bold">82%</p>
                </div>
                <Award className="h-8 w-8 text-amber-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Certified TMs</p>
                  <p className="text-2xl font-bold">98</p>
                </div>
                <GraduationCap className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Training Modules */}
          <Card>
            <CardHeader>
              <CardTitle>Training Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trainingModules.map((module) => (
                  <div key={module.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{module.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{module.description}</p>
                        <div className="flex items-center space-x-4 mt-3 text-xs text-muted-foreground">
                          <span>Duration: {module.duration}</span>
                          <span>{module.completedTMs}/{module.enrolledTMs} completed</span>
                        </div>
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span>Completion Rate</span>
                            <span>{module.completionRate}%</span>
                          </div>
                          <Progress value={module.completionRate} className="h-2" />
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Task Master Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Task Master Progress</span>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search TMs..." className="pl-10 w-64" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {taskMasterProgress.map((tm) => (
                  <div key={tm.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{tm.name}</h4>
                          <span className="text-sm text-muted-foreground">{tm.overallProgress}%</span>
                        </div>
                        <Progress value={tm.overallProgress} className="h-2 mt-2" />
                        
                        <div className="flex items-center space-x-4 mt-3">
                          <StatusBadge status={tm.basicComplete ? "completed" : "pending"} />
                          <span className="text-xs">Basic</span>
                          
                          <StatusBadge status={tm.advancedComplete ? "completed" : "pending"} />
                          <span className="text-xs">Advanced</span>
                          
                          <StatusBadge status={tm.communicationComplete ? "completed" : "pending"} />
                          <span className="text-xs">Communication</span>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mt-2">
                          Last activity: {new Date(tm.lastActivity).toLocaleDateString()}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}