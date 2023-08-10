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

export const addPosition = (position: Position) => {
  const positions = getPositions();
  positions.push(position);
  setData(POSITIONS_KEY, positions);
};

export const addEmployeePosition = (employeePosition: EmployeePosition) => {
  const employeesPositions = getEmployeesPositions();
  employeesPositions.push(employeePosition);
  setData(EMPLOYEES_POSITIONS, employeesPositions);
};