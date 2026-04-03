"use client";
import { useEffect, useRef } from "react";


export default function RadiatingRings() {
  const NUM_RINGS = 10;
  const NUM_PTS = 300;  // num of pts each ring is made of
  const ANIM_SPEED = 0.001  // speed of animation
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;

    const ctx = c.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {  // set canvas pixed dim to match window size
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += ANIM_SPEED;
      const width = c.width, height = c.height;
      const centerX = width / 2, centerY = height / 2;
      const maxRadius = Math.sqrt(centerX * centerX + centerY * centerY);

      ctx.fillStyle = "rbga(5, 5, 15, 0.15)";
      ctx.fillRect(0, 0, width, height); // throw a rectangle over previous frames to dim them

      for (let i = 0; i < NUM_RINGS; i++) {
        const ringProg = (i / NUM_RINGS + time * 0.3) % 1;  // calculate where ring is in lifecycle, % 1 recycles them back into center
        const baseRadius = ringProg * maxRadius;  // convert 0-1 prog into an actual radius

        // dynamic colors based on time and rad
        const hue = (time * 40 + i * 9) % 360;
        const sat = 70 + Math.sin(time + i) * 20;
        const light = 45 + Math.sin(time * 0.7 + i * 0.5) * 15;
        const opacity = Math.sin(ringProg * Math.PI) * 0.6;

        if (opacity <= 0.01) continue;

        ctx.beginPath();
        ctx.strokeStyle = `hsla(${hue}, ${sat}%, ${light}%, ${opacity})`;
        ctx.lineWidth = 1.2 + Math.sin(time + i) * 0.8;

        // draw actual rings.
        for (let j = 0; j <= NUM_PTS; j++) {
          const angle = (j / NUM_PTS) * Math.PI * 2;  // convert to radians (polar)

          // distortions
          const warp1 = Math.sin(angle * 3 + time * 1.5 + i * 0.4) * (15 + ringProg * 40);  // wobble
          const warp2 = Math.cos(angle * 5 - time * 0.8 + i * 0.7) * (8 + ringProg * 25); // wobble backwards
          const warp3 = Math.sin(angle * 7 + time * 2.2 - i * 0.3) * (ringProg * 18); // jaggedness
          const twist = Math.sin(ringProg * Math.PI * 2 + time + angle * 2) * ringProg * 30;  // whole ring distortion

          const rad = baseRadius + warp1 + warp2 + warp3 + twist;

          // back to cartesian
          const x = centerX + Math.cos(angle) * rad;
          const y = centerY + Math.sin(angle) * rad;

          if (j === 0) ctx.moveTo(x, y);  // for fist pt move pen to this loc
          else ctx.lineTo(x, y);  // all subsequent pts draw from last pt
        }

        ctx.closePath();
        ctx.stroke(); // render
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {  // cleanup
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh", background: "#05050f", overflow: "hidden" }}>
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
