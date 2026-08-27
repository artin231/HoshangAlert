class Hooshang {
    constructor() {
	this.Icons = {succses:"<i class='fa-regular fa-circle-check kiwngkwnlgn jjjjjfhrehfer'></i>",user:"<i class='fa-regular fa-circle-user kiwngkwnlgn'></i>"};
    }
	    AlHoosh({color, title, message, icon, type, buttonMessage,color_icon}) {
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
	console.log(color_icon)
        document.body.insertAdjacentHTML('afterbegin', NewElement)
	console.log(document.querySelector('.hfuewiooihegeighowhggigwrohgowrhg i'))
	document.querySelector('.hfuewiooihegeighowhggigwrohgowrhg i').style.color = color_icon;
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
