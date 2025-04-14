import {/*hafs,*/ surahInfos} from './hafsdata';

const listAr = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
const listAyat = surahInfos.map(f => f[1] as number)

export function Surah({name, id}: {id: number; name: string}) {
    return <div className='surahBlock'>
      <div className='hafs'><p className="surahId">{toAr(id)}</p>{name}</div>
      <hr className='brSurah hafs'/>
      <div className='ayahNumber'>{toAr(listAyat[id-1])} آيات</div>
      <br/>
    </div>
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

export function Ayah({text}: {text: string}) {
    return <><p className="hafs ayah">{text}</p><hr className="separateAyah"/></>
}