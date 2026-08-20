class Hooshang {
    constructor() {

    }
    AlHoosh(color, title, message, icon, type, buttonMessage = 'click me') {
        let NewElement = `
        <div class='hfuewiooihegeighowhggigwrohgowrhg'>
                <div class='ggbhlkfdiughwroihgowehgowehgoihewioghpewhgohwoehgoehgoh hghghghghg${color}' >
                    <h1 class='kiqfngioqehioghqeoihgoehogjeoighoeh'>${title}</h1>
                    <p class='jrwiognrowingorngorwnognorngworogbrogorn'>${message}</p>
                    ${type == 'button' && `<button class="avadiqegoeogeoqgboeb">${buttonMessage}</button>`}
            </div>
        </div>

        `

        document.body.insertAdjacentHTML('afterbegin', NewElement)
        try {
            let btn = document.querySelector('.avadiqegoeogeoqgboeb');
            if (btn) {
                btn.addEventListener('click', () => {
                    let removeEl = document.querySelector('.hfuewiooihegeighowhggigwrohgowrhg');
                    removeEl.remove();
                })
            }
        } catch {

        }


    }
}
let hooshang = new Hooshang();

export default hooshang;