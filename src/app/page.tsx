// import Image from "next/image";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-[375px] mx-auto max-w-[1440px] bg-gray-200">    
      <HomePage />     
      
      {/* <Image
        aria-hidden
        src="/file.svg"
        alt="File icon"
        width={16}
        height={16}
      /> */}
 
    </div>
  );
}
