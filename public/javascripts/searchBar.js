
const $$ = id => document.getElementById(id);

$$('busqueda').addEventListener('click', e => {
    
    e.preventDefault();
    $$('busqueda').elements[1].value!='' && $$('busqueda').submit()
})

