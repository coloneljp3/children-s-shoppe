'use strict'
const mysql = require('mysql2');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const serverless = require('serverless-http');
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/',(req,res)=>{
res.send(`


<!doctype html>
<html lang="en">
	<head>

		<meta charset="utf-8" />
		<meta name="description" content="A Children&#39;s boutique with a curated collection of the best for baby and child, specializing in timeless classics, play, layette and gifts." />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		

		<link rel="canonical" href="https://thefrillyfrog.com/" />
		<link rel="shortcut icon" href="//thefrillyfrog.com/cdn/shop/t/48/assets/favicon_transparent.png?v=92374346313299296431727202577" type="image/png" />

		<title>Children&#39;s Boutique | The Frilly Frog, Greenwood, SC</title>

		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Overpass:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="https://use.typekit.net/lup1gio.css">
		<link href="//thefrillyfrog.com/cdn/shop/t/48/assets/styles.css?v=6638855580338937781727230967" rel="stylesheet" type="text/css" media="all" />
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>

		
			<link href="//thefrillyfrog.com/cdn/shop/t/48/assets/slick.css?v=98340474046176884051727202577" rel="stylesheet" type="text/css" media="all" />
		

		

<meta property="og:site_name" content="The Frilly Frog">
<meta property="og:url" content="https://thefrillyfrog.com/">
<meta property="og:title" content="Children&#39;s Boutique | The Frilly Frog, Greenwood, SC">
<meta property="og:type" content="website">
<meta property="og:description" content="A Children&#39;s boutique with a curated collection of the best for baby and child, specializing in timeless classics, play, layette and gifts."><meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Children&#39;s Boutique | The Frilly Frog, Greenwood, SC">
<meta name="twitter:description" content="A Children&#39;s boutique with a curated collection of the best for baby and child, specializing in timeless classics, play, layette and gifts.">

<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "The Frilly Frog",
    "logo": "https:\/\/thefrillyfrog.com\/cdn\/shop\/t\/48\/assets\/logo.png?v=99494972473028420121727202577",
    "sameAs": [
      "https:\/\/www.instagram.com\/thefrillyfrog\/",
      "https:\/\/www.facebook.com\/thefrillyfrog"
    ],
    "url": "https:\/\/thefrillyfrog.com"
  }
</script>
  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": "The Frilly Frog",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https:\/\/thefrillyfrog.com\/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "url": "https:\/\/thefrillyfrog.com"
    }
  </script>

		<script>window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.start');</script><meta id="shopify-digital-wallet" name="shopify-digital-wallet" content="/7029397/digital_wallets/dialog">
<meta name="shopify-checkout-api-token" content="cbb1b0dc0595cf5b7699c2efdc9d6803">
<meta id="in-context-paypal-metadata" data-shop-id="7029397" data-venmo-supported="true" data-environment="production" data-locale="en_US" data-paypal-v4="true" data-currency="USD">
<script async="async" src="/checkouts/internal/preloads.js?locale=en-US"></script>
<script async="async" src="https://shop.app/checkouts/internal/preloads.js?locale=en-US&shop_id=7029397" crossorigin="anonymous"></script>
<script id="apple-pay-shop-capabilities" type="application/json">{"shopId":7029397,"countryCode":"US","currencyCode":"USD","merchantCapabilities":["supports3DS"],"merchantId":"gid:\/\/shopify\/Shop\/7029397","merchantName":"The Frilly Frog","requiredBillingContactFields":["postalAddress","email","phone"],"requiredShippingContactFields":["postalAddress","email","phone"],"shippingType":"shipping","supportedNetworks":["visa","masterCard","amex","discover","elo","jcb"],"total":{"type":"pending","label":"The Frilly Frog","amount":"1.00"},"shopifyPaymentsEnabled":true,"supportsSubscriptions":true}</script>
<script id="shopify-features" type="application/json">{"accessToken":"cbb1b0dc0595cf5b7699c2efdc9d6803","betas":["rich-media-storefront-analytics"],"domain":"thefrillyfrog.com","predictiveSearch":true,"shopId":7029397,"smart_payment_buttons_url":"https:\/\/thefrillyfrog.com\/cdn\/shopifycloud\/payment-sheet\/assets\/latest\/spb.en.js","dynamic_checkout_cart_url":"https:\/\/thefrillyfrog.com\/cdn\/shopifycloud\/payment-sheet\/assets\/latest\/dynamic-checkout-cart.en.js","locale":"en"}</script>
<script>var Shopify = Shopify || {};
Shopify.shop = "the-frilly-frog-2.myshopify.com";
Shopify.locale = "en";
Shopify.currency = {"active":"USD","rate":"1.0"};
Shopify.country = "US";
Shopify.theme = {"name":"The Frilly Frog (Sept 2024)","id":141531447445,"theme_store_id":null,"role":"main"};
Shopify.theme.handle = "null";
Shopify.theme.style = {"id":null,"handle":null};
Shopify.cdnHost = "thefrillyfrog.com/cdn";
Shopify.routes = Shopify.routes || {};
Shopify.routes.root = "/";</script>
<script type="module">!function(o){(o.Shopify=o.Shopify||{}).modules=!0}(window);</script>
<script>!function(o){function n(){var o=[];function n(){o.push(Array.prototype.slice.apply(arguments))}return n.q=o,n}var t=o.Shopify=o.Shopify||{};t.loadFeatures=n(),t.autoloadFeatures=n()}(window);</script>
<script>window.ShopifyPay = window.ShopifyPay || {};
window.ShopifyPay.apiHost = "shop.app\/pay";</script>
<script id="shop-js-analytics" type="application/json">{"pageType":"index"}</script>
<script>
  window.Shopify = window.Shopify || {};
  if (!window.Shopify.featureAssets) window.Shopify.featureAssets = {};
  window.Shopify.featureAssets['shop-js'] = {"pay-button":["modules/client.pay-button_D7z_GI0-.en.esm.js","modules/chunk.common_Cn3G-yHV.esm.js"],"init-shop-email-lookup-coordinator":["modules/client.init-shop-email-lookup-coordinator_DmY3y692.en.esm.js","modules/chunk.common_Cn3G-yHV.esm.js"],"avatar":["modules/client.avatar_BTnouDA3.en.esm.js"],"init-customer-accounts":["modules/client.init-customer-accounts_B2c3dJwH.en.esm.js","modules/chunk.common_Cn3G-yHV.esm.js","modules/client.login-button_k7Hbv83g.en.esm.js"],"init-shop-for-new-customer-accounts":["modules/client.init-shop-for-new-customer-accounts_8OfYnMEu.en.esm.js","modules/chunk.common_Cn3G-yHV.esm.js","modules/client.login-button_k7Hbv83g.en.esm.js"],"init-customer-accounts-sign-up":["modules/client.init-customer-accounts-sign-up_1n_8_OiV.en.esm.js","modules/chunk.common_Cn3G-yHV.esm.js","modules/client.login-button_k7Hbv83g.en.esm.js"],"shop-pay-checkout-sheet":["modules/client.shop-pay-checkout-sheet_D2k0OhHR.en.esm.js","modules/chunk.common_Cn3G-yHV.esm.js","modules/client.login-button_k7Hbv83g.en.esm.js"],"shop-pay-payment-request":["modules/client.shop-pay-payment-request_CQXmD6ts.en.esm.js","modules/chunk.common_Cn3G-yHV.esm.js","modules/client.login-button_k7Hbv83g.en.esm.js","modules/chunk.shop-pay_CBvQR3E4.esm.js"],"discount-app":["modules/client.discount-app_DUlQKIyl.en.esm.js","modules/chunk.common_Cn3G-yHV.esm.js"],"login-button":["modules/client.login-button_k7Hbv83g.en.esm.js","modules/chunk.common_Cn3G-yHV.esm.js"],"payment-terms":["modules/client.payment-terms_x9LpfqTU.en.esm.js","modules/chunk.common_Cn3G-yHV.esm.js","modules/client.login-button_k7Hbv83g.en.esm.js"]};
</script>
<script>(function() {
  function asyncLoad() {
    var urls = ["https:\/\/assets1.adroll.com\/shopify\/latest\/j\/shopify_rolling_bootstrap_v2.js?adroll_adv_id=6KUXE7S5UNHA3A4C6FGQ3T\u0026adroll_pix_id=HL3D6RXFNVGRTAZ6TRKP3J\u0026shop=the-frilly-frog-2.myshopify.com","https:\/\/instafeed.nfcube.com\/cdn\/571fb55de740ac9b4f54f7d1731f1d0b.js?shop=the-frilly-frog-2.myshopify.com","https:\/\/emotivecdn.io\/emotive-popup\/popup.js?brand=4505\u0026api=https:\/\/www.emotiveapp.co\/\u0026shop=the-frilly-frog-2.myshopify.com","\/\/loader.wisepops.com\/get-loader.js?v=1\u0026site=LuPanDJkBX\u0026shop=the-frilly-frog-2.myshopify.com","https:\/\/geolocation-recommendations.shopifyapps.com\/locale_bar\/script.js?shop=the-frilly-frog-2.myshopify.com","https:\/\/shopify-widget.route.com\/shopify.widget.js?shop=the-frilly-frog-2.myshopify.com","\/\/cdn.shopify.com\/proxy\/fdd54b3f7d652b0c03ef08a3078f728cbcc06d84213ca0bb9d15fdb4438269d0\/shopify-extension.getredo.com\/main.js?widget_id=k4vbt77f8rm5a2a\u0026shop=the-frilly-frog-2.myshopify.com\u0026sp-cache-control=cHVibGljLCBtYXgtYWdlPTkwMA","https:\/\/static.klaviyo.com\/onsite\/js\/RRHPB3\/klaviyo.js?company_id=RRHPB3\u0026shop=the-frilly-frog-2.myshopify.com"];
    for (var i = 0; i < urls.length; i++) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = urls[i];
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
  };
  if(window.attachEvent) {
    window.attachEvent('onload', asyncLoad);
  } else {
    window.addEventListener('load', asyncLoad, false);
  }
})();</script>
<script id="__st">var __st={"a":7029397,"offset":-14400,"reqid":"318f1fd1-c12c-4886-b955-13173f065e7c-1727568757","pageurl":"thefrillyfrog.com\/","u":"7928f8d970d2","p":"home"};</script>
<script>window.ShopifyPaypalV4VisibilityTracking = true;</script>
<script id="captcha-bootstrap">!function(){'use strict';const t='contact',e='account',n='new_comment',o=[[t,t],['blogs',n],['comments',n],[t,'customer']],c=[[e,'customer_login'],[e,'guest_login'],[e,'recover_customer_password'],[e,'create_customer']],r=t=>t.map((([t,e])=>form[action*='/${t}']:not([data-nocaptcha='true']) input[name='form_type'][value='${e}'])).join(',');function s(t,e,n=!1){try{const o=window.sessionStorage;for(const[n,c]of Object.entries(JSON.parse(o.getItem(e))))t.elements[n]&&(t.elements[n].value=c);n&&o.removeItem(e)}catch{}}const a='form_key',i=['recaptcha-v3-token','g-recaptcha-response','h-captcha-response','password'],u=()=>{try{return window.sessionStorage}catch{return}},m=t=>t.elements[a],f='form_type',d='cptcha';function p(t){t.dataset[d]=!0}const l=window,h=l.document,_='Shopify',y='ce_forms',E='captcha';let v=!1;((t,e)=>{const n=(g='f06e6c50-85a8-45c8-87d0-21a2b65856fe','https://cdn.shopify.com/shopifycloud/storefront-forms-hcaptcha/ce_storefront_forms_captcha_hcaptcha.v1.4.0.iife.js',T={infoText:'Protected by hCaptcha',privacyText:'Privacy',termsText:'Terms'},(t,e,n)=>{const o=l[_][y],c=o.bindForm;if(c)return c(t,g,e,T).then(n);o.q.push([[t,g,e,T],n]),v||(h.body.append(Object.assign(h.createElement('script'),{id:'captcha-provider',async:!0,src:'https://cdn.shopify.com/shopifycloud/storefront-forms-hcaptcha/ce_storefront_forms_captcha_hcaptcha.v1.4.0.iife.js'})),v=!0)});var g,T;l[_]=l[_]||{},l[_][y]=l[_][y]||{},l[_][y].q=[],l[_][E]=l[_][E]||{},l[_][E].protect=function(t,e){n(t,void 0,e),p(t)},Object.freeze(l[_][E]),function(t,e,n,l,h,_){const[y,E,v,g]=function(t,e,n){const s=e?o:[],a=t?c:[],i=[...s,...a],u=[...o],m=r(i),f=r(s),d=n&&r(i.filter((([t,e])=>n.includes(e)))),p=r(u),l=t=>()=>t?[...document.querySelectorAll(t)].map((t=>t.form)):[];return[l(m),l(f),l(d),l(p)]}(l,h,_),T=t=>{const e=t.target;return e instanceof HTMLFormElement?e:e&&e.form},S=t=>y().includes(t);t.addEventListener('submit',(t=>{const e=T(t);if(!e)return;const n=S(e)&&!e.dataset.hcaptchaBound&&!e.dataset.recaptchaBound,o=m(e),c=g().includes(e)&&(!o||!o.value);(n||c)&&t.preventDefault(),c&&!n&&(function(t){try{if(!u())return;!function(t){const e=u();if(!e)return;const n=m(t);if(!n)return;const o=n.value;o&&e.removeItem(o)}(t);const e=Array.from(Array(32),(()=>Math.random().toString(36)[2])).join('');!function(t,e){m(t)||t.append(Object.assign(document.createElement('input'),{type:'hidden',name:a})),t.elements[a].value=e}(t,e),function(t,e){const n=u();if(!n)return;const o=[...t.querySelectorAll('input[type="password"]')].map((({name:t})=>t)),c=[...i,...o],r={};for(const[s,a]of new FormData(t).entries())c.includes(s)||(r[s]=a);n.setItem(e,JSON.stringify(r))}(t,e)}catch(e){console.error('failed to persist form',e)}}(e),e.submit())}));const w=(t,e)=>{t&&!t.dataset[d]&&(n(t,e.some((e=>e===t))),p(t))};for(const o of['focusin','change'])t.addEventListener(o,(t=>{const e=T(t);S(e)&&w(e,E())}));const A=e.get('form_key'),b=e.get(f),I=A&&b;t.addEventListener('DOMContentLoaded',(()=>{const t=E();if(I)for(const e of t)e.elements[f].value===b&&s(e,A);[...new Set([...v(),...y().filter((t=>'true'===t.dataset.shopifyCaptcha))])].forEach((e=>w(e,t)))}))}(h,new URLSearchParams(l.location.search),n,!0,!0,['guest_login'])})()}();</script>
<script id="captcha-terms">!function(){'use strict';const e=/recaptcha|reCATPCHA|google|Googl/gi,t=o=>{let c=o.firstChild;for(;c;)c.nodeType===Node.TEXT_NODE?c.textContent=c.textContent.replace(e,'hCaptcha'):c.nodeType===Node.ELEMENT_NODE&&t(c),c=c.nextSibling};document.addEventListener('DOMContentLoaded',(()=>{(e=>{const o=document.querySelector('p[data-spam-detection-disclaimer]');if(o){for(const e of['terms','privacy']){const t=o.querySelector(a[href*='https://policies.google.com/${e}']);t&&(t.href=https://hcaptcha.com/${e})}t(o)}})()}))}();</script>
<script integrity="sha256-GCwAX+VKPCMvqlDGBS8l4Ta/v13RH83mcXorqCmPRKU=" data-source-attribution="shopify.loadfeatures" defer="defer" src="//thefrillyfrog.com/cdn/shopifycloud/shopify/assets/storefront/load_feature-182c005fe54a3c232faa50c6052f25e136bfbf5dd11fcde6717a2ba8298f44a5.js" crossorigin="anonymous"></script>
<script crossorigin="anonymous" defer="defer" src="//thefrillyfrog.com/cdn/shopifycloud/shopify/assets/shopify_pay/storefront-80e528be853eac23af2454534897ca9536b1d3d04aa043b042f34879a3c111c8.js?v=20220906"></script>
<script data-source-attribution="shopify.dynamic_checkout.dynamic.init">var Shopify=Shopify||{};Shopify.PaymentButton=Shopify.PaymentButton||{isStorefrontPortableWallets:!0,init:function(){window.Shopify.PaymentButton.init=function(){};var t=document.createElement("script");t.src="https://thefrillyfrog.com/cdn/shopifycloud/portable-wallets/latest/portable-wallets.en.js",t.type="module",document.head.appendChild(t)}};
</script>
<script data-source-attribution="shopify.dynamic_checkout.cart.bootstrap">document.addEventListener("DOMContentLoaded",(function(){function t(){return document.querySelector("#dynamic-checkout-cart")}if(t())Shopify.PaymentButton.init();else{new MutationObserver((function(e,n){t()&&(Shopify.PaymentButton.init(),n.disconnect())})).observe(document.body,{childList:!0,subtree:!0})}}));
</script>



<style id="shopify-accelerated-checkout-cart-grid">#dynamic-checkout-cart {
  container-type: inline-size;
  container-name: dcc;
  width: 100%;
}

.wallet-cart-grid {
  --wallet-button-height-horizontal: clamp(
    25px,
    var(
      --shopify-accelerated-checkout-button-inline-size,
      42px
    ),
    55px
  );
  --wallet-button-height-vertical: clamp(
    25px,
    var(
      --shopify-accelerated-checkout-button-block-size,
      54px
    ),
    55px
  );
  --wallet-button-width-horizontal: 150px;
  --wallet-button-width-vertical: 100%;
  --wallet-button-border-radius: var(
    --shopify-accelerated-checkout-button-border-radius,
    4px
  );
  --wallet-grid-margin-horizontal: 0 -5px -5px -5px;
  --wallet-button-container-margin-horizontal: 0 5px 5px;
  --wallet-button-container-margin-vertical: var(--shopify-accelerated-checkout-row-gap, 8px) 0 0;
}

@keyframes acceleratedCheckoutLoadingSkeleton {
  50% {opacity: var(--shopify-accelerated-checkout-skeleton-animation-opacity-start, 1);}
  75% {opacity: var(--shopify-accelerated-checkout-skeleton-animation-opacity-end, 0.5);}
  100% {opacity: var(--shopify-accelerated-checkout-skeleton-animation-opacity-start, 1);}
}

.wallet-cart-button__skeleton {
  animation: acceleratedCheckoutLoadingSkeleton var(--shopify-accelerated-checkout-skeleton-animation-duration, 4s) var(--shopify-accelerated-checkout-skeleton-animation-timing-function, ease) infinite;
  animation-delay: -0.168s;
  background-color: var(--shopify-accelerated-checkout-skeleton-background-color, #dedede);
  box-sizing: border-box;
  text-decoration: none !important;
}

.wallet-cart-grid {
  margin: var(--wallet-grid-margin-horizontal);
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: var(--shopify-accelerated-checkout-inline-alignment, start);
  gap: 0 !important;
}

.wallet-cart-button-container {
  position: relative;
  margin: var(--wallet-button-container-margin-horizontal);
}

.wallet-cart-button-container,
.wallet-cart-button {
  width: var(--wallet-button-width-horizontal);
  height: var(--wallet-button-height-horizontal);
  border-radius: var(--wallet-button-border-radius);
  list-style-type: none !important;
  text-align: center;
  flex-shrink: 0;
  flex-grow: 0;
}

.additional-checkout-buttons--vertical .wallet-cart-grid {
  justify-content: start;
  flex-direction: column;
  margin: 0;
}
.additional-checkout-buttons--vertical .wallet-cart-grid .wallet-cart-button-container {
  width: var(--wallet-button-width-vertical);
  height: var(--wallet-button-height-vertical);
  margin: var(--wallet-button-container-margin-vertical);
}
.additional-checkout-buttons--vertical .wallet-cart-grid .wallet-cart-button-container:first-child {
  margin-top: 0;
}
.additional-checkout-buttons--vertical .wallet-cart-grid .wallet-cart-button {
  width: var(--wallet-button-width-vertical);
  height: var(--wallet-button-height-vertical);
}

.additional-checkout-buttons--horizontal .wallet-cart-grid .wallet-cart-button-container,
.additional-checkout-buttons--horizontal .wallet-cart-grid .wallet-cart-button {
  width: var(--wallet-button-width-horizontal) !important;
  height: var(--wallet-button-height-horizontal) !important;
  border-radius: var(--wallet-button-border-radius) !important;
}

@container dcc (width >= 150px) and (width <= 500px) {
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) {
    justify-content: start;
    flex-direction: column;
    margin: 0;
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container {
    width: var(--wallet-button-width-vertical);
    height: var(--wallet-button-height-vertical);
    margin: var(--wallet-button-container-margin-vertical);
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container:first-child {
    margin-top: 0;
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button {
    width: var(--wallet-button-width-vertical);
    height: var(--wallet-button-height-vertical);
  }
}

@container dcc (width <= 310px) {
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) {
    justify-content: start;
    flex-direction: column;
    margin: 0;
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container {
    width: var(--wallet-button-width-vertical);
    height: var(--wallet-button-height-vertical);
    margin: var(--wallet-button-container-margin-vertical);
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container:first-child {
    margin-top: 0;
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button {
    width: var(--wallet-button-width-vertical);
    height: var(--wallet-button-height-vertical);
  }
}

@container dcc (width <= 470px) {
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) {
    justify-content: start;
    flex-direction: column;
    margin: 0;
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container {
    width: var(--wallet-button-width-vertical);
    height: var(--wallet-button-height-vertical);
    margin: var(--wallet-button-container-margin-vertical);
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container:first-child {
    margin-top: 0;
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button {
    width: var(--wallet-button-width-vertical);
    height: var(--wallet-button-height-vertical);
  }
}

@container dcc (width <= 630px) {
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) {
    justify-content: start;
    flex-direction: column;
    margin: 0;
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container {
    width: var(--wallet-button-width-vertical);
    height: var(--wallet-button-height-vertical);
    margin: var(--wallet-button-container-margin-vertical);
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container:first-child {
    margin-top: 0;
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button {
    width: var(--wallet-button-width-vertical);
    height: var(--wallet-button-height-vertical);
  }
}

@container dcc (width <= 790px) {
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) {
    justify-content: start;
    flex-direction: column;
    margin: 0;
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container {
    width: var(--wallet-button-width-vertical);
    height: var(--wallet-button-height-vertical);
    margin: var(--wallet-button-container-margin-vertical);
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container:first-child {
    margin-top: 0;
  }
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button {
    width: var(--wallet-button-width-vertical);
    height: var(--wallet-button-height-vertical);
  }
}

.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) {
  justify-content: start;
  flex-direction: column;
  margin: 0;
}
.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button-container {
  width: var(--wallet-button-width-vertical);
  height: var(--wallet-button-height-vertical);
  margin: var(--wallet-button-container-margin-vertical);
}
.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button-container:first-child {
  margin-top: 0;
}
.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button {
  width: var(--wallet-button-width-vertical);
  height: var(--wallet-button-height-vertical);
}

@media screen and (max-width: 750px) {
  .wallet-cart-grid {
    justify-content: start;
    flex-direction: column;
    max-width: none;
    margin: 0;
  }
  .wallet-cart-grid .wallet-cart-button-container {
    max-width: none;
    width: var(--wallet-button-width-vertical);
    height: var(--wallet-button-height-vertical);
    margin: var(--wallet-button-container-margin-vertical);
  }
  .wallet-cart-grid .wallet-cart-button-container:first-child {
    margin-top: 0;
  }
  .wallet-cart-grid .wallet-cart-button {
    width: var(--wallet-button-width-vertical);
    height: var(--wallet-button-height-vertical);
  }
}

@supports (not (container-type: inline-size)) or (not (selector(:has(*)))) {
  .wallet-cart-grid {
    justify-content: start;
    flex-direction: column;
    margin: 0;
  }
  .wallet-cart-button-container {
    width: var(--wallet-button-width-vertical);
    height: var(--wallet-button-height-vertical);
    margin: var(--wallet-button-container-margin-vertical);
  }
  .wallet-cart-button-container:first-child {
    margin-top: 0;
  }
  .wallet-cart-grid .wallet-cart-button {
    width: var(--wallet-button-width-vertical);
    height: var(--wallet-button-height-vertical);
  }
}
</style>

<style id="shopify-accelerated-checkout-cart-grid-with-margin-top">.additional-checkout-buttons--vertical .wallet-cart-grid .wallet-cart-button-container:first-child {
  margin-top: 8px;
}


@container dcc (width >= 150px) and (width <= 500px) {
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container:first-child {
    margin-top: 8px;
  }
}

@container dcc (width <= 310px) {
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container:first-child {
    margin-top: 8px;
  }
}

@container dcc (width <= 470px) {
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container:first-child {
    margin-top: 8px;
  }
}

@container dcc (width <= 630px) {
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container:first-child {
    margin-top: 8px;
  }
}

@container dcc (width <= 790px) {
  .wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container:first-child {
    margin-top: 8px;
  }
}

.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button-container:first-child {
  margin-top: 8px;
}

@media screen and (max-width: 750px) {
  .wallet-cart-grid .wallet-cart-button-container:first-child {
    margin-top: 8px;
  }
}

@supports (not (container-type: inline-size)) or (not (selector(:has(*)))) {
  .wallet-cart-button-container:first-child {
    margin-top: 8px;
  }
}
</style>
<script>window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.end');</script>

	<!-- BEGIN app block: shopify://apps/redo-free-return-automation/blocks/redo_app_embed/c613644b-6df4-4d11-b336-43a5c06745a1 --><script>
  if (typeof process === "undefined") {
    process = {};
  }
  if (process.env === undefined) {
    process.env = {};
  }
  process.env.IPIFY_API_KEY = "at_S8q5xe1hwi5jKf6CSb4V661KXTKK2";
  process.env.AMPLITUDE_API_KEY = "4ea5fb67e1313890e096ab17cce5d093";
  process.env.REDO_API_URL = "https://shopify-cdn.getredo.com";
</script>
<script async src="https://cdn.shopify.com/extensions/94e4ada8-bfd2-40b6-b125-137e181c20af/redo-free-return-automation-293/assets/main.js"></script>

<!-- END app app block --><!-- BEGIN app block: shopify://apps/gift-reggie-gift-registry/blocks/app-embed-block/00fe746e-081c-46a2-a15d-bcbd6f41b0f0 --><script type="application/json" id="gift_reggie_data">
  {
    "storefrontAccessToken": null,
    "registryId": null,
    "registryAdmin": null,
    "customerId": null,
    

    "productId": null,
    "rootUrl": "\/",
    "currentLanguage": null,

    "button_layout": "column",
    "button_order": "registry_wishlist",
    "button_alignment": "justify",
    "behavior_on_no_id": "disable",
    "wishlist_button_visibility": "nobody",
    "registry_button_visibility": "everyone",
    "registry_button_behavior": "ajax",
    "online_store_version": "2",
    "button_location_override": "#gift_reggie_button_placeholder",
    "button_location_override_position": "inside",

    "wishlist_button_appearance": "button",
    "registry_button_appearance": "button",
    "wishlist_button_classname": "",
    "registry_button_classname": "registry_button",
    "wishlist_button_image_not_present": null,
    "wishlist_button_image_is_present": null,
    "registry_button_image": null,

    "checkout_button_selector": "",

    "i18n": {
      "wishlist": {
        "idleAdd": "Add to Wishlist",
        "idleRemove": "Remove from Wishlist",
        "pending": "...",
        "successAdd": "Added to Wishlist",
        "successRemove": "Removed from Wishlist",
        "noVariant": "Add to Wishlist",
        "error": "Error"
      },
      "registry": {
        "idleAdd": "Add to Registry",
        "idleRemove": "Remove from Registry",
        "pending": "...",
        "successAdd": "Added to Registry",
        "successRemove": "Removed from Registry",
        "noVariant": "Add to Registry",
        "error": "Error"
      }
    }
  }
</script>
<style>
  :root {
    --gift-reggie-wishlist-button-background-color: #ffffff;
    --gift-reggie-wishlist-button-text-color: #333333;
    --gift-reggie-registry-button-background-color: #ffffff;
    --gift-reggie-registry-button-text-color: #333333;
  }
</style><style>
    
  </style>
<!-- END app app block --><script src="https://cdn.shopify.com/extensions/a5866d0e-9312-4160-87b1-30f35e9738dc/smile-io-141/assets/smile-loader.js" type="text/javascript" defer="defer"></script>
<script src="https://cdn.shopify.com/extensions/b0bdc5df-fd50-442b-8d41-f581603d20be/gift-reggie-gift-registry-58/assets/app-embed-block.js" type="text/javascript" defer="defer"></script>
<link href="https://cdn.shopify.com/extensions/b0bdc5df-fd50-442b-8d41-f581603d20be/gift-reggie-gift-registry-58/assets/app-embed-block.css" rel="stylesheet" type="text/css" media="all">
<link href="https://monorail-edge.shopifysvc.com" rel="dns-prefetch">
<script>(function(){if ("sendBeacon" in navigator && "performance" in window) {var session_token = document.cookie.match(/_shopify_s=([^;]*)/);function handle_abandonment_event(e) {var entries = performance.getEntries().filter(function(entry) {return /monorail-edge.shopifysvc.com/.test(entry.name);});if (!window.abandonment_tracked && entries.length === 0) {window.abandonment_tracked = true;var currentMs = Date.now();var navigation_start = performance.timing.navigationStart;var payload = {shop_id: 7029397,url: window.location.href,navigation_start,duration: currentMs - navigation_start,session_token: session_token && session_token.length === 2 ? session_token[1] : "",page_type: "index"};window.navigator.sendBeacon("https://monorail-edge.shopifysvc.com/v1/produce", JSON.stringify({schema_id: "online_store_buyer_site_abandonment/1.1",payload: payload,metadata: {event_created_at_ms: currentMs,event_sent_at_ms: currentMs}}));}}window.addEventListener('pagehide', handle_abandonment_event);}}());</script>
<script id="web-pixels-manager-setup">(function d(d,e,r,a,n){var o,i,t,s,l=(i=(o={modern:/Edge?\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(9{2}|\d{3,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(15\.\d+|(1[6-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(9{2}|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]\d+|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](12[89]|1[3-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Android.+Firefox\/(12[7-9]|1[3-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(12[89]|1[3-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|SamsungBrowser\/([2-9]\d|\d{3,})\.\d+/,legacy:/Edge?\/(1[6-9]|[2-9]\d|\d{3,})\.\d+(\.\d+|)|Firefox\/(5[4-9]|[6-9]\d|\d{3,})\.\d+(\.\d+|)|Chrom(ium|e)\/(5[1-9]|[6-9]\d|\d{3,})\.\d+(\.\d+|)([\d.]+$|.*Safari\/(?![\d.]+ Edge\/[\d.]+$))|(Maci|X1{2}).+ Version\/(10\.\d+|(1[1-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(3[89]|[4-9]\d|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(10[._]\d+|(1[1-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](12[89]|1[3-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(12[7-9]|1[3-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(12[89]|1[3-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(5\.\d+|([6-9]|\d{2,})\.\d+)|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(3\.\d+|([4-9]|\d{2,})\.\d+)(\.\d+|)/}).modern,t=o.legacy,s=navigator.userAgent,i.test(s)?"modern":(t.test(s),"legacy"));window.Shopify=window.Shopify||{};var c=window.Shopify;c.analytics=c.analytics||{};var u=c.analytics;u.replayQueue=[],u.publish=function(d,e,r){return u.replayQueue.push([d,e,r]),!0};try{self.performance.mark("wpm:start")}catch(d){}var h=[r,"/wpm","/b",n,l.substring(0,1),".js"].join("");!function(d){var e=d.src,r=d.async,a=void 0===r||r,n=d.onload,o=d.onerror,i=document.createElement("script"),t=document.head,s=document.body;i.async=a,i.src=e,n&&i.addEventListener("load",n),o&&i.addEventListener("error",o),t?t.appendChild(i):s?s.appendChild(i):console.error("Did not find a head or body element to append the script")}({src:h,async:!0,onload:function(){var r=window.webPixelsManager.init(d);e(r);var a=window.Shopify.analytics;a.replayQueue.forEach((function(d){var e=d[0],a=d[1],n=d[2];r.publishCustomEvent(e,a,n)})),a.replayQueue=[],a.publish=r.publishCustomEvent,a.visitor=r.visitor},onerror:function(){var e=d.storefrontBaseUrl.replace(/\/$/,""),r="".concat(e,"/.well-known/shopify/monorail/unstable/produce_batch"),n=JSON.stringify({metadata:{event_sent_at_ms:(new Date).getTime()},events:[{schema_id:"web_pixels_manager_load/3.1",payload:{version:a||"latest",bundle_target:l,page_url:self.location.href,status:"failed",surface:d.surface,error_msg:"".concat(h," has failed to load")},metadata:{event_created_at_ms:(new Date).getTime()}}]});try{if(self.navigator.sendBeacon.bind(self.navigator)(r,n))return!0}catch(d){}var o=new XMLHttpRequest;try{return o.open("POST",r,!0),o.setRequestHeader("Content-Type","text/plain"),o.send(n),!0}catch(d){console&&console.warn&&console.warn("[Web Pixels Manager] Got an unhandled error while logging a load error.")}return!1}})})({shopId: 7029397,storefrontBaseUrl: "https://thefrillyfrog.com",extensionsBaseUrl: "https://extensions.shopifycdn.com/cdn/shopifycloud/web-pixels-manager",surface: "storefront-renderer",enabledBetaFlags: ["5de24938","d04dc9f4","4735909c"],webPixelsConfigList: [{"id":"147259541","configuration":"{\"pixel_id\":\"1061956080950154\",\"pixel_type\":\"facebook_pixel\",\"metaapp_system_user_token\":\"-\"}","eventPayloadVersion":"v1","runtimeContext":"OPEN","scriptVersion":"8b3843af2d71780cfb83fdde884ce168","type":"APP","apiClientId":2329312,"privacyPurposes":["ANALYTICS","MARKETING","SALE_OF_DATA"]},{"id":"87818389","configuration":"{\"tagID\":\"2620558455077\"}","eventPayloadVersion":"v1","runtimeContext":"STRICT","scriptVersion":"4fd0680eed907adaf3f85849c393d688","type":"APP","apiClientId":3009811,"privacyPurposes":["ANALYTICS","MARKETING","SALE_OF_DATA"]},{"id":"shopify-app-pixel","configuration":"{}","eventPayloadVersion":"v1","runtimeContext":"STRICT","scriptVersion":"0220","apiClientId":"shopify-pixel","type":"APP","privacyPurposes":["ANALYTICS","MARKETING"]},{"id":"shopify-custom-pixel","eventPayloadVersion":"v1","runtimeContext":"LAX","scriptVersion":"0220","apiClientId":"shopify-pixel","type":"CUSTOM","privacyPurposes":["ANALYTICS","MARKETING"]}],isMerchantRequest: false,initData: {"shop":{"name":"The Frilly Frog","paymentSettings":{"currencyCode":"USD"},"myshopifyDomain":"the-frilly-frog-2.myshopify.com","countryCode":"US","storefrontUrl":"https:\/\/thefrillyfrog.com"},"customer":null,"cart":null,"checkout":null,"productVariants":[],"purchasingCompany":null},},function pageEvents(webPixelsManagerAPI) {webPixelsManagerAPI.publish("page_viewed", {});},"https://thefrillyfrog.com/cdn","dfbb31c8552c83d6d047278c418daa0f369b24f4","c3421179wde532104pe70d9b14m030ede8e",);</script>  <script>window.ShopifyAnalytics = window.ShopifyAnalytics || {};
window.ShopifyAnalytics.meta = window.ShopifyAnalytics.meta || {};
window.ShopifyAnalytics.meta.currency = 'USD';
var meta = {"page":{"pageType":"home"}};
for (var attr in meta) {
  window.ShopifyAnalytics.meta[attr] = meta[attr];
}</script>
<script>window.ShopifyAnalytics.merchantGoogleAnalytics = function() {
  
};
</script>
<script class="analytics">(window.gaDevIds=window.gaDevIds||[]).push('BwiEti');


(function () {
    var customDocumentWrite = function(content) {
      var jquery = null;

      if (window.jQuery) {
        jquery = window.jQuery;
      } else if (window.Checkout && window.Checkout.$) {
        jquery = window.Checkout.$;
      }

      if (jquery) {
        jquery('body').append(content);
      }
    };

    var hasLoggedConversion = function(token) {
      if (token) {
        return document.cookie.indexOf('loggedConversion=' + token) !== -1;
      }
      return false;
    }

    var setCookieIfConversion = function(token) {
      if (token) {
        var twoMonthsFromNow = new Date(Date.now());
        twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);

        document.cookie = 'loggedConversion=' + token + '; expires=' + twoMonthsFromNow;
      }
    }

    var trekkie = window.ShopifyAnalytics.lib = window.trekkie = window.trekkie || [];
    if (trekkie.integrations) {
      return;
    }
    trekkie.methods = [
      'identify',
      'page',
      'ready',
      'track',
      'trackForm',
      'trackLink'
    ];
    trekkie.factory = function(method) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(method);
        trekkie.push(args);
        return trekkie;
      };
    };
    for (var i = 0; i < trekkie.methods.length; i++) {
      var key = trekkie.methods[i];
      trekkie[key] = trekkie.factory(key);
    }
    trekkie.load = function(config) {
      trekkie.config = config || {};
      trekkie.config.initialDocumentCookie = document.cookie;
      var first = document.getElementsByTagName('script')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.onerror = function(e) {
        var scriptFallback = document.createElement('script');
        scriptFallback.type = 'text/javascript';
        scriptFallback.onerror = function(error) {
                var Monorail = {
      produce: function produce(monorailDomain, schemaId, payload) {
        var currentMs = new Date().getTime();
        var event = {
          schema_id: schemaId,
          payload: payload,
          metadata: {
            event_created_at_ms: currentMs,
            event_sent_at_ms: currentMs
          }
        };
        return Monorail.sendRequest("https://" + monorailDomain + "/v1/produce", JSON.stringify(event));
      },
      sendRequest: function sendRequest(endpointUrl, payload) {
        // Try the sendBeacon API
        if (window && window.navigator && typeof window.navigator.sendBeacon === 'function' && typeof window.Blob === 'function' && !Monorail.isIos12()) {
          var blobData = new window.Blob([payload], {
            type: 'text/plain'
          });

          if (window.navigator.sendBeacon(endpointUrl, blobData)) {
            return true;
          } // sendBeacon was not successful

        } // XHR beacon

        var xhr = new XMLHttpRequest();

        try {
          xhr.open('POST', endpointUrl);
          xhr.setRequestHeader('Content-Type', 'text/plain');
          xhr.send(payload);
        } catch (e) {
          console.log(e);
        }

        return false;
      },
      isIos12: function isIos12() {
        return window.navigator.userAgent.lastIndexOf('iPhone; CPU iPhone OS 12_') !== -1 || window.navigator.userAgent.lastIndexOf('iPad; CPU OS 12_') !== -1;
      }
    };
    Monorail.produce('monorail-edge.shopifysvc.com',
      'trekkie_storefront_load_errors/1.1',
      {shop_id: 7029397,
      theme_id: 141531447445,
      app_name: "storefront",
      context_url: window.location.href,
      source_url: "//thefrillyfrog.com/cdn/s/trekkie.storefront.d0db9c6b604f2af4af0875dc118feaf816931b65.min.js"});

        };
        scriptFallback.async = true;
        scriptFallback.src = '//thefrillyfrog.com/cdn/s/trekkie.storefront.d0db9c6b604f2af4af0875dc118feaf816931b65.min.js';
        first.parentNode.insertBefore(scriptFallback, first);
      };
      script.async = true;
      script.src = '//thefrillyfrog.com/cdn/s/trekkie.storefront.d0db9c6b604f2af4af0875dc118feaf816931b65.min.js';
      first.parentNode.insertBefore(script, first);
    };
    trekkie.load(
      {"Trekkie":{"appName":"storefront","development":false,"defaultAttributes":{"shopId":7029397,"isMerchantRequest":null,"themeId":141531447445,"themeCityHash":"7221906363355111101","contentLanguage":"en","currency":"USD"},"isServerSideCookieWritingEnabled":true,"monorailRegion":"shop_domain","enabledBetaFlags":["bbcf04e6"]},"Google Analytics":{"trackingId":"UA-186889825-1","domain":"auto","siteSpeedSampleRate":"10","enhancedEcommerce":true,"doubleClick":true,"includeSearch":true},"Session Attribution":{},"S2S":{"facebookCapiEnabled":true,"source":"trekkie-storefront-renderer","apiClientId":580111}}
    );

    var loaded = false;
    trekkie.ready(function() {
      if (loaded) return;
      loaded = true;

      window.ShopifyAnalytics.lib = window.trekkie;

        ga('require', 'linker');
      function addListener(element, type, callback) {
        if (element.addEventListener) {
          element.addEventListener(type, callback);
        }
        else if (element.attachEvent) {
          element.attachEvent('on' + type, callback);
        }
      }
      function decorate(event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        if (target && (target.getAttribute('action') || target.getAttribute('href'))) {
          ga(function (tracker) {
            var linkerParam = tracker.get('linkerParam');
            document.cookie = '_shopify_ga=' + linkerParam + '; ' + 'path=/';
          });
        }
      }
      addListener(window, 'load', function(){
        for (var i=0; i < document.forms.length; i++) {
          var action = document.forms[i].getAttribute('action');
          if(action && action.indexOf('/cart') >= 0) {
            addListener(document.forms[i], 'submit', decorate);
          }
        }
        for (var i=0; i < document.links.length; i++) {
          var href = document.links[i].getAttribute('href');
          if(href && href.indexOf('/checkout') >= 0) {
            addListener(document.links[i], 'click', decorate);
          }
        }
      });
    

      var originalDocumentWrite = document.write;
      document.write = customDocumentWrite;
      try { window.ShopifyAnalytics.merchantGoogleAnalytics.call(this); } catch(error) {};
      document.write = originalDocumentWrite;

      window.ShopifyAnalytics.lib.page(null,{"pageType":"home"});

      var match = window.location.pathname.match(/checkouts\/(.+)\/(thank_you|post_purchase)/)
      var token = match? match[1]: undefined;
      if (!hasLoggedConversion(token)) {
        setCookieIfConversion(token);
        
      }
    });


        var eventsListenerScript = document.createElement('script');
        eventsListenerScript.async = true;
        eventsListenerScript.src = "//thefrillyfrog.com/cdn/shopifycloud/shopify/assets/shop_events_listener-61fa9e0a912c675e178777d2b27f6cbd482f8912a6b0aa31fa3515985a8cd626.js";
        document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);

})();</script>
<script class="boomerang">
(function () {
  if (window.BOOMR && (window.BOOMR.version || window.BOOMR.snippetExecuted)) {
    return;
  }
  window.BOOMR = window.BOOMR || {};
  window.BOOMR.snippetStart = new Date().getTime();
  window.BOOMR.snippetExecuted = true;
  window.BOOMR.snippetVersion = 12;
  window.BOOMR.application = "storefront-renderer";
  window.BOOMR.themeName = "The Frilly Frog";
  window.BOOMR.themeVersion = "September 2024";
  window.BOOMR.shopId = 7029397;
  window.BOOMR.themeId = 141531447445;
  window.BOOMR.renderRegion = "gcp-us-central1";
  window.BOOMR.url =
    "https://thefrillyfrog.com/cdn/shopifycloud/boomerang/shopify-boomerang-1.0.0.min.js";
  var where = document.currentScript || document.getElementsByTagName("script")[0];
  var parentNode = where.parentNode;
  var promoted = false;
  var LOADER_TIMEOUT = 3000;
  function promote() {
    if (promoted) {
      return;
    }
    var script = document.createElement("script");
    script.id = "boomr-scr-as";
    script.src = window.BOOMR.url;
    script.async = true;
    parentNode.appendChild(script);
    promoted = true;
  }
  function iframeLoader(wasFallback) {
    promoted = true;
    var dom, bootstrap, iframe, iframeStyle;
    var doc = document;
    var win = window;
    window.BOOMR.snippetMethod = wasFallback ? "if" : "i";
    bootstrap = function(parent, scriptId) {
      var script = doc.createElement("script");
      script.id = scriptId || "boomr-if-as";
      script.src = window.BOOMR.url;
      BOOMR_lstart = new Date().getTime();
      parent = parent || doc.body;
      parent.appendChild(script);
    };
    if (!window.addEventListener && window.attachEvent && navigator.userAgent.match(/MSIE [67]./)) {
      window.BOOMR.snippetMethod = "s";
      bootstrap(parentNode, "boomr-async");
      return;
    }
    iframe = document.createElement("IFRAME");
    iframe.src = "about:blank";
    iframe.title = "";
    iframe.role = "presentation";
    iframe.loading = "eager";
    iframeStyle = (iframe.frameElement || iframe).style;
    iframeStyle.width = 0;
    iframeStyle.height = 0;
    iframeStyle.border = 0;
    iframeStyle.display = "none";
    parentNode.appendChild(iframe);
    try {
      win = iframe.contentWindow;
      doc = win.document.open();
    } catch (e) {
      dom = document.domain;
      iframe.src = "javascript:var d=document.open();d.domain='" + dom + "';void(0);";
      win = iframe.contentWindow;
      doc = win.document.open();
    }
    if (dom) {
      doc._boomrl = function() {
        this.domain = dom;
        bootstrap();
      };
      doc.write("<body onload='document._boomrl();'>");
    } else {
      win._boomrl = function() {
        bootstrap();
      };
      if (win.addEventListener) {
        win.addEventListener("load", win._boomrl, false);
      } else if (win.attachEvent) {
        win.attachEvent("onload", win._boomrl);
      }
    }
    doc.close();
  }
  var link = document.createElement("link");
  if (link.relList &&
    typeof link.relList.supports === "function" &&
    link.relList.supports("preload") &&
    ("as" in link)) {
    window.BOOMR.snippetMethod = "p";
    link.href = window.BOOMR.url;
    link.rel = "preload";
    link.as = "script";
    link.addEventListener("load", promote);
    link.addEventListener("error", function() {
      iframeLoader(true);
    });
    setTimeout(function() {
      if (!promoted) {
        iframeLoader(true);
      }
    }, LOADER_TIMEOUT);
    BOOMR_lstart = new Date().getTime();
    parentNode.appendChild(link);
  } else {
    iframeLoader(false);
  }
  function boomerangSaveLoadTime(e) {
    window.BOOMR_onload = (e && e.timeStamp) || new Date().getTime();
  }
  if (window.addEventListener) {
    window.addEventListener("load", boomerangSaveLoadTime, false);
  } else if (window.attachEvent) {
    window.attachEvent("onload", boomerangSaveLoadTime);
  }
  if (document.addEventListener) {
    document.addEventListener("onBoomerangLoaded", function(e) {
      e.detail.BOOMR.init({
        ResourceTiming: {
          enabled: true,
          trackedResourceTypes: ["script", "img", "css"]
        },
      });
      e.detail.BOOMR.t_end = new Date().getTime();
    });
  } else if (document.attachEvent) {
    document.attachEvent("onpropertychange", function(e) {
      if (!e) e=event;
      if (e.propertyName === "onBoomerangLoaded") {
        e.detail.BOOMR.init({
          ResourceTiming: {
            enabled: true,
            trackedResourceTypes: ["script", "img", "css"]
          },
        });
        e.detail.BOOMR.t_end = new Date().getTime();
      }
    });
  }
})();</script>
<script
  defer
  src="https://thefrillyfrog.com/cdn/shopifycloud/perf-kit/shopify-perf-kit-1.0.0.min.js"
  data-application="storefront-renderer"
  data-shop-id="7029397"
  data-render-region="gcp-us-central1"
  data-page-type="index"
  data-theme-instance-id="141531447445"
  data-monorail-region="shop_domain"
  data-resource-timing-sampling-rate="10"
></script>
</head>
	<body class="index index">

		<a class="visuallyhidden" href="#main">Skip to content</a>

		<div id="shopify-section-theme-header" class="shopify-section"><div class="announcement mobile-announcement">
  <p>Free shipping
on orders over $125!</p>
</div> <!-- end .announcement -->



<header>

  <div class="scallop">
    <div class="rectangle"></div>
  </div>

  <div class="wrap">
    <div class="header_left">

      <form action="/search" method="get" class="minisearch">

        <label for="header_search" class="visuallyhidden">Search</label>
        <input type="hidden" name="type" value="product" />

        <button type="submit" aria-label="search">
          <svg viewBox="0 0 1080.1 1080.02" class="svg_search">
  <path class="svg_search-1" d="M48.11,1080c-42,1.2-64.8-52.8-33.6-81.6l337.2-338.4c-55.2-69.6-87.6-157.2-87.6-252C264.1,183.6,446.5,0,672.1,0s408,183.6,408,408-183.6,408-408,408c-94.8,0-182.4-32.4-252-87.6l-338.4,337.2c-9.6,9.6-21.6,14.4-33.6,14.4h0ZM672.11,96c-171.6,0-312,140.4-312,312s140.4,312,312,312,312-140.4,312-312S843.71,96,672.11,96Z"/>
</svg>
        </button>

        <input id="header_search" type="text" name="q" placeholder="Search" />

      </form>

      

      <button type="button" class="navicon" aria-label="menu">
        <?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 447.9">
  <path class="cls-1" d="M420.7,4.65c6.2-6.2,16.4-6.2,22.6,0s6.2,16.4,0,22.6l-196.7,196.7,196.7,196.7c6.2,6.2,6.2,16.4,0,22.6s-16.4,6.2-22.6,0l-196.7-196.7L27.3,443.25c-6.2,6.2-16.4,6.2-22.6,0s-6.2-16.4,0-22.6l196.7-196.7L4.7,27.25C-1.5,21.05-1.5,10.85,4.7,4.65s16.4-6.2,22.6,0l196.7,196.7L420.7,4.65Z"/>
</svg>
        <?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 352">  
  <path class="cls-1" d="M0,16C0,7.2,7.2,0,16,0h416c8.8,0,16,7.2,16,16s-7.2,16-16,16H16C7.2,32,0,24.8,0,16ZM0,176c0-8.8,7.2-16,16-16h416c8.8,0,16,7.2,16,16s-7.2,16-16,16H16c-8.8,0-16-7.2-16-16ZM448,336c0,8.8-7.2,16-16,16H16c-8.8,0-16-7.2-16-16s7.2-16,16-16h416c8.8,0,16,7.2,16,16Z"/>
</svg>
      </button>

      <div class="announcement-wrap">
        <div class="announcement">
          
            <span class="shipping-icon"></span>
          
          <p>Free shipping<br />
on orders over $125!</p>
        </div> <!-- end .announcement -->
      </div> <!-- end .announcement-wrap -->

    </div> <!-- end .header_left -->

    <a href="https://thefrillyfrog.com" class="logo">
      <img src="//thefrillyfrog.com/cdn/shop/t/48/assets/logo.png?v=99494972473028420121727202577" alt="The Frilly Frog" />
      <img src="//thefrillyfrog.com/cdn/shop/t/48/assets/logo_mobile.png?v=172953471722853889181727202577" alt="The Frilly Frog" />
    </a> <!-- end a.logo -->

    <div class="utilities">

      
        <a href="/account/login" class="microaccount">Sign in</a>
      

      <a href="/cart" class="microcart">
        <svg viewBox="0 0 1200 864" class="svg_cart">  
  <path class="svg_cart-1" d="M1176,264h-192v-96C984,75.36,908.62,0,816,0h-432c-92.62,0-168,75.36-168,168v96H24c-13.27,0-24,10.75-24,24s10.73,24,24,24h53.45l120.59,462.29c13.8,52.82,61.55,89.71,116.13,89.71h571.66c54.56,0,102.3-36.89,116.11-89.71l120.59-462.29h53.45c13.27,0,24-10.75,24-24s-10.73-24-24-24h.01ZM264,168c0-66.16,53.84-120,120-120h432c66.16,0,120,53.84,120,120v96H264v-96ZM955.5,762.16c-8.27,31.7-36.91,53.84-69.66,53.84H314.18c-32.74,0-61.41-22.14-69.68-53.82l-117.45-450.18h945.89l-117.44,450.17Z"/>
  <path class="svg_cart-1" d="M600,396c-13.27,0-24,10.75-24,24v288c0,13.25,10.73,24,24,24s24-10.75,24-24v-288c0-13.25-10.73-24-24-24Z"/>
  <path class="svg_cart-1" d="M792,468c-13.27,0-24,10.75-24,24v144c0,13.25,10.73,24,24,24s24-10.75,24-24v-144c0-13.25-10.73-24-24-24Z"/>
  <path class="svg_cart-1" d="M408,468c-13.27,0-24,10.75-24,24v144c0,13.25,10.73,24,24,24s24-10.75,24-24v-144c0-13.25-10.73-24-24-24Z"/>
</svg>
        <span>0</span>
      </a>

    </div> <!-- end .utilities -->

  </div> <!-- end .wrap -->

  <nav class="desktop">
    <div class="border"></div>

    <div class="primary">
      
      

        
        
        
        

        <div class="link-primary">
          <a href="/collections/new-noteworthy" class="primary">New & Featured</a>

          
            <div class="secondary">
              <div class="secondary-content">

                <div class="featurette ">
                  <div 
                    class="image"
                    style="background-image:url(//thefrillyfrog.com/cdn/shop/files/Blank_472_x_472_1.jpg?v=1718303840&width=472);">
                  </div>
                  
                    <p>Shop fresh arrivals.</p>
                    <div class="button">
                      <a href="https://thefrillyfrog.com/collections/new-noteworthy?sort_by=created-descending">See what's new</a>
                    </div> <!-- end .button -->
                  
                </div> <!-- end .featurette -->

                
                  <div class="menus ">

                    
                      
                        <div class="menu">
                          <p class="heading">
                            <a href="/collections/fall-2024" title="">New</a>
                          </p>
                          
                            
                            

                            <a href="/collections/baby-boys" title="">Baby Boys</a>

                          
                            
                            

                            <a href="/collections/baby-girls" title="">Baby Girls</a>

                          
                            
                            

                            <a href="/collections/boys" title="">Boys</a>

                          
                            
                            

                            <a href="/collections/girls" title="">Girls</a>

                          
                        </div>
                      
                        <div class="menu">
                          <p class="heading">
                            <a href="/collections/featured-favorites" title="">Featured</a>
                          </p>
                          
                            
                            

                            <a href="/collections/back-to-school" title="">Back to School</a>

                          
                            
                            

                            <a href="/collections/halloween-apparel" title="">Halloween </a>

                          
                            
                            

                            <a href="/collections/thanksgiving" title="">Thanksgiving</a>

                          
                            
                            

                            <a href="/collections/christmas" title="">Christmas</a>

                          
                        </div>
                      
                    
                  </div> <!-- end .menus -->
                
              </div> <!-- end .secondary-content -->
            </div> <!-- end .secondary -->
          
        </div> <!-- end .link-primary -->

      

        
        
        
        

        <div class="link-primary">
          <a href="/collections/girls" class="primary">Girls</a>

          
            <div class="secondary">
              <div class="secondary-content">

                <div class="featurette ">
                  <div 
                    class="image"
                    style="background-image:url(//thefrillyfrog.com/cdn/shop/files/Blank_472_x_472_1.png?v=1722354182&width=472);">
                  </div>
                  
                    <p>Cute as can be</p>
                    <div class="button">
                      <a href="/collections/dresses">Shop darling dresses</a>
                    </div> <!-- end .button -->
                  
                </div> <!-- end .featurette -->

                
                  <div class="menus ">

                    
                      
                        <div class="menu">
                          <p class="heading">
                            <a href="/collections/girl-apparel" title="">Girls Apparel</a>
                          </p>
                          
                            
                            

                            <a href="/collections/girls-tops" title="">Tops + Sweaters</a>

                          
                            
                            

                            <a href="/collections/girls-bottoms" title="">Bottoms</a>

                          
                            
                            

                            <a href="/collections/dresses-sets" title="">Dresses + Rompers</a>

                          
                            
                            

                            <a href="/collections/girls-sets" title="">Girl Sets</a>

                          
                            
                            

                            <a href="/collections/girl-swimwear" title="">Swimwear</a>

                          
                            
                            

                            <a href="/collections/girl-outerwear" title="">Outerwear</a>

                          
                        </div>
                      
                        <div class="menu">
                          <p class="heading">
                            <a href="/collections/girl-accessories" title="">Girls Accessories</a>
                          </p>
                          
                            
                            

                            <a href="/collections/bows" title="">Bows + Headbands</a>

                          
                            
                            

                            <a href="/collections/girl-shoes-socks" title="">Shoes + Socks</a>

                          
                            
                            

                            <a href="/collections/girl-bonnet-hats" title="">Bonnets + Hats</a>

                          
                            
                            

                            <a href="/collections/girl-undergarments" title="">Undergarments</a>

                          
                            
                            

                            <a href="/collections/handbags" title="">Handbags</a>

                          
                            
                            

                            <a href="/collections/jewelry" title="">Jewelry</a>

                          
                            
                            

                            <a href="/collections/sunglasses" title="">Sunglasses</a>

                          
                        </div>
                      
                    
                  </div> <!-- end .menus -->
                
              </div> <!-- end .secondary-content -->
            </div> <!-- end .secondary -->
          
        </div> <!-- end .link-primary -->

      

        
        
        
        

        <div class="link-primary">
          <a href="/collections/boys" class="primary">Boys</a>

          
            <div class="secondary">
              <div class="secondary-content">

                <div class="featurette ">
                  <div 
                    class="image"
                    style="background-image:url(//thefrillyfrog.com/cdn/shop/files/Blank_472_x_472_2.png?v=1722354611&width=472);">
                  </div>
                  
                    <p>Dashing little gent</p>
                    <div class="button">
                      <a href="https://thefrillyfrog.com/collections/baby-boy-one-piece-outfits">Shop One Piece Outifts</a>
                    </div> <!-- end .button -->
                  
                </div> <!-- end .featurette -->

                
                  <div class="menus ">

                    
                      
                        <div class="menu">
                          <p class="heading">
                            <a href="/collections/boy-apparel-1" title="">Boys Apparel </a>
                          </p>
                          
                            
                            

                            <a href="/collections/boy-tops" title="">Tops + Sweaters</a>

                          
                            
                            

                            <a href="/collections/boys-bottoms" title="">Bottoms</a>

                          
                            
                            

                            <a href="/collections/boy-one-piece-outfits" title="">One-piece Outfits</a>

                          
                            
                            

                            <a href="/collections/boy-short-pant-sets" title="">Short + Pant Sets</a>

                          
                            
                            

                            <a href="/collections/boy-swimwear" title="">Swimwear</a>

                          
                            
                            

                            <a href="/collections/boy-sleepwear" title="">Sleepwear</a>

                          
                            
                            

                            <a href="/collections/boy-outerwear" title="">Outerwear</a>

                          
                        </div>
                      
                        <div class="menu">
                          <p class="heading">
                            <a href="/collections/boy-accessories-1" title="">Boys Accessories</a>
                          </p>
                          
                            
                            

                            <a href="/collections/boy-shoes-socks" title="">Shoes + Socks</a>

                          
                            
                            

                            <a href="/collections/belts-bowties" title="">Belts + Bowties</a>

                          
                            
                            

                            <a href="/collections/boy-bonnets-hats" title="">Bonnets + Hats</a>

                          
                            
                            

                            <a href="/collections/boy-undergarnemts" title="">Undergarments</a>

                          
                            
                            

                            <a href="/collections/sunglasses" title="">Sunglasses</a>

                          
                        </div>
                      
                    
                  </div> <!-- end .menus -->
                
              </div> <!-- end .secondary-content -->
            </div> <!-- end .secondary -->
          
        </div> <!-- end .link-primary -->

      

        
        
        
        

        <div class="link-primary">
          <a href="/collections/baby-1" class="primary">Baby</a>

          
            <div class="secondary">
              <div class="secondary-content">

                <div class="featurette ">
                  <div 
                    class="image"
                    style="background-image:url(//thefrillyfrog.com/cdn/shop/files/nav_baby.png?v=1717716974&width=472);">
                  </div>
                  
                    <p>First impressions</p>
                    <div class="button">
                      <a href="/collections/layette">shop layette</a>
                    </div> <!-- end .button -->
                  
                </div> <!-- end .featurette -->

                
                  <div class="menus ">

                    
                      
                        <div class="menu">
                          <p class="heading">
                            <a href="/collections/baby-girls" title="">Baby Girl</a>
                          </p>
                          
                            
                            

                            <a href="/collections/girl-footie-rompers" title="">Footies + Rompers</a>

                          
                            
                            

                            <a href="/collections/baby-girl-sleepwear-gowns" title="">Gowns</a>

                          
                            
                            

                            <a href="/collections/girl-layette" title="">Layette</a>

                          
                            
                            

                            <a href="/collections/baby-girl-one-piece-outfits" title="">One-piece Outfits</a>

                          
                            
                            

                            <a href="/collections/baby-girl-sets" title="">Baby Girl Sets</a>

                          
                            
                            

                            <a href="/collections/baby-girl-dresses-sets" title="">Dresses</a>

                          
                            
                            

                            <a href="/collections/baby-girl-swim" title="">Swimwear</a>

                          
                        </div>
                      
                        <div class="menu">
                          <p class="heading">
                            <a href="/collections/baby-boys" title="">Baby Boy</a>
                          </p>
                          
                            
                            

                            <a href="/collections/boy-footies-rompers" title="">Footies + Rompers</a>

                          
                            
                            

                            <a href="/collections/boy-converter-gown" title="">Gowns</a>

                          
                            
                            

                            <a href="/collections/boy-layette" title="">Layette</a>

                          
                            
                            

                            <a href="/collections/baby-boy-one-piece-outfits" title="">One-piece Outfit</a>

                          
                            
                            

                            <a href="/collections/baby-boys-sets" title="">Baby Boy Sets</a>

                          
                            
                            

                            <a href="/collections/baby-boys-swim" title="">Swimwear</a>

                          
                        </div>
                      
                        <div class="menu">
                          <p class="heading">
                            <a href="/collections/baby-accessories" title="">Baby Accessories</a>
                          </p>
                          
                            
                            

                            <a href="/collections/baby-bestsellers" title="">Bestselling Gifts</a>

                          
                            
                            

                            <a href="/collections/special-occasion-gifts" title="">Special Occasion Gifts</a>

                          
                            
                            

                            <a href="/collections/baby-shoes-socks" title="">Shoes + Socks</a>

                          
                            
                            

                            <a href="/collections/burp-cloths-bibs" title="">Burp Cloths + Bibs</a>

                          
                            
                            

                            <a href="/collections/blankets-swaddles" title="">Blankets + Swaddles</a>

                          
                            
                            

                            <a href="/collections/bath" title="">Bathtime</a>

                          
                            
                            

                            <a href="/collections/teethers-rattles" title="">Teethers + Soothers</a>

                          
                            
                            

                            <a href="/collections/baby-hats" title="">Hats</a>

                          
                        </div>
                      
                    
                  </div> <!-- end .menus -->
                
              </div> <!-- end .secondary-content -->
            </div> <!-- end .secondary -->
          
        </div> <!-- end .link-primary -->

      

        
        
        
        

        <div class="link-primary">
          <a href="/collections/gifts" class="primary">Gifts</a>

          
            <div class="secondary">
              <div class="secondary-content">

                <div class="featurette ">
                  <div 
                    class="image"
                    style="background-image:url(//thefrillyfrog.com/cdn/shop/files/nav_gifts.png?v=1717717295&width=472);">
                  </div>
                  
                    <p>Classic keepsakes</p>
                    <div class="button">
                      <a href="/collections/plush-toys">Shop plush</a>
                    </div> <!-- end .button -->
                  
                </div> <!-- end .featurette -->

                
                  <div class="menus ">

                    
                      <div class="menu">

                        
                          <p class="heading">
                            <a href="/collections/gifts" title="">Gifts</a>
                          </p>
                        

                        
                          <div class="columns ">
                            

                              

                              <a href="/collections/backpacks-purses-totes" title="">Bags + Luggage</a>

                            

                              

                              <a href="/collections/special-occasion-gifts" title="">Special Occasions</a>

                            

                              

                              <a href="/collections/birthday-girl" title="">Birthday</a>

                            

                              

                              <a href="/collections/bath" title="">Bath time</a>

                            

                              

                              <a href="/collections/pool" title="">Pool</a>

                            

                              

                              <a href="/collections/blankets-swaddles" title="">Blankets + Swaddles</a>

                            

                              

                              <a href="/collections/burp-cloths-bibs" title="">Burp Cloths + Bibs</a>

                            

                              

                              <a href="/collections/dolls" title="">Dolls</a>

                            

                              

                              <a href="/collections/books" title="">Books</a>

                            

                              

                              <a href="/collections/stationary" title="">Stationery</a>

                            

                              

                              <a href="/collections/best-sellers" title="">Bestselling Gifts</a>

                            

                              

                              <a href="/collections/baby-gifts-under-50" title="">Gifts Under $50</a>

                            
                          </div> <!-- end .columns -->
                        
                      </div>
                    
                  </div> <!-- end .menus -->
                
              </div> <!-- end .secondary-content -->
            </div> <!-- end .secondary -->
          
        </div> <!-- end .link-primary -->

      

        
        
        
        

        <div class="link-primary">
          <a href="/collections/toys" class="primary">Toys</a>

          
            <div class="secondary">
              <div class="secondary-content">

                <div class="featurette ">
                  <div 
                    class="image"
                    style="background-image:url(//thefrillyfrog.com/cdn/shop/files/nav_toys.png?v=1717718354&width=472);">
                  </div>
                  
                    <p>Inspiration for little explorers</p>
                    <div class="button">
                      <a href="/collections/educational-toys">shop educational toys</a>
                    </div> <!-- end .button -->
                  
                </div> <!-- end .featurette -->

                
                  <div class="menus ">

                    
                      <div class="menu">

                        
                          <p class="heading">
                            <a href="/collections/toys" title="">Toys</a>
                          </p>
                        

                        
                          <div class="columns ">
                            

                              

                              <a href="/collections/arts-and-crafts" title="">Arts + Crafts</a>

                            

                              

                              <a href="/collections/books" title="">Books</a>

                            

                              

                              <a href="/collections/dolls-dollhouses" title="">Dolls + Dollhouses</a>

                            

                              

                              <a href="/collections/dress-up" title="">Dress Up</a>

                            

                              

                              <a href="/collections/educational-toys" title="">Educational</a>

                            

                              

                              <a href="/collections/plush-toys" title="">Plush</a>

                            

                              

                              <a href="/collections/puzzles-games" title="">Puzzles + Games</a>

                            

                              

                              <a href="/collections/wooden-toys" title="">Wooden Toys</a>

                            

                              

                              <a href="/collections/teethers-rattles" title="">Rattles</a>

                            

                              

                              <a href="/collections/bestselling-toys" title="">Bestselling Toys</a>

                            

                              

                              <a href="/collections/over-the-top" title="">Over the TOP Toys</a>

                            

                              

                              <a href="/collections/toys-under-50" title="">Toys under $50</a>

                            

                              
                                <hr />
                              

                              <a href="/collections/toys-by-age-infant" title="">Infant Toys</a>

                            

                              

                              <a href="/collections/toys-by-age-1-to-2-years" title="">1-2 Years</a>

                            

                              

                              <a href="/collections/toys-by-age-3-to-4-years" title="">3-4 Years</a>

                            

                              

                              <a href="/collections/toys-by-age-5-to-6-years" title="">5-6 Years</a>

                            

                              

                              <a href="/collections/toys-7" title="">7+ Years</a>

                            
                          </div> <!-- end .columns -->
                        
                      </div>
                    
                  </div> <!-- end .menus -->
                
              </div> <!-- end .secondary-content -->
            </div> <!-- end .secondary -->
          
        </div> <!-- end .link-primary -->

      

        
        
        
        

        <div class="link-primary">
          <a href="/pages/embroidery-options" class="primary">Personalize</a>

          
            <div class="secondary">
              <div class="secondary-content">

                <div class="featurette embroidery">
                  <div 
                    class="image"
                    style="background-image:url(//thefrillyfrog.com/cdn/shop/files/nav_embroidery.png?v=1717718418&width=472);">
                  </div>
                  
                </div> <!-- end .featurette -->

                
                  <div class="menu-embroidery">
                    <?xml version="1.0" encoding="UTF-8"?>
<svg class="svg_embroidery" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1163.96 1070.91">
  <path class="svg_embroidery-1" d="M1163.61,576.36c-1.82-9.09-12.73-14.55-21.82-12.73-43.64,12.73-100,20-120-5.45-32.73-47.27,43.64-192.73,98.18-272.73,45.45-63.64,23.64-129.09-27.27-165.45,23.64-29.09,21.82-70.91-5.45-98.18-29.09-29.09-76.36-29.09-105.45,0-9.09,9.09-23.64,38.18-40,70.91-125.45,9.09-281.82,67.27-387.27,110.91-9.09,1.82-12.73,12.72-9.09,21.82,3.64,9.09,14.55,14.55,23.64,9.09,120-49.09,252.73-92.73,354.55-105.45-14.55,34.54-27.27,65.45-32.73,78.18L59.99,1040c-7.27,7.27-7.27,18.18,0,25.45,7.27,7.27,18.18,7.27,25.45,0L918.17,232.73c18.18-10.91,101.82-60,145.45-89.09,41.82,23.64,61.82,70.91,27.27,120-16.36,23.64-158.18,230.91-98.18,314.55,32.73,45.45,105.45,34.55,158.18,20,9.09-3.64,14.55-12.73,12.73-21.82h0ZM1059.98,45.45c14.55,14.55,14.55,38.18,0,52.73l-1.82,1.82c-21.82-7.27-47.27-10.91-76.36-12.73,10.91-21.82,20-38.18,25.45-43.64,14.54-12.73,38.18-12.73,52.73,1.82h0ZM943.61,174.54c7.27-16.36,14.55-32.73,21.82-49.09,20,0,38.18,0,52.73,1.82-21.81,16.36-49.09,32.73-74.54,47.27h0Z"/>
  <path class="svg_embroidery-1" d="M250.9,452.72c9.09,5.45,20,1.82,25.45-5.45,10.91-18.18,25.45-36.36,41.82-54.55l43.64,47.27c7.27,7.27,18.18,7.27,25.45,1.82,7.27-7.27,7.27-18.18,1.82-25.45l-43.63-49.09c21.82-20,47.27-38.18,76.36-56.36,9.09-5.45,10.91-16.36,5.45-25.45-5.45-9.09-16.36-10.91-25.45-5.45-30.91,20-58.18,40-81.82,60l-34.55-38.18c-7.27-7.27-18.18-7.27-25.45-1.82-7.27,7.27-7.27,18.18-1.82,25.45l34.55,38.18c-20,20-36.36,41.82-49.09,63.64-3.64,9.09-1.82,20,7.27,25.45h0Z"/>
  <path class="svg_embroidery-1" d="M121.81,558.18c-7.27-7.27-18.18-7.27-25.45,0-7.27,7.27-7.27,18.18,0,25.45l40,41.82-41.82,41.82c-7.27,7.27-7.27,18.18,0,25.45,7.27,7.27,18.18,7.27,25.45,0l41.82-41.82,41.82,41.82c7.27,7.27,18.18,7.27,25.45,0,7.27-7.27,7.27-18.18,0-25.45l-40-41.82,41.82-41.82c7.27-7.27,7.27-18.18,0-25.45-7.27-7.27-18.18-7.27-25.45,0l-41.82,41.81-41.82-41.82Z"/>
  <path class="svg_embroidery-1" d="M807.26,907.27c-7.27-7.27-18.18-7.27-25.45,0l-41.82,41.82-41.82-41.82c-7.27-7.27-18.18-7.27-25.45,0-7.27,7.27-7.27,18.18,0,25.45l41.82,41.82-41.82,41.82c-7.27,7.27-7.27,18.18,0,25.45,3.64,3.64,9.09,5.45,12.73,5.45,5.45,0,9.09-1.82,12.73-5.45l41.82-41.82,41.82,41.82c3.64,3.64,9.09,5.45,12.73,5.45,5.45,0,9.09-1.82,12.73-5.45,7.27-7.27,7.27-18.18,0-25.45l-41.82-41.82,41.82-41.82c7.27-7.27,7.27-18.18,0-25.45h0Z"/>
  <path class="svg_embroidery-1" d="M114.54,265.45c7.27,7.27,18.18,7.27,25.45,0,7.27-7.27,7.27-18.18,0-25.45l-41.82-41.82,41.82-41.82c7.27-7.27,7.27-18.18,0-25.45-7.27-7.27-18.18-7.27-25.45,0l-41.82,41.81-41.82-41.82c-7.27-7.27-18.18-7.27-25.45,0-7.27,7.27-7.27,18.18,0,25.45l41.82,41.82L5.46,239.99c-7.27,7.27-7.27,18.18,0,25.45,7.27,7.27,18.18,7.27,25.45,0l41.82-41.82,41.82,41.82Z"/>
</svg>
                    <p class="heading">We offer custom embroidery!</p>
                    <div class="text">Add a monogram to make it his or hers forever!<br />
Looking for something unique or need help making a decision? Give us a call at (864) 223-7886.<br />
We will be more than happy to help!</div>
                    <div class="button">
                      <a href="/collections/personalized">Browse eligible items</a>
                    </div> <!-- end .button -->
                  </div> <!-- end .menu-embroidery -->
                
              </div> <!-- end .secondary-content -->
            </div> <!-- end .secondary -->
          
        </div> <!-- end .link-primary -->

      

        
        
        
        

        <div class="link-primary">
          <a href="/" class="primary">Shop by Brand</a>

          
            <div class="secondary">
              <div class="secondary-content">

                <div class="featurette ">
                  <div 
                    class="image"
                    style="background-image:url(//thefrillyfrog.com/cdn/shop/files/nav_brands.png?v=1717718484&width=472);">
                  </div>
                  
                    <p>Our very own in-house line!</p>
                    <div class="button">
                      <a href="/collections/cece-wells">Shop Cece Wells</a>
                    </div> <!-- end .button -->
                  
                </div> <!-- end .featurette -->

                
                  <div class="menus ">

                    
                      <div class="menu">

                        

                        
                          <div class="columns no-height">
                            

                              

                              <a href="/collections/3-marthas" title="">3 Marthas</a>

                            

                              

                              <a href="/collections/angel-dear" title="">Angel Dear</a>

                            

                              

                              <a href="/collections/bailey-boys" title="">Bailey Boys</a>

                            

                              

                              <a href="/collections/cece-wells" title="">Cece Wells</a>

                            

                              

                              <a href="/collections/footmates" title="">Footmates</a>

                            

                              

                              <a href="/collections/james-and-lottie" title="">James and Lottie</a>

                            

                              

                              <a href="/collections/jellycat" title="">JellyCat</a>

                            

                              

                              <a href="/collections/kyte-baby" title="">Kyte Baby</a>

                            

                              

                              <a href="/collections/kissy-kissy" title="">Kissy Kissy</a>

                            

                              

                              <a href="/collections/little-english" title="">Little English</a>

                            

                              

                              <a href="/collections/luigi" title="">Luigi</a>

                            

                              

                              <a href="/collections/lullaby-set" title="">Lullaby Set</a>

                            

                              

                              <a href="/collections/lulu-bebe" title="">Lulu Bebe</a>

                            

                              

                              <a href="/collections/magnetic-me" title="">Magnetic Me</a>

                            

                              

                              <a href="/collections/petit-bebe" title="">Petit Bebe</a>

                            

                              

                              <a href="/collections/pink-chicken" title="">Pink Chicken</a>

                            

                              

                              <a href="/collections/prodoh" title="">Prodoh</a>

                            

                              

                              <a href="/collections/properly-tied" title="">Properly Tied</a>

                            

                              

                              <a href="/collections/shade-critters" title="">Shade Critters</a>

                            

                              

                              <a href="/collections/the-beaufort-bonnet-company" title="">The Beaufort Bonnet Company</a>

                            

                              

                              <a href="/collections/the-proper-peony" title="">The Proper Peony</a>

                            

                              

                              <a href="/collections/trotter-street-kids" title="">Trotter Street</a>

                            
                          </div> <!-- end .columns -->
                        
                      </div>
                    
                  </div> <!-- end .menus -->
                
              </div> <!-- end .secondary-content -->
            </div> <!-- end .secondary -->
          
        </div> <!-- end .link-primary -->

      

        
        
        
        

        <div class="link-primary">
          <a href="/collections/sale" class="primary">Outlet</a>

          
        </div> <!-- end .link-primary -->

      
    </div> <!-- end .primary -->

    <div class="border"></div>
  </nav> <!-- end nav.desktop -->
  <nav class="mobile">

  

  <div class="primary">
    
    

      
      
      
      

      <div class="link-primary">

        
          <button type="button" data="new-featured" class="primary">
            New & Featured
            <?xml version="1.0" encoding="UTF-8"?><svg id="svg_chevron_right" data-name="svg_chevron_right 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.61 725.59" class="svg_chevron_right"><path class="svg_chevron_right-1" d="M48.83,8.01C37.07-2.95,18.76-2.62,7.4,8.74c-11.36,11.36-11.68,29.68-.73,41.43l318.2,318.2L6.66,675.43c-10.95,11.75-10.63,30.07.73,41.43,11.36,11.36,29.68,11.68,41.43.73l354.79-349.22L48.83,8.01Z"/></svg>
          </button>
        

        
          <div class="secondary new-featured">

              
                <div class="menus ">

                  
                    
                      <div class="menu">
                        <p class="heading">
                          <a href="/collections/fall-2024" title="">New</a>
                        </p>
                        
                          
                          
                            <a href="/collections/baby-boys" title="">Baby Boys</a>
                          
                          
                        
                          
                          
                            <a href="/collections/baby-girls" title="">Baby Girls</a>
                          
                          
                        
                          
                          
                            <a href="/collections/boys" title="">Boys</a>
                          
                          
                        
                          
                          
                            <a href="/collections/girls" title="">Girls</a>
                          
                          
                        
                      </div>
                    
                      <div class="menu">
                        <p class="heading">
                          <a href="/collections/featured-favorites" title="">Featured</a>
                        </p>
                        
                          
                          
                            <a href="/collections/back-to-school" title="">Back to School</a>
                          
                          
                        
                          
                          
                            <a href="/collections/halloween-apparel" title="">Halloween </a>
                          
                          
                        
                          
                          
                            <a href="/collections/thanksgiving" title="">Thanksgiving</a>
                          
                          
                        
                          
                          
                            <a href="/collections/christmas" title="">Christmas</a>
                          
                          
                        
                      </div>
                    
                  
                </div> <!-- end .menus -->
              
          </div> <!-- end .secondary -->

        
      </div> <!-- end .link-primary -->

    

      
      
      
      

      <div class="link-primary">

        
          <button type="button" data="girls" class="primary">
            Girls
            <?xml version="1.0" encoding="UTF-8"?><svg id="svg_chevron_right" data-name="svg_chevron_right 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.61 725.59" class="svg_chevron_right"><path class="svg_chevron_right-1" d="M48.83,8.01C37.07-2.95,18.76-2.62,7.4,8.74c-11.36,11.36-11.68,29.68-.73,41.43l318.2,318.2L6.66,675.43c-10.95,11.75-10.63,30.07.73,41.43,11.36,11.36,29.68,11.68,41.43.73l354.79-349.22L48.83,8.01Z"/></svg>
          </button>
        

        
          <div class="secondary girls">

              
                <div class="menus ">

                  
                    
                      <div class="menu">
                        <p class="heading">
                          <a href="/collections/girl-apparel" title="">Girls Apparel</a>
                        </p>
                        
                          
                          
                            <a href="/collections/girls-tops" title="">Tops + Sweaters</a>
                          
                          
                        
                          
                          
                            <a href="/collections/girls-bottoms" title="">Bottoms</a>
                          
                          
                        
                          
                          
                            <a href="/collections/dresses-sets" title="">Dresses + Rompers</a>
                          
                          
                        
                          
                          
                            <a href="/collections/girls-sets" title="">Girl Sets</a>
                          
                          
                        
                          
                          
                            <a href="/collections/girl-swimwear" title="">Swimwear</a>
                          
                          
                        
                          
                          
                            <a href="/collections/girl-outerwear" title="">Outerwear</a>
                          
                          
                        
                      </div>
                    
                      <div class="menu">
                        <p class="heading">
                          <a href="/collections/girl-accessories" title="">Girls Accessories</a>
                        </p>
                        
                          
                          
                            <a href="/collections/bows" title="">Bows + Headbands</a>
                          
                          
                        
                          
                          
                            <a href="/collections/girl-shoes-socks" title="">Shoes + Socks</a>
                          
                          
                        
                          
                          
                            <a href="/collections/girl-bonnet-hats" title="">Bonnets + Hats</a>
                          
                          
                        
                          
                          
                            <a href="/collections/girl-undergarments" title="">Undergarments</a>
                          
                          
                        
                          
                          
                            <a href="/collections/handbags" title="">Handbags</a>
                          
                          
                        
                          
                          
                            <a href="/collections/jewelry" title="">Jewelry</a>
                          
                          
                        
                          
                          
                            <a href="/collections/sunglasses" title="">Sunglasses</a>
                          
                          
                        
                      </div>
                    
                  
                </div> <!-- end .menus -->
              
          </div> <!-- end .secondary -->

        
      </div> <!-- end .link-primary -->

    

      
      
      
      

      <div class="link-primary">

        
          <button type="button" data="boys" class="primary">
            Boys
            <?xml version="1.0" encoding="UTF-8"?><svg id="svg_chevron_right" data-name="svg_chevron_right 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.61 725.59" class="svg_chevron_right"><path class="svg_chevron_right-1" d="M48.83,8.01C37.07-2.95,18.76-2.62,7.4,8.74c-11.36,11.36-11.68,29.68-.73,41.43l318.2,318.2L6.66,675.43c-10.95,11.75-10.63,30.07.73,41.43,11.36,11.36,29.68,11.68,41.43.73l354.79-349.22L48.83,8.01Z"/></svg>
          </button>
        

        
          <div class="secondary boys">

              
                <div class="menus ">

                  
                    
                      <div class="menu">
                        <p class="heading">
                          <a href="/collections/boy-apparel-1" title="">Boys Apparel </a>
                        </p>
                        
                          
                          
                            <a href="/collections/boy-tops" title="">Tops + Sweaters</a>
                          
                          
                        
                          
                          
                            <a href="/collections/boys-bottoms" title="">Bottoms</a>
                          
                          
                        
                          
                          
                            <a href="/collections/boy-one-piece-outfits" title="">One-piece Outfits</a>
                          
                          
                        
                          
                          
                            <a href="/collections/boy-short-pant-sets" title="">Short + Pant Sets</a>
                          
                          
                        
                          
                          
                            <a href="/collections/boy-swimwear" title="">Swimwear</a>
                          
                          
                        
                          
                          
                            <a href="/collections/boy-sleepwear" title="">Sleepwear</a>
                          
                          
                        
                          
                          
                            <a href="/collections/boy-outerwear" title="">Outerwear</a>
                          
                          
                        
                      </div>
                    
                      <div class="menu">
                        <p class="heading">
                          <a href="/collections/boy-accessories-1" title="">Boys Accessories</a>
                        </p>
                        
                          
                          
                            <a href="/collections/boy-shoes-socks" title="">Shoes + Socks</a>
                          
                          
                        
                          
                          
                            <a href="/collections/belts-bowties" title="">Belts + Bowties</a>
                          
                          
                        
                          
                          
                            <a href="/collections/boy-bonnets-hats" title="">Bonnets + Hats</a>
                          
                          
                        
                          
                          
                            <a href="/collections/boy-undergarnemts" title="">Undergarments</a>
                          
                          
                        
                          
                          
                            <a href="/collections/sunglasses" title="">Sunglasses</a>
                          
                          
                        
                      </div>
                    
                  
                </div> <!-- end .menus -->
              
          </div> <!-- end .secondary -->

        
      </div> <!-- end .link-primary -->

    

      
      
      
      

      <div class="link-primary">

        
          <button type="button" data="baby" class="primary">
            Baby
            <?xml version="1.0" encoding="UTF-8"?><svg id="svg_chevron_right" data-name="svg_chevron_right 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.61 725.59" class="svg_chevron_right"><path class="svg_chevron_right-1" d="M48.83,8.01C37.07-2.95,18.76-2.62,7.4,8.74c-11.36,11.36-11.68,29.68-.73,41.43l318.2,318.2L6.66,675.43c-10.95,11.75-10.63,30.07.73,41.43,11.36,11.36,29.68,11.68,41.43.73l354.79-349.22L48.83,8.01Z"/></svg>
          </button>
        

        
          <div class="secondary baby">

              
                <div class="menus ">

                  
                    
                      <div class="menu">
                        <p class="heading">
                          <a href="/collections/baby-girls" title="">Baby Girl</a>
                        </p>
                        
                          
                          
                            <a href="/collections/girl-footie-rompers" title="">Footies + Rompers</a>
                          
                          
                        
                          
                          
                            <a href="/collections/baby-girl-sleepwear-gowns" title="">Gowns</a>
                          
                          
                        
                          
                          
                            <a href="/collections/girl-layette" title="">Layette</a>
                          
                          
                        
                          
                          
                            <a href="/collections/baby-girl-one-piece-outfits" title="">One-piece Outfits</a>
                          
                          
                        
                          
                          
                            <a href="/collections/baby-girl-sets" title="">Baby Girl Sets</a>
                          
                          
                        
                          
                          
                            <a href="/collections/baby-girl-dresses-sets" title="">Dresses</a>
                          
                          
                        
                          
                          
                            <a href="/collections/baby-girl-swim" title="">Swimwear</a>
                          
                          
                        
                      </div>
                    
                      <div class="menu">
                        <p class="heading">
                          <a href="/collections/baby-boys" title="">Baby Boy</a>
                        </p>
                        
                          
                          
                            <a href="/collections/boy-footies-rompers" title="">Footies + Rompers</a>
                          
                          
                        
                          
                          
                            <a href="/collections/boy-converter-gown" title="">Gowns</a>
                          
                          
                        
                          
                          
                            <a href="/collections/boy-layette" title="">Layette</a>
                          
                          
                        
                          
                          
                            <a href="/collections/baby-boy-one-piece-outfits" title="">One-piece Outfit</a>
                          
                          
                        
                          
                          
                            <a href="/collections/baby-boys-sets" title="">Baby Boy Sets</a>
                          
                          
                        
                          
                          
                            <a href="/collections/baby-boys-swim" title="">Swimwear</a>
                          
                          
                        
                      </div>
                    
                      <div class="menu">
                        <p class="heading">
                          <a href="/collections/baby-accessories" title="">Baby Accessories</a>
                        </p>
                        
                          
                          
                            <a href="/collections/baby-bestsellers" title="">Bestselling Gifts</a>
                          
                          
                        
                          
                          
                            <a href="/collections/special-occasion-gifts" title="">Special Occasion Gifts</a>
                          
                          
                        
                          
                          
                            <a href="/collections/baby-shoes-socks" title="">Shoes + Socks</a>
                          
                          
                        
                          
                          
                            <a href="/collections/burp-cloths-bibs" title="">Burp Cloths + Bibs</a>
                          
                          
                        
                          
                          
                            <a href="/collections/blankets-swaddles" title="">Blankets + Swaddles</a>
                          
                          
                        
                          
                          
                            <a href="/collections/bath" title="">Bathtime</a>
                          
                          
                        
                          
                          
                            <a href="/collections/teethers-rattles" title="">Teethers + Soothers</a>
                          
                          
                        
                          
                          
                            <a href="/collections/baby-hats" title="">Hats</a>
                          
                          
                        
                      </div>
                    
                  
                </div> <!-- end .menus -->
              
          </div> <!-- end .secondary -->

        
      </div> <!-- end .link-primary -->

    

      
      
      
      

      <div class="link-primary">

        
          <button type="button" data="gifts" class="primary">
            Gifts
            <?xml version="1.0" encoding="UTF-8"?><svg id="svg_chevron_right" data-name="svg_chevron_right 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.61 725.59" class="svg_chevron_right"><path class="svg_chevron_right-1" d="M48.83,8.01C37.07-2.95,18.76-2.62,7.4,8.74c-11.36,11.36-11.68,29.68-.73,41.43l318.2,318.2L6.66,675.43c-10.95,11.75-10.63,30.07.73,41.43,11.36,11.36,29.68,11.68,41.43.73l354.79-349.22L48.83,8.01Z"/></svg>
          </button>
        

        
          <div class="secondary gifts">

              
                <div class="menus ">

                  
                    <div class="menu">

                      
                        <p class="heading">
                          <a href="/collections/gifts" title="">Gifts</a>
                        </p>
                      

                      
                        <div class="columns ">
                          

                            
                              <a href="/collections/backpacks-purses-totes" title="">Bags + Luggage</a>
                            

                          

                            
                              <a href="/collections/special-occasion-gifts" title="">Special Occasions</a>
                            

                          

                            
                              <a href="/collections/birthday-girl" title="">Birthday</a>
                            

                          

                            
                              <a href="/collections/bath" title="">Bath time</a>
                            

                          

                            
                              <a href="/collections/pool" title="">Pool</a>
                            

                          

                            
                              <a href="/collections/blankets-swaddles" title="">Blankets + Swaddles</a>
                            

                          

                            
                              <a href="/collections/burp-cloths-bibs" title="">Burp Cloths + Bibs</a>
                            

                          

                            
                              <a href="/collections/dolls" title="">Dolls</a>
                            

                          

                            
                              <a href="/collections/books" title="">Books</a>
                            

                          

                            
                              <a href="/collections/stationary" title="">Stationery</a>
                            

                          

                            
                              <a href="/collections/best-sellers" title="">Bestselling Gifts</a>
                            

                          

                            
                              <a href="/collections/baby-gifts-under-50" title="">Gifts Under $50</a>
                            

                          
                        </div> <!-- end .columns -->
                      
                    </div>
                  
                </div> <!-- end .menus -->
              
          </div> <!-- end .secondary -->

        
      </div> <!-- end .link-primary -->

    

      
      
      
      

      <div class="link-primary">

        
          <button type="button" data="toys" class="primary">
            Toys
            <?xml version="1.0" encoding="UTF-8"?><svg id="svg_chevron_right" data-name="svg_chevron_right 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.61 725.59" class="svg_chevron_right"><path class="svg_chevron_right-1" d="M48.83,8.01C37.07-2.95,18.76-2.62,7.4,8.74c-11.36,11.36-11.68,29.68-.73,41.43l318.2,318.2L6.66,675.43c-10.95,11.75-10.63,30.07.73,41.43,11.36,11.36,29.68,11.68,41.43.73l354.79-349.22L48.83,8.01Z"/></svg>
          </button>
        

        
          <div class="secondary toys">

              
                <div class="menus ">

                  
                    <div class="menu">

                      
                        <p class="heading">
                          <a href="/collections/toys" title="">Toys</a>
                        </p>
                      

                      
                        <div class="columns ">
                          

                            
                              <a href="/collections/arts-and-crafts" title="">Arts + Crafts</a>
                            

                          

                            
                              <a href="/collections/books" title="">Books</a>
                            

                          

                            
                              <a href="/collections/dolls-dollhouses" title="">Dolls + Dollhouses</a>
                            

                          

                            
                              <a href="/collections/dress-up" title="">Dress Up</a>
                            

                          

                            
                              <a href="/collections/educational-toys" title="">Educational</a>
                            

                          

                            
                              <a href="/collections/plush-toys" title="">Plush</a>
                            

                          

                            
                              <a href="/collections/puzzles-games" title="">Puzzles + Games</a>
                            

                          

                            
                              <a href="/collections/wooden-toys" title="">Wooden Toys</a>
                            

                          

                            
                              <a href="/collections/teethers-rattles" title="">Rattles</a>
                            

                          

                            
                              <a href="/collections/bestselling-toys" title="">Bestselling Toys</a>
                            

                          

                            
                              <a href="/collections/over-the-top" title="">Over the TOP Toys</a>
                            

                          

                            
                              <a href="/collections/toys-under-50" title="">Toys under $50</a>
                            

                          

                            
                              <p class="heading">
                                <a href="/collections/toys-by-age-infant" title="">Infant Toys</a>
                              </p>
                            

                          

                            
                              <a href="/collections/toys-by-age-1-to-2-years" title="">1-2 Years</a>
                            

                          

                            
                              <a href="/collections/toys-by-age-3-to-4-years" title="">3-4 Years</a>
                            

                          

                            
                              <a href="/collections/toys-by-age-5-to-6-years" title="">5-6 Years</a>
                            

                          

                            
                              <a href="/collections/toys-7" title="">7+ Years</a>
                            

                          
                        </div> <!-- end .columns -->
                      
                    </div>
                  
                </div> <!-- end .menus -->
              
          </div> <!-- end .secondary -->

        
      </div> <!-- end .link-primary -->

    

      
      
      
      

      <div class="link-primary">

        
          <button type="button" data="personalize" class="primary">
            Personalize
            <?xml version="1.0" encoding="UTF-8"?><svg id="svg_chevron_right" data-name="svg_chevron_right 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.61 725.59" class="svg_chevron_right"><path class="svg_chevron_right-1" d="M48.83,8.01C37.07-2.95,18.76-2.62,7.4,8.74c-11.36,11.36-11.68,29.68-.73,41.43l318.2,318.2L6.66,675.43c-10.95,11.75-10.63,30.07.73,41.43,11.36,11.36,29.68,11.68,41.43.73l354.79-349.22L48.83,8.01Z"/></svg>
          </button>
        

        
          <div class="secondary personalize">

              
                <div class="menu-embroidery">
                  <?xml version="1.0" encoding="UTF-8"?>
<svg class="svg_embroidery" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1163.96 1070.91">
  <path class="svg_embroidery-1" d="M1163.61,576.36c-1.82-9.09-12.73-14.55-21.82-12.73-43.64,12.73-100,20-120-5.45-32.73-47.27,43.64-192.73,98.18-272.73,45.45-63.64,23.64-129.09-27.27-165.45,23.64-29.09,21.82-70.91-5.45-98.18-29.09-29.09-76.36-29.09-105.45,0-9.09,9.09-23.64,38.18-40,70.91-125.45,9.09-281.82,67.27-387.27,110.91-9.09,1.82-12.73,12.72-9.09,21.82,3.64,9.09,14.55,14.55,23.64,9.09,120-49.09,252.73-92.73,354.55-105.45-14.55,34.54-27.27,65.45-32.73,78.18L59.99,1040c-7.27,7.27-7.27,18.18,0,25.45,7.27,7.27,18.18,7.27,25.45,0L918.17,232.73c18.18-10.91,101.82-60,145.45-89.09,41.82,23.64,61.82,70.91,27.27,120-16.36,23.64-158.18,230.91-98.18,314.55,32.73,45.45,105.45,34.55,158.18,20,9.09-3.64,14.55-12.73,12.73-21.82h0ZM1059.98,45.45c14.55,14.55,14.55,38.18,0,52.73l-1.82,1.82c-21.82-7.27-47.27-10.91-76.36-12.73,10.91-21.82,20-38.18,25.45-43.64,14.54-12.73,38.18-12.73,52.73,1.82h0ZM943.61,174.54c7.27-16.36,14.55-32.73,21.82-49.09,20,0,38.18,0,52.73,1.82-21.81,16.36-49.09,32.73-74.54,47.27h0Z"/>
  <path class="svg_embroidery-1" d="M250.9,452.72c9.09,5.45,20,1.82,25.45-5.45,10.91-18.18,25.45-36.36,41.82-54.55l43.64,47.27c7.27,7.27,18.18,7.27,25.45,1.82,7.27-7.27,7.27-18.18,1.82-25.45l-43.63-49.09c21.82-20,47.27-38.18,76.36-56.36,9.09-5.45,10.91-16.36,5.45-25.45-5.45-9.09-16.36-10.91-25.45-5.45-30.91,20-58.18,40-81.82,60l-34.55-38.18c-7.27-7.27-18.18-7.27-25.45-1.82-7.27,7.27-7.27,18.18-1.82,25.45l34.55,38.18c-20,20-36.36,41.82-49.09,63.64-3.64,9.09-1.82,20,7.27,25.45h0Z"/>
  <path class="svg_embroidery-1" d="M121.81,558.18c-7.27-7.27-18.18-7.27-25.45,0-7.27,7.27-7.27,18.18,0,25.45l40,41.82-41.82,41.82c-7.27,7.27-7.27,18.18,0,25.45,7.27,7.27,18.18,7.27,25.45,0l41.82-41.82,41.82,41.82c7.27,7.27,18.18,7.27,25.45,0,7.27-7.27,7.27-18.18,0-25.45l-40-41.82,41.82-41.82c7.27-7.27,7.27-18.18,0-25.45-7.27-7.27-18.18-7.27-25.45,0l-41.82,41.81-41.82-41.82Z"/>
  <path class="svg_embroidery-1" d="M807.26,907.27c-7.27-7.27-18.18-7.27-25.45,0l-41.82,41.82-41.82-41.82c-7.27-7.27-18.18-7.27-25.45,0-7.27,7.27-7.27,18.18,0,25.45l41.82,41.82-41.82,41.82c-7.27,7.27-7.27,18.18,0,25.45,3.64,3.64,9.09,5.45,12.73,5.45,5.45,0,9.09-1.82,12.73-5.45l41.82-41.82,41.82,41.82c3.64,3.64,9.09,5.45,12.73,5.45,5.45,0,9.09-1.82,12.73-5.45,7.27-7.27,7.27-18.18,0-25.45l-41.82-41.82,41.82-41.82c7.27-7.27,7.27-18.18,0-25.45h0Z"/>
  <path class="svg_embroidery-1" d="M114.54,265.45c7.27,7.27,18.18,7.27,25.45,0,7.27-7.27,7.27-18.18,0-25.45l-41.82-41.82,41.82-41.82c7.27-7.27,7.27-18.18,0-25.45-7.27-7.27-18.18-7.27-25.45,0l-41.82,41.81-41.82-41.82c-7.27-7.27-18.18-7.27-25.45,0-7.27,7.27-7.27,18.18,0,25.45l41.82,41.82L5.46,239.99c-7.27,7.27-7.27,18.18,0,25.45,7.27,7.27,18.18,7.27,25.45,0l41.82-41.82,41.82,41.82Z"/>
</svg>
                  <p class="heading"></p>
                  <div class="text"></div>
                  <div class="button">
                    <a href=""></a>
                  </div> <!-- end .button -->
                </div> <!-- end .menu-embroidery -->

              
          </div> <!-- end .secondary -->

        
      </div> <!-- end .link-primary -->

    

      
      
      
      

      <div class="link-primary">

        
          <button type="button" data="shop-by-brand" class="primary">
            Shop by Brand
            <?xml version="1.0" encoding="UTF-8"?><svg id="svg_chevron_right" data-name="svg_chevron_right 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.61 725.59" class="svg_chevron_right"><path class="svg_chevron_right-1" d="M48.83,8.01C37.07-2.95,18.76-2.62,7.4,8.74c-11.36,11.36-11.68,29.68-.73,41.43l318.2,318.2L6.66,675.43c-10.95,11.75-10.63,30.07.73,41.43,11.36,11.36,29.68,11.68,41.43.73l354.79-349.22L48.83,8.01Z"/></svg>
          </button>
        

        
          <div class="secondary shop-by-brand">

              
                <div class="menus ">

                  
                    <div class="menu">

                      

                      
                        <div class="columns no-height">
                          

                            
                              <a href="/collections/3-marthas" title="">3 Marthas</a>
                            

                          

                            
                              <a href="/collections/angel-dear" title="">Angel Dear</a>
                            

                          

                            
                              <a href="/collections/bailey-boys" title="">Bailey Boys</a>
                            

                          

                            
                              <a href="/collections/cece-wells" title="">Cece Wells</a>
                            

                          

                            
                              <a href="/collections/footmates" title="">Footmates</a>
                            

                          

                            
                              <a href="/collections/james-and-lottie" title="">James and Lottie</a>
                            

                          

                            
                              <a href="/collections/jellycat" title="">JellyCat</a>
                            

                          

                            
                              <a href="/collections/kyte-baby" title="">Kyte Baby</a>
                            

                          

                            
                              <a href="/collections/kissy-kissy" title="">Kissy Kissy</a>
                            

                          

                            
                              <a href="/collections/little-english" title="">Little English</a>
                            

                          

                            
                              <a href="/collections/luigi" title="">Luigi</a>
                            

                          

                            
                              <a href="/collections/lullaby-set" title="">Lullaby Set</a>
                            

                          

                            
                              <a href="/collections/lulu-bebe" title="">Lulu Bebe</a>
                            

                          

                            
                              <a href="/collections/magnetic-me" title="">Magnetic Me</a>
                            

                          

                            
                              <a href="/collections/petit-bebe" title="">Petit Bebe</a>
                            

                          

                            
                              <a href="/collections/pink-chicken" title="">Pink Chicken</a>
                            

                          

                            
                              <a href="/collections/prodoh" title="">Prodoh</a>
                            

                          

                            
                              <a href="/collections/properly-tied" title="">Properly Tied</a>
                            

                          

                            
                              <a href="/collections/shade-critters" title="">Shade Critters</a>
                            

                          

                            
                              <a href="/collections/the-beaufort-bonnet-company" title="">The Beaufort Bonnet Company</a>
                            

                          

                            
                              <a href="/collections/the-proper-peony" title="">The Proper Peony</a>
                            

                          

                            
                              <a href="/collections/trotter-street-kids" title="">Trotter Street</a>
                            

                          
                        </div> <!-- end .columns -->
                      
                    </div>
                  
                </div> <!-- end .menus -->
              
          </div> <!-- end .secondary -->

        
      </div> <!-- end .link-primary -->

    

      
      
      
      

      <div class="link-primary">

        
          <a href="/collections/sale" class="primary">Outlet</a>
        

        
      </div> <!-- end .link-primary -->

    
  </div> <!-- end .primary -->

  <div class="primary primary-footer">
    
    

      <div class="link-primary">

        <button type="button" data="company" class="primary">
          Company
          <?xml version="1.0" encoding="UTF-8"?><svg id="svg_chevron_right" data-name="svg_chevron_right 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.61 725.59" class="svg_chevron_right"><path class="svg_chevron_right-1" d="M48.83,8.01C37.07-2.95,18.76-2.62,7.4,8.74c-11.36,11.36-11.68,29.68-.73,41.43l318.2,318.2L6.66,675.43c-10.95,11.75-10.63,30.07.73,41.43,11.36,11.36,29.68,11.68,41.43.73l354.79-349.22L48.83,8.01Z"/></svg>
        </button>

        <div class="secondary company">
          <div class="menus">
            
              <a href="/pages/about-us" title="">About Us</a>
            
              <a href="/pages/career-opportunities" title="">Careers</a>
            
              <a href="/pages/events-clay-rice" title="">Events</a>
            
              <a href="/pages/contact-us" title="">Contact Us</a>
            
          </div> <!-- end .menus -->
        </div> <!-- end .secondary -->

      </div> <!-- end .link-primary -->

    

      <div class="link-primary">

        <button type="button" data="customer-care" class="primary">
          Customer Care
          <?xml version="1.0" encoding="UTF-8"?><svg id="svg_chevron_right" data-name="svg_chevron_right 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.61 725.59" class="svg_chevron_right"><path class="svg_chevron_right-1" d="M48.83,8.01C37.07-2.95,18.76-2.62,7.4,8.74c-11.36,11.36-11.68,29.68-.73,41.43l318.2,318.2L6.66,675.43c-10.95,11.75-10.63,30.07.73,41.43,11.36,11.36,29.68,11.68,41.43.73l354.79-349.22L48.83,8.01Z"/></svg>
        </button>

        <div class="secondary customer-care">
          <div class="menus">
            
              <a href="/pages/return-policy" title="">Policies</a>
            
              <a href="/pages/faq" title="">FAQ</a>
            
              <a href="/products/gift-card-2" title="">Gift Cards</a>
            
              <a href="/apps/giftregistry" title="">Gift Registry</a>
            
          </div> <!-- end .menus -->
        </div> <!-- end .secondary -->

      </div> <!-- end .link-primary -->

    
  </div> <!-- end .primary.primary-footer -->


  <div class="mobile-nav-secondary">

    <div class="microaccount">
      
        <a href="/account/login">Account sign in</a>
        <a href="/account/register">Create account</a>
      
    </div> <!-- end .microaccount -->

    <form action="/search" method="get">
      <label for="theme_nav_mobile_search" class="visuallyhidden">Search</label>
      <input type="hidden" name="type" value="product" />
      <input id="theme_nav_mobile_search" type="text" name="q" placeholder="Search" >
      <button type="submit" aria-label="search">
        <svg viewBox="0 0 1080.1 1080.02" class="svg_search">
  <path class="svg_search-1" d="M48.11,1080c-42,1.2-64.8-52.8-33.6-81.6l337.2-338.4c-55.2-69.6-87.6-157.2-87.6-252C264.1,183.6,446.5,0,672.1,0s408,183.6,408,408-183.6,408-408,408c-94.8,0-182.4-32.4-252-87.6l-338.4,337.2c-9.6,9.6-21.6,14.4-33.6,14.4h0ZM672.11,96c-171.6,0-312,140.4-312,312s140.4,312,312,312,312-140.4,312-312S843.71,96,672.11,96Z"/>
</svg>
      </button>
    </form>

    <div class="social">
      <div class="links">
        <a href="https://www.instagram.com/thefrillyfrog/" target="_blank">
          <svg viewBox="0 0 448 448.15" class="svg-instagram">
  <path class="svg-instagram-1" d="M224.1,109.18c-63.6,0-114.9,51.3-114.9,114.9s51.3,114.9,114.9,114.9,114.9-51.3,114.9-114.9-51.3-114.9-114.9-114.9ZM224.1,298.78c-41.1,0-74.7-33.5-74.7-74.7s33.5-74.7,74.7-74.7,74.7,33.5,74.7,74.7-33.6,74.7-74.7,74.7h0ZM370.5,104.48c0,14.9-12,26.8-26.8,26.8s-26.8-12-26.8-26.8,12-26.8,26.8-26.8,26.8,12,26.8,26.8ZM446.6,131.68c-1.7-35.9-9.9-67.7-36.2-93.9C384.2,11.58,352.4,3.37,316.5,1.58c-37-2.1-147.9-2.1-184.9,0-35.8,1.7-67.6,9.9-93.9,36.1S3.3,95.68,1.5,131.57c-2.1,37-2.1,147.9,0,184.9,1.7,35.9,9.9,67.7,36.2,93.9,26.3,26.2,58,34.4,93.9,36.2,37,2.1,147.9,2.1,184.9,0,35.9-1.7,67.7-9.9,93.9-36.2,26.2-26.2,34.4-58,36.2-93.9,2.1-37,2.1-147.8,0-184.8h0ZM398.8,356.18c-7.8,19.6-22.9,34.7-42.6,42.6-29.5,11.7-99.5,9-132.1,9s-102.7,2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7,9-132.1c7.8-19.6,22.9-34.7,42.6-42.6,29.5-11.7,99.5-9,132.1-9s102.7-2.6,132.1,9c19.6,7.8,34.7,22.9,42.6,42.6,11.7,29.5,9,99.5,9,132.1s2.7,102.7-9,132.1Z"/>
</svg>
          Instagram
        </a>
        <a href="https://www.facebook.com/thefrillyfrog" target="_blank">
          <svg viewBox="0 0 274.22 512" class="svg-facebook">
  <path class="svg-facebook-1" d="M256.25,288l14.22-92.66h-88.91v-60.13c0-25.35,12.42-50.06,52.24-50.06h40.42V6.26S237.54,0,202.47,0c-73.22,0-121.08,44.38-121.08,124.72v70.62H0v92.66h81.39v224h100.17v-224h74.69Z"/>
</svg>
          Facebook
        </a>
        <a href="https://www.pinterest.com/thefrillyfrog/" target="_blank">
          <svg viewBox="0 0 496 496" class="svg-pinterest">
  <path class="svg-pinterest-1" d="M496,248c0,137-111,248-248,248-25.6,0-50.2-3.9-73.4-11.1,10.1-16.5,25.2-43.5,30.8-65,3-11.6,15.4-59,15.4-59,8.1,15.4,31.7,28.5,56.8,28.5,74.8,0,128.7-68.8,128.7-154.3s-66.9-143.2-152.9-143.2c-107,0-163.9,71.8-163.9,150.1,0,36.4,19.4,81.7,50.3,96.1,4.7,2.2,7.2,1.2,8.3-3.3.8-3.4,5-20.3,6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6,0-54.7,41.4-107.6,112-107.6,60.9,0,103.6,41.5,103.6,100.9,0,67.1-33.9,113.6-78,113.6-24.3,0-42.6-20.1-36.7-44.8,7-29.5,20.5-61.3,20.5-82.6,0-19-10.2-34.9-31.4-34.9-24.9,0-44.9,25.7-44.9,60.2,0,22,7.4,36.8,7.4,36.8,0,0-24.5,103.8-29,123.2-5,21.4-3,51.6-.9,71.2C65.4,442.9,0,353.1,0,248,0,111,111,0,248,0s248,111,248,248Z"/>
</svg>
          Pinterest
        </a>
      </div> <!-- end .links -->
    </div> <!-- end .social -->

  </div> <!-- end .mobile-nav-secondary -->

</nav> <!-- end nav.mobile -->


<script>

  // click navicon (display mobile nav)
  $('.navicon').click(function() {

    $(this).toggleClass('active');

    var status = $('nav.mobile').hasClass('active');
    if(status == false) {
      $('nav.mobile').addClass('active');
      setTimeout(function(){
        $('.mobile-nav-secondary').addClass('active');
      }, 500);
    } else {
      $('nav.mobile').removeClass('active');
      $('.mobile-nav-secondary').removeClass('active');
    }
  });

  // hide nav
  $('.close-nav button').click(function() {
    $('nav.mobile').removeClass('active');
  });

  // display subnav
  $('nav.mobile button.primary').click(function() {

    // update caret direction
    $(this).toggleClass('active');

    // display secondary navigation
    var handle = $(this).attr('data');
    $('.secondary.' + handle).toggleClass('active');
  });
</script>

</header>


<script>
  $('.searchicon').click(function() {
    $('.header_search').toggleClass('active');
    $('.header_search input').focus();
  });

  $(document).on('keydown', function(event) {
    if(event.key === "Escape" || event.keyCode === 27) {
			$('.header_search').removeClass('active');
    }
  });

  $('.minisearch input').focus(function() {
    $(this).addClass('active');
  });
  $('.minisearch input').blur(function() {
    $(this).removeClass('active');
    $(this).val('');
  });

</script>


</div>

		<main id="main">
			
			<div id="shopify-section-template--17875626721429__main" class="shopify-section index-slideshow">
<div class="slide-nav"></div>

<div class="slides">

	<div class="slidertemplate17875626721429main">
		
			<div class="slide">

				
					<img src="//thefrillyfrog.com/cdn/shop/files/TBBC-slider.png?v=1726756632&amp;width=2760" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/TBBC-slider.png?v=1726756632&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/TBBC-slider.png?v=1726756632&amp;width=832 832w, //thefrillyfrog.com/cdn/shop/files/TBBC-slider.png?v=1726756632&amp;width=1200 1200w, //thefrillyfrog.com/cdn/shop/files/TBBC-slider.png?v=1726756632&amp;width=1920 1920w, //thefrillyfrog.com/cdn/shop/files/TBBC-slider.png?v=1726756632&amp;width=2760 2760w" width="2760" height="1840" class="desktop">
				
				
					<img src="//thefrillyfrog.com/cdn/shop/files/TBBC-slider.png?v=1726756632&amp;width=2760" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/TBBC-slider.png?v=1726756632&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/TBBC-slider.png?v=1726756632&amp;width=832 832w, //thefrillyfrog.com/cdn/shop/files/TBBC-slider.png?v=1726756632&amp;width=1200 1200w, //thefrillyfrog.com/cdn/shop/files/TBBC-slider.png?v=1726756632&amp;width=1920 1920w, //thefrillyfrog.com/cdn/shop/files/TBBC-slider.png?v=1726756632&amp;width=2760 2760w" width="2760" height="1840" class="mobile">
				

				
					<div class="button">
						<a href="/collections/the-beaufort-bonnet-company">
							<p>The Beaufort Bonnet Company</p>
							<span class="flourish"></span>
						</a>
					</div> <!-- end .button -->
				
			</div> <!-- end .slide -->
		
			<div class="slide">

				
					<img src="//thefrillyfrog.com/cdn/shop/files/little-english-slider.png?v=1726757677&amp;width=2760" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/little-english-slider.png?v=1726757677&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/little-english-slider.png?v=1726757677&amp;width=832 832w, //thefrillyfrog.com/cdn/shop/files/little-english-slider.png?v=1726757677&amp;width=1200 1200w, //thefrillyfrog.com/cdn/shop/files/little-english-slider.png?v=1726757677&amp;width=1920 1920w, //thefrillyfrog.com/cdn/shop/files/little-english-slider.png?v=1726757677&amp;width=2760 2760w" width="2760" height="1840" class="desktop">
				
				
					<img src="//thefrillyfrog.com/cdn/shop/files/little-english-slider.png?v=1726757677&amp;width=2760" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/little-english-slider.png?v=1726757677&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/little-english-slider.png?v=1726757677&amp;width=832 832w, //thefrillyfrog.com/cdn/shop/files/little-english-slider.png?v=1726757677&amp;width=1200 1200w, //thefrillyfrog.com/cdn/shop/files/little-english-slider.png?v=1726757677&amp;width=1920 1920w, //thefrillyfrog.com/cdn/shop/files/little-english-slider.png?v=1726757677&amp;width=2760 2760w" width="2760" height="1840" class="mobile">
				

				
					<div class="button">
						<a href="/collections/little-english">
							<p>Little English</p>
							<span class="flourish"></span>
						</a>
					</div> <!-- end .button -->
				
			</div> <!-- end .slide -->
		
			<div class="slide">

				
					<img src="//thefrillyfrog.com/cdn/shop/files/jellycat-slider.png?v=1726757427&amp;width=2760" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/jellycat-slider.png?v=1726757427&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/jellycat-slider.png?v=1726757427&amp;width=832 832w, //thefrillyfrog.com/cdn/shop/files/jellycat-slider.png?v=1726757427&amp;width=1200 1200w, //thefrillyfrog.com/cdn/shop/files/jellycat-slider.png?v=1726757427&amp;width=1920 1920w, //thefrillyfrog.com/cdn/shop/files/jellycat-slider.png?v=1726757427&amp;width=2760 2760w" width="2760" height="1840" class="desktop">
				
				
					<img src="//thefrillyfrog.com/cdn/shop/files/jellycat-slider.png?v=1726757427&amp;width=2760" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/jellycat-slider.png?v=1726757427&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/jellycat-slider.png?v=1726757427&amp;width=832 832w, //thefrillyfrog.com/cdn/shop/files/jellycat-slider.png?v=1726757427&amp;width=1200 1200w, //thefrillyfrog.com/cdn/shop/files/jellycat-slider.png?v=1726757427&amp;width=1920 1920w, //thefrillyfrog.com/cdn/shop/files/jellycat-slider.png?v=1726757427&amp;width=2760 2760w" width="2760" height="1840" class="mobile">
				

				
					<div class="button">
						<a href="/collections/jellycat">
							<p>Jellycat</p>
							<span class="flourish"></span>
						</a>
					</div> <!-- end .button -->
				
			</div> <!-- end .slide -->
		
	</div> <!-- end .slidertemplate17875626721429main -->
</div> <!-- end .slides -->

<div class="white-border"></div>

<script>

	//  kenwheeler/slick is licensed under the MIT License: https://github.com/kenwheeler/slick/blob/master/LICENSE

  // This will only render in the theme editor
	

	$(document).ready(function(){
		runSlickSlidertemplate17875626721429main();
	});

	function runSlickSlidertemplate17875626721429main() {
		$('.slidertemplate17875626721429main').slick({
			lazyLoad: 'progressive',
			adaptiveHeight: false,
			fade: true,
			autoplay: false,
			infinite: true,
			speed: 250,

			// dots
			dots: true,

			// arrows
			arrows: true,
			appendArrows: '.slide-nav',
			prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><?xml version="1.0" encoding="UTF-8"?><svg id="svg_arrow_left" data-name="svg_arrow_left 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 851.49 618.06" class="svg_arrow_left"><path class="svg_arrow_left-1" d="M815.49,274.86H123.09L336.69,61.26c9-9.21,12.41-22.54,8.93-34.94s-13.32-22.01-25.8-25.2-25.72.52-34.72,9.74L10.29,285.66c-6.6,6.73-10.29,15.78-10.29,25.2s3.7,18.47,10.29,25.2l274.8,274.8c9.32,6.99,21.45,9.04,32.55,5.49,11.1-3.54,19.8-12.24,23.34-23.34,3.55-11.1,1.5-23.23-5.49-32.55l-212.4-213.6h692.4c12.86,0,24.75-6.86,31.18-18,6.43-11.14,6.43-24.86,0-36-6.43-11.14-18.31-18-31.18-18h0Z"/></svg></button>',
			nextArrow: '<button type="button" class="slick-next" aria-label="Next"><?xml version="1.0" encoding="UTF-8"?><svg id="svg_arrow_left" data-name="svg_arrow_left 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 851.49 618.06" class="svg_arrow_left"><path class="svg_arrow_left-1" d="M815.49,274.86H123.09L336.69,61.26c9-9.21,12.41-22.54,8.93-34.94s-13.32-22.01-25.8-25.2-25.72.52-34.72,9.74L10.29,285.66c-6.6,6.73-10.29,15.78-10.29,25.2s3.7,18.47,10.29,25.2l274.8,274.8c9.32,6.99,21.45,9.04,32.55,5.49,11.1-3.54,19.8-12.24,23.34-23.34,3.55-11.1,1.5-23.23-5.49-32.55l-212.4-213.6h692.4c12.86,0,24.75-6.86,31.18-18,6.43-11.14,6.43-24.86,0-36-6.43-11.14-18.31-18-31.18-18h0Z"/></svg></button>',

			// responsive
			responsive: [
				{breakpoint: 834,
					settings: {
						fade: false,
						arrows: false
					}
				}
			]
		});
	}
	
</script>


</div><div id="shopify-section-template--17875626721429__index_heading_UFbzTx" class="shopify-section index-heading"><h1>The Frilly Frog offers a curated collection of the best for baby all the way to tween,<br />
specializing in timeless classics, play, layette and gifts.</h1>


</div><div id="shopify-section-template--17875626721429__index_panels_668wzN" class="shopify-section index-panels"><div class="panel left">

  <div class="image vertical" style="background-image: url(//thefrillyfrog.com/cdn/shop/files/Setfashions669ff92379e564669ff9237a11c.93736216669ff9237a11c.png?v=1724355450&width=1298);" aria-label=""></div>

  <p>The Halloween Shop</p>

  <a href="https://thefrillyfrog.com/collections/halloween">All things spooky</a>

</div> <!-- end .panel.left -->

<div class="panel right">

  <div class="image vertical" style="background-image: url(//thefrillyfrog.com/cdn/shop/files/ProdohMonday-249.jpg?v=1722270308&width=1298);" aria-label=""></div>

  <p>All Things Fall</p>

  <a href="https://thefrillyfrog.com/collections/fall-2024">Shop Cozy Fall Picks</a>

</div> <!-- end .panel.right -->



</div><div id="shopify-section-template--17875626721429__index_icons_YmyU6t" class="shopify-section index-icon-bar"><style>
  .template--17875626721429__index_icons_YmyU6ticon_1 .image {background-size: 51px;}
  .template--17875626721429__index_icons_YmyU6ticon_2 .image {background-size: 47px;}
  .template--17875626721429__index_icons_YmyU6ticon_3 .image {background-size: 50px;}
  .template--17875626721429__index_icons_YmyU6ticon_4 .image {background-size: 64px;}
</style>

<div class="icons">
  <a href="/products/gift-card-2" class="icon icon1 template--17875626721429__index_icons_YmyU6ticon_1">
    <div class="image" style="background-image: url(//thefrillyfrog.com/cdn/shop/files/icon_gift_card.png?v=1717642348&width=128);" aria-label=""></div>
    <p>Instant easy gifting!</p>
    <span>Shop gift cards</span>
  </a> <!-- end .icon.icon_1 -->

  <a href="/pages/embroidery-options" class="icon icon2 template--17875626721429__index_icons_YmyU6ticon_2">
    <div class="image" style="background-image: url(//thefrillyfrog.com/cdn/shop/files/icon_embroidery.png?v=1717642353&width=128);" aria-label=""></div>
    <p>We offer monogramming</p>
    <span>Learn more</span>
  </a> <!-- end .icon.icon_2 -->

  <div class="monogram"></div>

  <a href="/pages/contact-us" class="icon icon3 template--17875626721429__index_icons_YmyU6ticon_3">
    <div class="image" style="background-image: url(//thefrillyfrog.com/cdn/shop/files/icon_storefront.png?v=1717642385&width=128);" aria-label=""></div>
    <p>Visit our retail store</p>
    <span>Get directions</span>
  </a> <!-- end .icon.icon_3 -->

  <a href="" class="icon icon4 template--17875626721429__index_icons_YmyU6ticon_4">
    <div class="image" style="background-image: url(//thefrillyfrog.com/cdn/shop/files/icon_shipping.png?v=1717642394&width=128);" aria-label=""></div>
    <p>Free shipping <br />
on orders over $125</p>
    <span></span>
  </a> <!-- end .icon.icon_4 -->
  <div class="break"></div>
</div> <!-- end .icons -->




</div><div id="shopify-section-template--17875626721429__index_featured_collections_AnxmxD" class="shopify-section index-featured-collections">
  <h2>Let Them Play</h2>



  <p class="subtitle">Unique and delightful finds for ages infant to 7+ years!</p>




  <div class="links">
    
      <a href="/collections/bestselling-toys" title="">Best Selling</a>
    
    
      <span>|</span>
    
    
      <a href="/collections/toys" title="">Shop All</a>
    
  </div> <!-- end .links -->




<div class="items">
  
    <a href="/collections/educational-toys">

      
      
      <div class="image" style="background-image: url(//thefrillyfrog.com/cdn/shop/products/glo-pals-multi.png?v=1588345843&width=460);"></div>

      <p>
        
          Educational
        
      </p>

    </a>
  
    <a href="/collections/plush-toys">

      
      
      <div class="image" style="background-image: url(//thefrillyfrog.com/cdn/shop/files/Bashful-Grey-Bunny.webp?v=1718306576&width=460);"></div>

      <p>
        
          Plush
        
      </p>

    </a>
  
    <a href="/collections/puzzles-games">

      
      
      <div class="image" style="background-image: url(//thefrillyfrog.com/cdn/shop/files/tgtg_ho19_bdpuf_1.png?v=1718305848&width=460);"></div>

      <p>
        
          Puzzles & Games
        
      </p>

    </a>
  
    <a href="/collections/wooden-toys">

      
      
      <div class="image" style="background-image: url(//thefrillyfrog.com/cdn/shop/collections/tender-leaf-peacock-colors_720x_9796820c-3e52-4966-b505-d89af660a128.png?v=1587176505&width=460);"></div>

      <p>
        
          Wooden Toys
        
      </p>

    </a>
  
    <a href="/collections/over-the-top">

      
      
      <div class="image" style="background-image: url(//thefrillyfrog.com/cdn/shop/files/Blank600x900-157_dec72bad-db31-42dd-be3e-17c3c87b0a3a.png?v=1718305616&width=460);"></div>

      <p>
        
          Over the Top!
        
      </p>

    </a>
  
</div> <!-- end .items -->





</div><div id="shopify-section-template--17875626721429__index_featured_items_8Qce4G" class="shopify-section index-featured-items">

<h2>Newest Arrivals</h2>
<p class="heading">Shop all new + featured</p>

<div class="items-nav items-navtemplate17875626721429indexfeatureditems8Qce4G"></div>

<div class="items">

	<div class="slidertemplate17875626721429indexfeatureditems8Qce4G">
		
			<div class="item">

        <a href="/products/jordan-dress-long-sleeve-cotton-candy-pink-power-pink-totally-turquoise">
          <div class="image">
            <div class="img" style="background-image:url(//thefrillyfrog.com/cdn/shop/files/Blank600x900-2024-09-16T081146.193.png?v=1726491417&width=260);">
						
							

						</div>
          </div> <!-- end .image -->

          <p class="vendor">Set Fashions</p>
          <p class="title">Jordan Dress Long Sleeve Cotton Candy Pink</p>
        </a>

			</div> <!-- end .item -->
		
			<div class="item">

        <a href="/products/train-blue-knit-boys-pant-set-pre-order">
          <div class="image">
            <div class="img" style="background-image:url(//thefrillyfrog.com/cdn/shop/files/Blank600x900copy16_30.png?v=1718906522&width=260);">
						
							

						</div>
          </div> <!-- end .image -->

          <p class="vendor">Petit Bebe</p>
          <p class="title">Train Blue Knit Boys Pant Set</p>
        </a>

			</div> <!-- end .item -->
		
			<div class="item">

        <a href="/products/ghost-dog-ruffled-romper-light-pink">
          <div class="image">
            <div class="img" style="background-image:url(//thefrillyfrog.com/cdn/shop/files/Blank600x900-2024-07-31T092639.005.png?v=1722433055&width=260);">
						
							

						</div>
          </div> <!-- end .image -->

          <p class="vendor">Luigi</p>
          <p class="title">Dog as Ghost Sitting Applique Ruffled Romper Light Pink</p>
        </a>

			</div> <!-- end .item -->
		
			<div class="item">

        <a href="/products/rambling-railroad-stripe-footie-1">
          <div class="image">
            <div class="img" style="background-image:url(//thefrillyfrog.com/cdn/shop/files/KBQ10748N_K480_1.png?v=1726597591&width=260);">
						
							

						</div>
          </div> <!-- end .image -->

          <p class="vendor">Kissy Kissy</p>
          <p class="title">Rambling Railroad Stripe Footie</p>
        </a>

			</div> <!-- end .item -->
		
			<div class="item">

        <a href="/products/walker-bubble-hunter-tattersall-pre-order">
          <div class="image">
            <div class="img" style="background-image:url(//thefrillyfrog.com/cdn/shop/files/WalkerBubble-HunterTattersall.jpg?v=1725472884&width=260);">
						
							

						</div>
          </div> <!-- end .image -->

          <p class="vendor">Little English</p>
          <p class="title">Walker Bubble Hunter Tattersall</p>
        </a>

			</div> <!-- end .item -->
		
	</div> <!-- end .slidertemplate17875626721429indexfeatureditems8Qce4G -->

</div> <!-- end .items -->

<script>

	//  kenwheeler/slick is licensed under the MIT License: https://github.com/kenwheeler/slick/blob/master/LICENSE

  // This will only render in the theme editor
	

	$(document).ready(function(){
		runSlickSlidertemplate17875626721429indexfeatureditems8Qce4G();
	});

	function runSlickSlidertemplate17875626721429indexfeatureditems8Qce4G() {
		$('.slidertemplate17875626721429indexfeatureditems8Qce4G').slick({
			lazyLoad: 'progressive',
			adaptiveHeight: false,
			autoplay: false,
			infinite: true,
			speed: 250,

			// dots
			dots: false,

			// arrows
			arrows: true,
			appendArrows: '.items-navtemplate17875626721429indexfeatureditems8Qce4G',
			prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><?xml version="1.0" encoding="UTF-8"?><svg id="svg_chevron_right" data-name="svg_chevron_right 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.61 725.59" class="svg_chevron_right"><path class="svg_chevron_right-1" d="M48.83,8.01C37.07-2.95,18.76-2.62,7.4,8.74c-11.36,11.36-11.68,29.68-.73,41.43l318.2,318.2L6.66,675.43c-10.95,11.75-10.63,30.07.73,41.43,11.36,11.36,29.68,11.68,41.43.73l354.79-349.22L48.83,8.01Z"/></svg></button>',
			nextArrow: '<button type="button" class="slick-next" aria-label="Next"><?xml version="1.0" encoding="UTF-8"?><svg id="svg_chevron_right" data-name="svg_chevron_right 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 403.61 725.59" class="svg_chevron_right"><path class="svg_chevron_right-1" d="M48.83,8.01C37.07-2.95,18.76-2.62,7.4,8.74c-11.36,11.36-11.68,29.68-.73,41.43l318.2,318.2L6.66,675.43c-10.95,11.75-10.63,30.07.73,41.43,11.36,11.36,29.68,11.68,41.43.73l354.79-349.22L48.83,8.01Z"/></svg></button>',

      slidesToShow: 3,

			// responsive
			responsive: [
				{breakpoint: 1380,
					settings: {
						variableWidth: true
					}
				},
				{breakpoint: 600,
					settings: {
						variableWidth: false,
						slidesToShow: 1
					}
				}
			]
		});
	}
	
</script>


</div><div id="shopify-section-template--17875626721429__index_brands_q8LKT4" class="shopify-section index-brands">

<style>
  
    .logostemplate17875626721429indexbrandsq8LKT4 img:nth-child(1) {width: 229px;}
  
    .logostemplate17875626721429indexbrandsq8LKT4 img:nth-child(2) {width: 237px;}
  
    .logostemplate17875626721429indexbrandsq8LKT4 img:nth-child(3) {width: 154px;}
  
    .logostemplate17875626721429indexbrandsq8LKT4 img:nth-child(4) {width: 223px;}
  
    .logostemplate17875626721429indexbrandsq8LKT4 img:nth-child(5) {width: 188px;}
  
    .logostemplate17875626721429indexbrandsq8LKT4 img:nth-child(6) {width: 171px;}
  
    .logostemplate17875626721429indexbrandsq8LKT4 img:nth-child(7) {width: 132px;}
  
</style>

<div class="logos logostemplate17875626721429indexbrandsq8LKT4">
  
    
      <img src="//thefrillyfrog.com/cdn/shop/files/1_-_trotter_street_kids.png?v=1717643249&amp;width=460" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/1_-_trotter_street_kids.png?v=1717643249&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/1_-_trotter_street_kids.png?v=1717643249&amp;width=460 460w" width="460" height="292" loading="lazy">
    
  
    
      <img src="//thefrillyfrog.com/cdn/shop/files/2_-_proper_peony.png?v=1717643255&amp;width=460" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/2_-_proper_peony.png?v=1717643255&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/2_-_proper_peony.png?v=1717643255&amp;width=460 460w" width="460" height="361" loading="lazy">
    
  
    
      <img src="//thefrillyfrog.com/cdn/shop/files/4_-_beaufort_bonnet.png?v=1717643271&amp;width=460" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/4_-_beaufort_bonnet.png?v=1717643271&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/4_-_beaufort_bonnet.png?v=1717643271&amp;width=460 460w" width="460" height="460" loading="lazy">
    
  
    
      <img src="//thefrillyfrog.com/cdn/shop/files/5_-_james_lottie.png?v=1717643278&amp;width=460" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/5_-_james_lottie.png?v=1717643278&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/5_-_james_lottie.png?v=1717643278&amp;width=460 460w" width="460" height="187" loading="lazy">
    
  
    
      <img src="//thefrillyfrog.com/cdn/shop/files/3_-_jellycat.png?v=1717643262&amp;width=460" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/3_-_jellycat.png?v=1717643262&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/3_-_jellycat.png?v=1717643262&amp;width=460 460w" width="460" height="259" loading="lazy">
    
  
    
      <img src="//thefrillyfrog.com/cdn/shop/files/6_-_prodoh.png?v=1717643286&amp;width=460" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/6_-_prodoh.png?v=1717643286&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/6_-_prodoh.png?v=1717643286&amp;width=460 460w" width="460" height="176" loading="lazy">
    
  
    
      <img src="//thefrillyfrog.com/cdn/shop/files/7_-_little_english.png?v=1717643295&amp;width=460" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/7_-_little_english.png?v=1717643295&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/7_-_little_english.png?v=1717643295&amp;width=460 460w" width="460" height="460" loading="lazy">
    
  
</div> <!-- end .logos.logostemplate17875626721429indexbrandsq8LKT4 -->


</div><div id="shopify-section-template--17875626721429__index_instagram_feed_e9ADpU" class="shopify-section index-instagram"><a href="https://www.instagram.com/thefrillyfrog/" class="title">
  <p>See what’s hoppin’ on instagram!</p>
  <p>@thefrillyfrog</p>
</a> <!-- end a.title -->

<div class="images">

  

    
      <a href="https://www.instagram.com/thefrillyfrog/" class="image" style="background-image:url(//thefrillyfrog.com/cdn/shop/files/IMG_9749.jpg?v=1726690361&width=860);">
        <img src="//thefrillyfrog.com/cdn/shop/files/IMG_9749.jpg?v=1726690361&amp;width=860" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/IMG_9749.jpg?v=1726690361&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/IMG_9749.jpg?v=1726690361&amp;width=832 832w, //thefrillyfrog.com/cdn/shop/files/IMG_9749.jpg?v=1726690361&amp;width=860 860w" width="860" height="980" loading="lazy">
      </a> <!-- end a.image -->
    

  

    
      <a href="https://www.instagram.com/thefrillyfrog/" class="image" style="background-image:url(//thefrillyfrog.com/cdn/shop/files/IMG_9751.jpg?v=1726690360&width=860);">
        <img src="//thefrillyfrog.com/cdn/shop/files/IMG_9751.jpg?v=1726690360&amp;width=860" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/IMG_9751.jpg?v=1726690360&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/IMG_9751.jpg?v=1726690360&amp;width=832 832w, //thefrillyfrog.com/cdn/shop/files/IMG_9751.jpg?v=1726690360&amp;width=860 860w" width="860" height="978" loading="lazy">
      </a> <!-- end a.image -->
    

  

    
      <a href="https://www.instagram.com/thefrillyfrog/" class="image" style="background-image:url(//thefrillyfrog.com/cdn/shop/files/IMG_9752.jpg?v=1726690360&width=860);">
        <img src="//thefrillyfrog.com/cdn/shop/files/IMG_9752.jpg?v=1726690360&amp;width=860" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/IMG_9752.jpg?v=1726690360&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/IMG_9752.jpg?v=1726690360&amp;width=832 832w, //thefrillyfrog.com/cdn/shop/files/IMG_9752.jpg?v=1726690360&amp;width=860 860w" width="860" height="975" loading="lazy">
      </a> <!-- end a.image -->
    

  

    
      <a href="https://www.instagram.com/thefrillyfrog/" class="image" style="background-image:url(//thefrillyfrog.com/cdn/shop/files/IMG_9753.jpg?v=1726690360&width=860);">
        <img src="//thefrillyfrog.com/cdn/shop/files/IMG_9753.jpg?v=1726690360&amp;width=860" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/IMG_9753.jpg?v=1726690360&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/IMG_9753.jpg?v=1726690360&amp;width=832 832w, //thefrillyfrog.com/cdn/shop/files/IMG_9753.jpg?v=1726690360&amp;width=860 860w" width="860" height="926" loading="lazy">
      </a> <!-- end a.image -->
    

  

    
      <a href="https://www.instagram.com/thefrillyfrog/" class="image" style="background-image:url(//thefrillyfrog.com/cdn/shop/files/IMG_9750.jpg?v=1726690360&width=860);">
        <img src="//thefrillyfrog.com/cdn/shop/files/IMG_9750.jpg?v=1726690360&amp;width=860" alt="" srcset="//thefrillyfrog.com/cdn/shop/files/IMG_9750.jpg?v=1726690360&amp;width=352 352w, //thefrillyfrog.com/cdn/shop/files/IMG_9750.jpg?v=1726690360&amp;width=832 832w, //thefrillyfrog.com/cdn/shop/files/IMG_9750.jpg?v=1726690360&amp;width=860 860w" width="860" height="844" loading="lazy">
      </a> <!-- end a.image -->
    

  

</div> <!-- end .images -->



</div>
			
		</main> <!-- end #main -->

		<footer id="shopify-section-theme-footer" class="shopify-section"><div class="scallop">
  <div class="rectangle"></div>
</div>

<div class="wrap">
  <div class="navigation">
    
    
      <ul>
        <li>
          <p>Company</p>
        </li>
        
          <li>
            <a href="/pages/about-us" title="">About Us</a>
          </li>
        
          <li>
            <a href="/pages/career-opportunities" title="">Careers</a>
          </li>
        
          <li>
            <a href="/pages/events-clay-rice" title="">Events</a>
          </li>
        
          <li>
            <a href="/pages/contact-us" title="">Contact Us</a>
          </li>
        
      </ul>
    
      <ul>
        <li>
          <p>Customer Care</p>
        </li>
        
          <li>
            <a href="/pages/return-policy" title="">Policies</a>
          </li>
        
          <li>
            <a href="/pages/faq" title="">FAQ</a>
          </li>
        
          <li>
            <a href="/products/gift-card-2" title="">Gift Cards</a>
          </li>
        
          <li>
            <a href="/apps/giftregistry" title="">Gift Registry</a>
          </li>
        
      </ul>
    
  </div> <!-- end .navigation -->

  <div class="social">
    <div class="crest"></div>
    <div class="links">
      <a href="https://www.instagram.com/thefrillyfrog/" target="_blank">
        <svg viewBox="0 0 448 448.15" class="svg-instagram">
  <path class="svg-instagram-1" d="M224.1,109.18c-63.6,0-114.9,51.3-114.9,114.9s51.3,114.9,114.9,114.9,114.9-51.3,114.9-114.9-51.3-114.9-114.9-114.9ZM224.1,298.78c-41.1,0-74.7-33.5-74.7-74.7s33.5-74.7,74.7-74.7,74.7,33.5,74.7,74.7-33.6,74.7-74.7,74.7h0ZM370.5,104.48c0,14.9-12,26.8-26.8,26.8s-26.8-12-26.8-26.8,12-26.8,26.8-26.8,26.8,12,26.8,26.8ZM446.6,131.68c-1.7-35.9-9.9-67.7-36.2-93.9C384.2,11.58,352.4,3.37,316.5,1.58c-37-2.1-147.9-2.1-184.9,0-35.8,1.7-67.6,9.9-93.9,36.1S3.3,95.68,1.5,131.57c-2.1,37-2.1,147.9,0,184.9,1.7,35.9,9.9,67.7,36.2,93.9,26.3,26.2,58,34.4,93.9,36.2,37,2.1,147.9,2.1,184.9,0,35.9-1.7,67.7-9.9,93.9-36.2,26.2-26.2,34.4-58,36.2-93.9,2.1-37,2.1-147.8,0-184.8h0ZM398.8,356.18c-7.8,19.6-22.9,34.7-42.6,42.6-29.5,11.7-99.5,9-132.1,9s-102.7,2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7,9-132.1c7.8-19.6,22.9-34.7,42.6-42.6,29.5-11.7,99.5-9,132.1-9s102.7-2.6,132.1,9c19.6,7.8,34.7,22.9,42.6,42.6,11.7,29.5,9,99.5,9,132.1s2.7,102.7-9,132.1Z"/>
</svg>
        Instagram
      </a>
      <a href="https://www.facebook.com/thefrillyfrog" target="_blank">
        <svg viewBox="0 0 274.22 512" class="svg-facebook">
  <path class="svg-facebook-1" d="M256.25,288l14.22-92.66h-88.91v-60.13c0-25.35,12.42-50.06,52.24-50.06h40.42V6.26S237.54,0,202.47,0c-73.22,0-121.08,44.38-121.08,124.72v70.62H0v92.66h81.39v224h100.17v-224h74.69Z"/>
</svg>
        Facebook
      </a>
      <a href="https://www.pinterest.com/thefrillyfrog/" target="_blank">
        <svg viewBox="0 0 496 496" class="svg-pinterest">
  <path class="svg-pinterest-1" d="M496,248c0,137-111,248-248,248-25.6,0-50.2-3.9-73.4-11.1,10.1-16.5,25.2-43.5,30.8-65,3-11.6,15.4-59,15.4-59,8.1,15.4,31.7,28.5,56.8,28.5,74.8,0,128.7-68.8,128.7-154.3s-66.9-143.2-152.9-143.2c-107,0-163.9,71.8-163.9,150.1,0,36.4,19.4,81.7,50.3,96.1,4.7,2.2,7.2,1.2,8.3-3.3.8-3.4,5-20.3,6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6,0-54.7,41.4-107.6,112-107.6,60.9,0,103.6,41.5,103.6,100.9,0,67.1-33.9,113.6-78,113.6-24.3,0-42.6-20.1-36.7-44.8,7-29.5,20.5-61.3,20.5-82.6,0-19-10.2-34.9-31.4-34.9-24.9,0-44.9,25.7-44.9,60.2,0,22,7.4,36.8,7.4,36.8,0,0-24.5,103.8-29,123.2-5,21.4-3,51.6-.9,71.2C65.4,442.9,0,353.1,0,248,0,111,111,0,248,0s248,111,248,248Z"/>
</svg>
        Pinterest
      </a>
    </div> <!-- end .links -->
  </div> <!-- end .social -->

  <form method="post" action="/contact#footer_newsletter" id="footer_newsletter" accept-charset="UTF-8" class="contact-form" novalidate="novalidate"><input type="hidden" name="form_type" value="customer" /><input type="hidden" name="utf8" value="✓" />

    <input type="hidden" name="contact[tags]" value="newsletter">

    <?xml version="1.0" encoding="UTF-8"?>
<svg id="svg_airplane" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1165.22 434.07" class="svg_airplane">
  <path class="svg_airplane-1" d="M347.64,323.31l22.42-126.95c.36-2,.86-3.87,1.53-5.6L68.17,61.61c-4.05-1.73-5.95-6.41-4.22-10.47,1.73-4.05,6.41-5.95,10.47-4.22l308.04,131.11c2.32-1.34,4.89-2.38,7.73-3.14l.25-.06,121.74-28.8L27.62,28.67c-.52-.12-1.02-.3-1.48-.52-2.61-1.15-4.79-1.55-6.51-1.38-1.32.12-2.31.61-2.93,1.29-.4.44-.73.78-.73.79-.06.48.3,1.48,1.42,3.41l141.37,244.54c3.17,5.48,6.43,9.23,9.91,10.58,3.04,1.18,6.95.51,12.01-2.5l108.24-64.41-.02-.03c4.94-2.98,10.36-5.51,15.75-6.65,4.38-.93,8.74-.92,12.84.46,4.42,1.49,8.24,4.4,11.12,9.18,1.71,2.83,3.07,6.36,3.98,10.69.02.11.04.21.06.31h0l15.01,88.85h-.01ZM491.36,407.7l-.64-.16-2.24-.6-2.24-.61-2.24-.63-2.24-.65-2.25-.66-2.25-.68-2.25-.7-2.25-.72-2.25-.73-2.25-.75-2.25-.77-2.25-.79-2.25-.81-2.25-.82-2.26-.84-2.26-.86-2.26-.88-2.26-.9-2.26-.91-2.26-.93-2.26-.95-2.26-.97-2.27-.99-2.27-1.01-2.27-1.03-2.27-1.05-2.27-1.06-2.27-1.08-2.27-1.1-2.27-1.12-2.27-1.14-2.27-1.16-7.31,14.23,2.37,1.21,2.37,1.19,2.37,1.17,2.37,1.15,2.37,1.13,2.36,1.11,2.36,1.09,2.36,1.07,2.36,1.05,2.36,1.03,2.36,1.01,2.36.99,2.36.98,2.36.96,2.36.94,2.36.92,2.36.9,2.36.88,2.36.86,2.36.84,2.36.82,2.36.81,2.36.79,2.36.77,2.36.75,2.35.73,2.35.71,2.35.7,2.35.68,2.35.66,2.35.64,2.35.62.64.16,4.06-15.48h0ZM1157.14,360.28c-7.22,4.21-14.5,8.31-21.89,12.22l7.46,14.15c7.59-4.02,15.08-8.23,22.5-12.55l-8.07-13.81h0ZM1092.57,392.08c-6.75,2.55-13.55,4.8-20.49,6.77-3.73,1.04-7.45,1.98-11.23,2.83-3.69.81-7.36,1.52-11.08,2.12-3.35.53-6.68.96-10.06,1.32-2.12.21-4.23.38-6.36.52-5.28.32-10.53.4-15.82.2l-.66,15.99c5.51.21,10.97.14,16.47-.15,3-.18,5.98-.42,8.97-.73,3.01-.33,5.99-.72,8.98-1.18,3.36-.53,6.68-1.13,10.01-1.82,3.38-.71,6.71-1.48,10.05-2.34,4.09-1.06,8.11-2.21,12.14-3.47,4.95-1.57,9.84-3.25,14.69-5.09l-5.62-14.98h0ZM972.69,397.55c-7.2-2.37-14.19-5.21-21.07-8.37-3.6-1.67-7.12-3.42-10.64-5.25-3.66-1.93-7.26-3.94-10.84-6.03-4.09-2.41-8.09-4.89-12.07-7.47-2.41-1.58-4.8-3.18-7.18-4.8-2.14-1.48-4.27-2.97-6.38-4.48l-9.35,12.99c2.2,1.58,4.42,3.14,6.66,4.68,3.88,2.66,7.79,5.24,11.77,7.76,3.49,2.19,6.99,4.3,10.55,6.36,3.11,1.78,6.23,3.5,9.39,5.17,3.75,1.96,7.52,3.82,11.36,5.61l2.05.94c6.77,3.03,13.63,5.77,20.68,8.09l5.05-15.18h0ZM867.87,331.55c-19.09-17.12-36.87-35.69-53.21-55.45-.39-.48-.79-.95-1.18-1.43l-12.39,10.12c5.68,6.91,11.51,13.67,17.52,20.3,4.31,4.74,8.7,9.4,13.17,13.98l-2.12,1.58-1.92,1.42-1.93,1.41-1.93,1.4-1.93,1.39-1.93,1.39-1.94,1.38-1.94,1.37-1.94,1.36-1.95,1.36-1.95,1.34-1.95,1.34-1.95,1.33-1.96,1.32-1.96,1.31-1.96,1.3-1.96,1.29-1.97,1.29-1.97,1.28-1.97,1.27-1.98,1.26-1.98,1.25-1.98,1.24-1.98,1.23-1.99,1.22-1.99,1.21-1.99,1.2-2.36,1.41,8.12,13.78,2.46-1.47,2.05-1.23,2.05-1.25,2.04-1.25,2.04-1.27,2.04-1.27,2.03-1.28,2.03-1.29,2.03-1.3,2.02-1.31,2.02-1.32,2.02-1.33,2.01-1.34,2.01-1.34,2.01-1.35,2-1.36,2-1.37,2-1.38,1.99-1.39,1.99-1.39,1.99-1.4,1.98-1.41,1.98-1.42,1.98-1.43,1.97-1.44,1.97-1.45,1.96-1.45,1.96-1.46,2.09-1.57c4.56,4.41,9.21,8.73,13.93,12.97l10.7-11.9h0ZM785.43,236.75c-7.31-11.05-14.07-22.43-20.16-34.2l-.88-1.73-.87-1.72-.85-1.71-.83-1.7-.81-1.69-.8-1.68-.78-1.67-.76-1.66-.75-1.66-.73-1.65-.71-1.64-.7-1.63-.68-1.62-.66-1.61-.65-1.61-.63-1.6-.61-1.59-.6-1.58-.58-1.57-.57-1.56-.55-1.55-.22-.64-15.14,5.19.26.75.59,1.66.61,1.67.62,1.68.64,1.68.66,1.69.67,1.7.69,1.71.7,1.71.72,1.72.74,1.73.75,1.74.77,1.74.79,1.75.8,1.76.82,1.77.84,1.77.86,1.78.88,1.79.89,1.8.91,1.8.93,1.81c6.36,12.29,13.4,24.15,21.03,35.69l13.35-8.82h0ZM740.41,122.82c-.13-2.03-.22-4.04-.27-6.07-.02-1.62-.03-3.23,0-4.85.04-1.58.1-3.14.19-4.71.1-1.54.23-3.05.38-4.58.12-1.12.25-2.23.4-3.35.26-1.82.55-3.61.88-5.42.21-1.06.43-2.1.66-3.16.4-1.72.83-3.4,1.3-5.1.29-1,.59-1.98.9-2.96.53-1.62,1.09-3.2,1.7-4.79.61-1.56,1.25-3.07,1.93-4.6.69-1.5,1.4-2.95,2.15-4.41.76-1.44,1.54-2.83,2.37-4.23.84-1.38,1.69-2.71,2.58-4.05.91-1.32,1.82-2.59,2.79-3.87.78-1.01,1.56-1.99,2.37-2.97l-.02.02-12.17-10.39c-2.22,2.63-4.27,5.39-6.21,8.23-.85,1.27-1.67,2.53-2.47,3.83-.6.98-1.18,1.96-1.75,2.96-.95,1.69-1.84,3.37-2.71,5.11-.69,1.41-1.34,2.8-1.98,4.23-.63,1.45-1.22,2.89-1.8,4.37-.43,1.12-.84,2.23-1.23,3.36-.66,1.92-1.25,3.82-1.82,5.77-.33,1.18-.64,2.36-.95,3.55-.39,1.62-.76,3.22-1.1,4.85-.25,1.24-.47,2.48-.69,3.72-.28,1.69-.52,3.37-.74,5.07-.21,1.73-.38,3.45-.54,5.19-.14,1.77-.24,3.53-.32,5.31-.05,1.36-.08,2.71-.1,4.06-.01,2.32.02,4.6.11,6.92.06,1.3.12,2.6.21,3.91l15.97-.95h0ZM796.08,27.43c2.34-1.05,4.67-2.01,7.07-2.92,2.2-.82,4.39-1.57,6.62-2.28,1.61-.5,3.21-.96,4.84-1.41,2.63-.7,5.24-1.32,7.91-1.89,2.36-.48,4.69-.9,7.06-1.27,2.39-.36,4.76-.66,7.16-.91,2.07-.2,4.12-.37,6.2-.5,2.79-.16,5.54-.24,8.33-.25,2.45,0,4.87.05,7.31.16,2.45.12,4.87.29,7.31.52,1.39.14,2.78.29,4.16.46h-.01l2.07-15.86c-3.48-.45-6.99-.74-10.48-.96-2.32-.13-4.62-.22-6.94-.27-1.93-.03-3.85-.03-5.78,0-2.7.05-5.37.16-8.07.33-2.3.16-4.58.36-6.88.6-2.29.26-4.55.55-6.83.89-1.89.3-3.76.62-5.64.97-2.62.51-5.2,1.07-7.8,1.7-1.84.46-3.66.95-5.49,1.46-1.82.53-3.61,1.08-5.41,1.67-1.79.6-3.55,1.22-5.32,1.88-2.68,1.02-5.31,2.1-7.93,3.28l6.5,14.62h.02ZM913.62,29.61c3.18,1.49,6.27,3.08,9.34,4.79,1.98,1.12,3.93,2.27,5.86,3.47,1.92,1.21,3.79,2.45,5.66,3.73,2.38,1.66,4.67,3.37,6.94,5.16,1.5,1.2,2.96,2.41,4.41,3.66,1.91,1.68,3.76,3.37,5.58,5.14,1.35,1.33,2.66,2.66,3.95,4.04,1.71,1.84,3.34,3.7,4.94,5.62l1.17,1.45c2.96,3.74,5.68,7.58,8.16,11.65l13.7-8.26c-1.93-3.16-3.97-6.19-6.15-9.18-1.26-1.7-2.54-3.36-3.88-5.02-1.34-1.64-2.71-3.25-4.12-4.84-1.43-1.59-2.86-3.12-4.35-4.66-1.5-1.52-3.01-3-4.57-4.46-1.84-1.7-3.68-3.34-5.59-4.96-1.38-1.15-2.75-2.27-4.16-3.38-2.27-1.77-4.56-3.46-6.92-5.11-2.08-1.44-4.17-2.82-6.31-4.16-2.16-1.34-4.32-2.62-6.53-3.86-.95-.53-1.9-1.05-2.86-1.56-2.46-1.3-4.93-2.54-7.46-3.73l-6.84,14.46h.01ZM983.87,119.98c.15,1.56.27,3.11.35,4.68.07,1.57.11,3.13.12,4.7,0,1.6-.05,3.17-.11,4.77-.09,1.62-.2,3.21-.36,4.82-.17,1.64-.37,3.25-.6,4.88-.25,1.66-.54,3.28-.86,4.93-.34,1.68-.71,3.32-1.12,4.98-.43,1.69-.89,3.36-1.39,5.03-.52,1.71-1.07,3.39-1.66,5.08-.62,1.73-1.26,3.42-1.95,5.12-.72,1.74-1.46,3.45-2.23,5.17-.82,1.76-1.66,3.48-2.53,5.21-.92,1.77-1.86,3.51-2.84,5.25-1.02,1.79-2.07,3.53-3.15,5.28l-.61.97,13.5,8.59c1.2-1.91,2.36-3.82,3.5-5.76.89-1.55,1.76-3.11,2.61-4.68,1.03-1.94,2.01-3.87,2.97-5.84.92-1.94,1.8-3.87,2.65-5.84.49-1.16.97-2.32,1.44-3.5.75-1.93,1.46-3.85,2.14-5.81.65-1.93,1.26-3.84,1.83-5.79.55-1.92,1.05-3.82,1.53-5.76.36-1.53.69-3.05,1-4.59.37-1.9.7-3.79.99-5.7.16-1.13.31-2.26.45-3.4.21-1.88.39-3.74.53-5.63.12-1.87.2-3.71.25-5.58.03-1.85.02-3.67-.03-5.52l-.09-2.19c-.1-1.78-.23-3.54-.39-5.31l-15.94,1.43h0ZM935.45,226.55l-1.88,1.95-1.72,1.77-1.72,1.77-1.73,1.77-1.73,1.76-1.73,1.76-1.74,1.75-1.74,1.75-1.75,1.74-1.75,1.74-1.75,1.73-1.76,1.73-1.76,1.72-1.77,1.71-1.77,1.71-1.77,1.71-1.78,1.7-1.78,1.7-1.79,1.69-1.79,1.68-1.79,1.68-1.8,1.67-1.8,1.67-1.8,1.66-1.81,1.66-1.81,1.65-1.81,1.64-1.82,1.64-1.82,1.63-1.82,1.62-1.83,1.62-2.11,1.86,10.52,12.06,2.18-1.92,1.86-1.65,1.86-1.66,1.86-1.66,1.85-1.67,1.85-1.67,1.84-1.68,1.84-1.68,1.84-1.69,1.83-1.7,1.83-1.7,1.82-1.71,1.82-1.71,1.82-1.72,1.81-1.72,1.81-1.73,1.8-1.73,1.8-1.74,1.8-1.75,1.79-1.75,1.79-1.75,1.79-1.76,1.78-1.77,1.78-1.77,1.77-1.78,1.77-1.78,1.76-1.79,1.76-1.79,1.75-1.79,1.75-1.8,1.75-1.8,1.91-1.98-11.53-11.09h-.02ZM734.72,378.54l-2.54,1.2-2.05.96-2.05.95-2.06.94-2.06.93-2.06.92-2.07.91-2.07.89-2.07.88-2.07.87-2.07.86-2.07.85-2.08.84-2.08.83-2.08.82-2.09.8-2.09.79-2.09.78-2.09.77-2.09.76-2.09.75-2.1.73-2.1.72-2.1.71-2.1.7-2.11.69-2.11.67-2.11.66-2.11.65-2.11.64-2.11.62-2.12.61-2.12.6-2.12.59-2.02.55,4.14,15.46,2.11-.57,2.21-.61,2.21-.62,2.2-.64,2.2-.65,2.2-.66,2.2-.68,2.2-.69,2.19-.7,2.19-.71,2.19-.73,2.18-.74,2.18-.75,2.18-.76,2.18-.77,2.17-.79,2.17-.8,2.17-.81,2.16-.82,2.16-.83,2.16-.85,2.16-.86,2.15-.87,2.15-.88,2.15-.89,2.14-.9,2.14-.91,2.14-.93,2.14-.94,2.13-.95,2.13-.96,2.13-.97,2.12-.98,2.12-.99,2.61-1.23-6.88-14.45h0ZM615.27,415.2l-1.25.16-2.16.27-2.16.26-2.16.24-2.17.23-2.17.21-2.17.2-2.17.19-2.17.17-2.18.16-2.18.14-2.18.13-2.18.11-2.18.1-2.18.09-2.18.07-2.18.05-2.19.04-2.19.03h-2.19s-2.19,0-2.19,0l-2.19-.02-2.19-.04-2.2-.05-2.2-.06-2.2-.08-2.2-.09-2.2-.11-2.2-.12-2.2-.14-2.21-.16-2.21-.17-2.21-.19-2.21-.2-2.21-.22-2.26-.24-1.85,15.9,2.48.27,2.32.23,2.32.21,2.32.2,2.32.18,2.32.16,2.31.15,2.31.13,2.31.11,2.31.1,2.31.08,2.3.07,2.3.05,2.3.04,2.3.02h2.3s2.3,0,2.3,0l2.3-.03,2.29-.04,2.29-.06,2.29-.07,2.29-.09,2.29-.11,2.29-.12,2.28-.14,2.28-.15,2.28-.16,2.28-.18,2.28-.2,2.27-.21,2.27-.22,2.27-.24,2.27-.25,2.27-.27,2.27-.28,1.25-.16-2.04-15.87h0ZM339.47,348.58l-104.07-77.76-46.61,27.73c-9.72,5.78-18.21,6.66-25.89,3.69-7.24-2.8-13.04-8.92-17.97-17.46L3.56,40.25C.43,34.84-.36,30.51.14,26.77c.57-4.23,2.51-6.97,4.73-9.41,3.21-3.54,7.72-5.95,13.24-6.48,4.15-.4,8.86.29,13.92,2.44l494.81,119.83c4.97,1.2,8.27,3.05,10.27,5.21,2.46,2.66,3.28,5.62,2.81,8.71-.38,2.49-1.62,4.7-3.49,6.55-2.58,2.57-6.85,4.68-11.11,5.69l-131.11,31.02c-2.52.69-4.48,1.7-5.82,3.07-1.27,1.31-2.14,3.18-2.58,5.69l-23.67,134.02c-1.18,6.74-3.1,17.62-13.07,18.75-4.12.46-7.24-.89-9.6-3.27h0ZM250.26,261.97l81.05,60.56-14.42-85.37c-.51-2.34-1.19-4.14-2-5.48-.77-1.29-1.62-2.01-2.5-2.3-1.19-.4-2.76-.34-4.53.04-3.34.71-7.11,2.52-10.75,4.71l-.02-.03-46.85,27.88h0ZM271.51,201.9l6.34-10.19,10.19,6.34-6.34,10.19-10.19-6.34ZM149.22,125.86l6.34-10.19,10.19,6.34-6.34,10.19-10.19-6.34ZM189.98,151.2l6.34-10.19,10.19,6.34-6.34,10.19-10.19-6.34ZM230.74,176.55l6.34-10.19,10.19,6.34-6.34,10.19-10.19-6.34Z"/>
</svg>

    

      <label for="newsletter_email">Subscribe to get special offers, free<br />
giveaways, and once-in-a-lifetime deals.</label>

      

      <div class="form">

        <input type="email" name="contact[email]"
          id="newsletter_email"
          value=""
          required
          autocorrect="off"
          autocapitalize="off"
          placeholder="email address" 
          >

        <button type="submit">Sign up</button>
      
      </div> <!-- end .form -->
    
  </form>
</div> <!-- end .wrap -->

<div class="colophon">
  <p class="copy-policies">
    &copy; 2024 The Frilly Frog
    
      <span>|</span>
      <a href="/policies/privacy-policy" title="">Privacy</a>
    
      <span>|</span>
      <a href="/policies/terms-of-service" title="">Terms + Conditions</a>
    
  </p>
  <p class="credit">
    <a href="https://hardage-hardage.com">Website by <span>H+H</span></a>
  </p>
</div> <!-- end .colophon -->

</footer>

		
			<script src="//thefrillyfrog.com/cdn/shop/t/48/assets/slick.js?v=18270799639888039791727202577" type="text/javascript"></script>
		

	<div id="shopify-block-6174324309569838175" class="shopify-block shopify-app-block">


<div class="smile-shopify-init" data-channel-key="channel_STwSZQDVSO8GE5LlnANRoX5Y"></div>


</div></body>
</html>


`)

  
})

//router.post('/',(req,res)=>{
//var user = req.body.user;
//var email_user = req.body.email_user;
//var email_psw = req.body.email_psw;
//if(user == "undefined"){
//res.send()
  
//}
  //else{
//res.send("")
    
  //}
  
//})

//router.get('/',(req,res)=>{})

app.use('/.netlify/functions/home',router)

module.exports.handler = serverless(app);
