export default function SectionHeader({ tag, title, highlight, description }) {
  return (
    <div className="text-center max-w-[600px] mx-auto mb-14">
      <div className="inline-block px-5 py-1.5 rounded-[60px] bg-primary/6 text-primary text-[0.7rem] font-semibold tracking-widest uppercase mb-4 border border-primary/10">
        <i className={tag.icon}></i> {tag.label}
      </div>
      <h2 className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-text">
        {title} <span className="text-primary">{highlight}</span>
      </h2>
      {description && (
        <p className="text-text-light mt-4 font-light leading-relaxed">{description}</p>
      )}
    </div>
  )
}
