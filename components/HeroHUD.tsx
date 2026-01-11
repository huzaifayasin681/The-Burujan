'use client';

export default function HeroHUD() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            {/* Corner Brackets */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/10" />
            <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/10" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/10" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/10" />

            {/* Side Lines */}
            <div className="absolute top-1/2 left-6 w-[1px] h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent -translate-y-1/2" />
            <div className="absolute top-1/2 right-6 w-[1px] h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent -translate-y-1/2" />

            {/* Bottom Data Ticker Placeholder */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 text-[10px] text-gray-600 tracking-[0.3em] font-mono uppercase opacity-50">
                <span>System: Online</span>
                <span>///</span>
                <span>Secure Connection</span>
                <span>///</span>
                <span>V 1.0.4</span>
            </div>
        </div>
    );
}
