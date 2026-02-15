import DashboardHero from "../components/dashboard/DashboardHero";
import StatsGrid from "../components/dashboard/StatsGrid";
import ActivityChart from "../components/dashboard/ActivityChart";
import Heatmap from "../components/dashboard/Heatmap";
import AIInsights from "../components/dashboard/AIInsights";


export default function Dashboard() {
  const workouts =
    JSON.parse(localStorage.getItem("workouts")) || [];

  return (
    <div className="min-h-screen px-10 py-10 space-y-16">

      <DashboardHero workouts={workouts} />

      <StatsGrid workouts={workouts} />

      <ActivityChart workouts={workouts} />

      <Heatmap workouts={workouts} />

      <AIInsights workouts={workouts} />

      

    </div>
  );
}
