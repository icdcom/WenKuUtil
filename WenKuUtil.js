(function() {
	var pageCnt = '.reader-page';
	function WenKuUtil() {
        this.rs = '';
		this.pageTxt = {};
        this.init();
	}

	WenKuUtil.prototype = {
		init : function() {
			var ctx = this;
			$(window).on('scroll', function(e){ 
                var pages = $('.reader-page');
                var top = $(window).scrollTop();
                for(var i=0; i < pages.length; i++){
                    var divBottom = $(pages[i]).offset().top + $(pages[i]).outerHeight();
                    if(divBottom <= top && ctx.pageTxt[i] == undefined){
                        var p = $(pages[i]).find('.ie-fix > p');
                        if(p.length >0){
                            ctx.pageTxt[i] = '';
                            for(var j=0; j < p.length; j++){
                                ctx.pageTxt[i] += $(p[j]).html();
                            }
                        }
                    }
                }
            });
		},
        getText : function(){
            var rs = '';
            for(var v in this.pageTxt){
                rs += this.pageTxt[v];
            }
            return rs;
        }
	};

	WenKuUtil.prototype.constructor = WenKuUtil;

	WenKuUtil.enterPrintView = function(rmCtrl) {
		rmCtrl = (rmCtrl == undefined ? true : rmCtrl);
		$('.aside').remove();
		$('#doc #hd').remove();
		$('.crubms-wrap').remove();
		$('.user-bar').remove();
		$('#doc-header').remove();
		$('.reader-tools-bar-wrap').remove();
		$('.fix-searchbar-wrap').remove();
		$('#bottom-doc-list-8').remove();
		$('.ft').remove();
		$('#ft').remove();
		$('#docBubble').remove();
		$('body').attr('margin', 'auto');
		$('.banner-wrap').remove();
		$('.doc-reader > span').remove();
		$('#doc-header-test').remove();
		$('.wk-other-new-cntent').remove();
		$('.pay-page-mod .inner').remove();
		$('.ft').remove();
		$('#ft').remove();

		if (rmCtrl) {
			$('.reader-fullScreen').remove();
			$('.pageList-btn').remove();
			$('#next_doc_box').remove();
			$('#html-reader-go-more').remove();
		}

		$('*').css('border', 0);
		$('.bd-wrap').css('width', '100 %');
		$('.body-v3').css('width', '100 %');
		$('.main').css('margin', 0);
		$('.main').css('width', '100  %');
		$('.doc-main').css('width', '100  %');
		$('.inner').css('width', '100 %');
		$('#reader-container-1').css('width', '100  %');
		$('.reader-page').css('margin', 0);
	};

	window['WenKuUtil'] = WenKuUtil;
})();

var wenkuutil = new WenKuUtil();