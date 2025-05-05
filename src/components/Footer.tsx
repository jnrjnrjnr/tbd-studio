export const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-14 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">The Vedra</h3>
            <p className="text-muted-foreground mb-4">Fast, beautiful, affordable websites for businesses that deserve better.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} The Vedra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
