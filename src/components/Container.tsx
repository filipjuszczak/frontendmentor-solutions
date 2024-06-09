export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-[52rem] rounded-2xl bg-white text-wengeBrown lg:p-12">
      {children}
    </main>
  );
}
