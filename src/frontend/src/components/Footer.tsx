import { navLinks } from "@/data";
import { Linkedin } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: SiX, href: "#", label: "X (Twitter)" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiFacebook, href: "#", label: "Facebook" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer data-ocid="footer" className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-sky flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm font-display">
                  B
                </span>
              </div>
              <span className="font-display font-bold text-lg">
                Brand <span className="text-sky-400">By Tech</span>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Transforming ideas into digital reality with cutting-edge
              software, design, and marketing solutions.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-ocid="footer.social_link"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-sky-500/30 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={15} className="text-white/70 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-sky-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-white/60 hover:text-sky-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-sky-400 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>hello@brandbytech.io</li>
              <li>+1 (555) 240-8800</li>
              <li>San Francisco, CA · Remote Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year}. Brand By Tech. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400/60 hover:text-sky-400 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
