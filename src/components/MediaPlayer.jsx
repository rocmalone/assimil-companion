import React from "react";
import styles from "./MediaPlayer.module.css";
import { useState } from "react";

function MediaPlayer({ selectedFile }) {
  const [playPauseSymbol, setPlayPauseSymbol] = useState("⏵︎");

  const togglePlay = () => {
    if (playPauseSymbol == "⏵︎") setPlayPauseSymbol("⏸︎");
    else setPlayPauseSymbol("⏵︎");
  };

  return (
    <div className={styles.mediaContainer}>
      <div className={styles.title}>{selectedFile}</div>
      <div className={styles.controlsWrapper}>
        <div className={`${styles.previousButton} ${styles.button}`}>⏪︎</div>
        <div
          onClick={() => togglePlay()}
          className={`${styles.playButton} ${styles.button}`}
        >
          {playPauseSymbol}
        </div>
        <div className={`${styles.nextButton} ${styles.button}`}>⏩︎</div>
      </div>
    </div>
  );
}

export default MediaPlayer;
