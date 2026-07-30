import { useState, useEffect } from 'react'

export default function Navbar({ cartCount, onOpenCart }) {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(v => !v)
  const close = () => {
    setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => { if (open) setOpen(false) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const linkClass = "no-underline text-text font-medium text-[0.9rem] tracking-wide transition-colors duration-300 hover:text-primary relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:rounded-sm after:transition-all after:duration-300 hover:after:w-full"

  return (
    <nav className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-[1200px] px-4 md:px-8 py-3 md:py-3.5 flex items-center justify-between rounded-[100px] z-50 bg-bg/25 backdrop-blur-[24px] backdrop-saturate-[1.4] border border-white/35 shadow-[0_8px_40px_rgba(154,0,2,0.06),inset_0_1px_0_rgba(255,255,255,0.5)]">
      <a href="#" className="font-playfair font-bold text-[1.6rem] text-primary no-underline tracking-tight flex items-center gap-2">
        (PRODUCT)<span className="align-super text-[0.55em] font-inter font-semibold">red</span>
      </a>

      <div className={`list-none flex flex-col md:flex-row items-center gap-0 md:gap-9 m-0 p-0 md:static fixed top-20 left-1/2 -translate-x-1/2 w-[92%] max-w-[400px] md:w-auto md:max-w-none md:translate-x-0 md:bg-transparent md:backdrop-filter-none md:border-0 md:shadow-none md:p-0 md:opacity-100 md:pointer-events-auto md:flex
        ${open
          ? 'opacity-100 pointer-events-auto scale-y-100'
          : 'opacity-0 pointer-events-none scale-y-0 md:opacity-100 md:pointer-events-auto md:scale-y-100'
        }
        origin-top transition-all duration-[0.4s] bg-bg/55 backdrop-blur-[32px] saturate-[1.5] border border-white/25 shadow-[0_16px_48px_rgba(0,0,0,0.08)] rounded-2xl py-4 md:py-0`}>
        <a href="#catalog" onClick={close} className={`${linkClass} w-full md:w-auto text-center md:text-left px-6 md:px-0 py-3.5 md:py-0`}>Catálogo</a>
        <a href="#contact" onClick={close} className={`${linkClass} w-full md:w-auto text-center md:text-left px-6 md:px-0 py-3.5 md:py-0`}>Contacto</a>
        <a href="#testimonials" onClick={close} className={`${linkClass} w-full md:w-auto text-center md:text-left px-6 md:px-0 py-3.5 md:py-0`}>Opiniones</a>
      </div>

      <div className="flex items-center gap-5">
        <button className="flex md:hidden flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1" onClick={toggle} aria-label="Menú">
          <span className="w-[26px] h-[2px] bg-text rounded block transition-[0.3s]"></span>
          <span className="w-[26px] h-[2px] bg-text rounded block transition-[0.3s]"></span>
          <span className="w-[26px] h-[2px] bg-text rounded block transition-[0.3s]"></span>
        </button>
        <button className="relative bg-transparent border-none text-text text-[1.3rem] cursor-pointer transition-colors hover:text-primary" onClick={onOpenCart} aria-label="Carrito">
          <i className="fa-solid fa-bag-shopping"></i>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[0.65rem] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  )
}
