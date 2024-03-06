import React, { useEffect, useState } from 'react';
import NewAssistant from './NewAssistant';
import AssistantItem from './AssistantItem';
import { getAssistants } from '../../../../api/assistant';

const AssistantList = () => {
  const [assistants, setAssistants] = useState<any[]>([]);
  useEffect(() => {
    fetchAssistants();
  }, []);

  const fetchAssistants = async () => {
    const assts = await getAssistants();
    setAssistants(assts);
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {assistants.map((item, index) => (
        <AssistantItem key={index} asst={item}/>
      ))}
      <NewAssistant />
    </div>
  );
};

export default AssistantList;
