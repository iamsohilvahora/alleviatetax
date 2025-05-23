function heateorSsDetermineWhatsappShareAPI(a){if(a)return-1!=navigator.userAgent.indexOf("Mobi")?"api.whatsapp.com":"web.whatsapp.com";var p=jQuery("i.theChampWhatsappBackground a").attr("href");return void 0!==p?-1!=navigator.userAgent.indexOf("Mobi")?(jQuery("i.theChampWhatsappBackground a").attr("href",p.replace("web.whatsapp.com","api.whatsapp.com")),"api.whatsapp.com"):(jQuery("i.theChampWhatsappBackground a").attr("href",p.replace("api.whatsapp.com","web.whatsapp.com")),"web.whatsapp.com"):""}
/**
 * Show more sharing services popup
 */
function theChampMoreSharingPopup(elem, postUrl, postTitle, twitterTitle){
	var shareContainer = elem.parentElement.parentElement.parentElement;
	postUrl = encodeURIComponent(postUrl);
	concate = '</ul></div><div class="footer-panel"><p></p></div></div>';
	var theChampMoreSharingServices = {
	  facebook: {
		title: "Facebook",
		locale: "en-US",
		redirect_url: "http://www.facebook.com/sharer.php?u=" + postUrl + "&t=" + postTitle + "&v=3",
	  },
	  twitter: {
		title: "Twitter",
		locale: "en-US",
		redirect_url: "http://twitter.com/intent/tweet?text=" + (twitterTitle ? twitterTitle : postTitle) + " " + postUrl,
	  },
	  linkedin: {
		title: "Linkedin",
		locale: "en-US",
		redirect_url: "http://www.linkedin.com/shareArticle?mini=true&url=" + postUrl + "&title=" + postTitle,
	  },
	  parler: {
		title: "Parler",
		locale: "en-US",
		redirect_url: "https://parler.com/new-post?message=" + postTitle + "&url=" + postUrl
	  },
	  pinterest: {
		title: "Pinterest",
		locale: "en-US",
		redirect_url: "https://pinterest.com/pin/create/button/?url=" + postUrl + "&media=${media_link}&description=" + postTitle,
		bookmarklet_url: "javascript:void((function(){var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','//assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)})());"
	  },
	  CopyLink: {
		title: "Copy Link",
		locale: "en-US",
		redirect_url: "",
		bookmarklet_url: ""
	  },
	  Diaspora: {
		title: "Diaspora",
		locale: "en-US",
		redirect_url: "https://joindiaspora.com/bookmarklet?url=" + postUrl + "&title=" + postTitle + "&v=1"
	  },
	  Douban: {
		title: "Douban",
		locale: "en-US",
		redirect_url: "https://www.douban.com/share/service?name="+postTitle+"&href="+postUrl+"&image=&updated=&bm=&url="+postUrl+"&title="+postTitle+"&sel="
	  },
	  Draugiem: {
		title: "Draugiem",
		locale: "en-US",
		redirect_url: "https://www.draugiem.lv/say/ext/add.php?link="+postUrl+"&title="+postTitle
	  },
	  Facebook_Messenger: {
		title: "Facebook Messenger",
		locale: "en-US",
		redirect_url: heateorSsFbMessengerAPI.replace('%encoded_post_url%', postUrl)
	  },
	  Google_Classroom: {
		title: "Google Classroom",
		locale: "en-US",
		redirect_url: "https://classroom.google.com/u/0/share?url="+postUrl
	  },
	  Kik: {
		title: "Kik",
		locale: "en-US",
		redirect_url: "https://www.kik.com/send/article/?app_name=Share&text=&title="+postTitle+"&url="+postUrl
	  },
	  Papaly: {
		title: "Papaly",
		locale: "en-US",
		redirect_url: "https://papaly.com/api/share.html?url="+postUrl+"&title="+postTitle
	  },
	  Refind: {
		title: "Refind",
		locale: "en-US",
		redirect_url: "https://refind.com/?url="+postUrl
	  },
	  Skype: {
		title: "Skype",
		locale: "en-US",
		redirect_url: "https://web.skype.com/share?url="+postUrl
	  },
	  SMS: {
		title: "SMS",
		locale: "en-US",
		bookmarklet_url: "sms://?&body="+postTitle+" "+postUrl
	  },
	  Trello: {
		title: "Trello",
		locale: "en-US",
		redirect_url: "https://trello.com/add-card?mode=popup&url="+postUrl+"&name="+postTitle+"&desc="
	  },
	  Viber: {
		title: "Viber",
		locale: "en-US",
		bookmarklet_url: "viber://forward?text="+postTitle+" "+postUrl
	  },
	  Threema: {
		title: "Threema",
		locale: "en-US",
		bookmarklet_url: "threema://compose?text="+postTitle+" "+postUrl
	  },
	  Telegram: {
		title: "Telegram",
		locale: "en-US",
		redirect_url: "https://telegram.me/share/url?url="+postUrl+"&text="+postTitle
	  },
	  email: {
		title: "Email",
		locale: "en-US",
		redirect_url: "mailto:?subject=" + postTitle + "&body=Link: " + postUrl,
	  },
	  reddit: {
		title: "Reddit",
		locale: "en-US",
		redirect_url: "http://reddit.com/submit?url=" + postUrl + "&title=" + postTitle,
	  },
	  float_it: {
		title: "Float it",
		locale: "en-US",
		redirect_url: "http://www.designfloat.com/submit.php?url=" + postUrl + "&title=" + postTitle,
	  },
	  google_mail: {
		title: "Google Gmail",
		locale: "en-US",
		redirect_url: "https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&su=" + postTitle + "&body=Link: " + postUrl,
	  },
	  gentlereader: {
        title: "GentleReader",
        locale: "en-US",
        redirect_url: "https://app.gentlereader.com/bookmark?url=" + postUrl,
      },
	  google_bookmarks: {
		title: "Google Bookmarks",
		locale: "en-US",
		redirect_url: "http://www.google.com/bookmarks/mark?op=edit&bkmk=" + postUrl + "&title=" + postTitle,
	  },
	  digg: {
		title: "Digg",
		locale: "en-US",
		redirect_url: "http://digg.com/submit?phase=2&url=" + postUrl + "&title=" + postTitle,
	  },
	  printfriendly: {
		title: "PrintFriendly",
		locale: "en-US",
		redirect_url: "http://www.printfriendly.com/print?url=" + postUrl,
	  },
	  print: {
		title: "Print",
		locale: "en-US",
		redirect_url: "http://www.printfriendly.com/print?url=" + postUrl,
		bookmarklet_url: "javascript:window.print();"
	  },
	  tumblr: {
		title: "Tumblr",
		locale: "en-US",
		redirect_url: "https://www.tumblr.com/widgets/share/tool?posttype=link&canonicalUrl=" + postUrl + "&title=" + postTitle + "&caption=",
		bookmarklet_url: "javascript:var d=document,w=window,e=w.getSelection,k=d.getSelection,x=d.selection,s=(e?e():(k)?k():(x?x.createRange().text:0)),f='http://www.tumblr.com/share',l=d.location,e=encodeURIComponent,p='?v=3&u='+e(l.href) +'&t='+e(d.title) +'&s='+e(s),u=f+p;try{if(!/^(.*\\.)?tumblr[^.]*$/.test(l.host))throw(0);tstbklt();}catch(z){a =function(){if(!w.open(u,'t','toolbar=0,resizable=0,status=1,width=450,height=430'))l.href=u;};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else a();}void(0);"
	  },
	  vk: {
		title: "Vkontakte",
		locale: "ru",
		redirect_url: "https://vk.com/share.php?url=" + postUrl + "&title=" + postTitle,
	  },
	  evernote: {
		title: "Evernote",
		locale: "en-US",
		redirect_url: "https://www.evernote.com/clip.action?url=" + postUrl + "&title=" + postTitle,
		bookmarklet_url: "javascript:(function(){EN_CLIP_HOST='http://www.evernote.com';try{var x=document.createElement('SCRIPT');x.type='text/javascript';x.src=EN_CLIP_HOST+'/public/bookmarkClipper.js?'+(new Date().getTime()/100000);document.getElementsByTagName('head')[0].appendChild(x);}catch(e){location.href=EN_CLIP_HOST+'/clip.action?url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title);}})();"
	  },
	  amazon_us_wish_list: {
		title: "Amazon Wish List",
		locale: "en-US",
		redirect_url: "http://www.amazon.com/wishlist/add?u=" + postUrl + "&t=" + postTitle,
		bookmarklet_url: "javascript:(function(){var w=window,l=w.location,d=w.document,s=d.createElement('script'),e=encodeURIComponent,x='undefined',u='http://www.amazon.com/gp/wishlist/add';if(typeof s!='object')l.href=u+'?u='+e(l)+'&t='+e(d.title);function g(){if(d.readyState&&d.readyState!='complete'){setTimeout(g,200);}else{if(typeof AUWLBook==x)s.setAttribute('src',u+'.js?loc='+e(l)),d.body.appendChild(s);function f(){(typeof AUWLBook==x)?setTimeout(f,200):AUWLBook.showPopover();}f();}}g();}())"
	  },
	  wordpress_blog: {
		title: "WordPress",
		locale: "en-US",
		redirect_url: "http://www.addtoany.com/ext/wordpress/press_this?linkurl=" + postUrl + "&linkname=" + postTitle,
	  },
	  whatsapp: {
		title: "Whatsapp",
		locale: "en-US",
		redirect_url: "https://" + heateorSsDetermineWhatsappShareAPI(true) + "/send?text=" + postTitle + " " + postUrl,
	  },
	  diigo: {
		title: "Diigo",
		locale: "en-US",
		redirect_url: "http://www.diigo.com/post?url=" + postUrl + "&title=" + postTitle,
	  },
	  yc_hacker_news: {
		title: "Hacker News",
		locale: "en-US",
		redirect_url: "http://news.ycombinator.com/submitlink?u=" + postUrl + "&t=" + postTitle,
	  },
	  box_net: {
		title: "Box.net",
		locale: "en-US",
		redirect_url: "https://www.box.net/api/1.0/import?url=" + postUrl + "&name=" + postTitle + "&import_as=link",
	  },
	  aol_mail: {
		title: "AOL Mail",
		locale: "en-US",
		redirect_url: "http://webmail.aol.com/25045/aol/en-us/Mail/compose-message.aspx?subject=" + postTitle + "&body=" + postUrl,
	  },
	  yahoo_mail: {
		title: "Yahoo Mail",
		locale: "en-US",
		redirect_url: "http://compose.mail.yahoo.com/?Subject=" + postTitle + "&body=Link: " + postUrl,
	  },
	  instapaper: {
		title: "Instapaper",
		locale: "en-US",
		redirect_url: "http://www.instapaper.com/edit?url=" + postUrl + "&title=" + postTitle,
	  },
	  plurk: {
		title: "Plurk",
		locale: "en-US",
		redirect_url: "http://www.plurk.com/m?content=" + postUrl + "&qualifier=shares",
	  },
	  wanelo: {
		title: "Wanelo",
		locale: "en-US",
		redirect_url: "http://wanelo.com/p/post?bookmarklet=&images%5B%5D=&url=" + postUrl + "&title=" + postTitle + "&price=&shop=",
		bookmarklet_url: "javascript:void ((function(url){if(!window.waneloBookmarklet){var productURL=encodeURIComponent(url),cacheBuster=Math.floor(Math.random()*1e3),element=document.createElement('script');element.setAttribute('src','//wanelo.com/bookmarklet/3/setup?*='+cacheBuster+'&url='+productURL),element.onload=init,element.setAttribute('type','text/javascript'),document.getElementsByTagName('head')[0].appendChild(element)}else init();function init(){window.waneloBookmarklet()}})(window.location.href))"
	  },
	  aim: {
		title: "AIM",
		locale: "en-US",
		redirect_url: "http://share.aim.com/share/?url=" + postUrl + "&title=" + postTitle,
	  },
	  viadeo: {
		title: "Viadeo",
		locale: "en-US",
		redirect_url: "http://www.viadeo.com/shareit/share/?url=" + postUrl + "&title=" + postTitle,
	  },
	  pinboard_in: {
		title: "Pinboard",
		locale: "en-US",
		redirect_url: "http://pinboard.in/add?url=" + postUrl + "&title=" + postTitle,
	  },
	  blogger_post: {
		title: "Blogger Post",
		locale: "en-US",
		redirect_url: "http://www.blogger.com/blog_this.pyra?t=&u=" + postUrl + "&l&n=" + postTitle,
	  },
	  typepad_post: {
		title: "TypePad Post",
		locale: "en-US",
		redirect_url: "http://www.typepad.com/services/quickpost/post?v=2&qp_show=ac&qp_title=" + postTitle + "&qp_href=" + postUrl + "&qp_text=" + postTitle,
	  },
	  buffer: {
		title: "Buffer",
		locale: "en-US",
		redirect_url: "http://bufferapp.com/add?url=" + postUrl + "&text=" + postTitle,
	  },
	  flipboard: {
		title: "Flipboard",
		locale: "en-US",
		redirect_url: "https://share.flipboard.com/bookmarklet/popout?v=2&url=" + postUrl + "&title=" + postTitle,
	  },
	  mail: {
		title: "Email",
		locale: "en-US",
		redirect_url: "mailto:?subject=" + postTitle + "&body=Link: " + postUrl,
	  },
	  pocket: {
		title: "Pocket",
		locale: "en-US",
		redirect_url: "https://readitlaterlist.com/save?url=" + postUrl + "&title=" + postTitle,
	  },
	  fark: {
		title: "Fark",
		locale: "en-US",
		redirect_url: "http://cgi.fark.com/cgi/fark/submit.pl?new_url=" + postUrl,
	  },
	  fintel: {
		title: "Fintel",
		locale: "en-US",
		redirect_url: "https://fintel.io/submit?url=" + postUrl,
	  },
	  yummly: {
		title: "Yummly",
		locale: "en-US",
		redirect_url: "http://www.yummly.com/urb/verify?url=" + postUrl + "&title=" + postTitle,
	  },
	  app_net: {
		title: "App.net",
		locale: "en-US",
		redirect_url: "https://account.app.net/login/",
	  },
	  balatarin: {
		title: "Balatarin",
		locale: "en-US",
		redirect_url: "https://www.balatarin.com/login",
	  },
	  bibSonomy: {
		title: "BibSonomy",
		locale: "en-US",
		redirect_url: "http://www.bibsonomy.org/login",
	  },
	  Bitty_Browser: {
		title: "Bitty Browser",
		locale: "en-US",
		redirect_url: "http://www.bitty.com/manual/?contenttype=&contentvalue=" + postUrl,
	  },
	  Blinklist: {
		title: "Blinklist",
		locale: "en-US",
		redirect_url: "http://blinklist.com/blink?t=" + postTitle + "&d=&u=" + postUrl,
	  },
	  BlogMarks: {
		title: "BlogMarks",
		locale: "en-US",
		redirect_url: "http://blogmarks.net/my/new.php?mini=1&simple=1&title=" + postTitle + "&url=" + postUrl,
	  },
	  Bookmarks_fr: {
		title: "Bookmarks.fr",
		locale: "en-US",
		redirect_url: "http://www.bookmarks.fr/Connexion/?action=add&address=" + postUrl + "&title=" + postTitle,
	  },
	  BuddyMarks: {
		title: "BuddyMarks",
		locale: "en-US",
		redirect_url: "http://buddymarks.com/login.php?bookmark_title=" + postTitle + "&bookmark_url=" + postUrl + "&bookmark_desc=&bookmark_tags=",
	  },
	  Care2_news: {
		title: "Care2 News",
		locale: "en-US",
		redirect_url: "http://www.care2.com/passport/login.html?promoID=10&pg=http://www.care2.com/news/compose?sharehint=news&share[share_type]news&bookmarklet=Y&share[title]=" + postTitle + "&share[link_url]=" + postUrl + "&share[content]=",
	  },
	  CiteULike: {
		title: "Cite U Like",
		locale: "en-US",
		redirect_url: "http://www.citeulike.org/posturl?url=" + postUrl + "&title=" + postTitle,
	  },
	  Diary_Ru: {
		title: "Diary.Ru",
		locale: "en-US",
		redirect_url: "http://www.diary.ru/?newpost&title=" + postTitle + "&text=" + postUrl,
	  },
	  dzone: {
		title: "DZone",
		locale: "en-US",
		redirect_url: "http://www.dzone.com/links/add.html?url=" + postUrl + "&title=" + postTitle,
	  },
	  Folkd: {
		title: "Folkd",
		locale: "en-US",
		redirect_url: "http://www.folkd.com/page/social-bookmarking.html?addurl=" + postUrl,
	  },
	  Hatena: {
		title: "Hatena",
		locale: "en-US",
		redirect_url: "http://b.hatena.ne.jp/bookmarklet?url=" + postUrl + "&btitle=" + postTitle,
	  },
	  Jamespot: {
		title: "Jamespot",
		locale: "en-US",
		redirect_url: "//my.jamespot.com/",
	  },
	  Kakao: {
		title: "Kakao",
		locale: "en-US",
		redirect_url: "https://story.kakao.com/share?url=" + postUrl,
	  },
	  Kindle_It: {
		title: "Kindle_It",
		locale: "en-US",
		redirect_url: "//fivefilters.org/kindle-it/send.php?url=" + postUrl,
	  },
	  Known: {
		title: "Known",
		locale: "en-US",
		redirect_url: "https://withknown.com/share/?url=" + postUrl + "&title=" + postTitle,
	  },
	  Line: {
		title: "Line",
		locale: "en-US",
		redirect_url: "https://social-plugins.line.me/lineit/share?url=" + postUrl,
	  },
	  LiveJournal: {
		title: "LiveJournal",
		locale: "en-US",
		redirect_url: "http://www.livejournal.com/update.bml?subject=" + postTitle + "&event=" + postUrl,
	  },
	  Mail_Ru: {
		title: "Mail.Ru",
		locale: "en-US",
		redirect_url: "https://connect.mail.ru/share?share_url=" + postUrl,
	  },
	  Mendeley: {
		title: "Mendeley",
		locale: "en-US",
		redirect_url: "https://www.mendeley.com/sign-in/",
	  },
	  Meneame: {
		title: "Meneame",
		locale: "en-US",
		redirect_url: "https://www.meneame.net/submit.php?url=" + postUrl,
	  },
	  MeWe: {
		title: "MeWe",
		locale: "en-US",
		redirect_url: "https://mewe.com/share?link=" + postUrl,
	  },
	  Mix: {
		title: "Mix",
		locale: "en-US",
		redirect_url: "https://mix.com/mixit?url=" + postUrl,
	  },
	  Mixi: {
		title: "Mixi",
		locale: "en-US",
		redirect_url: "https://mixi.jp/share.pl?mode=login&u=" + postUrl,
	  },
	  MySpace: {
		title: "MySpace",
		locale: "en-US",
		redirect_url: "https://myspace.com/post?u=" + encodeURIComponent(postUrl) + "&t=" + postTitle + "&l=3&c=" + postTitle,
	  },
	  Netvouz: {
		title: "Netvouz",
		locale: "en-US",
		redirect_url: "http://www.netvouz.com/action/submitBookmark?url=" + postUrl + "&title=" + postTitle + "&popup=no&description=",
	  },
	  Odnoklassniki: {
		title: "Odnoklassniki",
		locale: "en-US",
		redirect_url: "https://connect.ok.ru/dk?cmd=WidgetSharePreview&st.cmd=WidgetSharePreview&st.shareUrl=" + postUrl + "&st.client_id=-1",
	  },
	  Outlook_com: {
		title: "Outlook.com",
		locale: "en-US",
		redirect_url: "https://mail.live.com/default.aspx?rru=compose?subject=" + postTitle + "&body=" + postUrl + "&lc=1033&id=64855&mkt=en-us&cbcxt=mai",
	  },
	  Protopage_Bookmarks: {
		title: "Protopage_Bookmarks",
		locale: "en-US",
		redirect_url: "http://www.protopage.com/add-button-site?url=" + postUrl + "&label=&type=page",
	  },
	  Pusha: {
		title: "Pusha",
		locale: "en-US",
		redirect_url: "//www.pusha.se/posta?url=" + postUrl,
	  },
	  Qzone: {
		title: "Qzone",
		locale: "en-US",
		redirect_url: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + postUrl,
	  },
	  Rediff_MyPage: {
		title: "Rediff MyPage",
		locale: "en-US",
		redirect_url: "//share.rediff.com/bookmark/addbookmark?bookmarkurl=" + postUrl + "&title=" + postTitle,
	  },
	  Renren: {
		title: "Renren",
		locale: "en-US",
		redirect_url: "//www.connect.renren.com/share/sharer?url=" + postUrl + "&title=" + postTitle,
	  },
	  Sina_Weibo: {
		title: "Sina Weibo",
		locale: "en-US",
		redirect_url: "http://service.weibo.com/share/share.php?url=" + postUrl + "&title=" + postTitle,
	  },
	  SiteJot: {
		title: "SiteJot",
		locale: "en-US",
		redirect_url: "http://www.sitejot.com/loginform.php?iSiteAdd=&iSiteDes=",
	  },
	  Slashdot: {
		title: "Slashdot",
		locale: "en-US",
		redirect_url: "//slashdot.org/submission?url=" + postUrl,
	  },
	  StockTwits: {
		title: "StockTwits",
		locale: "en-US",
		redirect_url: "https://stocktwits.com/widgets/share?body=" + postTitle + " " + postUrl,
	  },
	  Svejo: {
		title: "Svejo",
		locale: "en-US",
		redirect_url: "https://svejo.net/story/submit_by_url?url=" + postUrl + "&title=" + postTitle + "&summary=",
	  },
	  Symbaloo_Feeds: {
		title: "Symbaloo_Feeds",
		locale: "en-US",
		redirect_url: "//www.symbaloo.com/",
	  },
	  Tuenti: {
		title: "Tuenti",
		locale: "en-US",
		redirect_url: "https://www.tuenti.com/share?p=b5dd6602&url=" + postUrl,
	  },
	  Twiddla: {
		title: "Twiddla",
		locale: "en-US",
		redirect_url: "//www.twiddla.com/New.aspx?url=" + postUrl + "&title=" + postTitle,
	  },
	  Webnews: {
		title: "Webnews",
		locale: "en-US",
		redirect_url: "//www.webnews.de/login",
	  },
	  Wykop: {
		title: "Wykop",
		locale: "en-US",
		redirect_url: "//www.wykop.pl/dodaj?url=" + postUrl + "&title=" + postTitle,
	  },
	  Xing: {
		title: "Xing",
		locale: "en-US",
		redirect_url: "https://www.xing.com/spi/shares/new?cb=0&url=" + postUrl,
	  },
	  Yoolink: {
		title: "Yoolink",
		locale: "en-US",
		redirect_url: "//yoolink.to/addorshare?url_value=" + postUrl + "&title=" + postTitle,
	  }
	}
	var theChampMoreSharingServicesHtml = '<button id="the_champ_sharing_popup_close" class="close-button separated"><img src="'+ theChampCloseIconPath +'" /></button><div id="the_champ_sharing_more_content" data-href="'+ decodeURIComponent(shareContainer.getAttribute('class').indexOf('the_champ_horizontal_sharing') != -1 ? heateorSsHorSharingShortUrl : heateorSsVerticalSharingShortUrl) +'"><div class="filter"><input type="text" onkeyup="theChampFilterSharing(this.value.trim())" placeholder="'+ heateorSsMoreSharePopupSearchText +'" class="search"></div><div class="all-services"><ul class="mini">';
	for(var i in theChampMoreSharingServices){
		var tempTitle = theChampCapitaliseFirstLetter(theChampMoreSharingServices[i].title.replace(/[_. ]/g, ""));
		theChampMoreSharingServicesHtml += '<li><a rel="nofollow" class="theChamp'+i+'Share" title="'+ theChampMoreSharingServices[i].title +'" alt="'+ theChampMoreSharingServices[i].title +'" ';
		if(theChampMoreSharingServices[i].bookmarklet_url){
			theChampMoreSharingServicesHtml += 'href="' + theChampMoreSharingServices[i].bookmarklet_url + '" ';
		}else if(theChampMoreSharingServices[i].redirect_url){
			theChampMoreSharingServicesHtml += 'onclick="theChampPopup(\'' + theChampMoreSharingServices[i].redirect_url + '\')" href="javascript:void(0)" ';
		}else{
			theChampMoreSharingServicesHtml += 'href="javascript:void(0)" ';
		}
		theChampMoreSharingServicesHtml += '"><i style="width:22px;height:22px" title="'+ theChampMoreSharingServices[i].title +'" class="theChampSharing theChamp' + tempTitle + 'Background"><ss style="display:block;width:100%;height:100%;" class="theChampSharingSvg theChamp' + tempTitle + 'Svg"></ss></i>' + theChampMoreSharingServices[i].title + '</a></li>';
	}
	theChampMoreSharingServicesHtml += concate;
	
	var mainDiv = document.createElement('div');
	mainDiv.innerHTML = theChampMoreSharingServicesHtml;
	mainDiv.setAttribute('id', 'the_champ_sharing_more_providers');
	var bgDiv = document.createElement('div');
	bgDiv.setAttribute('id', 'the_champ_popup_bg');
	jQuery('body').append(mainDiv).append(bgDiv);
	document.getElementById('the_champ_popup_bg').onclick = document.getElementById('the_champ_sharing_popup_close').onclick = function(){
		mainDiv.parentNode.removeChild(mainDiv);
		bgDiv.parentNode.removeChild(bgDiv);
	}
}

