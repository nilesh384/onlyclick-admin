import { AdminLayout } from "@/components/AdminLayout";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  DollarSign,
  TrendingUp,
  Users,
  Download,
  Search,
  Filter,
  Eye,
  CreditCard,
  Wallet
} from "lucide-react";

export default function Earnings() {
  // Mock data
  const earningsData = [
    {
      id: "TM001",
      name: "Mike Wilson",
      service: "Plumbing",
      totalEarnings: "₹32,500",
      completedJobs: 42,
      avgRating: 4.8,
      lastPayout: "2024-01-10",
      pendingAmount: "₹2,300"
    },
    {
      id: "TM002",
      name: "Lisa Chen", 
      service: "House Cleaning",
      totalEarnings: "₹28,900",
      completedJobs: 35,
      avgRating: 4.9,
      lastPayout: "2024-01-10",
      pendingAmount: "₹1,800"
    },
    {
      id: "TM003",
      name: "David Kumar",
      service: "AC Repair", 
      totalEarnings: "₹41,200",
      completedJobs: 28,
      avgRating: 4.6,
      lastPayout: "2024-01-10",
      pendingAmount: "₹3,100"
    }
  ];

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Earnings & Payments</h1>
            <p className="text-muted-foreground mt-1">Track earnings and manage payouts</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button>Process Payouts</Button>
          </div>
        </div>

        {/* Revenue Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <MetricCard
            title="Total Revenue"
            value="₹8,45,230"
            change={{ value: "15%", type: "increase" }}
            icon={DollarSign}
            variant="primary"
          />
          <MetricCard
            title="Platform Commission"
            value="₹1,23,450"
            change={{ value: "12%", type: "increase" }}
            icon={TrendingUp}
            variant="success"
          />
          <MetricCard
            title="Task Master Earnings"
            value="₹7,21,780"
            change={{ value: "18%", type: "increase" }}
            icon={Users}
          />
          <MetricCard
            title="Pending Payouts"
            value="₹45,600"
            change={{ value: "5%", type: "decrease" }}
            icon={Wallet}
            variant="warning"
          />
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by Task Master name or ID..."
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                  <SelectItem value="cleaning">House Cleaning</SelectItem>
                  <SelectItem value="ac-repair">AC Repair</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="3m">Last 3 months</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Earnings Table */}
        <Card className="data-table">
          <CardHeader>
            <CardTitle>Task Master Earnings</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Task Master</th>
                    <th>Primary Service</th>
                    <th>Total Earnings</th>
                    <th>Completed Jobs</th>
                    <th>Avg Rating</th>
                    <th>Last Payout</th>
                    <th>Pending Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {earningsData.map((tm) => (
                    <tr key={tm.id}>
                      <td>
                        <div>
                          <p className="font-medium">{tm.name}</p>
                          <p className="text-xs text-muted-foreground">{tm.id}</p>
                        </div>
                      </td>
                      <td>
                        <span className="font-medium">{tm.service}</span>
                      </td>
                      <td>
                        <span className="font-bold text-green-600">{tm.totalEarnings}</span>
                      </td>
                      <td>
                        <span className="font-medium">{tm.completedJobs}</span>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <span className="font-medium">{tm.avgRating}</span>
                          <span className="text-yellow-500 ml-1">★</span>
                        </div>
                      </td>
                      <td>
                        <span className="text-sm">{new Date(tm.lastPayout).toLocaleDateString()}</span>
                      </td>
                      <td>
                        <span className="font-medium text-amber-600">{tm.pendingAmount}</span>
                      </td>
                      <td>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <CreditCard className="h-4 w-4" />
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
      </div>
    </AdminLayout>
  );
}