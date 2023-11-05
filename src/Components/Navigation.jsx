const Navigation = () => {
  return (
    <>
      <header className="flex justify-between">
        <div>
          <img
            className="ml-10 h-[4rem] -mt-3"
            src="./Images/Frame 2 1.png"
            alt="logo"
          />
        </div>

        <div className="w-[20rem]">
          <nav>
            <ul className="flex justify-between text-lg font-semibold mr-16 mt-1">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
