import Button from "@/components/Button";
import { useTheme } from "next-themes";
import Link from "next/link";
import { withRouter } from "next/router";
import { useEffect, useState } from "react";

function Navbar({ router }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }), [];

  const navs = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Portfolio', href: '/portfolio' },
    { text: 'Contact', href: '/contact' },
    // { text: '', href: '/' },
  ];

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <Button className="rounded-md" onClick={() => setTheme('light')}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
        </Button>
      )
    } else {
      return (
        <Button className="rounded-md" onClick={() => setTheme('dark')}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
        </Button>
      )
    }

  }

  return (
    // <nav className="mt-8">
    //   <div className="container mx-auto flex">
    //     <Link href="/"><a className="text-3xl uppercase font-semibold">Lutfi.</a></Link>
    // <ul className="ml-auto flex">
    //   {navs.map(nav => (
    //     <li key={nav.text}><Link href={nav.href}><a className={`inline-block mx-5 mt-2 relative transition-opacity ${router.pathname == nav.href ? 'font-bold after:absolute after:-bottom-2 after:left-0 after:w-7 after:h-1 after:bg-black' : ''}`}>{nav.text}</a></Link></li>
    //   ))}
    // </ul>
    //   </div>
    // </nav>

    <header className='mt-8'>
      <div className='container'>
        <div className='flex items-center justify-between relative'>
          <div>
            <Link href="/"><a className="text-3xl uppercase font-semibold">Lutfi.</a></Link>
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