import HomePage from "@/src/components/HomePage";
import Image from "next/image"
export default function Home() {
  return (
    <>
      
      <main className="h-fit flex justify-between">
        
        <div className="flex flex-col items-center bg-no-repeat bg-cover bg-center w-screen min-h-screen overflow-auto" style={{ backgroundImage: `url('images/landing-page.png')`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "100vw", height: "100vh" }}
        >
        <HomePage />
        </div>
      </main>
      
    </>

  );
}
