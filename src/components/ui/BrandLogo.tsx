export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    // A standard image keeps this small local brand asset visible before Next.js image optimization finishes.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt="iscreenhd IPTV"
      className={`block shrink-0 object-cover object-center brightness-110 contrast-110 drop-shadow-[0_0_12px_rgba(34,211,238,0.25)] ${compact ? "h-11 w-32" : "h-16 w-48"}`}
      src="/iscreenhd-logo.webp"
    />
  );
}
