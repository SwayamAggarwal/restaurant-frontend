import React from 'react'
import  {data} from '../restApi.json'

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Every dish tells a story, crafted with passion, seasoned with love, and served with warmth. From the sizzle of the pan to the final garnish, every bite is a journey—one that awakens the senses, comforts the soul, and brings people together. Here, food is more than just sustenance; it's an experience, a memory, a celebration of flavors that linger long after the last bite. Welcome to a place where every meal is a masterpiece, and every guest is family</p>
            </div>
            <div className="dishes_container">
              {
                data[0].dishes.map(element=>{
                    return(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })
              }
            </div>
        </div>
    </section>
  )
}

export default Menu