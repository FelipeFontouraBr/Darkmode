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

//Darkmode:
const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5"
} 

//Lógica: 
const changeColors = (colors) => { //um função que recebe colors //aqui precisamos do dark modes e initial mode (cor inicial)
//aqui fazemos a alteração do html //Transformamos cada chave do objeto(const inicitalColors) nos nomes (--bg-panel, --color-headings etc)
//1ª todos as cores que queremos, portanto mapear um objeto:
Object.keys(colors).map()//vou pegar as chaves das cores e fazer um map passando a chave e vai retornar algo:
    html.style.setProperty("--bg", "#333333")//vamos mexer no style do HTML e setar a propriedade que queremos mudar o background
}

checkbox.addEventListener("change", ({target}) => { //Vai ouvir "mudanças-change", sempre que mudar vai rodar uma função padrão
    target.checked ? changeColors(darkMode) : changeColors(initialColors) //Se o target tiver marcado, vai passar uma cor de um jeito ou cor de outro jeito //Quando ele estiver chacked vai ser darkMode e quando não estiver vai ser light
})