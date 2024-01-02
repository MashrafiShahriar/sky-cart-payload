"use strict";
(() => {
var exports = {};
exports.id = 24;
exports.ids = [24];
exports.modules = {

/***/ 2431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// EXTERNAL MODULE: external "payload"
var external_payload_ = __webpack_require__(409);
var external_payload_default = /*#__PURE__*/__webpack_require__.n(external_payload_);
// EXTERNAL MODULE: ./components/Footer/Footer.tsx
var Footer = __webpack_require__(5235);
;// CONCATENATED MODULE: ./components/Categories/CategoryTpp/CategoryTop.tsx


const CategoryTop = ({ category_name , createdAt , id , updatedAt  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "md:pt-20 w-full relative flex items-center justify-center md:min-h-[50vh] min-h-[60vh]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-4xl text-white font-bold z-30 px-5 md:px-10",
                children: category_name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60"
            })
        ]
    });
};
/* harmony default export */ const CategoryTpp_CategoryTop = (CategoryTop);

// EXTERNAL MODULE: ./components/Product/ProductCard/ProductCard.tsx
var ProductCard = __webpack_require__(7150);
;// CONCATENATED MODULE: ./components/Categories/CategoryPage/CategoryPage.tsx



const CategoryPage = ({ products  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "grid grid-cols-4 md:px-20 px-5 mt-10",
            children: products.map((product, index)=>/*#__PURE__*/ jsx_runtime_.jsx(ProductCard/* default */.Z, {
                    image: product.image,
                    category: product.category,
                    createdAt: product.createdAt,
                    description: product.description,
                    discount: product.discount,
                    id: product.id,
                    price: product.price,
                    product_name: product.product_name,
                    quantity: product.quantity,
                    shade: product.shade,
                    updatedAt: product.updatedAt,
                    variant: product.variant
                }, index))
        })
    });
};
/* harmony default export */ const CategoryPage_CategoryPage = (CategoryPage);

// EXTERNAL MODULE: external "lucide-react"
var external_lucide_react_ = __webpack_require__(2423);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./pages/category/[slug].tsx









const Catagorized = ({ categories , products , category , hasNextPage , hasPrevPage , nextPage , prevPage , totalPage , page , social  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                categories: categories
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CategoryTpp_CategoryTop, {
                category_name: category.category_name,
                createdAt: category.createdAt,
                id: category.id,
                updatedAt: category.updatedAt
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CategoryPage_CategoryPage, {
                products: products
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center px-5 justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "join my-5",
                    children: [
                        hasPrevPage && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/category/${category.id}/?page=${prevPage}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "join-item btn-square btn btn-sm",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.ChevronLeft, {
                                    height: 15
                                })
                            })
                        }),
                        Array(totalPage).fill(0).map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/category/${category.id}/?page=${index + 1}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: `join-item btn-square btn btn-sm ${index + 1 == page && "btn-primary"}`,
                                    children: index + 1
                                }, index)
                            })),
                        hasNextPage && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/category/${category.id}/?page=${nextPage}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "join-item btn-square btn btn-sm",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.ChevronRight, {
                                    height: 15
                                })
                            })
                        })
                    ]
                })
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
/* harmony default export */ const _slug_ = (Catagorized);
const getServerSideProps = async (ctx)=>{
    const slug = ctx.query.slug;
    const products = await external_payload_default().find({
        collection: "product",
        page: Number(ctx.query.page ? ctx.query.page : 1),
        limit: 12,
        where: {
            category: {
                equals: slug
            }
        }
    });
    const categories = await external_payload_default().find({
        collection: "categories"
    });
    const category = await external_payload_default().findByID({
        collection: "categories",
        id: String(slug)
    });
    // const func = sharedGetServerSideProps.bind(this);
    // return func(ctx)
    const social = await external_payload_default().findGlobal({
        slug: "social"
    });
    return {
        props: {
            categories: categories.docs ? categories.docs : [],
            products: products.docs ? products.docs : [],
            category: category ? category : {
                id: "",
                category_name: "",
                createdAt: "",
                updatedAt: ""
            },
            page: products.page,
            nextPage: products.nextPage,
            prevPage: products.prevPage,
            totalPage: products.totalPages,
            hasNextPage: products.hasNextPage,
            hasPrevPage: products.hasPrevPage,
            social: social ? social : {}
        }
    };
};


/***/ }),

/***/ 2423:
/***/ ((module) => {

module.exports = require("lucide-react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 409:
/***/ ((module) => {

module.exports = require("payload");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,488,150], () => (__webpack_exec__(2431)));
module.exports = __webpack_exports__;

})();