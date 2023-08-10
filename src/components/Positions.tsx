import React, { useState } from "react";
import { addPosition, editPosition, deletePositions, getPositions } from "../data/dataService";
import Position from '../interfaces/Position';

const Positions: React.FC = () => {
  const [positions, setPositions] = useState(getPositions());
  const [id, setId] = useState('');
  const [positionName, setPositionName] = useState('');
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [searchPosition, setSearchPosition] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (edit && editId !== null) {
      editPosition(editId, { id, positionName });
      setEdit(false);
      setEditId(null);
    } else {
      const newPosition: Position = {
        id,
        positionName,
      }
      addPosition(newPosition);
    }
    setId('');
    setPositionName("");
    setPositions(getPositions());
  };

  const handleEdit = (position: Position) => {
    setId(position.id.toString());
    setPositionName(position.positionName);
    setEdit(true);
    setEditId(position.id.toString());
  }

  const handleDelete = (id: string | number) => {
    deletePositions(id);
    setId('');
    setPositionName('');
    setEdit(false);
    setEditId(null);
    setPositions(getPositions());
  };

  return (
    <div className="">
      <h2>Puestos</h2>
      <div className="flex">
        <section className="">
          <form>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input value={searchPosition} onChange={(e) => setSearchPosition(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar por puesto..." required/>
            </div>
          </form>
          <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nombre
                  </th>
                </tr>
              </thead>
              <tbody>
                { positions
                  .filter((position) =>
                    `${position.positionName}`
                    .toLowerCase().includes(searchPosition.toLowerCase()))

                .map((position) => {
                  return (
                    <tr key={position.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                              <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {position.id}
                      </th>
                      <td className="px-6 py-4">
                        {position.positionName}
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={()=> handleEdit(position)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</button>
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={()=> handleDelete(position.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Eliminar</button>
                      </td>
                    </tr>
                )})}
              </tbody>
            </table>
          </div>
        </section>

      <div className="">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Agregar Registro</button>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id</label>
                <input value={id} onChange={(e) => setId(e.target.value)} type="text" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Id" required/>
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Puesto</label>
                <input value={positionName} onChange={(e) => setPositionName(e.target.value)} type="text" id="positionName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Puesto" required/>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{ edit ? "Editar Puesto" : "Agregar Puesto"}</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Positions;
