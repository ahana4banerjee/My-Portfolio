import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "FinLens - AI Finance Tracker SaaS App",
    description: "A full-stack AI-driven personal finance platform that automates expense tracking, receipt processing, and financial insight generation using Google Gemini AI.",
    image: "public/assets/FinLens Landing Page.jpeg",
    tags: ["MERN", "TypeScript", "Gemini AI", "ChartsJS"],
    liveUrl: "https://fin-lens-sooty.vercel.app/",
    githubUrl: "https://github.com/ahana4banerjee/FinLens",
  },
  {
    title: "CareerLyze - AI Career Coach SaaS App",
    description: "AI career guidance platform that helps users explore career paths, build optimized resumes, generate tailored cover letters, and prepare for interviews using Gemini AI.",
    image: "public/assets/CareerLyze Landing Page.jpeg",
    tags: ["Next.js", "NeonDB", "Prisma", "Inngest"],
    liveUrl: "https://career-lyze.vercel.app/",
    githubUrl: "https://github.com/ahana4banerjee/CareerLyze",
  },
  {
    title: "Job Portal",
    description: "Built with the MERN stack; enables job seekers to discover and apply for jobs and recruiters to post, manage, and track applications through role-based dashboards.",
    image: "public/assets/Job Portal Landing page.PNG",
    tags: ["MERN", "ShadcnUI", "Cloudinary", "Multer"],
    liveUrl: "https://job-portal-sable-eight.vercel.app/",
    githubUrl: "https://github.com/ahana4banerjee/JobPortal",
  },
  
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      visible.push({ ...projects[index], position: i });
    }
    return visible;
  };

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 gradient-bg opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and problem-solving approaches.
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-6 h-[500px]">
            {getVisibleProjects().map((project, idx) => (
              <motion.div
                key={`${project.title}-${idx}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: project.position === 0 ? 1 : 0.5,
                  scale: project.position === 0 ? 1 : 0.85,
                  x: project.position * 50,
                  zIndex: project.position === 0 ? 10 : 0,
                }}
                transition={{ duration: 0.4 }}
                className={`absolute ${project.position === 0 ? "w-[600px]" : "w-[450px]"}`}
                style={{
                  left: `${50 + project.position * 30}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <Card className="glass overflow-hidden hover:glow transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="flex-1 rounded-full"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 rounded-full"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full glass hover:glow-sm z-20"
            onClick={prevProject}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full glass hover:glow-sm z-20"
            onClick={nextProject}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Stack */}
        <div className="md:hidden space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass overflow-hidden hover:glow-sm transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 rounded-full"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 rounded-full"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
