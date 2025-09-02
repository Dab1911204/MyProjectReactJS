const API_DOMAIN = 'http://localhost:3002/'

export const get = async (path) => {
    const response = await fetch(API_DOMAIN + path)
    const data = await response.json()
    return data
}

export const post = async (path, data) => {
    const response = await fetch(API_DOMAIN + path, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    const result = response.json();
    return result;
}

export const patch = async (path, data,id) => {
    const response = await fetch(`${API_DOMAIN}${path}/${id}`, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    const result = await response.json();
    return result;
}

export const del = async (path,id) => {
    const response = await fetch(`${API_DOMAIN}${path}/${id}`, {
        method: "DELETE",
    })
    const result = await response.json();
    return result;
}