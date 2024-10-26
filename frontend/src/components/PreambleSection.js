import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

function PreambleSection() {
    
  useEffect(() => {
    const splitTypes = document.querySelectorAll('.highlight-text');
    splitTypes.forEach((char, i)=>{
        const text = new SplitType(char, { types: 'words'});

    gsap.from(
      text.words,
      {
        color: 'white', // Your preferred highlight color
        scrollTrigger: {
          trigger: char,
          start: 'top 80%',
          end: 'top 70%',
          scrub: 1,
        },
        opacity: 0.2,
        stagger: 1,
      }
    );
    })
    
  }, []);

  return (
    <div className='text-7xl px-32 bg-black mb-20'>
      <h1 className=' highlight-heading text-center pt-10'>Preamble</h1>
      <p className='highlight-text'>We, the people of India,</p>
      <p className='highlight-text'>having solemnly resolved to constitute India into a </p>
      <p className='highlight-text'>SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and</p>
      <p className='highlight-text'>to secure to all its citizens:</p>
        <p className='highlight-text'>JUSTICE, social, economic and political;</p>
        <p className='highlight-text'>LIBERTY of thought, expression, belief, faith and worship;</p>
        <p className='highlight-text'>EQUALITY of status and of opportunity;</p>
      
        <p className='highlight-text'>and to promote among them all</p>
      
        <p className='highlight-text'>FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;</p>
      
        <p className='highlight-text'>IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION. </p>
    </div>
  );
}

export default PreambleSection;
