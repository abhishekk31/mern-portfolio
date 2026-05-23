import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Github,
  FileSpreadsheet,
  Sparkles,
  Bot,
  Brain,
  Server,
  Layers,
  Mail,
  Send,
  Loader2,
  ExternalLink,
  Cpu,
  Zap,
  MessageSquare,
  Linkedin,
  Twitter,
  ArrowRight,
  Instagram,
  Phone,
  User,
} from "lucide-react";
import myPhoto from "../assets/itsMe.jpg";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MERN Developer Portfolio · AI-Enhanced Full-Stack Engineer" },
      { name: "description", content: "MERN stack developer specialising in React, Node.js, MongoDB and AI/LLM integrations with ChatGPT and Gemini." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400..700&family=Inter:wght@300..600&display=swap" },
    ],
  }),
  component: Portfolio,
});

const NAME = "Abhishek Sasane";
const EMAIL = "abhisheksasane212@gmail.com";
const ROLES = ["MERN Stack Developer", "AI Integration Engineer", "Full-Stack Builder"];

const skills = [
  { name: "HTML5", icon: Code2, color: "oklch(0.7 0.2 30)" },
  { name: "CSS3", icon: Layers, color: "oklch(0.7 0.2 220)" },
  { name: "JavaScript", icon: Code2, color: "oklch(0.85 0.18 90)" },
  { name: "Tailwind CSS", icon: Layers, color: "oklch(0.78 0.15 210)" },
  { name: "React.js", icon: Cpu, color: "oklch(0.75 0.18 200)" },
  { name: "Node.js", icon: Server, color: "oklch(0.7 0.2 140)" },
  { name: "Express.js", icon: Server, color: "oklch(0.75 0.05 270)" },
  { name: "MongoDB", icon: Database, color: "oklch(0.7 0.2 150)" },
  { name: "JWT Auth", icon: Zap, color: "oklch(0.8 0.18 80)" },
  { name: "Razorpay Integration", icon: Zap, color: "oklch(0.7 0.2 260)" },
  { name: "AI / LLMs", icon: Brain, color: "oklch(0.7 0.25 285)" },
  { name: "Git / GitHub", icon: Github, color: "oklch(0.75 0.05 270)" },
  { name: "Vercel Deploy", icon: Cloud, color: "oklch(0.9 0.02 270)" },
  { name: "Render (Backend)", icon: Cloud, color: "oklch(0.7 0.2 180)" },
  { name: "Excel + AI", icon: FileSpreadsheet, color: "oklch(0.7 0.2 130)" },
];

const projects = [
  {
    title: "AI Data Analyzer", desc: "Advanced AI-powered CSV analytics platform built with the MERN stack that allows users to upload CSV datasets, generate interactive visualisations, explore smart dashboard insights, and interact with an integrated AI chatbot for natural language querying and intelligent data analysis. Designed with responsive UI, dynamic chart rendering, and scalable backend architecture for real-time analytics workflows.", tags: ["React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT Authentication",
      "AI Chatbot",
      "CSV Processing",
      "Chart.js",
      "REST API",
      "MERN Stack",
      "Grok AI free modal",
    ], live: "https://ai-data-analyzer-frontend.vercel.app/"
  },
  {
    title: "Flowra API Billing System", desc: "Enterprise-grade MERN stack platform designed for managing providers, consumers, API subscriptions, billing workflows, and payment operations through a centralized admin dashboard. The system includes secure JWT authentication, provider onboarding, consumer management, API usage monitoring, Razorpay payment integration, subscription handling, analytics dashboards, and scalable backend architecture for modern SaaS and API-based businesses. Built with production-focused architecture to efficiently manage multi-user operations, billing automation, and real-time administrative controls.",
    tags: ["React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Razorpay",
      "Admin Dashboard",
      "Provider Management",
      "Consumer Management",
      "REST API",
      "Tailwind CSS",
      "API Billing",
      "SaaS Platform",
      "MERN Stack",], live: "https://flowra-api-billing-system.vercel.app/"
  },
  {
    title: "Speech To Text Platform (NovaVoice AI)", desc: "Realtime speech-to-text web application developed using the MERN stack with secure JWT authentication, live voice recognition, transcript management, and responsive dashboard design. The platform enables users to convert speech into text instantly, manage saved transcripts, and experience smooth real-time interactions through modern frontend and backend integration.", tags: ["React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Speech Recognition API",
      "Tailwind CSS",
      "REST API",
      "Realtime Processing",
      "MERN Stack",], live: "https://speech-text-neon.vercel.app/"
  }

];

