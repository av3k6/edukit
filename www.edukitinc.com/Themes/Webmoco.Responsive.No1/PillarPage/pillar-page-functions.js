jQuery(function($) {

    window.onresize = checkSize;

    // Details jQuery
    var infoDetails = $(".school-supplies-overview .information");
    var infoTabs = $(".more-info .link")
    $( infoTabs ).click(function() {
        infoDetails.removeClass("opened");
        infoTabs.removeClass("active arrow");
        if ( $(this).is($(".school-shopping"))) {
            $(".more-info .link.school-shopping").addClass("arrow");
            $(".more-info .link.school-supply-kit").addClass("active");
            $(".school-shopping-info.information").addClass("opened");
        } else if ( $(this).is($(".school-supply-kit"))) {
            $(".more-info .link.school-supply-kit").addClass("arrow");
            $(".more-info .link.school-shopping").addClass("active");
            $(".supply-kit-info.information").addClass("opened");
        } else if ( $(this).is($(".parents"))) {
            $(".more-info .link.parents").addClass("arrow");
            $(".parents-info.information").addClass("opened");
        } else if ( $(this).is($(".schools"))) {
            $(".more-info .link.schools").addClass("arrow");
            $(".schools-info.information").addClass("opened");
        } else if ( $(this).is($(".remote"))) {
            $(".more-info .link.remote").addClass("arrow");
            $(".remote-learning-info.information").addClass("opened");
        }
    });
    // Edukit Program Schools jQuery
    var ctaDetails = $(".edukit-program-schools .col > div");
    var ctaTabs = $(".child-school .section-titles");
    $( ctaTabs ).click(function() {
    ctaTabs.removeClass("active arrow purple");
    ctaDetails.removeClass("opened");
        if ( $(this).is($(".parents"))) {
            $(".section-titles.parents").addClass("purple arrow active");
            $(".childs-classroom.information").addClass("opened");
        }else if ( $(this).is($(".schools"))) {
            $(".section-titles.schools").addClass("purple arrow active");
            $(".school-program.information").addClass("opened");
        }
    });
    
    function checkSize() {
        if($(window).width() >= 992) {
            $(".school-supplies-overview .section-titles.purple").addClass("border");
            $( infoTabs ).click(function() {
                $(".section-titles").removeClass("border");
                if ( $(this).is($(".school-shopping"))) {
                    $(".section-titles.purple").addClass("border");
                } else if ( $(this).is($(".school-supply-kit"))) {
                    $(".section-titles.purple").addClass("border");
                } else if ( $(this).is($(".parents"))) {
                    $(".section-titles.blue").addClass("border");
                } else if ( $(this).is($(".schools"))) {
                    $(".section-titles.teal").addClass("border");
            } else if ( $(this).is($(".remote"))) {
                    $(".section-titles.orange").addClass("border");
                }
            });
        }
        if($(window).width() <= 992) {
            $(".supply-kit-info.information").insertAfter(".school-supplies-overview .section-titles.purple");
            $(".school-shopping-info.information").insertAfter(".school-supplies-overview .section-titles.purple");
            $(".parents-info.information").insertAfter(".school-supplies-overview .section-titles.blue");
            $(".schools-info.information").insertAfter(".school-supplies-overview .section-titles.teal");
            $(".remote-learning-info.information").insertAfter(".school-supplies-overview .section-titles.orange");
            $(".childs-classroom.information").insertAfter(".edukit-program-schools .section-titles.parents");
            $(".school-program.information").insertAfter(".edukit-program-schools .section-titles.schools");
        }
        if($(window).width() > 992) {
            $(".supply-kit-info.information").appendTo(".school-supplies-overview .col-md-8.information-display");
            $(".school-shopping-info.information").appendTo(".school-supplies-overview .col-md-8.information-display");
            $(".parents-info.information").appendTo(".school-supplies-overview .col-md-8.information-display");
            $(".schools-info.information").appendTo(".school-supplies-overview .col-md-8.information-display");
            $(".parents-info.information.full").appendTo(".school-supplies-overview .col-xs-12.information-display");
            $(".schools-info.information.full").appendTo(".school-supplies-overview .col-xs-12.information-display");
            $(".remote-learning-info.information").appendTo(".school-supplies-overview .col-md-8.information-display");
            $(".childs-classroom.information").appendTo(".edukit-program-schools .col-md-8.program-details");
            $(".school-program.information").appendTo(".edukit-program-schools .col-md-8.program-details");
        }
    }
    if($(window).width() <= 992) {
        $(".supply-kit-info.information").insertAfter(".school-supplies-overview .section-titles.purple");
        $(".school-shopping-info.information").insertAfter(".school-supplies-overview .section-titles.purple");
        $(".parents-info.information").insertAfter(".school-supplies-overview .section-titles.blue");
        $(".schools-info.information").insertAfter(".school-supplies-overview .section-titles.teal");
        $(".remote-learning-info.information").insertAfter(".school-supplies-overview .section-titles.orange");
        $(".childs-classroom.information").insertAfter(".edukit-program-schools .section-titles.parents");
        $(".school-program.information").insertAfter(".edukit-program-schools .section-titles.schools");
    }
    if($(window).width() > 992) {
        $(".supply-kit-info.information").appendTo(".school-supplies-overview .col-md-8.information-display");
        $(".school-shopping-info.information").appendTo(".school-supplies-overview .col-md-8.information-display");
        $(".parents-info.information").appendTo(".school-supplies-overview .col-md-8.information-display");
        $(".schools-info.information").appendTo(".school-supplies-overview .col-md-8.information-display");
        $(".parents-info.information.full").appendTo(".school-supplies-overview .col-xs-12.information-display");
        $(".schools-info.information.full").appendTo(".school-supplies-overview .col-xs-12.information-display");
        $(".remote-learning-info.information").appendTo(".school-supplies-overview .col-md-8.information-display");
        $(".childs-classroom.information").appendTo(".edukit-program-schools .col-md-8.program-details");
        $(".school-program.information").appendTo(".edukit-program-schools .col-md-8.program-details");
    }
});