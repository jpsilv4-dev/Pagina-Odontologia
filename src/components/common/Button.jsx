export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 relative overflow-hidden'

  const variants = {
    primary: 'bg-gradient-to-r from-[#1A365D] to-[#0f1f3a] text-white hover:shadow-xl hover:shadow-[#1A365D]/50 active:scale-95',
    secondary: 'bg-gradient-to-r from-[#2D3748] to-[#1a202c] text-white hover:shadow-xl hover:shadow-[#2D3748]/50 active:scale-95',
    tertiary: 'bg-gradient-to-r from-[#4FD1C5] to-[#30a3c8] text-[#1A365D] hover:shadow-xl hover:shadow-[#4FD1C5]/50 active:scale-95 font-bold',
    outline: 'border-2 border-[#1A365D] text-[#1A365D] hover:bg-[#1A365D] hover:text-white hover:shadow-lg active:scale-95',
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
