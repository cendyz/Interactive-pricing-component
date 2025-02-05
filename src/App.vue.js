"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var nanoid_1 = require("nanoid");
var icon_check_svg_1 = require("@/images/icon-check.svg");
var pattern_circles_svg_1 = require("@/images/pattern-circles.svg");
var data = (0, vue_1.reactive)({
    min: 0,
    max: 32,
    default: 16,
    toggle: false,
});
var pageviews = (0, vue_1.computed)(function () { return "$".concat(data.default); });
var updateTrackBackground = function () {
    var actualValue = data.default / data.max * 100;
    document.documentElement.style.setProperty('--slider-fill', "".concat(actualValue, "%"));
};
var prosData = {
    0: {
        text: 'Unlimited websites',
    },
    1: {
        text: '100% data ownership',
    },
    2: {
        text: 'Email reports',
    },
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("absolute top-0 left-0 w-full h-[26em] bg-paleBlue rounded-bl-[7em] opacity-20") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)(__assign({ class: ("flex flex-col py-[7em] px-[1em] container relative") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("relative flex flex-col gap-y-[.6em] text-center") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("font-manrope800 relative z-10 text-[1.2rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("relative z-10 text-[.8rem] px-[6em] text-grayishBlue font-manrope600") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.circles)), alt: ("") }, { class: ("absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex flex-col items-center mt-[5em] p-[1.7em] bg-white rounded-xl rounded-b-none border-b border-b-gray-slate-100 md:w-[28em] md:mx-auto md:p-[2.5em] downShadow") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex justify-center md:justify-between items-center w-full") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("uppercase text-grayishBlue font-manrope600 text-[.8rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("gap-x-[.5em] items-center hidden md:flex") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-[2rem] font-manrope800") }));
    (__VLS_ctx.pageviews);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-grayishBlue") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign(__assign(__assign({ onInput: (__VLS_ctx.updateTrackBackground) }, { type: ("range"), id: ("amount") }), { class: ("input my-[1.7em] appearance-none w-full bg-transparent cursor-pointer") }), { min: ("0.00"), max: ("32.00") }));
    (__VLS_ctx.data.default);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex gap-x-[.5em] items-center md:hidden") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-[2rem] font-manrope800") }));
    (__VLS_ctx.pageviews);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-grayishBlue") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center mt-[1.7em]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("capitalize text-[.8rem] text-grayishBlue font-manrope600") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.data.toggle = !__VLS_ctx.data.toggle;
        } }, { type: ("button") }), { class: ("py-[.8em] px-[1.5em] bg-lightGrayishBlue-toggleBackground rounded-3xl mx-[.7em] relative transition-colors duration-200 hover:bg-softCyan") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("absolute top-[15.6%] left-[8%] w-[1.1em] h-[1.1em] bg-white rounded-full btnToggle") }, { style: (({ left: __VLS_ctx.data.toggle ? '56%' : '8%' })) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-[.8rem] text-grayishBlue relative after:content-['-25%'] after:absolute after:top-1/2 after:translate-y-[-50%] after:right-[-55%] after:text-lightRed after:bg-lightGrayishRed after:text-[.6rem] font-manrope600 after:px-[.7em] after:py-[.2em] after:rounded-2xl md:after:right-[-110%] discount") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex flex-col bg-white p-[1.7em] items-center gap-y-[.3em] md:w-[28em] md:mx-auto md:p-[2.5em] md:flex-row md: justify-between md:items-center downShadow") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.prosData)); _i < _a.length; _i++) {
        var item = _a[_i][0];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center gap-x-[1.1em]") }, { key: ((__VLS_ctx.nanoid())) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.check)),
            alt: (""),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-grayishBlue text-[.8rem] font-manrope600") }));
        (item.text);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ type: ("button") }, { class: ("py-[.8em] px-[3.5em] mt-[2em] rounded-3xl bg-darkDesaturatedBlue text-paleBlue font-manrope600 text-[.8rem] md:mt-0 transition-colors hover:text-white") }));
    ['', 'absolute', 'top-0', 'left-0', 'w-full', 'h-[26em]', 'bg-paleBlue', 'rounded-bl-[7em]', 'opacity-20', 'flex', 'flex-col', 'py-[7em]', 'px-[1em]', 'container', 'relative', 'relative', 'flex', 'flex-col', 'gap-y-[.6em]', 'text-center', 'font-manrope800', 'relative', 'z-10', 'text-[1.2rem]', 'relative', 'z-10', 'text-[.8rem]', 'px-[6em]', 'text-grayishBlue', 'font-manrope600', 'absolute', 'left-1/2', 'top-1/2', '-translate-x-[50%]', '-translate-y-[50%]', 'flex', 'flex-col', 'items-center', 'mt-[5em]', 'p-[1.7em]', 'bg-white', 'rounded-xl', 'rounded-b-none', 'border-b', 'border-b-gray-slate-100', 'md:w-[28em]', 'md:mx-auto', 'md:p-[2.5em]', 'downShadow', 'flex', 'justify-center', 'md:justify-between', 'items-center', 'w-full', 'uppercase', 'text-grayishBlue', 'font-manrope600', 'text-[.8rem]', 'gap-x-[.5em]', 'items-center', 'hidden', 'md:flex', 'text-[2rem]', 'font-manrope800', 'text-grayishBlue', 'input', 'my-[1.7em]', 'appearance-none', 'w-full', 'bg-transparent', 'cursor-pointer', 'flex', 'gap-x-[.5em]', 'items-center', 'md:hidden', 'text-[2rem]', 'font-manrope800', 'text-grayishBlue', 'flex', 'items-center', 'mt-[1.7em]', 'capitalize', 'text-[.8rem]', 'text-grayishBlue', 'font-manrope600', 'py-[.8em]', 'px-[1.5em]', 'bg-lightGrayishBlue-toggleBackground', 'rounded-3xl', 'mx-[.7em]', 'relative', 'transition-colors', 'duration-200', 'hover:bg-softCyan', 'absolute', 'top-[15.6%]', 'left-[8%]', 'w-[1.1em]', 'h-[1.1em]', 'bg-white', 'rounded-full', 'btnToggle', 'text-[.8rem]', 'text-grayishBlue', 'relative', 'after:content-[\'-25%\']', 'after:absolute', 'after:top-1/2', 'after:translate-y-[-50%]', 'after:right-[-55%]', 'after:text-lightRed', 'after:bg-lightGrayishRed', 'after:text-[.6rem]', 'font-manrope600', 'after:px-[.7em]', 'after:py-[.2em]', 'after:rounded-2xl', 'md:after:right-[-110%]', 'discount', 'flex', 'flex-col', 'bg-white', 'p-[1.7em]', 'items-center', 'gap-y-[.3em]', 'md:w-[28em]', 'md:mx-auto', 'md:p-[2.5em]', 'md:flex-row', 'md:', 'justify-between', 'md:items-center', 'downShadow', 'flex', 'items-center', 'gap-x-[1.1em]', 'text-grayishBlue', 'text-[.8rem]', 'font-manrope600', 'py-[.8em]', 'px-[3.5em]', 'mt-[2em]', 'rounded-3xl', 'bg-darkDesaturatedBlue', 'text-paleBlue', 'font-manrope600', 'text-[.8rem]', 'md:mt-0', 'transition-colors', 'hover:text-white',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            nanoid: nanoid_1.nanoid,
            check: icon_check_svg_1.default,
            circles: pattern_circles_svg_1.default,
            data: data,
            pageviews: pageviews,
            updateTrackBackground: updateTrackBackground,
            prosData: prosData,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
