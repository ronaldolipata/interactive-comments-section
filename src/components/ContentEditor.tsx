import { useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'

import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

import './ContentEditor.css'

export interface ContentEditorProps {
  editable?: boolean
}

export default function ContentEditor({ editable }: ContentEditorProps) {
  const editor = useEditor({
    extensions: [
      // TODO: add mention here using https://tiptap.dev/api/nodes/mention
      StarterKit,
      Placeholder.configure({
        placeholder: 'Add a comment...'
      })
    ],
    editorProps: {
      attributes: {
        class: 'prose'
      }
    }
  })

  useEffect(() => {
    // if editable props is present then make editor editable.
    editable && editor?.setEditable(editable)
  }, [editable])

  // add other contents here such as user avatar.
  return <EditorContent className="editorBorder" editor={editor} />
}