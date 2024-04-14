import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import PhaseBody from "./components/PhaseBody.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MediaPlayer from "./components/MediaPlayer.jsx";

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
  const [files, setFiles] = useState([]);
  const [filesRoot, setFilesRoot] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  async function loadFiles() {
    // Open a folder selection window
    // Retrieve the folder structure
    // Store the folder structure in the files State
    const openFolder = await window.electronAPI.openFolder();
    if (!openFolder) return;

    setFiles(openFolder.files);
    setFilesRoot(openFolder.root);
    setSelectedFile(openFolder.files[0]);
  }

  function selectFile(fileName) {
    console.log(`Selected ${fileName}`);
    setSelectedFile(fileName);
  }

  return (
    <>
      <Sidebar
        loadFilesFunc={loadFiles}
        files={files}
        filesRoot={filesRoot}
        selectedFile={selectedFile}
        selectFileFunc={selectFile}
      ></Sidebar>
      <div className="content">
        <PhaseBody phase={phase} />
        <MediaPlayer selectedFile={selectedFile} />
      </div>
    </>
  );
}

export default App;
