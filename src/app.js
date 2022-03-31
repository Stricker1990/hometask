import { getBranches } from "./services/microsoft-app-center.service.js";

export function run() {
    console.log('Started!');
    getBranches('stricker-fer-yandex.ru', 'TestKotlin')
        .then(value => console.log(value.data))
        .catch(err => console.error(err));
}