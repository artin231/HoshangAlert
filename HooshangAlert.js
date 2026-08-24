class Hooshang {
    constructor() {
	this.Icons = {succses:"<i class='fa-regular fa-square-check' id='grwhrwhwhhrfhrehkrejhprejhprjhpj'></i>"};
    }
    AlHoosh(color, title, message, icon, type, buttonMessage = 'click me') {
        let NewElement = `
        <div class='hfuewiooihegeighowhggigwrohgowrhg'>
                <div class='ggbhlkfdiughwroihgowehgowehgoihewioghpewhgohwoehgoehgoh hghghghghg${color}' >
			${icon}
                    	<h1 class='kiqfngioqehioghqeoihgoehogjeoighoeh'>${title}</h1>
                    	<p class='jrwiognrowingorngorwnognorngworogbrogorn'>${message}</p>
                    	${type == 'button' && `<button class="avadiqegoeogeoqgboeb">${buttonMessage}</button>`}
            </div>
        </div>

        `

        document.body.insertAdjacentHTML('afterbegin', NewElement)
        let MainEl = document.querySelector('.hfuewiooihegeighowhggigwrohgowrhg');
        let AlertEl = document.querySelector('.ggbhlkfdiughwroihgowehgowehgoihewioghpewhgohwoehgoehgoh');
        setTimeout(() => {
            AlertEl.classList.add('showEvent');
        }, 100)
        try {
            let btn = document.querySelector('.avadiqegoeogeoqgboeb');
            if (btn) {
                btn.addEventListener('click', () => {
                    AlertEl.classList.remove('showEvent');
                    setTimeout(() => {
                        MainEl.remove();

                    }, 500)
                })
            }
        } catch {

        }


    }
}
let hooshang = new Hooshang();

export default hooshang;
