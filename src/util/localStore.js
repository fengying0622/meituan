export default {
    getItem: function (key) {
        let value
        value = localStorage.getItem(key)
        return value
    },

    setItem: function (key, value) {
        localStorage.setItem(key, value)
    }
}