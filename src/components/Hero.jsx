import fondo from '../assets/fondo2.jpg'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[140px] pb-15 lg:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <img src={fondo} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="orb w-[500px] h-[500px] bg-radial from-[#9A0002] to-transparent to-70% rounded-full absolute -top-[120px] -right-[100px] opacity-50 blur-3xl animate-[float_12s_ease-in-out_infinite]"></div>
        <div className="orb w-[400px] h-[400px] bg-radial from-[#4A0001] to-transparent to-70% rounded-full absolute -bottom-20 -left-20 opacity-50 blur-3xl animate-[float_16s_ease-in-out_infinite_reverse]"></div>
        <div className="orb w-[300px] h-[300px] bg-radial from-[#FCE8E9] to-transparent to-70% rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl animate-[float_14s_ease-in-out_infinite_2s]"></div>
      </div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-[60px] bg-primary/8 text-primary text-[0.8rem] font-semibold tracking-wide uppercase mb-8 border border-primary/15">
          <i className="fa-solid fa-sparkles"></i> Catalogo actualizado
        </div>
        <h1 className="font-playfair font-bold text-[clamp(3rem,8vw,6rem)] leading-[1.08] text-text mb-5">
          Redefiniendo la <span className="text-primary italic">elegancia</span>
        </h1>
        <p className="text-[clamp(1rem,2vw,1.2rem)] text-text-light max-w-[520px] mx-auto mb-12 font-light leading-relaxed">
          Descubrí la experiencia iPhone más premium. Tecnología de vanguardia con un diseño que trasciende lo ordinario.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="#catalog" className="glass-btn">
            <i className="fa-solid fa-eye"></i> Explorar productos
          </a>
          <a href="#contact" className="glass-btn glass-btn-outline">
            <i className="fa-solid fa-headset"></i> Contactar
          </a>
        </div>
      </div>

    </section>
  )
}
