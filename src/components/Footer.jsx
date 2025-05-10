import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-12 relative">
      {/* Bouncing ArrowUp Icon */}
      <div className="w-full flex justify-center -mb-6">
        <a
          href="#hero"
          className="animate-bounce bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </a>
      </div>

      {/* Footer Text */}
      <div className="py-10 px-4 bg-card border-t border-border pt-12 flex justify-center items-center">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} TK's Portfolio, All rights reserved
        </p>
      </div>
    </footer>
  );
};