const services = [
  { icon: Layers, title: "Full MERN Stack Websites", desc: "Production-grade MERN websites with clean architecture, JWT auth and Razorpay payments." },
  { icon: Zap, title: "SaaS Projects", desc: "End-to-end SaaS builds — multi-tenant dashboards, subscriptions, billing and admin panels." },
  { icon: Bot, title: "AI + Applications", desc: "ChatGPT, Gemini & Claude powered apps — chatbots, RAG, AI dashboards and automations." },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <AISection />
      <Services />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  );
}

const Typewriter = memo(() => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 50 : 100;
    const t = setTimeout(() => {
      if (!deleting && typed === current) { setTimeout(() => setDeleting(true), 1500); return; }
      if (deleting && typed === "") { setDeleting(false); setRoleIdx((roleIdx + 1) % ROLES.length); return; }
      setTyped(deleting ? current.slice(0, typed.length - 1) : current.slice(0, typed.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
      className="mt-6 font-display text-2xl md:text-3xl text-muted-foreground h-10">
      <span className="text-foreground">{typed}</span><span className="animate-blink">|</span>
    </motion.div>
  );
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display text-xl font-bold gradient-text">{"<MERN/>"}</a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {["About", "Skills", "Projects", "Services", "Contact"].map((s) => (
            <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-primary transition-colors">{s}</a>
          ))}
        </nav>
        <a href="#contact" className="text-sm px-4 py-2 rounded-full glass hover:glow transition-all">Hire me</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Animated blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 rounded-full opacity-40 blur-3xl animate-blob"
        style={{ background: "oklch(0.6 0.25 285)" }} />
      <div className="absolute top-20 -left-20 w-96 h-96 rounded-full opacity-30 blur-3xl animate-blob pointer-events-none"
        style={{ background: "oklch(0.6 0.25 285)" }} />
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl animate-blob pointer-events-none"
        style={{ background: "oklch(0.6 0.25 220)", animationDelay: "5s" }} />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-5 gap-12 items-center relative z-10">
        <div className="md:col-span-3">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sm uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Available for projects
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="gradient-text">{NAME}</span>
          </motion.h1>
          <Typewriter />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            I build performant, AI-enhanced full-stack apps with the MERN stack — bringing together clean React UIs, scalable Node APIs and LLM superpowers.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:glow transition-all">
              View work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition-all">
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* Photo placeholder */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
          className="md:col-span-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full opacity-60 blur-2xl animate-spin-slow"
              style={{ background: "conic-gradient(from 0deg, oklch(0.7 0.25 285), oklch(0.7 0.25 220), oklch(0.7 0.25 320), oklch(0.7 0.25 285))" }} />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full glass overflow-hidden flex items-center justify-center animate-float">
              {/* Replace src with your photo URL */}
              <img
                src={myPhoto}
                alt="Abhishek Sasane"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">{eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineer first. Designer always.">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-8">
        <div className="glass rounded-2xl p-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a MERN stack developer with a deep love for performance and clean architecture. I prioritise <span className="text-foreground font-medium">Mongoose schema optimisation</span>, smart indexing, and React performance patterns like <span className="text-foreground font-medium">useMemo</span> and <span className="text-foreground font-medium">useCallback</span> — because beautiful UIs deserve fast backends.
          </p>
        </div>
        <div className="glass rounded-2xl p-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Lately I've been integrating LLMs (ChatGPT & Gemini) into production apps — chatbots, RAG pipelines, and AI-augmented dashboards. I bridge classic full-stack craftsmanship with the new era of intelligent apps.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & Stack">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {skills.map((s, i) => (
          <motion.div key={s.name}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="glass rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer group">
            <div className="animate-float mb-4" style={{ animationDelay: `${i * 0.3}s` }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `${s.color.replace(")", " / 0.15)")}`, boxShadow: `0 0 30px ${s.color.replace(")", " / 0.3)")}` }}>
                <s.icon className="w-7 h-7" style={{ color: s.color }} />
              </div>
            </div>
            <p className="font-medium">{s.name}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function AISection() {
  const aiTools = [
    { icon: MessageSquare, name: "ChatGPT (OpenAI)", desc: "GPT-4o agents, function calling, streaming responses." },
    { icon: Brain, name: "Gemini AI", desc: "Multimodal reasoning, long-context analysis, vision." },
    { icon: Sparkles, name: "Claude (Anthropic)", desc: "Long-context reasoning, safe tool-use, structured output." },
    { icon: Zap, name: "Lovable AI", desc: "Rapid full-stack app generation with AI workflows." },
    { icon: Github, name: "GitHub Copilot", desc: "AI pair-programming inside the editor." },
    { icon: Database, name: "MongoDB Atlas Vector Search", desc: "Vector embeddings & semantic search for RAG pipelines." },
  ];
  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative glass rounded-3xl p-10 md:p-16 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-40 blur-3xl animate-blob"
            style={{ background: "oklch(0.7 0.25 285)" }} />
          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Special focus
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">AI & LLM</span> Implementation
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
              Production-ready AI integrations: chatbots, RAG, agents, and intelligent automations.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {aiTools.map((t, i) => (
                <motion.div key={t.name}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="glass rounded-2xl p-6 flex items-start gap-4 hover:glow transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 animate-float">
                    <t.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-1">{t.name}</h3>
                    <p className="text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <Section id="services" eyebrow="What I do" title="Services">
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div key={s.title}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-8 group hover:glow transition-all">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects & AI Lab">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a key={p.title} href={p.live} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group glass rounded-2xl p-8 block relative overflow-hidden hover:glow transition-all">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "radial-gradient(at top right, oklch(0.7 0.25 285 / 0.15), transparent 70%)" }} />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-2xl font-semibold group-hover:gradient-text transition-all">{p.title}</h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-muted-foreground mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full glass text-muted-foreground">{t}</span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Live demo <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}


{/*form */ }
function ContactSection() {
  const [loading, setLoading] = useState(false);
  return (
    <section
      id="contact"
      className="py-28 px-6 relative bg-[#050816]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Get in touch
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
            Let&apos;s build something together
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Have an idea, a project, or just want to say hi?
            Drop me a message and I&apos;ll get back to you soon.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 glass rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-3">
              Connect with me
            </h3>

            <p className="text-zinc-400 mb-8">
              Find me on these platforms.
            </p>

            <div className="space-y-4">
              <a
                href="https://github.com/"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-black/30"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    GitHub
                  </p>

                  <p className="font-semibold text-white">
                    @abhishekk31
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-black/30"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    LinkedIn
                  </p>

                  <p className="font-semibold text-white">
                    Abhishek sasane
                  </p>
                </div>
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-black/30"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    Instagram
                  </p>

                  <p className="font-semibold text-white">
                    itsme_abhisheksasane
                  </p>
                </div>
              </a>
            </div>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={() => setLoading(true)}
            className="lg:col-span-3 glass rounded-3xl p-8 border border-white/10 space-y-5"
          >
            <input
              type="hidden"
              name="access_key"
              value="9f1a9965-4c0f-425f-bc2f-38a88ac4f943"
            />

            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />

            <input
              type="hidden"
              name="subject"
              value="New Portfolio Message"
            />

            <div>
              <label className="block mb-2 text-sm text-zinc-300">
                Name
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                <User className="w-5 h-5 text-zinc-400" />

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full bg-transparent outline-none text-white"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Email
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                  <Mail className="w-5 h-5 text-zinc-400" />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    className="w-full bg-transparent outline-none text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-300">
                  Mobile Number
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                  <Phone className="w-5 h-5 text-zinc-400" />

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 9876543210"
                    className="w-full bg-transparent outline-none text-white"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm text-zinc-300">
                Message
              </label>

              <div className="flex gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                <MessageSquare className="w-5 h-5 text-zinc-400 mt-1" />

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent outline-none resize-none text-white"
                />
              </div>
            </div>

            <button
  type="submit"
  disabled={loading}
  className="w-full h-14 rounded-2xl bg-violet-500 hover:bg-violet-600 transition text-lg font-semibold flex items-center justify-center gap-2 text-white"
>
  {loading ? (
    <>
      <Loader2 className="animate-spin w-5 h-5" />
      Sending...
    </>
  ) : (
    <>
      <Send className="w-5 h-5" />
      Send Message
    </>
  )}
</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-2">
        <span>© 2025 {NAME}. Built with React, Tailwind & Framer Motion.</span>
        <span>Crafted with care · MERN + AI</span>
      </div>
    </footer>
  );
}
