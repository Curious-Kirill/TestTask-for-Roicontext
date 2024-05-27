import {motion} from 'framer-motion';
import {useRef,useEffect, useState} from 'react';
import './slider.css';

function Slider({cards}) {
const [activeIndex, setActiveIndex] = useState(null);
 const [width, setWidth] = useState(0);
 const carousel = useRef();
 const innerCarousel = useRef();

 useEffect(() =>{
  
  setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
 }, []);
 
useEffect(()=>{
  setActiveIndex(1);
},[]);

 const handleClick= function(e){
  let slide = Number(e.target.id.split('-')[1]);
  setActiveIndex(slide);
 }

 let card = cards.map(function(item){

  return <motion.div
    className={item.id===activeIndex?'item item-is-active':'item'} id={'item-'+item.id}
    key={item.id}
    onClick={handleClick}
    >

    <div className="cardMask">
    <div className="cardHeader" >
      <h2 >{item.header}</h2>
      </div>
    </div>

    <div className="cardHeader">
      <h2 >{item.header}</h2>
      <button 
      className="cardHeader-button" 
      aria-label={`Кнопка перехода на страницу с подробной информацией об услугах которые мы оказываем по ${item.header}`}>
        <p>на страницу</p></button>
      </div>

    <p className="cardPrice">{item.price}</p>

    <ul className="cardOptions">
      {item.options.map((el,index)=>(
      <li key={index}>{el}</li>
    ))}</ul>
  </motion.div>
});


  return (
    <div className="sliderContainer">
      <motion.div ref={carousel} className='carousel'>
        <motion.div 
        ref={innerCarousel}
         drag="x"
         dragConstraints={{right:0, left:-width}} className='inner-carousel'>
          {card}
        </motion.div>
      </motion.div>
    </div>
  );
}




export default Slider;
