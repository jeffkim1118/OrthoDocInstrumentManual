import Form from 'react-bootstrap/Form';
import obj from './Instruments';
import {useState, useEffect} from 'react'
export default function SetupSearchBar(){

    let setupArray = ["setup1", "setup2", "setup3", "setup4", "setup5"];

    const [searchList, setSearchList] = useState(setupArray);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(()=>{
        if (searchQuery === "") { setSearchList(setupArray); return; }
        const filterBySearch = setupArray.filter((setup) => {
            if (setup.toLowerCase()
                .includes(searchQuery.toLowerCase())) { return setup; }
        })
        setSearchList(filterBySearch);
    },[searchQuery])

    return(
        <div>
            <input type='text' value={searchQuery} onChange={(e:any) => setSearchQuery(e.target.value)}></input>
            <div>
                {searchList.map((setup) => {
                    return(
                        <div>{setup}</div>
                    )
                })}
            </div>
        </div>
    )
}