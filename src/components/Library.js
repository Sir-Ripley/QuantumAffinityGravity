import React from 'react';

const Library = () => {
    const papers = [
        {
            title: "The QAG Final Disclosure",
            ver: "v2.0",
            date: "Dec 2025",
            desc: "Complete Phase I & II Synthesis."
        },
        {
            title: "The Resonant Fabric",
            ver: "v1.4",
            date: "Dec 2025",
            desc: "Deriving the QAG String Slope."
        }
    ];
    return (
        <section
            className="py-12 px-6 bg-slate-800/30 border-y border-white/5"
            id="library"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl title-font text-white mb-8 text-center">
                    Research <span className="text-purple-400">Artifacts</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {papers.map((p, i) => (
                        <div
                            key={i}
                            className="glass-card p-6 rounded-xl cursor-pointer hover:bg-white/5"
                        >
                            <h3 className="text-lg font-bold text-white mb-1">
                                {p.title}
                            </h3>
                            <p className="text-sm text-gray-400">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Library;