if(typeof theChampHorizontalSharingCountEnable == 'undefined'){
	var theChampHorizontalSharingCountEnable = 0;
}
if(typeof theChampVerticalSharingCountEnable == 'undefined'){
	var theChampVerticalSharingCountEnable = 0;
}
if(theChampHorizontalSharingCountEnable || theChampVerticalSharingCountEnable){
	// get sharing counts on window load
	theChampLoadEvent(
		function(){
			// sharing counts
			theChampCallAjax(function(){
				theChampGetSharingCounts();
			});
		}
	);
}
	
/**
 * Search sharing services
 */
function theChampFilterSharing(val) {
	jQuery('ul.mini li a').each(function(){
		if (jQuery(this).text().toLowerCase().indexOf(val.toLowerCase()) != -1) {
			jQuery(this).parent().css('display', 'block');
		} else {
			jQuery(this).parent().css('display', 'none');
		}
	});
};

var heateorSsFacebookTargetUrls = [];

/**
 * Get sharing counts
 */
function theChampGetSharingCounts(){
	var targetUrls = [];
	jQuery('.the_champ_sharing_container').each(function(){
		if(typeof jQuery(this).attr('super-socializer-no-counts') == 'undefined'){
			var currentTargetUrl = jQuery(this).attr('super-socializer-data-href');
			if(currentTargetUrl != null && jQuery.inArray(currentTargetUrl, heateorSsUrlCountFetched) == -1){
				targetUrls.push(currentTargetUrl);
				heateorSsUrlCountFetched.push(currentTargetUrl);
			}
		}
	});
	if(targetUrls.length == 0){
		return;
	}
	jQuery.ajax({
		type: 'GET',
		dataType: 'json',
		url: theChampSharingAjaxUrl,
		data: {
			action: 'the_champ_sharing_count',
			urls: targetUrls,
		},
		success: function(data, textStatus, XMLHttpRequest){
			if(data.status == 1){
				if(data.facebook){
					heateorSsFacebookTargetUrls = data.facebook_urls;
				}
				for(var i in data.message){
					var sharingContainers = jQuery("div[super-socializer-data-href='"+i+"']");

					jQuery(sharingContainers).each(function(){
						var totalCount = 0;
						for(var j in data.message[i]){
							var sharingCount = parseInt(data.message[i][j]) || 0;

							var targetElement = jQuery(this).find('.the_champ_'+j+'_count');
							
							if(jQuery(targetElement).attr('ss_st_count')){
								sharingCount = parseInt(sharingCount) + parseInt(jQuery(targetElement).attr('ss_st_count'));
							}
							totalCount += parseInt(sharingCount);
							if(sharingCount < 1){ continue; }
							jQuery(targetElement).html(theChampCalculateApproxCount(sharingCount)).css({'visibility': 'visible', 'display': 'block'});
							
							if ( ( typeof theChampReduceHorizontalSvgWidth != 'undefined' && jQuery(this).hasClass('the_champ_horizontal_sharing') ) || ( typeof theChampReduceVerticalSvgWidth != 'undefined' && jQuery(this).hasClass('the_champ_vertical_sharing') ) ) {
								jQuery(targetElement).parents('li').find('.theChampSharingSvg').css('float', 'left');
							}
							if ( ( typeof theChampReduceHorizontalSvgHeight != 'undefined' && jQuery(this).hasClass('the_champ_horizontal_sharing') ) || ( typeof theChampReduceVerticalSvgHeight != 'undefined' && jQuery(this).hasClass('the_champ_vertical_sharing') ) ) {
								jQuery(targetElement).parents('li').find('.theChampSharingSvg').css('marginTop', '0');
							}
						}
						var totalCountContainer = jQuery(this).find('.theChampTCBackground');
						jQuery(totalCountContainer).each(function(){
							var containerHeight = jQuery(this).css('height');
							jQuery(this).html('<div class="theChampTotalShareCount" style="font-size: '+ (parseInt(containerHeight) * 62/100) +'px">' + theChampCalculateApproxCount(totalCount) + '</div><div class="theChampTotalShareText" style="font-size: '+ (parseInt(containerHeight) * 38/100) +'px">' + (totalCount == 0 || totalCount > 1 ? heateorSsSharesText : heateorSsShareText) + '</div>').css('visibility', 'visible');
						});
					});
				}
				if(heateorSsFacebookTargetUrls.length != 0){
					theChampFetchFacebookShares(heateorSsFacebookTargetUrls);
				}
			}
		}
	});
}

