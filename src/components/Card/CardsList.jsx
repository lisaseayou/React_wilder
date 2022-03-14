import React, {useState} from "react";
import Card from "./Card";


function CardsList({wilders, getWilder}) {
    const [searchWilders, setSearchWilders] = useState("");

    const handleSearchWilders = (e) => {
        let value = e.target.value;
        setSearchWilders(value);
        console.log(searchWilders);
      };
  return (
      <>
      <div> 
<p className="pt-1 text-lg font-semibold text-green-900 m-5">Rechercher un Wilder : </p>
<input type="text"
        name="searchBar"
        placeholder="Rechercher un wilder"
        onChange={handleSearchWilders}
        className="w-80 m-10 border border-green-900 p-3 rounded shadow-md mx-auto"
        ></input>
      </div>
    <div className="flex grid grid-cols-5 gap-4">
      {wilders.length>0 && wilders.filter((wilder) => {return wilder.name
      .toLowerCase()
      .includes(searchWilders.toLowerCase()); })
      .map((wilder, index) =>
            <Card key={index} wilder={wilder} getWilder={getWilder}/>
            )}
    </div>
    </>
  );
}

export default CardsList;
