import React from 'react'

const BasicSlider = ({slides}) => {

  const image=[
    'https://i.postimg.cc/htzq8FHk/homepage.png', 
    'https://i.postimg.cc/C1gKRM6M/slider-Image.jpg', 
    'https://i.postimg.cc/8PfGnmVN/Untitled-2-01.png', 
    'https://i.postimg.cc/25MFTYdz/Untitled-1-01.png'
  ]

  const [current, setCurrent]=React.useState(0);
  
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent(image[Math.floor(Math.random() * image.length)]);
    }, 4000)
    
    return () => clearInterval(intervalId);
  }, [])

  return (
    <section className='slider'>
        <img src={current} className='slider-image'/>
    </section>
  )
}

export default BasicSlider
