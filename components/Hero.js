export default function Hero({ dict }) {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider bg-secondary/10 border border-secondary/20 rounded-xl">
                        <span className="block text-secondary uppercase mb-1">{dict.ribbon.title}</span>
                        <span className="block text-gray-300 font-medium normal-case">{dict.ribbon.desc}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        {dict.headline.split("Contractor")[0]}
                        <span className="text-secondary tracking-tight">Contractor</span>
                        {dict.headline.split("Contractor")[1]}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                        {dict.subtext}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-secondary hover:bg-amber-600 text-primary font-bold text-lg rounded-md transition-all transform hover:-translate-y-1 shadow-xl text-center"
                        >
                            {dict.ctaPrimary}
                        </a>
                        <a
                            href="#about"
                            className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold text-lg rounded-md transition-all text-center"
                        >
                            {dict.ctaSecondary}
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center">
                <span className="text-gray-400 text-sm mb-2 uppercase tracking-widest">Scroll</span>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}
