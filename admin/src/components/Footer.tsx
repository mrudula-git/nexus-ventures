const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-8 px-4">
        {/* Logo and Description */}
        <div className="mb-8">
          <img 
            src="/nexus-ventures-logo.png" 
            alt="Nexus Ventures" 
            className="h-12 mb-4"
          />
          <p className="text-gray-300 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi voluptatibus dolenti ipsum officia alias ex impedit.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mb-4">
          <a href="#" className="bg-white/10 p-2 rounded-sm hover:bg-white/20">
            <img src="/facebook-icon.png" alt="Facebook" className="h-5 w-5" />
          </a>
          <a href="#" className="bg-white/10 p-2 rounded-sm hover:bg-white/20">
            <img src="/instagram-icon.png" alt="Instagram" className="h-5 w-5" />
          </a>
          <a href="#" className="bg-white/10 p-2 rounded-sm hover:bg-white/20">
            <img src="/linkedin-icon.png" alt="LinkedIn" className="h-5 w-5" />
          </a>
          <a href="#" className="bg-white/10 p-2 rounded-sm hover:bg-white/20">
            <img src="/skype-icon.png" alt="Skype" className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-300 border-t border-white/10 pt-4">
          Copyright © 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
