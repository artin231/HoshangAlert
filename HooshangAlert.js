class Hooshang{
    constructor(){

    }
    AlHoosh(color,title,message,icon){
        let NewElement = `
        <div class='ggbhlkfdiughwroihgowehgowehgoihewioghpewhgohwoehgoehgoh hghghghghg${color}' >
        <h1 class='kiqfngioqehioghqeoihgoehogjeoighoeh'>${title}</h1>
        <p class='jrwiognrowingorngorwnognorngworogbrogorn'>${message}</p>
        </div>
        `
        document.body.insertAdjacentHTML('beforeend', NewElement)
    }
}
let hooshang = new Hooshang();

export default hooshang;