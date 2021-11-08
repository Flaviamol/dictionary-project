import "./Meaning.css";
import Synonyms from "./Synonyms.js";

export default function Meaning (props) {
    return (
        <div className="Meaning">
          <h4>{props.meaning.partOfSpeech}</h4>
          {props.meaning.definitions.map(function(definition, index){
              return (
                  <div key={index}>
                    <div className="definition"><strong>Definition: </strong>{definition.definition}</div>
                    <div className="example">{definition.example}</div>
                    <Synonyms synonyms={definition.synonyms} /> 
                  </div>      
              )
          })} 
        </div>
    );
}