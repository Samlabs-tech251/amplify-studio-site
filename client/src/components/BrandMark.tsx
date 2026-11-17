type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className={`brand-lockup ${compact ? "brand-lockup-compact" : ""}`} aria-label="Amplify">
      <span className="brand-wordmark">
        <strong>Amplify</strong>
        <small><span className="brand-dot" aria-hidden="true" /></small>
      </span>
    </span>
  );
}
