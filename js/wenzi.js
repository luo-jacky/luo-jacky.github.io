var a_idx=0;jQuery(document).ready(function(t){t("body").click(function(a){var o=new Array("富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善"),n=t("<span></span>").text(o[a_idx]);a_idx=(a_idx+1)%o.length;o=a.pageX,a=a.pageY;n.css({"z-index":1e69,top:a-20,left:o,position:"absolute","font-weight":"bold",color:"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}),t("body").append(n),n.animate({top:a-180,opacity:0},1500,function(){n.remove()})})});