import { createStore } from 'vuex'; 
export const store = createStore({ 
    state: {
        pressed: false, 
        loginInfo: {},
        popup: false,
        docPopup: false
    }, 
    mutations: {
        press(state) { 
            state.pressed = !state.pressed;
        },
        login(state, val) { 
            state.loginInfo = val.value;
        }, 
        showPopup(state, val) { 
            state.popup = val;
        }, 
    }, 
    actions: {
        press(context) { 
            context.commit('press');
        },
        login(context) { 
            context.commit('login');
        }, 
        showPopup(context) { 
            context.commit('showpopup')
        }
    }
})
