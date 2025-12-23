import { useState } from "react";
import { motion } from "framer-motion";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { MotionDiv } from "@/components/animations/PageTransition";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <PublicLayout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <MotionDiv className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Get in <span className="text-gradient-primary">Touch</span></h1>
            <p className="text-xl text-muted-foreground">Have questions? We'd love to hear from you.</p>
          </MotionDiv>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <MotionDiv>
              <Card variant="glass" className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input variant="animated" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input variant="animated" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="How can we help?" rows={5} required className="bg-secondary/50 border-border focus:border-primary" />
                  </div>
                  <Button variant="hero" size="lg" className="w-full">Send Message</Button>
                </form>
              </Card>
            </MotionDiv>

            <MotionDiv delay={0.2} className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "hello@virtualspace.io" },
                { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, title: "Location", value: "San Francisco, CA" },
              ].map((item) => (
                <Card key={item.title} variant="interactive" className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </Card>
              ))}
            </MotionDiv>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
