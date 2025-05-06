import React from 'react'
import CurvedSlider from '../Gallery/CurvedSlider'

const Gallery = () => {
  return (
    <div className='pt-[150px] overflow-hidden'>
      <section className='md:mb-10 px-2 lg:px-0'>
        <div className='text-center text-4xl lg:text-6xl boldText font-semibold leading-tight'>Lorem ipsum dolor sit amet consectetur <span className='block'>adipisicing elit Incidunt maiores</span></div>
        <div>
            <CurvedSlider/>
        </div>
      </section>

      <section>
        <div className='max-w-[1400px] mx-auto mb-10'>
            <div className='md:flex px-2 md:px-0 justify-between w-full gap-5 items-start mb-10'>
                <div className='text-5xl boldText font-bold leading-tight w-full md:w-[60%]'>Lorem, ipsum dolor Lorem <span className='block'>ipsum dolor</span></div>
                <div className='w-full md:w-[40%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in sequi doloremque temporibus adipisci. Labore laboriosam ex, delectus cum, consequuntur nisi tenetur est nemo in dolor hic sequi mollitia aliquid.</div>
            </div>
            {/* Gallery */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5'>
                <div className='w-full h-[350px] rounded-3xl bg-[#000] overflow-hidden'>
                    <img src="https://i.pinimg.com/originals/20/6e/34/206e347def37094bf77334675f432898.jpg" alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='w-full h-[350px] rounded-3xl bg-[#000] overflow-hidden'>
                    <img src="https://i.pinimg.com/originals/85/ad/e3/85ade307b1d7897efccb080f4b0823fc.jpg" alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='w-full h-[350px] rounded-3xl bg-[#000] overflow-hidden'>
                    <img src="https://avatars.mds.yandex.net/i?id=c126d0c57149e80f1cb4bab0d61145e9_l-5163033-images-thumbs&ref=rim&n=13&w=1900&h=1100   " alt="" className='w-full h-full object-cover'/>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
