import React from 'react';
import './App.css';
import Menu from "./Components/Menu"
import Categories from "./Components/Categories"
import items from "./Components/data"
import Footer from './Components/Footer'
import BasicSlider from './Components/BasicSlider'
import { SliderData } from './Components/SliderData';
import Promotion from './Components/Promotion'
import Logo from './Components/Logo'
import Logopic from './image/logo.png'

const allCategories = ['all', ...new Set(items.map((item)=>items.category))]
console.log(allCategories)

function App() {

  const [menuItems, setMenuItems]=React.useState(items)
  const [categories, setcategories]=React.useState(allCategories)

  const filterItems=(category)=>{

    if(category==='all') {
      setMenuItems(items)
      return
    }

    const newItems=items.filter((item)=>item.category===category)

    setMenuItems(newItems)
  }


  return (
    <main>
      {/* <img src={require('./image/logo.png')} className="logo-img"/> */}
      <Logo />
      <BasicSlider slides={SliderData}/>
      <section className='menu section'>

        <div className='title'>
          <h2>In stock!</h2>
          <div className='underline'></div>
        </div>

        <Categories categories={categories} filterItems={filterItems} />

        <Menu items={menuItems}/>

      </section>
      <Promotion/>
      <Footer/>
    </main>
  );
}

export default App;
