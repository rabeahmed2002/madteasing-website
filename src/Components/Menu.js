import React from 'react';

const Menu = ({items}) => {
    
  const [visible, setVisible]=React.useState(8)

  const showMoreItems= () => {
    setVisible(prevValue=>prevValue+8)
  }

  return (
    <div>
        <div className='section-center'>
            {items.slice(0,visible).map((menuItem)=>{
                const {id,title,img,desc,price}=menuItem
                return <article key={id} className='menu-item'>
                    <img src={img} alt={title} className='photo'/>
                    <div className='item-info'>
                        <header>
                            <h4>{title}</h4>
                            <h4 className='price'>Rs {price}</h4>
                        </header>
                        <p className='item-text'>{desc}</p>
                    </div>
                </article>
            })}
        </div>
        <button onClick={showMoreItems} className="more-btn">
            See More
        </button>

    </div>
  );
};

export default Menu;