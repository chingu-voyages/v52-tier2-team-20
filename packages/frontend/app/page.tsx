import HomePage from "@/src/components/HomePage";
import Image from "next/image"
export default function Home() {
  return (
    
    <>
      <header className="absolute top-6 left-7">
        <div className="container">
          {/* <picture>
            <source 
              srcSet="/logo-bg-none-font-light.png"
              media="(max-width: 640px)"
                />
              <Image
              src="/images/logo-bg-none-font-light.png"
              width= {169}
              height= {102}
              alt= {"logo"}/>
            </picture> */}
          <img className="lg:w-[169px] lg:h-[102.6px] max-[600px]:w-[77.42px] max-[600px]:h-[47px]" src="images/logo-bg-none-font-light.png" alt="logo" />
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
