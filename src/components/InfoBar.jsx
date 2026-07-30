import SectionHeader from './SectionHeader'

const infoCards = [
  { icon: 'fa-solid fa-truck', title: 'Envío Exprés', desc: 'Envío gratis a todo el país en 24/48hs. Seguimiento en tiempo real de tu pedido.' },
  { icon: 'fa-solid fa-rotate-left', title: 'Devolución sin cargo', desc: '30 días para devolver tu producto. Sin preguntas, sin complicaciones.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Garantía Premium', desc: '12 meses de garantía oficial con cobertura en todo el país y soporte dedicado.' },
]

export default function InfoBar() {
  return (
    <section className="px-6 py-15 lg:py-20">
      <SectionHeader
        tag={{ icon: 'fa-solid fa-truck-fast', label: 'Envío y compra' }}
        title="Compra"
        highlight="segura"
        description="Métodos de pago y envío rápidos y confiables para que recibas tu producto sin preocupaciones."
      />
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {infoCards.map((card, i) => (
          <div key={i} className="text-center p-8 rounded-2xl bg-white/8 backdrop-blur-[16px] saturate-[1.2] border border-white/25 shadow-[0_4px_24px_rgba(154,0,2,0.04)] transition-all duration-[0.4s] hover:-translate-y-1 hover:bg-white/15 hover:shadow-[0_12px_40px_rgba(154,0,2,0.06)]">
            <div className="w-15 h-15 rounded-lg bg-primary/8 flex items-center justify-center mx-auto mb-4.5 text-[1.4rem] text-primary border border-primary/12">
              <i className={card.icon}></i>
            </div>
            <h3 className="text-[1rem] font-bold mb-2 text-text">{card.title}</h3>
            <p className="text-[0.85rem] text-text-light leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
