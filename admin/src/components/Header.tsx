const Header = () => {
  return (
    <header className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          virton+
        </div>
        <div className="space-x-2">
          <button className="px-4 py-1 text-white hover:text-gray-200">
            Login
          </button>
          <button className="px-4 py-1 border border-white text-white hover:bg-white/10 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
