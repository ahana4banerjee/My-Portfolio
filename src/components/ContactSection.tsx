import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, Loader2, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your EmailJS credentials
      await emailjs.send(
        "service_vcpasz6", // Replace with your EmailJS service ID
        "template_8fvwad8", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "banerjeeahana4@gmail.com", // Replace with your email
        },
        "eBjqd-45q57bveL3O" // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "banerjeeahana4@gmail.com",
      href: "mailto:banerjeeahana4@gmail.com",
      isInternal: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ahana-4-banerjee",
      href: "https://linkedin.com/in/ahana-4-banerjee",
      isInternal: false,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ahana4banerjee",
      href: "https://github.com/ahana4banerjee",
      isInternal: false,
    },
    {
      icon: FileText,
      label: "Resume",
      value: "View Timeline / Download PDF",
      href: "#resume",
      isInternal: true,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="absolute inset-0 gradient-bg opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Contact Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            I am actively seeking opportunities where physical hardware, scalable software, and machine learning converge. Let's discuss collaborations in Embedded Systems, IoT, AI/ML, or Full Stack Engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass overflow-hidden hover:glow-sm transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-lg bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="yourmail@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-lg bg-background/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="rounded-lg bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-primary hover:bg-primary/90 hover:glow-sm transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <a
                    href={info.href}
                    target={info.href.startsWith("mailto:") || info.isInternal ? undefined : "_blank"}
                    rel={info.href.startsWith("mailto:") || info.isInternal ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if (info.isInternal) {
                        e.preventDefault();
                        document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="flex items-center gap-4 p-4 rounded-xl glass hover:glow-sm transition-all duration-300 group w-full text-left"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Availability Detail Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-8 p-6 rounded-xl glass text-center border border-primary/20"
            >
              <p className="text-muted-foreground mb-2">Open to discussions regarding</p>
              <p className="font-display text-base font-semibold text-gradient leading-relaxed">
                Embedded Firmware Development, IoT Telemetry Architecture, Edge AI Model Deployment, and Full Stack Product Engineering.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
