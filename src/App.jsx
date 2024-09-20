import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/about",
      element: 
      <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/contact",
      element: 
      <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar/>
        <Contact/>
      </div>
    },
    {
      path:"/education",
      element: 
      <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar/>
        <Education/>
      </div>
    },
    {
      path:"/skills",
      element: 
      <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar/>
        <Skills/>
      </div>
    },
    {
      path:"/projects",
      element: 
      <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar/>
        <Projects/>
      </div>
    },
    
  ]
)
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App