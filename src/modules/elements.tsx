import {/*hafs,*/ surahInfos} from './hafsdata';

const listAr = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
const listAyat = surahInfos.map(f => f[1] as number)

export function Surah({name, id}: {id: number; name: string}) {
    return <a className='surahBlock' href={"/"+id}>
      <div className='hafs'><p className="surahId">{toAr(id)}</p>{name}</div>
      <hr className='hrSurah hafs'/>
      <div className='ayahNumber'>{toAr(listAyat[id-1])} آيات</div>
      <br/>
    </a>
  }
  
  
export function NavItem({text, id, c}: {text: string; id: string; c: string}) {
    return <li className={"navitem " +c} id={id}><a href={"/"+id} >{text}</a></li>
}
  
export function toAr(num: number) {
    let i=''
    let n = num.toString()
    for (let j = 0; j<n.length;j++) i+=listAr[+n[j]]
    return i
}

export function Ayah({page}: {page: [number, string[]]}) {

    const [pageNumber, ayatArray] = page;
    let ayat = ayatArray.map(f => <span className="hafs QuranText">{f}</span>)
    return (<>
    <div className='block page' >
    {ayat}<p className='pageNum'>{toAr(pageNumber)}</p>
    </div>
      
    </>)
}