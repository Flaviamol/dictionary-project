import "./Synonyms.css";

export default function Synonyms(props){
    if (props.synonyms) {
      return (
          <ul className="Synonyms">
             {props.synonyms.map(function (synonym, index){
                 if (index < 6) {
                    return (
                        <li key={index}>{synonym}</li>
                    )
                 }

                 return null;
             })}
          </ul>  
      ); 
    } else {
        return null;
    }
    
}