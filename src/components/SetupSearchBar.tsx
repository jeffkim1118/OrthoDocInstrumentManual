import Form from "react-bootstrap/Form";
import obj from "./Instruments";
import { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import setUps from "./Homepage/Setups";

export default function SetupSearchBar() {
  let setupArray = [ "setup3", "setup4", "setup5"];

  let testObj = {
    'sets': [{
      "name": "setup1",
    },{
      "name": "setup2",
    },{
      "name": 'setup3',
    },{
      "name": 'setup4',
    }]
  }

  const [searchList, setSearchList] = useState(testObj.sets);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery === "") {
      setSearchList(testObj.sets);
      return;
    }
    const filterBySearch = testObj.sets.filter((setup:any) => {
      if (setup.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return setup
      }
    });
   
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
          {testObj.sets.map((setup) => {
            return <div className="searchResultItem"><Nav.Link>{setup.name}</Nav.Link></div>;
          })}
        </div>
      </div>
    </div>
  );
}
