import {/*hafs,*/ surahInfos} from './hafsdata';
import { ajza } from './surat';

const listAr = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
const listAyat = surahInfos.map(f => f[1] as number)

export function Surah({name, id}: {id: number; name: string}) {
    return <a className='no-underline inline-block w-50 px-[9px] py-[6px] h-[130px] border-1 border-white/20 rounded-[9px] m-2.5 cursor-pointer bg-black/20 ]' href={"/"+id}>
      <div className='hafs'><p className="font-serif inline-block text-center ml-[10px] pt-[0.35rem] px-[0.7rem] leading-8 rounded-full border-[white] border-solid border-[1px] mt-1.5">{toAr(id)}</p>{name}</div>
      <hr className='hrSurah hafs'/>
      <div className='ayahNumber'>{toAr(listAyat[id-1])} آيات</div>
      <br/>
    </a>
  }

  export function Juz({id}: {id: number}) {
    return <a className='max-w-[330px] no-underline px-[15px] py-[15px] inline-flex flex-col justify-center border-1 border-white/20 rounded-[9px] m-2.5 cursor-pointer bg-black/20 ]' href={"/j"+id}>
      <div className='hafs'><p className="font-serif inline-block text-center ml-[10px] pt-[0.35rem] px-[0.7rem] leading-8 rounded-full border-[white] border-solid border-[1px] mt-1.5">{toAr(id)}</p>{ajza[id]}</div>
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
