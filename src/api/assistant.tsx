import axios from 'axios';
import { AssistantPropI } from '../types/assistant';

export const getGptModels: any = async (data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/assistants/available_models.json`, {
        auth: {
          username: import.meta.env.VITE_USERNAME,
          password: import.meta.env.VITE_BASIC_PASS,
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache',
        },
      })
      .then((res) => {
        const gptModels = [] as any;
        res.data.forEach((item: any) => {
          const model = { value: item.id, label: item.id };
          gptModels.push(model);
        });
        resolve(gptModels);
      })
      .catch((err) => {
        console.log(err, 'res');
      });
  });
};

export const createNewAssistant: any = async (assistant: AssistantPropI, instructions: object) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/assistants.json`,
        {
          assistant: {
            title: assistant.title,
            body: '',
            instructions,
            model: assistant.gptModel,
          },
        },
        {
          auth: {
            username: import.meta.env.VITE_USERNAME,
            password: import.meta.env.VITE_BASIC_PASS,
          },
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache',
          },
        }
      )
      .then((res) => {
        resolve(res.data.id['$oid']);
      })
      .catch((err) => {
        console.log(err, 'res');
      });
  });
};

export const updateWidget: any = async (widgetId: string, asstId: string) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(
        `${import.meta.env.VITE_BASE_URL}/widget_configs/${widgetId}.json`,
        {
          widget_config: {
            assistant_id: asstId,
          },
        },
        {
          auth: {
            username: import.meta.env.VITE_USERNAME,
            password: import.meta.env.VITE_BASIC_PASS,
          },
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache',
          },
        }
      )
      .then((res) => {
        console.log('success');
      })
      .catch((err) => {
        console.log(err, 'res');
      });
  });
};

export const getAssistants: any = async (data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/assistants.json`, {
        auth: {
          username: import.meta.env.VITE_USERNAME,
          password: import.meta.env.VITE_BASIC_PASS,
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache',
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err, 'res');
      });
  });
};

export const getAssistant: any = async (asstId: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/assistants/${asstId}.json`, {
        auth: {
          username: import.meta.env.VITE_USERNAME,
          password: import.meta.env.VITE_BASIC_PASS,
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache',
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err, 'res');
      });
  });
};

export const updateAssistantInstructions: any = async (asstId: string, updatingInstructions: object) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(
        `${import.meta.env.VITE_BASE_URL}/assistants/${asstId}.json`,
        {
          assistant: {
            instructions: updatingInstructions,
          },
        },
        {
          auth: {
            username: import.meta.env.VITE_USERNAME,
            password: import.meta.env.VITE_BASIC_PASS,
          },
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache',
          },
        }
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err, 'res');
      });
  });
};

export const getAssistantFiles: any = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/assistant_files.json`, {
        auth: {
          username: import.meta.env.VITE_USERNAME,
          password: import.meta.env.VITE_BASIC_PASS,
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache',
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err, 'res');
      });
  });
};

export const updateAssistantCommunications: any = async (asstId: string, updatingFlow: object) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(
        `${import.meta.env.VITE_BASE_URL}/assistants/${asstId}.json`,
        {
          communications_flow: {
            ...updatingFlow,
          },
        },
        {
          auth: {
            username: import.meta.env.VITE_USERNAME,
            password: import.meta.env.VITE_BASIC_PASS,
          },
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache',
          },
        }
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err, 'res');
      });
  });
};

export const uploadNewFile: any = async (file: File) => {
  const data = new FormData();
  if (file) {
    data.append('file', file);
  }
  return new Promise((resolve, reject) => {
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/assistant_files.json`, data, {
        auth: {
          username: import.meta.env.VITE_USERNAME,
          password: import.meta.env.VITE_BASIC_PASS,
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache',
        },
      })
      .then((res) => {
        resolve(res.data.id['$oid']);
      })
      .catch((err) => {
        console.log(err, 'res');
      });
  });
};

export const deleteFile: any = async (id: string) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${import.meta.env.VITE_BASE_URL}/assistant_files/${id}.json`, {
        auth: {
          username: import.meta.env.VITE_USERNAME,
          password: import.meta.env.VITE_BASIC_PASS,
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache',
        },
      })
      .then((res) => {
        resolve(res.data.id['$oid']);
      })
      .catch((err) => {
        console.log(err, 'res');
      });
  });
};
