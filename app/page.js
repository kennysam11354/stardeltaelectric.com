import { dictionaries } from "@/lib/dictionary";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import LocalLawSection from "@/components/LocalLawSection";
import Industries from "@/components/Industries";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Commercial Electrical Contractor NJ & NY",
  description:
    "Professional commercial electrical services for retail, warehouse, and industrial projects in New Jersey and New York Metro Area. Licensed, insured, and experienced.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ko: "/ko",
    },
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function Home() {
  const dict = dictionaries.en;

  return (
    <main className="min-h-screen">
      <Navbar dict={dict.navbar} lang="en" />
      <Hero dict={dict.hero} />
      <Services dict={dict.services} />
      <Projects dict={dict.projects} />
      <LocalLawSection dict={dict.localLaw} />
      <Industries dict={dict.industries} />
      <About dict={dict.about} />
      <ContactForm dict={dict.contact} />
      <Footer dict={dict.footer} lang="en" />
    </main>
  );
}
