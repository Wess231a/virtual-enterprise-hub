import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PublicLayout } from "@/components/layout/PublicLayout";
import {
  Shield,
  Lock,
  Eye,
  EyeOff,
  Server,
  Key,
  FileCheck,
  Users,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  MotionDiv,
  fadeInLeft,
  fadeInRight,
} from "@/components/animations/PageTransition";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption.",
  },
  {
    icon: Key,
    title: "SSO & MFA",
    description: "Enterprise single sign-on with SAML 2.0 and multi-factor authentication support.",
  },
  {
    icon: Server,
    title: "SOC 2 Type II",
    description: "Independently audited security controls meeting the highest industry standards.",
  },
  {
    icon: FileCheck,
    title: "GDPR Compliant",
    description: "Full compliance with European data protection regulations.",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Granular permissions to control who can access what within your organization.",
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection",
    description: "Real-time monitoring and automated threat detection to keep your data safe.",
  },
];

const privacyCommitments = [
  {
    title: "Presence Only",
    description: "We only track when you're available—not what you're doing. Your work is your own.",
    icon: Eye,
  },
  {
    title: "No Content Monitoring",
    description: "We never monitor, record, or analyze the content of your work or communications.",
    icon: EyeOff,
  },
  {
    title: "Data Ownership",
    description: "Your data belongs to you. Export or delete it anytime with full transparency.",
    icon: FileCheck,
  },
];

const notTracked = [
  "Screen contents or screenshots",
  "Keystrokes or mouse movements",
  "Application usage or browsing history",
  "Email or message contents",
  "Personal files or documents",
  "Social media activity",
  "Location data beyond presence",
  "Webcam recordings",
];

export default function SecurityPage() {
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium mb-8"
            >
              <Shield className="w-4 h-4" />
              <span>Enterprise-Grade Security</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Security & <span className="text-gradient-primary">Privacy</span>
              <br />You Can Trust
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Built from the ground up with security and privacy as core principles. Your data is protected by industry-leading practices.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <MotionDiv className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Enterprise <span className="text-gradient-primary">Security</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security measures to protect your organization.
            </p>
          </MotionDiv>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {securityFeatures.map((feature) => (
              <motion.div key={feature.title} variants={staggerItem}>
                <Card variant="interactive" className="h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
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

      {/* Privacy Commitments */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv variants={fadeInLeft}>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-gradient-accent">Privacy</span> Commitment
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe in transparency and respect for user privacy. Here's what we promise:
              </p>
              <div className="space-y-6">
                {privacyCommitments.map((commitment, index) => (
                  <motion.div
                    key={commitment.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                      <commitment.icon className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{commitment.title}</h3>
                      <p className="text-muted-foreground">{commitment.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </MotionDiv>

            <MotionDiv variants={fadeInRight}>
              <Card variant="glow" className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <EyeOff className="w-6 h-6 text-destructive" />
                  <h3 className="text-xl font-semibold">What We Never Track</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {notTracked.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-destructive" />
                      <span className="text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <MotionDiv className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-8 mb-8">
              {["SOC 2", "GDPR", "ISO 27001", "HIPAA"].map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 rounded-xl bg-secondary flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-muted-foreground">{badge}</span>
                </motion.div>
              ))}
            </div>
            <h2 className="text-3xl font-bold mb-4">Trusted by Leading Organizations</h2>
            <p className="text-muted-foreground mb-8">
              Our security practices are independently verified and meet the highest industry standards.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request Security Documentation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </MotionDiv>
        </div>
      </section>
    </PublicLayout>
  );
}
