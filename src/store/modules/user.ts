import { defineStore } from 'pinia';
import { reqLogin } from '@/api/user';
import type { loginForm } from '@/api/user/type';
import type { UserState } from './types/type';

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: localStorage.getItem("TOKEN"),
    }
  },
  actions: {
    async userLogin(data: loginForm) {
      const result = await reqLogin(data);
      if (result.code == 200) {
        this.token = result.data;
        // 本地存一份
        localStorage.setItem("TOKEN", result.data);
        return 'ok';
      } else {
        return Promise.reject(new Error(result.message));
      }
    }
  },
  getters: {

  }
})

export default useUserStore;