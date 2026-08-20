"use client";

import { useState } from "react";

export default function ContactForm({ dict }) {
    const [formData, setFormData] = useState({
        company: "",
        name: "",
        email: "",
        phone: "",
        projectType: "installation",
        description: "",
    });
    const [formStatus, setFormStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("submitting");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok || data.error) {
                throw new Error(data.error || dict.form.errorMessage || "Failed to send message.");
            }

            setFormStatus("success");
            setFormData({
                company: "",
                name: "",
                email: "",
                phone: "",
                projectType: "installation",
                description: "",
            });
        } catch (err) {
            console.error("Form submit error:", err);
            setFormStatus("error");
            setErrorMsg(err.message || dict.form.errorMessage || "Failed to send message.");
        }
    };

    return (
        <section id="contact" className="py-24 bg-background-custom">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">{dict.badge}</h2>
                        <p className="text-3xl md:text-5xl font-bold text-primary mb-8">{dict.title}</p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start">
                                <div className="bg-primary p-3 rounded-lg mr-4 text-secondary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{dict.hq}</h4>
                                    <p className="text-gray-600">{dict.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary p-3 rounded-lg mr-4 text-secondary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{dict.leadershipTitle}</h4>
                                    <div className="mt-2">
                                        <p className="text-primary font-bold">{dict.president.title}: {dict.president.name}</p>
                                        <a href={`tel:${dict.president.phone}`} className="text-gray-600 text-sm hover:text-secondary transition-colors block">{dict.president.phone}</a>
                                        <a href={`mailto:${dict.president.email}`} className="text-gray-600 text-sm hover:text-secondary transition-colors block">{dict.president.email}</a>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-primary font-bold">{dict.pm.title}: {dict.pm.name}</p>
                                        <a href={`tel:${dict.pm.phone}`} className="text-gray-600 text-sm hover:text-secondary transition-colors block">{dict.pm.phone}</a>
                                        <a href={`mailto:${dict.pm.email}`} className="text-gray-600 text-sm hover:text-secondary transition-colors block">{dict.pm.email}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                            <p className="font-bold text-primary italic">&ldquo;{dict.serving}&rdquo;</p>
                        </div>
                    </div>

                    <div className="bg-primary p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            {formStatus === "success" ? (
                                <div className="text-center py-12 flex flex-col items-center justify-center">
                                    <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{dict.form.success}</h3>
                                    <p className="text-gray-300 mb-8 max-w-sm">{dict.form.successDesc}</p>
                                    <button
                                        type="button"
                                        onClick={() => setFormStatus("idle")}
                                        className="py-3 px-6 bg-secondary hover:bg-amber-600 text-primary font-bold rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                                    >
                                        {dict.form.another}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {formStatus === "error" && (
                                        <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm flex items-start space-x-3">
                                            <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>{errorMsg}</span>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="company" className="block text-gray-400 text-sm font-bold mb-2">{dict.form.company}</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="name" className="block text-gray-400 text-sm font-bold mb-2">
                                                {dict.form.name} <span className="text-secondary">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">
                                                {dict.form.email} <span className="text-secondary">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-gray-400 text-sm font-bold mb-2">
                                                {dict.form.phone} <span className="text-secondary">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="projectType" className="block text-gray-400 text-sm font-bold mb-2">{dict.form.projectType}</label>
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors appearance-none"
                                        >
                                            <option value="installation" className="bg-primary">{dict.form.options.installation}</option>
                                            <option value="maintenance" className="bg-primary">{dict.form.options.maintenance}</option>
                                            <option value="consultation" className="bg-primary">{dict.form.options.consultation}</option>
                                            <option value="emergency" className="bg-primary">{dict.form.options.emergency}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="description" className="block text-gray-400 text-sm font-bold mb-2">{dict.form.description}</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows="4"
                                            value={formData.description}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === "submitting"}
                                        className="w-full py-4 bg-secondary hover:bg-amber-600 text-primary font-bold text-lg rounded-xl transition-all shadow-xl active:scale-[0.98] disabled:opacity-50 flex items-center justify-center space-x-2 cursor-pointer disabled:cursor-not-allowed"
                                    >
                                        {formStatus === "submitting" ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <span>{dict.form.submit}</span>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Form background decoration */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
