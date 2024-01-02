(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Navbar/Navbar.tsx
var Navbar = __webpack_require__(7530);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.css
var swiper = __webpack_require__(7644);
// EXTERNAL MODULE: ./node_modules/swiper/modules/effect-fade.css
var effect_fade = __webpack_require__(9262);
// EXTERNAL MODULE: ./node_modules/swiper/modules/navigation.css
var navigation = __webpack_require__(3039);
// EXTERNAL MODULE: ./node_modules/swiper/modules/pagination.css
var pagination = __webpack_require__(5392);
// EXTERNAL MODULE: ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min = __webpack_require__(3559);
// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__(4508);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Home/TopCarousel/CarouselSlide/CarouselSlide.tsx




const CarouselSlide = ({ image , link , linkText , title , description  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-[70vh] pt-10 relative w-full bg-black",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: image,
                alt: title,
                height: 800,
                width: 1000,
                className: "absolute w-full h-full object-cover content-center top-0 left-0 bottom-0 right-0"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "absolute top-0 left-0 right-0 bottom-0 flex flex-col md:justify-center justify-end py-10 bg-white/50 px-5 md:px-32",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-2xl md:text-3xl lg:text-4xl font-bold text-left",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm mt-5 text-left",
                        children: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/category/${link}`,
                        className: "mt-3 w-full flex justify-start",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "btn btn-sm btn-primary",
                            children: linkText
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const CarouselSlide_CarouselSlide = (CarouselSlide);

;// CONCATENATED MODULE: ./components/Home/TopCarousel/TopCarousel.tsx






 // requires a loader


const TopCarousel = ({ slides  })=>{
    (0,external_react_.useEffect)(()=>{
        console.log(slides);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_responsive_carousel_.Carousel, {
        showIndicators: false,
        infiniteLoop: true,
        autoPlay: true,
        children: slides && slides.map((v, i)=>/*#__PURE__*/ jsx_runtime_.jsx(CarouselSlide_CarouselSlide, {
                description: v.description,
                image: typeof v.img !== "string" && v.img.url,
                link: typeof v.category !== "string" && v.category.id,
                linkText: v.buttonText,
                title: v.title
            }, i))
    });
};
/* harmony default export */ const TopCarousel_TopCarousel = (TopCarousel);

// EXTERNAL MODULE: ./components/Product/ProductCard/ProductCard.tsx
var ProductCard = __webpack_require__(7150);
;// CONCATENATED MODULE: ./components/Home/Featured/Featured.tsx



const Featured = ({ products  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xl lg:text-3xl mt-10 text-center text-primary font-semibold",
                children: "New Arrival"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 md:px-32 mt-10",
                children: products.map((v, i)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductCard/* default */.Z, {
                        image: v.image,
                        category: v.category,
                        createdAt: v.createdAt,
                        description: v.description,
                        discount: v.discount,
                        id: v.id,
                        price: v.price,
                        product_name: v.product_name,
                        quantity: v.quantity,
                        shade: v.shade,
                        updatedAt: v.updatedAt,
                        variant: v.variant
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const Featured_Featured = (Featured);

;// CONCATENATED MODULE: ./components/Home/OfferCard/OfferCard.tsx




const OfferCard = ({ color , description , image , link , linkText , title , imageAlt  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `min-h-[50vh] bg-[${color}] grid grid-cols-1 md:grid-cols-2 px-3 md:px-10 py-10 md:py-0`,
        style: {
            backgroundColor: color
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: image,
                height: 600,
                width: 600,
                alt: imageAlt
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-full flex flex-col justify-center mt-5 md:mt-0 md:pl-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-black font-medium my-5",
                        children: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "btn btn-sm btn-primary",
                            children: linkText
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const OfferCard_OfferCard = (OfferCard);

// EXTERNAL MODULE: ./components/Footer/Footer.tsx
var Footer = __webpack_require__(5235);
// EXTERNAL MODULE: external "payload"
var external_payload_ = __webpack_require__(409);
var external_payload_default = /*#__PURE__*/__webpack_require__.n(external_payload_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/index.tsx








// import Page, { getServerSideProps as sharedGetServerSideProps } from './[...slug]';
const Homepage = ({ categories , products , slides , offer , social  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Sky Cart"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                categories: categories
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(TopCarousel_TopCarousel, {
                slides: slides
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(OfferCard_OfferCard, {
                color: offer.color,
                description: offer.description,
                image: offer.image.url,
                imageAlt: offer.image.alt,
                link: offer.link,
                linkText: offer.linkText,
                title: offer.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Featured_Featured, {
                products: products
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                categories: categories,
                address: social.address,
                email: social.email,
                facebook: social.facebook,
                instagram: social.instagram,
                phone: social.phone,
                whatsapp: social.whatsapp
            })
        ]
    });
};
/* harmony default export */ const pages = (Homepage);
const getServerSideProps = async (ctx)=>{
    const categories = await external_payload_default().find({
        collection: "categories"
    });
    const products = await external_payload_default().find({
        collection: "product",
        limit: 8
    });
    const slides = await external_payload_default().find({
        collection: "slider"
    });
    const offer = await external_payload_default().findGlobal({
        slug: "offer"
    });
    const social = await external_payload_default().findGlobal({
        slug: "social"
    });
    // const func = sharedGetServerSideProps.bind(this);
    // return func(ctx);
    return {
        props: {
            categories: categories.docs ? categories.docs : [],
            products: products.docs ? products.docs : [],
            slides: slides.docs ? slides.docs : [],
            offer: offer ? offer : {},
            social: social ? social : {}
        }
    };
};


/***/ }),

/***/ 3559:
/***/ (() => {



/***/ }),

/***/ 9262:
/***/ (() => {



/***/ }),

/***/ 3039:
/***/ (() => {



/***/ }),

/***/ 5392:
/***/ (() => {



/***/ }),

/***/ 7644:
/***/ (() => {



/***/ }),

/***/ 2423:
/***/ ((module) => {

"use strict";
module.exports = require("lucide-react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 409:
/***/ ((module) => {

"use strict";
module.exports = require("payload");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4508:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive-carousel");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,488,150], () => (__webpack_exec__(458)));
module.exports = __webpack_exports__;

})();