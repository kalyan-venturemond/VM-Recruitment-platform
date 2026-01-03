import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <img
                src="/logo.png"
                alt="Venture Mond"
                className="h-10 w-auto object-contain"
            />
        </div>
    );
};
