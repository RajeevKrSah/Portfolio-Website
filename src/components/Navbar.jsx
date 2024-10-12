import react from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigation = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link to="/" className=" text-[#16f2b3] text-3xl font-bold">
            Portfolio.
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              to="/"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                HOME
              </div>
            </Link>
          </li>
          <li
            className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            onClick={() => handleNavigation("about")}
          >
            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
              ABOUT
            </div>
          </li>
          <li
            className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            onClick={() => handleNavigation("skills")}
          >
            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
              SKILLS
            </div>
          </li>
          <li
            className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            onClick={() => handleNavigation("education")}
          >
            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
              EDUCATION
            </div>
          </li>
          <li
            className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            onClick={() => handleNavigation("projects")}
          >
            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
              PROJECTS
            </div>
          </li>
          <li
            className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
            onClick={() => handleNavigation("contact")}
          >
            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
              CONTACT
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
