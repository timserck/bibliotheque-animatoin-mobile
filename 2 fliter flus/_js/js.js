    $(document).ready(function() {

 var my_group = $('.my_group');
 var all = $('.all');
 var suivis = $('.suivis');

        my_group.click(function() {

            all.removeClass( "label_active" );
            suivis.removeClass( "label_active" );

            $( this ).addClass( "label_active" );
            
                       
        });

          suivis.click(function() {

            all.removeClass( "label_active" );
            my_group.removeClass( "label_active" );

            $( this ).addClass( "label_active" );
            
                       
        });

            all.click(function() {

            my_group.removeClass( "label_active" );
            suivis.removeClass( "label_active" );

            $( this ).addClass( "label_active" );
            
                       
        });

    });