import './App.css'
function App() {

  return (
    <>
<h1>Netlify Image CDN Beta - Test</h1>
<img src="/cat1.jpg"/>
<img src="https://superlative-brigadeiros-2fab95.netlify.app/.netlify/images?url=cat1.jpg"/>
<img src="/largeFile.jpeg"/>
<img src="https://superlative-brigadeiros-2fab95.netlify.app/.netlify/images?url=largeFile.jpeg&fm=avif&w=1000&q=100"/>

    </>
    
  )
}

export default App
