import { useState, useCallback } from 'react'
import { products } from './data/products'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoBar from './components/InfoBar'
import Catalog from './components/Catalog'
import Modal from './components/Modal'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import CartSidebar from './components/CartSidebar'
import Toast from './components/Toast'

export default function App() {
  const [cart, setCart] = useState([])
  const [modalProduct, setModalProduct] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState({ visible: false, message: '' })

  const showToast = useCallback((msg) => {
    setToast({ visible: true, message: msg })
    setTimeout(() => setToast({ visible: false, message: '' }), 3000)
  }, [])

  const openModal = useCallback((id) => {
    const p = products.find(x => x.id === id)
    if (p) setModalProduct(p)
  }, [])

  const closeModal = useCallback(() => setModalProduct(null), [])

  const addToCart = useCallback((id) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id)
      if (existing) {
        return prev.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
      }
      const p = products.find(x => x.id === id)
      return [...prev, { ...p, qty: 1 }]
    })
    const p = products.find(x => x.id === id)
    showToast(`${p.name} añadido al carrito`)
  }, [showToast])

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }, [])

  const changeQty = useCallback((id, delta) => {
    setCart(prev => {
      const item = prev.find(x => x.id === id)
      if (!item) return prev
      const newQty = item.qty + delta
      if (newQty <= 0) return prev.filter(x => x.id !== id)
      return prev.map(x => x.id === id ? { ...x, qty: newQty } : x)
    })
  }, [])

  const checkout = useCallback(() => {
    if (cart.length === 0) return
    showToast('✅ Compra simulada exitosa — gracias por tu preferencia')
    setCart([])
    setCartOpen(false)
  }, [cart, showToast])

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <>
      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <InfoBar />
        <Catalog products={products} onOpenModal={openModal} />
        <Contact onShowToast={showToast} />
        <Testimonials />
        <Footer />
      </main>

      <Modal
        product={modalProduct}
        open={!!modalProduct}
        onClose={closeModal}
        onAddToCart={addToCart}
      />

      <CartSidebar
        open={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
        onCheckout={checkout}
      />

      <Toast message={toast.message} visible={toast.visible} />
    </>
  )
}
