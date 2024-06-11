interface StepProps {
  children: React.ReactNode;
  className?: string;
}

export default function Step({ children, className }: StepProps) {
  return (
    <div
      className={`relative mx-auto flex size-16 items-center justify-center rounded-full border border-slate/90 font-bold text-slate before:absolute before:left-1/2 before:top-0 before:h-24 before:w-[1px] before:origin-top before:rotate-180 before:bg-slate/90 before:content-[''] ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}
