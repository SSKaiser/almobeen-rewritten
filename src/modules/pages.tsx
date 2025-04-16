import { surat } from './surat'
import { Basmala, BookOpen20Solid } from './fonts';
import { hafs, surahInfos } from './hafsdata';
import { Surah, Ayah , toAr} from './elements'
import React from 'react';
import { JSX } from 'react/jsx-runtime';

const listSurahName = surahInfos.map(f => f[0] as string)
const listSurah = surat.map(f => <Surah key={f.id} id={f.id as number} name={listSurahName[f.id - 1]} />)
interface ayahObject {
    id: number;
    jozz: number;
    page: number;
    sura_no: number;
    sura_name_en: string;
    sura_name_ar: string;
    line_start: number;
    line_end: number;
    aya_no: number;
    aya_text: string;
    aya_text_emlaey: string;
}

export function Page0() {
    return (
        <>
            <h1>السور</h1><br /><br />
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

export function PageS(props: { id: number }) {
    let pages = []
    let firstPage = hafs.find(f=>f.sura_no === props.id)?.page
    for (const i of hafs.filter(f => f.sura_no === props.id)) {
        if (i.sura_no === props.id) {
            if (pages[i.page - firstPage] === undefined) {
                pages[i.page - firstPage] = [i.aya_text]
            } else {
                pages[i.page - firstPage].push(i.aya_text)
            }
        } else {
            break
        }
        
    }
    console.log(pages)
    let render = [];
    for (const [index, page] of pages.entries()) {
        let ayat = page.map(f => <p className='hafs QuranText'>{f}</p>)
        render.push(<div className='block page'>{props.id !== 1 && props.id !== 9 && index === 0 ?<Basmala /> : <></>}<br/>{ayat}<p className='pageNum'></p><p className='pageNum'>{toAr(firstPage+index)}</p></div>)
    }
    return (render)
}

