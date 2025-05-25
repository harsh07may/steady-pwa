import GoalSection from "@/components/GoalSection";
import Header from "@/components/shared/Header";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-t from-neutral-100 to-white p-4">
      <Header>Steady.</Header>
      <GoalSection />
    </main>
  );
}
