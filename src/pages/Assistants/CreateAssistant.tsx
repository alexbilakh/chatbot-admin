import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useContext } from 'react';

import { IRootState } from '../../store';
import Switch from '../../components/Forms/Switch';
import { setPageTitle } from '../../store/themeConfigSlice';
// import StatsList from '../../components/Pages/Assistatns/StatsList';
// import AssistantList from '../../components/Pages/Assistatns/AssistantList';
import Header from '../../components/Pages/Assistatns/CreateAssistant/Header';
import General from '../../components/Pages/Assistatns/CreateAssistant/General';
import Instructions from '../../components/Pages/Assistatns/CreateAssistant/Instructions';
import { createNewAssistant, updateWidget } from '../../api/assistant';
import { AssistantPropI, validGeneralPropI } from '../../types/assistant';
import { CustomContext } from '../../contexts/CustomContext';

const CreateAssistant = () => {
  const dispatch = useDispatch();
  const [assistant, setAssistant] = useState<AssistantPropI>({
    title: '',
    gptModel: '',
    isDefault: false,
  });
  const [inValidGeneral, setInvalidGeneral] = useState<validGeneralPropI>({
    title: false,
    gptModel: false,
  });
  const { widgetConfigId, gptModels } = useContext(CustomContext);

  useEffect(() => {
    dispatch(setPageTitle('CreateAssistant'));
  });

  const handleChange = (name: string, value: string | boolean) => {
    setAssistant((prev) => ({ ...prev, [name]: value }));
  };

  const createAssistant = async (instructions: object) => {
    if (assistant.title === '') {
      setInvalidGeneral((prev) => ({ ...prev, title: true }));
      return;
    }
    setInvalidGeneral((prev) => ({ ...prev, title: false }));

    if (assistant.gptModel === '') {
      setInvalidGeneral((prev) => ({ ...prev, gptModel: true }));
      return;
    }
    setInvalidGeneral((prev) => ({ ...prev, gptModel: false }));

    const asstId = await createNewAssistant(assistant, instructions);
    setAssistant({ title: '', gptModel: '', isDefault: false });
    if (assistant.isDefault) {
      updateWidget(widgetConfigId, asstId);
    }
  };

  return (
    <div className="">
      <Header />
      <div className="p-4">
        <General gptModels={gptModels} assistant={assistant} onChange={handleChange} invalidGeneral={inValidGeneral} />
        <Instructions createAssistant={createAssistant} />
      </div>
    </div>
  );
};

export default CreateAssistant;
