import {
    r as f,
    b7 as Ti,
    aA as It,
    a as M,
    V as pt,
    d as K,
    i as _e,
    o as Ge,
    _ as se,
    g as ee,
    h as Se,
    D as En,
    U as Ai,
    I as $e,
    E as Ie,
    ay as Di,
    a6 as Ii,
    a7 as Li,
    G as pe,
    A as gt,
    l as me,
    a0 as Le,
    a2 as vt,
    H as L,
    f as We,
    $ as wn,
    a1 as yt,
    e as bt,
    b8 as Lt,
    b9 as Ot,
    W as $n,
    aq as Vt,
    at as Oi,
    n as jt,
    R as Vi,
    w as zt,
    ba as Rn,
    bb as we,
    bc as Tn,
    bd as rt,
    be as Bt,
    bf as xt,
    bg as ji,
    bh as zi,
    bi as An,
    bj as Dn,
    bk as Bi,
    bl as Mi,
    bm as Ni,
    bn as St,
    bo as Fi,
    bp as Hi,
    bq as _i,
    br as Gi,
    bs as xe,
    bt as Y,
    bu as ue,
    bv as Ct,
    bw as In,
    bx as Mt,
    by as Ln,
    bz as Oe,
    bA as Wi,
    bB as ki,
    bC as J,
    bD as U,
    bE as at,
    bF as On,
    bG as k,
    bH as Ui,
    bI as Ki,
    bJ as Xi,
    bK as Fe,
    bL as Yi,
    bM as Vn,
    bN as Nt,
    bO as qi,
    bP as Zi,
    bQ as Ft,
    bR as jn,
    bS as zn,
    bT as Qi,
    bU as Ji,
    bV as eo,
    bW as Ye,
    bX as ge,
    bY as ve,
    bZ as ze,
    b_ as Ht,
    b$ as to,
    c0 as no,
    c1 as io,
    c2 as be,
    c3 as oo,
    c4 as _t,
    c5 as so,
    c6 as ro
} from './index-f0b1ba8e.js'
const ao = (e, t) => {
        const n = f.useContext(Ti),
            i = f.useMemo(() => {
                var c
                const s = t || It[e],
                    r = (c = n == null ? void 0 : n[e]) !== null && c !== void 0 ? c : {}
                return Object.assign(Object.assign({}, typeof s == 'function' ? s() : s), r || {})
            }, [e, t, n]),
            o = f.useMemo(() => {
                const c = n == null ? void 0 : n.locale
                return n != null && n.exist && !c ? It.locale : c
            }, [n])
        return [i, o]
    },
    ca = ao
function Re(e, t, n) {
    return M({
        [`${e}-status-success`]: t === 'success',
        [`${e}-status-warning`]: t === 'warning',
        [`${e}-status-error`]: t === 'error',
        [`${e}-status-validating`]: t === 'validating',
        [`${e}-has-feedback`]: n
    })
}
const Bn = (e, t) => t || e
var lo = {
    icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
            {
                tag: 'path',
                attrs: {
                    d: 'M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z'
                }
            }
        ]
    },
    name: 'search',
    theme: 'outlined'
}
const co = lo
var uo = function (t, n) {
    return f.createElement(pt, K(K({}, t), {}, { ref: n, icon: co }))
}
const fo = f.forwardRef(uo)
var ho = ['prefixCls', 'className', 'style', 'checked', 'disabled', 'defaultChecked', 'type', 'onChange'],
    mo = f.forwardRef(function (e, t) {
        var n,
            i = e.prefixCls,
            o = i === void 0 ? 'rc-checkbox' : i,
            c = e.className,
            s = e.style,
            r = e.checked,
            l = e.disabled,
            a = e.defaultChecked,
            u = a === void 0 ? !1 : a,
            d = e.type,
            h = d === void 0 ? 'checkbox' : d,
            m = e.onChange,
            v = _e(e, ho),
            y = f.useRef(null),
            b = Ge(u, { value: r }),
            P = se(b, 2),
            S = P[0],
            g = P[1]
        f.useImperativeHandle(t, function () {
            return {
                focus: function () {
                    var C
                    ;(C = y.current) === null || C === void 0 || C.focus()
                },
                blur: function () {
                    var C
                    ;(C = y.current) === null || C === void 0 || C.blur()
                },
                input: y.current
            }
        })
        var x = M(o, c, ((n = {}), ee(n, ''.concat(o, '-checked'), S), ee(n, ''.concat(o, '-disabled'), l), n)),
            p = function (C) {
                l ||
                    ('checked' in e || g(C.target.checked),
                    m == null ||
                        m({
                            target: K(K({}, e), {}, { type: h, checked: C.target.checked }),
                            stopPropagation: function () {
                                C.stopPropagation()
                            },
                            preventDefault: function () {
                                C.preventDefault()
                            },
                            nativeEvent: C.nativeEvent
                        }))
            }
        return f.createElement(
            'span',
            { className: x, style: s },
            f.createElement(
                'input',
                Se({}, v, {
                    className: ''.concat(o, '-input'),
                    ref: y,
                    onChange: p,
                    disabled: l,
                    checked: !!S,
                    type: h
                })
            ),
            f.createElement('span', { className: ''.concat(o, '-inner') })
        )
    })
const po = (e) => ({
        '&::-moz-placeholder': { opacity: 1 },
        '&::placeholder': { color: e, userSelect: 'none' },
        '&:placeholder-shown': { textOverflow: 'ellipsis' }
    }),
    Pt = (e) => ({ borderColor: e.inputBorderHoverColor, borderInlineEndWidth: e.lineWidth }),
    lt = (e) => ({
        borderColor: e.inputBorderHoverColor,
        boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
        borderInlineEndWidth: e.lineWidth,
        outline: 0
    }),
    Mn = (e) => ({
        color: e.colorTextDisabled,
        backgroundColor: e.colorBgContainerDisabled,
        borderColor: e.colorBorder,
        boxShadow: 'none',
        cursor: 'not-allowed',
        opacity: 1,
        '&:hover': Object.assign({}, Pt(Ie(e, { inputBorderHoverColor: e.colorBorder })))
    }),
    Nn = (e) => {
        const {
            inputPaddingVerticalLG: t,
            fontSizeLG: n,
            lineHeightLG: i,
            borderRadiusLG: o,
            inputPaddingHorizontalLG: c
        } = e
        return { padding: `${t}px ${c}px`, fontSize: n, lineHeight: i, borderRadius: o }
    },
    Fn = (e) => ({
        padding: `${e.inputPaddingVerticalSM}px ${e.controlPaddingHorizontalSM - 1}px`,
        borderRadius: e.borderRadiusSM
    }),
    Hn = (e, t) => {
        const {
            componentCls: n,
            colorError: i,
            colorWarning: o,
            colorErrorOutline: c,
            colorWarningOutline: s,
            colorErrorBorderHover: r,
            colorWarningBorderHover: l
        } = e
        return {
            [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
                borderColor: i,
                '&:hover': { borderColor: r },
                '&:focus, &-focused': Object.assign(
                    {},
                    lt(Ie(e, { inputBorderActiveColor: i, inputBorderHoverColor: i, controlOutline: c }))
                ),
                [`${n}-prefix, ${n}-suffix`]: { color: i }
            },
            [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
                borderColor: o,
                '&:hover': { borderColor: l },
                '&:focus, &-focused': Object.assign(
                    {},
                    lt(Ie(e, { inputBorderActiveColor: o, inputBorderHoverColor: o, controlOutline: s }))
                ),
                [`${n}-prefix, ${n}-suffix`]: { color: o }
            }
        }
    },
    _n = (e) =>
        Object.assign(
            Object.assign(
                {
                    position: 'relative',
                    display: 'inline-block',
                    width: '100%',
                    minWidth: 0,
                    padding: `${e.inputPaddingVertical}px ${e.inputPaddingHorizontal}px`,
                    color: e.colorText,
                    fontSize: e.fontSize,
                    lineHeight: e.lineHeight,
                    backgroundColor: e.colorBgContainer,
                    backgroundImage: 'none',
                    borderWidth: e.lineWidth,
                    borderStyle: e.lineType,
                    borderColor: e.colorBorder,
                    borderRadius: e.borderRadius,
                    transition: `all ${e.motionDurationMid}`
                },
                po(e.colorTextPlaceholder)
            ),
            {
                '&:hover': Object.assign({}, Pt(e)),
                '&:focus, &-focused': Object.assign({}, lt(e)),
                '&-disabled, &[disabled]': Object.assign({}, Mn(e)),
                '&-borderless': {
                    '&, &:hover, &:focus, &-focused, &-disabled, &[disabled]': {
                        backgroundColor: 'transparent',
                        border: 'none',
                        boxShadow: 'none'
                    }
                },
                'textarea&': {
                    maxWidth: '100%',
                    height: 'auto',
                    minHeight: e.controlHeight,
                    lineHeight: e.lineHeight,
                    verticalAlign: 'bottom',
                    transition: `all ${e.motionDurationSlow}, height 0s`,
                    resize: 'vertical'
                },
                '&-lg': Object.assign({}, Nn(e)),
                '&-sm': Object.assign({}, Fn(e)),
                '&-rtl': { direction: 'rtl' },
                '&-textarea-rtl': { direction: 'rtl' }
            }
        ),
    go = (e) => {
        const { componentCls: t, antCls: n } = e
        return {
            position: 'relative',
            display: 'table',
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
            ["&[class*='col-']"]: { paddingInlineEnd: e.paddingXS, '&:last-child': { paddingInlineEnd: 0 } },
            [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, Nn(e)),
            [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, Fn(e)),
            [`&-lg ${n}-select-single ${n}-select-selector`]: { height: e.controlHeightLG },
            [`&-sm ${n}-select-single ${n}-select-selector`]: { height: e.controlHeightSM },
            [`> ${t}`]: { display: 'table-cell', '&:not(:first-child):not(:last-child)': { borderRadius: 0 } },
            [`${t}-group`]: {
                ['&-addon, &-wrap']: {
                    display: 'table-cell',
                    width: 1,
                    whiteSpace: 'nowrap',
                    verticalAlign: 'middle',
                    '&:not(:first-child):not(:last-child)': { borderRadius: 0 }
                },
                '&-wrap > *': { display: 'block !important' },
                '&-addon': {
                    position: 'relative',
                    padding: `0 ${e.inputPaddingHorizontal}px`,
                    color: e.colorText,
                    fontWeight: 'normal',
                    fontSize: e.fontSize,
                    textAlign: 'center',
                    backgroundColor: e.colorFillAlter,
                    border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
                    borderRadius: e.borderRadius,
                    transition: `all ${e.motionDurationSlow}`,
                    lineHeight: 1,
                    [`${n}-select`]: {
                        margin: `-${e.inputPaddingVertical + 1}px -${e.inputPaddingHorizontal}px`,
                        [`&${n}-select-single:not(${n}-select-customize-input)`]: {
                            [`${n}-select-selector`]: {
                                backgroundColor: 'inherit',
                                border: `${e.lineWidth}px ${e.lineType} transparent`,
                                boxShadow: 'none'
                            }
                        },
                        '&-open, &-focused': { [`${n}-select-selector`]: { color: e.colorPrimary } }
                    },
                    [`${n}-cascader-picker`]: {
                        margin: `-9px -${e.inputPaddingHorizontal}px`,
                        backgroundColor: 'transparent',
                        [`${n}-cascader-input`]: { textAlign: 'start', border: 0, boxShadow: 'none' }
                    }
                },
                '&-addon:first-child': { borderInlineEnd: 0 },
                '&-addon:last-child': { borderInlineStart: 0 }
            },
            [`${t}`]: {
                width: '100%',
                marginBottom: 0,
                textAlign: 'inherit',
                '&:focus': { zIndex: 1, borderInlineEndWidth: 1 },
                '&:hover': { zIndex: 1, borderInlineEndWidth: 1, [`${t}-search-with-button &`]: { zIndex: 0 } }
            },
            [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
                [`${n}-select ${n}-select-selector`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 }
            },
            [`> ${t}-affix-wrapper`]: {
                [`&:not(:first-child) ${t}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
                [`&:not(:last-child) ${t}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 }
            },
            [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
                [`${n}-select ${n}-select-selector`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 }
            },
            [`${t}-affix-wrapper`]: {
                '&:not(:last-child)': {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0,
                    [`${t}-search &`]: { borderStartStartRadius: e.borderRadius, borderEndStartRadius: e.borderRadius }
                },
                [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0
                }
            },
            [`&${t}-group-compact`]: Object.assign(Object.assign({ display: 'block' }, Di()), {
                [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
                    '&:not(:first-child):not(:last-child)': {
                        borderInlineEndWidth: e.lineWidth,
                        '&:hover': { zIndex: 1 },
                        '&:focus': { zIndex: 1 }
                    }
                },
                '& > *': { display: 'inline-block', float: 'none', verticalAlign: 'top', borderRadius: 0 },
                [`& > ${t}-affix-wrapper`]: { display: 'inline-flex' },
                [`& > ${n}-picker-range`]: { display: 'inline-flex' },
                '& > *:not(:last-child)': { marginInlineEnd: -e.lineWidth, borderInlineEndWidth: e.lineWidth },
                [`${t}`]: { float: 'none' },
                [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
                    borderInlineEndWidth: e.lineWidth,
                    borderRadius: 0,
                    '&:hover': { zIndex: 1 },
                    '&:focus': { zIndex: 1 }
                },
                [`& > ${n}-select-focused`]: { zIndex: 1 },
                [`& > ${n}-select > ${n}-select-arrow`]: { zIndex: 1 },
                [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
                    borderStartStartRadius: e.borderRadius,
                    borderEndStartRadius: e.borderRadius
                },
                [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
                    borderInlineEndWidth: e.lineWidth,
                    borderStartEndRadius: e.borderRadius,
                    borderEndEndRadius: e.borderRadius
                },
                [`& > ${n}-select-auto-complete ${t}`]: { verticalAlign: 'top' },
                [`${t}-group-wrapper + ${t}-group-wrapper`]: {
                    marginInlineStart: -e.lineWidth,
                    [`${t}-affix-wrapper`]: { borderRadius: 0 }
                },
                [`${t}-group-wrapper:not(:last-child)`]: {
                    [`&${t}-search > ${t}-group`]: {
                        [`& > ${t}-group-addon > ${t}-search-button`]: { borderRadius: 0 },
                        [`& > ${t}`]: {
                            borderStartStartRadius: e.borderRadius,
                            borderStartEndRadius: 0,
                            borderEndEndRadius: 0,
                            borderEndStartRadius: e.borderRadius
                        }
                    }
                }
            })
        }
    },
    vo = (e) => {
        const { componentCls: t, controlHeightSM: n, lineWidth: i } = e,
            o = 16,
            c = (n - i * 2 - o) / 2
        return {
            [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, $e(e)), _n(e)), Hn(e, t)), {
                '&[type="color"]': {
                    height: e.controlHeight,
                    [`&${t}-lg`]: { height: e.controlHeightLG },
                    [`&${t}-sm`]: { height: n, paddingTop: c, paddingBottom: c }
                },
                '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
                    '-webkit-appearance': 'none'
                }
            })
        }
    },
    yo = (e) => {
        const { componentCls: t } = e
        return {
            [`${t}-clear-icon`]: {
                margin: 0,
                color: e.colorTextQuaternary,
                fontSize: e.fontSizeIcon,
                verticalAlign: -1,
                cursor: 'pointer',
                transition: `color ${e.motionDurationSlow}`,
                '&:hover': { color: e.colorTextTertiary },
                '&:active': { color: e.colorText },
                '&-hidden': { visibility: 'hidden' },
                '&-has-suffix': { margin: `0 ${e.inputAffixPadding}px` }
            }
        }
    },
    bo = (e) => {
        const {
            componentCls: t,
            inputAffixPadding: n,
            colorTextDescription: i,
            motionDurationSlow: o,
            colorIcon: c,
            colorIconHover: s,
            iconCls: r
        } = e
        return {
            [`${t}-affix-wrapper`]: Object.assign(
                Object.assign(
                    Object.assign(
                        Object.assign(Object.assign({}, _n(e)), {
                            display: 'inline-flex',
                            [`&:not(${t}-affix-wrapper-disabled):hover`]: Object.assign(Object.assign({}, Pt(e)), {
                                zIndex: 1,
                                [`${t}-search-with-button &`]: { zIndex: 0 }
                            }),
                            '&-focused, &:focus': { zIndex: 1 },
                            '&-disabled': { [`${t}[disabled]`]: { background: 'transparent' } },
                            [`> input${t}`]: {
                                padding: 0,
                                fontSize: 'inherit',
                                border: 'none',
                                borderRadius: 0,
                                outline: 'none',
                                '&::-ms-reveal': { display: 'none' },
                                '&:focus': { boxShadow: 'none !important' }
                            },
                            '&::before': { width: 0, visibility: 'hidden', content: '"\\a0"' },
                            [`${t}`]: {
                                '&-prefix, &-suffix': {
                                    display: 'flex',
                                    flex: 'none',
                                    alignItems: 'center',
                                    '> *:not(:last-child)': { marginInlineEnd: e.paddingXS }
                                },
                                '&-show-count-suffix': { color: i },
                                '&-show-count-has-suffix': { marginInlineEnd: e.paddingXXS },
                                '&-prefix': { marginInlineEnd: n },
                                '&-suffix': { marginInlineStart: n }
                            }
                        }),
                        yo(e)
                    ),
                    {
                        [`${r}${t}-password-icon`]: {
                            color: c,
                            cursor: 'pointer',
                            transition: `all ${o}`,
                            '&:hover': { color: s }
                        }
                    }
                ),
                Hn(e, `${t}-affix-wrapper`)
            )
        }
    },
    xo = (e) => {
        const { componentCls: t, colorError: n, colorWarning: i, borderRadiusLG: o, borderRadiusSM: c } = e
        return {
            [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, $e(e)), go(e)), {
                '&-rtl': { direction: 'rtl' },
                '&-wrapper': {
                    display: 'inline-block',
                    width: '100%',
                    textAlign: 'start',
                    verticalAlign: 'top',
                    '&-rtl': { direction: 'rtl' },
                    '&-lg': { [`${t}-group-addon`]: { borderRadius: o } },
                    '&-sm': { [`${t}-group-addon`]: { borderRadius: c } },
                    '&-status-error': { [`${t}-group-addon`]: { color: n, borderColor: n } },
                    '&-status-warning': { [`${t}-group-addon`]: { color: i, borderColor: i } },
                    '&-disabled': { [`${t}-group-addon`]: Object.assign({}, Mn(e)) },
                    [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
                        [`${t}, ${t}-group-addon`]: { borderRadius: 0 }
                    },
                    [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
                        [`${t}, ${t}-group-addon`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 }
                    },
                    [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
                        [`${t}, ${t}-group-addon`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 }
                    }
                }
            })
        }
    },
    So = (e) => {
        const { componentCls: t, antCls: n } = e,
            i = `${t}-search`
        return {
            [i]: {
                [`${t}`]: {
                    '&:hover, &:focus': {
                        borderColor: e.colorPrimaryHover,
                        [`+ ${t}-group-addon ${i}-button:not(${n}-btn-primary)`]: {
                            borderInlineStartColor: e.colorPrimaryHover
                        }
                    }
                },
                [`${t}-affix-wrapper`]: { borderRadius: 0 },
                [`${t}-lg`]: { lineHeight: e.lineHeightLG - 2e-4 },
                [`> ${t}-group`]: {
                    [`> ${t}-group-addon:last-child`]: {
                        insetInlineStart: -1,
                        padding: 0,
                        border: 0,
                        [`${i}-button`]: {
                            paddingTop: 0,
                            paddingBottom: 0,
                            borderStartStartRadius: 0,
                            borderStartEndRadius: e.borderRadius,
                            borderEndEndRadius: e.borderRadius,
                            borderEndStartRadius: 0
                        },
                        [`${i}-button:not(${n}-btn-primary)`]: {
                            color: e.colorTextDescription,
                            '&:hover': { color: e.colorPrimaryHover },
                            '&:active': { color: e.colorPrimaryActive },
                            [`&${n}-btn-loading::before`]: {
                                insetInlineStart: 0,
                                insetInlineEnd: 0,
                                insetBlockStart: 0,
                                insetBlockEnd: 0
                            }
                        }
                    }
                },
                [`${i}-button`]: { height: e.controlHeight, '&:hover, &:focus': { zIndex: 1 } },
                [`&-large ${i}-button`]: { height: e.controlHeightLG },
                [`&-small ${i}-button`]: { height: e.controlHeightSM },
                '&-rtl': { direction: 'rtl' },
                [`&${t}-compact-item`]: {
                    [`&:not(${t}-compact-last-item)`]: {
                        [`${t}-group-addon`]: {
                            [`${t}-search-button`]: { marginInlineEnd: -e.lineWidth, borderRadius: 0 }
                        }
                    },
                    [`&:not(${t}-compact-first-item)`]: { [`${t},${t}-affix-wrapper`]: { borderRadius: 0 } },
                    [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: { '&:hover,&:focus,&:active': { zIndex: 2 } },
                    [`> ${t}-affix-wrapper-focused`]: { zIndex: 2 }
                }
            }
        }
    }
function Co(e) {
    return Ie(e, {
        inputAffixPadding: e.paddingXXS,
        inputPaddingVertical: Math.max(
            Math.round(((e.controlHeight - e.fontSize * e.lineHeight) / 2) * 10) / 10 - e.lineWidth,
            3
        ),
        inputPaddingVerticalLG:
            Math.ceil(((e.controlHeightLG - e.fontSizeLG * e.lineHeightLG) / 2) * 10) / 10 - e.lineWidth,
        inputPaddingVerticalSM: Math.max(
            Math.round(((e.controlHeightSM - e.fontSize * e.lineHeight) / 2) * 10) / 10 - e.lineWidth,
            0
        ),
        inputPaddingHorizontal: e.paddingSM - e.lineWidth,
        inputPaddingHorizontalSM: e.paddingXS - e.lineWidth,
        inputPaddingHorizontalLG: e.controlPaddingHorizontal - e.lineWidth,
        inputBorderHoverColor: e.colorPrimaryHover,
        inputBorderActiveColor: e.colorPrimaryHover
    })
}
const Po = (e) => {
        const { componentCls: t, paddingLG: n } = e,
            i = `${t}-textarea`
        return {
            [i]: {
                position: 'relative',
                '&-show-count': {
                    [`> ${t}`]: { height: '100%' },
                    [`${t}-data-count`]: {
                        position: 'absolute',
                        bottom: -e.fontSize * e.lineHeight,
                        insetInlineEnd: 0,
                        color: e.colorTextDescription,
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none'
                    }
                },
                '&-allow-clear': { [`> ${t}`]: { paddingInlineEnd: n } },
                [`&-affix-wrapper${i}-has-feedback`]: { [`${t}`]: { paddingInlineEnd: n } },
                [`&-affix-wrapper${t}-affix-wrapper`]: {
                    padding: 0,
                    [`> textarea${t}`]: {
                        fontSize: 'inherit',
                        border: 'none',
                        outline: 'none',
                        '&:focus': { boxShadow: 'none !important' }
                    },
                    [`${t}-suffix`]: {
                        margin: 0,
                        '> *:not(:last-child)': { marginInline: 0 },
                        [`${t}-clear-icon`]: {
                            position: 'absolute',
                            insetInlineEnd: e.paddingXS,
                            insetBlockStart: e.paddingXS
                        },
                        [`${i}-suffix`]: {
                            position: 'absolute',
                            top: 0,
                            insetInlineEnd: e.inputPaddingHorizontal,
                            bottom: 0,
                            zIndex: 1,
                            display: 'inline-flex',
                            alignItems: 'center',
                            margin: 'auto',
                            pointerEvents: 'none'
                        }
                    }
                }
            }
        }
    },
    Et = En('Input', (e) => {
        const t = Co(e)
        return [vo(t), Po(t), bo(t), xo(t), So(t), Ai(t)]
    }),
    Eo = new Ii('antCheckboxEffect', {
        '0%': { transform: 'scale(1)', opacity: 0.5 },
        '100%': { transform: 'scale(1.6)', opacity: 0 }
    }),
    wo = (e) => {
        const { checkboxCls: t } = e,
            n = `${t}-wrapper`
        return [
            {
                [`${t}-group`]: Object.assign(Object.assign({}, $e(e)), {
                    display: 'inline-flex',
                    flexWrap: 'wrap',
                    columnGap: e.marginXS,
                    [`> ${e.antCls}-row`]: { flex: 1 }
                }),
                [n]: Object.assign(Object.assign({}, $e(e)), {
                    display: 'inline-flex',
                    alignItems: 'baseline',
                    cursor: 'pointer',
                    '&:after': { display: 'inline-block', width: 0, overflow: 'hidden', content: "'\\a0'" },
                    [`& + ${n}`]: { marginInlineStart: 0 },
                    [`&${n}-in-form-item`]: { 'input[type="checkbox"]': { width: 14, height: 14 } }
                }),
                [t]: Object.assign(Object.assign({}, $e(e)), {
                    position: 'relative',
                    whiteSpace: 'nowrap',
                    lineHeight: 1,
                    cursor: 'pointer',
                    alignSelf: 'start',
                    transform: `translate(0, ${(e.lineHeight * e.fontSize) / 2 - e.checkboxSize / 2}px)`,
                    [`${t}-input`]: {
                        position: 'absolute',
                        inset: 0,
                        zIndex: 1,
                        cursor: 'pointer',
                        opacity: 0,
                        margin: 0,
                        [`&:focus-visible + ${t}-inner`]: Object.assign({}, Li(e))
                    },
                    [`${t}-inner`]: {
                        boxSizing: 'border-box',
                        position: 'relative',
                        top: 0,
                        insetInlineStart: 0,
                        display: 'block',
                        width: e.checkboxSize,
                        height: e.checkboxSize,
                        direction: 'ltr',
                        backgroundColor: e.colorBgContainer,
                        border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
                        borderRadius: e.borderRadiusSM,
                        borderCollapse: 'separate',
                        transition: `all ${e.motionDurationSlow}`,
                        '&:after': {
                            boxSizing: 'border-box',
                            position: 'absolute',
                            top: '50%',
                            insetInlineStart: '21.5%',
                            display: 'table',
                            width: (e.checkboxSize / 14) * 5,
                            height: (e.checkboxSize / 14) * 8,
                            border: `${e.lineWidthBold}px solid ${e.colorWhite}`,
                            borderTop: 0,
                            borderInlineStart: 0,
                            transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                            opacity: 0,
                            content: '""',
                            transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`
                        }
                    },
                    '& + span': { paddingInlineStart: e.paddingXS, paddingInlineEnd: e.paddingXS }
                })
            },
            {
                [t]: {
                    '&-indeterminate': {
                        [`${t}-inner`]: {
                            '&:after': {
                                top: '50%',
                                insetInlineStart: '50%',
                                width: e.fontSizeLG / 2,
                                height: e.fontSizeLG / 2,
                                backgroundColor: e.colorPrimary,
                                border: 0,
                                transform: 'translate(-50%, -50%) scale(1)',
                                opacity: 1,
                                content: '""'
                            }
                        }
                    }
                }
            },
            {
                [`${n}:hover ${t}:after`]: { visibility: 'visible' },
                [`
        ${n}:not(${n}-disabled),
        ${t}:not(${t}-disabled)
      `]: { [`&:hover ${t}-inner`]: { borderColor: e.colorPrimary } },
                [`${n}:not(${n}-disabled)`]: {
                    [`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]: {
                        backgroundColor: e.colorPrimaryHover,
                        borderColor: 'transparent'
                    },
                    [`&:hover ${t}-checked:not(${t}-disabled):after`]: { borderColor: e.colorPrimaryHover }
                }
            },
            {
                [`${t}-checked`]: {
                    [`${t}-inner`]: {
                        backgroundColor: e.colorPrimary,
                        borderColor: e.colorPrimary,
                        '&:after': {
                            opacity: 1,
                            transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                            transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`
                        }
                    },
                    '&:after': {
                        position: 'absolute',
                        top: 0,
                        insetInlineStart: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: e.borderRadiusSM,
                        visibility: 'hidden',
                        border: `${e.lineWidthBold}px solid ${e.colorPrimary}`,
                        animationName: Eo,
                        animationDuration: e.motionDurationSlow,
                        animationTimingFunction: 'ease-in-out',
                        animationFillMode: 'backwards',
                        content: '""',
                        transition: `all ${e.motionDurationSlow}`
                    }
                },
                [`
        ${n}-checked:not(${n}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]: {
                    [`&:hover ${t}-inner`]: { backgroundColor: e.colorPrimaryHover, borderColor: 'transparent' },
                    [`&:hover ${t}:after`]: { borderColor: e.colorPrimaryHover }
                }
            },
            {
                [`${n}-disabled`]: { cursor: 'not-allowed' },
                [`${t}-disabled`]: {
                    [`&, ${t}-input`]: { cursor: 'not-allowed', pointerEvents: 'none' },
                    [`${t}-inner`]: {
                        background: e.colorBgContainerDisabled,
                        borderColor: e.colorBorder,
                        '&:after': { borderColor: e.colorTextDisabled }
                    },
                    '&:after': { display: 'none' },
                    '& + span': { color: e.colorTextDisabled },
                    [`&${t}-indeterminate ${t}-inner::after`]: { background: e.colorTextDisabled }
                }
            }
        ]
    }
function $o(e, t) {
    const n = Ie(t, { checkboxCls: `.${e}`, checkboxSize: t.controlInteractiveSize })
    return [wo(n)]
}
const Gn = En('Checkbox', (e, t) => {
    let { prefixCls: n } = t
    return [$o(n, e)]
})
var Ro =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
        var n = {}
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i])
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
                t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]])
        return n
    }
