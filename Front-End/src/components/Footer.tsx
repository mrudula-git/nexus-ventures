const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white py-6 px-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold">NEXUS VENTURES</h3>
            <p className="text-sm mt-2">
              Power and Success Inspired Life. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Important Links</h4>
            <ul>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Social Links</h4>
            <div className="flex gap-2">
              <a href="#" className="p-2 bg-white text-blue-900 rounded">FB</a>
              <a href="#" className="p-2 bg-white text-blue-900 rounded">IG</a>
              <a href="#" className="p-2 bg-white text-blue-900 rounded">IN</a>
            </div>
          </div>
        </div>
        <p className="text-center text-sm mt-4">Copyright © 2025. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  