import Form from "react-bootstrap/Form";
import obj from "./Instruments";
import { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import setUps from "./Homepage/Setups";

export default function SetupSearchBar() {
  let setupArray = [ "setup3", "setup4", "setup5"];

  let testArray = []

  const [searchList, setSearchList] = useState(setupArray);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery === "") {
      setSearchList(setupArray);
      return;
    }
    const filterBySearch = setupArray.filter((setup) => {
      if (setup.toLowerCase().includes(searchQuery.toLowerCase())) {
        return setup;
      }
    });
    setSearchList(filterBySearch);
  }, [searchQuery]);

  return (
    <div className="setUpSearchBarPage">
      <div className="setUpSearchBarContainer">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search here"
          onChange={(e: any) => setSearchQuery(e.target.value)}
        ></input>
        <div>
          {searchList.map((setup) => {
            return <div className="searchResultItem"><Nav.Link>{setup}</Nav.Link></div>;
          })}
        </div>
      </div>
    </div>
  );
}
