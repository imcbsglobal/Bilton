import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const TextReveal = () => {

  const content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti amet alias enim dolores ducimus minus nisi adipisci tempore commodi. Natus, et corrupti voluptatibus autem rerum soluta vitae modi deleniti?Fugiat vitae est illo in, officia quis, enim officiis soluta totam quisquam minus excepturi rerum ullam quo itaque voluptatibus deserunt porro ut quasi consequatur blanditiis accusamus ipsa dolore amet. Quaerat?"; // Your content
  const words = content.split(' ');
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"]
  });

  // Create staggered opacity and y-position transforms
  const opacityRange = words.map((_, i) => useTransform(
    scrollYProgress,
    [i / words.length, (i + 1) / words.length],
    [0.4, 1]
  ));

  const yRange = words.map((_, i) => useTransform(
    scrollYProgress,
    [i / words.length, (i + 1) / words.length],
    [20, 0]
  ));
  return (
    <section ref={sectionRef} className='mb-16'>
      <div className='max-w-[1200px] mx-auto px-2 flex flex-col justify-center items-center'>
        <motion.div 
          initial={{ opacity: 0.5, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          className='mb-5 px-10  font-semibold text-[#06362E] py-2 rounded-full border-2 border-[#E2C686] shadow-[0_3px_10px_rgb(0,0,0,0.1)]'
        >
          About Bilton
        </motion.div>

        <div className='text-center text-[18px] md:text-[28px] leading-normal text-[#06362E]'>
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block transition-all duration-700"
              style={{
                opacity: opacityRange[i],
                y: yRange[i],
                willChange: 'opacity, transform'
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TextReveal