const Wn = f.createContext(null),
    To = (e, t) => {
        var {
                defaultValue: n,
                children: i,
                options: o = [],
                prefixCls: c,
                className: s,
                rootClassName: r,
                style: l,
                onChange: a
            } = e,
            u = Ro(e, [
                'defaultValue',
                'children',
                'options',
                'prefixCls',
                'className',
                'rootClassName',
                'style',
                'onChange'
            ])
        const { getPrefixCls: d, direction: h } = f.useContext(pe),
            [m, v] = f.useState(u.value || n || []),
            [y, b] = f.useState([])
        f.useEffect(() => {
            'value' in u && v(u.value || [])
        }, [u.value])
        const P = () => o.map((E) => (typeof E == 'string' || typeof E == 'number' ? { label: E, value: E } : E)),
            S = (E) => {
                b((O) => O.filter((I) => I !== E))
            },
            g = (E) => {
                b((O) => [].concat(me(O), [E]))
            },
            x = (E) => {
                const O = m.indexOf(E.value),
                    I = me(m)
                O === -1 ? I.push(E.value) : I.splice(O, 1), 'value' in u || v(I)
                const T = P()
                a == null ||
                    a(
                        I.filter((H) => y.includes(H)).sort((H, _) => {
                            const W = T.findIndex((D) => D.value === H),
                                X = T.findIndex((D) => D.value === _)
                            return W - X
                        })
                    )
            },
            p = d('checkbox', c),
            $ = `${p}-group`,
            [C, A] = Gn(p),
            j = gt(u, ['value', 'disabled'])
        o &&
            o.length > 0 &&
            (i = P().map((E) =>
                f.createElement(
                    kn,
                    {
                        prefixCls: p,
                        key: E.value.toString(),
                        disabled: 'disabled' in E ? E.disabled : u.disabled,
                        value: E.value,
                        checked: m.includes(E.value),
                        onChange: E.onChange,
                        className: `${$}-item`,
                        style: E.style
                    },
                    E.label
                )
            ))
        const B = { toggleOption: x, value: m, disabled: u.disabled, name: u.name, registerValue: g, cancelValue: S },
            R = M($, { [`${$}-rtl`]: h === 'rtl' }, s, r, A)
        return C(
            f.createElement(
                'div',
                Object.assign({ className: R, style: l }, j, { ref: t }),
                f.createElement(Wn.Provider, { value: B }, i)
            )
        )
    },
    Ao = f.forwardRef(To),
    Do = f.memo(Ao)
var Io =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
        var n = {}
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i])
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
                t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]])
        return n
    }
const Lo = (e, t) => {
        var n,
            {
                prefixCls: i,
                className: o,
                rootClassName: c,
                children: s,
                indeterminate: r = !1,
                style: l,
                onMouseEnter: a,
                onMouseLeave: u,
                skipGroup: d = !1,
                disabled: h
            } = e,
            m = Io(e, [
                'prefixCls',
                'className',
                'rootClassName',
                'children',
                'indeterminate',
                'style',
                'onMouseEnter',
                'onMouseLeave',
                'skipGroup',
                'disabled'
            ])
        const { getPrefixCls: v, direction: y } = f.useContext(pe),
            b = f.useContext(Wn),
            { isFormItemInput: P } = f.useContext(Le),
            S = f.useContext(vt),
            g = (n = (b == null ? void 0 : b.disabled) || h) !== null && n !== void 0 ? n : S,
            x = f.useRef(m.value)
        f.useEffect(() => {
            b == null || b.registerValue(m.value)
        }, []),
            f.useEffect(() => {
                if (!d)
                    return (
                        m.value !== x.current &&
                            (b == null || b.cancelValue(x.current),
                            b == null || b.registerValue(m.value),
                            (x.current = m.value)),
                        () => (b == null ? void 0 : b.cancelValue(m.value))
                    )
            }, [m.value])
        const p = v('checkbox', i),
            [$, C] = Gn(p),
            A = Object.assign({}, m)
        b &&
            !d &&
            ((A.onChange = function () {
                m.onChange && m.onChange.apply(m, arguments),
                    b.toggleOption && b.toggleOption({ label: s, value: m.value })
            }),
            (A.name = b.name),
            (A.checked = b.value.includes(m.value)))
        const j = M(
                {
                    [`${p}-wrapper`]: !0,
                    [`${p}-rtl`]: y === 'rtl',
                    [`${p}-wrapper-checked`]: A.checked,
                    [`${p}-wrapper-disabled`]: g,
                    [`${p}-wrapper-in-form-item`]: P
                },
                o,
                c,
                C
            ),
            B = M({ [`${p}-indeterminate`]: r }, C),
            R = r ? 'mixed' : void 0
        return $(
            f.createElement(
                'label',
                { className: j, style: l, onMouseEnter: a, onMouseLeave: u },
                f.createElement(
                    mo,
                    Object.assign({ 'aria-checked': R }, A, { prefixCls: p, className: B, disabled: g, ref: t })
                ),
                s !== void 0 && f.createElement('span', null, s)
            )
        )
    },
    Oo = f.forwardRef(Lo),
    kn = Oo,
    wt = kn
