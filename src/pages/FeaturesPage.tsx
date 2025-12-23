import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PublicLayout } from "@/components/layout/PublicLayout";
import {
  Layers,
  Users,
  Video,
  Calendar,
  BarChart3,
  MessageSquare,
  Monitor,
  Settings,
  Zap,
  Globe,
  Lock,
  Smartphone,
  ArrowRight,
  Check,
} from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  MotionDiv,
} from "@/components/animations/PageTransition";

const featureCategories = [
  {
    title: "Virtual Environment",
    description: "Immersive 3D spaces for your team",
    icon: Layers,
    features: [
      "Customizable virtual office layouts",
      "Real-time avatar movement",
      "Spatial audio conversations",
      "Virtual meeting rooms",
      "Persistent workspaces",
    ],
  },
  {
    title: "Team Collaboration",
    description: "Work together seamlessly",
    icon: Users,
    features: [
      "Instant video calls",
      "Screen sharing to virtual displays",
      "Collaborative whiteboards",
      "Document sharing",
      "Team presence indicators",
    ],
  },
  {
    title: "Meetings & Events",
    description: "Professional virtual gatherings",
    icon: Video,
    features: [
      "One-click meeting join",
      "Calendar integration",
      "Meeting recordings",
      "Breakout rooms",
      "Webinar support",
    ],
  },
  {
    title: "Analytics & Insights",
    description: "Presence-focused metrics",
    icon: BarChart3,
    features: [
      "Team availability dashboard",
      "Meeting analytics",
      "Space utilization reports",
      "Presence patterns",
      "No productivity tracking",
    ],
  },
  {
    title: "Administration",
    description: "Complete control for admins",
    icon: Settings,
    features: [
      "User management",
      "Role-based permissions",
      "SSO integration",
      "Audit logs",
      "Custom branding",
    ],
  },
  {
    title: "Integrations",
    description: "Connect your favorite tools",
    icon: Zap,
    features: [
      "Slack & Teams integration",
      "Google Calendar sync",
      "Outlook integration",
      "API access",
      "Webhooks support",
    ],
  },
];

const additionalFeatures = [
  { icon: Globe, title: "Global CDN", description: "Low latency worldwide" },
  { icon: Lock, title: "Enterprise Security", description: "SOC 2 compliant" },
  { icon: Smartphone, title: "Mobile Apps", description: "iOS & Android" },
  { icon: MessageSquare, title: "24/7 Support", description: "Always here to help" },
];

export default function FeaturesPage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Powerful <span className="text-gradient-primary">Features</span> for
              Modern Teams
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Discover everything VirtualSpace has to offer for transforming your remote work experience.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featureCategories.map((category) => (
              <motion.div key={category.title} variants={staggerItem}>
                <Card variant="interactive" className="h-full">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4">
                      <category.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">And Much More</h2>
            <p className="text-muted-foreground">Enterprise-grade features for serious teams</p>
          </MotionDiv>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <MotionDiv
                key={feature.title}
                delay={index * 0.1}
                className="text-center"
              >
                <Card variant="glass" className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <MotionDiv className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore All Features?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Start your free trial and experience the full power of VirtualSpace.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/login">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </MotionDiv>
        </div>
      </section>
    </PublicLayout>
  );
}
