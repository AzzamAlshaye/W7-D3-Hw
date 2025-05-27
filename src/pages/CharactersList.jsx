// src/components/CharactersList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

// Base API endpoint
const API_BASE = "https://655127797d203ab6626e943b.mockapi.io/Character_fahad";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Fetching list: ${API_BASE}`);
    axios
      .get(API_BASE)
      .then((res) => setCharacters(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-neutral-500">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Error fetching characters.</p>
      </div>
    );

  // Only show entries with valid images
  const validCharacters = characters.filter(
    (char) => char.image && char.image.trim()
  );

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
        Characters
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {validCharacters.map((char) => (
          <Link
            key={char.id}
            to={`/characters/${char.id}`}
            className="group block border border-neutral-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={char.image}
              alt={char.name || "character"}
              className="w-full h-48 object-cover group-hover:scale-105 transition"
            />
            <div className="p-2 bg-neutral-50">
              <p className="text-center text-neutral-900 font-medium truncate">
                {char.name || "Unknown"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
