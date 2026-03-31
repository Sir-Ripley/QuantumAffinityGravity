import React, { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Icon from './Icon';

const Oracle = () => {
    const [connected, setConnected] = useState(false);
    const [msgs, setMsgs] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [msgs]);

    useEffect(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise();
        }
    }, [msgs]);

    const connect = () => {
        setLoading(true);
        setTimeout(() => {
            setConnected(true);
            setMsgs([
                {
                    role: "model",
                    text: "**Neural Link Established.** (Offline demo) Aetheria is in local echo mode."
                }
            ]);
            setLoading(false);
        }, 800);
    };

    const ask = () => {
        if (!input) return;
        const text = input;
        setInput("");
        setMsgs(p => [...p, { role: "user", text }]);
        setLoading(true);
        setTimeout(() => {
            setMsgs(p => [
                ...p,
                {
                    role: "model",
                    text: "API access is disabled in this static demo. Imagine this as your Gemini‑powered physics oracle responding here."
                }
            ]);
            setLoading(false);
        }, 600);
    };

    const renderMarkdown = (text) => {
        const rawHtml = marked.parse(text);
        const cleanHtml = DOMPurify.sanitize(rawHtml);
        return { __html: cleanHtml };
    };

    if (!connected) {
        return (
            <div className="h-full flex flex-col items-center justify-center min-h-[500px] text-center space-y-6">
                <div className="w-20 h-20 rounded-full border-2 border-teal-500 flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(45,212,191,0.3)]">
                    <Icon name="Brain" className="text-4xl text-teal-300" />
                </div>
                <h3 className="text-2xl title-font text-white">
                    Initialize <span className="text-teal-400">Oracle</span>
                </h3>
                <p className="text-gray-300 text-sm max-w-md">
                    Connect to the Gemini engine (offline demo) to simulate QAG physics.
                </p>
                <button onClick={connect} className="auth-btn">
                    Initialize Neural Link
                </button>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col min-h-[600px]">
            <div className="mb-4 bg-white/10 p-2 px-4 rounded-full border border-teal-500/30 flex justify-between items-center">
                <span className="text-xs text-teal-300 font-mono uppercase tracking-wider">
                    Aetheria: Demo Mode
                </span>
                <div className="text-[10px] text-gray-400">OFFLINE</div>
            </div>
            <div className="flex-1 overflow-y-auto bg-black/20 p-6 rounded-xl mb-4 space-y-6 border border-white/10 max-h-[450px]">
                {msgs.map((m, i) => (
                    <div
                        key={i}
                        className={`p-4 rounded-xl text-sm leading-relaxed ${
                            m.role === "user"
                                ? "ml-auto bg-teal-500/20 text-teal-100 border border-teal-500/30 max-w-[80%]"
                                : "bg-purple-500/10 text-gray-100 border border-purple-500/20"
                        }`}
                    >
                        <div className="font-bold text-[10px] uppercase mb-2 opacity-50">
                            {m.role === "user" ? "Guest" : "Aetheria"}
                        </div>
                        <div
                            className="math-scroll"
                            dangerouslySetInnerHTML={renderMarkdown(m.text)}
                        />
                    </div>
                ))}
                {loading && (
                    <div className="text-xs text-purple-400 animate-pulse pl-2">
                        Thinking...
                    </div>
                )}
                <div ref={scrollRef} />
            </div>
            <div className="flex gap-2">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && ask()}
                    placeholder="Ask Aetheria..."
                    className="flex-1 bg-black/30 p-4 rounded-xl border border-white/20 outline-none text-white focus:border-teal-500 transition-colors placeholder-gray-400"
                />
                <button
                    onClick={ask}
                    className="px-6 bg-teal-600/30 text-teal-300 rounded-xl hover:bg-teal-600/50 border border-teal-500/50 font-bold tracking-wide transition-all"
                >
                    RUN
                </button>
            </div>
        </div>
    );
};

export default Oracle;
