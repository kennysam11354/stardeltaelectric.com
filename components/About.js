export default function About({ dict }) {
    return (
        <section id="about" className="py-24 bg-primary text-white overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 transform translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">{dict.badge}</h2>
                        <p className="text-3xl md:text-5xl font-bold mb-8">{dict.title}</p>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            {dict.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-12">
                            {dict.stats.map((stat, index) => (
                                <div key={index}>
                                    <span className="block text-4xl font-bold text-secondary mb-1">{stat.value}</span>
                                    <span className="text-sm uppercase tracking-widest font-bold text-white/60">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-900/50 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-8 text-secondary border-b border-white/10 pb-4">{dict.credentials.title}</h3>
                        <ul className="space-y-6">
                            {dict.credentials.list.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="w-2 h-2 bg-secondary rounded-full mt-2.5 mr-4 shrink-0"></div>
                                    <div>
                                        <p className="font-bold text-white text-lg">{item.title}</p>
                                        <p className="text-gray-400 text-sm">{item.detail}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
