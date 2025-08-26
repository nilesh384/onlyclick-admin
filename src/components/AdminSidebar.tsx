import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Users,
  MessageSquare,
  DollarSign,
  GraduationCap,
  Settings,
  AlertTriangle,
  BarChart3,
  ChevronDown,
  Menu,
  UserCheck
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const mainNavItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Bookings", url: "/bookings", icon: Calendar },
  { title: "Task Masters", url: "/task-masters", icon: Users },
  { title: "TM Approval", url: "/task-master-approval", icon: UserCheck },
  { title: "Support & Complaints", url: "/support", icon: MessageSquare },
];

const managementItems = [
  { title: "Earnings & Payments", url: "/earnings", icon: DollarSign },
  { title: "Training Management", url: "/training", icon: GraduationCap },
  { title: "Services & Categories", url: "/services", icon: Settings },
  { title: "Incident Center", url: "/incidents", icon: AlertTriangle },
  { title: "Reports & Analytics", url: "/reports", icon: BarChart3 },
];

const settingsItems = [
  { title: "Admin Settings", url: "/settings", icon: Settings },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const [managementOpen, setManagementOpen] = useState(true);
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavClasses = (isActive: boolean) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-primary font-medium border-r-2 border-sidebar-primary" 
      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-primary transition-colors";

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="px-2 py-4">
        {/* Logo Section */}
        <div className="px-4 py-3 mb-4">
          {!isCollapsed ? (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
                <span className="text-sidebar-primary-foreground font-bold text-sm">OC</span>
              </div>
              <div>
                <h1 className="text-sidebar-foreground font-semibold text-lg">Only Click</h1>
                <p className="text-sidebar-foreground/60 text-xs">Admin Panel</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
                <span className="text-sidebar-primary-foreground font-bold text-sm">OC</span>
              </div>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          {!isCollapsed && <SidebarGroupLabel className="text-sidebar-foreground/80">Main</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClasses(isActive(item.url))}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Management Section */}
        <SidebarGroup>
          {!isCollapsed ? (
            <Collapsible open={managementOpen} onOpenChange={setManagementOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sidebar-foreground/80 hover:text-sidebar-foreground">
                <SidebarGroupLabel>Management</SidebarGroupLabel>
                <ChevronDown className={`h-4 w-4 transition-transform ${managementOpen ? 'rotate-180' : ''}`} />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {managementItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <NavLink to={item.url} className={getNavClasses(isActive(item.url))}>
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <SidebarGroupContent>
              <SidebarMenu>
                {managementItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} className={getNavClasses(isActive(item.url))}>
                        <item.icon className="h-4 w-4" />
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>

        {/* Settings */}
        <SidebarGroup className="mt-auto">
          {!isCollapsed && <SidebarGroupLabel className="text-sidebar-foreground/80">Settings</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClasses(isActive(item.url))}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}