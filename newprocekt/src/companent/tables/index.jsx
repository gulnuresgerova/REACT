import React from "react";
import "./index.css"
const Table = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
         
            <th>ID</th>
            <th>Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
            <th>Discontinued</th>
        
        </tr>
      </thead>
      <tbody>
        {products?.map((e) => {
          return (
            <tr key={e.id}>
             
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.quantityPerUnit}</td>
                <td>{e.unitPrice}</td>
                <td>{e.discontinued ? "empty " : "full"}</td>
             
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
