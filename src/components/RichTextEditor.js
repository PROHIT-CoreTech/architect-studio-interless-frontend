"use client";

import { useState } from "react";
import { Bold, Italic, Heading1, Heading2, List, Link } from "lucide-react";

export default function RichTextEditor({ value = "", onChange, label = "Description" }) {
  const [text, setText] = useState(value);
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    heading1: false,
    heading2: false,
    list: false
  });

  const handleTextChange = (e) => {
    const val = e.target.value;
    setText(val);
    if (onChange) {
      onChange(val);
    }
  };

  const applyFormat = (formatType, syntaxStart, syntaxEnd = "") => {
    const textarea = document.getElementById("rich-editor-textarea");
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);
    const beforeText = text.substring(0, start);
    const afterText = text.substring(end);

    const formatted = `${syntaxStart}${selectedText || "text"}${syntaxEnd}`;
    const newText = `${beforeText}${formatted}${afterText}`;

    setText(newText);
    if (onChange) onChange(newText);

    // Toggle active state
    setActiveFormats(prev => ({
      ...prev,
      [formatType]: !prev[formatType]
    }));

    // Focus back on textarea after state updates
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + syntaxStart.length, start + syntaxStart.length + (selectedText || "text").length);
    }, 50);
  };

  return (
    <div className="border border-studio-border bg-white flex flex-col focus-within:border-studio-dark transition-all duration-300">
      
      {/* Format Toolbar */}
      <div className="flex items-center space-x-1 px-4 py-2 border-b border-studio-border bg-studio-bg/50">
        <button
          type="button"
          onClick={() => applyFormat("bold", "**", "**")}
          className={`p-1.5 hover:bg-studio-light transition-colors ${activeFormats.bold ? "text-studio-accent" : "text-studio-dark/70"}`}
          title="Bold"
        >
          <Bold size={16} />
        </button>
        <button
          type="button"
          onClick={() => applyFormat("italic", "*", "*")}
          className={`p-1.5 hover:bg-studio-light transition-colors ${activeFormats.italic ? "text-studio-accent" : "text-studio-dark/70"}`}
          title="Italic"
        >
          <Italic size={16} />
        </button>
        <div className="h-4 w-px bg-studio-border mx-1"></div>
        <button
          type="button"
          onClick={() => applyFormat("heading1", "# ", "")}
          className={`p-1.5 hover:bg-studio-light transition-colors ${activeFormats.heading1 ? "text-studio-accent" : "text-studio-dark/70"}`}
          title="Heading 1"
        >
          <Heading1 size={16} />
        </button>
        <button
          type="button"
          onClick={() => applyFormat("heading2", "## ", "")}
          className={`p-1.5 hover:bg-studio-light transition-colors ${activeFormats.heading2 ? "text-studio-accent" : "text-studio-dark/70"}`}
          title="Heading 2"
        >
          <Heading2 size={16} />
        </button>
        <div className="h-4 w-px bg-studio-border mx-1"></div>
        <button
          type="button"
          onClick={() => applyFormat("list", "- ", "")}
          className={`p-1.5 hover:bg-studio-light transition-colors ${activeFormats.list ? "text-studio-accent" : "text-studio-dark/70"}`}
          title="List"
        >
          <List size={16} />
        </button>
        <button
          type="button"
          onClick={() => applyFormat("link", "[", "](url)")}
          className="p-1.5 hover:bg-studio-light text-studio-dark/70 transition-colors"
          title="Insert Link"
        >
          <Link size={16} />
        </button>
      </div>

      {/* Input Area */}
      <textarea
        id="rich-editor-textarea"
        value={text}
        onChange={handleTextChange}
        placeholder="Type or format your description..."
        className="w-full min-h-[160px] p-4 text-xs font-sans font-light bg-transparent focus:outline-none resize-y text-studio-dark leading-relaxed"
      />

      {/* Editor Footer / Character Count */}
      <div className="px-4 py-1.5 bg-studio-bg/20 text-xxs text-studio-muted flex justify-between border-t border-studio-border/30">
        <span>Press buttons above to apply formatting markers</span>
        <span>{text.length} characters</span>
      </div>
    </div>
  );
}
