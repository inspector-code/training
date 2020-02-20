import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '031d4281-28a9-478a-916e-670d0815f524'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },

    getFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },

    getUnFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
};

