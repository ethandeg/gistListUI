const state = () => ({
    token: null
})

const getters = {
    isLoggedIn(state) {
        return !!state.token;
    }
}