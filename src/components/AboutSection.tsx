import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Code2, Database, Globe, Palette, Server,
  Briefcase, Calendar, Cpu
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  // Languages
  { name: "Python", category: "languages", icon: Code2, color: "from-yellow-500 to-orange-500" },
  { name: "C++", category: "languages", icon: Code2, color: "from-blue-600 to-indigo-600" },
  { name: "C", category: "languages", icon: Code2, color: "from-gray-500 to-gray-700" },
  { name: "JavaScript", category: "languages", icon: Code2, color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", category: "languages", icon: Code2, color: "from-blue-500 to-indigo-500" },
  { name: "SQL", category: "languages", icon: Database, color: "from-sky-500 to-blue-500" },

  // Embedded & IoT
  { name: "STM32 / MCU", category: "embedded & IoT", icon: Cpu, color: "from-blue-600 to-cyan-500" },
  { name: "Microcontroller 8051", category: "embedded & IoT", icon: Cpu, color: "from-indigo-500 to-purple-600" },
  { name: "Vivado (FPGA)", category: "embedded & IoT", icon: Cpu, color: "from-orange-600 to-red-500" },
  { name: "Solar Grid Monitoring", category: "embedded & IoT", icon: Cpu, color: "from-amber-500 to-yellow-600" },
  { name: "I2C / SPI / UART", category: "embedded & IoT", icon: Cpu, color: "from-purple-500 to-indigo-500" },
  { name: "ESP32 / RTOS", category: "embedded & IoT", icon: Cpu, color: "from-yellow-500 to-amber-600" },
  { name: "Wireless Sensor Networks", category: "embedded & IoT", icon: Cpu, color: "from-teal-400 to-emerald-600" },

  // AI / ML
  { name: "TensorFlow / PyTorch", category: "AI", icon: Code2, color: "from-orange-500 to-red-500" },
  { name: "Hugging Face", category: "AI", icon: Code2, color: "from-yellow-400 to-amber-500" },
  { name: "Supervised Learning", category: "AI", icon: Code2, color: "from-green-500 to-emerald-600" },
  { name: "Unsupervised Learning", category: "AI", icon: Code2, color: "from-teal-500 to-cyan-600" },
  { name: "Google Gemini API", category: "AI", icon: Code2, color: "from-purple-500 to-fuchsia-500" },
  { name: "NLP Pipelines", category: "AI", icon: Code2, color: "from-violet-500 to-indigo-500" },
  { name: "Multi-Agent Orchestration", category: "AI", icon: Code2, color: "from-indigo-600 to-blue-600" },

  // Frontend
  { name: "React.js", category: "frontend", icon: Code2, color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", category: "frontend", icon: Globe, color: "from-gray-500 to-gray-700" },
  { name: "Chart.js", category: "frontend", icon: Palette, color: "from-pink-500 to-rose-500" },
  { name: "Tailwind CSS", category: "frontend", icon: Palette, color: "from-teal-500 to-cyan-500" },
  { name: "ShadcnUI", category: "frontend", icon: Palette, color: "from-slate-500 to-slate-700" },

  // Backend & APIs
  { name: "FastAPI", category: "backend", icon: Server, color: "from-teal-500 to-cyan-500" },
  { name: "Node.js", category: "backend", icon: Server, color: "from-green-500 to-emerald-500" },
  { name: "Express.js", category: "backend", icon: Server, color: "from-green-400 to-lime-500" },
  { name: "REST API Design", category: "backend", icon: Globe, color: "from-indigo-500 to-purple-500" },
  { name: "JWT Authentication", category: "backend", icon: Server, color: "from-pink-500 to-rose-500" },

  // Databases
  { name: "MongoDB", category: "databases", icon: Database, color: "from-green-600 to-lime-500" },
  { name: "PostgreSQL", category: "databases", icon: Database, color: "from-indigo-500 to-purple-500" },
  { name: "Firebase", category: "databases", icon: Database, color: "from-yellow-500 to-orange-500" },
  { name: "NeonDB", category: "databases", icon: Database, color: "from-cyan-500 to-blue-500" },
  { name: "Prisma ORM", category: "databases", icon: Database, color: "from-gray-500 to-gray-700" },

  // Cloud & DevOps
  { name: "AWS (EC2, S3)", category: "DevOps & Cloud", icon: Server, color: "from-orange-500 to-yellow-500" },
  { name: "Azure", category: "DevOps & Cloud", icon: Server, color: "from-blue-500 to-indigo-500" },
  { name: "GitHub Actions", category: "DevOps & Cloud", icon: Code2, color: "from-purple-500 to-indigo-500" },
  { name: "Vercel", category: "DevOps & Cloud", icon: Globe, color: "from-black to-gray-700" },
  { name: "Render", category: "DevOps & Cloud", icon: Globe, color: "from-indigo-500 to-purple-500" },

  // Tools
  { name: "STM32", category: "tools", icon: Cpu, color: "from-blue-600 to-cyan-500" },
  { name: "PICSimLab", category: "tools", icon: Cpu, color: "from-yellow-600 to-orange-500" },
  { name: "Proteus", category: "tools", icon: Cpu, color: "from-blue-500 to-sky-600" },
  { name: "Git", category: "tools", icon: Code2, color: "from-orange-500 to-yellow-500" },
  { name: "GitHub", category: "tools", icon: Code2, color: "from-gray-600 to-gray-800" },
  { name: "Docker", category: "tools", icon: Server, color: "from-sky-500 to-blue-600" },
  { name: "VS Code", category: "tools", icon: Code2, color: "from-blue-400 to-sky-500" },
];

const experiences = [
  {
    title: "Internet of Things (IoT) Intern",
    company: "DecodeLabs",
    period: "Apr 2026 - May 2026",
    description: "Designed environmental sensing networks in Tinkercad (Arduino, PIR, LDR). Developed a Python data ingestion pipeline, built a Streamlit telemetry monitoring dashboard, and implemented a hierarchical rule-based alert suppression engine.",
    tags: ["IoT", "Arduino", "Python", "Streamlit", "Automation"]
  },
  {
    title: "Software Developer Intern",
    company: "SocialMM",
    period: "Jan 2026 - Apr 2026",
    description: "Contributed to Zenzhub's Learning Management System (LMS). Structured and implemented core LMS features and scalable components to enhance user interaction, course delivery, and content management workflows.",
    tags: ["React.js", "LMS Development", "Component Design", "UI/UX"]
  },
  {
    title: "Student Project Associate",
    company: "Stanley College of Eng. & Tech.",
    period: "Dec 2025 - Apr 2026",
    description: "Engineered a smart delay prediction model for Hyderabad Metro systems. Processed GTFS schedule/real-time operational data, engineered features, trained hybrid ML models, and built interactive transit monitoring dashboards.",
    tags: ["Machine Learning", "GTFS Data", "Python", "Transit Analytics"]
  },
  {
    title: "Web Development Intern",
    company: "Zidio Development",
    period: "Aug 2025 - Dec 2025",
    description: "Built a MERN-based Excel Analytics Platform with 2D/3D visualizations (Chart.js, Three.js) and Gemini API insights. Implemented file parsing pipelines (Multer, SheetJS) and a rich-text blogging system.",
    tags: ["MERN Stack", "Three.js", "Gemini API", "SheetJS", "Node.js"]
  },
  {
    title: "Open Source Contributor & Project Admin",
    company: "GirlScript Summer of Code (GsSOC)",
    period: "2025 & 2026",
    description: "Delivered 15+ merged pull requests across agentic AI and MERN projects in 2025. In 2026, served as Project Admin and Mentor, managing the 'CareerLyze' project and guiding students in open-source contributions.",
    tags: ["Project Administration", "Mentorship", "MERN Stack", "Git / GitHub"]
  }
];



export function AboutSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "languages", "embedded & IoT", "AI", "frontend", "backend", "databases", "DevOps & Cloud", "tools"];


  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  function Highlight({ children }) {
  return (
    <span className="relative font-semibold text-foreground highlight-glow">
      {children}
    </span>
  );
}




  return (
    <section id="about" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="absolute inset-0 gradient-bg opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            As an <Highlight>Electronics and Communication Engineering (ECE)</Highlight> student, my journey began with the physical layer of technology—signals, circuits, and microcontrollers. This hardware foundation naturally evolved into a focus on <Highlight>IoT and Embedded Systems</Highlight>, where software directly controls the physical world. To create complete, end-to-end solutions, I learned <Highlight>Full Stack Development</Highlight>, enabling me to connect edge nodes to secure backend services and intuitive web dashboards. Driven by a vision of adaptive hardware, I am actively integrating <Highlight>AI/ML and edge computing</Highlight> into my designs. Today, I bridge the divide between hardware, cloud software, and intelligence, aiming to build <Highlight>intelligent cyber-physical systems</Highlight> that automate and optimize complex processes.
          </p>

        </motion.div>

        {/* Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <h3 className="font-display text-2xl font-semibold mb-8 text-center">Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full capitalize transition-all duration-300
                  ${activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/60 hover:bg-secondary"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">

            {filteredSkills.map((skill, index) => (

              <motion.div
                key={skill.name}
                variants={itemVariants}
                transition={{ delay: index * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className={`px-4 py-2 text-sm font-medium rounded-full glass cursor-default
                    hover:scale-110 hover:glow-sm transition-all duration-300 group`}
                >
                  <skill.icon className={`h-4 w-4 mr-2 bg-gradient-to-r ${skill.color} bg-clip-text`} />
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <h3 className="font-display text-2xl font-semibold mb-8 text-center">Experience</h3>
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-8 last:pb-0"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[11px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary glow-sm flex items-center justify-center">
                  <Briefcase className="h-3 w-3 text-primary-foreground" />
                </div>

                <Card className="glass hover:glow-sm transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="font-display font-semibold text-lg">{exp.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="font-medium text-primary">{exp.company}</span>
                      <span className="flex items-center gap-1">
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}
