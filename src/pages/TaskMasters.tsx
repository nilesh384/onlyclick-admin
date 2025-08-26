import { AdminLayout } from "@/components/AdminLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { serviceCategories, allServices } from "@/data/servicesData";
import {
  Search,
  Filter,
  Eye,
  MoreHorizontal,
  Phone,
  User,
  Star,
  MapPin,
  CheckCircle,
  XCircle,
  MessageSquare
} from "lucide-react";
import { useState } from "react";

export default function TaskMasters() {
  type TM = {
    id: string;
    name: string;
    phone: string;
    primaryService: string;
    location: string;
    status: 'completed' | 'pending' | 'cancelled' | 'in-progress' | 'approved' | 'rejected' | 'available' | 'busy';
    rating: number;
    completionRate: number;
    totalJobs: number;
    monthlyEarnings: string;
    kycStatus: string;
    trainingStatus: { basic: boolean; advanced: boolean };
    aadharUrl?: string;
  };

  const initial: TM[] = [
    {
      id: "TM001",
      name: "Mike Wilson",
      phone: "+91 9876543211",
      primaryService: "Plumbing",
      location: "Gurgaon",
      status: "available",
      rating: 4.8,
      completionRate: 95,
      totalJobs: 142,
      monthlyEarnings: "₹32,500",
      kycStatus: "verified",
      trainingStatus: { basic: true, advanced: false },
      aadharUrl: "/public/placeholder.svg",
    },
    {
      id: "TM002",
      name: "Lisa Chen",
      phone: "+91 9876543213",
      primaryService: "House Cleaning",
      location: "Delhi",
      status: "busy",
      rating: 4.9,
      completionRate: 98,
      totalJobs: 89,
      monthlyEarnings: "₹28,900",
      kycStatus: "verified",
      trainingStatus: { basic: true, advanced: true },
      aadharUrl: "/public/placeholder.svg",
    },
    {
      id: "TM003",
      name: "David Kumar",
      phone: "+91 9876543215",
      primaryService: "AC Repair",
      location: "Gurgaon",
      status: "available",
      rating: 4.6,
      completionRate: 92,
      totalJobs: 67,
      monthlyEarnings: "₹41,200",
      kycStatus: "pending",
      trainingStatus: { basic: true, advanced: false },
      aadharUrl: "/public/placeholder.svg",
    },
    {
      id: "TM004",
      name: "Amit Sharma",
      phone: "+91 9876543217",
      primaryService: "Electrical Work",
      location: "Noida",
      status: "available",
      rating: 4.7,
      completionRate: 94,
      totalJobs: 156,
      monthlyEarnings: "₹38,700",
      kycStatus: "verified",
      trainingStatus: { basic: true, advanced: true },
      aadharUrl: "/public/placeholder.svg",
    },
  ];

  const [taskMasters, setTaskMasters] = useState<TM[]>(initial);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", primaryService: "", location: "" });
  const [period, setPeriod] = useState<'all'|'day'|'week'|'month'|'year'>('all');

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Task Masters Management</h1>
            <p className="text-muted-foreground mt-1">Manage and monitor all registered Task Masters</p>
          </div>
          <div>
            <Button onClick={() => setShowAdd((s) => !s)}>{showAdd ? "Close" : "Add Task Master"}</Button>
          </div>
        </div>

        {showAdd && (
          <Card>
            <CardHeader>
              <CardTitle>Add Task Master</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input placeholder="Full name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
                <Input placeholder="Phone" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
                <Input placeholder="Primary service" value={form.primaryService} onChange={(e) => setForm((f) => ({ ...f, primaryService: e.target.value }))} />
                <Input placeholder="Location" value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} />
                <div className="md:col-span-3 flex items-center space-x-2">
                  <Button
                    onClick={() => {
                      if (!form.name.trim() || !form.phone.trim()) {
                        window.alert("Please provide at least name and phone.");
                        return;
                      }
                      const nextId = `TM${String(taskMasters.length + 1).padStart(3, "0")}`;
                      const newTM: TM = {
                        id: nextId,
                        name: form.name.trim(),
                        phone: form.phone.trim(),
                        primaryService: form.primaryService || "-",
                        location: form.location || "-",
                        status: "available",
                        rating: 0,
                        completionRate: 0,
                        totalJobs: 0,
                        monthlyEarnings: "₹0",
                        kycStatus: "pending",
                        trainingStatus: { basic: false, advanced: false },
                        aadharUrl: "/public/placeholder.svg",
                      };
                      setTaskMasters((prev) => [newTM, ...prev]);
                      setForm({ name: "", phone: "", primaryService: "", location: "" });
                      setShowAdd(false);
                    }}
                  >
                    Add
                  </Button>
                  <Button variant="outline" onClick={() => setShowAdd(false)}>Cancel</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, ID, phone, or service..."
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="busy">Busy</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
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
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    {period === 'all' ? 'More Filters' : `Period: ${period.charAt(0).toUpperCase() + period.slice(1)}`}
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-[200px]">
                  <div className="flex flex-col space-y-2">
                    <button
                      className="text-sm text-left px-2 py-1 rounded hover:bg-accent"
                      onClick={() => setPeriod("day")}
                    >
                      Day
                    </button>
                    <button
                      className="text-sm text-left px-2 py-1 rounded hover:bg-accent"
                      onClick={() => setPeriod("week")}
                    >
                      Week
                    </button>
                    <button
                      className="text-sm text-left px-2 py-1 rounded hover:bg-accent"
                      onClick={() => setPeriod("month")}
                    >
                      Month
                    </button>
                    <button
                      className="text-sm text-left px-2 py-1 rounded hover:bg-accent"
                      onClick={() => setPeriod("year")}
                    >
                      Year
                    </button>
                    <div className="border-t mt-2 pt-2">
                      <button
                        className="text-sm text-left px-2 py-1 text-muted-foreground"
                        onClick={() => setPeriod("all")}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>

        {/* Task Masters Table */}
        <Card className="data-table">
          <CardHeader>
            <CardTitle>All Task Masters</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Task Master Details</th>
                    <th>Service & Location</th>
                    <th>Performance</th>
                    <th>Earnings</th>
                    <th>Status & KYC</th>
                    <th>Training</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {taskMasters.map((tm) => (
                    <tr key={tm.id}>
                      <td>
                        <div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{tm.name}</p>
                              <p className="text-xs text-muted-foreground">{tm.id}</p>
                            </div>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Phone className="h-3 w-3 mr-1" />
                            {tm.phone}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="flex items-start justify-between">
                            <p className="font-medium">{tm.primaryService}</p>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="ghost" size="sm">View services</Button>
                              </PopoverTrigger>
                              <PopoverContent align="end" className="w-[300px]">
                                <div className="space-y-2">
                                  <p className="text-sm font-medium">Services for {tm.primaryService}</p>
                                  <div className="max-h-48 overflow-auto">
                                    {
                                      (() => {
                                        const cat = serviceCategories.find((c: any) => c.name.toLowerCase() === tm.primaryService.toLowerCase());
                                        const catId = cat ? cat.id : tm.primaryService.toLowerCase();
                                        const servicesFor = allServices.filter((s: any) => s.category === catId);
                                        if (!servicesFor.length) return <p className="text-xs text-muted-foreground">No services found for this category.</p>;
                                        return servicesFor.map((s: any) => (
                                          <div key={s.serviceId} className="flex items-center justify-between p-1">
                                            <div>
                                              <div className="text-sm font-medium">{s.title}</div>
                                              <div className="text-xs text-muted-foreground">{s.duration} • ₹{s.price}</div>
                                            </div>
                                            <div>
                                              <Button size="sm" variant="outline" onClick={() => window.alert(`${s.title}\n\n${s.description}\n\nPrice: ₹${s.price}`)}>Details</Button>
                                            </div>
                                          </div>
                                        ));
                                      })()
                                    }
                                  </div>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            {tm.location}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{tm.rating}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {tm.completionRate}% completion
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {tm.totalJobs} jobs completed
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <p className="font-medium">{tm.monthlyEarnings}</p>
                          <p className="text-xs text-muted-foreground">This month</p>
                        </div>
                      </td>
                      <td>
                        <div className="space-y-2">
                          <StatusBadge status={tm.status} />
                          <div>
                            {tm.kycStatus === 'verified' ? (
                              <Badge variant="secondary" className="status-completed text-xs">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                KYC Verified
                              </Badge>
                            ) : (
                              <Badge variant="secondary" className="status-pending text-xs">
                                <XCircle className="h-3 w-3 mr-1" />
                                KYC Pending
                              </Badge>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="space-y-1">
                          <div className="flex items-center">
                            {tm.trainingStatus.basic ? (
                              <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                            ) : (
                              <XCircle className="h-3 w-3 text-red-500 mr-1" />
                            )}
                            <span className="text-xs">Basic</span>
                          </div>
                          <div className="flex items-center">
                            {tm.trainingStatus.advanced ? (
                              <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                            ) : (
                              <XCircle className="h-3 w-3 text-red-500 mr-1" />
                            )}
                            <span className="text-xs">Advanced</span>
                          </div>
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
            Showing 1 to 4 of 1,280 Task Masters
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