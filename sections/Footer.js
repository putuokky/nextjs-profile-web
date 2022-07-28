import Hero from "@/components/Hero";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
      <span className="dark:text-gray-100 text-gray-900 font-bold text-md mr-2 capitalize"><Hero /></span>&copy; {new Date().getFullYear()} All Right Reserved
    </footer>
  )
}