wt.Group = Do
wt.__ANT_CHECKBOX = !0
const ua = wt,
    Vo = (e) => {
        const { getPrefixCls: t, direction: n } = f.useContext(pe),
            { prefixCls: i, className: o = '' } = e,
            c = t('input-group', i),
            s = t('input'),
            [r, l] = Et(s),
            a = M(
                c,
                {
                    [`${c}-lg`]: e.size === 'large',
                    [`${c}-sm`]: e.size === 'small',
                    [`${c}-compact`]: e.compact,
                    [`${c}-rtl`]: n === 'rtl'
                },
                l,
                o
            ),
            u = f.useContext(Le),
            d = f.useMemo(() => Object.assign(Object.assign({}, u), { isFormItemInput: !1 }), [u])
        return r(
            f.createElement(
                'span',
                {
                    className: a,
                    style: e.style,
                    onMouseEnter: e.onMouseEnter,
                    onMouseLeave: e.onMouseLeave,
                    onFocus: e.onFocus,
                    onBlur: e.onBlur
                },
                f.createElement(Le.Provider, { value: d }, e.children)
            )
        )
    },
    jo = Vo
function ye(e) {
    return !!(e.addonBefore || e.addonAfter)
}
function qe(e) {
    return !!(e.prefix || e.suffix || e.allowClear)
}
function Te(e, t, n, i) {
    if (n) {
        var o = t
        if (t.type === 'click') {
            var c = e.cloneNode(!0)
            ;(o = Object.create(t, { target: { value: c }, currentTarget: { value: c } })), (c.value = ''), n(o)
            return
        }
        if (i !== void 0) {
            ;(o = Object.create(t, { target: { value: e }, currentTarget: { value: e } })), (e.value = i), n(o)
            return
        }
        n(o)
    }
}
function zo(e, t) {
    if (e) {
        e.focus(t)
        var n = t || {},
            i = n.cursor
        if (i) {
            var o = e.value.length
            switch (i) {
                case 'start':
                    e.setSelectionRange(0, 0)
                    break
                case 'end':
                    e.setSelectionRange(o, o)
                    break
                default:
                    e.setSelectionRange(0, o)
            }
        }
    }
}
function ct(e) {
    return typeof e > 'u' || e === null ? '' : String(e)
}
var Un = function (t) {
        var n,
            i,
            o = t.inputElement,
            c = t.prefixCls,
            s = t.prefix,
            r = t.suffix,
            l = t.addonBefore,
            a = t.addonAfter,
            u = t.className,
            d = t.style,
            h = t.disabled,
            m = t.readOnly,
            v = t.focused,
            y = t.triggerFocus,
            b = t.allowClear,
            P = t.value,
            S = t.handleReset,
            g = t.hidden,
            x = t.classes,
            p = t.classNames,
            $ = t.dataAttrs,
            C = t.styles,
            A = f.useRef(null),
            j = function (V) {
                var F
                ;(F = A.current) !== null && F !== void 0 && F.contains(V.target) && (y == null || y())
            },
            B = function () {
                var V
                if (!b) return null
                var F = !h && !m && P,
                    z = ''.concat(c, '-clear-icon'),
                    w = We(b) === 'object' && b !== null && b !== void 0 && b.clearIcon ? b.clearIcon : '✖'
                return L.createElement(
                    'span',
                    {
                        onClick: S,
                        onMouseDown: function (G) {
                            return G.preventDefault()
                        },
                        className: M(
                            z,
                            ((V = {}), ee(V, ''.concat(z, '-hidden'), !F), ee(V, ''.concat(z, '-has-suffix'), !!r), V)
                        ),
                        role: 'button',
                        tabIndex: -1
                    },
                    w
                )
            },
            R = f.cloneElement(o, {
                value: P,
                hidden: g,
                className:
                    M((n = o.props) === null || n === void 0 ? void 0 : n.className, !qe(t) && !ye(t) && u) || null,
                style: K(K({}, (i = o.props) === null || i === void 0 ? void 0 : i.style), !qe(t) && !ye(t) ? d : {})
            })
        if (qe(t)) {
            var E,
                O = ''.concat(c, '-affix-wrapper'),
                I = M(
                    O,
                    ((E = {}),
                    ee(E, ''.concat(O, '-disabled'), h),
                    ee(E, ''.concat(O, '-focused'), v),
                    ee(E, ''.concat(O, '-readonly'), m),
                    ee(E, ''.concat(O, '-input-with-clear-btn'), r && b && P),
                    E),
                    !ye(t) && u,
                    x == null ? void 0 : x.affixWrapper
                ),
                T =
                    (r || b) &&
                    L.createElement(
                        'span',
                        {
                            className: M(''.concat(c, '-suffix'), p == null ? void 0 : p.suffix),
                            style: C == null ? void 0 : C.suffix
                        },
                        B(),
                        r
                    )
            R = L.createElement(
                'span',
                Se(
                    { className: I, style: ye(t) ? void 0 : d, hidden: !ye(t) && g, onClick: j },
                    $ == null ? void 0 : $.affixWrapper,
                    { ref: A }
                ),
                s &&
                    L.createElement(
                        'span',
                        {
                            className: M(''.concat(c, '-prefix'), p == null ? void 0 : p.prefix),
                            style: C == null ? void 0 : C.prefix
                        },
                        s
                    ),
                f.cloneElement(o, { value: P, hidden: null }),
                T
            )
        }
        if (ye(t)) {
            var H = ''.concat(c, '-group'),
                _ = ''.concat(H, '-addon'),
                W = M(''.concat(c, '-wrapper'), H, x == null ? void 0 : x.wrapper),
                X = M(''.concat(c, '-group-wrapper'), u, x == null ? void 0 : x.group)
            return L.createElement(
                'span',
                { className: X, style: d, hidden: g },
                L.createElement(
                    'span',
                    { className: W },
                    l && L.createElement('span', { className: _ }, l),
                    f.cloneElement(R, { hidden: null }),
                    a && L.createElement('span', { className: _ }, a)
                )
            )
        }
        return R
    },
    Bo = [
        'autoComplete',
        'onChange',
        'onFocus',
        'onBlur',
        'onPressEnter',
        'onKeyDown',
        'prefixCls',
        'disabled',
        'htmlSize',
        'className',
        'maxLength',
        'suffix',
        'showCount',
        'type',
        'classes',
        'classNames',
        'styles'
    ],
    Mo = f.forwardRef(function (e, t) {
        var n = e.autoComplete,
            i = e.onChange,
            o = e.onFocus,
            c = e.onBlur,
            s = e.onPressEnter,
            r = e.onKeyDown,
            l = e.prefixCls,
            a = l === void 0 ? 'rc-input' : l,
            u = e.disabled,
            d = e.htmlSize,
            h = e.className,
            m = e.maxLength,
            v = e.suffix,
            y = e.showCount,
            b = e.type,
            P = b === void 0 ? 'text' : b,
            S = e.classes,
            g = e.classNames,
            x = e.styles,
            p = _e(e, Bo),
            $ = Ge(e.defaultValue, { value: e.value }),
            C = se($, 2),
            A = C[0],
            j = C[1],
            B = f.useState(!1),
            R = se(B, 2),
            E = R[0],
            O = R[1],
            I = f.useRef(null),
            T = function (w) {
                I.current && zo(I.current, w)
            }
        f.useImperativeHandle(t, function () {
            return {
                focus: T,
                blur: function () {
                    var w
                    ;(w = I.current) === null || w === void 0 || w.blur()
                },
                setSelectionRange: function (w, q, G) {
                    var Z
                    ;(Z = I.current) === null || Z === void 0 || Z.setSelectionRange(w, q, G)
                },
                select: function () {
                    var w
                    ;(w = I.current) === null || w === void 0 || w.select()
                },
                input: I.current
            }
        }),
            f.useEffect(
                function () {
                    O(function (z) {
                        return z && u ? !1 : z
                    })
                },
                [u]
            )
        var H = function (w) {
                e.value === void 0 && j(w.target.value), I.current && Te(I.current, w, i)
            },
            _ = function (w) {
                s && w.key === 'Enter' && s(w), r == null || r(w)
            },
            W = function (w) {
                O(!0), o == null || o(w)
            },
            X = function (w) {
                O(!1), c == null || c(w)
            },
            D = function (w) {
                j(''), T(), I.current && Te(I.current, w, i)
            },
            V = function () {
                var w = gt(e, [
                    'prefixCls',
                    'onPressEnter',
                    'addonBefore',
                    'addonAfter',
                    'prefix',
                    'suffix',
                    'allowClear',
                    'defaultValue',
                    'showCount',
                    'classes',
                    'htmlSize',
                    'styles',
                    'classNames'
                ])
                return L.createElement(
                    'input',
                    Se({ autoComplete: n }, w, {
                        onChange: H,
                        onFocus: W,
                        onBlur: X,
                        onKeyDown: _,
                        className: M(a, ee({}, ''.concat(a, '-disabled'), u), g == null ? void 0 : g.input),
                        style: x == null ? void 0 : x.input,
                        ref: I,
                        size: d,
                        type: P
                    })
                )
            },
            F = function () {
                var w = Number(m) > 0
                if (v || y) {
                    var q = ct(A),
                        G = me(q).length,
                        Z =
                            We(y) === 'object'
                                ? y.formatter({ value: q, count: G, maxLength: m })
                                : ''.concat(G).concat(w ? ' / '.concat(m) : '')
                    return L.createElement(
                        L.Fragment,
                        null,
                        !!y &&
                            L.createElement(
                                'span',
                                {
                                    className: M(
                                        ''.concat(a, '-show-count-suffix'),
                                        ee({}, ''.concat(a, '-show-count-has-suffix'), !!v),
                                        g == null ? void 0 : g.count
                                    ),
                                    style: K({}, x == null ? void 0 : x.count)
                                },
                                Z
                            ),
                        v
                    )
                }
                return null
            }
        return L.createElement(
            Un,
            Se({}, p, {
                prefixCls: a,
                className: h,
                inputElement: V(),
                handleReset: D,
                value: ct(A),
                focused: E,
                triggerFocus: T,
                suffix: F(),
                disabled: u,
                classes: S,
                classNames: g,
                styles: x
            })
        )
    })
function Kn(e, t) {
    const n = f.useRef([]),
        i = () => {
            n.current.push(
                setTimeout(() => {
                    var o, c, s, r
                    !((o = e.current) === null || o === void 0) &&
                        o.input &&
                        ((c = e.current) === null || c === void 0 ? void 0 : c.input.getAttribute('type')) ===
                            'password' &&
                        !((s = e.current) === null || s === void 0) &&
                        s.input.hasAttribute('value') &&
                        ((r = e.current) === null || r === void 0 || r.input.removeAttribute('value'))
                })
            )
        }
    return (
        f.useEffect(
            () => (
                t && i(),
                () =>
                    n.current.forEach((o) => {
                        o && clearTimeout(o)
                    })
            ),
            []
        ),
        i
    )
}
function No(e) {
    return !!(e.prefix || e.suffix || e.allowClear)
}
var Fo =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
        var n = {}
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i])
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
                t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]])
        return n
    }
function Ho(e, t) {
    if (!e) return
    e.focus(t)
    const { cursor: n } = t || {}
    if (n) {
        const i = e.value.length
        switch (n) {
            case 'start':
                e.setSelectionRange(0, 0)
                break
            case 'end':
                e.setSelectionRange(i, i)
                break
            default:
                e.setSelectionRange(0, i)
                break
        }
    }
}
const _o = f.forwardRef((e, t) => {
        const {
                prefixCls: n,
                bordered: i = !0,
                status: o,
                size: c,
                disabled: s,
                onBlur: r,
                onFocus: l,
                suffix: a,
                allowClear: u,
                addonAfter: d,
                addonBefore: h,
                className: m,
                rootClassName: v,
                onChange: y,
                classNames: b
            } = e,
            P = Fo(e, [
                'prefixCls',
                'bordered',
                'status',
                'size',
                'disabled',
                'onBlur',
                'onFocus',
                'suffix',
                'allowClear',
                'addonAfter',
                'addonBefore',
                'className',
                'rootClassName',
                'onChange',
                'classNames'
            ]),
            { getPrefixCls: S, direction: g, input: x } = L.useContext(pe),
            p = S('input', n),
            $ = f.useRef(null),
            [C, A] = Et(p),
            { compactSize: j, compactItemClassnames: B } = wn(p, g),
            R = yt((G) => {
                var Z
                return (Z = j ?? c) !== null && Z !== void 0 ? Z : G
            }),
            E = L.useContext(vt),
            O = s ?? E,
            { status: I, hasFeedback: T, feedbackIcon: H } = f.useContext(Le),
            _ = Bn(I, o),
            W = No(e) || !!T,
            X = f.useRef(W)
        f.useEffect(() => {
            W && X.current, (X.current = W)
        }, [W])
        const D = Kn($, !0),
            V = (G) => {
                D(), r == null || r(G)
            },
            F = (G) => {
                D(), l == null || l(G)
            },
            z = (G) => {
                D(), y == null || y(G)
            },
            w = (T || a) && L.createElement(L.Fragment, null, a, T && H)
        let q
        return (
            typeof u == 'object' && u != null && u.clearIcon
                ? (q = u)
                : u && (q = { clearIcon: L.createElement($n, null) }),
            C(
                L.createElement(
                    Mo,
                    Object.assign(
                        { ref: bt(t, $), prefixCls: p, autoComplete: x == null ? void 0 : x.autoComplete },
                        P,
                        {
                            disabled: O,
                            onBlur: V,
                            onFocus: F,
                            suffix: w,
                            allowClear: q,
                            className: M(m, v, B),
                            onChange: z,
                            addonAfter:
                                d && L.createElement(Lt, null, L.createElement(Ot, { override: !0, status: !0 }, d)),
                            addonBefore:
                                h && L.createElement(Lt, null, L.createElement(Ot, { override: !0, status: !0 }, h)),
                            classNames: Object.assign(Object.assign({}, b), {
                                input: M(
                                    {
                                        [`${p}-sm`]: R === 'small',
                                        [`${p}-lg`]: R === 'large',
                                        [`${p}-rtl`]: g === 'rtl',
                                        [`${p}-borderless`]: !i
                                    },
                                    !W && Re(p, _),
                                    b == null ? void 0 : b.input,
                                    A
                                )
                            }),
                            classes: {
                                affixWrapper: M(
                                    {
                                        [`${p}-affix-wrapper-sm`]: R === 'small',
                                        [`${p}-affix-wrapper-lg`]: R === 'large',
                                        [`${p}-affix-wrapper-rtl`]: g === 'rtl',
                                        [`${p}-affix-wrapper-borderless`]: !i
                                    },
                                    Re(`${p}-affix-wrapper`, _, T),
                                    A
                                ),
                                wrapper: M({ [`${p}-group-rtl`]: g === 'rtl' }, A),
                                group: M(
                                    {
                                        [`${p}-group-wrapper-sm`]: R === 'small',
                                        [`${p}-group-wrapper-lg`]: R === 'large',
                                        [`${p}-group-wrapper-rtl`]: g === 'rtl',
                                        [`${p}-group-wrapper-disabled`]: O
                                    },
                                    Re(`${p}-group-wrapper`, _, T),
                                    A
                                )
                            }
                        }
                    )
                )
            )
        )
    }),
    $t = _o
var Go = {
    icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
            {
                tag: 'path',
                attrs: {
                    d: 'M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z'
                }
            },
            {
                tag: 'path',
                attrs: {
                    d: 'M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z'
                }
            }
        ]
    },
    name: 'eye-invisible',
    theme: 'outlined'
}
const Wo = Go
var ko = function (t, n) {
    return f.createElement(pt, K(K({}, t), {}, { ref: n, icon: Wo }))
}
const Uo = f.forwardRef(ko)
var Ko = {
    icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
            {
                tag: 'path',
                attrs: {
                    d: 'M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'
                }
            }
        ]
    },
    name: 'eye',
    theme: 'outlined'
}
const Xo = Ko
var Yo = function (t, n) {
    return f.createElement(pt, K(K({}, t), {}, { ref: n, icon: Xo }))
}
const qo = f.forwardRef(Yo)
var Zo =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
        var n = {}
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i])
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
                t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]])
        return n
    }
const Qo = (e) => (e ? f.createElement(qo, null) : f.createElement(Uo, null)),
    Jo = { click: 'onClick', hover: 'onMouseOver' },
    es = f.forwardRef((e, t) => {
        const { visibilityToggle: n = !0 } = e,
            i = typeof n == 'object' && n.visible !== void 0,
            [o, c] = f.useState(() => (i ? n.visible : !1)),
            s = f.useRef(null)
        f.useEffect(() => {
            i && c(n.visible)
        }, [i, n])
        const r = Kn(s),
            l = () => {
                const { disabled: p } = e
                p ||
                    (o && r(),
                    c(($) => {
                        var C
                        const A = !$
                        return (
                            typeof n == 'object' && ((C = n.onVisibleChange) === null || C === void 0 || C.call(n, A)),
                            A
                        )
                    }))
            },
            a = (p) => {
                const { action: $ = 'click', iconRender: C = Qo } = e,
                    A = Jo[$] || '',
                    j = C(o),
                    B = {
                        [A]: l,
                        className: `${p}-icon`,
                        key: 'passwordIcon',
                        onMouseDown: (R) => {
                            R.preventDefault()
                        },
                        onMouseUp: (R) => {
                            R.preventDefault()
                        }
                    }
                return f.cloneElement(f.isValidElement(j) ? j : f.createElement('span', null, j), B)
            },
            { className: u, prefixCls: d, inputPrefixCls: h, size: m } = e,
            v = Zo(e, ['className', 'prefixCls', 'inputPrefixCls', 'size']),
            { getPrefixCls: y } = f.useContext(pe),
            b = y('input', h),
            P = y('input-password', d),
            S = n && a(P),
            g = M(P, u, { [`${P}-${m}`]: !!m }),
            x = Object.assign(Object.assign({}, gt(v, ['suffix', 'iconRender', 'visibilityToggle'])), {
                type: o ? 'text' : 'password',
                className: g,
                prefixCls: b,
                suffix: S
            })
        return m && (x.size = m), f.createElement($t, Object.assign({ ref: bt(t, s) }, x))
    }),
    ts = es
