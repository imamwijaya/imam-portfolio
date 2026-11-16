export default function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 190" className={className} aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M52 92 L70 162 L122 88 L160 162 L215 28" stroke="currentColor" strokeWidth="46" />
      <path d="M49 82 L53 100" stroke="var(--color-accent)" strokeWidth="46" />
      <circle cx="28" cy="27" r="23" fill="var(--color-accent)" />
    </svg>
  );
}
