import React from "react";
import Table from "react-bootstrap/Table";

function SectionItems({ character }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Person Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{character.id}</td>
          <td>{character.name}</td>
          <td>{character.lastName}</td>
          <td>{character.age}</td>
        </tr>
      </tbody>
    </Table>
  );
}
export default SectionItems;
