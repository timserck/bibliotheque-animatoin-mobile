    $(document).ready(function() {

        console.log("test");

        var profil = $('#button_profil');
        var group = $('#button_group');
        var span = $('#name_categorie');

        var plus = $('#plus');
        var group_check = $('#group');
        var profil_check = $('#profil');

        var back = $('.back');

        var plus_label = $('.plus');
        var main = document.getElementById("main");

        profil.click(function(event) {

            group.removeClass( "label_active" );
            $( this ).addClass( "label_active" );
            span.text("Profil");
            console.log("profil");
            plus.attr('checked', false);
            group_check.attr('checked', false);

            
        });

        group.click(function(event){
            
            profil.removeClass( "label_active" );
            $( this ).addClass( "label_active" );
            span.text("Group");
            console.log("group");
            plus.attr('checked', false);
            profil_check.attr('checked', false);

            

        });

        plus_label.click(function(event){
            if (plus.is(':checked')) {

                $( this ).removeClass( "label_active" );
           
        }
            else{
                
            $( this ).addClass( "label_active" );
            profil.removeClass( "label_active" );
            group.removeClass( "label_active" );
            span.text("Plus");
            }
            
            


    });

        back.click(function(e){
            e.preventDefault();
            group_check.attr('checked', false);
            profil_check.attr('checked', false);
            plus.attr('checked', false);
            span.text("Home");

        });
    });