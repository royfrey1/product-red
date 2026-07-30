import SectionHeader from './SectionHeader'

const testimonials = [
  {
    stars: 5, quote: 'Compré el iPhone 16 Pro Max y la experiencia fue increíble. El producto llegó al día siguiente, impecable. 100% recomendados.',
    initials: 'MC', name: 'Martina C.', title: 'Cliente verificada'
  },
  {
    stars: 5, quote: 'Los AirPods Pro 2 los compré para regalar y la presentación fue de otro nivel. El packaging parecía de regalo. ¡Gracias (PRODUCT)red!',
    initials: 'FR', name: 'Facundo R.', title: 'Cliente verificada'
  },
  {
    stars: 5, quote: 'La atención al cliente es excepcional. Tuve una consulta sobre la compatibilidad del MagSafe y me respondieron en minutos. Súper recomendable.',
    initials: 'SL', name: 'Sofía L.', title: 'Cliente verificada'
  },
]

export default function Testimonials() {
  return (
    <section className="px-6 py-15 lg:py-20 scroll-mt-28" id="testimonials">
      <SectionHeader
        tag={{ icon: 'fa-solid fa-star', label: 'Opiniones' }}
        title="Lo que dicen"
        highlight="nuestros clientes"
        description="La satisfacción de nuestra comunidad es lo que nos impulsa a seguir mejorando."
      />
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {testimonials.map((t, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white/7 backdrop-blur-[16px] saturate-[1.2] border border-white/20 transition-all duration-[0.4s] hover:bg-white/12 hover:-translate-y-1">
            <div className="text-amber-400 text-[0.9rem] mb-4 tracking-wider">
              {Array.from({ length: t.stars }, (_, j) => <i key={j} className="fa-solid fa-star"></i>)}
            </div>
            <blockquote className="text-[0.9rem] leading-relaxed text-text font-normal italic mb-5">"{t.quote}"</blockquote>
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center font-bold text-[0.9rem] text-primary">{t.initials}</div>
              <div>
                <div className="font-semibold text-[0.85rem]">{t.name}</div>
                <div className="text-[0.7rem] text-text-light">{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
