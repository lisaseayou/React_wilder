import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form(props) {
  const [form, setForm] = useState({
    name: "",
    city: "",
    skills: [
      {
        title: "",
        votes: "",
      },
    ],
  });
  const notify = () => toast("Wow so easy!");

  const createWilder = () => {
    axios.post("/api/wilder/create", form).then(() => {
      setForm({
        name: "",
        city: "",
        skills: [
          {
            title: "",
            votes: "",
          },
        ],
      });
      props.getWilder();
      notify();
    });
    
};

const handleTextChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    createWilder();
  };

  

  return (
    <form className="flex flex-col w-80 m-10 border border-green-900 p-3 rounded shadow-md mx-auto">
      <p className="text-lg font-semibold text-green-900 p-5">
        Ajouter un nouveau Wilder :{" "}
      </p>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={form.name}
        onChange={handleTextChange}
        className="border border-green-900 rounded m-3 p-2"
      ></input>
      <input
        type="text"
        placeholder="City"
        name="city"
        value={form.city}
        onChange={handleTextChange}
        className="border border-green-900 rounded m-3 p-2"
      ></input>
      <button
        className="bg-green-900 rounded text-white p-2"
        onClick={handleSubmit}
      >
        AJOUTER
      </button>
      <ToastContainer />
    </form>
  );
}

export default Form;
