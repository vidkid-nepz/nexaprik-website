"use client";

import { useEffect, useState } from 'react';

export default function SnowAnimation() {
    const [snowflakes, setSnowflakes] = useState<Array<{ id: number, left: number, animationDuration: number, opacity: number, size: number }>>([]);

    useEffect(() => {
        // Generate snowflakes
        const flakes = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDuration: 10 + Math.random() * 20,
            opacity: 0.3 + Math.random() * 0.7,
            size: 2 + Math.random() * 4,
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="absolute top-0 animate-snowfall"
                    style={{
                        left: `${flake.left}%`,
                        animationDuration: `${flake.animationDuration}s`,
                        opacity: flake.opacity,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                    }}
                >
                    <div className="w-full h-full bg-white rounded-full blur-[1px]" />
                </div>
            ))}
        </div>
    );
}
