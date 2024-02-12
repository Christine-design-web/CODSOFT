import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(isMenuOpen)
 
  };
  const navItems = [
    {path: "/", title: "Start a search"},
    {path: "/my-job", title: "My-jobs"},
    {path: "/salary", title: "Salary Estimated"},
    {path: "/post-job", title: "Post A Job"},
  ]
  return (
    <header>
      <nav>
        <a href="/" className="flex items-center gap-0 text-2xl text-black">
         <img src="./images/job logo.jpg" alt="Logo of my website" className="size-20"></img>
          <span>Portal</span>
        
        </a>
        {/* nav items for large devices */}
        <ul className="md: flex gap-12">
          {
            navItems.map(({path, title}) => (
              <li key={path} className="text-base text-primary">
                <NavLink
                    to={path}
                    className={({ isActive }) => 
                      isActive ? "active" : ""
                    }
                  >
                    {title}
                  </NavLink>
              </li>
            ) )
          }
        </ul>

{/* sign up and login button */}
        <div className="text-base text-primary font-medium space-x-5 lg:block ">
          <NavLink to="/login">Log in</NavLink> {/* Corrected: Use NavLink for navigation */}
          <NavLink to="/sign-up">Sign Up</NavLink> {/* Corrected: Use NavLink for navigation */}
        </div>
      </nav>
    </header>
  )
}

export default Navbar