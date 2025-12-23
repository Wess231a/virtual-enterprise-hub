import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Activity, TrendingUp } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "Mon", users: 120 }, { name: "Tue", users: 150 }, { name: "Wed", users: 180 },
  { name: "Thu", users: 160 }, { name: "Fri", users: 200 }, { name: "Sat", users: 80 }, { name: "Sun", users: 60 },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Admin</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Users" value={1247} change={12} icon={<Users className="w-5 h-5" />} delay={0} />
          <StatCard title="Active Now" value={342} change={8} icon={<Activity className="w-5 h-5" />} delay={0.1} />
          <StatCard title="Meetings Today" value={28} change={-5} icon={<Calendar className="w-5 h-5" />} delay={0.2} />
          <StatCard title="Avg. Presence" value={87} suffix="%" change={3} icon={<TrendingUp className="w-5 h-5" />} delay={0.3} />
        </div>

        <Card>
          <CardHeader><CardTitle>Weekly Activity</CardTitle></CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(199 89% 48%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(199 89% 48%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 18%)" />
                  <XAxis dataKey="name" stroke="hsl(215 20% 65%)" />
                  <YAxis stroke="hsl(215 20% 65%)" />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(222 47% 8%)", border: "1px solid hsl(222 30% 18%)" }} />
                  <Area type="monotone" dataKey="users" stroke="hsl(199 89% 48%)" fillOpacity={1} fill="url(#colorUsers)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
