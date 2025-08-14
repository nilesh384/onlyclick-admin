import { AdminLayout } from "@/components/AdminLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Settings,
  Plus,
  Edit,
  Trash2,
  MapPin,
  DollarSign,
  Clock,
  Eye
} from "lucide-react";

export default function Services() {
  // Mock data
  const serviceCategories = [
    {
      id: "CAT001",
      name: "Home Repair",
      description: "General home maintenance and repair services",
      services: ["Plumbing", "Electrical Work", "Carpentry"],
      isActive: true,
      basePrice: "₹500",
      avgResponseTime: "15 min"
    },
    {
      id: "CAT002",
      name: "Cleaning Services", 
      description: "Professional cleaning and maintenance",
      services: ["House Cleaning", "Deep Cleaning", "Office Cleaning"],
      isActive: true,
      basePrice: "₹300",
      avgResponseTime: "20 min"
    },
    {
      id: "CAT003",
      name: "Appliance Services",
      description: "Installation and repair of home appliances", 
      services: ["AC Repair", "Washing Machine Repair", "Refrigerator Repair"],
      isActive: true,
      basePrice: "₹800",
      avgResponseTime: "25 min"
    },
    {
      id: "CAT004",
      name: "Beauty & Wellness",
      description: "Personal care and wellness services",
      services: ["Haircut", "Massage", "Facial"],
      isActive: false,
      basePrice: "₹400",
      avgResponseTime: "30 min"
    }
  ];

  const individualServices = [
    {
      id: "SRV001",
      name: "Plumbing",
      category: "Home Repair",
      basePrice: "₹500",
      isActive: true,
      availableIn: ["Gurgaon", "Delhi", "Noida"],
      sla: "15 min response",
      taskMasters: 45
    },
    {
      id: "SRV002",
      name: "House Cleaning",
      category: "Cleaning Services",
      basePrice: "₹300",
      isActive: true,
      availableIn: ["Gurgaon", "Delhi"],
      sla: "20 min response",
      taskMasters: 62
    },
    {
      id: "SRV003",
      name: "AC Repair",
      category: "Appliance Services", 
      basePrice: "₹800",
      isActive: true,
      availableIn: ["Gurgaon", "Delhi", "Noida", "Faridabad"],
      sla: "25 min response",
      taskMasters: 38
    }
  ];

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Services & Categories</h1>
            <p className="text-muted-foreground mt-1">Manage service offerings and categories</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Category
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Service
            </Button>
          </div>
        </div>

        {/* Service Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Categories</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Settings className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Services</p>
                  <p className="text-2xl font-bold">48</p>
                </div>
                <Settings className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Response Time</p>
                  <p className="text-2xl font-bold">18 min</p>
                </div>
                <Clock className="h-8 w-8 text-amber-500" />
              </div>
            </CardContent>
          </Card>
          <Card className="metric-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Price</p>
                  <p className="text-2xl font-bold">₹650</p>
                </div>
                <DollarSign className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Service Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Service Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {serviceCategories.map((category) => (
                  <div key={category.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold">{category.name}</h3>
                          <StatusBadge status={category.isActive ? "completed" : "cancelled"} />
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                        
                        <div className="flex items-center space-x-4 mt-3 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <DollarSign className="h-3 w-3 mr-1" />
                            Base: {category.basePrice}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {category.avgResponseTime}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mt-2">
                          {category.services.map((service) => (
                            <span key={service} className="text-xs bg-muted px-2 py-1 rounded">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch checked={category.isActive} />
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Individual Services */}
          <Card>
            <CardHeader>
              <CardTitle>Individual Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {individualServices.map((service) => (
                  <div key={service.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium">{service.name}</h4>
                          <StatusBadge status={service.isActive ? "completed" : "cancelled"} />
                        </div>
                        <p className="text-xs text-muted-foreground">{service.category}</p>
                        
                        <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <DollarSign className="h-3 w-3 mr-1" />
                            {service.basePrice}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {service.sla}
                          </div>
                          <span>{service.taskMasters} TMs</span>
                        </div>
                        
                        <div className="flex items-center mt-2">
                          <MapPin className="h-3 w-3 mr-1 text-muted-foreground" />
                          <div className="flex flex-wrap gap-1">
                            {service.availableIn.map((city) => (
                              <span key={city} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {city}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
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