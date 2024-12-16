import HomePage from "@/src/components/HomePage";
import Image from "next/image"
export default function Home() {
  return (
    
    <>
      <header className="absolute w-full">
        <div className="flex items-center p-3 justify-between">
          <div className="">
            <img className="lg:w-[169px] lg:h-[102.6px] max-[600px]:w-[77.42px] max-[600px]:h-[47px]" src="images/logo-bg-none-font-light.png" alt="logo" />
          </div>
          <div className="">
            <a href="/admin/login"><button className="font-montserrat text-black border-2 border-yellow-cta bg-yellow-cta py-2 px-4 rounded-sm m-4 hover:bg-white hover:border-yellow-cta">Staff login</button></a>
          </div>
        </div>
      </header>
      <main>
        <div className="flex flex-col items-center bg-no-repeat bg-cover bg-center w-screen h-screen" style={{ backgroundImage: `url('images/landing-page.png')`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "100vw", height: "100vh" }}
        >
        <HomePage />
        </div>
      </main>
    </>

  );
}
