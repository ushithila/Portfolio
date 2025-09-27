import { Mail } from "lucide-react"

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
                    </div>

                    <div className="pt-8">
                        <h4> Connect With Me</h4>
                        <div className="flex space-x-4 justify"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}