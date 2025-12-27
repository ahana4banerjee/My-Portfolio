import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    // Create a sample resume PDF download
    // In production, replace with actual resume URL
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "John_Doe_Resume.pdf";
    link.click();
  };

  return (
    <section id="resume" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="absolute inset-0 gradient-bg opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my resume to learn more about my professional experience and qualifications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="glass overflow-hidden hover:glow transition-all duration-500">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Resume Icon/Preview */}
                <div className="relative group">
                  <div className="w-32 h-40 md:w-40 md:h-52 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30 group-hover:border-primary transition-colors duration-300">
                    <FileText className="h-16 w-16 md:h-20 md:w-20 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-60 animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full opacity-60 animate-pulse" style={{ animationDelay: "0.5s" }} />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-display text-2xl font-semibold mb-2">
                    John Doe
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    Full Stack Developer
                  </p>
                  <p className="text-muted-foreground mb-6">
                    5+ years of experience building scalable web applications and leading development teams.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleDownload}
                      className="rounded-full px-6 bg-primary hover:bg-primary/90 hover:glow-sm transition-all duration-300"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full px-6 border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      onClick={() => window.open("/resume.pdf", "_blank")}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Online
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-gradient">5+</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-gradient">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-gradient">20+</div>
                  <div className="text-sm text-muted-foreground">Clients</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
