import React, { useState } from "react";

import FullScreenIcon from "../assets/make-full.png";
import SmallScreenIcon from "../assets/make-small.png";

const FullScreenButton = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-20" onClick={toggleFullScreen}>
      {isFullScreen ? (
        <img
          src={SmallScreenIcon}
          width={32}
          height={32}
          alt="make-small-screen"
        />
      ) : (
        <img
          src={FullScreenIcon}
          width={32}
          height={32}
          alt="make-full-screen"
        />
      )}
    </div>
  );
};

export default FullScreenButton;
