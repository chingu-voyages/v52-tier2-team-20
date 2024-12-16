import RequestForm from "./RequestForm";

export default function HomePage() {
  return (
    <div className="flex items-center justify-between flex-col w-full gap-8 h-full">
      <div className="w-full">
        <div className="flex items-center p-3 justify-between">
          <div className="">
            <img className="lg:w-[169px] lg:h-[102.6px] max-[600px]:w-[77.42px] max-[600px]:h-[47px]" src="images/logo-bg-none-font-light.png" alt="logo" />
          </div>
          <div className="">
            <a href="/admin/login"><button className="font-montserrat text-black  bg-yellow-cta font-bold py-2 px-4 rounded-md m-4 hover:bg-white hover:border-yellow-cta">Staff login</button></a>
          </div>
        </div>
      </div>
      <div className="text-center mb-6 max-w-[578px] space-y-[6px] mt-[30px] pb-[30px]">
        <h1 className="text-white tracking-[0.1em] text-[40px] font-bebas-neue max-[578px]:text-[24px]" style={{ textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>SOLAR-POWER YOUR HOME</h1>
        <p className="font-montserrat text-base text-white h-[40px] max-w-[578px] px-2 max-[578px]:text-[13px]" style={{ textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}>Enter your information to schedule a free consultation with a solar specialist and explore how solar can power your Los Angeles-area home.</p>
      </div>
      <RequestForm />
      <footer className="w-full font-montserrat text-sm bg-black">
        <div className="py-3 text-center">
          <p className="text-white">© 2024 Chingu-v52-team-20</p>
        </div>
      </footer>
    </div>
  );
}
