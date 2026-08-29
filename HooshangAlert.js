class Hooshang {
    constructor() {
	    this.Icons = {succses:"<i class='fa-regular fa-circle-check kiwngkwnlgn jjjjjfhrehfer'></i>",user:"<i class='fa-regular fa-circle-user kiwngkwnlgn'></i>",alert:"<i class='fa-solid fa-circle-exclamation'></i>"};
    }
	    AlHoosh({theme, title, message, icon, type, buttonMessage,color_icon}) {
		    console.log(theme)
		    if(theme=="dark"){
			    document.querySelector(":root").style.setProperty("--box_color","#2F3032");
			    document.querySelector(":root").style.setProperty("--color_g","white");
			    document.querySelector(":root").style.setProperty("--border","white");
		    }
		    else if(theme == "ligth"){
			    console.log(11111)
                            document.querySelector(":root").style.setProperty("--box_color","#F5F5F5");
			    document.querySelector(":root").style.setProperty("--color_g","black");
			    document.querySelector(":root").style.setProperty("--border","black");
	     	   }if(theme !== "light" && theme !== "dark"){
			   console.error("the theme is not is not found please enter a correct theme.");
		   }
        let NewElement = `
        <div class='hfuewiooihegeighowhggigwrohgowrhg'>
                <div class='ggbhlkfdiughwroihgowehgowehgoihewioghpewhgohwoehgoehgoh ' >
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
