import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Intro from "@/components/Intro";
import WebDevelopment from "@/components/WebDevelopment";
import InteractiveShowcase from "@/components/InteractiveShowcase";
import Process from "@/components/Process";
import ProjectEstimator from "@/components/ProjectEstimator";
import AuditEngine from "@/components/AuditEngine";
import About from "@/components/About";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Intro />
      <WebDevelopment />
      <InteractiveShowcase />
      <Process />
      <ProjectEstimator />
      <AuditEngine />
      <About />
      <CTA />
    </>
  );
}
