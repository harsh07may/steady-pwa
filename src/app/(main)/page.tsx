import GoalSection from "@/components/GoalSection";
import BottomNavigation from "@/components/shared/BottomNavigation";
import Header from "@/components/shared/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-t from-neutral-100 to-white p-4 dark:from-black dark:to-neutral-900">
      <Header>Steady.</Header>
      <GoalSection />
      {/* Bottom Navigation */}
      <BottomNavigation />
    </main>
  );
}
