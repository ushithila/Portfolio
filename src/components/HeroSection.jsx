import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-cneter z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> {" "} Shithila</span>
                    <span className="text-gradient ml-2 text-primary opacity-0 animate-fade-in-delay-2"> {" "} Urshi</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I'm a current CS student passionate about using code to solve problems and spark creativity. Welcome to my portfolio!
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="nature-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foregound mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>;
}