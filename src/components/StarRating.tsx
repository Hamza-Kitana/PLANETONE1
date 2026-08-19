import { Star } from "lucide-react";

export function StarRating({
  value,
  size = 16,
  showValue = true,
}: {
  value: number;
  size?: number;
  showValue?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5" dir="ltr">
      <span className="inline-flex items-center gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => {
          const fill = Math.max(0, Math.min(1, value - i));
          return (
            <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
              <Star size={size} className="absolute inset-0 text-muted-foreground/40" />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star size={size} className="text-gold" fill="currentColor" />
              </span>
            </span>
          );
        })}
      </span>
      {showValue && (
        <span className="text-xs font-semibold tracking-widest text-gold">{value.toFixed(1)}</span>
      )}
    </span>
  );
}