var ns =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
        var n = {}
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i])
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
                t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]])
        return n
    }
const is = f.forwardRef((e, t) => {
        const {
                prefixCls: n,
                inputPrefixCls: i,
                className: o,
                size: c,
                suffix: s,
                enterButton: r = !1,
                addonAfter: l,
                loading: a,
                disabled: u,
                onSearch: d,
                onChange: h,
                onCompositionStart: m,
                onCompositionEnd: v
            } = e,
            y = ns(e, [
                'prefixCls',
                'inputPrefixCls',
                'className',
                'size',
                'suffix',
                'enterButton',
                'addonAfter',
                'loading',
                'disabled',
                'onSearch',
                'onChange',
                'onCompositionStart',
                'onCompositionEnd'
            ]),
            { getPrefixCls: b, direction: P } = f.useContext(pe),
            S = f.useRef(!1),
            g = b('input-search', n),
            x = b('input', i),
            { compactSize: p } = wn(g, P),
            $ = yt((D) => {
                var V
                return (V = p ?? c) !== null && V !== void 0 ? V : D
            }),
            C = f.useRef(null),
            A = (D) => {
                D && D.target && D.type === 'click' && d && d(D.target.value, D), h && h(D)
            },
            j = (D) => {
                var V
                document.activeElement === ((V = C.current) === null || V === void 0 ? void 0 : V.input) &&
                    D.preventDefault()
            },
            B = (D) => {
                var V, F
                d &&
                    d(
                        (F = (V = C.current) === null || V === void 0 ? void 0 : V.input) === null || F === void 0
                            ? void 0
                            : F.value,
                        D
                    )
            },
            R = (D) => {
                S.current || a || B(D)
            },
            E = typeof r == 'boolean' ? f.createElement(fo, null) : null,
            O = `${g}-button`
        let I
        const T = r || {},
            H = T.type && T.type.__ANT_BUTTON === !0
        H || T.type === 'button'
            ? (I = Vt(
                  T,
                  Object.assign(
                      {
                          onMouseDown: j,
                          onClick: (D) => {
                              var V, F
                              ;(F =
                                  (V = T == null ? void 0 : T.props) === null || V === void 0 ? void 0 : V.onClick) ===
                                  null ||
                                  F === void 0 ||
                                  F.call(V, D),
                                  B(D)
                          },
                          key: 'enterButton'
                      },
                      H ? { className: O, size: $ } : {}
                  )
              ))
            : (I = f.createElement(
                  Oi,
                  {
                      className: O,
                      type: r ? 'primary' : void 0,
                      size: $,
                      disabled: u,
                      key: 'enterButton',
                      onMouseDown: j,
                      onClick: B,
                      loading: a,
                      icon: E
                  },
                  r
              )),
            l && (I = [I, Vt(l, { key: 'addonAfter' })])
        const _ = M(g, { [`${g}-rtl`]: P === 'rtl', [`${g}-${$}`]: !!$, [`${g}-with-button`]: !!r }, o),
            W = (D) => {
                ;(S.current = !0), m == null || m(D)
            },
            X = (D) => {
                ;(S.current = !1), v == null || v(D)
            }
        return f.createElement(
            $t,
            Object.assign({ ref: bt(C, t), onPressEnter: R }, y, {
                size: $,
                onCompositionStart: W,
                onCompositionEnd: X,
                prefixCls: x,
                addonAfter: I,
                suffix: s,
                onChange: A,
                className: _,
                disabled: u
            })
        )
    }),
    os = is
var ss = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,
    rs = [
        'letter-spacing',
        'line-height',
        'padding-top',
        'padding-bottom',
        'font-family',
        'font-weight',
        'font-size',
        'font-variant',
        'text-rendering',
        'text-transform',
        'width',
        'text-indent',
        'padding-left',
        'padding-right',
        'border-width',
        'box-sizing',
        'word-break',
        'white-space'
    ],
    Ze = {},
    ne
function as(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = e.getAttribute('id') || e.getAttribute('data-reactid') || e.getAttribute('name')
    if (t && Ze[n]) return Ze[n]
    var i = window.getComputedStyle(e),
        o =
            i.getPropertyValue('box-sizing') ||
            i.getPropertyValue('-moz-box-sizing') ||
            i.getPropertyValue('-webkit-box-sizing'),
        c = parseFloat(i.getPropertyValue('padding-bottom')) + parseFloat(i.getPropertyValue('padding-top')),
        s = parseFloat(i.getPropertyValue('border-bottom-width')) + parseFloat(i.getPropertyValue('border-top-width')),
        r = rs
            .map(function (a) {
                return ''.concat(a, ':').concat(i.getPropertyValue(a))
            })
            .join(';'),
        l = { sizingStyle: r, paddingSize: c, borderSize: s, boxSizing: o }
    return t && n && (Ze[n] = l), l
}
function ls(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
        i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null
    ne ||
        ((ne = document.createElement('textarea')),
        ne.setAttribute('tab-index', '-1'),
        ne.setAttribute('aria-hidden', 'true'),
        document.body.appendChild(ne)),
        e.getAttribute('wrap') ? ne.setAttribute('wrap', e.getAttribute('wrap')) : ne.removeAttribute('wrap')
    var o = as(e, t),
        c = o.paddingSize,
        s = o.borderSize,
        r = o.boxSizing,
        l = o.sizingStyle
    ne.setAttribute('style', ''.concat(l, ';').concat(ss)), (ne.value = e.value || e.placeholder || '')
    var a = void 0,
        u = void 0,
        d,
        h = ne.scrollHeight
    if ((r === 'border-box' ? (h += s) : r === 'content-box' && (h -= c), n !== null || i !== null)) {
        ne.value = ' '
        var m = ne.scrollHeight - c
        n !== null && ((a = m * n), r === 'border-box' && (a = a + c + s), (h = Math.max(a, h))),
            i !== null &&
                ((u = m * i), r === 'border-box' && (u = u + c + s), (d = h > u ? '' : 'hidden'), (h = Math.min(u, h)))
    }
    var v = { height: h, overflowY: d, resize: 'none' }
    return a && (v.minHeight = a), u && (v.maxHeight = u), v
}
var cs = [
        'prefixCls',
        'onPressEnter',
        'defaultValue',
        'value',
        'autoSize',
        'onResize',
        'className',
        'style',
        'disabled',
        'onChange',
        'onInternalAutoSize'
    ],
    Qe = 0,
    Je = 1,
    et = 2,
    us = f.forwardRef(function (e, t) {
        var n = e,
            i = n.prefixCls
        n.onPressEnter
        var o = n.defaultValue,
            c = n.value,
            s = n.autoSize,
            r = n.onResize,
            l = n.className,
            a = n.style,
            u = n.disabled,
            d = n.onChange
        n.onInternalAutoSize
        var h = _e(n, cs),
            m = Ge(o, {
                value: c,
                postState: function (w) {
                    return w ?? ''
                }
            }),
            v = se(m, 2),
            y = v[0],
            b = v[1],
            P = function (w) {
                b(w.target.value), d == null || d(w)
            },
            S = f.useRef()
        f.useImperativeHandle(t, function () {
            return { textArea: S.current }
        })
        var g = f.useMemo(
                function () {
                    return s && We(s) === 'object' ? [s.minRows, s.maxRows] : []
                },
                [s]
            ),
            x = se(g, 2),
            p = x[0],
            $ = x[1],
            C = !!s,
            A = function () {
                try {
                    if (document.activeElement === S.current) {
                        var w = S.current,
                            q = w.selectionStart,
                            G = w.selectionEnd,
                            Z = w.scrollTop
                        S.current.setSelectionRange(q, G), (S.current.scrollTop = Z)
                    }
                } catch {}
            },
            j = f.useState(et),
            B = se(j, 2),
            R = B[0],
            E = B[1],
            O = f.useState(),
            I = se(O, 2),
            T = I[0],
            H = I[1],
            _ = function () {
                E(Qe)
            }
        jt(
            function () {
                C && _()
            },
            [c, p, $, C]
        ),
            jt(
                function () {
                    if (R === Qe) E(Je)
                    else if (R === Je) {
                        var z = ls(S.current, !1, p, $)
                        E(et), H(z)
                    } else A()
                },
                [R]
            )
        var W = f.useRef(),
            X = function () {
                zt.cancel(W.current)
            },
            D = function (w) {
                R === et &&
                    (r == null || r(w),
                    s &&
                        (X(),
                        (W.current = zt(function () {
                            _()
                        }))))
            }
        f.useEffect(function () {
            return X
        }, [])
        var V = C ? T : null,
            F = K(K({}, a), V)
        return (
            (R === Qe || R === Je) && ((F.overflowY = 'hidden'), (F.overflowX = 'hidden')),
            f.createElement(
                Vi,
                { onResize: D, disabled: !(s || r) },
                f.createElement(
                    'textarea',
                    Se({}, h, {
                        ref: S,
                        style: F,
                        className: M(i, l, ee({}, ''.concat(i, '-disabled'), u)),
                        disabled: u,
                        value: y,
                        onChange: P
                    })
                )
            )
        )
    }),
    ds = [
        'defaultValue',
        'value',
        'onFocus',
        'onBlur',
        'onChange',
        'allowClear',
        'maxLength',
        'onCompositionStart',
        'onCompositionEnd',
        'suffix',
        'prefixCls',
        'classes',
        'showCount',
        'className',
        'style',
        'disabled',
        'hidden',
        'classNames',
        'styles',
        'onResize'
    ]
function Xn(e, t) {
    return me(e || '')
        .slice(0, t)
        .join('')
}
function Gt(e, t, n, i) {
    var o = n
    return e ? (o = Xn(n, i)) : me(t || '').length < n.length && me(n || '').length > i && (o = t), o
}
var fs = L.forwardRef(function (e, t) {
        var n,
            i = e.defaultValue,
            o = e.value,
            c = e.onFocus,
            s = e.onBlur,
            r = e.onChange,
            l = e.allowClear,
            a = e.maxLength,
            u = e.onCompositionStart,
            d = e.onCompositionEnd,
            h = e.suffix,
            m = e.prefixCls,
            v = m === void 0 ? 'rc-textarea' : m,
            y = e.classes,
            b = e.showCount,
            P = e.className,
            S = e.style,
            g = e.disabled,
            x = e.hidden,
            p = e.classNames,
            $ = e.styles,
            C = e.onResize,
            A = _e(e, ds),
            j = Ge(i, { value: o, defaultValue: i }),
            B = se(j, 2),
            R = B[0],
            E = B[1],
            O = f.useRef(null),
            I = L.useState(!1),
            T = se(I, 2),
            H = T[0],
            _ = T[1],
            W = L.useState(!1),
            X = se(W, 2),
            D = X[0],
            V = X[1],
            F = L.useRef(),
            z = L.useRef(0),
            w = L.useState(null),
            q = se(w, 2),
            G = q[0],
            Z = q[1],
            Ke = function () {
                O.current.textArea.focus()
            }
        f.useImperativeHandle(t, function () {
            return {
                resizableTextArea: O.current,
                focus: Ke,
                blur: function () {
                    O.current.textArea.blur()
                }
            }
        }),
            f.useEffect(
                function () {
                    _(function (oe) {
                        return !g && oe
                    })
                },
                [g]
            )
        var je = Number(a) > 0,
            yi = function (N) {
                V(!0), (F.current = R), (z.current = N.currentTarget.selectionStart), u == null || u(N)
            },
            bi = function (N) {
                V(!1)
                var Q = N.currentTarget.value
                if (je) {
                    var ae,
                        Ri =
                            z.current >= a + 1 ||
                            z.current === ((ae = F.current) === null || ae === void 0 ? void 0 : ae.length)
                    Q = Gt(Ri, F.current, Q, a)
                }
                Q !== R && (E(Q), Te(N.currentTarget, N, r, Q)), d == null || d(N)
            },
            xi = function (N) {
                var Q = N.target.value
                if (!D && je) {
                    var ae =
                        N.target.selectionStart >= a + 1 ||
                        N.target.selectionStart === Q.length ||
                        !N.target.selectionStart
                    Q = Gt(ae, R, Q, a)
                }
                E(Q), Te(N.currentTarget, N, r, Q)
            },
            Si = function (N) {
                var Q = A.onPressEnter,
                    ae = A.onKeyDown
                N.key === 'Enter' && Q && Q(N), ae == null || ae(N)
            },
            Ci = function (N) {
                _(!0), c == null || c(N)
            },
            Pi = function (N) {
                _(!1), s == null || s(N)
            },
            Ei = function (N) {
                E(''), Ke(), Te(O.current.textArea, N, r)
            },
            Ce = ct(R)
        !D && je && o == null && (Ce = Xn(Ce, a))
        var Xe = h,
            Pe
        if (b) {
            var Dt = me(Ce).length
            We(b) === 'object'
                ? (Pe = b.formatter({ value: Ce, count: Dt, maxLength: a }))
                : (Pe = ''.concat(Dt).concat(je ? ' / '.concat(a) : '')),
                (Xe = L.createElement(
                    L.Fragment,
                    null,
                    Xe,
                    L.createElement(
                        'span',
                        {
                            className: M(''.concat(v, '-data-count'), p == null ? void 0 : p.count),
                            style: $ == null ? void 0 : $.count
                        },
                        Pe
                    )
                ))
        }
        var wi = function (N) {
                C == null || C(N), G === null ? Z('mounted') : G === 'mounted' && Z('resized')
            },
            $i = L.createElement(Un, {
                value: Ce,
                allowClear: l,
                handleReset: Ei,
                suffix: Xe,
                prefixCls: v,
                classes: {
                    affixWrapper: M(
                        y == null ? void 0 : y.affixWrapper,
                        ((n = {}),
                        ee(n, ''.concat(v, '-show-count'), b),
                        ee(n, ''.concat(v, '-textarea-allow-clear'), l),
                        n)
                    )
                },
                disabled: g,
                focused: H,
                className: P,
                style: K(K({}, S), G === 'resized' ? { height: 'auto' } : {}),
                dataAttrs: { affixWrapper: { 'data-count': typeof Pe == 'string' ? Pe : void 0 } },
                hidden: x,
                inputElement: L.createElement(
                    us,
                    Se({}, A, {
                        onKeyDown: Si,
                        onChange: xi,
                        onFocus: Ci,
                        onBlur: Pi,
                        onCompositionStart: yi,
                        onCompositionEnd: bi,
                        className: p == null ? void 0 : p.textarea,
                        style: K(K({}, $ == null ? void 0 : $.textarea), {}, { resize: S == null ? void 0 : S.resize }),
                        disabled: g,
                        prefixCls: v,
                        onResize: wi,
                        ref: O
                    })
                )
            })
        return $i
    }),
    hs =
        (globalThis && globalThis.__rest) ||
        function (e, t) {
            var n = {}
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i])
            if (e != null && typeof Object.getOwnPropertySymbols == 'function')
                for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
                    t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]])
            return n
        }
const ms = f.forwardRef((e, t) => {
        var {
                prefixCls: n,
                bordered: i = !0,
                size: o,
                disabled: c,
                status: s,
                allowClear: r,
                showCount: l,
                classNames: a
            } = e,
            u = hs(e, ['prefixCls', 'bordered', 'size', 'disabled', 'status', 'allowClear', 'showCount', 'classNames'])
        const { getPrefixCls: d, direction: h } = f.useContext(pe),
            m = yt(o),
            v = f.useContext(vt),
            y = c ?? v,
            { status: b, hasFeedback: P, feedbackIcon: S } = f.useContext(Le),
            g = Bn(b, s),
            x = f.useRef(null)
        f.useImperativeHandle(t, () => {
            var j
            return {
                resizableTextArea: (j = x.current) === null || j === void 0 ? void 0 : j.resizableTextArea,
                focus: (B) => {
                    var R, E
                    Ho(
                        (E = (R = x.current) === null || R === void 0 ? void 0 : R.resizableTextArea) === null ||
                            E === void 0
                            ? void 0
                            : E.textArea,
                        B
                    )
                },
                blur: () => {
                    var B
                    return (B = x.current) === null || B === void 0 ? void 0 : B.blur()
                }
            }
        })
        const p = d('input', n)
        let $
        typeof r == 'object' && r != null && r.clearIcon ? ($ = r) : r && ($ = { clearIcon: f.createElement($n, null) })
        const [C, A] = Et(p)
        return C(
            f.createElement(
                fs,
                Object.assign({}, u, {
                    disabled: y,
                    allowClear: $,
                    classes: {
                        affixWrapper: M(
                            `${p}-textarea-affix-wrapper`,
                            {
                                [`${p}-affix-wrapper-rtl`]: h === 'rtl',
                                [`${p}-affix-wrapper-borderless`]: !i,
                                [`${p}-affix-wrapper-sm`]: m === 'small',
                                [`${p}-affix-wrapper-lg`]: m === 'large',
                                [`${p}-textarea-show-count`]: l
                            },
                            Re(`${p}-affix-wrapper`, g),
                            A
                        )
                    },
                    classNames: Object.assign(Object.assign({}, a), {
                        textarea: M(
                            { [`${p}-borderless`]: !i, [`${p}-sm`]: m === 'small', [`${p}-lg`]: m === 'large' },
                            Re(p, g),
                            A,
                            a == null ? void 0 : a.textarea
                        )
                    }),
                    prefixCls: p,
                    suffix: P && f.createElement('span', { className: `${p}-textarea-suffix` }, S),
                    showCount: l,
                    ref: x
                })
            )
        )
    }),
    ps = ms,
    Ve = $t
