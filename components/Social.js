import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Social() {
  return (
    // icon from fontawesome.com 
    <div className="flex flex-wrap items-center mx-auto md:ml-1 md:mx-0">
      <Link href="https://web.facebook.com/">
        <a className="mr-3 hover:text-primary/90" title="Facebook" target="_blank">
          <FaFacebookF className="text-2xl" />
        </a>
      </Link>
      <Link href="https://twitter.com/">
        <a className="mr-3 hover:text-primary/90" title="Twitter" target="_blank">
          <FaTwitter className="text-2xl" />
        </a>
      </Link>
      <Link href="https://www.instagram.com/">
        <a className="w-6 mr-3 hover:text-primary/90" title="Instagram" target="_blank">
          <FaInstagram className="text-2xl" />
        </a>
      </Link>
    </div>
  )
}
