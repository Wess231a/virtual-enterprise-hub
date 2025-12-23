import { motion } from "framer-motion";

interface LoadingSkeletonProps {
  className?: string;
}

export function LoadingSkeleton({ className = "" }: LoadingSkeletonProps) {
  return (
    <div className={`shimmer rounded-lg ${className}`} />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-4">
      <div className="flex items-start justify-between">
        <LoadingSkeleton className="w-12 h-12" />
        <LoadingSkeleton className="w-16 h-6" />
      </div>
      <LoadingSkeleton className="w-24 h-4" />
      <LoadingSkeleton className="w-32 h-8" />
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-4 border-b border-border">
        <LoadingSkeleton className="w-48 h-6" />
      </div>
      <div className="divide-y divide-border">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="p-4 flex items-center gap-4">
            <LoadingSkeleton className="w-10 h-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <LoadingSkeleton className="w-32 h-4" />
              <LoadingSkeleton className="w-48 h-3" />
            </div>
            <LoadingSkeleton className="w-20 h-6" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <LoadingSkeleton className="w-32 h-6" />
        <LoadingSkeleton className="w-24 h-8" />
      </div>
      <div className="h-64 flex items-end gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${30 + Math.random() * 70}%` }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex-1 bg-secondary rounded-t-sm"
          />
        ))}
      </div>
    </div>
  );
}
