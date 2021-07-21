import React from "react";

const Table = ({ outputArr }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Name</th>
          <th scope="col">Species</th>
          <th scope="col">ID</th>
        </tr>
      </thead>
       <tbody>
        {outputArr.map((item, index) => (
          <tr key={item.id}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.species}</td>
            <td>{item.id}</td>
          </tr>
        ))}
      </tbody> 
    </table>
  );
};

export default Table;
