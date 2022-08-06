import Button from "@/components/Button";
import Hero from "@/components/Hero";
import { useTheme } from "next-themes";
import Link from "next/link";
import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

function Navbar({ router }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }), [];

  const navs = [
    { text: 'Home', href: '/' },
    { text: 'Portfolio', href: '/portfolio' },
    { text: 'Blog', href: '/blog' },
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
            <Button className="md:hidden">
              <HiMenu className="text-2xl" />
            </Button>
            <Button className="md:hidden">
              <MdOutlineClose className="text-3xl" />
            </Button>
            <nav className="hidden md:block">
              <ul className="mx-auto flex">
                {navs.map(nav => (
                  <li key={nav.text}>
                    <Link href={nav.href}>
                      <a className={`inline-block mx-5 mt-2 relative transition-opacity hover:font-bold ${router.pathname == nav.href ? 'font-bold' : ''}`}>{nav.text}</a>
                    </Link>
                  </li>
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