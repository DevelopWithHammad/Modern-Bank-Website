import React from 'react';
import styles, { layout } from '../style';
import { card } from "../assets"

import Button from './Button';

const CardDeal = () => (
  <section className={`${layout.section}`}>
    <div className={`left ${layout.sectionInfo} px-16`}>
      <h2 className={`${styles.heading2}`}>Find a better card deal <br className='hidden sm:block' />in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
      <Button className='mt-10' />
    </div>

    <div className={`right ${layout.sectionImg}`}>
      <img src={card} alt="card" className='w-[500px]' />
    </div>
  </section>
)

export default CardDeal
