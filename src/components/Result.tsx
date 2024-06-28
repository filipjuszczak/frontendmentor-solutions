interface ResultProps {
  bmi: number | undefined;
  details: string;
}

export default function Result({ bmi, details }: ResultProps) {
  return (
    <div className="flex flex-col rounded-2xl bg-blue p-8 text-white md:flex-row md:items-center md:rounded-e-full lg:p-6 md:[&>*]:w-full">
      <div>
        <p className="pb-2 font-semibold">Your BMI is...</p>
        <p className="pb-6 text-6xl font-semibold md:pb-0">
          {bmi?.toFixed(2) || ""}
        </p>
      </div>

      <p>{details}</p>
    </div>
  );
}
