/*!
 * Orchard CMS Webmoco Responsive No. 1 Theme, by Webmoco
 * http://www.webmoco.com/templates/
 *
 * Acknowledgements: normalize.css, framelessgrid
 *
 * Copyright 2012, Webmoco
 * All rights reserved.
 *
 * This is release under the BSD 2-Clause "Simplified" or "FreeBSD" License (BSD-2-Clause)
 * http://www.opensource.org/licenses/BSD-2-Clause
 *
 * Redistribution and use in source and binary forms, with or without modification, are
 * permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the distribution.
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING,
 * BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 * SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

//Orchard CMS Webmoco Responsive No. 1 Theme, by Webmoco
//http://www.webmoco.com/templates/

//Copyright 2012, Webmoco
//All rights reserved.

//This is release under the BSD 2-Clause "Simplified" or "FreeBSD" License (BSD-2-Clause)
//http://www.opensource.org/licenses/BSD-2-Clause

//Redistribution and use in source and binary forms, with or without modification, are
//permitted provided that the following conditions are met:

//Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
//Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
//THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

var body, masthead;

jQuery(document).ready(function () {
    //showFramelessGrid();              // to use the grid overlay also include the framelessgrid.js file that is commented out in Document.cshtml if you want to use this

    jQuery('html').addClass('js');

    window.onscroll = setMastheadState;

    masthead = jQuery('#masthead');

    jQuery('#menu-main').tinyNav({
        active: 'current'
    });

    jQuery('#welcome-customer').click(function () {
        jQuery('#welcome-flyout').toggle();
    });
});

function setMastheadState() {
    //console.log(jQuery(window).scrollTop());
    if(!masthead.hasClass('low-profile')) {
        if (jQuery(window).scrollTop() !== 0) {
            masthead.addClass('low-profile');
            return;
        } else {
            return;
        }
    } else if (jQuery(window).scrollTop() === 0) {
            masthead.removeClass('low-profile');
    }
}