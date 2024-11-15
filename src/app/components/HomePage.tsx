import RequestForm from "./RequestForm";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center flex-col h-full w-full my-12">
      <div className="text-center mb-6 min-w-[350px] max-w-[630px]">
        <h1 className="font-bold text-3xl">Start your solar journey</h1>
        <p className="text-base py-1">Enter your address to schedule a free consultation with a solar specialist and explore how solar can work for you.</p>
      </div>
      <RequestForm />
    </div>
  );
}
