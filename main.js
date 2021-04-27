(()=>{"use strict";function e(){let e=document.getElementById("homeTitle"),t=document.getElementById("homeBody"),n=document.getElementById("est");menu.style.opacity="0%",menuInitial.style.opacity="0%",menuNav.style.opacity="0%",lunchToggle.style.opacity="0%",dinnerToggle.style.opacity="0%",setTimeout((function(){e.style.display="",t.style.display="",n.style.display="",menu.style.display="none",menuInitial.style.display="none",menuNav.style.display="none",lunchToggle.style.display="none",dinnerToggle.style.display="none"}),900)}!function(){let e=document.getElementById("content"),t=document.createElement("nav"),n=document.createElement("div"),l=document.createElement("div"),a=document.createElement("h1"),d=document.createElement("p"),i=document.createElement("p"),o=document.createTextNode("Marco's"),s=document.createTextNode("Italian home cooking. No frills, no pretence,\n        just traditional dishes from the heart of Tuscany. Take your time, open some wine. \n        This is Marco's."),m=document.createTextNode("Est. 1976"),c=document.createElement("div"),u=document.createElement("a"),y=document.createElement("a"),p=document.createElement("a"),r=document.createTextNode("Home"),g=document.createTextNode("Menu"),h=document.createTextNode("Contact"),T=document.createElement("div"),E=document.createElement("div"),I=document.createElement("div"),B=document.createElement("div"),N=document.createElement("div"),f=document.createElement("div"),x=document.createElement("div"),C=document.createTextNode(""),L=document.createTextNode("");f.innerHTML="Lunch<br/>12-2",x.innerHTML="Dinner<br/>6-9";let v=document.createElement("div"),k=document.createElement("div"),M=document.createElement("div"),b=document.createElement("div"),H=document.createElement("div"),w=document.createElement("div"),j=document.createTextNode(""),D=document.createTextNode(""),F=document.createTextNode(""),P=document.createTextNode(""),R=document.createTextNode(""),S=document.createTextNode("");u.id="homeLinkButton",y.id="menuLinkButton",p.id="contactLinkButton",l.id="textBox",n.id="main",a.id="homeTitle",d.id="homeBody",i.id="est",f.id="initialLunch",x.id="initialDinner",T.id="menuInitial",f.id="initialLunch",x.id="initialDinner",E.id="menuNav",I.id="lunchToggle",B.id="dinnerToggle",N.id="menu",v.id="menuItem1",k.id="menuItem2",M.id="menuItem3",b.id="menuItem4",H.id="menuItem5",w.id="menuItem6",t.className="navBar",c.className="navMenu",u.className="navLink",y.className="navLink",p.className="navLink",n.className="main",l.className="textBox",a.className="homeTitle",d.className="homeBody",i.className="est",T.className="menuInitial",f.className="initialTitle",x.className="initialTitle",E.className="menuNav",I.className="menuToggle",B.className="menuToggle",N.className="menu",v.className="menuItem",k.className="menuItem",M.className="menuItem",b.className="menuItem",H.className="menuItem",w.className="menuItem",T.style.display="none",E.style.display="none",I.style.display="none",B.style.display="none",N.style.display="none",l.appendChild(T),l.appendChild(E),E.appendChild(I),E.appendChild(B),l.appendChild(N),N.appendChild(v),N.appendChild(k),N.appendChild(M),N.appendChild(b),N.appendChild(H),N.appendChild(w),v.appendChild(j),k.appendChild(D),M.appendChild(F),b.appendChild(P),H.appendChild(R),w.appendChild(S),u.appendChild(r),y.appendChild(g),p.appendChild(h),e.appendChild(t),e.appendChild(n),n.appendChild(l),l.appendChild(a),l.appendChild(d),l.appendChild(i),a.appendChild(o),d.appendChild(s),i.appendChild(m),t.appendChild(c),c.appendChild(u),c.appendChild(y),c.appendChild(p),T.appendChild(f),T.appendChild(x),f.appendChild(C),x.appendChild(L)}(),document.getElementById("contactLinkButton").addEventListener("click",(function(){e(),function(){document.getElementById("content").style.backgroundImage="url('./dist/Images/Contact.jpeg')";let e=document.getElementById("homeTitle"),t=document.getElementById("homeBody"),n=document.getElementById("est"),l=document.getElementById("textBox"),a=document.getElementById("main");l.style.opacity="0%",setTimeout((function(){l.className="textBoxContact",l.style.opacity="100%",a.style.justifyContent="center",e.className="contactTitle",t.className="contactBody",n.className="contactEst",e.innerHTML="Contact",t.innerHTML="Telephone: 0123456789<br/>Email: marcositalian@fakeemail.com<br/><br/>Address:<br/> 123 Real Road<br/>City<br/>Postcode<br/>Country",n.innerHTML=""}),900)}()})),document.getElementById("menuLinkButton").addEventListener("click",(function(){!function(){document.querySelectorAll(".initialTitle");let e=document.getElementById("menuInitial"),t=document.getElementById("menuNav"),n=document.getElementById("lunchToggle"),l=document.getElementById("dinnerToggle"),a=document.getElementById("initialLunch"),d=document.getElementById("initialDinner"),i=document.getElementById("menu"),o=document.getElementById("menuItem1"),s=document.getElementById("menuItem2"),m=document.getElementById("menuItem3"),c=document.getElementById("menuItem4"),u=document.getElementById("menuItem5"),y=document.getElementById("menuItem6");a.addEventListener("click",E),d.addEventListener("click",I),document.getElementById("content").style.backgroundImage="url('./dist/Images/Menu.jpeg')";let p=document.getElementById("textBox");p.style.opacity="0%",t.style.display="none",i.style.display="none";let r=document.getElementById("main"),g=document.getElementById("homeTitle"),h=document.getElementById("homeBody"),T=document.getElementById("est");function E(){e.style.display="none",p.className="textBoxMenu",n.style.display="flex",l.style.display="flex",g.style.display="flex",g.className="menuTitle",g.style.opacity="0%",i.style.opacity="0%",setTimeout((function(){g.innerHTML="Lunch: 12-2",g.style.opacity="100%",i.style.opacity="100%",t.style.opacity="100%",t.style.display="flex",n.style.opacity="100%",l.style.opacity="100%",i.style.display="grid",o.style.display="flex",s.style.display="flex",m.style.display="flex",c.style.display="flex",u.style.display="none",y.style.display="none",o.innerHTML="<u>Panzanella</u>Bread soaked in water and vinegar, and dressed with fresh onions, basil, tomatoes, and cucumber",s.innerHTML="<u>Fagioli all’uccelletto</u>Beans cooked with sage, garlic, olive oil, and tomatoes",m.innerHTML="<u>Ribolita</u>Bean and kale soup served with toasted bread",c.innerHTML="<u>Torta di ceci</u>Chickpea flour cake with grilled aubergine",u.innerHTML="",y.innerHTML="",n.style.backgroundColor="rgb(231, 245, 155)",l.style.backgroundColor=""}),300),B()}function I(){e.style.display="none",p.className="textBoxMenu",l.style.display="flex",n.style.display="flex",g.style.display="flex",g.className="menuTitle",g.style.opacity="0%",i.style.opacity="0%",setTimeout((function(){g.innerHTML="Dinner: 6-9",g.style.opacity="100%",i.style.opacity="100%",t.style.opacity="100%",t.style.display="flex",n.style.opacity="100%",l.style.opacity="100%",i.style.display="grid",o.style.display="flex",s.style.display="flex",m.style.display="flex",c.style.display="flex",u.style.display="flex",y.style.display="flex",o.innerHTML="<u>Cacciucco alla Livornese</u>Stew made with octopus, squid, clams, mussels and monkfish",s.innerHTML="<u>Potato tortelli</u>Fresh pasta filled with game meat sauce",m.innerHTML="<u>Spezzatino</u>Slow-cooked stew prepared with cuts of the day",c.innerHTML="<u>Pappardelle al cinghiale</u>Fresh pasta with wild boar ragu",u.innerHTML="<u>Bistecca alla Fiorentina</u>Dry-aged beef steak with side salad",y.innerHTML="<u>Faraona arrosto</u>Roasted guinea-fowl served with chicory in olive oil and garlic",l.style.backgroundColor="rgb(231, 245, 155)",n.style.backgroundColor=""}),300),B()}function B(){n.addEventListener("click",E),l.addEventListener("click",I)}g.style.display="none",h.style.display="none",T.style.display="none",setTimeout((function(){p.className="textBoxMenuInitial",p.style.opacity="100%",r.style.justifyContent="center",e.style.opacity="100%",e.style.display="flex"}),900)}()})),document.getElementById("homeLinkButton").addEventListener("click",(function(){e(),function(){let e=document.getElementById("content"),t=document.getElementById("textBox"),n=document.getElementById("homeTitle"),l=document.getElementById("homeBody"),a=document.getElementById("est"),d=document.getElementById("main");t.style.opacity="0%",e.style.backgroundImage="url('./dist/Images/Homepage.jpeg')",setTimeout((function(){t.className="textBox",t.style.opacity="100%",n.className="homeTitle",l.className="homeBody",a.className="est",t.style.opacity="100%",d.style.justifyContent="flex-end",n.innerHTML="Marco's",l.innerHTML="Italian home cooking. No frills, no pretence,\n        just traditional dishes from the heart of Tuscany. Take your time, open some wine. \n        This is Marco's.",a.innerHTML="Est. 1976"}),900)}()}))})();