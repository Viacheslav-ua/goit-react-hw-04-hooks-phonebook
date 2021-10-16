import React from "react";
import TextField from "@mui/material/TextField";
import S from "./Filter.module.css";

interface PropsType {
  filterValue: string;
  handleChangeFilter: any;
}

const Filter: React.FC<PropsType> = ({ filterValue, handleChangeFilter }) => {
  return (
    <div>
      {/* <label className={S.caption}>Find contacts by name</label> */}
      <TextField
        label="Find contacts by name"
        variant="standard"
        id="component-simple"
        type="text"
        name="filter"
        className={S.input}
        value={filterValue}
        onChange={handleChangeFilter}
      />
    </div>
  );
};
export default Filter;
