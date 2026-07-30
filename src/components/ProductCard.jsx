import { formatPrice } from '../utils/format'

export default function ProductCard({ product, onOpenModal }) {
  return (
    <div className="rounded-2xl overflow-hidden cursor-pointer relative bg-white/10 backdrop-blur-[20px] saturate-[1.3] border border-white/25 shadow-[0_8px_40px_rgba(154,0,2,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(154,0,2,0.10)] hover:border-white/40
      before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/25 before:via-white/2 before:to-transparent before:to-70% before:pointer-events-none before:z-[1]"
      onClick={() => onOpenModal(product.id)}
    >
      <img
        className="w-full aspect-square object-contain p-8 pb-3 block relative z-0 transition-transform duration-500 group-hover:scale-105"
        src={product.image}
        alt={product.name}
        loading="lazy"
      />
      <div className="px-6 pb-6 relative z-[2]">
        <div className="text-[0.65rem] uppercase tracking-widest text-primary font-semibold mb-1.5">{product.category}</div>
        <h3 className="text-[1.1rem] font-bold mb-1 text-text">{product.name}</h3>
        <p className="text-[0.8rem] text-text-light leading-relaxed mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-[1.4rem] font-extrabold text-text">
            ${formatPrice(product.price)}{' '}
            <small className="text-[0.65rem] font-normal text-text-light line-through ml-2">${formatPrice(product.oldPrice)}</small>
          </div>
          <button className="glass-btn !px-6 !py-2.5 !text-[0.8rem]" onClick={(e) => { e.stopPropagation(); onOpenModal(product.id); }}>
            <i className="fa-solid fa-eye"></i> Ver
          </button>
        </div>
      </div>
    </div>
  )
}
