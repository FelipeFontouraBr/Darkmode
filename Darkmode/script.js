const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")//Checkbox responsável por fazer a alteração, toda mudança vamos aplicar algo

//element que queremos, deixar ele dinamico e vamos pegar o style que queremos
const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = { //vamos pegar as cores iniciais //Objeto com as propriedades exatas do html
    bg: getStyle(html, "--bg"), //colocamos o html e queremos dele o bg(background)
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}  

const changeColors = (colors) => { //um função que recebe colors //aqui precisamos do dark modes e initial mode (cor inicial)

}

checkbox.addEventListener("change", ({target}) => { //Vai ouvir "mudanças-change", sempre que mudar vai rodar uma função padrão
    target.checked ? changeColors() : changeColors() //Se o target tiver marcado, vai passar uma cor de um jeito ou cor de outro jeito
})