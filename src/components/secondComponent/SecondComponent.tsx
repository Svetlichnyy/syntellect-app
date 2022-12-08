import React, { useEffect, useState } from "react";

import { getCountryByName } from "../../api/apiService";
import { CountryInfo } from "../../api/apiService";
import { useDebounce } from "../../hooks/useDebounce";

function SecondComponent() {
  const [value, setValue] = useState("");
  const [limit, setLimit] = useState("3");
  const [suggestions, setSuggestions] = useState<CountryInfo[]>([]);
  const debouncedValue = useDebounce({ value, delay: 300 });
  useEffect(() => {
    getCountryByName(debouncedValue)
      .then((res) => res.slice(0, Number(limit)))
      .then((res) => setSuggestions(res));
  }, [debouncedValue, limit]);
  return (
    <>
      <select onChange={(e) => setLimit(e.target.value)}>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <input
        placeholder="start typing..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {suggestions &&
        suggestions.map((suggest) => {
          return (
            <div
              key={suggest.fullName}
              //не было айди, посчитал, что полное имя для страны должно быть уникальным
              className="suggest"
              onClick={(e) => setValue(suggest.name)}
            >
              <img src={suggest.flag} alt={suggest.fullName} />
              <h3>{suggest.fullName}</h3>
              <p>{suggest.name}</p>
            </div>
          );
        })}
    </>
  );
}

export default SecondComponent;
