// src/components/CharacterDetails.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router";

export default function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://655127797d203ab6626e943b.mockapi.io/Character_fahad/${id}`)
      .then((res) => setCharacter(res.data))
      .catch((err) => setError(err))
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
        <p className="text-red-500">Error loading character.</p>
      </div>
    );
  if (!character)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-neutral-500">Character not found.</p>
      </div>
    );

  const { image, name, hair, status, species, gender, origin } = character;

  return (
    <div className="p-4 max-w-md mx-auto">
      <Link
        to="/characters"
        className="inline-block mb-4 text-neutral-700 hover:text-neutral-900"
      >
        &larr; Back to list
      </Link>
      <div className="bg-neutral-50 p-6 rounded-lg shadow-lg">
        {image && image.trim() && (
          <img
            src={image}
            alt={name || "character"}
            className="w-full h-64 object-cover rounded-md mb-4"
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
          <li className="flex justify-between">
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
