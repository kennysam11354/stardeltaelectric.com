export default function LocalLawSection({ dict }) {
    return (
        <section id="local-law" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                        <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">{dict.badge}</h2>
                        <p className="text-3xl md:text-5xl font-bold text-primary mb-6">{dict.title}</p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {dict.subtext}
                        </p>

                        <ul className="space-y-4 mb-10">
                            {dict.items.map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700 font-medium">
                                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mr-3 shrink-0">
                                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div>
                            <a
                                href="#contact"
                                className="inline-block px-8 py-4 bg-accent hover:bg-blue-700 text-white font-bold rounded-md transition-all shadow-lg"
                            >
                                {dict.cta}
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/2 bg-primary flex items-center justify-center p-12 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="relative z-10 text-center">
                            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2 tracking-tighter italic">LL88 / LL97</h3>
                            <p className="text-secondary font-bold uppercase tracking-widest text-sm">NYC Compliance Experts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
