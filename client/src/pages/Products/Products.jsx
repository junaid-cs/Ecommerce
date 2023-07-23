import React, { useRef,useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import CloseIcon from '@mui/icons-material/Close';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FeaturedProduct from '../../components/FeaturedProducts/FeaturedProducts'
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  const [toggle,setToggle] = useState(false);
  let menuref = useRef();
  useEffect(()=>{
    let handleclick = (e)=>{
      if(!menuref.current.contains(e.target)){
        setToggle(false);
      }
     }
     document.addEventListener("mousedown",handleclick);
 
   });
 

  return (
    <div className="products container-fluid">
      <div className={`left ${toggle ? 'start-0' : 'start-n-60'}`} ref= {menuref}>
      <div className=" item close-btn" onClick={()=> setToggle(false) }  >
            <div className ="link d-lg-none" >
             <span className="cl-btn" ><CloseIcon/></span> Close
              </div>
          </div>
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem d-flex" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem d-flex">
            <span>0</span>
            <input
            className="mx-1"
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem d-flex">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem d-flex">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
      <div className="filter-icon d-lg-none ms-4 text-blue d-flex align-items-center" onClick={()=>setToggle(!toggle)}>
      <FilterAltOutlinedIcon/>
      <span className="filter-text">
        Filter
      </span>
      </div>
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  );
};

export default Products;
