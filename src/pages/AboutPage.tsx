import { motion } from "framer-motion";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Zap } from "lucide-react";
import { staggerContainer, staggerItem, MotionDiv } from "@/components/animations/PageTransition";

const values = [
  { icon: Users, title: "People First", description: "We build tools that respect and empower individuals." },
  { icon: Target, title: "Innovation", description: "Constantly pushing boundaries to redefine remote work." },
  { icon: Heart, title: "Privacy", description: "Your data is yours. We're committed to ethical practices." },
  { icon: Zap, title: "Excellence", description: "Delivering quality in everything we create." },
];

export default function AboutPage() {
  return (
    <PublicLayout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <MotionDiv className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">About <span className="text-gradient-primary">VirtualSpace</span></h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to transform how teams connect and collaborate in the digital age.
            </p>
          </MotionDiv>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <motion.div key={value.title} variants={staggerItem}>
                <Card variant="interactive" className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}
