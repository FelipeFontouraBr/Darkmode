const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")//Checkbox responsável por fazer a alteração, toda mudança vamos aplicar algo

const changeColors = (colors) => { //um função que recebe colors

}

checkbox.addEventListener("change", ({target}) => { //Vai ouvir "mudanças-change", sempre que mudar vai rodar uma função padrão
    target.checked ? changeColors() : changeColors() //Se o target tiver marcado, vai passar uma cor de um jeito ou cor de outro jeito
})