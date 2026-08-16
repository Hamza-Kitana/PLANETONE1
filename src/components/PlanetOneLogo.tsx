import logo from "@/assets/logo.png";

type PlanetOneLogoProps = {
  className?: string;
};

export function PlanetOneLogo({ className }: PlanetOneLogoProps) {
  return (
    <img
      src={logo}
      alt="Planet One film production"
      className={className}
      style={{
        filter:
          "drop-shadow(0 0 6px rgba(255,255,255,0.85)) drop-shadow(0 0 14px rgba(255,255,255,0.45))",
      }}
    />
  );
}
