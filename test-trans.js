const translate = require('google-translate-api-x');

async function run() {
    try {
        const res = await translate('<div class="info">Hola mundo</div>', {to: 'en'});
        console.log(res.text);
    } catch (e) {
        console.error(e);
    }
}
run();
