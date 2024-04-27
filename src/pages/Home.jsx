import MuscleMap from "../components/MuscleMap";
import WorkoutOptions from "../components/WorkoutOptions";

export default function Home() {
  return (
    <div className="px-4 sm:px-8 py-4 sm:py-6 min-h-screen">
      <main>
        <div className="lg:gap-x-6 lg:grid lg:grid-cols-10 justify-between sm:-mt-36 lg:mt-1">
          <MuscleMap />
          <WorkoutOptions />
        </div>
      </main>
    </div>
  );
}
