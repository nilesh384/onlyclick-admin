import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { Bell, Search, User, LogOut, Settings, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-4">
              <SidebarTrigger className="lg:hidden" />
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search bookings, users, task masters..."
                  className="pl-10 w-80"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center">
                  3
                </span>
              </Button>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 h-auto p-2 hover:bg-accent">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium">Admin User</p>
                      <p className="text-xs text-muted-foreground">Super Admin</p>
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56" align="end">
                  <div className="space-y-2">
                    <div className="px-2 py-1.5">
                      <p className="text-sm font-medium">Admin User</p>
                      <p className="text-xs text-muted-foreground">admin@onlyclick.com</p>
                    </div>
                    <Separator />
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start h-8" asChild>
                        <a href="/settings">
                          <UserCircle className="h-4 w-4 mr-2" />
                          Profile
                        </a>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start h-8" asChild>
                        <a href="/settings">
                          <Settings className="h-4 w-4 mr-2" />
                          Settings
                        </a>
                      </Button>
                    </div>
                    <Separator />
                    <Button variant="ghost" className="w-full justify-start h-8 text-destructive hover:text-destructive">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </header>
          
          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}