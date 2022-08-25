import Hero from "@/components/Hero";

export default function Footer() {
  return (
    <footer className="py-6 text-sm text-center text-gray-500 dark:text-gray-400">
      <span className="mr-2 font-bold text-gray-900 capitalize dark:text-gray-100 text-md"><Hero /></span>&copy; {new Date().getFullYear()} All Right Reserved
    </footer>
  )
}
