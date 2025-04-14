import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import {surat} from './modules/surat'
import {BookOpen20Solid} from './modules/fonts';
import {hafs, surahInfos} from './modules/hafsdata';

const page = window.location.pathname.split("/")[1];
const listSurah = surat.map(f => <Surah key={f.id} id={f.id as number} name={f.name} />)
const listAr = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
const listAyat = surahInfos.map(f => f[1] as number)


function Page0() {
  return (
    <>
    <h1>السور</h1><br/><br/>
    {/*
      <div className="block">
        
        <ul id="listsurat">
          {listSurah}
        </ul>
      </div>
    */}
    <div className='block' id="surahl">
      <p className="t"><BookOpen20Solid />السور</p>
        {listSurah}
    </div>
    </>
  )
}

function Page1() {
  return (<>Goodbye</>)
}

function Page2() {
  return (<>World</>)
}

function Surah({name, id}: {id: number; name: string}) {
  // return <li><a href={id.toString()}>سورة {name}</a></li>
  return <div className='surahBlock'>
    <div><p className="surahId hafs">{toAr(id)}</p>سورة {name}</div>
    <hr className='brSurah'/>
    <div>{toAr(listAyat[id-1])} آيات</div>
    <br/>
  </div>
}


function NavItem({text, id, c}: {text: string; id: string; c: string}) {
  return <li className={"navitem " +c} id={id}><a href={"/"+id} >{text}</a></li>
}

function toAr(num: number) {
  let i=''
  let n = num.toString()
  for (let j = 0; j<n.length;j++) i+=listAr[+n[j]]
  return i
}

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
        {page === "s" || page === "" ? <Page0 />: page === "a" ? <Page1 /> : page==="i" ? <Page2 /> :+page <= 114 ? "" : "لقد حصل خطأ"}
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
