import { useEffect } from 'react'

export default function Toast({ message, visible }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => { }, 3000)
      return () => clearTimeout(timer)
    }
  }, [visible])

  return (
    <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-7 py-3.5 rounded-[60px] bg-text text-white text-[0.85rem] font-medium z-[9999] flex items-center gap-2.5 whitespace-nowrap transition-all duration-500 ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-20 pointer-events-none'}`}>
      <i className="fa-solid fa-check-circle text-green-500"></i> {message}
    </div>
  )
}
