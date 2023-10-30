import React, { useState } from 'react';

const UserInput = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle user input, e.g., send it to an API or process it as needed.
    console.log('User input:', name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=""
          className="hover:bg-pink-400 font-bold border p-2 rounded-full text-blue-900 transition duration-500 ease-in-out transform hover:scale-105"
        />
      </form>
    </div>
  );
};

export default UserInput;
