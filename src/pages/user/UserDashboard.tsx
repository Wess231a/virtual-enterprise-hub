import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Layers, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <DashboardLayout userType="user">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome, John</h1>
          <p className="text-muted-foreground">Here's your workspace overview</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Hours This Week" value={32} suffix="h" icon={<Clock className="w-5 h-5" />} delay={0} />
          <StatCard title="Meetings Today" value={3} icon={<Calendar className="w-5 h-5" />} delay={0.1} />
          <StatCard title="Tasks Completed" value={12} change={15} icon={<CheckCircle className="w-5 h-5" />} delay={0.2} />
          <StatCard title="Virtual Sessions" value={8} icon={<Layers className="w-5 h-5" />} delay={0.3} />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle>Quick Actions</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/user/presence"><Clock className="w-4 h-4 mr-2" /> Check In / Out</Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/user/meetings"><Calendar className="w-4 h-4 mr-2" /> View Meetings</Link>
              </Button>
              <Button variant="hero" className="w-full justify-start" asChild>
                <Link to="/user/virtual-office"><Layers className="w-4 h-4 mr-2" /> Enter Virtual Office</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Today's Schedule</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {[
                { time: "09:00", title: "Team Standup", status: "completed" },
                { time: "11:00", title: "Project Review", status: "upcoming" },
                { time: "14:00", title: "Client Call", status: "upcoming" },
              ].map((meeting) => (
                <div key={meeting.time} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50">
                  <span className="text-sm font-mono text-muted-foreground">{meeting.time}</span>
                  <span className="flex-1 font-medium">{meeting.title}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${meeting.status === "completed" ? "bg-success/10 text-success" : "bg-primary/10 text-primary"}`}>
                    {meeting.status}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
