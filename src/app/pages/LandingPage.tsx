import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { Modalities } from "../components/landing/Modalities";
import { Plans } from "../components/landing/Plans";
import { Instructors } from "../components/landing/Instructors";
import { Testimonials } from "../components/landing/Testimonials";
import { FAQ } from "../components/landing/FAQ";
import { Contact } from "../components/landing/Contact";
import { Footer } from "../components/landing/Footer";
import { SectionDivider } from "../components/landing/primitives";
import { useTheme } from "@/hooks/useTheme";

export default function LandingPage() {
  const {theme, setTheme, themes } = useTheme()

  return (
    <div className="bg-gym-bg min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} themes={themes} />
      <Hero />
      <SectionDivider />
      <Modalities />
      <SectionDivider />
      <Plans />
      <SectionDivider />
      <Instructors />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <Contact />
      <Footer />
    </div>
  );
}
