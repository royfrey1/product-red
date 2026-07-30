import SectionHeader from './SectionHeader'
import ProductCard from './ProductCard'

export default function Catalog({ products, onOpenModal }) {
  return (
    <section className="px-6 py-15 lg:py-20 scroll-mt-28" id="catalog">
      <SectionHeader
        tag={{ icon: 'fa-solid fa-mobile-screen', label: 'Catálogo' }}
        title="Nuestra"
        highlight="colección"
        description="Cada producto fue seleccionado para ofrecerte la mejor experiencia Apple."
      />
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onOpenModal={onOpenModal} />
        ))}
      </div>
    </section>
  )
}
