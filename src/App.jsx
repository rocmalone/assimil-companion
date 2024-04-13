import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const Phases = {
    INITIAL: 0,
    LISTEN_TO_TARGET: 1,
    LISTEN_WITH_TRANSLATION: 2,
    READ_TARGET_ALOUD_WITH_TRANSLATION: 3,
    READ_TARGET_ALOUD_WITHOUT_TRANSLATION: 4,
    LISTEN_AND_READ_BASE: 5,
    LISTEN_AND_READ_TARGET: 6,
    LISTEN_TO_TARGET_2: 7,
    LISTEN_AND_REPEAT: 8,
    READ_COMMENTS_AND_EXAMINE_SENTENCES: 9,
    COMPLETE_EXERCISES: 10,
  };
  const [phase, setPhase] = useState(Phases.INITIAL);

  return (
    <>
      <h1>Hi from React!</h1>
    </>
  );
}

export default App;