Ve.Group = jo
Ve.Search = os
Ve.TextArea = ps
Ve.Password = ts
const da = Ve,
    Yn = f.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: 'never' }),
    ke = f.createContext({}),
    Rt = f.createContext(null),
    Wt = Rn ? f.useLayoutEffect : f.useEffect,
    qn = f.createContext({ strict: !1 })
function gs(e, t, n, i) {
    const { visualElement: o } = f.useContext(ke),
        c = f.useContext(qn),
        s = f.useContext(Rt),
        r = f.useContext(Yn).reducedMotion,
        l = f.useRef()
    ;(i = i || c.renderer),
        !l.current &&
            i &&
            (l.current = i(e, {
                visualState: t,
                parent: o,
                props: n,
                presenceContext: s,
                blockInitialAnimation: s ? s.initial === !1 : !1,
                reducedMotionConfig: r
            }))
    const a = l.current
    return (
        f.useInsertionEffect(() => {
            a && a.update(n, s)
        }),
        Wt(() => {
            a && a.render()
        }),
        f.useEffect(() => {
            a && a.updateFeatures()
        }),
        (window.HandoffAppearAnimations ? Wt : f.useEffect)(() => {
            a && a.animationState && a.animationState.animateChanges()
        }),
        a
    )
}
function vs(e, t, n) {
    return f.useCallback(
        (i) => {
            i && e.mount && e.mount(i),
                t && (i ? t.mount(i) : t.unmount()),
                n && (typeof n == 'function' ? n(i) : we(n) && (n.current = i))
        },
        [t]
    )
}
function ys(e, t) {
    if (Tn(e)) {
        const { initial: n, animate: i } = e
        return { initial: n === !1 || rt(n) ? n : void 0, animate: rt(i) ? i : void 0 }
    }
    return e.inherit !== !1 ? t : {}
}
function bs(e) {
    const { initial: t, animate: n } = ys(e, f.useContext(ke))
    return f.useMemo(() => ({ initial: t, animate: n }), [kt(t), kt(n)])
}
function kt(e) {
    return Array.isArray(e) ? e.join(' ') : e
}
function xs(e) {
    for (const t in e) Bt[t] = { ...Bt[t], ...e[t] }
}
const Zn = f.createContext({}),
    Qn = f.createContext({}),
    Ss = Symbol.for('motionComponentSymbol')
function Cs({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: i, Component: o }) {
    e && xs(e)
    function c(r, l) {
        let a
        const u = { ...f.useContext(Yn), ...r, layoutId: Ps(r) },
            { isStatic: d } = u,
            h = bs(r),
            m = i(r, d)
        if (!d && Rn) {
            h.visualElement = gs(o, m, u, t)
            const v = f.useContext(Qn),
                y = f.useContext(qn).strict
            h.visualElement && (a = h.visualElement.loadFeatures(u, y, e, v))
        }
        return f.createElement(
            ke.Provider,
            { value: h },
            a && h.visualElement ? f.createElement(a, { visualElement: h.visualElement, ...u }) : null,
            n(o, r, vs(m, h.visualElement, l), m, d, h.visualElement)
        )
    }
    const s = f.forwardRef(c)
    return (s[Ss] = o), s
}
function Ps({ layoutId: e }) {
    const t = f.useContext(Zn).id
    return t && e !== void 0 ? t + '-' + e : e
}
function Es(e) {
    function t(i, o = {}) {
        return Cs(e(i, o))
    }
    if (typeof Proxy > 'u') return t
    const n = new Map()
    return new Proxy(t, { get: (i, o) => (n.has(o) || n.set(o, t(o)), n.get(o)) })
}
const ws = [
    'animate',
    'circle',
    'defs',
    'desc',
    'ellipse',
    'g',
    'image',
    'line',
    'filter',
    'marker',
    'mask',
    'metadata',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'rect',
    'stop',
    'switch',
    'symbol',
    'svg',
    'text',
    'tspan',
    'use',
    'view'
]
function Tt(e) {
    return typeof e != 'string' || e.includes('-') ? !1 : !!(ws.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const At = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
function Jn(e, t, n) {
    for (const i in t) !xt(t[i]) && !ji(i, n) && (e[i] = t[i])
}
function $s({ transformTemplate: e }, t, n) {
    return f.useMemo(() => {
        const i = At()
        return zi(i, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, i.vars, i.style)
    }, [t])
}
function Rs(e, t, n) {
    const i = e.style || {},
        o = {}
    return Jn(o, i, e), Object.assign(o, $s(e, t, n)), e.transformValues ? e.transformValues(o) : o
}
function Ts(e, t, n) {
    const i = {},
        o = Rs(e, t, n)
    return (
        e.drag &&
            e.dragListener !== !1 &&
            ((i.draggable = !1),
            (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
            (o.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
        e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0),
        (i.style = o),
        i
    )
}
const As = new Set([
    'animate',
    'exit',
    'variants',
    'initial',
    'style',
    'values',
    'variants',
    'transition',
    'transformTemplate',
    'transformValues',
    'custom',
    'inherit',
    'onLayoutAnimationStart',
    'onLayoutAnimationComplete',
    'onLayoutMeasure',
    'onBeforeLayoutMeasure',
    'onAnimationStart',
    'onAnimationComplete',
    'onUpdate',
    'onDragStart',
    'onDrag',
    'onDragEnd',
    'onMeasureDragConstraints',
    'onDirectionLock',
    'onDragTransitionEnd',
    '_dragX',
    '_dragY',
    'onHoverStart',
    'onHoverEnd',
    'onViewportEnter',
    'onViewportLeave',
    'ignoreStrict',
    'viewport'
])
function He(e) {
    return (
        e.startsWith('while') ||
        (e.startsWith('drag') && e !== 'draggable') ||
        e.startsWith('layout') ||
        e.startsWith('onTap') ||
        e.startsWith('onPan') ||
        As.has(e)
    )
}
let ei = (e) => !He(e)
function Ds(e) {
    e && (ei = (t) => (t.startsWith('on') ? !He(t) : e(t)))
}
try {
    Ds(require('@emotion/is-prop-valid').default)
} catch {}
function Is(e, t, n) {
    const i = {}
    for (const o in e)
        (o === 'values' && typeof e.values == 'object') ||
            ((ei(o) || (n === !0 && He(o)) || (!t && !He(o)) || (e.draggable && o.startsWith('onDrag'))) &&
                (i[o] = e[o]))
    return i
}
const ti = () => ({ ...At(), attrs: {} })
function Ls(e, t, n, i) {
    const o = f.useMemo(() => {
        const c = ti()
        return (
            An(c, t, { enableHardwareAcceleration: !1 }, Dn(i), e.transformTemplate),
            { ...c.attrs, style: { ...c.style } }
        )
    }, [t])
    if (e.style) {
        const c = {}
        Jn(c, e.style, e), (o.style = { ...c, ...o.style })
    }
    return o
}
function Os(e = !1) {
    return (n, i, o, { latestValues: c }, s) => {
        const l = (Tt(n) ? Ls : Ts)(i, c, s, n),
            u = { ...Is(i, typeof n == 'string', e), ...l, ref: o },
            { children: d } = i,
            h = f.useMemo(() => (xt(d) ? d.get() : d), [d])
        return f.createElement(n, { ...u, children: h })
    }
}
function Me(e) {
    const t = xt(e) ? e.get() : e
    return Bi(t) ? t.toValue() : t
}
function Vs({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, i, o, c) {
    const s = { latestValues: js(i, o, c, e), renderState: t() }
    return n && (s.mount = (r) => n(i, r, s)), s
}
const ni = (e) => (t, n) => {
    const i = f.useContext(ke),
        o = f.useContext(Rt),
        c = () => Vs(e, t, i, o)
    return n ? c() : Mi(c)
}
function js(e, t, n, i) {
    const o = {},
        c = i(e, {})
    for (const h in c) o[h] = Me(c[h])
    let { initial: s, animate: r } = e
    const l = Tn(e),
        a = Ni(e)
    t && a && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), r === void 0 && (r = t.animate))
    let u = n ? n.initial === !1 : !1
    u = u || s === !1
    const d = u ? r : s
    return (
        d &&
            typeof d != 'boolean' &&
            !St(d) &&
            (Array.isArray(d) ? d : [d]).forEach((m) => {
                const v = Fi(e, m)
                if (!v) return
                const { transitionEnd: y, transition: b, ...P } = v
                for (const S in P) {
                    let g = P[S]
                    if (Array.isArray(g)) {
                        const x = u ? g.length - 1 : 0
                        g = g[x]
                    }
                    g !== null && (o[S] = g)
                }
                for (const S in y) o[S] = y[S]
            }),
        o
    )
}
const zs = {
        useVisualState: ni({
            scrapeMotionValuesFromProps: Hi,
            createRenderState: ti,
            onMount: (e, t, { renderState: n, latestValues: i }) => {
                try {
                    n.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = { x: 0, y: 0, width: 0, height: 0 }
                }
                An(n, i, { enableHardwareAcceleration: !1 }, Dn(t.tagName), e.transformTemplate), _i(t, n)
            }
        })
    },
    Bs = { useVisualState: ni({ scrapeMotionValuesFromProps: Gi, createRenderState: At }) }
function Ms(e, { forwardMotionProps: t = !1 }, n, i) {
    return { ...(Tt(e) ? zs : Bs), preloadedFeatures: n, useRender: Os(t), createVisualElement: i, Component: e }
}
function le(e, t, n, i = { passive: !0 }) {
    return e.addEventListener(t, n, i), () => e.removeEventListener(t, n)
}
const ii = (e) => (e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1)
function Ue(e, t = 'page') {
    return { point: { x: e[t + 'X'], y: e[t + 'Y'] } }
}
const Ns = (e) => (t) => ii(t) && e(t, Ue(t))
function ce(e, t, n, i) {
    return le(e, t, Ns(n), i)
}
function oi(e) {
    let t = null
    return () => {
        const n = () => {
            t = null
        }
        return t === null ? ((t = e), n) : !1
    }
}
const Ut = oi('dragHorizontal'),
    Kt = oi('dragVertical')
function si(e) {
    let t = !1
    if (e === 'y') t = Kt()
    else if (e === 'x') t = Ut()
    else {
        const n = Ut(),
            i = Kt()
        n && i
            ? (t = () => {
                  n(), i()
              })
            : (n && n(), i && i())
    }
    return t
}
function ri() {
    const e = si(!0)
    return e ? (e(), !1) : !0
}
class de {
    constructor(t) {
        ;(this.isMounted = !1), (this.node = t)
    }
    update() {}
}
function Xt(e, t) {
    const n = 'pointer' + (t ? 'enter' : 'leave'),
        i = 'onHover' + (t ? 'Start' : 'End'),
        o = (c, s) => {
            if (c.type === 'touch' || ri()) return
            const r = e.getProps()
            e.animationState && r.whileHover && e.animationState.setActive('whileHover', t),
                r[i] && Y.update(() => r[i](c, s))
        }
    return ce(e.current, n, o, { passive: !e.getProps()[i] })
}
class Fs extends de {
    mount() {
        this.unmount = xe(Xt(this.node, !0), Xt(this.node, !1))
    }
    unmount() {}
}
class Hs extends de {
    constructor() {
        super(...arguments), (this.isActive = !1)
    }
    onFocus() {
        let t = !1
        try {
            t = this.node.current.matches(':focus-visible')
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0))
    }
    onBlur() {
        !this.isActive ||
            !this.node.animationState ||
            (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1))
    }
    mount() {
        this.unmount = xe(
            le(this.node.current, 'focus', () => this.onFocus()),
            le(this.node.current, 'blur', () => this.onBlur())
        )
    }
    unmount() {}
}
const ai = (e, t) => (t ? (e === t ? !0 : ai(e, t.parentElement)) : !1)
function tt(e, t) {
    if (!t) return
    const n = new PointerEvent('pointer' + e)
    t(n, Ue(n))
}
class _s extends de {
    constructor() {
        super(...arguments),
            (this.removeStartListeners = ue),
            (this.removeEndListeners = ue),
            (this.removeAccessibleListeners = ue),
            (this.startPointerPress = (t, n) => {
                if ((this.removeEndListeners(), this.isPressing)) return
                const i = this.node.getProps(),
                    c = ce(
                        window,
                        'pointerup',
                        (r, l) => {
                            if (!this.checkPressEnd()) return
                            const { onTap: a, onTapCancel: u } = this.node.getProps()
                            Y.update(() => {
                                ai(this.node.current, r.target) ? a && a(r, l) : u && u(r, l)
                            })
                        },
                        { passive: !(i.onTap || i.onPointerUp) }
                    ),
                    s = ce(window, 'pointercancel', (r, l) => this.cancelPress(r, l), {
                        passive: !(i.onTapCancel || i.onPointerCancel)
                    })
                ;(this.removeEndListeners = xe(c, s)), this.startPress(t, n)
            }),
            (this.startAccessiblePress = () => {
                const t = (c) => {
                        if (c.key !== 'Enter' || this.isPressing) return
                        const s = (r) => {
                            r.key !== 'Enter' ||
                                !this.checkPressEnd() ||
                                tt('up', (l, a) => {
                                    const { onTap: u } = this.node.getProps()
                                    u && Y.update(() => u(l, a))
                                })
                        }
                        this.removeEndListeners(),
                            (this.removeEndListeners = le(this.node.current, 'keyup', s)),
                            tt('down', (r, l) => {
                                this.startPress(r, l)
                            })
                    },
                    n = le(this.node.current, 'keydown', t),
                    i = () => {
                        this.isPressing && tt('cancel', (c, s) => this.cancelPress(c, s))
                    },
                    o = le(this.node.current, 'blur', i)
                this.removeAccessibleListeners = xe(n, o)
            })
    }
    startPress(t, n) {
        this.isPressing = !0
        const { onTapStart: i, whileTap: o } = this.node.getProps()
        o && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
            i && Y.update(() => i(t, n))
    }
    checkPressEnd() {
        return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
                this.node.animationState &&
                this.node.animationState.setActive('whileTap', !1),
            !ri()
        )
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return
        const { onTapCancel: i } = this.node.getProps()
        i && Y.update(() => i(t, n))
    }
    mount() {
        const t = this.node.getProps(),
            n = ce(this.node.current, 'pointerdown', this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            }),
            i = le(this.node.current, 'focus', this.startAccessiblePress)
        this.removeStartListeners = xe(n, i)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const ut = new WeakMap(),
    nt = new WeakMap(),
    Gs = (e) => {
        const t = ut.get(e.target)
        t && t(e)
    },
    Ws = (e) => {
        e.forEach(Gs)
    }
function ks({ root: e, ...t }) {
    const n = e || document
    nt.has(n) || nt.set(n, {})
    const i = nt.get(n),
        o = JSON.stringify(t)
    return i[o] || (i[o] = new IntersectionObserver(Ws, { root: e, ...t })), i[o]
}
function Us(e, t, n) {
    const i = ks(t)
    return (
        ut.set(e, n),
        i.observe(e),
        () => {
            ut.delete(e), i.unobserve(e)
        }
    )
}
const Ks = { some: 0, all: 1 }
class Xs extends de {
    constructor() {
        super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
    }
    startObserver() {
        this.unmount()
        const { viewport: t = {} } = this.node.getProps(),
            { root: n, margin: i, amount: o = 'some', once: c } = t,
            s = { root: n ? n.current : void 0, rootMargin: i, threshold: typeof o == 'number' ? o : Ks[o] },
            r = (l) => {
                const { isIntersecting: a } = l
                if (this.isInView === a || ((this.isInView = a), c && !a && this.hasEnteredView)) return
                a && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive('whileInView', a)
                const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(),
                    h = a ? u : d
                h && h(l)
            }
        return Us(this.node.current, s, r)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > 'u') return
        const { props: t, prevProps: n } = this.node
        ;['amount', 'margin', 'root'].some(Ys(t, n)) && this.startObserver()
    }
    unmount() {}
}
function Ys({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n]
}
const qs = { inView: { Feature: Xs }, tap: { Feature: _s }, focus: { Feature: Hs }, hover: { Feature: Fs } }
function li(e, t) {
    if (!Array.isArray(t)) return !1
    const n = t.length
    if (n !== e.length) return !1
    for (let i = 0; i < n; i++) if (t[i] !== e[i]) return !1
    return !0
}
function dt(e, t, n = {}) {
    const i = Ct(e, t, n.custom)
    let { transition: o = e.getDefaultTransition() || {} } = i || {}
    n.transitionOverride && (o = n.transitionOverride)
    const c = i ? () => Promise.all(In(e, i, n)) : () => Promise.resolve(),
        s =
            e.variantChildren && e.variantChildren.size
                ? (l = 0) => {
                      const { delayChildren: a = 0, staggerChildren: u, staggerDirection: d } = o
                      return Zs(e, t, a + l, u, d, n)
                  }
                : () => Promise.resolve(),
        { when: r } = o
    if (r) {
        const [l, a] = r === 'beforeChildren' ? [c, s] : [s, c]
        return l().then(() => a())
    } else return Promise.all([c(), s(n.delay)])
}
function Zs(e, t, n = 0, i = 0, o = 1, c) {
    const s = [],
        r = (e.variantChildren.size - 1) * i,
        l = o === 1 ? (a = 0) => a * i : (a = 0) => r - a * i
    return (
        Array.from(e.variantChildren)
            .sort(Qs)
            .forEach((a, u) => {
                a.notify('AnimationStart', t),
                    s.push(dt(a, t, { ...c, delay: n + l(u) }).then(() => a.notify('AnimationComplete', t)))
            }),
        Promise.all(s)
    )
}
function Qs(e, t) {
    return e.sortNodePosition(t)
}
function Js(e, t, n = {}) {
    e.notify('AnimationStart', t)
    let i
    if (Array.isArray(t)) {
        const o = t.map((c) => dt(e, c, n))
        i = Promise.all(o)
    } else if (typeof t == 'string') i = dt(e, t, n)
    else {
        const o = typeof t == 'function' ? Ct(e, t, n.custom) : t
        i = Promise.all(In(e, o, n))
    }
    return i.then(() => e.notify('AnimationComplete', t))
}
const er = [...Ln].reverse(),
    tr = Ln.length
