import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Code2, Database, Globe, Palette, Server, Smartphone,
  Briefcase, Calendar, MapPin,
  Music, Camera, GamepadIcon, BookOpen, Plane,
  Laptop,
  Radio,
  Pen
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  // Languages
  { name: "Python", category: "languages", icon: Code2, color: "from-yellow-500 to-orange-500" },
  { name: "JavaScript", category: "languages", icon: Code2, color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", category: "languages", icon: Code2, color: "from-blue-500 to-indigo-500" },
  { name: "SQL", category: "languages", icon: Database, color: "from-sky-500 to-blue-500" },
  { name: "C", category: "languages", icon: Code2, color: "from-gray-500 to-gray-700" },

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

  // AI / ML
  { name: "Google Gemini API", category: "AI", icon: Code2, color: "from-purple-500 to-fuchsia-500" },
  { name: "NLP Pipelines", category: "AI", icon: Code2, color: "from-violet-500 to-indigo-500" },
  { name: "Multi-Agent Orchestration", category: "AI", icon: Code2, color: "from-indigo-600 to-blue-600" },

  // Cloud & DevOps
  { name: "AWS (EC2, S3)", category: "DevOps & Cloud", icon: Server, color: "from-orange-500 to-yellow-500" },
  { name: "Azure", category: "DevOps & Cloud", icon: Server, color: "from-blue-500 to-indigo-500" },
  { name: "GitHub Actions", category: "DevOps & Cloud", icon: Code2, color: "from-purple-500 to-indigo-500" },
  { name: "Vercel", category: "DevOps & Cloud", icon: Globe, color: "from-black to-gray-700" },
  { name: "Render", category: "DevOps & Cloud", icon: Globe, color: "from-indigo-500 to-purple-500" },

  // Tools
  { name: "Git", category: "tools", icon: Code2, color: "from-orange-500 to-yellow-500" },
  { name: "GitHub", category: "tools", icon: Code2, color: "from-gray-600 to-gray-800" },
  { name: "Docker", category: "tools", icon: Server, color: "from-sky-500 to-blue-600" },
  { name: "VS Code", category: "tools", icon: Code2, color: "from-blue-400 to-sky-500" },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Zidio Development",
    period: "Aug 2025 - Dec 2025",
    description: "Built backend pipelines for Excel analytics platform processing .xls/.xlsx files with 10k+ rows using SheetJS & MongoDB.",
  },
  {
    title: "Web Developer Intern",
    company: "Cognifyz Technologies",
    period: "Apr 2025 - May 2025",
    description: "Developed responsive web interfaces and improved user experience across projects.",
  },
  {
    title: "Open Source Contributor",
    company: "GirlScript Summer of Code GsSOC 2025",
    period: "Jul 2025 - Dec 2025",
    description: "Delivered 15+ merged PRs across MERN & agentic-AI projects.",
  },
];

const interests = [
  { name: "Tech", icon: Laptop },
  { name: "Music", icon: Radio },
  { name: "Reading", icon: BookOpen },
  { name: "Writing", icon: Pen },
];

export function AboutSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "languages", "frontend", "backend", "databases", "AI", "DevOps & Cloud", "tools"];


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
  I’m a passionate <Highlight >software developer</Highlight> who loves building real, 
  <Highlight> user-centric applications</Highlight> that actually solve problems. 
  I have hands-on experience with the <Highlight>MERN stack</Highlight>, 
  <Highlight> Python</Highlight>, and I’m actively exploring 
  <Highlight> AI</Highlight> and <Highlight>intelligent systems</Highlight>.  
  For me, development is not just about writing code — it’s about turning ideas into 
  <Highlight> smooth, meaningful digital experiences</Highlight> that people genuinely enjoy using.
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
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="font-display text-2xl font-semibold mb-8 text-center">Interests</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                variants={itemVariants}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="glass hover:glow-sm hover:scale-105 transition-all duration-300 cursor-default">
                  <CardContent className="p-4 flex flex-col items-center gap-2">
                    <interest.icon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium">{interest.name}</span>
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
