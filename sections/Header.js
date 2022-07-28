import Button from "@/components/Button";
import Hero from "@/components/Hero";
import { useTheme } from "next-themes";
import Link from "next/link";
import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

function Navbar({ router }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }), [];

  const navs = [
    { text: 'Home', href: '/' },
    { text: 'Portfolio', href: '/portfolio' },
    { text: 'About Me', href: '/about' },
  ];

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <Button className="rounded-md" onClick={() => setTheme('light')}>
          <BsSunFill className="text-xl" />
        </Button>
      )
    } else {
      return (
        <Button className="rounded-md" onClick={() => setTheme('dark')}>
          <BsMoonStarsFill />
        </Button>
      )
    }

  }

  return (
    <header className='mt-8'>
      <div className='container'>
        <div className='flex items-center justify-between relative'>
          <div>
            <Link href="/"><a className="text-3xl uppercase font-semibold"><Hero />.</a></Link>
          </div>
          <div className='flex items-center'>
            {/* <Button className="md:hidden">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            </Button>
            <Button className="md:hidden">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Button> */}
            <nav>
              <ul className="ml-auto flex">
                {navs.map(nav => (
                  <li key={nav.text}><Link href={nav.href}><a className={`inline-block mx-5 mt-2 relative transition-opacity ${router.pathname == nav.href ? 'font-bold' : ''}`}>{nav.text}</a></Link></li>
                ))}
                <li className='inline-block mx-5 mt-2 relative transition-opacity'>
                  {renderThemeChanger()}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default withRouter(Navbar)