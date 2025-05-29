import { onMounted, onUnmounted, type Ref } from "vue";

interface Star {
  x: number,
  y: number,
  radius: number,
  opacity: number,
  decay: number,
}

export default function useStarry(canvasRef: Ref<HTMLCanvasElement | null>) {
  let width = 0, height = 0;
  let ctx: CanvasRenderingContext2D | null = null;
  const stars: Star[] = Array.from({ length: 100 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: Math.random() * 1.5,
    opacity: Math.random(),
    decay: Math.random() * 0.02,
  }));

  function resizeCanvas() {
    if (!canvasRef.value) return;
    width = window.innerWidth
    height = window.innerHeight

    canvasRef.value.width = width
    canvasRef.value.height = height
  }

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    stars.forEach((star) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.globalAlpha = star.opacity;
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      star.opacity += star.decay;
      if (star.opacity <= 0 || star.opacity >= 1) star.decay = -star.decay;
    });
    requestAnimationFrame(draw);
  }

  onMounted(() => {
    if (!canvasRef.value) return;
    ctx = canvasRef.value.getContext("2d") as CanvasRenderingContext2D;

    resizeCanvas();
    draw();

    window.addEventListener('resize', resizeCanvas);
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resizeCanvas);
  })
}
