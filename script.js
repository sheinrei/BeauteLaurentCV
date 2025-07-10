
$(function () {
    const competences = $(".detail_competence");
    const profil_text = $(".profil p")
    // mettre chaque div hors champ
    competences.each(function () {
        $(this).css("transform", "translateX(1000px)");
    });

    //Opacity à zero
    $(profil_text).css("opacity", "0")



    //function interval

    //slide les elements vers leurs positions correct
    function slideEntry(element, delay) {
        let posX = 1000;
        setTimeout(() => {
            const interval = setInterval(() => {
                if (posX <= 0) {
                    clearInterval(interval);
                    return;
                }
                posX -= 10;
                $(element).css("transform", `translateX(${posX}px)`);
            }, 10);
        }, delay);
    }


    const opacityUp = (element) => {
        let opacity = 0;

        const handler = setInterval(() => {
            if (opacity > 1) {
                clearInterval(handler);
                return;
            }
            opacity += 0.01;
            $(element).css("opacity", opacity);
        }, 19)

    }


    //init

    function initialisation() {

        //Revele le texte du profil
        opacityUp(profil_text);

        setTimeout(() => {
            // lancer les animations competence avec un décalage entre chaque apparition
            competences.each(function (index) {
                slideEntry(this, index * 500);
            });
        }, 800
        )
    }

    initialisation()

})