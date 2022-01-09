window.function = function (url, query) => {
    if (url.value === undefined) {
        return undefined;
    }
    let data = await cache.fetch(url.value.toString());
    if (query.value !== undefined) {
        data = jq.json(data, query.value);
    }

    if (data === null) {
        return undefined;
    }
    if (typeof data === "object" || Array.isArray(data)) {
        return JSON.stringify(data);
    }
    return data;
};
