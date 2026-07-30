import { useEffect } from 'react'
import { formatPrice } from '../utils/format'

export default function CartSidebar({ open, cart, onClose, onChangeQty, onRemove, onCheckout }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <>
      <div className={`fixed inset-0 bg-[#FCE8E9]/35 backdrop-blur-sm z-50 transition-all duration-[0.4s] ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      </div>

      <div className={`fixed top-0 right-0 w-[92%] max-w-[440px] h-screen z-50 bg-bg/55 backdrop-blur-[32px] saturate-[1.5] border-l border-white/25 shadow-[-8px_0_40px_rgba(0,0,0,0.08)] p-7 flex flex-col transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex items-center justify-between mb-7 pb-5 border-b border-white/15">
          <h2 className="font-playfair text-[1.4rem]"><i className="fa-solid fa-bag-shopping text-primary"></i> Tu carrito</h2>
          <button className="bg-transparent border-none text-[1.4rem] text-text cursor-pointer w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-primary/10 hover:text-primary" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col gap-4">
          {cart.length === 0 ? (
            <div className="text-center py-15 text-text-light">
              <i className="fa-solid fa-bag-shopping text-[3rem] opacity-30 mb-4"></i>
              <p className="text-[0.9rem]">Tu carrito está vacío</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 p-4 rounded-lg bg-white/26 border border-white/12">
                <img className="w-20 h-20 rounded-lg object-contain bg-white/36 p-2 shrink-0" src={item.image} alt={item.name} />
                <div className="flex-1">
                  <h4 className="text-[0.9rem] font-semibold mb-1">{item.name}</h4>
                  <div className="text-primary font-bold text-[0.95rem]">${formatPrice(item.price * item.qty)}</div>
                  <div className="flex items-center gap-2.5 mt-2">
                    <button className="w-7 h-7 rounded-full border border-white/20 bg-white/6 text-text cursor-pointer text-[0.8rem] flex items-center justify-center transition-all hover:bg-primary hover:text-white hover:border-primary" onClick={() => onChangeQty(item.id, -1)}>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <span className="font-semibold min-w-5 text-center">{item.qty}</span>
                    <button className="w-7 h-7 rounded-full border border-white/20 bg-white/6 text-text cursor-pointer text-[0.8rem] flex items-center justify-center transition-all hover:bg-primary hover:text-white hover:border-primary" onClick={() => onChangeQty(item.id, 1)}>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                    <button className="bg-transparent border-none text-text-light cursor-pointer text-[0.85rem] transition-colors hover:text-primary self-start ml-auto" onClick={() => onRemove(item.id)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="pt-5 border-t border-white/15 mt-5">
            <div className="flex justify-between items-center mb-5">
              <span className="text-[0.9rem] text-text-light">Total</span>
              <span className="text-[1.5rem] font-extrabold">${formatPrice(total)}</span>
            </div>
            <button className="glass-btn !w-full" onClick={onCheckout}>
              <i className="fa-solid fa-lock"></i> Finalizar compra
            </button>
          </div>
        )}
      </div>
    </>
  )
}
