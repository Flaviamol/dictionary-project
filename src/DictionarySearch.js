import React, { useState } from "react";
import "./DictionarySearch.css";

export default function DictionarySearch(){
    let [keyword, setKeyword] = useState(""); 

    function search(event){
        event.preventDefault();
        alert(`searching for ${keyword}`);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }


    return (
        <div className="DictionarySearch">
            <h1>Dictionary</h1>
            <h3>What word do you want to look up?</h3>
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
        </div>
        
    )
}