import { createStore } from 'vuex'; 
export const store = createStore({ 
    state: {
        pressed: false, 
        loginInfo: {},
    }, 
    mutations: {
        press(state) { 
            state.pressed = !state.pressed;
        },
        login(state, val) { 
            state.loginInfo = val.value;
        }
    }, 
    actions: {
        press(context) { 
            context.commit('press');
        },
        login(context) { 
            context.commit('login');
        }
    }
})
