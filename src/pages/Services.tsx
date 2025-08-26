import { AdminLayout } from "@/components/AdminLayout";
import { Badge } from "@/components/ui/badge";
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
import { useState } from "react";
import { serviceCategories as svcCatsData, allServices } from "@/data/servicesData";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

export default function Services() {
  // Data from servicesData.js (local state so toggles can update UI)
  const [serviceCategoriesState, setServiceCategoriesState] = useState(
    svcCatsData.map((c: any) => ({ ...c, isActive: c.isActive ?? true }))
  );
  const [individualServicesState, setIndividualServicesState] = useState(
    allServices.map((s: any) => ({ ...s, isActive: s.isActive ?? true }))
  );
  const [view, setView] = useState<'categories' | 'services'>('categories');
  const [selectedService, setSelectedService] = useState<any | null>(null);

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
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                className={`px-3 py-2 text-sm ${view === 'categories' ? 'bg-slate-100' : 'hover:bg-slate-50'}`}
                onClick={() => setView('categories')}
              >
                Categories
              </button>
              <button
                className={`px-3 py-2 text-sm ${view === 'services' ? 'bg-slate-100' : 'hover:bg-slate-50'}`}
                onClick={() => setView('services')}
              >
                All Services
              </button>
            </div>
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
          {view === 'categories' && (
            <Card>
              <CardHeader>
                <CardTitle>Service Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {serviceCategoriesState.map((category: any, idx: number) => (
                    <div key={category.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-semibold">{category.name}</h3>
                            <Badge className={`${category.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} text-xs px-2 py-0.5 rounded`}>{category.isActive ? 'Active' : 'Disabled'}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                          
                          <div className="flex items-center space-x-4 mt-3 text-xs text-muted-foreground">
                            <div className="flex items-center">
                              <DollarSign className="h-3 w-3 mr-1" />
                              Base: {category.basePrice || '—'}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {category.avgResponseTime || '—'}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mt-2">
                            {(category.services || []).map((service: any) => (
                              <span key={service} className="text-xs bg-muted px-2 py-1 rounded">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch checked={category.isActive} onCheckedChange={(val) => {
                            const copy = [...serviceCategoriesState];
                            copy[idx] = { ...copy[idx], isActive: !!val };
                            setServiceCategoriesState(copy);
                          }} />
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
          )}

          {/* Individual Services */}
          {view === 'services' && (
            <Card>
              <CardHeader>
                <CardTitle>All Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {individualServicesState.map((svc: any, idx: number) => (
                    <div key={svc.serviceId} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h4 className="font-medium">{svc.title}</h4>
                            <Badge className={`${svc.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} text-xs px-2 py-0.5 rounded`}>{svc.isActive ? 'Active' : 'Disabled'}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{serviceCategoriesState.find((c: any) => c.id === svc.category)?.name || svc.category}</p>
                          
                          <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                            <div className="flex items-center">
                              <DollarSign className="h-3 w-3 mr-1" />
                              ₹{svc.price}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {svc.duration}
                            </div>
                            <span>{svc.reviews} reviews</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch checked={svc.isActive} onCheckedChange={(val) => {
                            const copy = [...individualServicesState];
                            copy[idx] = { ...copy[idx], isActive: !!val };
                            setIndividualServicesState(copy);
                          }} />
                          <Button variant="ghost" size="sm" onClick={() => setSelectedService(svc)}>
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
          )}
        </div>
        {/* Service Details Modal */}
        <Dialog open={!!selectedService} onOpenChange={(open) => { if (!open) setSelectedService(null); }}>
          <DialogContent>
            {selectedService && (
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <img src={selectedService.image?.uri} alt={selectedService.title} className="w-40 h-28 object-cover rounded" />
                  <div>
                    <h3 className="text-lg font-semibold">{selectedService.title}</h3>
                    <p className="text-sm text-muted-foreground">{serviceCategoriesState.find((c: any) => c.id === selectedService.category)?.name || selectedService.category}</p>
                    <div className="mt-2 text-sm">₹{selectedService.price} • {selectedService.duration}</div>
                    <div className="mt-2 text-xs text-muted-foreground">{selectedService.reviews} reviews • Rating {selectedService.rating}</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Description</h4>
                  <p className="text-sm text-muted-foreground mt-1">{selectedService.description}</p>
                </div>
                {selectedService.includes && (
                  <div>
                    <h4 className="font-medium">Includes</h4>
                    <ul className="list-disc list-inside text-sm mt-1">
                      {selectedService.includes.map((inc: string, i: number) => (
                        <li key={i}>{inc}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <DialogFooter>
                  <Button onClick={() => setSelectedService(null)}>Close</Button>
                </DialogFooter>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}