import Person from "./Person";
import Position from "./Position";

interface EmployeePosition {
  id: number;
  position: Position;
  person: Person;
}

export default EmployeePosition;