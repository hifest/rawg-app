import { React, useState, useEffect } from "react";
import { changeActiveFilter } from "../gameList/gameListSlice";
import { useDispatch,fetchGamesList } from "react-redux";
import Select from "react-select";
function GamesFilter() {
  const dispatch = useDispatch();
  const options = [
    { value: "action", label: "Action" },
    { value: "adventure", label: "Adventure" },
    { value: "5", label: "rpg" },
  ];
  const [selectedOption, setSelectedOption] = useState({ value: "5", label: "rpg" });

  useEffect(() => {
    dispatch(changeActiveFilter(selectedOption.value))
  }, [selectedOption]);
  return (
    <div className="Ap123p">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

export default GamesFilter;
