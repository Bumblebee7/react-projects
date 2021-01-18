import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    console.log(index);
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" type="button" onClick={prevPerson}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className="next-btn" type="button" onClick={nextPerson}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
      <button
        className="random-btn"
        type="button"
        onClick={() => {
          let randomPerson = Math.floor(
            Math.random() * Math.floor(people.length)
          );
          if (randomPerson === index) {
            randomPerson = index + 1;
          }
          console.log(randomPerson);
          setIndex(checkNumber(randomPerson));
        }}
      >
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
