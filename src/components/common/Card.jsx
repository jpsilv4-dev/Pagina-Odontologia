export function Card({
  children,
  className = '',
  hover = true,
  ...props
}) {
  return (
    <div
      className={`
        bg-white rounded-2xl p-6 shadow-lg
        ${hover && 'hover:shadow-2xl hover:-translate-y-2 hover:border-[#4FD1C5]/50'}
        transition-all duration-300
        border border-gray-100
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
