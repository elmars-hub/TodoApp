import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";

// eslint-disable-next-line react/prop-types
function Header({ darkMode, setDarkMode }) {
  function handleDarkMode() {
    setDarkMode((d) => !d);
  }

  return (
    <header className="mt-12 sm:mt-[72px] mb-9 flex justify-between items-center w-full">
      <h1 className="text-white text-2xl sm:text-[40px] tracking-[10px] sm:tracking-[16px] font-bold">
        TODO
      </h1>
      <img
        className="cursor-pointer"
        src={darkMode ? sun : moon}
        onClick={handleDarkMode}
        alt={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      />
    </header>
  );
}

export default Header;
