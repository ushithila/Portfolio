import { Linkedin, Mail, MapPin, Send } from "lucide-react"
import { cn } from "@/lib/util";

export const Contact = () => {


    return <section className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                paragraph talk contact
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6 justify-center"> Contact Information </h3>

                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:ushithila@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"> ushithila@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors"> New York, USA</a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4"> Connect With Me</h4>
                        <div className="flex space-x-4 justify"></div>
                        <a href="linkedin.com/in/shithila-urshi/" target="_blank" className="flex items-center justify-center">
                            <Linkedin />
                        </a>
                    </div>

                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2 focus:ring-primary" placeholder="Name" />
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2 focus:ring-primary" placeholder="Email" />
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Message</label>
                            <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus-outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Message" />
                        </div>

                        <button type="submit" className={cn("nature-button w-full flex items-center justify-center gap-2",)}>
                           Send Message
                           <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}