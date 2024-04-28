import FeaturedContent from "../components/FeaturedContent";
import MuscleMap from "../components/MuscleMap";
import Navbar from "../components/Navbar";
import WorkoutOptions from "../components/WorkoutOptions";

export default function Home() {
  return (
    <div className="font-roboto">
      <Navbar />
      <main className="px-4 sm:px-8 py-4 sm:py-6 min-h-screen">
        <div className="lg:gap-x-6 lg:grid lg:grid-cols-10 justify-between sm:-mt-36 lg:mt-1">
          <MuscleMap />
          <WorkoutOptions />
        </div>
        <FeaturedContent />
      </main>
    </div>
  );
}
