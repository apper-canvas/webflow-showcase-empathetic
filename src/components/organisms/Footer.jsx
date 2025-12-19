import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Logo from "@/components/atoms/Logo";

const Footer = () => {
  const socialLinks = [
    { icon: "Youtube", url: "/youtube", label: "YouTube" },
    { icon: "Instagram", url: "/instagram", label: "Instagram" },
    { icon: "Twitter", url: "/twitter", label: "Twitter" },
    { icon: "Github", url: "/github", label: "GitHub" },
  ];

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-surface/50" />
      
      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <Logo />
            <p className="text-white/60 text-sm">
              Giving Webflow developers a competitive edge in the industry through interactive tutorials and wizardry.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-white/60 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link to="/patreon" className="text-white/60 hover:text-white transition-colors text-sm">
                Patreon
              </Link>
              <Link to="/dribbble" className="text-white/60 hover:text-white transition-colors text-sm">
                Dribbble
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  to={social.url}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:glass-strong transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <ApperIcon name={social.icon} size={20} className="text-white/70" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} T.RICKS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/40 hover:text-white/60 transition-colors text-sm">
              Privacy
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-white/60 transition-colors text-sm">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;