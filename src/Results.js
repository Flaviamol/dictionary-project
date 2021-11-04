import React from "react";
import Meaning from "./Meaning.js";
import "./Results.css";

export default function Results(props){
    if (props.results) {
        return (
            <div className="Result">
                <hr className="top-line"/> 
                <h2>{props.results.word}</h2>
                {props.results.meanings.map(function(meaning, index) {
                    return (
                      <div key={index}>
                          <Meaning meaning={meaning} />
                      </div>   
                    );
                })}
                <hr className="bottom-line"/> 
            </div>
        )  
    } else {
        return null;
    }
}