import React from "react";
import { Quill } from "react-quill";
import { FaPaperclip } from "react-icons/fa6";
import { toast } from "react-toastify";
import { AssetManagerModal } from "../asset-manager-modal/asset-manager-modal";
import { AssetData } from "../../../shared/types/assets";

// Custom Undo button icon component for Quill editor. You can import it directly
// from 'quill/assets/icons/undo.svg' but I found that a number of loaders do not
// handle them correctly
const CustomUndo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
    <path
      className="ql-stroke"
      d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
    />
  </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
    <path
      className="ql-stroke"
      d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
    />
  </svg>
);

const CustomInsert = () => {
  return <FaPaperclip  className="text-xs text-[#454545]" />;
};

// Undo and redo functions for Custom Toolbar
function undoChange(this: {
  quill: any; undo: () => void; redo: () => void; 
}) {
  this.quill.history.undo();
}
function redoChange(this: {
  quill: any; undo: (this: { undo: () => void; redo: () => void; }) => void; redo: () => void; 
}) {
  this.quill.history.redo();
}

function insertItem(this: {
  quill: any; undo: (this: { undo: () => void; redo: () => void; }) => void; redo: () => void; 
}) {

  const range = this.quill.getSelection();
  const cursorPosition = range ? range.index : 0;
  
  const handleInsert = (values: AssetData) => {
    let insert;

    if (values.type.includes("image")) {
      insert = { image: values.url };
      
      } else {
      const downloadBlock = `
        <div class="rounded-lg bg-card text-card-foreground shadow-sm border">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="text-lg font-semibold leading-none tracking-tight mb-4">
              ${values.name}
            </h3>
            <p class="text-sm text-muted-foreground">
              ${values.description}
            </p>
          </div>
        </div>`;
      insert = `Download Asset: ${values.name} - ${values.description} (${values.type})`;

    }

    const Delta = Quill.import("delta");

    this.quill.updateContents(
      new Delta()
        .retain(cursorPosition)
        .insert(insert, { link: values.url })
    );

  };

  toast(
    <AssetManagerModal onInsert={handleInsert} />,
    {
      containerId: "insert"
    }
  );
  
}

// Add sizes to whitelist and register them
const Size: any = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font: any = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);

// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
      insert: insertItem
    }
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  }
};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block"
];

// Quill Toolbar component
export const QuillToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading</option>
        <option value="2">Subheading</option>
        <option value="3">Normal</option>
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
    </span>
    <span className="ql-formats">
      <button className="ql-script" value="super" />
      <button className="ql-script" value="sub" />
      <button className="ql-blockquote" />
      <button className="ql-direction" />
    </span>
    <span className="ql-formats">
      <select className="ql-align" />
    </span>
    <span className="ql-formats">
      <button className="ql-link" />
      <button className="ql-image" />
      <button className="ql-video" />
    </span>
    <span className="ql-formats">
      <button className="ql-code-block" />
      <button className="ql-clean" />
    </span>
    <span className="ql-formats">
      <button className="ql-undo">
        <CustomUndo />
      </button>
      <button className="ql-redo">
        <CustomRedo />
      </button>
      <button className="ql-insert">
        <CustomInsert />
      </button>
    </span>
  </div>
);

export default QuillToolbar;