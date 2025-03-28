import { useEffect, useRef, useState } from "react";

function ProgressBar() {
  const [ perc, setPerc ] = useState(0);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      setPerc((prev) => {
        if (prev < 100) {
          animationFrameId.current = requestAnimationFrame(updateProgress);
          return prev + 0.05;
        }
        return prev;
      });
    };

    animationFrameId.current = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrameId.current);

  }, []);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-indicator"
        style={{ width: `${perc}%` }}
      >
      </div>
    </div>
  );
}

export default ProgressBar;