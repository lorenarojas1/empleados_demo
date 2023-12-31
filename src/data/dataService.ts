import EmployeePosition from "../interfaces/EmployeePosition";
import Person from "../interfaces/Person";
import Position from "../interfaces/Position";

const PEOPLE_KEY = "people";
const POSITIONS_KEY = "positions";
const EMPLOYEES_POSITIONS = "employeesPositions";

const getData = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const setData = (key: string, data: any[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getPeople = (): Person[] => getData(PEOPLE_KEY);
export const getPositions = (): Position[] => getData(POSITIONS_KEY);
export const getEmployeesPositions = (): EmployeePosition[] => getData(EMPLOYEES_POSITIONS);

export const addPerson = (person: Person) => {
  const people = getPeople();
  people.push(person);
  setData(PEOPLE_KEY, people);
};

export const editPerson = (id: string, updatedPerson: Person) => {
  const people = getPeople();
  const personIndex = people.findIndex((person) => person.id === id);
  if (personIndex !== -1) {
    people[personIndex] = { ...people[personIndex], ...updatedPerson };
    setData("people", people);
  }
};

export const deletePerson = (id: string | number) => {
  const people = getPeople();
  const updatedPerson = people.filter((person) => person.id !== id);
  setData("people", updatedPerson);
};

export const addPosition = (position: Position) => {
  const positions = getPositions();
  positions.push(position);
  setData(POSITIONS_KEY, positions);
};

export const editPosition = (id: string, updatedPosition: Position) => {
  const positions = getPositions();
  const positionsIndex = positions.findIndex((position) => position.id === id);
  if (positionsIndex !== -1) {
    positions[positionsIndex] = { ...positions[positionsIndex], ...updatedPosition };
    setData("positions", positions);
  }
};

export const deletePositions = (id: string | number) => {
  const positions = getPositions();
  const updatedPosition = positions.filter((position) => position.id !== id);
  setData("positions", updatedPosition);
};

export const addEmployeePosition = (employeePosition: EmployeePosition) => {
  const employeesPositions = getEmployeesPositions();
  employeesPositions.push(employeePosition);
  setData(EMPLOYEES_POSITIONS, employeesPositions);
};

export const editEmployee = (id: string, updatedEmployee: EmployeePosition) => {
  const employees = getEmployeesPositions();
  const employeesIndex = employees.findIndex((employee) => employee.id === id);
  if (employeesIndex !== -1) {
    employees[employeesIndex] = { ...employees[employeesIndex], ...updatedEmployee };
    setData("employeesPositions", employees);
  }
};

export const deleteEmployee = (id: string | number) => {
  const employees = getEmployeesPositions();
  const updatedEmployee = employees.filter((employee) => employee.id !== id);
  setData("employeesPositions", updatedEmployee);
};