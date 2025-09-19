import { useState } from "react"

const skill = [
    { name: "C++", level: 90, category: "Programming Language" },

]

const category = ["all"]

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    return <section id="skills" className="py-24 px-24 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify center gap-4 mb-12">
                {category.map((cat, key) => (
                    <button key={key}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skill.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div>
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                    style={{ width: skill.level + "%" }} />
                            </div>
                            <div className="text-right mt-1">  
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}