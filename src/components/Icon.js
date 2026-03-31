import React from 'react';

const Icon = ({ name, className }) => {
    const map = {
        Galaxy: "🌌",
        Globe: "🕸️",
        Particle: "⚛️",
        Brain: "🧠",
        Heart: "❤️",
        Pixel: "🔳",
        Key: "🔑",
        Google: "G"
    };
    return <span className={className}>{map[name] || "📡"}</span>;
};

export default Icon;
