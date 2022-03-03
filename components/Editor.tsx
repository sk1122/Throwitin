import React, { FC } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";

type Props = {
  editor: any;
};

const MenuBar: FC<Props> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("URL");

    if (url) {
      editor.commands.setImage({ src: url });
    }
  };

  return (
    <div className="space-y-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${
          editor.isActive("bold") ? "is-active bg-white text-black" : ""
        } px-2 py-1 border border-white rounded-md m-1`}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${
          editor.isActive("italic") ? "is-active bg-white text-black" : ""
        } px-2 py-1 border border-white rounded-md m-1`}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`${
          editor.isActive("strike") ? "is-active bg-white text-black" : ""
        } px-2 py-1 border border-white rounded-md m-1`}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`${
          editor.isActive("code") ? "is-active bg-white text-black" : ""
        } px-2 py-1 border border-white rounded-md m-1`}
      >
        code
      </button>
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="px-2 py-1 border border-white rounded-md m-1"
      >
        clear marks
      </button>
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className="px-2 py-1 border border-white rounded-md m-1"
      >
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`${
          editor.isActive("paragraph") ? "is-active bg-white text-black" : ""
        } px-2 py-1 border border-white rounded-md m-1`}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${
          editor.isActive("heading", { level: 1 })
            ? "is-active bg-white text-black"
            : ""
        } px-2 py-1 border border-white rounded-md m-1`}
      >
        heading
      </button>
      <button
        onClick={() => addImage()}
        className={`${
          editor.isActive("heading", { level: 1 })
            ? "is-active bg-white text-black"
            : ""
        } px-2 py-1 border border-white rounded-md m-1`}
      >
        image
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${
          editor.isActive("bulletList") ? "is-active bg-white text-black" : ""
        } px-2 py-1 border border-white rounded-md m-1`}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${
          editor.isActive("orderedList") ? "is-active bg-white text-black" : ""
        } px-2 py-1 border border-white rounded-md m-1`}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${
          editor.isActive("codeBlock") ? "is-active bg-white text-black" : ""
        } px-2 py-1 border border-white rounded-md m-1`}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${
          editor.isActive("blockquote") ? "is-active bg-white text-black" : ""
        } px-2 py-1 border border-white rounded-md m-1`}
      >
        blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="px-2 py-1 border border-white rounded-md m-1"
      >
        horizontal rule
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="px-2 py-1 border border-white rounded-md m-1"
      >
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className="px-2 py-1 border border-white rounded-md m-1"
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className="px-2 py-1 border border-white rounded-md m-1"
      >
        redo
      </button>
    </div>
  );
};

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        levels: [1],
        HTMLAttributes: {
          class: "text-3xl",
        },
      }),
      Image.configure({
        inline: true,
      }),
    ],
    content:
      'dsadsasadddddddddddddddddddddddddddddddddddddddd <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />',
    editorProps: {
      attributes: {
        class:
          "w-full h-[60vh] text-white rounded-md mr-20 border-none outline-none resize-none",
      },
    },
  });

  return (
    <div className="w-full min-h-screen flex flex-col space-y-5 justify-start items-start">
      <MenuBar editor={editor} />
      <div className="w-full h-full">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
