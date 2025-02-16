import React, { useEffect, useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  useEffect(() => {
    const localNames = JSON.parse(localStorage.getItem('names')) || [];
    setNames(localNames);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;

    const updatedNames = [...names, name];
    setNames(updatedNames);
    localStorage.setItem('names', JSON.stringify(updatedNames));
    setName('');
  };

  const handleDelete = (index) => {
    const updatedNames = names.filter((_, i) => i !== index);
    setNames(updatedNames);
    localStorage.setItem('names', JSON.stringify(updatedNames));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Enter Item"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button className="bg-blue-100" type="submit">
          Add
        </button>
      </form>

      <h2>Names List:</h2>
      <ul>
        {names.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
