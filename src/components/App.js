import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
function App() {
  
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  const [tabIndex, setTabIndex] = useState(0);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
    {/* <div className="beforetabs">
    <center><h1>Nithish's Online IDE</h1></center></div> */}
    <div className="App mt-4">
    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList>
        <Tab>HTML</Tab>
        <Tab>CSS</Tab>
        <Tab>JS</Tab>
      </TabList>
      <TabPanel>
      <h1>Add the HTML part here</h1>
      <div className="pane top-pane">
        
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        /></div>
        <h1>Live Preview</h1>
        <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
        </TabPanel>
      <TabPanel>
      <h1>Add the CSS part here</h1>
      <div className="pane top-pane">
       
      <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        /></div>
         <h1>Live Preview</h1>
        <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
      </TabPanel>

      <TabPanel>
      <h1>Add the JS part here</h1>
      <div className="pane top-pane">
       
      <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>`
      <h1>Live Preview</h1>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>`
      </TabPanel>

    </Tabs>
      </div>
      {
      /* <div className="pane top-pane"> */}
        {/* <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        /> */}
        {/* <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        /> */}
        {/* <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        /> */}
      {/* </div> */}
      {/* <h1>Live Preview</h1> */}
      {/* <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div> */}
    </>
  )
}
export default App;
// export default () => (
//   <Tabs>
//     <TabList>
//       <Tab>Title 1</Tab>
//       <Tab>Title 2</Tab>
//     </TabList>

//     <TabPanel>
//       <h2>Any content 1</h2>
//     </TabPanel>
//     <TabPanel>
//       <h2>Any content 2</h2>
//     </TabPanel>
//   </Tabs>
// );
