import { createStore } from 'vuex'; 
export const store = createStore({ 
    state: {
        pressed: false, 
        // page:  'page'
    }, 
    mutations: {
        press(state) { 
            state.pressed = !state.pressed;
        },
        // pageState(state, value ) { 
        //     state.page = value.value;
        // }
    }, 
    actions: {
        press(context) { 
            context.commit('press');
        },
        // pageState(context) { 
        //     context.commit('pageState');
        // }
    }
})
