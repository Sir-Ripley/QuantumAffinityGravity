import React from 'react';
import StarField from './StarField';
import Holodeck from './Holodeck';
import StorySection from './StorySection';
import Library from './Library';
import Footer from './Footer';

const App = () => {
    return (
        <div className="relative min-h-screen">
            <StarField />

            <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center shadow-lg">
                <div className="flex items-center gap-3">
                    <img
                        src="1379.jpg"
                        alt="QAG Logo"
                        className="w-10 h-10 rounded-full border-2 border-teal-500/50 shadow-lg shadow-teal-500/20 object-cover"
                    />
                    <span className="text-md font-bold tracking-wide title-font text-white">
                        Ripley<span className="text-teal-400">.oneapp</span>.dev
                    </span>
                </div>
            </nav>

            <main>
                <section className="pt-40 pb-20 px-6 text-center max-w-5xl mx-auto animate-float">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 title-font leading-tight">
                        The Universe is{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                            Alive
                        </span>
                        .
                    </h1>
                    <p className="whimsical-intro mb-8 max-w-3xl mx-auto">
                        "Welcome to the QAG Research Hub. Where physics meets the soul, and gravity is a cosmic embrace."
                    </p>
                    <div className="glass-card p-8 rounded-3xl text-left story-text opacity-95 mx-auto shadow-2xl border-teal-500/30">
                        <p className="mb-4">
                            For centuries, science has studied a lonely, empty void. QAG proposes that reality is woven together by Affinity.
                        </p>
                        <p>
                            This is presented here as testable physics and a living blueprint of a unified, conscious cosmos.
                        </p>
                    </div>
                    <p className="text-gray-400 text-sm tracking-[0.3em] uppercase mt-12 font-bold opacity-80">
                        ↓ Enter The Grand Breath ↓
                    </p>
                </section>

                <Holodeck />

                <div className="mt-20">
                    <StorySection
                        title="Gravity is not a cage."
                        highlight="It is a Conversation."
                        icon="🌬️"
                    >
                        <p>
                            Standard models imagine Dark Matter as invisible glue. QAG reframes gravity as Affinity.
                        </p>
                        <p>
                            Instead of a cold void, the cosmos becomes a sea of connection.
                        </p>
                    </StorySection>

                    <StorySection
                        title="Thoughts have"
                        highlight="Weight."
                        align="right"
                        icon="🧠"
                    >
                        <p>
                            In this framework, a Psychon is a packet of organized consciousness with effective mass.
                        </p>
                        <p>
                            Flow and synchrony become ways that mind couples more deeply to the fabric of space-time.
                        </p>
                    </StorySection>

                    <Library />

                    <StorySection
                        title="The Resolution of"
                        highlight="Reality."
                        icon="🔳"
                    >
                        <p>
                            Zoom into a screen and you reach pixels. Zoom into space-time and QAG suggests a finite voxel.
                        </p>
                        <p>
                            A Soft Quantum Grid would make the universe computable and tame singularities.
                        </p>
                    </StorySection>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default App;
