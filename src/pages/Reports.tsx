import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Download,
  Calendar,
  FileText,
  PieChart
} from "lucide-react";

export default function Reports() {
  const reportTypes = [
    {
      id: "daily-ops",
      name: "Daily Operations Report",
      description: "Comprehensive daily overview of bookings, earnings, and performance",
      icon: Calendar,
      lastGenerated: "2024-01-15 08:00",
      frequency: "Daily"
    },
    {
      id: "tm-performance",
      name: "Task Master Performance", 
      description: "Individual and collective performance metrics for Task Masters",
      icon: Users,
      lastGenerated: "2024-01-14 18:00",
      frequency: "Weekly"
    },
    {
      id: "financial-summary",
      name: "Financial Summary",
      description: "Revenue, commissions, payouts, and financial health metrics",
      icon: DollarSign,
      lastGenerated: "2024-01-14 23:59",
      frequency: "Monthly"
    },
    {
      id: "service-demand",
      name: "Service Demand Analysis",
      description: "Popular services, demand patterns, and location-based insights",
      icon: TrendingUp,
      lastGenerated: "2024-01-13 12:00",
      frequency: "Weekly"
    },
    {
      id: "customer-insights",
      name: "Customer Behavior Analysis",
      description: "User retention, satisfaction scores, and usage patterns",
      icon: BarChart3,
      lastGenerated: "2024-01-12 15:30",
      frequency: "Monthly"
    },
    {
      id: "complaints-analysis",
      name: "Complaints & Issues Report",
      description: "Support ticket trends, resolution times, and quality metrics",
      icon: FileText,
      lastGenerated: "2024-01-14 10:00",
      frequency: "Weekly"
    }
  ];

  const quickStats = [
    {
      title: "Reports Generated",
      value: "156",
      change: "+12%",
      period: "This Month"
    },
    {
      title: "Avg Generation Time",
      value: "2.3 min",
      change: "-15%", 
      period: "Last 30 days"
    },
    {
      title: "Scheduled Reports",
      value: "24",
      change: "+3",
      period: "Active"
    },
    {
      title: "Data Points Tracked",
      value: "1.2M",
      change: "+8%",
      period: "This Month"
    }
  ];

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
            <p className="text-muted-foreground mt-1">Generate insights and track platform performance</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Report
            </Button>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Custom Query
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <Card key={index} className="metric-card">
              <CardContent className="pt-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                      {stat.change}
                    </span>
                    {' '}{stat.period}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Report Generation Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Generate Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select Report Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily-ops">Daily Operations</SelectItem>
                  <SelectItem value="tm-performance">TM Performance</SelectItem>
                  <SelectItem value="financial">Financial Summary</SelectItem>
                  <SelectItem value="demand">Service Demand</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Available Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Available Report Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reportTypes.map((report) => (
                <div key={report.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <report.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{report.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{report.description}</p>
                      
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <p>Frequency: {report.frequency}</p>
                        <p>Last Generated: {new Date(report.lastGenerated).toLocaleString()}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-4">
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                        <Button size="sm" variant="ghost">
                          <PieChart className="h-3 w-3 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card className="data-table">
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Report Name</th>
                    <th>Type</th>
                    <th>Generated</th>
                    <th>Period</th>
                    <th>Format</th>
                    <th>Size</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium">Daily Operations - Jan 15</td>
                    <td>Operations</td>
                    <td>2024-01-15 08:00</td>
                    <td>Jan 14, 2024</td>
                    <td>PDF</td>
                    <td>2.3 MB</td>
                    <td>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-medium">TM Performance - Week 2</td>
                    <td>Performance</td>
                    <td>2024-01-14 18:00</td>
                    <td>Jan 8-14, 2024</td>
                    <td>Excel</td>
                    <td>5.7 MB</td>
                    <td>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-medium">Financial Summary - December</td>
                    <td>Financial</td>
                    <td>2024-01-01 00:30</td>
                    <td>December 2024</td>
                    <td>PDF</td>
                    <td>1.8 MB</td>
                    <td>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}