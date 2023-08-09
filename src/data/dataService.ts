import Person from "../interfaces/Person";

const PEOPLE_KEY = "people";

const getData = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const setData = (key: string, data: any[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getPeople = (): Person[] => getData(PEOPLE_KEY);

export const addPerson= (person: Person) => {
  const people = getPeople();
  people.push(person);
  setData(PEOPLE_KEY, people);
};