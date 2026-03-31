import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import Oracle from './Oracle';

const Holodeck = () => {
    const [tab, setTab] = useState("life");

    useEffect(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise();
        }
    }, [tab]);

    const tabs = [
        { id: "galactic", label: "Galactic", icon: "Galaxy" },
        { id: "cosmic", label: "Connectome", icon: "Globe" },
        { id: "particle", label: "Affiniton", icon: "Particle" },
        { id: "life", label: "Life/Mind", icon: "Heart" },
        { id: "pixel", label: "Pixelverse", icon: "Pixel" },
        { id: "oracle", label: "Oracle AI", icon: "Brain" }
    ];

    return (
        <section
            className="px-4 max-w-7xl mx-auto relative z-20"
            id="holodeck"
        >
            <div className="text-center mb-8 animate-float">
                <div className="inline-block px-6 py-2 rounded-full bg-slate-800/60 border border-teal-500/40 backdrop-blur-md shadow-lg">
                    <span className="text-teal-300 text-xs font-bold tracking-[0.2em] uppercase">
                        The Dashboard
                    </span>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-1 mb-0">
                {tabs.map(t => (
                    <button
                        key={t.id}
                        onClick={() => setTab(t.id)}
                        className={`px-4 md:px-6 py-3 rounded-t-xl flex items-center gap-2 transition-all ${
                            tab === t.id
                                ? "bg-[var(--glass-strong)] text-teal-300 border-t border-x border-teal-500/40 z-10"
                                : "bg-slate-800/40 text-gray-400 hover:text-white border-b border-white/10"
                        }`}
                    >
                        <Icon name={t.icon} className="text-lg" />
                        <span className="font-bold tracking-wider text-[10px] md:text-xs uppercase hidden md:inline">
                            {t.label}
                        </span>
                    </button>
                ))}
            </div>

            <div className="glass-panel rounded-b-2xl rounded-tr-2xl p-6 md:p-12 min-h-[600px] relative overflow-hidden shadow-[0_0_50px_rgba(94,234,212,0.1)]">
                {tab === "galactic" && (
                    <div className="grid lg:grid-cols-2 gap-12 animate-float" data-testid="tab-galactic">
                        <div className="space-y-6">
                            <div className="data-label text-gold">
                                The Problem: Dark Matter
                            </div>
                            <h3 className="text-3xl text-white font-bold mb-2 title-font">
                                The Ghost in the Machine
                            </h3>
                            <div className="whimsical-intro">
                                "Standard physics tells us that 85% of the universe is made of invisible ghosts called 'Dark Matter' just to make the math work. We refuse to believe the universe is that clumsy."
                            </div>
                            <div className="story-text">
                                In QAG, we remove the ghosts. We propose that Space-Time itself is a medium that reacts to mass. It is Affinity, not magic glue.
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="glass-blackboard math-scroll">
                                <div className="text-xs text-teal-400 mb-2 font-bold uppercase tracking-widest">
                                    The Proof (QAG vs. SPARC)
                                </div>
                                <p className="academic-text mb-2">
                                    The Critical Acceleration ((a_0)) is derived from constants:
                                </p>
                                <div className="py-2 text-white mono-font text-lg min-w-max">
                                    {"$$ a_0 \\equiv \\frac{cH_0}{2\\pi} $$"}
                                </div>
                                <p className="academic-text mt-4 mb-2">
                                    Interpolation Function (No Dark Matter):
                                </p>
                                <div className="py-2 text-white mono-font text-lg min-w-max">
                                    {"$$ \\mu(x) = \\frac{x}{\\sqrt{1+x^2}} $$"}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {tab === "cosmic" && (
                    <div className="grid lg:grid-cols-2 gap-12" data-testid="tab-cosmic">
                        <div className="space-y-6">
                            <div className="data-label text-teal-400">
                                The Problem: Randomness
                            </div>
                            <h3 className="text-3xl text-white font-bold mb-2 title-font">
                                The Universe is Thinking
                            </h3>
                            <div className="whimsical-intro">
                                "Look at the Cosmic Web. It does not look like an explosion of cold gas. It looks like a neural network."
                            </div>
                            <div className="story-text">
                                Standard cosmology treats the universe as a dead machine. QAG treats it as a learning system, following Hebbian-like rules.
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="glass-blackboard math-scroll">
                                <div className="text-xs text-teal-400 mb-2 font-bold uppercase tracking-widest">
                                    The Connectome Equation
                                </div>
                                <p className="academic-text mb-2">
                                    Growth of Cosmic Structure ((E_{ij})):
                                </p>
                                <div className="py-2 text-white mono-font text-lg min-w-max">
                                    {"$$ \\frac{dE_{ij}}{dt} = \\mathcal{K}_{ASB} (\\Psi_i \\Psi_j) - \\beta E_{ij} $$"}
                                </div>
                            </div>
                            <div className="flex items-center justify-center opacity-80 mt-4">
                                <div className="w-32 h-32 border border-teal-500/30 rounded-full flex items-center justify-center animate-pulse">
                                    <Icon
                                        name="Globe"
                                        className="text-4xl text-teal-400"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {tab === "particle" && (
                    <div className="grid lg:grid-cols-2 gap-12" data-testid="tab-particle">
                        <div className="space-y-6">
                            <div className="data-label text-purple">
                                The Problem: The Landscape
                            </div>
                            <h3 className="text-3xl text-white font-bold mb-2 title-font">
                                The Guitar String
                            </h3>
                            <div className="whimsical-intro">
                                "String Theory predicts many universes without telling us which is ours."
                            </div>
                            <div className="story-text">
                                QAG tunes the guitar, deriving a preferred vacuum and a carrier of affinity: the Affiniton.
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="glass-blackboard math-scroll">
                                <div className="text-xs text-teal-400 mb-2 font-bold uppercase tracking-widest">
                                    The Affiniton Derivation
                                </div>
                                <p className="academic-text mb-2">
                                    Representative relations for the carrier mass and slope:
                                </p>
                                <div className="py-2 text-white mono-font min-w-max">
                                    {"$$ m_{Aff} = \\sqrt{2}\\mu $$"}
                                </div>
                                <div className="py-2 text-white mono-font min-w-max">
                                    {"$$ \\alpha'_{QAG} = \\frac{\\mathcal{C}}{2\\pi\\mu^2} $$"}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {tab === "life" && (
                    <div className="grid lg:grid-cols-2 gap-12" data-testid="tab-life">
                        <div className="space-y-6">
                            <div className="data-label text-red-400">
                                The Problem: The Hard Problem
                            </div>
                            <h3 className="text-3xl text-white font-bold mb-2 title-font">
                                The Psychon
                            </h3>
                            <div className="whimsical-intro">
                                "Standard science says you are meat that learned to dream. QAG says dreaming is a phase of matter."
                            </div>
                            <div className="story-text">
                                When the brain reaches Gamma Synchrony, information density might couple to space-time.
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="glass-blackboard math-scroll">
                                <div className="text-xs text-teal-400 mb-2 font-bold uppercase tracking-widest">
                                    Biophysics of the Soul
                                </div>
                                <p className="academic-text mb-2">
                                    Resonant Frequency:
                                </p>
                                <div className="py-2 text-red-300 mono-font text-xl">
                                    40.5 Hz
                                </div>
                                <p className="academic-text mt-4 mb-2">
                                    Conceptual Psychon mass relation:
                                </p>
                                <div className="py-2 text-white mono-font min-w-max">
                                    {"$$ M_{\\Psi} \\approx \\mathcal{C} \\cdot M_{Brain} $$"}
                                </div>
                            </div>
                            <div className="h-16 flex items-end justify-between gap-1 opacity-70">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="bg-red-400/60 w-full rounded-t"
                                        style={{
                                            height: `${30 + Math.random() * 70}%`,
                                            animation: `pulse-glow ${
                                                0.5 + Math.random()
                                            }s infinite`
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {tab === "pixel" && (
                    <div className="grid lg:grid-cols-2 gap-12" data-testid="tab-pixel">
                        <div className="space-y-6">
                            <div className="data-label text-blue-400">
                                The Problem: Singularities
                            </div>
                            <h3 className="text-3xl text-white font-bold mb-2 title-font">
                                The Soft Grid
                            </h3>
                            <div className="whimsical-intro">
                                "Math breaks at singularities because it assumes infinite smoothness."
                            </div>
                            <div className="story-text">
                                QAG suggests a finite resolution for space-time, a Soft Quantum Grid with a characteristic voxel and time step.
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="glass-blackboard math-scroll">
                                <div className="text-xs text-teal-400 mb-2 font-bold uppercase tracking-widest">
                                    Resolution Parameters
                                </div>
                                <p className="academic-text mb-2">
                                    Spatial voxel ((\\Delta l)):
                                </p>
                                <div className="py-2 text-blue-300 mono-font text-xl min-w-max">
                                    {"$$ \\Delta l_{QAG} \\sim 10^{-17} \\text{ m} $$"}
                                </div>
                                <p className="academic-text mt-4 mb-2">
                                    Frame time ((\\Delta \\tau)):
                                </p>
                                <div className="py-2 text-white mono-font min-w-max">
                                    {"$$ \\Delta \\tau = \\hbar / (\\mu c^2) $$"}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {tab === "oracle" && <Oracle />}
            </div>
        </section>
    );
};

export default Holodeck;
