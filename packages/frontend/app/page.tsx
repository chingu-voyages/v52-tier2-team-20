import HomePage from "@/src/components/HomePage";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-w-[375px] min-h-[1024px] mx-auto bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('images/landing-page.png')` }}
  >
      <HomePage />
    </div>

  );
}
