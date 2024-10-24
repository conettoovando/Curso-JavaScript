/**
 * {
 * url...
 * bucket: amazon s3
 * port: 80
 * }
 */
const config = {
    url: 'https://holamundo.io',
}
function configurarApi(url, bucket = 145, port = 80) {
    // const defaultUrl = url || 'https://holamundo.io'
    return `${url}/${bucket}:${port}`;
}

// console.log(configurarApi())
console.log(configurarApi('https://holamundo.io'))