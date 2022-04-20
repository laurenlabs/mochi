import { React, useState } from "react";
// import TextField from "@mui/material/TextField";
// import List from "./Components/List";
import "../App.css";
import Button from "./shared/Button";
import TextField from "./shared/TextField";


function Search() {
    const [searchInput, setSearchInput] = useState("");
    const searchItems = (searchValue) => {
      setSearchInput(searchValue);
    };
    // const searchItems = (searchValue) => {
    //   setSearchInput(searchValue);
    //   APIData.filter((item) => {
    //     return Object.values(item)
    //       .join("")
    //       .toLowerCase()
    //       .includes(searchInput.toLowerCase());
    //   });
    // };
    return (
        <div>
        <h1>React Search</h1>
        <div className="search">
            <TextField
            onChange={(e) => searchItems(e.target.value)}
            label="Search"
            placeholder="Search"
            />
            <Button label="Search" />
        </div>
        </div>
    );
}

export default Search;
