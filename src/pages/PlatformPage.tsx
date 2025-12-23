import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PublicLayout } from "@/components/layout/PublicLayout";
import {
  Layers,
  Users,
  Video,
  Calendar,
  BarChart3,
  MessageSquare,
  Monitor,
  Globe,
  ArrowRight,
  Play,
} from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  MotionDiv,
  fadeInUp,
} from "@/components/animations/PageTransition";

const platformFeatures = [
  {
    icon: Layers,
    title: "3D Virtual Office",
    description: "Walk through your virtual office, visit colleagues' desks, and collaborate in immersive spaces.",
  },
  {
    icon: Users,
    title: "Team Presence",
    description: "See who's available at a glance. Know when teammates are in meetings or taking breaks.",
  },
  {
    icon: Video,
    title: "Instant Meetings",
    description: "Start or join meetings with a single click. No meeting links needed.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered scheduling that finds the perfect time for everyone across time zones.",
  },
  {
    icon: MessageSquare,
    title: "Spatial Audio",
    description: "Natural conversations that feel like real life. Hear nearby colleagues clearly.",
  },
  {
    icon: Monitor,
    title: "Screen Sharing",
    description: "Share your screen to virtual monitors. Multiple people can share simultaneously.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Create Your Space",
    description: "Design your virtual office layout with our intuitive builder.",
  },
  {
    step: "02",
    title: "Invite Your Team",
    description: "Send invites and get your team onboarded in minutes.",
  },
  {
    step: "03",
    title: "Start Collaborating",
    description: "Move around, meet colleagues, and get work done naturally.",
  },
];

export default function PlatformPage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
            >
              <Globe className="w-4 h-4" />
              <span>Enterprise Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              A New Way to{" "}
              <span className="text-gradient-primary">Experience</span> Work
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              VirtualSpace reimagines the traditional office as a dynamic, immersive 3D environment where teams can collaborate as naturally as they would in person.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/login">
                  Try Platform
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="glass" size="xl">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Platform Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 relative"
          >
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center"
                  >
                    <Layers className="w-12 h-12 text-primary" />
                  </motion.div>
                  <p className="text-muted-foreground">3D Platform Preview</p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Platform <span className="text-gradient-primary">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run your virtual workspace efficiently.
            </p>
          </MotionDiv>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {platformFeatures.map((feature) => (
              <motion.div key={feature.title} variants={staggerItem}>
                <Card variant="interactive" className="h-full">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="text-gradient-accent">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with VirtualSpace in three simple steps.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {workflowSteps.map((item, index) => (
              <MotionDiv
                key={item.step}
                variants={fadeInUp}
                delay={index * 0.2}
                className="relative"
              >
                <Card variant="glass" className="p-8 text-center h-full">
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="container mx-auto px-6">
          <MotionDiv className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience the Platform Today
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Start your free trial and transform how your team works together.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/login">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </MotionDiv>
        </div>
      </section>
    </PublicLayout>
  );
}
