import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import {NavItem} from './modules/elements'
import {Page0, Page1, Page2, PageS} from './modules/pages'

const page = window.location.pathname.split("/")[1];




function App() {
  return (
    <>
      <div className="header">
        <ul id="navBar">
          <NavItem text="السور" id="s" c={page === "s" || page === "" ? "selected" : ""}/>
          <NavItem text="الأجزاء" id="a" c={page === "a" ? "selected" : ""}/>
          <NavItem text="هام" id="i" c={page === "i" ? "selected" : ""}/>
        </ul>
      </div>
      <div className="content">
        {page === "s" || page === "" ? <Page0 />: page === "a" ? <Page1 /> : page==="i" ? <Page2 /> :+page <= 114 ? <PageS id={+page} /> : "لقد حصل خطأ"}
      </div>
    </>
  )
}


export default App


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
