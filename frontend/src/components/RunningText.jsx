import "./Slider.css"
import { useEffect, useRef } from "react";

const RunningText = () => {
  const trackRef = useRef(null);
  const textRef = useRef(null);

  const message = (
    <>
      As per request received from several potential authors, the paper deadline has been extended to 14th December 2025. <span className="highlight">International Conference on Next-Generation Adaptive Research and Innovations 2026 </span>
      on <span className="date">6<sup>th</sup>, 7<sup>th</sup> & 8<sup>th</sup> March ,2026</span> at NIT Patna! Engage with top researchers, innovators, and industry leaders. Don't miss this opportunity! 🚀📚
    </>
  );

  useEffect(() => {
    // Measure widths and set CSS variables for precise animation
    const track = trackRef.current;
    const firstText = textRef.current;
    if (!track || !firstText) return;

    const resize = () => {
      const textWidth = firstText.offsetWidth;
      // read the gap from CSS (fall back to 64px)
      const style = getComputedStyle(track);
      const gapValue = style.gap || style.columnGap || "64px";
      const gap = parseFloat(gapValue) || 64;

      const shift = textWidth + gap;
      // choose speed in px per second (smaller = slower). 50 px/s is readable.
      const speed = 50;
      const duration = Math.max(8, shift / speed);

      // A small initial delay so the starting text remains visible before movement
      const startDelay = 1.5; // seconds

      track.style.setProperty("--marquee-shift", `${shift}px`);
      track.style.setProperty("--marquee-duration", `${duration}s`);
      track.style.setProperty("--marquee-delay", `${startDelay}s`);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="marquee-container" role="status" aria-live="polite">
      <div className="marquee-track" ref={trackRef}>
        <div className="marquee-text" ref={textRef}>{message}</div>
        <div className="marquee-text" aria-hidden="true">{message}</div>
      </div>
    </div>
  );
};

export default RunningText;
  