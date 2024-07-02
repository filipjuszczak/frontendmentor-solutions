import CTA from "./CTA";

export default function CTASection() {
  return (
    <div className="flex justify-center bg-softBlue px-8 pb-[2.375rem] pt-[3.75rem] text-center text-white">
      <div className="lg:max-w-[27.5rem]">
        <div className="text-xs font-medium uppercase leading-10 tracking-[4.62px]">
          35,000+ Already Joined
        </div>
        <h4 className="mb-8">Stay up-to-date with what we're doing</h4>
        <CTA />
      </div>
    </div>
  );
}
