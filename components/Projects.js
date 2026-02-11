const projects = [
    {
        title: "Dollar General Store Electrical Rollout",
        location: "Northern New Jersey",
        description: "Complete electrical infrastructure for retail chain expansion",
    },
    {
        title: "Warehouse Distribution Center",
        location: "Newark, NJ",
        description: "50,000 sq ft electrical system installation with energy-efficient lighting",
    },
    {
        title: "Retail Store Build-Out",
        location: "Manhattan, NY",
        description: "Fast-track electrical installation for flagship store opening",
    },
    {
        title: "Corporate Office Renovation",
        location: "Jersey City, NJ",
        description: "Modern electrical upgrade including smart building controls",
    },
];

export default function Projects({ dict }) {
    return (
        <section id="projects" className="py-24 bg-primary text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">{dict.badge}</h2>
                        <p className="text-3xl md:text-5xl font-bold">{dict.title}</p>
                    </div>
                    <div className="text-gray-400 max-w-sm">
                        <p>{dict.subtitle}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {dict.list.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-900 border border-white/10 hover:border-secondary/50 transition-all duration-500">
                            <div className="aspect-video relative overflow-hidden bg-gray-800 grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-secondary text-xs font-bold uppercase tracking-widest py-1 border-b border-secondary/30">
                                        {project.location}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors truncate">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-8 flex items-center text-sm font-bold text-white group-hover:text-secondary transition-colors cursor-pointer">
                                    <span>View Project Details</span>
                                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
