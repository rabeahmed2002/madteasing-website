import React from 'react';

const Categories = ({categories,filterItems}) => {
    return (<div className='btn-container'>
        <button className='filter-btn' onClick={()=>filterItems('all')}>
            All
        </button>

        <button className='filter-btn' onClick={()=>filterItems('SummerCollection')}>
        Summer Collection
        </button>

        <button className='filter-btn' onClick={()=>filterItems('WinterCollection')}>
        Winter Collection
        </button>
{/* 
        <button className='filter-btn' onClick={()=>filterItems('Formal Shirts')}>
        Formal Shirts
        </button> */}

        {/* {categories.map((category, index)=>{
            return ( 
                <button 
                    type="button" 
                    className='filter-btn' 
                    key={index} 
                    onClick={()=>filterItems(category)}
                >
                    {category}
                </button>
            )
        })} */}
    </div> 
    )    
};

export default Categories;
