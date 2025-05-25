"use client";

import { ArrowRight, Calendar } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// const SAMPLE_GOALS = [
//   "Eg. I want to learn python in 2 months.",
//   "Eg. I want to lose 5kg in 3 months.",
//   "Eg. I want to read 10 books this year.",
//   "Eg. I want to save $5000 for a vacation in 6 months.",
//   "Eg. I want to run a marathon in 4 months.",
//   "Eg. I want to improve my public speaking skills in 3 months.",
// ];

export default function GoalSection() {
  const [mainGoal, setMainGoal] = useState("");
  const [subGoals, setSubGoals] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");

  const handleGoalSubmit = () => {
    if (!mainGoal.trim()) return;

    const dummySubgoals = [
      "Break down the goal into weekly milestones",
      "Track your progress every weekend",
      "Join a community or group with similar goals",
      "Set reminders to stay consistent",
      "Reward yourself after each milestone",
    ];

    setSubGoals(dummySubgoals);
    setFeedback(
      "This plan looks achievable within your timeline. Stay consistent and adjust weekly.",
    );
  };

  return (
    <section className="container mx-auto min-h-screen p-4">
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Enter your goal..."
          className="h-10 pr-10 placeholder:text-gray-400"
          value={mainGoal}
          onChange={(e) => setMainGoal(e.target.value)}
        />
        <Button
          type="button"
          size="icon"
          onClick={handleGoalSubmit}
          className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2 cursor-pointer bg-white hover:bg-gray-100 dark:bg-neutral-900"
        >
          <ArrowRight className="h-4 w-4 text-black dark:text-white" />
        </Button>
      </div>

      {subGoals.length != 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 space-y-4"
        >
          <h2 className="text-lg font-semibold">Suggested Plan</h2>

          <AnimatePresence>
            {subGoals.map((goal, idx) => (
              <motion.div
                key={goal}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 * idx }}
                className="rounded-xl border bg-white p-4 shadow-sm dark:bg-neutral-800"
              >
                <p className="text-sm">{goal}</p>
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * subGoals.length }}
            className="mt-2 text-sm text-green-700 italic"
          >
            {feedback}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * subGoals.length + 0.2 }}
          >
            <Button
              size="icon"
              className="mt-4 flex items-center gap-2 bg-neutral-600 hover:bg-neutral-700"
            >
              <Calendar className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
