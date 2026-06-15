import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Wifi, Globe, Brain, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface JourneyStep {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  projects: string[];
}

const journeySteps: JourneyStep[] = [
  {
    title: "Electronics & Communication Engineering",
    description: "Started with a strong foundation in electronics, communication systems and digital design through an Integrated B.Tech + M.Tech program, developing an interest in how hardware interacts with the real world.",
    icon: Cpu,
    color: "from-blue-500 to-indigo-500",
    projects: ["Basic Arduino & Raspberry Pi projects"]
  },
  {
    title: "IoT & Embedded Systems",
    description: "Explored Arduino, STM32, Verilog and sensor-based systems, building projects that connected physical devices with software and data.",
    icon: Wifi,
    color: "from-teal-500 to-cyan-500",
    projects: ["Smart Object Detection", "Smart Grid Monitoring (SIH Project)"]
  },
  {
    title: "Full Stack Development",
    description: "Expanded into modern web technologies to create complete user-facing platforms, learning how to build scalable applications from frontend interfaces to backend services and databases.",
    icon: Globe,
    color: "from-purple-500 to-indigo-500",
    projects: ["FinLens", "CareerLyze", "Job Board"]
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "Applied AI and data-driven approaches to engineering problems, working on predictive systems, intelligent monitoring and decision-making applications.",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    projects: ["Metro Delay Prediction", "Vibe-Farmetric"]
  },
  {
    title: "Building Intelligent Cyber-Physical Systems",
    description: "Today, my focus is on integrating Embedded Systems, IoT, AI and Full Stack technologies to build practical solutions for real-world challenges.\n\nFrom wireless sensor networks and smart energy monitoring to intelligent traffic management, I enjoy engineering systems where hardware and software work together seamlessly.",
    icon: Settings,
    color: "from-pink-500 to-rose-500",
    projects: ["Smart Wireless Sensor Network V2", "Predictive Ambulance Green Corridor Generator", "AI Disaster Orchestrator"]
  },
];

export function JourneySection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-20 lg:py-32 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 gradient-bg opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Engineering <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my growth, evolution, and specialization bridging physical hardware and intelligent software.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line for Desktop */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-accent to-pink-500 -translate-x-1/2 hidden md:block" />
          {/* Side Line for Mobile */}
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-accent to-pink-500 md:hidden" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot/Icon Hub */}
                  <div className="absolute left-6 md:left-1/2 top-4 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: index * 0.15, type: "spring", stiffness: 150 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} p-[2px] glow-sm hover:scale-115 transition-transform duration-300`}
                    >
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <step.icon className="h-5 w-5 text-foreground" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Card Section */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                      <Card className="glass hover:glow transition-all duration-500 group relative">
                        <CardContent className="p-6 md:p-8">
                          {/* Corner Glow effect */}
                          <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${step.color} opacity-10 rounded-bl-full blur-xl group-hover:opacity-20 transition-opacity duration-500`} />
                          
                          <h3 className={`font-display text-xl font-bold mb-3 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line mb-4">
                            {step.description}
                          </p>

                          {/* Projects highlight */}
                          {step.projects && (
                            <div className="mt-5 pt-4 border-t border-white/10 relative z-10">
                              <span className="text-[10px] font-bold uppercase tracking-wider block mb-2 text-foreground/70">
                                Highlighted Projects
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {step.projects.map((proj) => (
                                  <span
                                    key={proj}
                                    className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${step.color} text-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default`}
                                  >
                                    {proj}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Spacer helper for desktop alignment */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </section>
  );
}
