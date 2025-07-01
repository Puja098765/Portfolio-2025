import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import {useState} from "react";
import "./styles.scss";
import ImageOne from "../../images/image1.jpeg";
import ImageTwo from "../../images/image2.jpeg";
import ImageThree from "../../images/image3.jpeg";
import ImageFour from "../../images/image4.jpeg";
import ImageFive from "../../images/image5.jpeg";

const portfolioData =[
  {
    // id=2 development project
    id: 2,
    name: "Ecommerce",
    image : ImageOne,
    link: "",
  },
  {
    // design project
    id: 3,
    name: "Notes App",
    image : ImageTwo,
    link: "",
  },
  {
    id : 2,
    name: "Supplier Design",
    image : ImageThree,
    link: "",
  },
  {
     id:  2,
     name: "Todo App",
     image :ImageFour,
     link: "",
  },
  {
    id:3,
    name: "Shopping cart design",
    image : ImageFive,
    link: "",

  },
];


const filterData = [
  {
    filterId : 1,
    label: 'All',
  },
  {
    filterId : 2,
    label : 'Development',
  },
  {
    filterId: 3 ,
    label : 'Design',
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId){
 setFilteredValue(currentId);
  }
  function handleHover(index){
    setHoveredValue(index);
  }

  const filteredItems=
  filteredValue === 1
  ? portfolioData
  : portfolioData.filter((item) => item.id === filteredValue);
  return (
    <section  id="portfolio" className=" portfolio ">
      <PageHeaderContent
      headerText ="My Portfolio" 
      icon={<BsInfoCircleFill size={40}/>}
      />
      <div className ="portfolio__content">
        <ul className="portfolio__content__filter">
          {
            filterData.map((item)=> (
              <li
              classname={item.filterId === filteredValue ? "value" : ""}
                onClick={() => handleFilter(item.filterId)}
                key={item.filterId}
                >
                {item.label}
                </li>
              
            ))}
        </ul>

        <div className="portfolio__content__cards">
          {filteredItems.map((item, index)=> (
            <div
            className="portfolio__content__cards__item"
            key={`cardItem${item.name.trim()}`}
            onMouseEnter={()=> handleHover(index)}
            onMouseLeave={()=> handleHover(null)}
            >
              
        
        <div className="portfolio__content__cards__item__img-wrapper">
          <a>
            <img alt="dummy data" src={item.image}/>
          </a>
        </div>
        <div className="overlay">
          {index === hoveredValue && (
            <div>
              <p>{item.name}</p>
              <button>Visit</button>
              </div>
          )}
        </div>
      </div>
          ))}
          </div>
          </div>
    </section>
  );
};

export default Portfolio;
