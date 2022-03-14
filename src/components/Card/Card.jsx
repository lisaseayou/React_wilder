import axios from "axios";
import React, { useState } from "react";
import Badge from "./Badge";

function Card({ wilder, getWilder }) {
 
  const [edition, setEdition] = useState(false);
  const [form, setForm] = useState({
    name: wilder.name,
    city: wilder.city,
  });

  const deleteWilder = () => {
    axios.delete(`api/wilder/delete/${wilder._id}`).then(() => {
      getWilder();
    });
  };

  const handleClick = () => {
    deleteWilder();
  };

  const handleEdition = () => {
    setEdition(!edition);
    // console.log("edition");
  };
  const handleChange = (e) => {
    setForm((oldValues) => ({ ...oldValues, [e.target.name]: e.target.value }));
  };

  const updateWilder = (e) => {
     
      e.preventDefault();
      console.log(form)
      axios.put(`api/wilder/update/${wilder._id}`, form).then(()=> {
      getWilder()
      }).catch(err => {
          console.log(err)
      });
     
    handleEdition();
  };
  return (
    <div className="w-64 h-82 bg-gray-200 m-5 p-5 rounded shadow-md flex-wrap">
      <img
        className="w-28 flex justify-center mx-auto"
        src="./avatar.webp"
      ></img>
      {!edition ? (
        <div>
          <h1 className="pt-1 text-lg font-semibold text-red-500">
            {wilder.name}
          </h1>
          <p>{wilder.city}</p>
          <div className="flex justify-around">
            {wilder.skills.map((skill) => (
              <Badge skill={skill} />
            ))}{" "}
          </div>
        </div>
      ) : (
        <form className="flex flex-col p-2 rounded" onSubmit={updateWilder}>
          <input 
          className="m-2 p-2 rounded"
            placeholder="Prénom"
            name="name"
            value={form.name}
            onChange={handleChange}
          ></input>
          <input
            className="m-2 p-2 rounded"
            placeholder="Ville"
            name="city"
            value={form.city}
            onChange={handleChange}
          ></input>
          <input
          className="m-2 p-2 rounded"
            placeholder="Skills"
            name="skills"
            onChange={handleChange}
          ></input>
          <button  className="mx-0,5 border bg-green-400 text-white p-1 rounded" type="submit">ok</button>
        </form>
      )}

      <div className="flex justify-evenly m-5">
        <button
          className="mx-0,5 border bg-amber-400 text-white p-1 rounded"
          onClick={handleClick}
        >
          Supprimer
        </button>
        <button
          className="mx-0,5 border bg-amber-400 text-white p-1 rounded"
          onClick={handleEdition}
        >
          Modifier
        </button>
      </div>
    </div>
  );
}

export default Card;
