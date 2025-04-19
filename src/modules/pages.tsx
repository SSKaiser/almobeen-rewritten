import { surat, ajza } from './surat'
import { Basmala, BookOpen20Solid, FileListFill, SeverityInfo } from './fonts';
import { hafs, surahInfos } from './hafsdata';
import { Surah, toAr, Juz} from './elements'
import {useEffect} from 'react';
import { JSX } from 'react/jsx-runtime';

const listSurahName = surahInfos.map(f => f[0] as string)
const listSurah = surat.map(f => <Surah key={f.id} id={f.id as number} name={listSurahName[f.id - 1]} />)
const listJuz = Object.keys(ajza).map(f => <Juz key={f} id={f}/>)

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
            <div className='block bg-[#1f2024] mb-20px pt-0 pr-10 px-5 border-1 border-white/10 rounded-[3px]' id="surahl">
                <p className="t"><BookOpen20Solid />السور</p>
                <div className='flex flex-row flex-wrap justify-center'>
                {listSurah}
                </div>
                
            </div>
        </>
    )
}

export function Page1() {
    return (
        <>
            <h1>الأجزاء</h1><br /><br />
            <div className='text-center bg-[#1f2024] mb-20px pt-0 pr-10 px-5 border-1 border-white/10 rounded-[3px]' id="surahl">
                <p className="t"><FileListFill />السور</p>
                <div className='inline-grid mr-auto ml-auto lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center'>
                {listJuz}
                </div>
            </div>
        </>
    )
}


export function Page2() {
    useScript("https://site.com/playerjs.js");
    return (
        <>
            <h1>هام</h1><br /><br />
            <div className='text-center bg-[#1f2024] mb-20px pt-0 pr-10 px-5 border-1 border-white/10 rounded-[3px]' id="surahl">
                <p className="t"><SeverityInfo />حفظ الموقع</p>
                <p className='text-right font-[Vazirmatn] text-1.5xl my-5'>لا تنسى حفظ الموقع ومشاركته.</p>
                </div>
                
        </>
    )
}


export function PageS(props: { id: number }) {
    let pages = []
    let firstPage = hafs.find(f=>f.sura_no === props.id)?.page
    for (const i of hafs.filter(f => f.sura_no === props.id)) {
        if (pages[i.page - firstPage] === undefined) {
            pages[i.page - firstPage] = [i.aya_text]
        } else {
            pages[i.page - firstPage].push(i.aya_text)
        }
        
        
    }
    let render = [];
    for (const [index, page] of pages.entries()) {
        let ayat = page.map(f => <p className='hafs QuranText'>{f}</p>)
        render.push(<>
        
        <div className='text-justify  bg-[#1f2024] mb-[20px] rounded-[3px] p-5 border-1 border-white/10 page max-w-[50rem] mx-auto text-[1.2em]'>{index===0?<p className='text-center text-5xl font-[Hafs] mb-4'>سورة {hafs.find(f => f.sura_no===props.id)?.sura_name_ar}</p>:""}{props.id !== 1 && props.id !== 9 && index === 0 ?<Basmala /> : <></>}{ayat}<p className='pageNum'></p><p className='pageNum'>{toAr(firstPage+index)}</p></div></>)
    }
    return (<>
    
    {render}</>)
}

export function PageJ(props: { id: number }) {
    let pages = []
    let BasmalaAt = []
    
    let firstPage = hafs.find(f=>f.jozz === props.id)?.page
    for (let i of hafs.filter(f => f.jozz === props.id)) {
        let pageIndex = i.page - firstPage
        let firstAyahOfPage = hafs.find(f=>f.page === i.page)?.id
        let indexInPage = i.id - firstAyahOfPage
        if (pages[pageIndex] === undefined) {
            pages[pageIndex] = [i.aya_text]
        } else {
            pages[i.page - firstPage].push(i.aya_text)
        }
        if (i.aya_no === 1 && i.sura_no !== 9 && i.sura_no !== 1) {
            BasmalaAt.push([pageIndex, indexInPage, i.sura_no])
        }
        
        
    }
    let render = [];
    for (const [index, page] of pages.entries()) {
        let ayat = page.map((f, i) => (<>
                {BasmalaAt.filter(f => f[0] === index && f[1] === i).length>0 ? <>
                    <p className='text-center mt-5 text-5xl font-[Hafs] mb-4'>سورة {hafs.find(f => f.sura_no===BasmalaAt.find(f => f[0] === index && f[1] === i)[2])?.sura_name_ar}</p>
                    <Basmala />
                </> : <></>}
                    <p className='hafs QuranText'>
                        
                        {f}
                    </p></>))
       
            
        
        
        render.push(<div className='text-justify  bg-[#1f2024] mb-[20px] rounded-[3px] p-5 border-1 border-white/10 page max-w-[50rem] mx-auto text-[1.2em]'>{ayat}<p className='pageNum'></p><p className='pageNum'>{toAr(firstPage+index)}</p></div>)
    }
    return (render)
}
/*
Note for self: NEVER use typescript again 💀
*/