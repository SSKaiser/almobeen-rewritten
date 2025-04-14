import {surat} from './surat'
import {BookOpen20Solid} from './fonts';
import {hafs, surahInfos} from './hafsdata';
import {Surah, Ayah} from './elements'

const listSurahName = surahInfos.map(f => f[0] as string)
const listSurah = surat.map(f => <Surah key={f.id} id={f.id as number} name={listSurahName[f.id-1]} />)

export function Page0() {
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

export function Page1() {
  return (<>Goodbye</>)
}

export function Page2() {
  return (<>World</>)
}

export function PageS({id}: {id:number}) {
    let ayat = [];
    let surahFound = false;
    for (let ayah of hafs) {
        if (!surahFound) {
            if (ayah.sura_no == id) {
                surahFound = true;
                ayat.push(ayah);
            }
        } else {
            if (ayah.sura_no == id) {
                ayat.push(ayah);
            } else {
                break;
            }
        }
    }
    interface ayahperpage {
        [pageno: number] : any
    }
    interface ayahperpageelem {
        [pageno: number] : any
    }
    let ayatPerPageElem:ayahperpageelem = {}
    let ayatPerPage:ayahperpage = {}
    for (let ayah of ayat) {
        if (ayatPerPage[ayah.page] == undefined) {
            ayatPerPage[ayah.page] = [ayah.aya_text]
        } else {
            ayatPerPage[ayah.page].push(ayah.aya_text)
        }
    }

    
    let pages = ayat.map(f => <Ayah text={f.aya_text} key={f.id}/>);
    return <div className="block">{pages}</div>
}
/*
Goal: make an element that takes an array in the form [page_no, [ayah, ayah, ...]]
In the element make a block with in bottom of page 
*/