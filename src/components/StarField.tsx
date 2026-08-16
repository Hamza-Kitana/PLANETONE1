import { useEffect, useRef } from "react";

/** Lightweight canvas starfield with slow 3d drift — pure atmosphere. */
export function StarField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const count = window.innerWidth < 768 ? 80 : 140;
    const stars = Array.from({ length: count }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random(),
      s: Math.random() * 1.5 + 0.3,
    }));

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.05 },
    );
    io.observe(canvas);

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      for (const st of stars) {
        st.z -= 0.00055;
        if (st.z <= 0.02) {
          st.z = 1;
          st.x = Math.random() * 2 - 1;
          st.y = Math.random() * 2 - 1;
        }
        const k = 0.5 / st.z;
        const px = w / 2 + st.x * k * w * 0.5;
        const py = h / 2 + st.y * k * h * 0.5;
        if (px < 0 || px > w || py < 0 || py > h) continue;
        const alpha = Math.min(1, (1 - st.z) * 1.1);
        const size = st.s * (1.4 - st.z);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${210 + Math.floor(st.s * 20)}, 240, 245, ${alpha * 0.7})`;
        ctx.arc(px, py, Math.max(0.2, size), 0, Math.PI * 2);
        ctx.fill();
      }
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={`h-full w-full ${className}`} />;
}
