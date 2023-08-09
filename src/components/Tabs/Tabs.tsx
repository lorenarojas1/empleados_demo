import React, { useState } from 'react';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';
import People from '../People';
import Positions from '../Positions';
import EmployeesPositions from '../EmployeesPositions';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('people');

  return (
    <>
      <div className="Tabs">
        <ul className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <TabNavItem title="Personas" id="people" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Puestos" id="positions" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="Empleados Puestos" id="employees-positions" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </ul>

        <div className="outlet">
          <TabContent id="people" activeTab={activeTab}>
            <People/>
          </TabContent>
          <TabContent id="positions" activeTab={activeTab}>
            <Positions/>
          </TabContent>
          <TabContent id="employees-positions" activeTab={activeTab}>
            <EmployeesPositions/>
          </TabContent>
        </div>
      </div>
    </>
  );

};

export default Tabs;
