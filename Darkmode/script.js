const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")//Checkbox responsável por fazer a alteração, toda mudança vamos aplicar algo

const initialColors = { //vamos pegar as cores iniciais
    bg: window.getComputedStyle(html).getPropertyValue("--bg")//pegar esse estilo do css
}  

const changeColors = (colors) => { //um função que recebe colors //aqui precisamos do dark modes e initial mode (cor inicial)

}

checkbox.addEventListener("change", ({target}) => { //Vai ouvir "mudanças-change", sempre que mudar vai rodar uma função padrão
    target.checked ? changeColors() : changeColors() //Se o target tiver marcado, vai passar uma cor de um jeito ou cor de outro jeito
})