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
    title: "스타델타 전기 | 뉴저지 & 뉴욕 상업용 전기 공사 전문",
    description: "뉴저지 및 뉴욕 전역의 상업용 전기 공사 전문 업체. 대형 매장, 창고, 산업 시설 전기 설치 및 유지보수 전문. 15년 이상의 경력과 라이선스를 보유한 전문가 팀.",
};

export default function Home() {
    const dict = dictionaries.ko;

    return (
        <main className="min-h-screen">
            <Navbar dict={dict.navbar} lang="ko" />
            <Hero dict={dict.hero} />
            <Services dict={dict.services} />
            <Projects dict={dict.projects} />
            <LocalLawSection dict={dict.localLaw} />
            <Industries dict={dict.industries} />
            <About dict={dict.about} />
            <ContactForm dict={dict.contact} />
            <Footer dict={dict.footer} lang="ko" />
        </main>
    );
}
