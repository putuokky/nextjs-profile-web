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
        <div className='flex items-center justify-between'>
          <div>
            <Link href="/"><a className="text-3xl uppercase font-semibold"><Hero />.</a></Link>
          </div>
          <Button className="md:hidden">
            {/* <HiMenu className="text-2xl" /> */}
            <MdOutlineClose className="text   -2xl" />
          </Button>
          <nav className="w-screen bg-neutral-800 absolute right-0 top-16 md:w-fit md:top-0 md:relative md:mr-0 md:bg-inherit">
            <ul className="px-5 my-3 mx-3 md:flex">
              {navs.map(nav => (
                <li key={nav.text} className="my-5 md:my-0 md:mx-5">
                  <Link href={nav.href}>
                    <a className={`hover:font-bold ${router.pathname == nav.href ? 'font-bold' : ''}`}>{nav.text}</a>
                  </Link>
                </li>
              ))}
              <li className="md:mt-1">
                {renderThemeChanger()}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default withRouter(Navbar)