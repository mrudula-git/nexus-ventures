const Header = () => {
    return (
      <header className="bg-blue-900 text-white flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">NEXUS VENTURES</div>
        <div className="flex gap-4">
          <button className="bg-white text-blue-900 px-4 py-2 rounded">Login</button>
          <button className="bg-blue-700 px-4 py-2 rounded">Sign Up</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  