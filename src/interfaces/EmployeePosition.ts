
interface EmployeePosition {
  id: string | number;
  positionPerson: {
    id: string | number;
    positionName?: string;
  };
  person: {
    id: string | number;
    firstName: string;
    lastName: string;
    dateOfBirth: string | Date;
  };
}

export default EmployeePosition;