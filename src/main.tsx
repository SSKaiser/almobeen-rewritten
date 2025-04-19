import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import {NavItem} from './modules/elements'
import {Page0, Page1, Page2, PageJ, PageS} from './modules/pages'

const page:string = window.location.pathname.split("/")[1];
var player = <></>;

function putZeros(num: string) {
    while (num.length<3) {
        num="0"+num
    }
    return num
}





if (+page <=114 ) {
    const audioname = putZeros(page)
    player = <iframe className='fixed bottom-3 left-3 overflow-hidden max-w-[430px]' src={'/playerjs.html?file=src/assets/audio/surats/'+audioname+'.mp3'} />
} else if (page.startsWith("j")) {
    player = <iframe className='fixed bottom-3 left-3 overflow-hidden max-w-[430px]' src={'/playerjs.html?file=src/assets/audio/ajza/'+page.slice(1)+'.mp3'} />
} else {
    
}


function App() {
  return (
    <>
      <div className="header">
        <ul id="navBar">
          <NavItem text="السور" id="s" c={page === "s" || page === ""  || +page<=114 ? "selected" : ""}/>
          <NavItem text="الأجزاء" id="a" c={page === "a" || page.startsWith("j") ? "selected" : ""}/>
          <NavItem text="هام" id="i" c={page === "i" ? "selected" : ""}/>
        </ul>
      </div>
      <div className="content">
        {page === "s" || page === "" ? <Page0 />: page === "a" ? <Page1 /> : page==="i" ? <Page2 /> :+page <= 114 ? <PageS id={+page} />:page.startsWith('j') ? <PageJ id={+page.slice(1)}/> : "لقد حصل خطأ"}
      </div>
      {player}
    </>
  )
}


export default App


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
