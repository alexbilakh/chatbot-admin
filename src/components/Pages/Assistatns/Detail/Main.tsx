import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import WizardList from './WizardList';
import FlowList from './FlowList';
import DocumentList from './DocumentList';
import { getAssistant } from '../../../../api/assistant';

const Main = () => {
  const [tabs, setTabs] = useState<string>('wizard');
  const [assistant, setAssistant] = useState<any>({});
  const routeParams = useParams();
  useEffect(() => {
    fetchAssistant();
  }, []);

  const fetchAssistant = async () => {
    const asst = await getAssistant(routeParams.id);
    setAssistant(asst);
  };

  return (
    <div className="flex-1">
      <div className="">
        <div className="flex mb-5">
          <div className="flex">
            <div className="justify-start items-center gap-2 flex">
              <div
                className={`${tabs === 'wizard' ? 'bg-violet-500' : ''} px-4 py-2 rounded-lg justify-center items-center gap-2.5 flex cursor-pointer`}
                onClick={() => {
                  setTabs('wizard');
                }}
              >
                <div className="text-white text-sm font-bold font-['DM Sans'] leading-normal">Assistants wizard</div>
              </div>
              <div
                className={`${tabs === 'flow' ? 'bg-violet-500' : ''} px-4 py-2 rounded-lg justify-center items-center gap-2.5 flex cursor-pointer`}
                onClick={() => {
                  setTabs('flow');
                }}
              >
                <div className="text-white text-sm font-bold font-['DM Sans'] leading-normal">Communications flow</div>
              </div>
              <div
                className={`${tabs === 'documents' ? 'bg-violet-500' : ''} px-4 py-2 rounded-lg justify-center items-center gap-2.5 flex cursor-pointer`}
                onClick={() => {
                  setTabs('documents');
                }}
              >
                <div className="text-white text-sm font-bold font-['DM Sans'] leading-normal">Documents</div>
              </div>
              <div
                className={`${tabs === 'pro' ? 'bg-violet-500' : ''} px-4 py-2 rounded-lg justify-center items-center gap-2.5 flex cursor-pointer`}
                onClick={() => {
                  setTabs('pro');
                }}
              >
                <div className="text-white text-sm font-bold font-['DM Sans'] leading-normal">PRO mode: Data</div>
              </div>
            </div>
          </div>
        </div>
        {tabs === 'wizard' && <WizardList asstId={routeParams.id} assistant={assistant} fetchAssistant={fetchAssistant} />}
        {tabs === 'flow' && <FlowList asstId={routeParams.id} assistant={assistant} fetchAssistant={fetchAssistant} />}
        {tabs === 'documents' && <DocumentList asstId={routeParams.id} />}
        {tabs === 'pro' && (
          <>
            <div>pro</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
