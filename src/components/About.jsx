import React from 'react'

const About = () => {
  return (
    <div className="pt-[100px]">
      <section className="mb-16">
        <div className="max-w-[1400px] mx-auto h-[600px] w-full rounded-3xl bg-[#000] relative px-5 pb-5 flex items-end overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 right-0">
            <img
              src="https://kmp.ru/upload/iblock/308/308f5b3393799a26f3bbba85892108bc.jpg"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="lg:w-[50%] w-[95%] h-[450px] bg-[#fff8e8] rounded-2xl relative px-5 py-10">
            <div className="flex flex-col justify-start items-start">
              <div className="px-6 py-2 mb-5 rounded-full border-2 text-[#06362E] border-[#06362E] text-xs md:text-sm font-semibold">
                About Bilton
              </div>
              <div className="mb-5 text-3xl md:text-5xl boldText font-bold text-[#06362E]">
                Redefining stays with effortless guest experiences
              </div>
              <div className="text-xs md:text-sm mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt dolor voluptas recusandae quos perferendis voluptatem
                est omnis, reprehenderit, fugiat tenetur rerum necessitatibus
                molestias architecto libero iure. Ut iste doloribus ad.
              </div>
              <div className="flex items-center gap-5">
                <div className="px-6 py-2 border border-[#06362E] text-[#E2C686] bg-[#06362E] text-sm font-semibold rounded-full">
                  Discover More
                </div>
                <div className="px-6 py-2 text-[#06362E] bg-[#fbe0a1] text-sm font-semibold rounded-full">
                  Contact
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-16'>
        <div className='max-w-[1200px] mx-auto px-2'>
          <div className='text-center text-[18px] md:text-[28px] leading-normal text-[#06362E]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            veritatis obcaecati non voluptate ad ipsam, delectus provident iusto
            molestiae impedit culpa. Voluptatibus perferendis amet impedit.
            Dicta provident totam at sed? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eos laudantium expedita vitae fuga sunt fugit quo
            accusamus autem voluptatibus sint excepturi deserunt, tempora
            explicabo natus ipsum quod voluptas fugiat blanditiis?
          </div>
        </div>
      </section>
    </div>
  );
}

export default About
