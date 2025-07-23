let storage = {
    saveItem: function (key, value) {
        if (localStorage.getItem("remember") === "true") {
            localStorage.setItem(key, value.toString());
        } else {
            sessionStorage.setItem(key, value.toString());
        }
    },

    getItem: function (key) {
        return localStorage.getItem("remember") === "true"
            ? localStorage.getItem(key)
            : sessionStorage.getItem(key);
    },

    clear: function () {
        localStorage.clear();
        sessionStorage.clear();
    }
}

export default storage;