import axios from 'axios';


export const getWidgetConfigs: any = async (data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/widget_configs.json`, {
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

export const updateWidgetColor: any = async (data: any) => {
  return new Promise((resolve, reject) => {
    console.log('updatingdata', data);
    axios
      .patch(
        `${import.meta.env.VITE_BASE_URL}/widget_configs/${data.widgetId}.json`,
        {
          widget_config: {
            [data.type]: data.color,
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
