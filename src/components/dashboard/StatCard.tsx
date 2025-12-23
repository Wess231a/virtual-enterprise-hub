import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    const controls = {
      type: "tween",
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
    };
    
    const animate = async () => {
      motionValue.set(0);
      await new Promise((resolve) => setTimeout(resolve, 100));
      motionValue.set(value);
    };
    
    animate();
  }, [value, duration, motionValue]);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className={className}
    >
      {prefix}
      <motion.span>{displayValue.toLocaleString()}</motion.span>
      {suffix}
    </motion.span>
  );
}

interface StatCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  change?: number;
  changeLabel?: string;
  icon: React.ReactNode;
  delay?: number;
}

export function StatCard({
  title,
  value,
  prefix = "",
  suffix = "",
  change,
  changeLabel,
  icon,
  delay = 0,
}: StatCardProps) {
  const isPositive = change && change > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-card border border-border rounded-xl p-6 relative overflow-hidden group"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          {change !== undefined && (
            <span
              className={`text-sm font-medium px-2 py-1 rounded-full ${
                isPositive
                  ? "bg-success/10 text-success"
                  : "bg-destructive/10 text-destructive"
              }`}
            >
              {isPositive ? "+" : ""}
              {change}%
            </span>
          )}
        </div>
        
        <h3 className="text-sm text-muted-foreground mb-1">{title}</h3>
        <div className="text-3xl font-bold">
          <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
        </div>
        
        {changeLabel && (
          <p className="text-xs text-muted-foreground mt-2">{changeLabel}</p>
        )}
      </div>
    </motion.div>
  );
}
