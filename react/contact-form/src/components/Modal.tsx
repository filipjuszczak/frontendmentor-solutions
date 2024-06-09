import successIcon from "/images/icon-success-check.svg";

export default function Modal() {
  return (
    <div className="bg-mediumGreen absolute left-1/2 top-0 z-50 mt-8 -translate-x-1/2 space-y-4 rounded-xl p-6 text-white">
      <div className="flex gap-2">
        <img src={successIcon} alt="" />
        <p className="font-bold">Message Sent!</p>
      </div>
      <p>Thanks for completing the form. We'll be in touch soon!</p>
    </div>
  );
}
