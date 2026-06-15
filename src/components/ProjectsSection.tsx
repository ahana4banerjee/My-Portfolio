import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  title: string;
  problem: string;
  solution: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
}

const featuredProjects: Project[] = [
  {
    title: "FinLens - AI Finance Tracker SaaS App",
    problem: "Personal finance tracking is tedious, manual, and lacks automated transaction processing, receipt OCR parsing, and customized savings suggestions.",
    solution: "Built a MERN SaaS finance platform using Gemini AI that automates receipt OCR uploads, bulk CSV ingestion, and logs scheduled summaries via Node-Cron.",
    image: "/assets/FinLens%20Landing%20Page.jpeg",
    tags: ["MERN Stack", "TypeScript", "Gemini AI", "Node-Cron", "Chart.js"],
    liveUrl: "https://fin-lens-sooty.vercel.app/",
    githubUrl: "https://github.com/ahana4banerjee/FinLens",
  },
  {
    title: "Smart Wireless Sensor Network",
    problem: "Industrial environments lack scalable real-time WSN monitoring telemetry, leading to unexpected device failures and unexplainable data anomalies.",
    solution: "Developed a WSN platform with MQTT telemetry, a FastAPI backend, a React NOC dashboard, and Scikit-Learn anomaly detection (Isolation Forest & Gradient Boosting).",
    image: "/assets/smart_wsn.png",
    tags: ["React", "FastAPI", "MQTT", "Python", "Scikit-Learn", "WSN"],
    liveUrl: "https://wireless-sensor-network.vercel.app",
    githubUrl: "https://github.com/ahana4banerjee/Wireless-Sensor-Network",
  },
  {
    title: "Metro Delay Prediction",
    problem: "Urban metro train delays are highly variable, dynamic, and propagate cascades across downstream stations, causing passenger bottleneck delay.",
    solution: "Engineered an ML delay prediction model (XGBoost R² ≈ 0.94) analyzing GTFS operational logs. Built a hybrid ML/heuristics forecasting Streamlit dashboard.",
    image: "/assets/metro_delay.png",
    tags: ["XGBoost", "GTFS Data", "Python", "Pandas", "Streamlit"],
    githubUrl: "https://github.com/ahana4banerjee/Metro-Delay-Prediction",
  },
  {
    title: "Vibe-FrameTric",
    problem: "Indian agriculture faces chemical soil degradation and crop failure due to excessive fertilizer application and unsustainable NPK nutrient imbalances.",
    solution: "Designed an AI agronomy recommendation platform utilizing XGBoost (87.6% accuracy) and heuristic engines to compute NPK overuse risk scores and sustainability indexes.",
    image: "/assets/vibefarmetric.png",
    tags: ["XGBoost", "Scikit-Learn", "Python", "Streamlit", "Data Analysis"],
    githubUrl: "https://github.com/ahana4banerjee/Vibe-Farmetric",
  },
];

const inProgressProjects: Project[] = [
  {
    title: "AI Disaster Orchestrator",
    problem: "First responders lack dynamic systems to estimate magnitude damage, classify disaster severity, and dispatch emergency vehicles efficiently.",
    solution: "Building a FastAPI & Next.js multi-agent simulator that trains Random Forest severity classifiers and runs optimal resource allocation logic.",
    image: "/assets/disaster_orchestrator.png",
    tags: ["FastAPI", "Next.js", "Scikit-Learn", "SQLite", "Tailwind CSS"],
    githubUrl: "https://github.com/ahana4banerjee/AI-Disaster-Orchastrator",
  },
  {
    title: "Predictive Ambulance Green Corridor Generator",
    problem: "Emergency vehicles lose critical patient transport time due to uncoordinated traffic signal controllers and urban congestion bottlenecks.",
    solution: "Developing a traffic corridor generator utilizing STM32 signal controllers, Vivado FPGA integrations, and speed sensors to dynamically coordinate signals ahead of arrivals.",
    image: "/assets/green_corridor.png",
    tags: ["STM32", "Vivado FPGA", "Traffic Simulations", "Route Optimization"],
    githubUrl: "https://github.com/ahana4banerjee/Predictive-Ambulance-Green-Corridor-Generator"
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 gradient-bg opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
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
            Flagship engineering projects bridging hardware capability, software platforms, and AI models.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24"
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Card className="glass overflow-hidden hover:glow transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full">
                {/* Thumbnail */}
                <div className="relative overflow-hidden h-48 md:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                {/* Details */}
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-bold mb-3 text-gradient">{project.title}</h3>
                  
                  {/* Problem & Solution block */}
                  <div className="space-y-3 mb-5 text-sm flex-grow">
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground block mb-0.5">Problem:</span>
                      {project.problem}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-primary block mb-0.5">Solution:</span>
                      {project.solution}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1 rounded-full bg-primary hover:bg-primary/90 hover:glow-sm transition-all duration-300"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 rounded-full border-primary/45 hover:bg-primary/10 transition-all duration-300"
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
        </motion.div>

        {/* Currently Working On Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Currently <span className="text-gradient">Working On</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Active prototyping of intelligent systems, edge AI applications, and wireless traffic coordination designs.
          </p>
        </motion.div>

        {/* Currently Working On Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {inProgressProjects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Card className="glass overflow-hidden hover:glow transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full border border-primary/20">
                {/* Thumbnail */}
                <div className="relative overflow-hidden h-48 md:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                {/* Details */}
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-bold mb-3 text-gradient">{project.title}</h3>
                  
                  {/* Problem & Solution block */}
                  <div className="space-y-3 mb-5 text-sm flex-grow">
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground block mb-0.5">Problem:</span>
                      {project.problem}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-primary block mb-0.5">Solution:</span>
                      {project.solution}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent-foreground border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 rounded-full border-primary/45 hover:bg-primary/10 transition-all duration-300"
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
        </motion.div>
      </div>
    </section>
  );
}
