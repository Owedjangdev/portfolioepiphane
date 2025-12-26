import React from "react";

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: {
    className?: string;
    children?: React.ReactNode;
    showRadialGradient?: boolean;
}) => {
    return (
        <main
            className={`relative flex flex-col items-center justify-center bg-slate-950 text-slate-950 transition-bg ${className || ""
                }`}
            {...props}
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className={`
            // Base aurora styles
            absolute -inset-[10px] opacity-50
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#60a5fa_10%,#e879f9_15%,#60a5fa_20%,#e879f9_25%,#60a5fa_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50
            will-change-transform
          `}
                ></div>
            </div>
            {showRadialGradient && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute h-[50vh] w-[50vh] bg-accent/20 rounded-full blur-[80px] top-[-100px] left-[-100px] animate-pulse"></div>
                    <div className="absolute h-[50vh] w-[50vh] bg-blue-500/10 rounded-full blur-[80px] bottom-[-100px] right-[-100px] animate-pulse delay-700"></div>
                </div>
            )}
            <div className="relative z-10 w-full">{children}</div>
        </main>
    );
};
