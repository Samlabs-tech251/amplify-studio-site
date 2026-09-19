type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className={`brand-lockup ${compact ? "brand-lockup-compact" : ""}`}>
      <svg className="brand-mark" viewBox="0 0 240 240" aria-hidden="true">
        <path d="M46,214 L72,214 L118,66 L94,66 Z" fill="#A97719" />
        <path d="M86.9,166 L153.1,166 L148.1,150 L91.9,150 Z" fill="#A97719" />
        <path d="M194,214 L168,214 L122,66 L113,73 L117,14 L155,59 L146,66 Z" fill="#F2CE6B" />
      </svg>
      {!compact && (
        <span className="brand-wordmark">
          <strong>Amplify</strong>
          <small>Studio</small>
        </span>
      )}
    </span>
  );
}
