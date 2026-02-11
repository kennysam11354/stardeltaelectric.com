"use client";

import { useState } from "react";

export default function ContactForm({ dict }) {
    const [formStatus, setFormStatus] = useState("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setFormStatus("success");
        }, 1500);
    };

    if (formStatus === "success") {
        return (
            <div className="bg-primary p-12 rounded-3xl text-center border border-secondary/30">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{dict.form.success}</h3>
                <p className="text-gray-300 mb-8">{dict.form.successDesc}</p>
                <button
                    onClick={() => setFormStatus("idle")}
                    className="text-secondary font-bold underline"
                >
                    {dict.form.another}
                </button>
            </div>
        );
    }

    return (
        <section id="contact" className="py-24 bg-background-custom">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">{dict.badge}</h2>
                        <p className="text-3xl md:text-5xl font-bold text-primary mb-8">{dict.title}</p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start">
                                <div className="bg-primary p-3 rounded-lg mr-4">
                                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{dict.hq}</h4>
                                    <p className="text-gray-600">123 Industrial Blvd, Newark, NJ 07102</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary p-3 rounded-lg mr-4">
                                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{dict.call}</h4>
                                    <p className="text-gray-600">(973) 555-0100</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary p-3 rounded-lg mr-4">
                                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{dict.email}</h4>
                                    <p className="text-gray-600">info@stardeltaelectric.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                            <p className="font-bold text-primary italic">"{dict.serving}"</p>
                        </div>
                    </div>

                    <div className="bg-primary p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-400 text-sm font-bold mb-2">{dict.form.company}</label>
                                        <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm font-bold mb-2">{dict.form.name}</label>
                                        <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-400 text-sm font-bold mb-2">{dict.form.email}</label>
                                        <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm font-bold mb-2">{dict.form.phone}</label>
                                        <input type="tel" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-sm font-bold mb-2">{dict.form.projectType}</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors appearance-none">
                                        <option value="installation" className="bg-primary">Commercial Installation</option>
                                        <option value="maintenance" className="bg-primary">Electrical Maintenance</option>
                                        <option value="consultation" className="bg-primary">NYC Local Law Consultation</option>
                                        <option value="emergency" className="bg-primary">Emergency Repair</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-400 text-sm font-bold mb-2">{dict.form.description}</label>
                                    <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-secondary transition-colors resize-none"></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === "submitting"}
                                    className="w-full py-4 bg-secondary hover:bg-amber-600 text-primary font-bold text-lg rounded-xl transition-all shadow-xl active:scale-[0.98] disabled:opacity-50"
                                >
                                    {formStatus === "submitting" ? "..." : dict.form.submit}
                                </button>
                            </form>
                        </div>

                        {/* Form background decoration */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
