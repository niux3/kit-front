import name_config from './libs/config';
import Element from './libs/elements/element';
import '../scss/index.scss';

let hello = name =>{
    console.log(`Salut ${name}`);
}

window.addEventListener('DOMContentLoaded', e =>{
    hello(name_config);
    let $p = document.querySelector('p');

    let el = new Element($p);
});