import { Briefcase, Code, User } from "lucide-react";

export const About = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Exploring Data, Design, and Development
                    </h3>
                    <p className="text-muted-foreground"> I am a current computer science student at Hunter College.  I have experience in Python, C++, and SQL. I am currently an 
                        Undergraduate Teaching Assistant for an introductory python course at Hunter, where I have developed strong technical and problem-solving skills from helping
                        students solve programming challenges and reinforce complex programming concepts. I previously interned at Wyndham Hotels & Resorts as a SEO Analyst Intern and 
                        Mount Sinai as a Data Intern. I am passionate about building technology that improves everyday experiences. My goal is to continue to expand my technical skills and 
                        eventually work on innovative and creative tech solutions and combine user experience, analytics, and have huge, meaningful impacts! 
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="nature-button"> {" "} Get In Touch</a>
                        <a href="src\components\Resume_Shithila_Urshi.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> Download Resume</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Title </h4>
                                <p classname="text-muted-foreground">Description</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Title </h4>
                                <p classname="text-muted-foreground">Description</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Title </h4>
                                <p classname="text-muted-foreground">Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}