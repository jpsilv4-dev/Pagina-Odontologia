export function Card({
  children,
  className = '',
  hover = true,
  ...props
}) {
  return (
    <div
      className={`
        bg-white rounded-xl p-6 shadow-md
        ${hover && 'hover:shadow-xl hover:scale-105'}
        transition-all duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
