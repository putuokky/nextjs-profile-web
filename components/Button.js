
export default function Button({ children, onClick, className }) {
  return (
    <button className={`hover:ring-2 hover:ring-gray-500 dark:hover:ring-gray-200 ${className}`} onClick={onClick}>{children}</button>
  )
}
