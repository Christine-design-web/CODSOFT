import React, {useState} from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(isMenuOpen)
 
  }
  return (
    <header>
      <nav>
        <a href="/" className="flex items-center gap-4 text-4xl">
          <span>Job Portal</span>
        
        </a>
      </nav>
    </header>
  )
}

export default Navbar