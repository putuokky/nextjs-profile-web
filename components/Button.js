
export default function Button({ children, onClick, className }) {
  return (
    <button className={`hover:ring-2 hover:ring-gray-300 ${className}`} onClick={onClick}>{children}</button>
  )
}
