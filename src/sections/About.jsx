import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const about = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('devrevolutionx@gmail.com');

        setHasCopied(true)

        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }
  return (
    <section className='c-space my-20' id='about'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Hi I'm Farhan</p>
                        <p className='grid-subtext'>Hi, I’m Farhan — a passionate coder and cinematographer, blending technology and creativity to craft unique digital experiences and captivating visual stories. Currently developing Nexus AI, a virtual assistant designed to boost productivity for content creators.</p>
                        
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-3 '>
                <div className='grid-container'>
                    <img src="/assets/skill.png" alt="grid-2"  className='w-full sm:h-[276px] h-fit object-contain opacity-60'/>
                    <div>
                        <p className='grid-headtext'>My Skills</p>
                        <p className='grid-subtext'>Programming: Expert in JS/TS with React & Next.js. Skilled in Flask & Tailwind CSS.</p>
<p className='grid-subtext'>Cinematography: Freelance DOP & editor, creating aftermovies, 3D animations, & visual content for artists.</p>

                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                    <Globe height={326} 
                    width={326} 
                    backgroundColor='rgba(0, 0, 0, 0)' 
                    backgroundImageOpacity={0.5} 
                    showAtmosphere 
                    showGraticules 
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" 
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" 
                    labelsData={[{
                        lat: 18.5204, lng: 73.8567, text: 'I am Here' ,
                        color: 'white',
                        size: 20,
                    }]} />
                    </div>
                    <div>
                    <p className='grid-headtext'>I work remotely across most timezones.</p>
                    <p className='grid-subtext'>I am based in India, with remote work available.</p>
                    <a href='#contact'>
                    <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                    </a>
                    <a href='https://www.instagram.com/_farhan.who_/' target='_blank'>
                    <Button name="Instagram" isBeam containerClass="w-full mt-10"/>
                    </a>
                </div>
                </div>
                
            </div>
            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>My Passion for Creativity</p>
                        <p className='grid-subtext'>I'm not just a developer; I'm a storyteller, a problem solver, and a creative force to be reckoned with.</p>

                    </div>
                </div>
            </div>
            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px]  sm:h-[276px] h-fit object-cover sm:object-top' />
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contact me</p>
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" className='cursor-pointer' />
                            <p className='grid-subtext font-medium text-gray_gradient text-white'>devrevolutionx@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default about
