import React, { useState } from "react";
import { addEmployeePosition, deleteEmployee, getPeople, getPositions, getEmployeesPositions } from "../data/dataService";
import EmployeePosition from "../interfaces/EmployeePosition";

const EmployeesPositions: React.FC = () => {
  const [employeePosition, setEmployeePosition] = useState(getEmployeesPositions());
  const [id, setId] = useState('');
  const [personId, setPersonId] = useState<string | null>(null);
  const [positionId, setPositionId] = useState<string | null>(null);
  const people = getPeople();
  const positions = getPositions();
  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      if (personId !== null && positionId !== null) {
        const newEmployeePosition: EmployeePosition = {
          id,
          person: people.find((person) => person.id === personId)!,
          positionPerson:  positions.find((position) => position.id === positionId)!,
        };
        addEmployeePosition(newEmployeePosition);
    }
      setId('');
      setPersonId('');
      setPositionId('');
      setEmployeePosition(getEmployeesPositions())
  };

  const handleDelete = (id: string | number) => {
    deleteEmployee(id);
    setId('');
    setEmployeePosition(getEmployeesPositions())
  };

  return (
    <div className="">
      <h2>Empleados Puestos</h2>
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
              <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar puesto o persona..." required/>
          </div>
        </form>
        <div>
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
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
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Apellido
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha de Nacimiento
                </th>
                <th scope="col" className="px-6 py-3">
                  Acciones
                </th>
              </tr>
            </thead>
          <tbody>
            {employeePosition
            .filter((employee) =>
              `${employee.positionPerson.positionName} ${employee.person.firstName} ${employee.person.lastName}`
              .toLowerCase().includes(search.toLowerCase()))

            .map((employee) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {employee.id}
                  </th>
                  <td className="px-6 py-4">
                    {employee.positionPerson?.id}
                  </td>
                  <td className="px-6 py-4">
                    {employee.positionPerson?.positionName}
                  </td>
                  <td className="px-6 py-4">
                    {employee.person?.id}
                  </td>
                  <td className="px-6 py-4">
                    {employee.person?.firstName}
                  </td>
                  <td className="px-6 py-4">
                    {employee.person?.lastName}
                  </td>
                  <td className="px-6 py-4">
                    {employee.person?.dateOfBirth.toString()}
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</button>
                    <button onClick={()=> handleDelete(employee.id)}className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Eliminar</button>
                  </td>
                </tr>
              )
            })}
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
            <label htmlFor="people" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Personas</label>
            <select value={personId || ''} onChange={(e) =>  setPersonId(e.target.value ? e.target.value : null)} id="people" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Selecciona una persona</option>
              { people.map((person) => {
                return (
                  <option key={person.id} value={person.id}>{person.id} - {person.firstName} {person.lastName}</option>
                )
              })}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="positions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Puesto</label>
            <select value={positionId || ''} onChange={(e) =>  setPositionId(e.target.value ? e.target.value : null)} id="positions" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Selecciona un puesto</option>
              { positions.map((position) => {
                return (
                  <option key={position.id} value={position.id}>{position.id} - {position.positionName}</option>
                )
              })}
            </select>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
      </div>
    </div>
  </div>
  )
}

export default EmployeesPositions;
