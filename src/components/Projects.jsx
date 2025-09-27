import { ArrowRight, ExternalLink, Github } from "lucide-react"

const project = [
    {
        id: 1,
        title: "Lorem",
        description: "Ispum",
        image: "/",
        tags: ["Languages"],
        demoUrl: "#",
        githubUrl: "#",
    },
]

export const Projects = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-auto">
                Project paragraph.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.map((proj, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-tranform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {proj.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1"> {proj.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4"> {proj.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={proj.demoUrl} target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={"20"} /></a>
                                    <a href={proj.githubUrl} target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={"20"} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="nature-button w-fit flex items-center mx-auto gap-2" target= "_blank" href="https://github.com/ushithila">
                    Check My Githib <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section >
}