import { Logo } from "@/components/Icons/Logo";
import { NavBar } from "@/components/NavBar/NavBar";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex justify-center text-white text-6xl">
        <NavBar />
        {/* <Logo /> */}
      </div>
    </main>
  );
}
