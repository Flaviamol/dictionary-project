import React, { useState } from "react";
import "./DictionarySearch.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function DictionarySearch(){
    let [keyword, setKeyword] = useState(""); 
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelResponse(response){
        setPhotos(response.data.photos);
    }

    function search(event){
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f91700001000001d924390390d9498d816079167040f67c";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
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
                <Photos photos={photos} />
            </main>
        </div>
        
    )
}