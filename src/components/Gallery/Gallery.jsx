import React,{useState} from 'react'
import CurvedSlider from '../Gallery/CurvedSlider'
import room1 from '../../assets/room1.jpg'
import room2 from '../../assets/room2.png'
import room3 from '../../assets/room3.png'
import room4 from '../../assets/room4.png'
import hotel from '../../assets/Homebanner.jpg'
import reception from '../../assets/reception.png'
import living from '../../assets/living.png'
import dine from '../../assets/dine.jpg'
import dine1 from '../../assets/dine1.png'
import rec1 from '../../assets/rec1.png'
import build from '../../assets/build.jpg'
import build2 from '../../assets/build2.jpg'
import build3 from '../../assets/build3.jpg'
import build4 from '../../assets/build4.jpg'
import dine3 from '../../assets/dine3.jpg'
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('images');

  const images = [
    room1,
    room2,
    room3,
    room4,
    hotel,
    reception,
    living,
    dine,
    dine1,
    dine3,
    build,
    build2,
    build3,
    build4
  ];

  const videos = [
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      poster: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      poster: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];
  return (
    <div className='pt-[150px] overflow-hidden'>
      <section className='md:mb-10 px-2 lg:px-0'>
        <div className='text-center text-4xl lg:text-6xl boldText font-semibold leading-tight'>Lorem ipsum dolor sit amet consectetur <span className='block'>adipisicing elit Incidunt maiores</span></div>
        <div>
            <CurvedSlider/>
        </div>
      </section>

     <section>
        <div className='max-w-[1400px] mx-auto mb-10 px-2'>
            {/* Images/Videos Filter - Top Left */}
           

            <div className='md:flex px-2 md:px-0 justify-between w-full gap-5 items-start mb-10'>
                <div className='text-5xl boldText font-bold leading-tight w-full md:w-[60%]'>Lorem, ipsum dolor Lorem <span className='block'>ipsum dolor</span></div>
                <div className='w-full md:w-[40%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in sequi doloremque temporibus adipisci. Labore laboriosam ex, delectus cum, consequuntur nisi tenetur est nemo in dolor hic sequi mollitia aliquid.</div>
            </div>
             <div className="px-2 md:px-0 mb-6">
              <div className="flex gap-1 text-sm">
                <button
                  onClick={() => setActiveFilter('images')}
                  className={`transition-colors ${activeFilter === 'images' ? 'text-black font-medium' : 'text-gray-500'}`}
                >
                  Images
                </button>
                <span className="text-gray-400">/</span>
                <button
                  onClick={() => setActiveFilter('videos')}
                  className={`transition-colors ${activeFilter === 'videos' ? 'text-black font-medium' : 'text-gray-500'}`}
                >
                  Videos
                </button>
              </div>
            </div>
            {/* Gallery - Images */}
            {activeFilter === 'images' && (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5'>
                {images.map((src, index) => (
                  <div key={index} className='w-full h-[350px] rounded-3xl bg-[#000] overflow-hidden'>
                    <img src={src} alt="" className='w-full h-full object-cover'/>
                  </div>
                ))}
              </div>
            )}

            {/* Gallery - Videos */}
            {activeFilter === 'videos' && (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5'>
                {videos.map((video, index) => (
                  <div key={index} className='w-full h-[350px] rounded-3xl bg-[#000] overflow-hidden'>
                    <video 
                      className='w-full h-full object-cover'
                      controls
                      poster={video.poster}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            )}
        </div>
      </section>
    </div>
  )
}

export default Gallery
