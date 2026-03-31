import React from 'react';

const StorySection = ({ title, highlight, children, align = "left", icon = "✨" }) => (
    <div className="max-w-4xl mx-auto py-16 px-6 relative z-10">
        <div
            className={`glass-card p-6 md:p-12 rounded-3xl border-t border-teal-500/20 shadow-2xl ${
                align === "right" ? "md:text-right" : "md:text-left"
            }`}
        >
            <div className={`text-4xl mb-4 ${align === "right" ? "ml-auto" : ""}`}>
                {icon}
            </div>
            <h2 className="text-3xl md:text-5xl title-font text-white mb-6 leading-tight break-words">
                {title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 font-bold">
                    {highlight}
                </span>
            </h2>
            <div className="story-text opacity-95 space-y-6">{children}</div>
            <div className="mt-8 flex gap-2 opacity-60">
                <div
                    className={`h-1 w-24 bg-teal-400 rounded-full ${
                        align === "right" ? "ml-auto" : ""
                    }`}
                ></div>
                <div className="h-1 w-6 bg-purple-400 rounded-full"></div>
            </div>
        </div>
    </div>
);

export default StorySection;
