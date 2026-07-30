import { useEffect } from 'react'
import { formatPrice } from '../utils/format'

export default function Modal({ product, open, onClose, onAddToCart }) {
  useEffect(() => {
    if (!open) return
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, open])

  const specs = product && Object.entries(product.specs)

  return (
    <div
      className={`fixed inset-0 bg-[#FCE8E9]/35 backdrop-blur-sm z-50 flex items-center justify-center transition-all duration-[0.4s] ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className={`w-[92%] max-w-[840px] max-h-[90vh] overflow-y-auto rounded-3xl p-8 md:p-12 relative bg-bg/50 backdrop-blur-[32px] saturate-[1.5] border border-white/35 shadow-[0_32px_80px_rgba(0,0,0,0.2)] transition-all duration-500 ${open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
        <button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/15 border border-white/20 text-text text-[1.2rem] cursor-pointer flex items-center justify-center transition-all hover:bg-primary hover:text-white hover:border-primary" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        {product && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-start">
            <img className="w-full aspect-square object-contain rounded-xl bg-white/8 p-5" src={product.image} alt={product.name} />

            <div className="modal-info">
              <div className="text-[0.7rem] uppercase tracking-widest text-primary font-semibold mb-2">{product.category}</div>
              <h2 className="font-playfair font-bold text-[1.8rem] mb-2">{product.name}</h2>
              <div className="text-[1.8rem] font-extrabold text-primary mb-5">
              ${formatPrice(product.price)}{' '}
              <small className="text-[0.8rem] font-normal text-text-light line-through ml-3">${formatPrice(product.oldPrice)}</small>
              </div>
              <p className="text-text-light leading-relaxed text-[0.8rem] mb-6">{product.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7">
                {specs.map(([k, v]) => (
                  <div key={k} className="p-2.5 rounded-xl bg-white/30 border border-white/20 text-[0.7rem]">
                    <div className="text-text-light text-[0.65rem] uppercase tracking-wide mb-0.5">{k}</div>
                    <div className="font-semibold text-text">{v}</div>
                  </div>
                ))}
              </div>

              <button className="glass-btn !w-full" onClick={() => { onAddToCart(product.id); onClose() }}>
                <i className="fa-solid fa-plus"></i> Añadir al carrito — ${formatPrice(product.price)}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
