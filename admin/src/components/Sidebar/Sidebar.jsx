import './Sidebar.css'
import { IoAddCircleOutline } from "react-icons/io5";
import { BsCartCheck } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <IoAddCircleOutline className='icon'/>
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <BsCartCheck className='icon'/>
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <BsCartCheck className='icon'/>
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}
