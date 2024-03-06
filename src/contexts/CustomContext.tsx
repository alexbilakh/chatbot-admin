import React, { createContext, useEffect, useState } from 'react';
import { getWidgetConfigs } from '../api/widget';
import { getGptModels } from '../api/assistant';

export interface CustomContextI {
  widgetConfigId: string;
  gptModels: any;
  fetchWidgetConfigs: () => Promise<void>;
  fetchGptModels: () => Promise<void>;
}

const defaultState = {
  widgetConfigId: '',
  fetchWidgetConfigs: async () => {},
  fetchGptModels: async () => {},
  gptModels: {},
};

export const CustomContext = createContext<CustomContextI>(defaultState);

const CustomContextProvider = (props: any) => {
  const [widgetConfigId, setWidgetConfigId] = useState<string>('');
  const [gptModels, setGptModels] = useState<any>({});

  useEffect(() => {
    if (widgetConfigId === '') {
      fetchWidgetConfigs();
    }
    if (Object.keys(gptModels).length <= 0) {
      fetchGptModels();
    }
  }, []);

  const fetchGptModels = async () => {
    const res = await getGptModels();
    setGptModels(res);
  };

  const fetchWidgetConfigs = async () => {
    const widgetRes = await getWidgetConfigs();
    setWidgetConfigId(widgetRes[0].id['$oid']);
  };

  return (
    <CustomContext.Provider
      value={{
        widgetConfigId,
        fetchWidgetConfigs,
        fetchGptModels,
        gptModels,
      }}
    >
      {props.children}
    </CustomContext.Provider>
  );
};

export default CustomContextProvider;
