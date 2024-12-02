import { BlockNoteView } from '@blocknote/mantine'
import { useCreateBlockNote, SuggestionMenuController } from '@blocknote/react'
import "@blocknote/core/fonts/inter.css"
import "@blocknote/mantine/style.css"
import { useEffect } from 'react'
import { filterSuggestionItems } from '@blocknote/core'

// Note: https://www.blocknotejs.org/docs

const exportContentFromEditor = async (editor) => {
  // Exporting markdown content
  const markdownContent = await editor.blocksToMarkdownLossy()
  console.log("Markdown content --> \n ", markdownContent)

  // Exporting HTML content
  const htmlContent = await editor.blocksToHTMLLossy()
  console.log("HTML content --> \n ", htmlContent)
}


function MyBlockNoteView() {

  // Used to create the editor
  const editor = useCreateBlockNote({
  initialContent: [
    {
      type: "paragraph",
      content: "Welcome buddy!!",
    }
  ]
  })

  const editor2 = useCreateBlockNote()

  // Adding custom styles to editor
  // editor.addStyles({ textColor: "red" }) // Not working

  // Working with HTMl
  const HTMLContent = "<p>Hello, <strong>universe!</strong></p>";
  useEffect(() => {
    async function loadHtml() {
      const blocks = await editor2.tryParseHTMLToBlocks(HTMLContent)
      editor2.replaceBlocks(editor2.document, blocks)
    }

    loadHtml()
  }, [])

  return (
    <div className='space-y-4'>
      <BlockNoteView editor={editor} onChange={(editor) => exportContentFromEditor(editor)}>
        <SuggestionMenuController
          triggerCharacter='/' // default
          getItems={async (filter) => filterSuggestionItems(editor, filter)}
        />
      </BlockNoteView>
      <BlockNoteView editor={editor2} />
    </div>
  )
}

export default MyBlockNoteView