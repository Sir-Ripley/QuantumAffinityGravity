import React from 'react';
import { LINKS } from '../constants';

const Footer = () => (
    <footer
        className="bg-slate-900 pt-20 pb-10 px-6 border-t border-white/10"
        id="contact"
    >
        <div className="max-w-4xl mx-auto text-center">
            <div className="glass-panel p-10 rounded-3xl border border-gold/20 max-w-3xl mx-auto mb-16">
                <img
                    src="15238659-29ee-4faf-9a1c-f2902fd20910-1_all_2603.jpg"
                    alt="Rodney A. Ripley Jr."
                    className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-teal-500/30 shadow-xl shadow-teal-500/20 object-cover"
                />

                <h3 className="text-2xl font-bold text-white mb-2 title-font">
                    Rodney A. Ripley Jr.
                </h3>
                <p className="text-teal-400 tracking-[0.2em] text-xs uppercase mb-8 font-bold">
                    The Cosmic Dreamer
                </p>
                <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
                    <a
                        href={LINKS.messenger}
                        className="text-blue-400 font-bold hover:underline"
                    >
                        Messenger
                    </a>
                    <a
                        href={LINKS.reddit}
                        className="text-orange-400 font-bold hover:underline"
                    >
                        Reddit
                    </a>
                    <a
                        href="mailto:droiden.rr@gmail.com"
                        className="text-gray-400 font-bold hover:underline"
                    >
                        Email
                    </a>
                </div>
            </div>
            <p className="text-[10px] text-gray-500">
                &copy; 2025 QAG. Crafted with Aetheria 4.1
            </p>
        </div>
    </footer>
);

export default Footer;
