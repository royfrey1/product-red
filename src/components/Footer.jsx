export default function Footer() {
  return (
    <footer className="px-6 pt-15 pb-6 text-center">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-7 p-10 rounded-[32px_32px_24px_24px] bg-white/4 backdrop-blur-sm border border-white/10">
        <div className="footer-brand">
          <a href="#" className="font-playfair font-bold text-[1.8rem] text-primary no-underline tracking-tight flex items-center justify-center gap-2">
            (PRODUCT)<span className="align-super text-[0.55em] font-inter font-semibold">red</span>
          </a>
          <p className="text-[0.8rem] text-text-light mt-2">Premium iPhone Store — Argentina</p>
        </div>
        <div className="flex gap-8 flex-wrap justify-center">
          <a href="#catalog" className="no-underline text-text-light text-[0.85rem] transition-colors hover:text-primary">Catálogo</a>
          <a href="#contact" className="no-underline text-text-light text-[0.85rem] transition-colors hover:text-primary">Contacto</a>
          <a href="#testimonials" className="no-underline text-text-light text-[0.85rem] transition-colors hover:text-primary">Opiniones</a>
          <a href="#" className="no-underline text-text-light text-[0.85rem] transition-colors hover:text-primary">Términos y condiciones</a>
          <a href="#" className="no-underline text-text-light text-[0.85rem] transition-colors hover:text-primary">Política de privacidad</a>
        </div>
        <div className="flex gap-4">
          {['fa-brands fa-instagram', 'fa-brands fa-facebook-f', 'fa-brands fa-x-twitter', 'fa-brands fa-whatsapp'].map((icon, i) => (
            <a key={i} href="#" aria-label={icon.split(' ')[1]}
              className="w-11 h-11 rounded-full bg-white/6 border border-white/12 flex items-center justify-center text-text no-underline transition-all hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 text-[1.1rem]">
              <i className={icon}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-5 pt-5 border-t border-white/8 text-[0.75rem] text-text-light">
        &copy; 2026 (PRODUCT)red. Todos los derechos reservados.
      </div>
    </footer>
  )
}
