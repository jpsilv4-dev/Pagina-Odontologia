export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-[#1A365D] text-white hover:bg-[#0f1f3a] shadow-md hover:shadow-lg',
    secondary: 'bg-[#2D3748] text-white hover:bg-[#1a202c] shadow-md hover:shadow-lg',
    tertiary: 'bg-[#4FD1C5] text-[#1A365D] hover:bg-[#3eb9ad] shadow-md hover:shadow-lg',
    outline: 'border-2 border-[#1A365D] text-[#1A365D] hover:bg-[#1A365D] hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
