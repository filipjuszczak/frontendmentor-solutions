interface StepProps {
  children: React.ReactNode;
  className?: string;
}

export default function Step({ children, className }: StepProps) {
  return (
    <div
      className={`text-slate border-slate/90 before:bg-slate/90 relative mx-auto flex size-12 items-center justify-center rounded-full border font-bold before:absolute before:left-1/2 before:top-0 before:h-24 before:w-[1px] before:origin-top before:rotate-180 before:content-[''] ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}
