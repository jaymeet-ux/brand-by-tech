import { SectionWrapper } from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { features, portfolioItems, services, testimonials } from "@/data";
import type { Feature, PortfolioItem, Service, Testimonial } from "@/types";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Film,
  Globe,
  HeartHandshake,
  Layers,
  Mail,
  MapPin,
  Phone,
  Send,
  Share2,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Film,
  Share2,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Layers,
  HeartHandshake,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon];
  return (
    <motion.div
      data-ocid={`services.card.${index + 1}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-base rounded-2xl p-7 hover-glow group cursor-default border border-sky-100/80"
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-smooth`}
      >
        {Icon && <Icon size={22} className="text-white" />}
      </div>
      <h3 className="font-display font-bold text-lg text-foreground mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {service.description}
      </p>
      <ul className="space-y-1.5">
        {service.features.map((f) => (
          <li
            key={f}
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = iconMap[feature.icon];
  return (
    <motion.div
      data-ocid={`features.card.${index + 1}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="flex gap-4 p-5 rounded-2xl hover:bg-white/60 transition-smooth group"
    >
      <div className="w-10 h-10 rounded-xl gradient-sky flex items-center justify-center flex-shrink-0 shadow group-hover:scale-110 transition-smooth">
        {Icon && <Icon size={18} className="text-white" />}
      </div>
      <div>
        <h4 className="font-display font-semibold text-sm text-foreground mb-1">
          {feature.title}
        </h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

function PortfolioCard({
  item,
  index,
}: { item: PortfolioItem; index: number }) {
  return (
    <motion.div
      data-ocid={`portfolio.card.${index + 1}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.09 }}
      className="glass-base rounded-2xl overflow-hidden hover-glow group border border-sky-100/80"
    >
      <div
        className={`h-44 bg-gradient-to-br ${item.gradient} flex items-end p-5`}
      >
        <Badge className="gradient-sky text-white border-0 text-xs font-medium">
          {item.category}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-base text-foreground mb-1.5">
          {item.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-primary/8 text-primary rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      data-ocid={`testimonials.card.${index + 1}`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-base rounded-2xl p-7 border border-sky-100/80 hover-glow"
    >
      <div className="flex items-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star key={n} size={14} className="fill-sky-400 text-sky-400" />
        ))}
      </div>
      <blockquote className="text-sm text-foreground/80 leading-relaxed mb-5 italic">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarGradient} flex items-center justify-center shadow-sm`}
        >
          <span className="text-white text-xs font-bold font-display">
            {testimonial.initials}
          </span>
        </div>
        <div>
          <p className="font-display font-semibold text-sm text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section
        id="hero"
        data-ocid="hero.section"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* Background gradient orbs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-sky-200/50 to-blue-300/30 blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-tl from-cyan-200/40 to-sky-300/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-r from-sky-100/30 to-blue-100/20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 font-medium">
                  ✦ Digital Growth Partner
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-foreground mb-6"
              >
                Transforming
                <br />
                Ideas into{" "}
                <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                  Digital
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Reality
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-9"
              >
                We deliver premium software, websites, video production, and
                social media strategies that elevate brands and drive measurable
                growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button
                  data-ocid="hero.cta_primary"
                  size="lg"
                  className="gradient-sky text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-smooth font-semibold px-8 h-12"
                  onClick={() => scrollTo("#contact")}
                >
                  Start Your Project
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button
                  data-ocid="hero.cta_secondary"
                  size="lg"
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/5 h-12 font-medium transition-smooth"
                  onClick={() => scrollTo("#portfolio")}
                >
                  View Our Work
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex gap-8 mt-12 pt-8 border-t border-sky-100"
              >
                {[
                  { value: "150+", label: "Projects Delivered" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "5+", label: "Years Experience" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display font-extrabold text-2xl text-primary">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-300/20 to-blue-400/10 rounded-3xl blur-2xl" />
                <img
                  src="/assets/generated/hero-tech.dim_900x700.png"
                  alt="Brand By Tech platform preview"
                  className="relative z-10 rounded-2xl shadow-2xl max-w-full w-full max-h-[520px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ───────────────────────────────────────────────────── */}
      <SectionWrapper id="about" className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-4">
                About Us
              </span>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                We Build Brands That
                <span className="block bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                  Stand Out & Scale
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Brand By Tech is a full-service digital agency founded on a
                simple belief: technology should amplify your brand's story, not
                complicate it. We combine deep technical expertise with creative
                vision to deliver solutions that are both beautiful and built to
                perform.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From seed-stage startups to established enterprises, our team of
                engineers, designers, and strategists become an extension of
                your own — moving fast, communicating clearly, and obsessing
                over the details that matter most to your customers.
              </p>
              <Button
                data-ocid="about.cta_button"
                className="gradient-sky text-white border-0 shadow-md hover:shadow-lg hover:scale-105 transition-smooth"
                onClick={() => scrollTo("#contact")}
              >
                Work With Us
                <ArrowRight size={15} className="ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Code2,
                  label: "Software",
                  bg: "from-sky-500 to-blue-600",
                  stat: "60+ apps",
                },
                {
                  icon: Globe,
                  label: "Web",
                  bg: "from-cyan-400 to-sky-500",
                  stat: "50+ sites",
                },
                {
                  icon: Film,
                  label: "Video",
                  bg: "from-blue-500 to-indigo-600",
                  stat: "200+ cuts",
                },
                {
                  icon: Share2,
                  label: "Social",
                  bg: "from-sky-400 to-cyan-500",
                  stat: "30+ brands",
                },
              ].map(({ icon: Icon, label, bg, stat }, i) => (
                <motion.div
                  key={label}
                  data-ocid={`about.stat_card.${i + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-base rounded-2xl p-6 border border-sky-100/80 hover-glow"
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${bg} flex items-center justify-center mb-4 shadow`}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <p className="font-display font-bold text-sm text-foreground mb-0.5">
                    {label}
                  </p>
                  <p className="text-xs text-primary font-semibold">{stat}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── SERVICES ────────────────────────────────────────────────── */}
      <SectionWrapper
        id="services"
        className="py-20 lg:py-28 gradient-sky-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-4">
              Our Expertise
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              Services Built for
              <span className="block bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h2>
            <p className="text-muted-foreground">
              Four core disciplines. One unified team. Every service designed to
              compound results for your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── WHY CHOOSE US ───────────────────────────────────────────── */}
      <SectionWrapper id="why-us" className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-24">
              <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-4">
                Why Us
              </span>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                The Brand By Tech
                <span className="block bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                  Difference
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're not a vendor — we're your digital growth partner. Here's
                what sets us apart from every other agency you've encountered.
              </p>
              <div className="glass-base rounded-2xl p-6 border border-sky-100/80">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-sky-400" />
                  <span className="font-display font-semibold text-sm text-foreground">
                    Average project ROI
                  </span>
                </div>
                <p className="font-display font-extrabold text-4xl text-primary mb-1">
                  320%
                </p>
                <p className="text-xs text-muted-foreground">
                  Based on 12-month post-launch client analytics
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {features.map((feature, i) => (
                <FeatureCard key={feature.id} feature={feature} index={i} />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── PORTFOLIO ───────────────────────────────────────────────── */}
      <SectionWrapper
        id="portfolio"
        className="py-20 lg:py-28 gradient-sky-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-4">
              Our Work
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              Projects We're
              <span className="block bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                Proud Of
              </span>
            </h2>
            <p className="text-muted-foreground">
              A curated selection of transformative work across all four of our
              service pillars.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolioItems.map((item, i) => (
              <PortfolioCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── TESTIMONIALS ────────────────────────────────────────────── */}
      <SectionWrapper id="testimonials" className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-4">
              Client Stories
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              Trusted by
              <span className="block bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                Growth-Focused Teams
              </span>
            </h2>
            <p className="text-muted-foreground">
              Don't take our word for it — hear directly from the people we've
              worked with.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── CONTACT ─────────────────────────────────────────────────── */}
      <SectionWrapper
        id="contact"
        className="py-20 lg:py-28 gradient-sky-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-4">
                Get in Touch
              </span>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Ready to Build
                <span className="block bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                  Something Great?
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Tell us about your project and we'll get back to you within 24
                hours with a tailored proposal and no-obligation consultation.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "hello@brandbytech.io" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 240-8800" },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "San Francisco, CA · Remote Worldwide",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl gradient-sky flex items-center justify-center shadow flex-shrink-0">
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium text-foreground">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="glass-base rounded-3xl p-8 border border-sky-100/80 shadow-lg">
              {submitted ? (
                <motion.div
                  data-ocid="contact.success_state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full gradient-sky flex items-center justify-center mb-4 shadow-lg">
                    <CheckCircle2 size={30} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We'll reach out within 24 hours. Can't wait to work
                    together!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      className="block text-xs font-semibold text-foreground mb-1.5"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      data-ocid="contact.name_input"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-white/60 border-sky-100 focus:border-primary/40 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold text-foreground mb-1.5"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      data-ocid="contact.email_input"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-white/60 border-sky-100 focus:border-primary/40 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold text-foreground mb-1.5"
                      htmlFor="message"
                    >
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      data-ocid="contact.message_textarea"
                      placeholder="Tell us about your project — what you're building, your timeline, and your goals..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="bg-white/60 border-sky-100 focus:border-primary/40 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    className="w-full gradient-sky text-white border-0 shadow-md hover:shadow-lg hover:scale-[1.02] transition-smooth font-semibold h-11"
                  >
                    Send Message
                    <Send size={15} className="ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
