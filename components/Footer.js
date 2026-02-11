export default function Footer({ dict, lang = "en" }) {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold tracking-tighter">
                            STAR DELTA <span className="text-secondary">ELECTRIC</span>
                        </span>
                        <p className="mt-4 text-gray-400 max-w-md">
                            {dict.desc}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary">{dict.linksTitle}</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href={lang === "ko" ? "/ko#services" : "#services"} className="hover:text-white transition-colors">Services</a></li>
                            <li><a href={lang === "ko" ? "/ko#projects" : "#projects"} className="hover:text-white transition-colors">Projects</a></li>
                            <li><a href={lang === "ko" ? "/ko#local-law" : "#local-law"} className="hover:text-white transition-colors">Compliance</a></li>
                            <li><a href={lang === "ko" ? "/ko#about" : "#about"} className="hover:text-white transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary">{dict.contactTitle}</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>123 Industrial Blvd, Newark, NJ 07102</li>
                            <li>{dict.phone}</li>
                            <li>info@stardeltaelectric.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} {dict.copy}
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-500">
                        <span>{dict.license}</span>
                        <span>Fully Insured & Bonded</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
