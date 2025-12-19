import { NavLink as RouterNavLink } from "react-router-dom";
import { cn } from "@/utils/cn";

const NavLink = ({ to, children, className = "", ...props }) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "text-white/80 hover:text-white transition-colors duration-200 relative group",
          isActive && "text-white font-medium",
          className
        )
      }
      {...props}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
    </RouterNavLink>
  );
};

export default NavLink;