function theChampFetchFacebookShares(targetUrls){
	var loopCounter = 0;
	for(var i in targetUrls){
		for(var j in targetUrls[i]){
			loopCounter++;
			theChampFBShareJSONCall(targetUrls[i][j], loopCounter, targetUrls[0].length*targetUrls.length, targetUrls[0][j]);
		}
	}
}

function theChampFBShareJSONCall(targetUrl, loopCounter, targetUrlsLength, dataHref) {
	jQuery.getJSON('//graph.facebook.com/?id=' + targetUrl, function(data){
	    if(data.share && data.share.share_count >= 0){
	    	var sharingContainers = jQuery("div[super-socializer-data-href='"+dataHref+"']");

			jQuery(sharingContainers).each(function(){
				var targetElement = jQuery(this).find('.the_champ_facebook_count');
				var facebookBackground = jQuery(this).find('i.theChampFacebookBackground');
				var sharingCount = parseInt(data.share.share_count);

				if(jQuery(targetElement).attr('ss_st_count') !== undefined){
					sharingCount += parseInt(jQuery(targetElement).attr('ss_st_count'));
				}
				if(sharingCount > 0){
					if(typeof jQuery(facebookBackground).attr('heateor-ss-fb-shares') == 'undefined'){
						jQuery(targetElement).html(theChampCalculateApproxCount(sharingCount)).css({'visibility': 'visible', 'display': 'block'});
						jQuery(facebookBackground).attr('heateor-ss-fb-shares', sharingCount);
					}else if(typeof jQuery(facebookBackground).attr('heateor-ss-fb-shares') != 'undefined'){
						var tempShareCount = parseInt(jQuery(facebookBackground).attr('heateor-ss-fb-shares'));
						jQuery(facebookBackground).attr('heateor-ss-fb-shares', sharingCount + tempShareCount);
						jQuery(targetElement).html(theChampCalculateApproxCount(sharingCount + tempShareCount));
					}
					if ( ( typeof theChampReduceHorizontalSvgWidth != 'undefined' && jQuery(this).hasClass('the_champ_horizontal_sharing') ) || ( typeof theChampReduceVerticalSvgWidth != 'undefined' && jQuery(this).hasClass('the_champ_vertical_sharing') ) ) {
						jQuery(targetElement).parents('li').find('.theChampSharingSvg').css('float', 'left');
					}
					if ( ( typeof theChampReduceHorizontalSvgHeight != 'undefined' && jQuery(this).hasClass('the_champ_horizontal_sharing') ) || ( typeof theChampReduceVerticalSvgHeight != 'undefined' && jQuery(this).hasClass('the_champ_vertical_sharing') ) ) {
						jQuery(targetElement).parents('li').find('.theChampSharingSvg').css('marginTop', '0');
					}
					var totalCountContainer = jQuery(this).find('.theChampTCBackground');
					jQuery(totalCountContainer).each(function(){
						var totalShareCountElem = jQuery(this).find('.theChampTotalShareCount');
						var totalShareCount = jQuery(totalShareCountElem).text();
						var newTotalCount = theChampCalculateActualCount(totalShareCount) + sharingCount;
						jQuery(totalShareCountElem).text(theChampCalculateApproxCount(newTotalCount));
						jQuery(this).find('.theChampTotalShareText').text(newTotalCount == 0 || newTotalCount > 1 ? heateorSsSharesText : heateorSsShareText);
					});
				}
			});
		}
		
		if(loopCounter == targetUrlsLength){
			setTimeout(function(){
				var facebookShares = {};
				for(var i in heateorSsFacebookTargetUrls[0]){
					var sharingContainers = jQuery("div[super-socializer-data-href='"+heateorSsFacebookTargetUrls[0][i]+"']");
					jQuery(sharingContainers).each(function(){
						var facebookCountElement = jQuery(this).find('.the_champ_facebook_count');
						var facebookCountElementBg = jQuery(this).find('i.theChampFacebookBackground');
						var shareCountString = typeof jQuery(facebookCountElementBg).attr('heateor-ss-fb-shares') != 'undefined' ? jQuery(facebookCountElementBg).attr('heateor-ss-fb-shares').trim() : '';
						if(shareCountString != ''){
							var shareCount = parseInt(theChampCalculateActualCount(shareCountString));
							if(jQuery(facebookCountElement).attr('ss_st_count') !== undefined){
								var startingCount = parseInt(jQuery(facebookCountElement).attr('ss_st_count').trim());
								shareCount = Math.abs(shareCount - startingCount);
							}
							facebookShares[heateorSsFacebookTargetUrls[0][i]] = shareCount;
							return;
						}
					});
				}
				if(!jQuery.isEmptyObject(facebookShares)){
					theChampSaveFacebookShares(facebookShares);
				}
			}, 1000);
		}
	});
}

