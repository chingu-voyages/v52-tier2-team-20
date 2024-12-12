import Banner from "@/src/components/HomePage";
import Form from "@/src/components/RequestForm";
export default function Home() {
  return (
    
    <>
      <header className="absolute top-6 left-7">
        <div className="container">
          <img className="lg:w-[169px] lg:h-[102.6px] max-sm:w-[77.42px] max-sm:h-[47px]" src="images/logo-bg-none-font-white.png" alt="logo" />
        </div>
      </header>
      <main>
        <div className="flex flex-col items-center bg-auto bg-no-repeat bg-cover bg-center w-screen h-screen" style={{ backgroundImage: `url('images/landing-page.png')`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "100vw", height: "100vh" }}
        >
        <Banner />

        <div className="hidden">
          <Form />
        </div>
        </div>
      </main>

    </>

  );
}
