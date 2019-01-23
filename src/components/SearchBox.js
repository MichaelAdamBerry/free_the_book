import React from "react";

export default function SearchBox({ handleSubmit, handleChange, value }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">find books</button>
    </form>
  );
}
