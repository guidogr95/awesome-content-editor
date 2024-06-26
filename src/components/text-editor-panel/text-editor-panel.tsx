"use client";
import React from "react";
import CustomEditor from "../custom-editor/custom-editor";
import { useTextEditorPanel } from "./use-text-editor-panel";

const TextEditorPanel = () => {
  const {
    value,
    handleChangeValue,
    htmlContent
  } = useTextEditorPanel();
  
  return (
    <div className="h-[100vh] flex flex-col p-5 gap-3">
      <div className="text-container h-3/4 overflow-auto pb-4" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <CustomEditor
        placeholder="Enter your text"
        value={value}
        onChange={handleChangeValue}/>
    </div>
  );
};

export default TextEditorPanel;