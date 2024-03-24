
import Image from "next/image";
import Hero from "@/Components/Hero";
import NavBar from "@/Components/NavBar";
import CategoryPage from "@/Components/CategoryPage";

export default function Home() {
  
  return (
    <main className="bg-lightPink">
      <NavBar/>
      <Hero/>
      <CategoryPage/>
    </main>
  );
}
