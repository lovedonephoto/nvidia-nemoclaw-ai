const footerLinks = {
  Product: ["Features", "Pricing", "Documentation"],
  Resources: ["GitHub Repository", "Official Docs", "Contact Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Refund Policy"],
};

const supportEmail = "soylamistugce@gmail.com";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-display text-xl font-bold">
              <span className="text-gradient-primary">Nemo</span>
              <span className="text-foreground">Claw Toolkit</span>
            </a>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              Premium Setup Toolkit and automated deployment guides for NemoClaw agents.
            </p>
            <div className="mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight italic">
                <strong>Disclaimer:</strong> This is an independent community project. It is NOT affiliated with, endorsed by, or representing NVIDIA Corporation.
              </p>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm text-foreground mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => {
                  let href = "#";
                  if (link === "Features") href = "#features";
                  if (link === "Pricing") href = "#pricing";
                  if (link === "Documentation" || link === "Official Docs") href = "https://docs.nvidia.com/nemo-framework/user-guide/latest/index.html";
                  if (link === "GitHub Repository") href = "https://github.com/NVIDIA/NemoClaw";
                  if (link === "Contact Support") href = `mailto:${supportEmail}`;
                  if (link === "Privacy Policy") href = "https://polar.sh/nemoclawsetup/legal/privacy";
                  if (link === "Terms of Service") href = "https://polar.sh/nemoclawsetup/legal/terms";
                  if (link === "Refund Policy") href = "https://polar.sh/nemoclawsetup/legal/refund";

                  return (
                    <li key={link}>
                      <a 
                        href={href} 
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NemoClaw. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="https://github.com/NVIDIA/NemoClaw" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">Discord</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
