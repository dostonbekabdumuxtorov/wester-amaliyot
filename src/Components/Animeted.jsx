import React from 'react'
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Online', 'Istalgan Nuqtadan', 'Mutahasislardan', '"Wester School"da'];


const Animated = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, 
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
    <div className='animated'>
      <h1>Kasblarni</h1>
      <TextTransition className='text' springConfig={presets.wobbly}>
        <h1 className='middle-text'>{TEXTS[index % TEXTS.length]}</h1>
      </TextTransition>
      <h1 className='last-text'>
        o'rganing
      </h1>
    </div>
  )
}

export default Animated