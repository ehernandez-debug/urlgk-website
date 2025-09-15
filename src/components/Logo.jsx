import symbolImage from '../assets/urologik-symbol.jpg'

const Logo = ({ className = "h-8 w-auto", showTagline = false }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Símbolo usando la imagen real */}
      <img 
        src={symbolImage} 
        alt="Urologik" 
        className="h-10 w-10 object-contain"
      />
      
      {/* Texto UROLOGIK */}
      <span className="text-xl lg:text-2xl font-bold text-[#2C5F7A] tracking-tight">
        UROLOGIK
      </span>
    </div>
  )
}

export default Logo

