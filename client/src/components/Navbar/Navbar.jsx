import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);
  const [toggle,setToggle] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper w-100">
        <div className="left flex-row-reverse flex-lg-row w-50 justify-content-between justify-content-lg-start logo-container">
         <div className="logo">
          <Link className ="link" to="/" style={{fontFamily:"Playfair Display"}}>MAMASTORE</Link>
         </div>
         <div id="items-list" className={`${toggle ? 'start-0' : "start-n-60"} items-list  gap-3 position-absolute d-block d-lg-flex top-0  p-3 p-lg-0  m-lg-auto bg-light z-1 `}>

          <div className=" item close-btn" onClick={()=> setToggle(false) }  >
            <div className ="link d-lg-none" >
             <span className="cl-btn" ><CloseIcon/></span> Close
              </div>
          </div>
          <div className="item">
            <Link className ="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Children</Link>
          </div>
         </div>
          <div className={`bars-icon d-md-block d-lg-none cursor-pointer`} onClick={()=> setToggle(true) }>
           <MenuIcon />
          </div>
        </div>
        <div className="right">
          
          <div className="icons">
            <SearchIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
            <div className="d-none d-sm-block">
            <FavoriteBorderOutlinedIcon/>
            <PersonOutlineOutlinedIcon/>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
