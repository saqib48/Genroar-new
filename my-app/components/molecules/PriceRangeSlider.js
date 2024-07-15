import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Range = Slider.Range;

const PriceRangeSlider = ({ onPriceChange }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSliderChange = (values) => {
    setPriceRange(values);
  };

  const handlePriceChange = () => {
    onPriceChange(priceRange[0], priceRange[1]);
  };

  return (
    <div>
      <Range
        min={0}
        max={1000}
        defaultValue={[0, 1000]}
        value={priceRange}
        onChange={handleSliderChange}
      />
      <div>
        <span>Min Price: {priceRange[0]}</span>
        <span>Max Price: {priceRange[1]}</span>
      </div>
      <button onClick={handlePriceChange}>Filter</button>
    </div>
  );
};

export default PriceRangeSlider;
