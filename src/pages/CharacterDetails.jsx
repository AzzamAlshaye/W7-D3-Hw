// src/components/CharacterDetails.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

// Base API endpoint
const API_BASE = "https://655127797d203ab6626e943b.mockapi.io/Character_fahad";

export default function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_BASE)
      .then((res) => {
        // find exact match by id
        const found = res.data.find((c) => c.id.toString() === id);
        if (found) {
          setCharacter(found);
        } else {
          setError("Character not found");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-neutral-500">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-neutral-500">{error}</p>
      </div>
    );

  const { image, name, hair, status, species, gender, origin } = character;

  return (
    <div className="p-4 max-w-md mx-auto">
      <Link
        to="/characters"
        className="flex gap-2 items-center mb-2 w-30 text-neutral-700 hover:text-neutral-900 bg-neutral-300 p-1 px-2 rounded-4xl"
      >
        <IoMdArrowRoundBack />
        Back to list
      </Link>
      <div className="bg-neutral-50 p-6 rounded-lg shadow-lg">
        {image && (
          <img
            src={image}
            alt={name || "character"}
            className="w-full h-64 object-fill rounded-md mb-4"
          />
        )}
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          {name || "Unknown"}
        </h2>
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span className="font-medium text-neutral-700">Hair:</span>
            <span className="text-neutral-900">{hair || "Unknown"}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium text-neutral-700">Status:</span>
            <span className="text-neutral-900">{status || "Unknown"}</span>
          </li>
          <li className="flex  justify-between">
            <span className="font-medium text-neutral-700">Species:</span>
            <span className="text-neutral-900">{species || "Unknown"}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium text-neutral-700">Gender:</span>
            <span className="text-neutral-900">{gender || "Unknown"}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium text-neutral-700">Origin:</span>
            <span className="text-neutral-900">{origin || "Unknown"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