function nr(e) {
    return (t) => Promise.all(t.map(({ animation: n, options: i }) => Js(e, n, i)))
}
function ir(e) {
    let t = nr(e)
    const n = sr()
    let i = !0
    const o = (l, a) => {
        const u = Ct(e, a)
        if (u) {
            const { transition: d, transitionEnd: h, ...m } = u
            l = { ...l, ...m, ...h }
        }
        return l
    }
    function c(l) {
        t = l(e)
    }
    function s(l, a) {
        const u = e.getProps(),
            d = e.getVariantContext(!0) || {},
            h = [],
            m = new Set()
        let v = {},
            y = 1 / 0
        for (let P = 0; P < tr; P++) {
            const S = er[P],
                g = n[S],
                x = u[S] !== void 0 ? u[S] : d[S],
                p = rt(x),
                $ = S === a ? g.isActive : null
            $ === !1 && (y = P)
            let C = x === d[S] && x !== u[S] && p
            if (
                (C && i && e.manuallyAnimateOnMount && (C = !1),
                (g.protectedKeys = { ...v }),
                (!g.isActive && $ === null) || (!x && !g.prevProp) || St(x) || typeof x == 'boolean')
            )
                continue
            const A = or(g.prevProp, x)
            let j = A || (S === a && g.isActive && !C && p) || (P > y && p)
            const B = Array.isArray(x) ? x : [x]
            let R = B.reduce(o, {})
            $ === !1 && (R = {})
            const { prevResolvedValues: E = {} } = g,
                O = { ...E, ...R },
                I = (T) => {
                    ;(j = !0), m.delete(T), (g.needsAnimating[T] = !0)
                }
            for (const T in O) {
                const H = R[T],
                    _ = E[T]
                v.hasOwnProperty(T) ||
                    (H !== _
                        ? Mt(H) && Mt(_)
                            ? !li(H, _) || A
                                ? I(T)
                                : (g.protectedKeys[T] = !0)
                            : H !== void 0
                            ? I(T)
                            : m.add(T)
                        : H !== void 0 && m.has(T)
                        ? I(T)
                        : (g.protectedKeys[T] = !0))
            }
            ;(g.prevProp = x),
                (g.prevResolvedValues = R),
                g.isActive && (v = { ...v, ...R }),
                i && e.blockInitialAnimation && (j = !1),
                j && !C && h.push(...B.map((T) => ({ animation: T, options: { type: S, ...l } })))
        }
        if (m.size) {
            const P = {}
            m.forEach((S) => {
                const g = e.getBaseTarget(S)
                g !== void 0 && (P[S] = g)
            }),
                h.push({ animation: P })
        }
        let b = !!h.length
        return i && u.initial === !1 && !e.manuallyAnimateOnMount && (b = !1), (i = !1), b ? t(h) : Promise.resolve()
    }
    function r(l, a, u) {
        var d
        if (n[l].isActive === a) return Promise.resolve()
        ;(d = e.variantChildren) === null ||
            d === void 0 ||
            d.forEach((m) => {
                var v
                return (v = m.animationState) === null || v === void 0 ? void 0 : v.setActive(l, a)
            }),
            (n[l].isActive = a)
        const h = s(u, l)
        for (const m in n) n[m].protectedKeys = {}
        return h
    }
    return { animateChanges: s, setActive: r, setAnimateFunction: c, getState: () => n }
}
function or(e, t) {
    return typeof t == 'string' ? t !== e : Array.isArray(t) ? !li(t, e) : !1
}
function fe(e = !1) {
    return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }
}
function sr() {
    return {
        animate: fe(!0),
        whileInView: fe(),
        whileHover: fe(),
        whileTap: fe(),
        whileDrag: fe(),
        whileFocus: fe(),
        exit: fe()
    }
}
class rr extends de {
    constructor(t) {
        super(t), t.animationState || (t.animationState = ir(t))
    }
    updateAnimationControlsSubscription() {
        const { animate: t } = this.node.getProps()
        this.unmount(), St(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const { animate: t } = this.node.getProps(),
            { animate: n } = this.node.prevProps || {}
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let ar = 0
class lr extends de {
    constructor() {
        super(...arguments), (this.id = ar++)
    }
    update() {
        if (!this.node.presenceContext) return
        const { isPresent: t, onExitComplete: n, custom: i } = this.node.presenceContext,
            { isPresent: o } = this.node.prevPresenceContext || {}
        if (!this.node.animationState || t === o) return
        const c = this.node.animationState.setActive('exit', !t, { custom: i ?? this.node.getProps().custom })
        n && !t && c.then(() => n(this.id))
    }
    mount() {
        const { register: t } = this.node.presenceContext || {}
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const cr = { animation: { Feature: rr }, exit: { Feature: lr } },
    Yt = (e, t) => Math.abs(e - t)
function ur(e, t) {
    const n = Yt(e.x, t.x),
        i = Yt(e.y, t.y)
    return Math.sqrt(n ** 2 + i ** 2)
}
class ci {
    constructor(t, n, { transformPagePoint: i } = {}) {
        if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
                const a = ot(this.lastMoveEventInfo, this.history),
                    u = this.startEvent !== null,
                    d = ur(a.offset, { x: 0, y: 0 }) >= 3
                if (!u && !d) return
                const { point: h } = a,
                    { timestamp: m } = J
                this.history.push({ ...h, timestamp: m })
                const { onStart: v, onMove: y } = this.handlers
                u || (v && v(this.lastMoveEvent, a), (this.startEvent = this.lastMoveEvent)),
                    y && y(this.lastMoveEvent, a)
            }),
            (this.handlePointerMove = (a, u) => {
                ;(this.lastMoveEvent = a),
                    (this.lastMoveEventInfo = it(u, this.transformPagePoint)),
                    Y.update(this.updatePoint, !0)
            }),
            (this.handlePointerUp = (a, u) => {
                if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return
                const { onEnd: d, onSessionEnd: h } = this.handlers,
                    m = ot(
                        a.type === 'pointercancel' ? this.lastMoveEventInfo : it(u, this.transformPagePoint),
                        this.history
                    )
                this.startEvent && d && d(a, m), h && h(a, m)
            }),
            !ii(t))
        )
            return
        ;(this.handlers = n), (this.transformPagePoint = i)
        const o = Ue(t),
            c = it(o, this.transformPagePoint),
            { point: s } = c,
            { timestamp: r } = J
        this.history = [{ ...s, timestamp: r }]
        const { onSessionStart: l } = n
        l && l(t, ot(c, this.history)),
            (this.removeListeners = xe(
                ce(window, 'pointermove', this.handlePointerMove),
                ce(window, 'pointerup', this.handlePointerUp),
                ce(window, 'pointercancel', this.handlePointerUp)
            ))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), Oe(this.updatePoint)
    }
}
function it(e, t) {
    return t ? { point: t(e.point) } : e
}
function qt(e, t) {
    return { x: e.x - t.x, y: e.y - t.y }
}
function ot({ point: e }, t) {
    return { point: e, delta: qt(e, ui(t)), offset: qt(e, dr(t)), velocity: fr(t, 0.1) }
}
function dr(e) {
    return e[0]
}
function ui(e) {
    return e[e.length - 1]
}
function fr(e, t) {
    if (e.length < 2) return { x: 0, y: 0 }
    let n = e.length - 1,
        i = null
    const o = ui(e)
    for (; n >= 0 && ((i = e[n]), !(o.timestamp - i.timestamp > Wi(t))); ) n--
    if (!i) return { x: 0, y: 0 }
    const c = ki(o.timestamp - i.timestamp)
    if (c === 0) return { x: 0, y: 0 }
    const s = { x: (o.x - i.x) / c, y: (o.y - i.y) / c }
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}
function te(e) {
    return e.max - e.min
}
function ft(e, t = 0, n = 0.01) {
    return Math.abs(e - t) <= n
}
function Zt(e, t, n, i = 0.5) {
    ;(e.origin = i),
        (e.originPoint = U(t.min, t.max, e.origin)),
        (e.scale = te(n) / te(t)),
        (ft(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
        (e.translate = U(n.min, n.max, e.origin) - e.originPoint),
        (ft(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function Ae(e, t, n, i) {
    Zt(e.x, t.x, n.x, i ? i.originX : void 0), Zt(e.y, t.y, n.y, i ? i.originY : void 0)
}
function Qt(e, t, n) {
    ;(e.min = n.min + t.min), (e.max = e.min + te(t))
}
function hr(e, t, n) {
    Qt(e.x, t.x, n.x), Qt(e.y, t.y, n.y)
}
function Jt(e, t, n) {
    ;(e.min = t.min - n.min), (e.max = e.min + te(t))
}
function De(e, t, n) {
    Jt(e.x, t.x, n.x), Jt(e.y, t.y, n.y)
}
function mr(e, { min: t, max: n }, i) {
    return (
        t !== void 0 && e < t
            ? (e = i ? U(t, e, i.min) : Math.max(e, t))
            : n !== void 0 && e > n && (e = i ? U(n, e, i.max) : Math.min(e, n)),
        e
    )
}
function en(e, t, n) {
    return { min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0 }
}
function pr(e, { top: t, left: n, bottom: i, right: o }) {
    return { x: en(e.x, n, o), y: en(e.y, t, i) }
}
function tn(e, t) {
    let n = t.min - e.min,
        i = t.max - e.max
    return t.max - t.min < e.max - e.min && ([n, i] = [i, n]), { min: n, max: i }
}
function gr(e, t) {
    return { x: tn(e.x, t.x), y: tn(e.y, t.y) }
}
function vr(e, t) {
    let n = 0.5
    const i = te(e),
        o = te(t)
    return o > i ? (n = at(t.min, t.max - i, e.min)) : i > o && (n = at(e.min, e.max - o, t.min)), On(0, 1, n)
}
function yr(e, t) {
    const n = {}
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const ht = 0.35
function br(e = ht) {
    return e === !1 ? (e = 0) : e === !0 && (e = ht), { x: nn(e, 'left', 'right'), y: nn(e, 'top', 'bottom') }
}
function nn(e, t, n) {
    return { min: on(e, t), max: on(e, n) }
}
function on(e, t) {
    return typeof e == 'number' ? e : e[t] || 0
}
function re(e) {
    return [e('x'), e('y')]
}
const xr = new WeakMap()
class Sr {
    constructor(t) {
        ;(this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = k()),
            (this.visualElement = t)
    }
    start(t, { snapToCursor: n = !1 } = {}) {
        const { presenceContext: i } = this.visualElement
        if (i && i.isPresent === !1) return
        const o = (l) => {
                this.stopAnimation(), n && this.snapToCursor(Ue(l, 'page').point)
            },
            c = (l, a) => {
                const { drag: u, dragPropagation: d, onDragStart: h } = this.getProps()
                if (
                    u &&
                    !d &&
                    (this.openGlobalLock && this.openGlobalLock(), (this.openGlobalLock = si(u)), !this.openGlobalLock)
                )
                    return
                ;(this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                        ((this.visualElement.projection.isAnimationBlocked = !0),
                        (this.visualElement.projection.target = void 0)),
                    re((v) => {
                        let y = this.getAxisMotionValue(v).get() || 0
                        if (Fe.test(y)) {
                            const { projection: b } = this.visualElement
                            if (b && b.layout) {
                                const P = b.layout.layoutBox[v]
                                P && (y = te(P) * (parseFloat(y) / 100))
                            }
                        }
                        this.originPoint[v] = y
                    }),
                    h && Y.update(() => h(l, a), !1, !0)
                const { animationState: m } = this.visualElement
                m && m.setActive('whileDrag', !0)
            },
            s = (l, a) => {
                const { dragPropagation: u, dragDirectionLock: d, onDirectionLock: h, onDrag: m } = this.getProps()
                if (!u && !this.openGlobalLock) return
                const { offset: v } = a
                if (d && this.currentDirection === null) {
                    ;(this.currentDirection = Cr(v)), this.currentDirection !== null && h && h(this.currentDirection)
                    return
                }
                this.updateAxis('x', a.point, v),
                    this.updateAxis('y', a.point, v),
                    this.visualElement.render(),
                    m && m(l, a)
            },
            r = (l, a) => this.stop(l, a)
        this.panSession = new ci(
            t,
            { onSessionStart: o, onStart: c, onMove: s, onSessionEnd: r },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
        )
    }
    stop(t, n) {
        const i = this.isDragging
        if ((this.cancel(), !i)) return
        const { velocity: o } = n
        this.startAnimation(o)
        const { onDragEnd: c } = this.getProps()
        c && Y.update(() => c(t, n))
    }
    cancel() {
        this.isDragging = !1
        const { projection: t, animationState: n } = this.visualElement
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0)
        const { dragPropagation: i } = this.getProps()
        !i && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
            n && n.setActive('whileDrag', !1)
    }
    updateAxis(t, n, i) {
        const { drag: o } = this.getProps()
        if (!i || !Be(t, o, this.currentDirection)) return
        const c = this.getAxisMotionValue(t)
        let s = this.originPoint[t] + i[t]
        this.constraints && this.constraints[t] && (s = mr(s, this.constraints[t], this.elastic[t])), c.set(s)
    }
    resolveConstraints() {
        const { dragConstraints: t, dragElastic: n } = this.getProps(),
            { layout: i } = this.visualElement.projection || {},
            o = this.constraints
        t && we(t)
            ? this.constraints || (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = pr(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = br(n)),
            o !== this.constraints &&
                i &&
                this.constraints &&
                !this.hasMutatedConstraints &&
                re((c) => {
                    this.getAxisMotionValue(c) && (this.constraints[c] = yr(i.layoutBox[c], this.constraints[c]))
                })
    }
    resolveRefConstraints() {
        const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps()
        if (!t || !we(t)) return !1
        const i = t.current,
            { projection: o } = this.visualElement
        if (!o || !o.layout) return !1
        const c = Ui(i, o.root, this.visualElement.getTransformPagePoint())
        let s = gr(o.layout.layoutBox, c)
        if (n) {
            const r = n(Ki(s))
            ;(this.hasMutatedConstraints = !!r), r && (s = Yi(r))
        }
        return s
    }
    startAnimation(t) {
        const {
                drag: n,
                dragMomentum: i,
                dragElastic: o,
                dragTransition: c,
                dragSnapToOrigin: s,
                onDragTransitionEnd: r
            } = this.getProps(),
            l = this.constraints || {},
            a = re((u) => {
                if (!Be(u, n, this.currentDirection)) return
                let d = (l && l[u]) || {}
                s && (d = { min: 0, max: 0 })
                const h = o ? 200 : 1e6,
                    m = o ? 40 : 1e7,
                    v = {
                        type: 'inertia',
                        velocity: i ? t[u] : 0,
                        bounceStiffness: h,
                        bounceDamping: m,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...c,
                        ...d
                    }
                return this.startAxisValueAnimation(u, v)
            })
        return Promise.all(a).then(r)
    }
    startAxisValueAnimation(t, n) {
        const i = this.getAxisMotionValue(t)
        return i.start(Xi(t, i, 0, n))
    }
    stopAnimation() {
        re((t) => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = '_drag' + t.toUpperCase(),
            i = this.visualElement.getProps(),
            o = i[n]
        return o || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        re((n) => {
            const { drag: i } = this.getProps()
            if (!Be(n, i, this.currentDirection)) return
            const { projection: o } = this.visualElement,
                c = this.getAxisMotionValue(n)
            if (o && o.layout) {
                const { min: s, max: r } = o.layout.layoutBox[n]
                c.set(t[n] - U(s, r, 0.5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return
        const { drag: t, dragConstraints: n } = this.getProps(),
            { projection: i } = this.visualElement
        if (!we(n) || !i || !this.constraints) return
        this.stopAnimation()
        const o = { x: 0, y: 0 }
        re((s) => {
            const r = this.getAxisMotionValue(s)
            if (r) {
                const l = r.get()
                o[s] = vr({ min: l, max: l }, this.constraints[s])
            }
        })
        const { transformTemplate: c } = this.visualElement.getProps()
        ;(this.visualElement.current.style.transform = c ? c({}, '') : 'none'),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            re((s) => {
                if (!Be(s, t, null)) return
                const r = this.getAxisMotionValue(s),
                    { min: l, max: a } = this.constraints[s]
                r.set(U(l, a, o[s]))
            })
    }
    addListeners() {
        if (!this.visualElement.current) return
        xr.set(this.visualElement, this)
        const t = this.visualElement.current,
            n = ce(t, 'pointerdown', (l) => {
                const { drag: a, dragListener: u = !0 } = this.getProps()
                a && u && this.start(l)
            }),
            i = () => {
                const { dragConstraints: l } = this.getProps()
                we(l) && (this.constraints = this.resolveRefConstraints())
            },
            { projection: o } = this.visualElement,
            c = o.addEventListener('measure', i)
        o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), i()
        const s = le(window, 'resize', () => this.scalePositionWithinConstraints()),
            r = o.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: a }) => {
                this.isDragging &&
                    a &&
                    (re((u) => {
                        const d = this.getAxisMotionValue(u)
                        d && ((this.originPoint[u] += l[u].translate), d.set(d.get() + l[u].translate))
                    }),
                    this.visualElement.render())
            })
        return () => {
            s(), n(), c(), r && r()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: i = !1,
                dragPropagation: o = !1,
                dragConstraints: c = !1,
                dragElastic: s = ht,
                dragMomentum: r = !0
            } = t
        return {
            ...t,
            drag: n,
            dragDirectionLock: i,
            dragPropagation: o,
            dragConstraints: c,
            dragElastic: s,
            dragMomentum: r
        }
    }
}
function Be(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function Cr(e, t = 10) {
    let n = null
    return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n
}
class Pr extends de {
    constructor(t) {
        super(t), (this.removeGroupControls = ue), (this.removeListeners = ue), (this.controls = new Sr(t))
    }
    mount() {
        const { dragControls: t } = this.node.getProps()
        t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || ue)
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const sn = (e) => (t, n) => {
    e && Y.update(() => e(t, n))
}
class Er extends de {
    constructor() {
        super(...arguments), (this.removePointerDownListener = ue)
    }
    onPointerDown(t) {
        this.session = new ci(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() })
    }
    createPanHandlers() {
        const { onPanSessionStart: t, onPanStart: n, onPan: i, onPanEnd: o } = this.node.getProps()
        return {
            onSessionStart: sn(t),
            onStart: sn(n),
            onMove: i,
            onEnd: (c, s) => {
                delete this.session, o && Y.update(() => o(c, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ce(this.node.current, 'pointerdown', (t) => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
function wr() {
    const e = f.useContext(Rt)
    if (e === null) return [!0, null]
    const { isPresent: t, onExitComplete: n, register: i } = e,
        o = f.useId()
    return f.useEffect(() => i(o), []), !t && n ? [!1, () => n && n(o)] : [!0]
}
const Ne = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
function rn(e, t) {
    return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
const Ee = {
        correct: (e, t) => {
            if (!t.target) return e
            if (typeof e == 'string')
                if (Vn.test(e)) e = parseFloat(e)
                else return e
            const n = rn(e, t.target.x),
                i = rn(e, t.target.y)
            return `${n}% ${i}%`
        }
    },
    $r = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
            const i = e,
                o = Nt.parse(e)
            if (o.length > 5) return i
            const c = Nt.createTransformer(e),
                s = typeof o[0] != 'number' ? 1 : 0,
                r = n.x.scale * t.x,
                l = n.y.scale * t.y
            ;(o[0 + s] /= r), (o[1 + s] /= l)
            const a = U(r, l, 0.5)
            return typeof o[2 + s] == 'number' && (o[2 + s] /= a), typeof o[3 + s] == 'number' && (o[3 + s] /= a), c(o)
        }
    }
class Rr extends L.Component {
    componentDidMount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: i, layoutId: o } = this.props,
            { projection: c } = t
        qi(Tr),
            c &&
                (n.group && n.group.add(c),
                i && i.register && o && i.register(c),
                c.root.didUpdate(),
                c.addEventListener('animationComplete', () => {
                    this.safeToRemove()
                }),
                c.setOptions({ ...c.options, onExitComplete: () => this.safeToRemove() })),
            (Ne.hasEverUpdated = !0)
    }
    getSnapshotBeforeUpdate(t) {
        const { layoutDependency: n, visualElement: i, drag: o, isPresent: c } = this.props,
            s = i.projection
        return (
            s &&
                ((s.isPresent = c),
                o || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
                t.isPresent !== c &&
                    (c
                        ? s.promote()
                        : s.relegate() ||
                          Y.postRender(() => {
                              const r = s.getStack()
                              ;(!r || !r.members.length) && this.safeToRemove()
                          }))),
            null
        )
    }
    componentDidUpdate() {
        const { projection: t } = this.props.visualElement
        t &&
            (t.root.didUpdate(),
            queueMicrotask(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove()
            }))
    }
    componentWillUnmount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: i } = this.props,
            { projection: o } = t
        o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), i && i.deregister && i.deregister(o))
    }
    safeToRemove() {
        const { safeToRemove: t } = this.props
        t && t()
    }
    render() {
        return null
    }
}
function di(e) {
    const [t, n] = wr(),
        i = f.useContext(Zn)
    return L.createElement(Rr, {
        ...e,
        layoutGroup: i,
        switchLayoutGroup: f.useContext(Qn),
        isPresent: t,
        safeToRemove: n
    })
}
const Tr = {
        borderRadius: {
            ...Ee,
            applyTo: [
                'borderTopLeftRadius',
                'borderTopRightRadius',
                'borderBottomLeftRadius',
                'borderBottomRightRadius'
            ]
        },
        borderTopLeftRadius: Ee,
        borderTopRightRadius: Ee,
        borderBottomLeftRadius: Ee,
        borderBottomRightRadius: Ee,
        boxShadow: $r
    },
    fi = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
    Ar = fi.length,
    an = (e) => (typeof e == 'string' ? parseFloat(e) : e),
    ln = (e) => typeof e == 'number' || Vn.test(e)
function Dr(e, t, n, i, o, c) {
    o
        ? ((e.opacity = U(0, n.opacity !== void 0 ? n.opacity : 1, Ir(i))),
          (e.opacityExit = U(t.opacity !== void 0 ? t.opacity : 1, 0, Lr(i))))
        : c && (e.opacity = U(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, i))
    for (let s = 0; s < Ar; s++) {
        const r = `border${fi[s]}Radius`
        let l = cn(t, r),
            a = cn(n, r)
        if (l === void 0 && a === void 0) continue
        l || (l = 0),
            a || (a = 0),
            l === 0 || a === 0 || ln(l) === ln(a)
                ? ((e[r] = Math.max(U(an(l), an(a), i), 0)), (Fe.test(a) || Fe.test(l)) && (e[r] += '%'))
                : (e[r] = a)
    }
    ;(t.rotate || n.rotate) && (e.rotate = U(t.rotate || 0, n.rotate || 0, i))
}
function cn(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const Ir = hi(0, 0.5, Zi),
    Lr = hi(0.5, 0.95, ue)
function hi(e, t, n) {
    return (i) => (i < e ? 0 : i > t ? 1 : n(at(e, t, i)))
}
function un(e, t) {
    ;(e.min = t.min), (e.max = t.max)
}
function ie(e, t) {
    un(e.x, t.x), un(e.y, t.y)
}
function dn(e, t, n, i, o) {
    return (e -= t), (e = Ft(e, 1 / n, i)), o !== void 0 && (e = Ft(e, 1 / o, i)), e
}
function Or(e, t = 0, n = 1, i = 0.5, o, c = e, s = e) {
    if ((Fe.test(t) && ((t = parseFloat(t)), (t = U(s.min, s.max, t / 100) - s.min)), typeof t != 'number')) return
    let r = U(c.min, c.max, i)
    e === c && (r -= t), (e.min = dn(e.min, t, n, r, o)), (e.max = dn(e.max, t, n, r, o))
}
function fn(e, t, [n, i, o], c, s) {
    Or(e, t[n], t[i], t[o], t.scale, c, s)
}
const Vr = ['x', 'scaleX', 'originX'],
    jr = ['y', 'scaleY', 'originY']
function hn(e, t, n, i) {
    fn(e.x, t, Vr, n ? n.x : void 0, i ? i.x : void 0), fn(e.y, t, jr, n ? n.y : void 0, i ? i.y : void 0)
}
function mn(e) {
    return e.translate === 0 && e.scale === 1
}
function mi(e) {
    return mn(e.x) && mn(e.y)
}
function mt(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function pn(e) {
    return te(e.x) / te(e.y)
}
class zr {
    constructor() {
        this.members = []
    }
    add(t) {
        jn(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if ((zn(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
            const n = this.members[this.members.length - 1]
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex((o) => t === o)
        if (n === 0) return !1
        let i
        for (let o = n; o >= 0; o--) {
            const c = this.members[o]
            if (c.isPresent !== !1) {
                i = c
                break
            }
        }
        return i ? (this.promote(i), !0) : !1
    }
    promote(t, n) {
        const i = this.lead
        if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
                t.scheduleRender(),
                (t.resumeFrom = i),
                n && (t.resumeFrom.preserveOpacity = !0),
                i.snapshot &&
                    ((t.snapshot = i.snapshot), (t.snapshot.latestValues = i.animationValues || i.latestValues)),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0)
            const { crossfade: o } = t.options
            o === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach((t) => {
            const { options: n, resumingFrom: i } = t
            n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function gn(e, t, n) {
    let i = ''
    const o = e.x.translate / t.x,
        c = e.y.translate / t.y
    if (
        ((o || c) && (i = `translate3d(${o}px, ${c}px, 0) `),
        (t.x !== 1 || t.y !== 1) && (i += `scale(${1 / t.x}, ${1 / t.y}) `),
        n)
    ) {
        const { rotate: l, rotateX: a, rotateY: u } = n
        l && (i += `rotate(${l}deg) `), a && (i += `rotateX(${a}deg) `), u && (i += `rotateY(${u}deg) `)
    }
    const s = e.x.scale * t.x,
        r = e.y.scale * t.y
    return (s !== 1 || r !== 1) && (i += `scale(${s}, ${r})`), i || 'none'
}
const Br = (e, t) => e.depth - t.depth
class Mr {
    constructor() {
        ;(this.children = []), (this.isDirty = !1)
    }
    add(t) {
        jn(this.children, t), (this.isDirty = !0)
    }
    remove(t) {
        zn(this.children, t), (this.isDirty = !0)
    }
    forEach(t) {
        this.isDirty && this.children.sort(Br), (this.isDirty = !1), this.children.forEach(t)
    }
}
function Nr(e, t) {
    const n = performance.now(),
        i = ({ timestamp: o }) => {
            const c = o - n
            c >= t && (Oe(i), e(c - t))
        }
    return Y.read(i, !0), () => Oe(i)
}
function Fr(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}
const vn = ['', 'X', 'Y', 'Z'],
    yn = 1e3
let Hr = 0
const he = { type: 'projectionFrame', totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 }
function pi({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: i, resetTransform: o }) {
    return class {
        constructor(s = {}, r = t == null ? void 0 : t()) {
            ;(this.id = Hr++),
                (this.animationId = 0),
                (this.children = new Set()),
                (this.options = {}),
                (this.isTreeAnimating = !1),
                (this.isAnimationBlocked = !1),
                (this.isLayoutDirty = !1),
                (this.isProjectionDirty = !1),
                (this.isSharedProjectionDirty = !1),
                (this.isTransformDirty = !1),
                (this.updateManuallyBlocked = !1),
                (this.updateBlockedByResize = !1),
                (this.isUpdating = !1),
                (this.isSVG = !1),
                (this.needsReset = !1),
                (this.shouldResetTransform = !1),
                (this.treeScale = { x: 1, y: 1 }),
                (this.eventHandlers = new Map()),
                (this.hasTreeAnimated = !1),
                (this.updateScheduled = !1),
                (this.checkUpdateFailed = () => {
                    this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots())
                }),
                (this.updateProjection = () => {
                    ;(he.totalNodes = he.resolvedTargetDeltas = he.recalculatedProjection = 0),
                        this.nodes.forEach(Wr),
                        this.nodes.forEach(Yr),
                        this.nodes.forEach(qr),
                        this.nodes.forEach(kr),
                        Fr(he)
                }),
                (this.hasProjected = !1),
                (this.isVisible = !0),
                (this.animationProgress = 0),
                (this.sharedNodes = new Map()),
                (this.latestValues = s),
                (this.root = r ? r.root || r : this),
                (this.path = r ? [...r.path, r] : []),
                (this.parent = r),
                (this.depth = r ? r.depth + 1 : 0)
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0
            this.root === this && (this.nodes = new Mr())
        }
        addEventListener(s, r) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Qi()), this.eventHandlers.get(s).add(r)
        }
        notifyListeners(s, ...r) {
            const l = this.eventHandlers.get(s)
            l && l.notify(...r)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, r = this.root.hasTreeAnimated) {
            if (this.instance) return
            ;(this.isSVG = Ji(s)), (this.instance = s)
            const { layoutId: l, layout: a, visualElement: u } = this.options
            if (
                (u && !u.current && u.mount(s),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                r && (a || l) && (this.isLayoutDirty = !0),
                e)
            ) {
                let d
                const h = () => (this.root.updateBlockedByResize = !1)
                e(s, () => {
                    ;(this.root.updateBlockedByResize = !0),
                        d && d(),
                        (d = Nr(h, 250)),
                        Ne.hasAnimatedSinceResize && ((Ne.hasAnimatedSinceResize = !1), this.nodes.forEach(xn))
                })
            }
            l && this.root.registerSharedNode(l, this),
                this.options.animate !== !1 &&
                    u &&
                    (l || a) &&
                    this.addEventListener(
                        'didUpdate',
                        ({ delta: d, hasLayoutChanged: h, hasRelativeTargetChanged: m, layout: v }) => {
                            if (this.isTreeAnimationBlocked()) {
                                ;(this.target = void 0), (this.relativeTarget = void 0)
                                return
                            }
                            const y = this.options.transition || u.getDefaultTransition() || ta,
                                { onLayoutAnimationStart: b, onLayoutAnimationComplete: P } = u.getProps(),
                                S = !this.targetLayout || !mt(this.targetLayout, v) || m,
                                g = !h && m
                            if (
                                this.options.layoutRoot ||
                                (this.resumeFrom && this.resumeFrom.instance) ||
                                g ||
                                (h && (S || !this.currentAnimation))
                            ) {
                                this.resumeFrom &&
                                    ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)),
                                    this.setAnimationOrigin(d, g)
                                const x = { ...eo(y, 'layout'), onPlay: b, onComplete: P }
                                ;(u.shouldReduceMotion || this.options.layoutRoot) && ((x.delay = 0), (x.type = !1)),
                                    this.startAnimation(x)
                            } else
                                h || xn(this),
                                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete()
                            this.targetLayout = v
                        }
                    )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
            const s = this.getStack()
            s && s.remove(this),
                this.parent && this.parent.children.delete(this),
                (this.instance = void 0),
                Oe(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Zr), this.animationId++)
        }
        getTransformTemplate() {
            const { visualElement: s } = this.options
            return s && s.getProps().transformTemplate
        }
        willUpdate(s = !0) {
            if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
                this.options.onExitComplete && this.options.onExitComplete()
                return
            }
            if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return
            this.isLayoutDirty = !0
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u]
                ;(d.shouldResetTransform = !0), d.updateScroll('snapshot'), d.options.layoutRoot && d.willUpdate(!1)
            }
            const { layoutId: r, layout: l } = this.options
            if (r === void 0 && !l) return
            const a = this.getTransformTemplate()
            ;(this.prevTransformTemplateValue = a ? a(this.latestValues, '') : void 0),
                this.updateSnapshot(),
                s && this.notifyListeners('willUpdate')
        }
        update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(bn)
                return
            }
            this.isUpdating || this.nodes.forEach(Kr),
                (this.isUpdating = !1),
                this.nodes.forEach(Xr),
                this.nodes.forEach(_r),
                this.nodes.forEach(Gr),
                this.clearAllSnapshots()
            const r = performance.now()
            ;(J.delta = On(0, 1e3 / 60, r - J.timestamp)),
                (J.timestamp = r),
                (J.isProcessing = !0),
                Ye.update.process(J),
                Ye.preRender.process(J),
                Ye.render.process(J),
                (J.isProcessing = !1)
        }
        didUpdate() {
            this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Ur), this.sharedNodes.forEach(Qr)
        }
        scheduleUpdateProjection() {
            Y.preRender(this.updateProjection, !1, !0)
        }
        scheduleCheckAfterUnmount() {
            Y.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (
                !this.instance ||
                (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
            )
                return
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll()
            const s = this.layout
            ;(this.layout = this.measure(!1)),
                (this.layoutCorrected = k()),
                (this.isLayoutDirty = !1),
                (this.projectionDelta = void 0),
                this.notifyListeners('measure', this.layout.layoutBox)
            const { visualElement: r } = this.options
            r && r.notify('LayoutMeasure', this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s = 'measure') {
            let r = !!(this.options.layoutScroll && this.instance)
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (r = !1),
                r &&
                    (this.scroll = {
                        animationId: this.root.animationId,
                        phase: s,
                        isRoot: i(this.instance),
                        offset: n(this.instance)
                    })
        }
        resetTransform() {
            if (!o) return
            const s = this.isLayoutDirty || this.shouldResetTransform,
                r = this.projectionDelta && !mi(this.projectionDelta),
                l = this.getTransformTemplate(),
                a = l ? l(this.latestValues, '') : void 0,
                u = a !== this.prevTransformTemplateValue
            s &&
                (r || ge(this.latestValues) || u) &&
                (o(this.instance, a), (this.shouldResetTransform = !1), this.scheduleRender())
        }
        measure(s = !0) {
            const r = this.measurePageBox()
            let l = this.removeElementScroll(r)
            return (
                s && (l = this.removeTransform(l)),
                na(l),
                { animationId: this.root.animationId, measuredBox: r, layoutBox: l, latestValues: {}, source: this.id }
            )
        }
        measurePageBox() {
            const { visualElement: s } = this.options
            if (!s) return k()
            const r = s.measureViewportBox(),
                { scroll: l } = this.root
            return l && (ve(r.x, l.offset.x), ve(r.y, l.offset.y)), r
        }
        removeElementScroll(s) {
            const r = k()
            ie(r, s)
            for (let l = 0; l < this.path.length; l++) {
                const a = this.path[l],
                    { scroll: u, options: d } = a
                if (a !== this.root && u && d.layoutScroll) {
                    if (u.isRoot) {
                        ie(r, s)
                        const { scroll: h } = this.root
                        h && (ve(r.x, -h.offset.x), ve(r.y, -h.offset.y))
                    }
                    ve(r.x, u.offset.x), ve(r.y, u.offset.y)
                }
            }
            return r
        }
        applyTransform(s, r = !1) {
            const l = k()
            ie(l, s)
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a]
                !r &&
                    u.options.layoutScroll &&
                    u.scroll &&
                    u !== u.root &&
                    ze(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
                    ge(u.latestValues) && ze(l, u.latestValues)
            }
            return ge(this.latestValues) && ze(l, this.latestValues), l
        }
        removeTransform(s) {
            const r = k()
            ie(r, s)
            for (let l = 0; l < this.path.length; l++) {
                const a = this.path[l]
                if (!a.instance || !ge(a.latestValues)) continue
                Ht(a.latestValues) && a.updateSnapshot()
                const u = k(),
                    d = a.measurePageBox()
                ie(u, d), hn(r, a.latestValues, a.snapshot ? a.snapshot.layoutBox : void 0, u)
            }
            return ge(this.latestValues) && hn(r, this.latestValues), r
        }
        setTargetDelta(s) {
            ;(this.targetDelta = s), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0)
        }
        setOptions(s) {
            this.options = { ...this.options, ...s, crossfade: s.crossfade !== void 0 ? s.crossfade : !0 }
        }
        clearMeasurements() {
            ;(this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1)
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent &&
                this.relativeParent.resolvedRelativeTargetAt !== J.timestamp &&
                this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s = !1) {
            var r
            const l = this.getLead()
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
                this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
                this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty)
            const a = !!this.resumingFrom || this !== l
            if (
                !(
                    s ||
                    (a && this.isSharedProjectionDirty) ||
                    this.isProjectionDirty ||
                    (!((r = this.parent) === null || r === void 0) && r.isProjectionDirty) ||
                    this.attemptToResolveRelativeTarget
                )
            )
                return
            const { layout: d, layoutId: h } = this.options
            if (!(!this.layout || !(d || h))) {
                if (((this.resolvedRelativeTargetAt = J.timestamp), !this.targetDelta && !this.relativeTarget)) {
                    const m = this.getClosestProjectingParent()
                    m && m.layout && this.animationProgress !== 1
                        ? ((this.relativeParent = m),
                          this.forceRelativeParentToResolveTarget(),
                          (this.relativeTarget = k()),
                          (this.relativeTargetOrigin = k()),
                          De(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox),
                          ie(this.relativeTarget, this.relativeTargetOrigin))
                        : (this.relativeParent = this.relativeTarget = void 0)
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (
                        (this.target || ((this.target = k()), (this.targetWithTransforms = k())),
                        this.relativeTarget &&
                        this.relativeTargetOrigin &&
                        this.relativeParent &&
                        this.relativeParent.target
                            ? (this.forceRelativeParentToResolveTarget(),
                              hr(this.target, this.relativeTarget, this.relativeParent.target))
                            : this.targetDelta
                            ? (this.resumingFrom
                                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                                  : ie(this.target, this.layout.layoutBox),
                              to(this.target, this.targetDelta))
                            : ie(this.target, this.layout.layoutBox),
                        this.attemptToResolveRelativeTarget)
                    ) {
                        this.attemptToResolveRelativeTarget = !1
                        const m = this.getClosestProjectingParent()
                        m &&
                        !!m.resumingFrom == !!this.resumingFrom &&
                        !m.options.layoutScroll &&
                        m.target &&
                        this.animationProgress !== 1
                            ? ((this.relativeParent = m),
                              this.forceRelativeParentToResolveTarget(),
                              (this.relativeTarget = k()),
                              (this.relativeTargetOrigin = k()),
                              De(this.relativeTargetOrigin, this.target, m.target),
                              ie(this.relativeTarget, this.relativeTargetOrigin))
                            : (this.relativeParent = this.relativeTarget = void 0)
                    }
                    he.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Ht(this.parent.latestValues) || no(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s
            const r = this.getLead(),
                l = !!this.resumingFrom || this !== r
            let a = !0
            if (
                ((this.isProjectionDirty || (!((s = this.parent) === null || s === void 0) && s.isProjectionDirty)) &&
                    (a = !1),
                l && (this.isSharedProjectionDirty || this.isTransformDirty) && (a = !1),
                this.resolvedRelativeTargetAt === J.timestamp && (a = !1),
                a)
            )
                return
            const { layout: u, layoutId: d } = this.options
            if (
                ((this.isTreeAnimating = !!(
                    (this.parent && this.parent.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(u || d))
            )
                return
            ie(this.layoutCorrected, this.layout.layoutBox)
            const h = this.treeScale.x,
                m = this.treeScale.y
            io(this.layoutCorrected, this.treeScale, this.path, l),
                r.layout &&
                    !r.target &&
                    (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
                    (r.target = r.layout.layoutBox)
            const { target: v } = r
            if (!v) {
                this.projectionTransform &&
                    ((this.projectionDelta = be()), (this.projectionTransform = 'none'), this.scheduleRender())
                return
            }
            this.projectionDelta || ((this.projectionDelta = be()), (this.projectionDeltaWithTransform = be()))
            const y = this.projectionTransform
            Ae(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
                (this.projectionTransform = gn(this.projectionDelta, this.treeScale)),
                (this.projectionTransform !== y || this.treeScale.x !== h || this.treeScale.y !== m) &&
                    ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners('projectionUpdate', v)),
                he.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s = !0) {
            if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
                const r = this.getStack()
                r && r.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(s, r = !1) {
            const l = this.snapshot,
                a = l ? l.latestValues : {},
                u = { ...this.latestValues },
                d = be()
            ;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
                (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !r)
            const h = k(),
                m = l ? l.source : void 0,
                v = this.layout ? this.layout.source : void 0,
                y = m !== v,
                b = this.getStack(),
                P = !b || b.members.length <= 1,
                S = !!(y && !P && this.options.crossfade === !0 && !this.path.some(ea))
            this.animationProgress = 0
            let g
            ;(this.mixTargetDelta = (x) => {
                const p = x / 1e3
                Sn(d.x, s.x, p),
                    Sn(d.y, s.y, p),
                    this.setTargetDelta(d),
                    this.relativeTarget &&
                        this.relativeTargetOrigin &&
                        this.layout &&
                        this.relativeParent &&
                        this.relativeParent.layout &&
                        (De(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                        Jr(this.relativeTarget, this.relativeTargetOrigin, h, p),
                        g && mt(this.relativeTarget, g) && (this.isProjectionDirty = !1),
                        g || (g = k()),
                        ie(g, this.relativeTarget)),
                    y && ((this.animationValues = u), Dr(u, a, this.latestValues, p, S, P)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    (this.animationProgress = p)
            }),
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners('animationStart'),
                this.currentAnimation && this.currentAnimation.stop(),
                this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                this.pendingAnimation && (Oe(this.pendingAnimation), (this.pendingAnimation = void 0)),
                (this.pendingAnimation = Y.update(() => {
                    ;(Ne.hasAnimatedSinceResize = !0),
                        (this.currentAnimation = oo(0, yn, {
                            ...s,
                            onUpdate: (r) => {
                                this.mixTargetDelta(r), s.onUpdate && s.onUpdate(r)
                            },
                            onComplete: () => {
                                s.onComplete && s.onComplete(), this.completeAnimation()
                            }
                        })),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        (this.pendingAnimation = void 0)
                }))
        }
        completeAnimation() {
            this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0))
            const s = this.getStack()
            s && s.exitAnimationComplete(),
                (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
                this.notifyListeners('animationComplete')
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(yn), this.currentAnimation.stop()),
                this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead()
            let { targetWithTransforms: r, target: l, layout: a, latestValues: u } = s
            if (!(!r || !l || !a)) {
                if (
                    this !== s &&
                    this.layout &&
                    a &&
                    gi(this.options.animationType, this.layout.layoutBox, a.layoutBox)
                ) {
                    l = this.target || k()
                    const d = te(this.layout.layoutBox.x)
                    ;(l.x.min = s.target.x.min), (l.x.max = l.x.min + d)
                    const h = te(this.layout.layoutBox.y)
                    ;(l.y.min = s.target.y.min), (l.y.max = l.y.min + h)
                }
                ie(r, l), ze(r, u), Ae(this.projectionDeltaWithTransform, this.layoutCorrected, r, u)
            }
        }
        registerSharedNode(s, r) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new zr()), this.sharedNodes.get(s).add(r)
            const a = r.options.initialPromotionConfig
            r.promote({
                transition: a ? a.transition : void 0,
                preserveFollowOpacity: a && a.shouldPreserveFollowOpacity ? a.shouldPreserveFollowOpacity(r) : void 0
            })
        }
        isLead() {
            const s = this.getStack()
            return s ? s.lead === this : !0
        }
        getLead() {
            var s
            const { layoutId: r } = this.options
            return r ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s
            const { layoutId: r } = this.options
            return r ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead) : void 0
        }
        getStack() {
            const { layoutId: s } = this.options
            if (s) return this.root.sharedNodes.get(s)
        }
        promote({ needsReset: s, transition: r, preserveFollowOpacity: l } = {}) {
            const a = this.getStack()
            a && a.promote(this, l),
                s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r })
        }
        relegate() {
            const s = this.getStack()
            return s ? s.relegate(this) : !1
        }
        resetRotation() {
            const { visualElement: s } = this.options
            if (!s) return
            let r = !1
            const { latestValues: l } = s
            if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (r = !0), !r)) return
            const a = {}
            for (let u = 0; u < vn.length; u++) {
                const d = 'rotate' + vn[u]
                l[d] && ((a[d] = l[d]), s.setStaticValue(d, 0))
            }
            s.render()
            for (const u in a) s.setStaticValue(u, a[u])
            s.scheduleRender()
        }
        getProjectionStyles(s = {}) {
            var r, l
            const a = {}
            if (!this.instance || this.isSVG) return a
            if (this.isVisible) a.visibility = ''
            else return { visibility: 'hidden' }
            const u = this.getTransformTemplate()
            if (this.needsReset)
                return (
                    (this.needsReset = !1),
                    (a.opacity = ''),
                    (a.pointerEvents = Me(s.pointerEvents) || ''),
                    (a.transform = u ? u(this.latestValues, '') : 'none'),
                    a
                )
            const d = this.getLead()
            if (!this.projectionDelta || !this.layout || !d.target) {
                const y = {}
                return (
                    this.options.layoutId &&
                        ((y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
                        (y.pointerEvents = Me(s.pointerEvents) || '')),
                    this.hasProjected &&
                        !ge(this.latestValues) &&
                        ((y.transform = u ? u({}, '') : 'none'), (this.hasProjected = !1)),
                    y
                )
            }
            const h = d.animationValues || d.latestValues
            this.applyTransformsToTarget(),
                (a.transform = gn(this.projectionDeltaWithTransform, this.treeScale, h)),
                u && (a.transform = u(h, a.transform))
            const { x: m, y: v } = this.projectionDelta
            ;(a.transformOrigin = `${m.origin * 100}% ${v.origin * 100}% 0`),
                d.animationValues
                    ? (a.opacity =
                          d === this
                              ? (l = (r = h.opacity) !== null && r !== void 0 ? r : this.latestValues.opacity) !==
                                    null && l !== void 0
                                  ? l
                                  : 1
                              : this.preserveOpacity
                              ? this.latestValues.opacity
                              : h.opacityExit)
                    : (a.opacity =
                          d === this
                              ? h.opacity !== void 0
                                  ? h.opacity
                                  : ''
                              : h.opacityExit !== void 0
                              ? h.opacityExit
                              : 0)
            for (const y in _t) {
                if (h[y] === void 0) continue
                const { correct: b, applyTo: P } = _t[y],
                    S = a.transform === 'none' ? h[y] : b(h[y], d)
                if (P) {
                    const g = P.length
                    for (let x = 0; x < g; x++) a[P[x]] = S
                } else a[y] = S
            }
            return this.options.layoutId && (a.pointerEvents = d === this ? Me(s.pointerEvents) || '' : 'none'), a
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach((s) => {
                var r
                return (r = s.currentAnimation) === null || r === void 0 ? void 0 : r.stop()
            }),
                this.root.nodes.forEach(bn),
                this.root.sharedNodes.clear()
        }
    }
}
function _r(e) {
    e.updateLayout()
}
function Gr(e) {
    var t
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot
    if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
        const { layoutBox: i, measuredBox: o } = e.layout,
            { animationType: c } = e.options,
            s = n.source !== e.layout.source
        c === 'size'
            ? re((d) => {
                  const h = s ? n.measuredBox[d] : n.layoutBox[d],
                      m = te(h)
                  ;(h.min = i[d].min), (h.max = h.min + m)
              })
            : gi(c, n.layoutBox, i) &&
              re((d) => {
                  const h = s ? n.measuredBox[d] : n.layoutBox[d],
                      m = te(i[d])
                  ;(h.max = h.min + m),
                      e.relativeTarget &&
                          !e.currentAnimation &&
                          ((e.isProjectionDirty = !0), (e.relativeTarget[d].max = e.relativeTarget[d].min + m))
              })
        const r = be()
        Ae(r, i, n.layoutBox)
        const l = be()
        s ? Ae(l, e.applyTransform(o, !0), n.measuredBox) : Ae(l, i, n.layoutBox)
        const a = !mi(r)
        let u = !1
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent()
            if (d && !d.resumeFrom) {
                const { snapshot: h, layout: m } = d
                if (h && m) {
                    const v = k()
                    De(v, n.layoutBox, h.layoutBox)
                    const y = k()
                    De(y, i, m.layoutBox),
                        mt(v, y) || (u = !0),
                        d.options.layoutRoot &&
                            ((e.relativeTarget = y), (e.relativeTargetOrigin = v), (e.relativeParent = d))
                }
            }
        }
        e.notifyListeners('didUpdate', {
            layout: i,
            snapshot: n,
            delta: l,
            layoutDelta: r,
            hasLayoutChanged: a,
            hasRelativeTargetChanged: u
        })
    } else if (e.isLead()) {
        const { onExitComplete: i } = e.options
        i && i()
    }
    e.options.transition = void 0
}
function Wr(e) {
    he.totalNodes++,
        e.parent &&
            (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
                (e.isSharedProjectionDirty = !!(
                    e.isProjectionDirty ||
                    e.parent.isProjectionDirty ||
                    e.parent.isSharedProjectionDirty
                )),
            e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function kr(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function Ur(e) {
    e.clearSnapshot()
}
function bn(e) {
    e.clearMeasurements()
}
function Kr(e) {
    e.isLayoutDirty = !1
}
function Xr(e) {
    const { visualElement: t } = e.options
    t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform()
}
function xn(e) {
    e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0)
}
function Yr(e) {
    e.resolveTargetDelta()
}
function qr(e) {
    e.calcProjection()
}
function Zr(e) {
    e.resetRotation()
}
function Qr(e) {
    e.removeLeadSnapshot()
}
function Sn(e, t, n) {
    ;(e.translate = U(t.translate, 0, n)),
        (e.scale = U(t.scale, 1, n)),
        (e.origin = t.origin),
        (e.originPoint = t.originPoint)
}
function Cn(e, t, n, i) {
    ;(e.min = U(t.min, n.min, i)), (e.max = U(t.max, n.max, i))
}
function Jr(e, t, n, i) {
    Cn(e.x, t.x, n.x, i), Cn(e.y, t.y, n.y, i)
}
function ea(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const ta = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }
function Pn(e) {
    ;(e.min = Math.round(e.min)), (e.max = Math.round(e.max))
}
function na(e) {
    Pn(e.x), Pn(e.y)
}
function gi(e, t, n) {
    return e === 'position' || (e === 'preserve-aspect' && !ft(pn(t), pn(n), 0.2))
}
const ia = pi({
        attachResizeListener: (e, t) => le(e, 'resize', t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    st = { current: void 0 },
    vi = pi({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
            if (!st.current) {
                const e = new ia({})
                e.mount(window), e.setOptions({ layoutScroll: !0 }), (st.current = e)
            }
            return st.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : 'none'
        },
        checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed'
    }),
    oa = { pan: { Feature: Er }, drag: { Feature: Pr, ProjectionNode: vi, MeasureLayout: di } },
    sa = (e, t) =>
        Tt(e) ? new so(t, { enableHardwareAcceleration: !1 }) : new ro(t, { enableHardwareAcceleration: !0 }),
    ra = { layout: { ProjectionNode: vi, MeasureLayout: di } },
    aa = { ...cr, ...qs, ...oa, ...ra },
    ha = Es((e, t) => Ms(e, t, aa, sa))
export { mo as C, da as I, fo as S, Bn as a, Fn as b, _n as c, $o as d, ua as e, Re as g, Co as i, ha as m, ca as u }
