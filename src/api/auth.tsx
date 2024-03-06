import axios from 'axios';

export const signUp: any = async (data: any) => {
    return new Promise((resolve, reject) => {
        // axios
        // 	.post(`${PConfig.BACKEND_MAIN}/users/update-profile`, data, {
        // 		headers: {
        // 			Authorization: token,
        // 			'Access-Control-Allow-Origin': '*',
        // 		},
        // 	})
        // 	.then((res) => {
        // 		const data = res.data
        // 		resolve(data)
        // 	})
        // 	.catch((err) => reject(err))
    });
};

export const signIn: any = async (data: any) => {
    return new Promise((resolve, reject) => {
        resolve({ loginSuccess: 'ok!' });
        localStorage.setItem('isLoggedIn', 'true');
        // axios
        // 	.post(`${PConfig.BACKEND_MAIN}/users/update-profile`, data, {
        // 		headers: {
        // 			Authorization: token,
        // 			'Access-Control-Allow-Origin': '*',
        // 		},
        // 	})
        // 	.then((res) => {
        // 		const data = res.data
        // 		resolve(data)
        // 	})
        // 	.catch((err) => reject(err))
    });
};