function theChampSaveFacebookShares(facebookShares){
	jQuery.ajax({
		type: 'GET',
		dataType: 'json',
		url: theChampSharingAjaxUrl,
		data: {
			action: 'the_champ_save_facebook_shares',
			share_counts: facebookShares,
		},
		success: function(data, textStatus, XMLHttpRequest){}
	});
}

function theChampCalculateApproxCount(sharingCount){
	// round to one decimal
	if(sharingCount > 999 && sharingCount < 10000){
		sharingCount = (Math.round(sharingCount/100))/10 + 'K';
	}else if(sharingCount > 9999 && sharingCount < 100000){
		sharingCount = (Math.round(sharingCount/100))/10 + 'K';
	}else if(sharingCount > 99999 && sharingCount < 1000000){
		sharingCount = (Math.round(sharingCount/100))/10 + 'K';
	}else if(sharingCount > 999999){
		sharingCount = (Math.round(sharingCount/100000))/10 + 'M';
	}
	return sharingCount;
}

function theChampCalculateActualCount(sharingCount){
	if(sharingCount.indexOf('K') > 0){
		sharingCount = sharingCount.replace('K', '') * 1000;
	}else if(sharingCount.indexOf('M') > 0){
		sharingCount = sharingCount.replace('M', '') * 1000000;
	}
	return parseInt(sharingCount);
}

function theChampCapitaliseFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}

jQuery(function(){
	var heateorSsWhatsappJSAPI = heateorSsDetermineWhatsappShareAPI(false);
	var classes = ['the_champ_vertical_sharing', 'the_champ_vertical_counter'];
	for(var i = 0; i < classes.length; i++){
		if(jQuery('.' + classes[i]).length){
			jQuery('.' + classes[i]).each(function(){
				var verticalSharingHtml = jQuery(this).html();
				if(jQuery(this).attr('style').indexOf('right') >= 0){
					var removeClass = 'theChampPushIn', margin = 'Right', alignment = 'right', addClass = 'theChampPullOut';
				}else{
					var removeClass = 'theChampPullOut', margin = 'Left', alignment = 'left', addClass = 'theChampPushIn';
				}
				jQuery(this).html(verticalSharingHtml + '<div title="Hide" style="float:' + alignment + '" onclick="theChampHideSharing(this, \''+ removeClass +'\', \''+ addClass +'\',\'' + margin +'\', \'' + alignment + '\')" class="theChampSharingArrow ' + removeClass + '"></div>');
			});
		}
	}
	if(theChampMobileStickySharingEnabled == 1){
		if(jQuery('div.the_champ_vertical_sharing').length){
			// insert div before </body>
			jQuery(document.body).append("<div class='heateor_ss_mobile_footer'></div>");
		}
	}

	var heateorSsClipboard = new ClipboardJS('.theChampCopyLinkBackground, .theChampCopyLinkShare, .theChampCopyLinkSvg', {
		text: function(trigger) {
			if(jQuery(trigger).hasClass('theChampCopyLinkShare')){
				var element = trigger.parentElement.parentElement.parentElement.parentElement;
				var url = jQuery(element).attr("data-href") || "";
			}else if(jQuery(trigger).hasClass('theChampCopyLinkSvg')){
				var element = trigger.parentElement.parentElement.parentElement.parentElement;
				var url = jQuery(element).attr("super-socializer-data-href") || "";
				if(jQuery(element).hasClass('the_champ_horizontal_sharing') && typeof heateorSsHorSharingShortUrl != undefined){
					var url = heateorSsHorSharingShortUrl;
				}else if(jQuery(element).hasClass('the_champ_vertical_sharing') && typeof heateorSsVerticalSharingShortUrl != undefined){
					var url = heateorSsVerticalSharingShortUrl;
				}
				if(!url){
					var element = trigger.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
					var url = jQuery(element).attr("data-href") || "";
				}
			}
			return url;
		}
	});
	heateorSsClipboard.on('success', function(e) {
	    alert(heateorSsCopyLinkMessage);
	});
});

