import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    // Release Date: March 24, 2026 00:00:00
    const targetDate = new Date("2026-03-24T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -5, opacity: 0 }}
          className="text-lg font-display font-bold tabular-nums"
        >
          {value.toString().padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
      <span className="text-[8px] uppercase tracking-tighter text-muted-foreground font-bold">
        {label}
      </span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-4 px-5 py-2 rounded-2xl glass-panel border-primary/20 shadow-lg shadow-primary/5"
    >
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-primary animate-pulse" />
        <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/80">
          Enterprise v2.0 Release In:
        </span>
      </div>
      <div className="flex items-center gap-2.5">
        <TimeUnit value={timeLeft.days} label="days" />
        <span className="text-primary/40 pb-3">:</span>
        <TimeUnit value={timeLeft.hours} label="hours" />
        <span className="text-primary/40 pb-3">:</span>
        <TimeUnit value={timeLeft.minutes} label="mins" />
        <span className="text-primary/40 pb-3">:</span>
        <TimeUnit value={timeLeft.seconds} label="secs" />
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
