import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const GOALS = [
  "Eg. I want to learn python in 2 months.",
  "Eg. I want to lose 5kg in 3 months.",
  "Eg. I want to read 10 books this year.",
  "Eg. I want to save $5000 for a vacation in 6 months.",
  "Eg. I want to run a marathon in 4 months.",
  "Eg. I want to improve my public speaking skills in 3 months.",
];

function GoalSection() {
  return (
    <section className="container mx-auto min-h-screen py-2">
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Enter your goal..."
          className="h-10 bg-white pr-5 placeholder:text-gray-400"
        />
        <Button
          type="submit"
          size="icon"
          className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2 bg-white hover:bg-gray-100 active:scale-90"
        >
          <ArrowRight className="h-4 w-4 text-black" />
        </Button>
      </div>
      <p className="p-2 text-xs text-gray-400 italic">
        {GOALS[Math.floor(Math.random() * GOALS.length)]}
      </p>
    </section>
  );
}

export default GoalSection;
