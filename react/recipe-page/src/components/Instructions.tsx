interface InstructionsProps {
  instructions: {
    id: string;
    title: string;
    body: string;
  }[];
}

export default function Instructions({ instructions }: InstructionsProps) {
  return (
    <div className="mt-8 border-b-[1px] border-lightGrey pb-8">
      <h2 className="mb-6 font-serif text-3xl text-nutmeg">Instructions</h2>
      <ol className="list-decimal space-y-4 pl-6">
        {instructions.map((ins) => (
          <li key={ins.id} className="pl-4 marker:font-bold marker:text-nutmeg">
            <strong>{ins.title}</strong>: {ins.body}
          </li>
        ))}
      </ol>
    </div>
  );
}
