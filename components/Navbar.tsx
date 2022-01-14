const Navbar = () => {
  return (
    <nav className="flex justify-between w-full bg-brand-dark text-white px-32 py-2 pt-4 items-center">
      <div className="text-lg font-bold">throwitin</div>
      <div className="">
        <ul className="flex space-x-5">
          {[
            "Start Project",
            "Fund Project",
            "Leaderboard",
            "About us",
            "Contact us",
          ].map((item) => (
            <li className="text-sm px-2 py-1 cursor-pointer">{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        <button className="bg-gray-100 py-1 px-2 rounded text-black flex">
          <span className="pr-1">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
          </span>
          Dashboard
        </button>
        <button className="flex bg-gradient-to-r from-brand-lightblue via-brand-semipurple to-brand-lightpink py-1 px-3 rounded">
          <span className="pr-1">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
          Connected
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
