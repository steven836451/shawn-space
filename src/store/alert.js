export default {
    namespaced: true,
    state: {
        messages: []
    },
    actions: {
        updateMessage(context, { message, status }) {
            const timestamp = Math.floor(new Date() / 1000);
            const data = {
                message,
                status,
                timestamp
            }
            context.commit('PUSHMESSAGE', data);
            context.commit('removeMessageWithTiming', timestamp);
        },
        
    },
    mutations: {
        PUSHMESSAGE(state, payload) {
            state.messages.push(payload);
        },
        removeMessageWithTiming(state,timestamp) {
            setTimeout(() => {
                state.messages.forEach((item, i) => {
                    if (item.timestamp === timestamp) {
                        state.messages.splice(i, 1);
                    }
                });
            }, 2000);
        },
        removeMessage(state) {
            state.messages.splice(0, 1);
          },
    },
    getters: {
        messages: (state) => state.messages,
    }
}