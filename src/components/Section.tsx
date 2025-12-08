export default function Section({
  title,
  subtitle,
  children,
  id,
  className = "",
}: {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-20 ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-16">
          {title && (
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.3] pt-1 pb-1">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div>{children}</div>
    </section>
  );
}
