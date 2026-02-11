const industries = [
    "Retail Chains",
    "Commercial Buildings",
    "Property Management",
    "Developers & Contractors",
    "Warehouses & Distribution",
    "Hospitality",
    "Healthcare Facilities",
    "Manufacturing",
];

export default function Industries({ dict }) {
    return (
        <section id="industries" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">{dict.badge}</h2>
                    <p className="text-3xl md:text-5xl font-bold text-primary">{dict.title}</p>
                    <div className="w-20 h-1.5 bg-secondary mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {dict.list.map((industry, index) => (
                        <div
                            key={index}
                            className="p-6 text-center border border-gray-100 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 group cursor-default shadow-sm hover:shadow-xl"
                        >
                            <div className="text-secondary mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
                                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <p className="font-bold text-lg md:text-xl tracking-tight leading-tight">
                                {industry}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
