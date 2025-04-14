import {surat} from './surat'
import {BookOpen20Solid} from './fonts';
import {/*hafs,*/ surahInfos} from './hafsdata';
import {Surah} from './elements'

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

