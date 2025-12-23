import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Shield,
  Calendar,
  Activity,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Bell,
  Search,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const adminNavItems = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Users", path: "/admin/users", icon: Users },
  { name: "Roles & Permissions", path: "/admin/roles", icon: Shield },
  { name: "Meetings", path: "/admin/meetings", icon: Calendar },
  { name: "Presence Overview", path: "/admin/presence", icon: Activity },
  { name: "Settings", path: "/admin/settings", icon: Settings },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: "admin" | "user";
}

export function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = userType === "admin" ? adminNavItems : [
    { name: "Dashboard", path: "/user", icon: LayoutDashboard },
    { name: "Profile", path: "/user/profile", icon: Users },
    { name: "Presence", path: "/user/presence", icon: Activity },
    { name: "Meetings", path: "/user/meetings", icon: Calendar },
    { name: "Virtual Office", path: "/user/virtual-office", icon: Layers },
    { name: "Settings", path: "/user/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarCollapsed ? 80 : 280 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border z-40 flex flex-col"
      >
        {/* Logo */}
        <div className="p-6 flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0"
          >
            <Layers className="w-5 h-5 text-primary-foreground" />
          </motion.div>
          <AnimatePresence>
            {!sidebarCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-lg font-bold text-sidebar-foreground"
              >
                VirtualSpace
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group relative ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                }`}
              >
                <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-sidebar-primary" : ""}`} />
                <AnimatePresence>
                  {!sidebarCollapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-sm font-medium"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-sidebar-primary rounded-r-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Collapse Toggle */}
        <div className="p-3 border-t border-sidebar-border">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-colors"
          >
            {sidebarCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm">Collapse</span>
              </>
            )}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <motion.div
        initial={false}
        animate={{ marginLeft: sidebarCollapsed ? 80 : 280 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex-1 flex flex-col min-h-screen"
      >
        {/* Top Navigation */}
        <header className="h-16 border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-30">
          <div className="h-full px-6 flex items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  variant="glass"
                  placeholder="Search..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
              </motion.button>

              <div className="h-8 w-px bg-border" />

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary-foreground">
                    {userType === "admin" ? "A" : "U"}
                  </span>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">
                    {userType === "admin" ? "Admin User" : "John Doe"}
                  </p>
                  <p className="text-xs text-muted-foreground capitalize">{userType}</p>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/login")}
                className="text-muted-foreground hover:text-destructive"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-background">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </main>
      </motion.div>
    </div>
  );
}