function theChampHideSharing(elem, removeClass, addClass, margin, alignment){
	var animation = {}, counter = jQuery(elem).parent().hasClass('the_champ_vertical_counter'), offset = parseInt(jQuery(elem).parent().css('width')) + 10 - (counter ? 16 : 0);
	var ssOffset = jQuery(elem).parent().attr('ss-offset');
	if(ssOffset){
		var savedOffset = parseInt(ssOffset);
	}else{
		var savedOffset = (counter ? theChampCounterOffset : theChampSharingOffset);
	}
	if(jQuery(elem).attr('title') == 'Hide'){
		animation[alignment] = "-=" + (offset + savedOffset);
		jQuery(elem).parent().animate(animation, 400, function(){
			jQuery(elem).removeClass(removeClass).addClass(addClass).attr('title', 'Share');
			if(counter){
				var cssFloat = alignment == 'left' ? 'right' : 'left';
				jQuery(elem).css('float', cssFloat);
			}else{
				jQuery(elem).css('margin' + margin, offset + 'px')
			}
		});
	}else{
		animation[alignment] = "+=" + (offset + savedOffset); 
		jQuery(elem).parent().animate(animation, 400, function(){
			jQuery(elem).removeClass(addClass).addClass(removeClass).attr('title', 'Hide');
			if(counter){
				jQuery(elem).css('float', alignment);
			}else{
				jQuery(elem).css('margin' + margin, '0px');
			}
		});
	}
}

/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return o={},r.m=n=[function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var d=n(3),h=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(u=t).addEventListener(s,f),{destroy:function(){u.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,l=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,l)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,l)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,l,u,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(5);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.resolveOptions(t),this.initSelection()}var l=(function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(c,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(t){var e=0<arguments.length&&void 0!==t?t:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),c),u=n(1),s=n.n(u),f=n(2),d=n.n(f),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t};function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var m=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(v,s.a),p(v,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=d()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return b("action",t)}},{key:"defaultTarget",value:function(t){var e=b("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return b("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(t){var e=0<arguments.length&&void 0!==t?t:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),v);function v(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(v.__proto__||Object.getPrototypeOf(v)).call(this));return n.resolveOptions(e),n.listenClick(t),n}function b(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=m}],r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,o});