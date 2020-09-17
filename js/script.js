// Facciamo una chiamata ajax all'api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L'api ci restituirà decina di dischi musicali che dovremo stampare a schermo con Handlebars.
// Concentratevi sulla parte JS per la grafica potrete utilizzare il layout che troverete al seguente link
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout/downloads/
// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.

$(document).ready(function() {
  








    $.ajax(
        {
            url: "https://flynn.boolean.careers/exercises/api/array/music",
            method: "GET",
            success: function (data) {
                var results = data.response;
                
                var source =$("#entry-template").html();
                var template = Handlebars.compile(source);
            
                
                console.log(results);
                for(var i=0; i<results.length; i++) {
                    
                    //correggo foto n.2 perchè non raggiungibile      
                    results[1].poster = "img/logo.png"

                    var html = template(results[i]);
                    
                    $(".cds-container").append(html);
                    
                }
                
                
            },
            error: function (error) {
                alert("E' avvenuto un errore.");
            }
        }
        );    
    
});



function selectGenre () {
    var option = $("#genre").val();
    
    if ( option == "all" ) {
        $(".cd").show();
    } else if ( option == "pop" ) {
        $(".cd").hide();
        $(".Pop").show();
    } else if ( option == "rock" ) {
        $(".cd").hide();
        $(".Rock").show();
    } else if ( option == "metal" ) {
        $(".cd").hide();
        $(".Metal").show();
    } else if ( option == "jazz" ) {
        $(".cd").hide();
        $(".Jazz").show();
    }

}