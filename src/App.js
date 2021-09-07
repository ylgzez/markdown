import React, {useState} from 'react'
import marked from 'marked'
import data from './data'

marked.setOptions({
  gfm: true,
  breaks: true,
});
//https://reactjs.org/docs/dom-elements.html

const MarkdownPreview = () => {
  const [preview, setPreview] = useState(data)
  const handleChange = (e) => {
    setPreview(e.target.value)
  }

  return (
    <>
      <form>
        <div className='title'>
          Editor
        </div>
        <textarea name='editor' id='editor' onChange={handleChange}>{preview}</textarea>
      </form>
      <section>
        <div className='title'>Preview</div>
        <div id='preview' dangerouslySetInnerHTML={{__html: marked(preview)}}></div>
      </section>
    </>
  )
}

function App() {
  return <MarkdownPreview />
}

export default App
