import React, { useState } from "react";
import "../css/Resume.css";

import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import pdfFile from "../../VishalKumarSingh_Resume .pdf";
function Resume() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [defaultPdfFile] = useState(pdfFile);
  return (
    <div className="con">
      <div className="pdf-container">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer
            theme="dark"
            fileUrl={defaultPdfFile}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    </div>
  );
}
export default Resume;
