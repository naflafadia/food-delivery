/* eslint-disable react/prop-types */
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

export default function ExploreMenu({category,setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Explore irresistible desserts to satisfy every craving. Indulge today!</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div onClick={()=> setCategory(prev=> prev===item.menu_name?'All':item.menu_name)} key={index} className="explore-menu-list-item">
                        <div className="frame-img">
                        <img className={category===item.menu_name?'active':''} src={item.menu_image}/>
                        </div>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}