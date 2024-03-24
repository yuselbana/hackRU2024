import Image from "next/image";
import Hero from "@/Components/Hero";
import NavBar from "@/Components/NavBar";
export default function Home() {
  return (
    <main className="bg-lightPink">
      <NavBar/>
      <Hero/>
    </main>
  );
}
