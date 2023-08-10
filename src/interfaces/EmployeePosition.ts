import Person from "./Person";
import Position from "./Position";

interface EmployeePosition {
  id: string | number;
  positionPerson?: Position;
  person: Person
}

export default EmployeePosition;