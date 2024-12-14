import RequestForm from "./RequestForm";

export default function HomePage() {
  return (
    <div className="flex items-center sm:justify-center flex-col min-h-[700px] mt-[135px] w-full">
      <div className="text-center mb-6 min-w-[350px] max-w-[630px] space-y-[6px] px-3">
        <h1 className="text-white tracking-[0.1em] text-[40px] font-bebas-neue max-sm:text-[24px]" style={{ textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>SOLAR-POWER YOUR HOME</h1>
        <p className="font-montserrat text-base text-white mx-auto max-w-[578px] max-sm:text-[13px] max-sm:leading-normal" style={{ textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>Enter your information to schedule a free consultation with a solar specialist and explore how solar can power your Los Angeles-area home.</p>
      </div>
      <RequestForm />
    </div>
  );
}
