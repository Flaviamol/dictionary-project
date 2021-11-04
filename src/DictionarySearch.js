import React, { useState } from "react";
import "./DictionarySearch.css";
import axios from "axios";
import Results from "./Results";

export default function DictionarySearch(){
    let [keyword, setKeyword] = useState(""); 
    let [results, setResults] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }


    return (
        <div className="DictionarySearch">
            <header>
                <h1>Dictionary</h1>
                <h3>What word do you want to look up?</h3>
                <form onSubmit={search}>
                    <input type="search" onChange={handleKeywordChange}/>
                </form>  
            </header>
            <main>
                <Results results={results}/>
            </main>
            
        </div>
        
    )
}