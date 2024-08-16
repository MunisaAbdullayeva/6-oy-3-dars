function addItem() {
    let key = prompt("key kiriting")
    let value = prompt("value kiriting")

    localStorage.setItem(key, value)
}

function getItem() {
    let key = prompt('key yoz')
    localStorage.getItem = prompt(key)
}

function removeItem() {
    let key = prompt('key yoz')
    localStorage.removeItem(key)
}

function clearItems() {
    let key = prompt('key yoz')
    localStorage.clear(key)
}

function leangthItems() {
    let key = prompt('key yoz')
    localStorage.length(key) `  `
}