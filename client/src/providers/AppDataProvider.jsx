import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

export const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const [selectedBedrooms, setSelectedBedrooms] = useState([2, 3]);
  const [selectedBathrooms, setSelectedBathrooms] = useState([2, 3]);
  const [state, setState] = useState({
    markers: {},
    bedrooms: [],
    bathrooms: [],
  });
  console.log("children ➤", children);
  const max = 5000
  const min = 0
  // const onChange = children.onChange
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const handleClickBeds = (index) => {
    if (selectedBedrooms.includes(index)) {
      setSelectedBedrooms(selectedBedrooms.filter((i) => i !== index));
    } else {
      setSelectedBedrooms([...selectedBedrooms, index]);
    }
  };
  const handleClickBaths = (index) => {
    if (selectedBathrooms.includes(index)) {
      setSelectedBathrooms(selectedBathrooms.filter((i) => i !== index));
    } else {
      setSelectedBathrooms([...selectedBathrooms, index]);
    }
  };

  useEffect(() => {
    setState((prevState) => ({ ...prevState, bedrooms: selectedBedrooms }));
  }, [selectedBedrooms]);
  useEffect(() => {
    setState((prevState) => ({ ...prevState, bathrooms: selectedBathrooms }));
  }, [selectedBathrooms]);

  //multiRangeSlider--------------------------------------------------

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  // useEffect(() => {
  //   onChange({ min: minVal, max: maxVal });
  // }, [minVal, maxVal, onChange]);
//--------------------------------------------------------------------
  return (
    <AppDataContext.Provider
      value={{
        state,
        handleClickBeds,
        handleClickBaths,
        selectedBathrooms,
        selectedBedrooms,
        minVal,
        maxVal,
        setMinVal,
        setMaxVal,
        minValRef,
        maxValRef,
        range,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
