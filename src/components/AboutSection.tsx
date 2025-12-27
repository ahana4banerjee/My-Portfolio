import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, Database, Globe, Palette, Server, Smartphone,
  Briefcase, Calendar, MapPin,
  Music, Camera, GamepadIcon, BookOpen, Plane
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "React", icon: Code2, color: "from-cyan-500 to-blue-500" },
  { name: "TypeScript", icon: Code2, color: "from-blue-500 to-indigo-500" },
  { name: "Node.js", icon: Server, color: "from-green-500 to-emerald-500" },
  { name: "Python", icon: Code2, color: "from-yellow-500 to-orange-500" },
  { name: "PostgreSQL", icon: Database, color: "from-indigo-500 to-purple-500" },
  { name: "MongoDB", icon: Database, color: "from-green-600 to-lime-500" },
  { name: "Next.js", icon: Globe, color: "from-gray-500 to-gray-700" },
  { name: "TailwindCSS", icon: Palette, color: "from-teal-500 to-cyan-500" },
  { name: "React Native", icon: Smartphone, color: "from-purple-500 to-pink-500" },
  { name: "AWS", icon: Server, color: "from-orange-500 to-yellow-500" },
];

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and AWS.",
  },
  {
    title: "Full Stack Developer",
    company: "StartUp Inc",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Built and maintained multiple client-facing applications with modern tech stack.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "Austin, TX",
    period: "2018 - 2020",
    description: "Developed responsive web interfaces and improved user experience across projects.",
  },
];

const interests = [
  { name: "Music", icon: Music },
  { name: "Photography", icon: Camera },
  { name: "Gaming", icon: GamepadIcon },
  { name: "Reading", icon: BookOpen },
  { name: "Travel", icon: Plane },
];

export function AboutSection() {
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a passionate developer who loves creating beautiful, functional, and user-friendly applications.
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
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
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
                        <MapPin className="h-3 w-3" />
                        {exp.location}
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
