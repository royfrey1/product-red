import SectionHeader from './SectionHeader'

const contactItems = [
  { icon: 'fa-solid fa-location-dot', title: 'Showroom', detail: 'Av. Alvear 1823, CABA — Argentina' },
  { icon: 'fa-solid fa-phone', title: 'Teléfono', detail: '+54 11 5555-ILUX' },
  { icon: 'fa-solid fa-envelope', title: 'Email', detail: 'hola@productred.com.ar' },
  { icon: 'fa-solid fa-clock', title: 'Horarios', detail: 'Lun a Sáb — 10:00 a 20:00' },
]

export default function Contact({ onShowToast }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onShowToast('Mensaje enviado con éxito. Te responderemos pronto.')
    e.target.reset()
  }

  return (
    <section className="px-6 py-15 lg:py-20 scroll-mt-28" id="contact">
      <SectionHeader
        tag={{ icon: 'fa-solid fa-headset', label: 'Contacto' }}
        title="Estamos"
        highlight="acá"
        description="No dudes en escribirnos. Respondemos en menos de 24 horas."
      />
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          {contactItems.map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-5 rounded-lg bg-white/8 backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 rounded-lg bg-primary/8 flex items-center justify-center text-primary text-[1.2rem] shrink-0">
                <i className={item.icon}></i>
              </div>
              <div>
                <h4 className="text-[0.9rem] font-semibold mb-0.5">{item.title}</h4>
                <p className="text-[0.8rem] text-text-light">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="p-9 rounded-2xl bg-white/6 backdrop-blur-sm border border-white/20" onSubmit={handleSubmit}>
          <h3 className="font-playfair text-[1.4rem] mb-6">Enviános un mensaje</h3>
          <div className="mb-4.5">
            <input type="text" placeholder="Nombre" required
              className="w-full p-3.5 rounded-lg bg-white/8 border border-white/15 text-text font-inter text-[0.9rem] outline-none transition-all focus:border-primary focus:bg-white/12 placeholder:text-text-light" />
          </div>
          <div className="mb-4.5">
            <input type="email" placeholder="Email" required
              className="w-full p-3.5 rounded-lg bg-white/8 border border-white/15 text-text font-inter text-[0.9rem] outline-none transition-all focus:border-primary focus:bg-white/12 placeholder:text-text-light" />
          </div>
          <div className="mb-4.5">
            <input type="text" placeholder="Asunto"
              className="w-full p-3.5 rounded-lg bg-white/8 border border-white/15 text-text font-inter text-[0.9rem] outline-none transition-all focus:border-primary focus:bg-white/12 placeholder:text-text-light" />
          </div>
          <div className="mb-4.5">
            <textarea placeholder="Mensaje..." required
              className="w-full p-3.5 rounded-lg bg-white/8 border border-white/15 text-text font-inter text-[0.9rem] outline-none transition-all focus:border-primary focus:bg-white/12 placeholder:text-text-light min-h-[120px] resize-y"></textarea>
          </div>
          <button type="submit" className="glass-btn !w-full">
            <i className="fa-solid fa-paper-plane"></i> Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}
