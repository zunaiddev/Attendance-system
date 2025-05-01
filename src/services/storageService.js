function setSettings(settings) {
    localStorage.setItem("settings", JSON.stringify(settings));
}

function getSettings() {
    return JSON.parse(localStorage.getItem("settings"));
}

export {setSettings, getSettings};