import React, {useState} from 'react'

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
        <a href="/" className="flex items-center gap-4 text-4xl text-black">
          <span>Job Portal</span>
        
        </a>
        {/* nav items for large devices */}
        <ul>
          {
            navItems.map(({path, title}) => (
              <li key={path}></li>
            ) )
          }
        </ul>

      </nav>
    </header>
  )
}

export default Navbar