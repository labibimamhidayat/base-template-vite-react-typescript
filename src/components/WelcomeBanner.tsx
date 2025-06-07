import { motion } from "motion/react";
import React from "react";

import { Card, CardContent } from "@/components/shadcn/ui/card";

const WelcomeBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center p-4 example"
    >
      <Card className="w-full max-w-xl shadow-xl rounded-2xl border border-muted bg-background">
        <CardContent className="p-6 text-center">
          <h1 className="text-3xl font-bold text-primary mb-2">
            🚀 Welcome to Your Base Template
          </h1>
          <p className="text-muted-foreground text-lg">
            Vite + React + TypeScript + shadcn/ui + Tailwind CSS
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WelcomeBanner;
