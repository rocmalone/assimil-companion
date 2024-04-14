import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar({
  loadFilesFunc,
  files,
  filesRoot,
  selectedFile,
  selectFileFunc,
}) {
  // Display load files button if there are no files loaded
  if (!files[0]) {
    return (
      <div className={styles.sidebar}>
        <div className={styles.noFilesWrapper}>
          <button
            className={styles.noFilesLoadFilesButton}
            onClick={() => loadFilesFunc()}
          >
            Load Files
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.sidebar}>
      <p>Folder: {filesRoot} </p>
      {files &&
        files.map((file, index) => {
          let divClass = `${styles.fileDiv}`;
          if (file == selectedFile) {
            divClass = `${styles.fileDiv} ${styles.fileDivSelected}`;
          }

          return (
            <div
              onClick={() => selectFileFunc(file)}
              className={divClass}
              key={index}
            >
              {file}
            </div>
          );
        })}
    </div>
  );
}

export default Sidebar;
