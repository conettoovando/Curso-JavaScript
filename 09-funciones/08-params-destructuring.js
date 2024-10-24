const config = {
    url: 'https://holamundo.io',
    direccion: {
        calle: 'hola mundo',
        numero: 80,
    }
}
function webserver({ url, ...rest}) {
    // const {url} = config;
    console.log(rest)
    return url
}

console.log(webserver(config));