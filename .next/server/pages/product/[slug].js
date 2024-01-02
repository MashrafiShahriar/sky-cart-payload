(() => {
var exports = {};
exports.id = 915;
exports.ids = [915];
exports.modules = {

/***/ 4665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Navbar/Navbar.tsx
var Navbar = __webpack_require__(7530);
// EXTERNAL MODULE: ./components/Footer/Footer.tsx
var Footer = __webpack_require__(5235);
// EXTERNAL MODULE: external "payload"
var external_payload_ = __webpack_require__(409);
var external_payload_default = /*#__PURE__*/__webpack_require__.n(external_payload_);
// EXTERNAL MODULE: ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min = __webpack_require__(3559);
// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__(4508);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Product/ProductPage/ProductCarousel/ProductCarousel.tsx


 // requires a loader


const ProductCarousel = ({ product  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_responsive_carousel_.Carousel, {
        className: "h-auto",
        thumbWidth: 200,
        showThumbs: true,
        infiniteLoop: true,
        children: product.image.map((v)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    height: 600,
                    width: 600,
                    src: v.image.url,
                    alt: v.image.alt
                })
            }, v.id))
    });
};
/* harmony default export */ const ProductCarousel_ProductCarousel = (ProductCarousel);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Product/ProductPage/ProductDetails/ProductDetails.tsx



const ProductDetails = ({ product  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "md:min-h-[50vh] lg:min-h-[60vh] flex justify-center flex-col md:pl-16",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-3xl md:text-4xl mb-5 font-bold",
                children: product.product_name
            }),
            !product.discount || product.discount === product.price ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-3xl font-semibold text-primary",
                children: product.price
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "line-through text-lg text-gray-500",
                        children: product.price
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "ml-2 text-3xl font-semibold text-primary",
                        children: [
                            product.discount,
                            " BDT"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "mb-2 mt-5 text-sm",
                children: [
                    "Quantity: ",
                    product.quantity
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "my-1 text-sm",
                children: [
                    "Color Family: ",
                    product.variant.color
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "mt-1 mb-5 text-sm",
                children: [
                    "Shade: ",
                    product.shade.shade
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "pb-2 text-sm text-gray-500",
                        children: "Category:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/category/${product.category.id}`,
                        className: "my-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "badge badge-primary text-xs p-2 py-3 hover:bg-opacity-90",
                            children: product.category.category_name
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ProductDetails_ProductDetails = (ProductDetails);

;// CONCATENATED MODULE: external "escape-html"
const external_escape_html_namespaceObject = require("escape-html");
var external_escape_html_default = /*#__PURE__*/__webpack_require__.n(external_escape_html_namespaceObject);
;// CONCATENATED MODULE: external "slate"
const external_slate_namespaceObject = require("slate");
;// CONCATENATED MODULE: ./components/RichText/serialize.tsx




const serialize = (children)=>children.map((node, i)=>{
        if (external_slate_namespaceObject.Text.isText(node)) {
            let text = /*#__PURE__*/ jsx_runtime_.jsx("span", {
                dangerouslySetInnerHTML: {
                    __html: external_escape_html_default()(node.text)
                }
            });
            if (node.bold) {
                text = /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: text
                }, i);
            }
            if (node.code) {
                text = /*#__PURE__*/ jsx_runtime_.jsx("code", {
                    children: text
                }, i);
            }
            if (node.italic) {
                text = /*#__PURE__*/ jsx_runtime_.jsx("em", {
                    children: text
                }, i);
            }
            if (node.underline) {
                text = /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    style: {
                        textDecoration: "underline"
                    },
                    children: text
                }, i);
            }
            if (node.strikethrough) {
                text = /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    style: {
                        textDecoration: "line-through"
                    },
                    children: text
                }, i);
            }
            return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                children: text
            }, i);
        }
        if (!node) {
            return null;
        }
        switch(node.type){
            case "h1":
                return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-3xl font-extrabold",
                    children: serialize(node.children)
                }, i);
            case "h2":
                return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "text-2xl font-bold",
                    children: serialize(node.children)
                }, i);
            case "h3":
                return /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "text-xl font-semibold",
                    children: serialize(node.children)
                }, i);
            case "h4":
                return /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    className: "text-xl font-medium",
                    children: serialize(node.children)
                }, i);
            case "h5":
                return /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: "text-lg font-medium",
                    children: serialize(node.children)
                }, i);
            case "h6":
                return /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                    className: "font-normal",
                    children: serialize(node.children)
                }, i);
            case "quote":
                return /*#__PURE__*/ jsx_runtime_.jsx("blockquote", {
                    className: "quote text-gray-600",
                    children: serialize(node.children)
                }, i);
            case "ul":
                return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "list-disc pl-5",
                    children: serialize(node.children)
                }, i);
            case "ol":
                return /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                    className: "list-decimal pl-5",
                    children: serialize(node.children)
                }, i);
            case "li":
                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-item text-gray-600",
                    children: serialize(node.children)
                }, i);
            case "link":
                return /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: external_escape_html_default()(node.url),
                    children: serialize(node.children)
                }, i);
            default:
                return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "",
                    children: serialize(node.children)
                }, i);
        }
    });
/* harmony default export */ const RichText_serialize = (serialize);

;// CONCATENATED MODULE: ./components/RichText/index.tsx



const RichText = ({ className , content  })=>{
    if (!content) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        children: RichText_serialize(content)
    });
};
/* harmony default export */ const components_RichText = (RichText);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/product/[slug].tsx









const SingleProduct = ({ categories , product , social  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: product.product_name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: ``
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: product.product_name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: `Category: ${product.category.category_name}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: product.image[0].image.url
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                categories: categories
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pt-20",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 md:px-20 px-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ProductCarousel_ProductCarousel, {
                                product: product
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ProductDetails_ProductDetails, {
                                product: product
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_RichText, {
                        content: product && product.description,
                        className: "md:px-20 px-5 mt-10 md:mt-0 mb-10"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                address: social.address,
                categories: categories,
                email: social.email,
                facebook: social.facebook,
                instagram: social.instagram,
                phone: social.phone,
                whatsapp: social.whatsapp
            })
        ]
    });
};
/* harmony default export */ const _slug_ = (SingleProduct);
const getServerSideProps = async (ctx)=>{
    const categories = await external_payload_default().find({
        collection: "categories"
    });
    const product = await external_payload_default().findByID({
        collection: "product",
        id: String(ctx.query.slug)
    });
    // const func = sharedGetServerSideProps.bind(this);
    // return func(ctx);
    const social = await external_payload_default().findGlobal({
        slug: "social"
    });
    // const func = sharedGetServerSideProps.bind(this);
    // return func(ctx);
    return {
        props: {
            categories: categories.docs ? categories.docs : [],
            product: product ? product : {},
            social: social ? social : {}
        }
    };
};


/***/ }),

/***/ 3559:
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,488], () => (__webpack_exec__(4665)));
module.exports = __webpack_exports__;

})();