import HealthyHabit from "./HealthyHabit";

export default function HealthyHabits() {
  return (
    <section
      aria-label="healthy habits"
      className="px-6 py-14 pb-32 md:pb-56 xl:px-0"
    >
      <div className="flex flex-col gap-10 px-6 md:px-[2.5625rem] lg:flex-row lg:px-0">
        <HealthyHabit
          icon="/images/icon-eating.svg"
          title="Healthy eating"
          description="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
        />

        <HealthyHabit
          icon="/images/icon-exercise.svg"
          title="Regular exercise"
          description="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
        />

        <HealthyHabit
          icon="/images/icon-sleep.svg"
          title="Adequate sleep"
          description="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
        />
      </div>
    </section>
  );
}
