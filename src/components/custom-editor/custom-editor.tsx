import React from "react";
import ReactQuill, {  ReactQuillProps } from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar, { formats, modules } from "./custom-editor-toolbar";
import { ToastContainer } from "react-toastify";

type Props = {
  value?: string
  placeholder: string
  onChange: ReactQuillProps["onChange"]
}

const CustomEditor = ({
  value,
  onChange,
  placeholder
}: Props) => {
  return (
    <div className="h-1/4 flex flex-col overflow-hidden">
      <QuillToolbar />
      <ReactQuill
        theme="snow"
        value={value || ""}
        modules={modules}
        formats={formats}
        onChange={onChange}
        placeholder={placeholder}
      />
      <ToastContainer
        className="center-toast insert-toast"
        containerId="insert"
        position="top-center"
        newestOnTop={true}
        hideProgressBar={true}
        autoClose={false}/>
    </div>
  );
};

export default CustomEditor;