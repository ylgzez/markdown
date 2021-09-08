import React, {useState} from 'react'
import marked from 'marked'
import data from './data'
import { BsArrowsAngleContract } from "react-icons/bs";
import { FaExpandArrowsAlt } from "react-icons/fa";

marked.setOptions({
  gfm: true,
  breaks: true,
});

//https://reactjs.org/docs/dom-elements.html

const MarkdownPreview = () => {
  const [preview, setPreview] = useState(data)
  const [toggleEditor, setToggleEditor] = useState(true)
  const [togglePreview, setTogglePreview] = useState(true)

  const handleChange = (e) => {
    setPreview(e.target.value)
  }
  const handleEditorToggle = () => {
    setToggleEditor(!toggleEditor)
  }
  const handlePreviewToggle = () => {
    setTogglePreview(!togglePreview)
  }

  return (
    <>
      {
        togglePreview && (<form>
          <div className='title'>
            <div>Editor</div>
            <button type='button' onClick={handleEditorToggle}>
              {toggleEditor ? <FaExpandArrowsAlt /> : <BsArrowsAngleContract />}
            </button>
          </div>
          <textarea name='editor' id='editor' style={{height: toggleEditor ? '30vh' : '90vh'}} onChange={handleChange}>
            {preview}
          </textarea>
        </form>)
      }
      {
        toggleEditor && (<section>
          <div className='title'>
            <div>Preview</div>
            <button type='button' onClick={handlePreviewToggle}>
              {togglePreview ? <FaExpandArrowsAlt /> : <BsArrowsAngleContract />}
            </button>
          </div>
          <div id='preview' style={{height: togglePreview ? 'auto' : '90vh'}} dangerouslySetInnerHTML={{__html: marked(preview)}}></div>
        </section>)
      }
    </>
  )
}

function App() {
  return <MarkdownPreview />
}

export default App
