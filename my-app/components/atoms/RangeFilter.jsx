// components/RangeFilter.jsx
import { useState, useEffect } from 'react';
import styles from '../RangeFilter.modules.css'

const RangeFilter = () => {
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(80);
  const maxRangeValue = 100;

  useEffect(() => {
    if (minValue > maxValue - 1) {
      setMinValue(maxValue - 1);
    }
    if (maxValue < minValue + 1) {
      setMaxValue(minValue + 1);
    }
  }, [minValue, maxValue]);

  const minPercent = (minValue / maxRangeValue) * 100;
  const maxPercent = (maxValue / maxRangeValue) * 100;

  return (
    <div className={styles.rangeSlider}>
      <input
        type="range"
        min="0"
        max={maxRangeValue}
        value={minValue}
        onChange={(e) => setMinValue(Number(e.target.value))}
        className={styles.rangeInput}
      />
      <input
        type="range"
        min="0"
        max={maxRangeValue}
        value={maxValue}
        onChange={(e) => setMaxValue(Number(e.target.value))}
        className={styles.rangeInput}
      />
      <div
        className={styles.sliderTrack}
        style={{
          background: `linear-gradient(to right, #ddd ${minPercent}%, #007bff ${minPercent}%, #007bff ${maxPercent}%, #ddd ${maxPercent}%)`,
        }}
      ></div>
    </div>
  );
};

export default RangeFilter;
