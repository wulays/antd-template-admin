import {
    r as l,
    D as ye,
    E as Ae,
    G as le,
    a as Q,
    aL as Je,
    aM as Ze,
    aN as ce,
    ao as ke,
    aO as He,
    I as qe,
    aP as $e,
    ar as Ie,
    l as K,
    an as et,
    aQ as tt,
    aR as nt,
    a2 as rt,
    a1 as ot,
    aS as lt,
    aT as st,
    aU as k,
    aV as it,
    a0 as xe,
    w as Ee,
    e as at,
    V as ct,
    d as je,
    ax as ut,
    aA as dt,
    al as mt,
    n as ft,
    A as pt,
    aW as ze,
    aX as gt,
    aY as ht,
    W as bt,
    Y as yt,
    t as $t,
    aZ as xt,
    a_ as Ct,
    a$ as wt,
    b0 as vt,
    ap as St,
    ag as Ot,
    aq as It,
    b1 as Et,
    b2 as jt,
    b3 as Ft,
    b4 as Nt,
    b5 as Pt,
    aG as q,
    b6 as Mt,
    at as Fe
} from './index-f0b1ba8e.js'
import { u as _t, m as Rt, I as Ne, e as Tt } from './motion-28a9c6dc.js'
const Pe = (e) => typeof e == 'object' && e != null && e.nodeType === 1,
    Me = (e, t) => (!t || e !== 'hidden') && e !== 'visible' && e !== 'clip',
    pe = (e, t) => {
        if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
            const r = getComputedStyle(e, null)
            return (
                Me(r.overflowY, t) ||
                Me(r.overflowX, t) ||
                ((n) => {
                    const o = ((s) => {
                        if (!s.ownerDocument || !s.ownerDocument.defaultView) return null
                        try {
                            return s.ownerDocument.defaultView.frameElement
                        } catch {
                            return null
                        }
                    })(n)
                    return !!o && (o.clientHeight < n.scrollHeight || o.clientWidth < n.scrollWidth)
                })(e)
            )
        }
        return !1
    },
    ae = (e, t, r, n, o, s, c, a) =>
        (s < e && c > t) || (s > e && c < t)
            ? 0
            : (s <= e && a <= r) || (c >= t && a >= r)
            ? s - e - n
            : (c > t && a < r) || (s < e && a > r)
            ? c - t + o
            : 0,
    Lt = (e) => {
        const t = e.parentElement
        return t ?? (e.getRootNode().host || null)
    },
    _e = (e, t) => {
        var r, n, o, s
        if (typeof document > 'u') return []
        const { scrollMode: c, block: a, inline: u, boundary: f, skipOverflowHiddenElements: y } = t,
            M = typeof f == 'function' ? f : (W) => W !== f
        if (!Pe(e)) throw new TypeError('Invalid target')
        const _ = document.scrollingElement || document.documentElement,
            I = []
        let h = e
        for (; Pe(h) && M(h); ) {
            if (((h = Lt(h)), h === _)) {
                I.push(h)
                break
            }
            ;(h != null && h === document.body && pe(h) && !pe(document.documentElement)) ||
                (h != null && pe(h, y) && I.push(h))
        }
        const S = (n = (r = window.visualViewport) == null ? void 0 : r.width) != null ? n : innerWidth,
            E = (s = (o = window.visualViewport) == null ? void 0 : o.height) != null ? s : innerHeight,
            { scrollX: $, scrollY: i } = window,
            { height: x, width: C, top: b, right: w, bottom: g, left: m } = e.getBoundingClientRect()
        let d = a === 'start' || a === 'nearest' ? b : a === 'end' ? g : b + x / 2,
            p = u === 'center' ? m + C / 2 : u === 'end' ? w : m
        const L = []
        for (let W = 0; W < I.length; W++) {
            const v = I[W],
                { height: j, width: R, top: z, right: A, bottom: F, left: H } = v.getBoundingClientRect()
            if (c === 'if-needed' && b >= 0 && m >= 0 && g <= E && w <= S && b >= z && g <= F && m >= H && w <= A)
                return L
            const O = getComputedStyle(v),
                G = parseInt(O.borderLeftWidth, 10),
                D = parseInt(O.borderTopWidth, 10),
                B = parseInt(O.borderRightWidth, 10),
                N = parseInt(O.borderBottomWidth, 10)
            let T = 0,
                P = 0
            const X = 'offsetWidth' in v ? v.offsetWidth - v.clientWidth - G - B : 0,
                Y = 'offsetHeight' in v ? v.offsetHeight - v.clientHeight - D - N : 0,
                J = 'offsetWidth' in v ? (v.offsetWidth === 0 ? 0 : R / v.offsetWidth) : 0,
                ee = 'offsetHeight' in v ? (v.offsetHeight === 0 ? 0 : j / v.offsetHeight) : 0
            if (_ === v)
                (T =
                    a === 'start'
                        ? d
                        : a === 'end'
                        ? d - E
                        : a === 'nearest'
                        ? ae(i, i + E, E, D, N, i + d, i + d + x, x)
                        : d - E / 2),
                    (P =
                        u === 'start'
                            ? p
                            : u === 'center'
                            ? p - S / 2
                            : u === 'end'
                            ? p - S
                            : ae($, $ + S, S, G, B, $ + p, $ + p + C, C)),
                    (T = Math.max(0, T + i)),
                    (P = Math.max(0, P + $))
            else {
                ;(T =
                    a === 'start'
                        ? d - z - D
                        : a === 'end'
                        ? d - F + N + Y
                        : a === 'nearest'
                        ? ae(z, F, j, D, N + Y, d, d + x, x)
                        : d - (z + j / 2) + Y / 2),
                    (P =
                        u === 'start'
                            ? p - H - G
                            : u === 'center'
                            ? p - (H + R / 2) + X / 2
                            : u === 'end'
                            ? p - A + B + X
                            : ae(H, A, R, G, B + X, p, p + C, C))
                const { scrollLeft: Z, scrollTop: V } = v
                ;(T = Math.max(0, Math.min(V + T / ee, v.scrollHeight - j / ee + Y))),
                    (P = Math.max(0, Math.min(Z + P / J, v.scrollWidth - R / J + X))),
                    (d += V - T),
                    (p += Z - P)
            }
            L.push({ el: v, top: T, left: P })
        }
        return L
    },
    Wt = (e) =>
        e === !1
            ? { block: 'end', inline: 'nearest' }
            : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e)
            ? e
            : { block: 'start', inline: 'nearest' }
function Vt(e, t) {
    if (
        !e.isConnected ||
        !((n) => {
            let o = n
            for (; o && o.parentNode; ) {
                if (o.parentNode === document) return !0
                o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode
            }
            return !1
        })(e)
    )
        return
    if (((n) => typeof n == 'object' && typeof n.behavior == 'function')(t)) return t.behavior(_e(e, t))
    const r = typeof t == 'boolean' || t == null ? void 0 : t.behavior
    for (const { el: n, top: o, left: s } of _e(e, Wt(t))) n.scroll({ top: o, left: s, behavior: r })
}
const At = l.createContext({}),
    Ge = At,
    Ht = (e) => {
        const { componentCls: t } = e
        return {
            [t]: {
                display: 'flex',
                flexFlow: 'row wrap',
                minWidth: 0,
                '&::before, &::after': { display: 'flex' },
                '&-no-wrap': { flexWrap: 'nowrap' },
                '&-start': { justifyContent: 'flex-start' },
                '&-center': { justifyContent: 'center' },
                '&-end': { justifyContent: 'flex-end' },
                '&-space-between': { justifyContent: 'space-between' },
                '&-space-around': { justifyContent: 'space-around' },
                '&-space-evenly': { justifyContent: 'space-evenly' },
                '&-top': { alignItems: 'flex-start' },
                '&-middle': { alignItems: 'center' },
                '&-bottom': { alignItems: 'flex-end' }
            }
        }
    },
    qt = (e) => {
        const { componentCls: t } = e
        return { [t]: { position: 'relative', maxWidth: '100%', minHeight: 1 } }
    },
    zt = (e, t) => {
        const { componentCls: r, gridColumns: n } = e,
            o = {}
        for (let s = n; s >= 0; s--)
            s === 0
                ? ((o[`${r}${t}-${s}`] = { display: 'none' }),
                  (o[`${r}-push-${s}`] = { insetInlineStart: 'auto' }),
                  (o[`${r}-pull-${s}`] = { insetInlineEnd: 'auto' }),
                  (o[`${r}${t}-push-${s}`] = { insetInlineStart: 'auto' }),
                  (o[`${r}${t}-pull-${s}`] = { insetInlineEnd: 'auto' }),
                  (o[`${r}${t}-offset-${s}`] = { marginInlineStart: 0 }),
                  (o[`${r}${t}-order-${s}`] = { order: 0 }))
                : ((o[`${r}${t}-${s}`] = {
                      display: 'block',
                      flex: `0 0 ${(s / n) * 100}%`,
                      maxWidth: `${(s / n) * 100}%`
                  }),
                  (o[`${r}${t}-push-${s}`] = { insetInlineStart: `${(s / n) * 100}%` }),
                  (o[`${r}${t}-pull-${s}`] = { insetInlineEnd: `${(s / n) * 100}%` }),
                  (o[`${r}${t}-offset-${s}`] = { marginInlineStart: `${(s / n) * 100}%` }),
                  (o[`${r}${t}-order-${s}`] = { order: s }))
        return o
    },
    be = (e, t) => zt(e, t),
    Gt = (e, t, r) => ({ [`@media (min-width: ${t}px)`]: Object.assign({}, be(e, r)) }),
    Dt = ye('Grid', (e) => [Ht(e)]),
    Bt = ye('Grid', (e) => {
        const t = Ae(e, { gridColumns: 24 }),
            r = {
                '-sm': t.screenSMMin,
                '-md': t.screenMDMin,
                '-lg': t.screenLGMin,
                '-xl': t.screenXLMin,
                '-xxl': t.screenXXLMin
            }
        return [
            qt(t),
            be(t, ''),
            be(t, '-xs'),
            Object.keys(r)
                .map((n) => Gt(t, r[n], n))
                .reduce((n, o) => Object.assign(Object.assign({}, n), o), {})
        ]
    })
var Xt =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
        var r = {}
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        return r
    }
function Yt(e) {
    return typeof e == 'number' ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e
}
const Kt = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    Qt = l.forwardRef((e, t) => {
        const { getPrefixCls: r, direction: n } = l.useContext(le),
            { gutter: o, wrap: s, supportFlexGap: c } = l.useContext(Ge),
            {
                prefixCls: a,
                span: u,
                order: f,
                offset: y,
                push: M,
                pull: _,
                className: I,
                children: h,
                flex: S,
                style: E
            } = e,
            $ = Xt(e, [
                'prefixCls',
                'span',
                'order',
                'offset',
                'push',
                'pull',
                'className',
                'children',
                'flex',
                'style'
            ]),
            i = r('col', a),
            [x, C] = Bt(i)
        let b = {}
        Kt.forEach((m) => {
            let d = {}
            const p = e[m]
            typeof p == 'number' ? (d.span = p) : typeof p == 'object' && (d = p || {}),
                delete $[m],
                (b = Object.assign(Object.assign({}, b), {
                    [`${i}-${m}-${d.span}`]: d.span !== void 0,
                    [`${i}-${m}-order-${d.order}`]: d.order || d.order === 0,
                    [`${i}-${m}-offset-${d.offset}`]: d.offset || d.offset === 0,
                    [`${i}-${m}-push-${d.push}`]: d.push || d.push === 0,
                    [`${i}-${m}-pull-${d.pull}`]: d.pull || d.pull === 0,
                    [`${i}-${m}-flex-${d.flex}`]: d.flex || d.flex === 'auto',
                    [`${i}-rtl`]: n === 'rtl'
                }))
        })
        const w = Q(
                i,
                {
                    [`${i}-${u}`]: u !== void 0,
                    [`${i}-order-${f}`]: f,
                    [`${i}-offset-${y}`]: y,
                    [`${i}-push-${M}`]: M,
                    [`${i}-pull-${_}`]: _
                },
                I,
                b,
                C
            ),
            g = {}
        if (o && o[0] > 0) {
            const m = o[0] / 2
            ;(g.paddingLeft = m), (g.paddingRight = m)
        }
        if (o && o[1] > 0 && !c) {
            const m = o[1] / 2
            ;(g.paddingTop = m), (g.paddingBottom = m)
        }
        return (
            S && ((g.flex = Yt(S)), s === !1 && !g.minWidth && (g.minWidth = 0)),
            x(
                l.createElement(
                    'div',
                    Object.assign({}, $, { style: Object.assign(Object.assign({}, g), E), className: w, ref: t }),
                    h
                )
            )
        )
    }),
    De = Qt
var Ut =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
        var r = {}
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        return r
    }
function Re(e, t) {
    const [r, n] = l.useState(typeof e == 'string' ? e : ''),
        o = () => {
            if ((typeof e == 'string' && n(e), typeof e == 'object'))
                for (let s = 0; s < ce.length; s++) {
                    const c = ce[s]
                    if (!t[c]) continue
                    const a = e[c]
                    if (a !== void 0) {
                        n(a)
                        return
                    }
                }
        }
    return (
        l.useEffect(() => {
            o()
        }, [JSON.stringify(e), t]),
        r
    )
}
const Jt = l.forwardRef((e, t) => {
        const { prefixCls: r, justify: n, align: o, className: s, style: c, children: a, gutter: u = 0, wrap: f } = e,
            y = Ut(e, ['prefixCls', 'justify', 'align', 'className', 'style', 'children', 'gutter', 'wrap']),
            { getPrefixCls: M, direction: _ } = l.useContext(le),
            [I, h] = l.useState({ xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 }),
            [S, E] = l.useState({ xs: !1, sm: !1, md: !1, lg: !1, xl: !1, xxl: !1 }),
            $ = Re(o, S),
            i = Re(n, S),
            x = Je(),
            C = l.useRef(u),
            b = Ze()
        l.useEffect(() => {
            const F = b.subscribe((H) => {
                E(H)
                const O = C.current || 0
                ;((!Array.isArray(O) && typeof O == 'object') ||
                    (Array.isArray(O) && (typeof O[0] == 'object' || typeof O[1] == 'object'))) &&
                    h(H)
            })
            return () => b.unsubscribe(F)
        }, [])
        const w = () => {
                const F = [void 0, void 0]
                return (
                    (Array.isArray(u) ? u : [u, void 0]).forEach((O, G) => {
                        if (typeof O == 'object')
                            for (let D = 0; D < ce.length; D++) {
                                const B = ce[D]
                                if (I[B] && O[B] !== void 0) {
                                    F[G] = O[B]
                                    break
                                }
                            }
                        else F[G] = O
                    }),
                    F
                )
            },
            g = M('row', r),
            [m, d] = Dt(g),
            p = w(),
            L = Q(
                g,
                { [`${g}-no-wrap`]: f === !1, [`${g}-${i}`]: i, [`${g}-${$}`]: $, [`${g}-rtl`]: _ === 'rtl' },
                s,
                d
            ),
            W = {},
            v = p[0] != null && p[0] > 0 ? p[0] / -2 : void 0,
            j = p[1] != null && p[1] > 0 ? p[1] / -2 : void 0
        v && ((W.marginLeft = v), (W.marginRight = v)),
            x ? ([, W.rowGap] = p) : j && ((W.marginTop = j), (W.marginBottom = j))
        const [R, z] = p,
            A = l.useMemo(() => ({ gutter: [R, z], wrap: f, supportFlexGap: x }), [R, z, f, x])
        return m(
            l.createElement(
                Ge.Provider,
                { value: A },
                l.createElement(
                    'div',
                    Object.assign({}, y, { className: L, style: Object.assign(Object.assign({}, W), c), ref: t }),
                    a
                )
            )
        )
    }),
    Zt = Jt
function ue(e) {
    const [t, r] = l.useState(e)
    return (
        l.useEffect(() => {
            const n = setTimeout(
                () => {
                    r(e)
                },
                e.length ? 0 : 10
            )
            return () => {
                clearTimeout(n)
            }
        }, [e]),
        t
    )
}
const kt = (e) => {
        const { componentCls: t } = e,
            r = `${t}-show-help`,
            n = `${t}-show-help-item`
        return {
            [r]: {
                transition: `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                '&-appear, &-enter': { opacity: 0, '&-active': { opacity: 1 } },
                '&-leave': { opacity: 1, '&-active': { opacity: 0 } },
                [n]: {
                    overflow: 'hidden',
                    transition: `height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,
                    [`&${n}-appear, &${n}-enter`]: {
                        transform: 'translateY(-5px)',
                        opacity: 0,
                        ['&-active']: { transform: 'translateY(0)', opacity: 1 }
                    },
                    [`&${n}-leave-active`]: { transform: 'translateY(-5px)' }
                }
            }
        }
    },
    en = kt,
    tn = (e) => ({
        legend: {
            display: 'block',
            width: '100%',
            marginBottom: e.marginLG,
            padding: 0,
            color: e.colorTextDescription,
            fontSize: e.fontSizeLG,
            lineHeight: 'inherit',
            border: 0,
            borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`
        },
        label: { fontSize: e.fontSize },
        'input[type="search"]': { boxSizing: 'border-box' },
        'input[type="radio"], input[type="checkbox"]': { lineHeight: 'normal' },
        'input[type="file"]': { display: 'block' },
        'input[type="range"]': { display: 'block', width: '100%' },
        'select[multiple], select[size]': { height: 'auto' },
        [`input[type='file']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus`]: { outline: 0, boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}` },
        output: { display: 'block', paddingTop: 15, color: e.colorText, fontSize: e.fontSize, lineHeight: e.lineHeight }
    }),
    Te = (e, t) => {
        const { formItemCls: r } = e
        return { [r]: { [`${r}-label > label`]: { height: t }, [`${r}-control-input`]: { minHeight: t } } }
    },
    nn = (e) => {
        const { componentCls: t } = e
        return {
            [e.componentCls]: Object.assign(Object.assign(Object.assign({}, qe(e)), tn(e)), {
                [`${t}-text`]: { display: 'inline-block', paddingInlineEnd: e.paddingSM },
                '&-small': Object.assign({}, Te(e, e.controlHeightSM)),
                '&-large': Object.assign({}, Te(e, e.controlHeightLG))
            })
        }
    },
    rn = (e) => {
        const { formItemCls: t, iconCls: r, componentCls: n, rootPrefixCls: o } = e
        return {
            [t]: Object.assign(Object.assign({}, qe(e)), {
                marginBottom: e.marginLG,
                verticalAlign: 'top',
                '&-with-help': { transition: 'none' },
                [`&-hidden,
        &-hidden.${o}-row`]: { display: 'none' },
                '&-has-warning': { [`${t}-split`]: { color: e.colorError } },
                '&-has-error': { [`${t}-split`]: { color: e.colorWarning } },
                [`${t}-label`]: {
                    display: 'inline-block',
                    flexGrow: 0,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textAlign: 'end',
                    verticalAlign: 'middle',
                    '&-left': { textAlign: 'start' },
                    '&-wrap': { overflow: 'unset', lineHeight: `${e.lineHeight} - 0.25em`, whiteSpace: 'unset' },
                    '> label': {
                        position: 'relative',
                        display: 'inline-flex',
                        alignItems: 'center',
                        maxWidth: '100%',
                        height: e.controlHeight,
                        color: e.colorTextHeading,
                        fontSize: e.fontSize,
                        [`> ${r}`]: { fontSize: e.fontSize, verticalAlign: 'top' },
                        [`&${t}-required:not(${t}-required-mark-optional)::before`]: {
                            display: 'inline-block',
                            marginInlineEnd: e.marginXXS,
                            color: e.colorError,
                            fontSize: e.fontSize,
                            fontFamily: 'SimSun, sans-serif',
                            lineHeight: 1,
                            content: '"*"',
                            [`${n}-hide-required-mark &`]: { display: 'none' }
                        },
                        [`${t}-optional`]: {
                            display: 'inline-block',
                            marginInlineStart: e.marginXXS,
                            color: e.colorTextDescription,
                            [`${n}-hide-required-mark &`]: { display: 'none' }
                        },
                        [`${t}-tooltip`]: {
                            color: e.colorTextDescription,
                            cursor: 'help',
                            writingMode: 'horizontal-tb',
                            marginInlineStart: e.marginXXS
                        },
                        '&::after': {
                            content: '":"',
                            position: 'relative',
                            marginBlock: 0,
                            marginInlineStart: e.marginXXS / 2,
                            marginInlineEnd: e.marginXS
                        },
                        [`&${t}-no-colon::after`]: { content: '" "' }
                    }
                },
                [`${t}-control`]: {
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    [`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]: { width: '100%' },
                    '&-input': {
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: e.controlHeight,
                        '&-content': { flex: 'auto', maxWidth: '100%' }
                    }
                },
                [t]: {
                    '&-explain, &-extra': {
                        clear: 'both',
                        color: e.colorTextDescription,
                        fontSize: e.fontSize,
                        lineHeight: e.lineHeight
                    },
                    '&-explain-connected': { width: '100%' },
                    '&-extra': {
                        minHeight: e.controlHeightSM,
                        transition: `color ${e.motionDurationMid} ${e.motionEaseOut}`
                    },
                    '&-explain': { '&-error': { color: e.colorError }, '&-warning': { color: e.colorWarning } }
                },
                [`&-with-help ${t}-explain`]: { height: 'auto', opacity: 1 },
                [`${t}-feedback-icon`]: {
                    fontSize: e.fontSize,
                    textAlign: 'center',
                    visibility: 'visible',
                    animationName: He,
                    animationDuration: e.motionDurationMid,
                    animationTimingFunction: e.motionEaseOutBack,
                    pointerEvents: 'none',
                    '&-success': { color: e.colorSuccess },
                    '&-error': { color: e.colorError },
                    '&-warning': { color: e.colorWarning },
                    '&-validating': { color: e.colorPrimary }
                }
            })
        }
    },
    on = (e) => {
        const { componentCls: t, formItemCls: r, rootPrefixCls: n } = e
        return {
            [`${t}-horizontal`]: {
                [`${r}-label`]: { flexGrow: 0 },
                [`${r}-control`]: { flex: '1 1 0', minWidth: 0 },
                [`${r}-label.${n}-col-24 + ${r}-control`]: { minWidth: 'unset' }
            }
        }
    },
    ln = (e) => {
        const { componentCls: t, formItemCls: r } = e
        return {
            [`${t}-inline`]: {
                display: 'flex',
                flexWrap: 'wrap',
                [r]: {
                    flex: 'none',
                    marginInlineEnd: e.margin,
                    marginBottom: 0,
                    '&-row': { flexWrap: 'nowrap' },
                    '&-with-help': { marginBottom: e.marginLG },
                    [`> ${r}-label,
        > ${r}-control`]: { display: 'inline-block', verticalAlign: 'top' },
                    [`> ${r}-label`]: { flex: 'none' },
                    [`${t}-text`]: { display: 'inline-block' },
                    [`${r}-has-feedback`]: { display: 'inline-block' }
                }
            }
        }
    },
    re = (e) => ({
        margin: 0,
        padding: `0 0 ${e.paddingXS}px`,
        whiteSpace: 'initial',
        textAlign: 'start',
        '> label': { margin: 0, '&::after': { display: 'none' } }
    }),
    sn = (e) => {
        const { componentCls: t, formItemCls: r } = e
        return {
            [`${r} ${r}-label`]: re(e),
            [t]: {
                [r]: {
                    flexWrap: 'wrap',
                    [`${r}-label,
          ${r}-control`]: { flex: '0 0 100%', maxWidth: '100%' }
                }
            }
        }
    },
    an = (e) => {
        const { componentCls: t, formItemCls: r, rootPrefixCls: n } = e
        return {
            [`${t}-vertical`]: {
                [r]: {
                    '&-row': { flexDirection: 'column' },
                    '&-label > label': { height: 'auto' },
                    [`${t}-item-control`]: { width: '100%' }
                }
            },
            [`${t}-vertical ${r}-label,
      .${n}-col-24${r}-label,
      .${n}-col-xl-24${r}-label`]: re(e),
            [`@media (max-width: ${e.screenXSMax}px)`]: [sn(e), { [t]: { [`.${n}-col-xs-24${r}-label`]: re(e) } }],
            [`@media (max-width: ${e.screenSMMax}px)`]: { [t]: { [`.${n}-col-sm-24${r}-label`]: re(e) } },
            [`@media (max-width: ${e.screenMDMax}px)`]: { [t]: { [`.${n}-col-md-24${r}-label`]: re(e) } },
            [`@media (max-width: ${e.screenLGMax}px)`]: { [t]: { [`.${n}-col-lg-24${r}-label`]: re(e) } }
        }
    },
    Ce = ye('Form', (e, t) => {
        let { rootPrefixCls: r } = t
        const n = Ae(e, { formItemCls: `${e.componentCls}-item`, rootPrefixCls: r })
        return [nn(n), rn(n), en(n), on(n), ln(n), an(n), ke(n), He]
    }),
    Le = []
function ge(e, t, r) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0
    return { key: typeof e == 'string' ? e : `${t}-${n}`, error: e, errorStatus: r }
}
function Be(e) {
    let { help: t, helpStatus: r, errors: n = Le, warnings: o = Le, className: s, fieldId: c, onVisibleChanged: a } = e
    const { prefixCls: u } = l.useContext($e),
        f = `${u}-item-explain`,
        [, y] = Ce(u),
        M = l.useMemo(() => Ie(u), [u]),
        _ = ue(n),
        I = ue(o),
        h = l.useMemo(
            () =>
                t != null
                    ? [ge(t, 'help', r)]
                    : [].concat(
                          K(_.map((E, $) => ge(E, 'error', 'error', $))),
                          K(I.map((E, $) => ge(E, 'warning', 'warning', $)))
                      ),
            [t, r, _, I]
        ),
        S = {}
    return (
        c && (S.id = `${c}_help`),
        l.createElement(
            et,
            {
                motionDeadline: M.motionDeadline,
                motionName: `${u}-show-help`,
                visible: !!h.length,
                onVisibleChanged: a
            },
            (E) => {
                const { className: $, style: i } = E
                return l.createElement(
                    'div',
                    Object.assign({}, S, { className: Q(f, $, s, y), style: i, role: 'alert' }),
                    l.createElement(
                        tt,
                        Object.assign({ keys: h }, Ie(u), { motionName: `${u}-show-help-item`, component: !1 }),
                        (x) => {
                            const { key: C, error: b, errorStatus: w, className: g, style: m } = x
                            return l.createElement(
                                'div',
                                { key: C, className: Q(g, { [`${f}-${w}`]: w }), style: m },
                                b
                            )
                        }
                    )
                )
            }
        )
    )
}
const cn = ['parentNode'],
    un = 'form_item'
function oe(e) {
    return e === void 0 || e === !1 ? [] : Array.isArray(e) ? e : [e]
}
function Xe(e, t) {
    if (!e.length) return
    const r = e.join('_')
    return t ? `${t}_${r}` : cn.includes(r) ? `${un}_${r}` : r
}
function We(e) {
    return oe(e).join('_')
}
function Ye(e) {
    const [t] = nt(),
        r = l.useRef({}),
        n = l.useMemo(
            () =>
                e ??
                Object.assign(Object.assign({}, t), {
                    __INTERNAL__: {
                        itemRef: (o) => (s) => {
                            const c = We(o)
                            s ? (r.current[c] = s) : delete r.current[c]
                        }
                    },
                    scrollToField: function (o) {
                        let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                        const c = oe(o),
                            a = Xe(c, n.__INTERNAL__.name),
                            u = a ? document.getElementById(a) : null
                        u && Vt(u, Object.assign({ scrollMode: 'if-needed', block: 'nearest' }, s))
                    },
                    getFieldInstance: (o) => {
                        const s = We(o)
                        return r.current[s]
                    }
                }),
            [e, t]
        )
    return [n]
}
var dn =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
        var r = {}
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        return r
    }
const mn = (e, t) => {
        const r = l.useContext(rt),
            { getPrefixCls: n, direction: o, form: s } = l.useContext(le),
            {
                prefixCls: c,
                className: a,
                rootClassName: u,
                size: f,
                disabled: y = r,
                form: M,
                colon: _,
                labelAlign: I,
                labelWrap: h,
                labelCol: S,
                wrapperCol: E,
                hideRequiredMark: $,
                layout: i = 'horizontal',
                scrollToFirstError: x,
                requiredMark: C,
                onFinishFailed: b,
                name: w
            } = e,
            g = dn(e, [
                'prefixCls',
                'className',
                'rootClassName',
                'size',
                'disabled',
                'form',
                'colon',
                'labelAlign',
                'labelWrap',
                'labelCol',
                'wrapperCol',
                'hideRequiredMark',
                'layout',
                'scrollToFirstError',
                'requiredMark',
                'onFinishFailed',
                'name'
            ]),
            m = ot(f),
            d = l.useMemo(() => (C !== void 0 ? C : s && s.requiredMark !== void 0 ? s.requiredMark : !$), [$, C, s]),
            p = _ ?? (s == null ? void 0 : s.colon),
            L = n('form', c),
            [W, v] = Ce(L),
            j = Q(
                L,
                {
                    [`${L}-${i}`]: !0,
                    [`${L}-hide-required-mark`]: d === !1,
                    [`${L}-rtl`]: o === 'rtl',
                    [`${L}-${m}`]: m
                },
                v,
                a,
                u
            ),
            [R] = Ye(M),
            { __INTERNAL__: z } = R
        z.name = w
        const A = l.useMemo(
            () => ({
                name: w,
                labelAlign: I,
                labelCol: S,
                labelWrap: h,
                wrapperCol: E,
                vertical: i === 'vertical',
                colon: p,
                requiredMark: d,
                itemRef: z.itemRef,
                form: R
            }),
            [w, I, S, E, i, p, d, R]
        )
        l.useImperativeHandle(t, () => R)
        const F = (O, G) => {
                if (O) {
                    let D = { block: 'nearest' }
                    typeof O == 'object' && (D = O), R.scrollToField(G, D)
                }
            },
            H = (O) => {
                if ((b == null || b(O), O.errorFields.length)) {
                    const G = O.errorFields[0].name
                    if (x !== void 0) {
                        F(x, G)
                        return
                    }
                    s && s.scrollToFirstError !== void 0 && F(s.scrollToFirstError, G)
                }
            }
        return W(
            l.createElement(
                lt,
                { disabled: y },
                l.createElement(
                    st,
                    { size: m },
                    l.createElement(
                        k.Provider,
                        { value: A },
                        l.createElement(
                            it,
                            Object.assign({ id: w }, g, { name: w, onFinishFailed: H, form: R, className: j })
                        )
                    )
                )
            )
        )
    },
    fn = l.forwardRef(mn),
    pn = fn,
    Ke = () => {
        const { status: e, errors: t = [], warnings: r = [] } = l.useContext(xe)
        return { status: e, errors: t, warnings: r }
    }
Ke.Context = xe
const gn = Ke
function hn(e) {
    const [t, r] = l.useState(e),
        n = l.useRef(null),
        o = l.useRef([]),
        s = l.useRef(!1)
    l.useEffect(
        () => (
            (s.current = !1),
            () => {
                ;(s.current = !0), Ee.cancel(n.current), (n.current = null)
            }
        ),
        []
    )
    function c(a) {
        s.current ||
            (n.current === null &&
                ((o.current = []),
                (n.current = Ee(() => {
                    ;(n.current = null),
                        r((u) => {
                            let f = u
                            return (
                                o.current.forEach((y) => {
                                    f = y(f)
                                }),
                                f
                            )
                        })
                }))),
            o.current.push(a))
    }
    return [t, c]
}
function bn() {
    const { itemRef: e } = l.useContext(k),
        t = l.useRef({})
    function r(n, o) {
        const s = o && typeof o == 'object' && o.ref,
            c = n.join('_')
        return (
            (t.current.name !== c || t.current.originRef !== s) &&
                ((t.current.name = c), (t.current.originRef = s), (t.current.ref = at(e(n), s))),
            t.current.ref
        )
    }
    return r
}
const yn = (e) => {
        const {
                prefixCls: t,
                status: r,
                wrapperCol: n,
                children: o,
                errors: s,
                warnings: c,
                _internalItemRender: a,
                extra: u,
                help: f,
                fieldId: y,
                marginBottom: M,
                onErrorVisibleChanged: _
            } = e,
            I = `${t}-item`,
            h = l.useContext(k),
            S = n || h.wrapperCol || {},
            E = Q(`${I}-control`, S.className),
            $ = l.useMemo(() => Object.assign({}, h), [h])
        delete $.labelCol, delete $.wrapperCol
        const i = l.createElement(
                'div',
                { className: `${I}-control-input` },
                l.createElement('div', { className: `${I}-control-input-content` }, o)
            ),
            x = l.useMemo(() => ({ prefixCls: t, status: r }), [t, r]),
            C =
                M !== null || s.length || c.length
                    ? l.createElement(
                          'div',
                          { style: { display: 'flex', flexWrap: 'nowrap' } },
                          l.createElement(
                              $e.Provider,
                              { value: x },
                              l.createElement(Be, {
                                  fieldId: y,
                                  errors: s,
                                  warnings: c,
                                  help: f,
                                  helpStatus: r,
                                  className: `${I}-explain-connected`,
                                  onVisibleChanged: _
                              })
                          ),
                          !!M && l.createElement('div', { style: { width: 0, height: M } })
                      )
                    : null,
            b = {}
        y && (b.id = `${y}_extra`)
        const w = u ? l.createElement('div', Object.assign({}, b, { className: `${I}-extra` }), u) : null,
            g =
                a && a.mark === 'pro_table_render' && a.render
                    ? a.render(e, { input: i, errorList: C, extra: w })
                    : l.createElement(l.Fragment, null, i, C, w)
        return l.createElement(k.Provider, { value: $ }, l.createElement(De, Object.assign({}, S, { className: E }), g))
    },
    $n = yn
var xn = {
    icon: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896', focusable: 'false' },
        children: [
            {
                tag: 'path',
                attrs: {
                    d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                }
            },
            {
                tag: 'path',
                attrs: {
                    d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z'
                }
            }
        ]
    },
    name: 'question-circle',
    theme: 'outlined'
}
const Cn = xn
var wn = function (t, r) {
    return l.createElement(ct, je(je({}, t), {}, { ref: r, icon: Cn }))
}
const vn = l.forwardRef(wn)
var Sn =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
        var r = {}
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        return r
    }
function On(e) {
    return e ? (typeof e == 'object' && !l.isValidElement(e) ? e : { title: e }) : null
}
const In = (e) => {
        let {
            prefixCls: t,
            label: r,
            htmlFor: n,
            labelCol: o,
            labelAlign: s,
            colon: c,
            required: a,
            requiredMark: u,
            tooltip: f
        } = e
        var y
        const [M] = _t('Form'),
            { vertical: _, labelAlign: I, labelCol: h, labelWrap: S, colon: E } = l.useContext(k)
        if (!r) return null
        const $ = o || h || {},
            i = s || I,
            x = `${t}-item-label`,
            C = Q(x, i === 'left' && `${x}-left`, $.className, { [`${x}-wrap`]: !!S })
        let b = r
        const w = c === !0 || (E !== !1 && c !== !1)
        w && !_ && typeof r == 'string' && r.trim() !== '' && (b = r.replace(/[:|：]\s*$/, ''))
        const m = On(f)
        if (m) {
            const { icon: p = l.createElement(vn, null) } = m,
                L = Sn(m, ['icon']),
                W = l.createElement(
                    ut,
                    Object.assign({}, L),
                    l.cloneElement(p, { className: `${t}-item-tooltip`, title: '' })
                )
            b = l.createElement(l.Fragment, null, b, W)
        }
        u === 'optional' &&
            !a &&
            (b = l.createElement(
                l.Fragment,
                null,
                b,
                l.createElement(
                    'span',
                    { className: `${t}-item-optional`, title: '' },
                    (M == null ? void 0 : M.optional) || ((y = dt.Form) === null || y === void 0 ? void 0 : y.optional)
                )
            ))
        const d = Q({
            [`${t}-item-required`]: a,
            [`${t}-item-required-mark-optional`]: u === 'optional',
            [`${t}-item-no-colon`]: !w
        })
        return l.createElement(
            De,
            Object.assign({}, $, { className: C }),
            l.createElement('label', { htmlFor: n, className: d, title: typeof r == 'string' ? r : '' }, b)
        )
    },
    En = In
var jn =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
        var r = {}
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        return r
    }
const Fn = { success: gt, warning: ht, error: bt, validating: yt }
function Nn(e) {
    const {
            prefixCls: t,
            className: r,
            rootClassName: n,
            style: o,
            help: s,
            errors: c,
            warnings: a,
            validateStatus: u,
            meta: f,
            hasFeedback: y,
            hidden: M,
            children: _,
            fieldId: I,
            required: h,
            isRequired: S,
            onSubItemMetaChange: E
        } = e,
        $ = jn(e, [
            'prefixCls',
            'className',
            'rootClassName',
            'style',
            'help',
            'errors',
            'warnings',
            'validateStatus',
            'meta',
            'hasFeedback',
            'hidden',
            'children',
            'fieldId',
            'required',
            'isRequired',
            'onSubItemMetaChange'
        ]),
        i = `${t}-item`,
        { requiredMark: x } = l.useContext(k),
        C = l.useRef(null),
        b = ue(c),
        w = ue(a),
        g = s != null,
        m = !!(g || c.length || a.length),
        d = !!C.current && mt(C.current),
        [p, L] = l.useState(null)
    ft(() => {
        if (m && C.current) {
            const A = getComputedStyle(C.current)
            L(parseInt(A.marginBottom, 10))
        }
    }, [m, d])
    const W = (A) => {
            A || L(null)
        },
        j = (function () {
            let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
                F = ''
            const H = A ? b : f.errors,
                O = A ? w : f.warnings
            return (
                u !== void 0
                    ? (F = u)
                    : f.validating
                    ? (F = 'validating')
                    : H.length
                    ? (F = 'error')
                    : O.length
                    ? (F = 'warning')
                    : (f.touched || (y && f.validated)) && (F = 'success'),
                F
            )
        })(),
        R = l.useMemo(() => {
            let A
            if (y) {
                const F = j && Fn[j]
                A = F
                    ? l.createElement(
                          'span',
                          { className: Q(`${i}-feedback-icon`, `${i}-feedback-icon-${j}`) },
                          l.createElement(F, null)
                      )
                    : null
            }
            return { status: j, errors: c, warnings: a, hasFeedback: y, feedbackIcon: A, isFormItemInput: !0 }
        }, [j, y]),
        z = Q(i, r, n, {
            [`${i}-with-help`]: g || b.length || w.length,
            [`${i}-has-feedback`]: j && y,
            [`${i}-has-success`]: j === 'success',
            [`${i}-has-warning`]: j === 'warning',
            [`${i}-has-error`]: j === 'error',
            [`${i}-is-validating`]: j === 'validating',
            [`${i}-hidden`]: M
        })
    return l.createElement(
        'div',
        { className: z, style: o, ref: C },
        l.createElement(
            Zt,
            Object.assign(
                { className: `${i}-row` },
                pt($, [
                    '_internalItemRender',
                    'colon',
                    'dependencies',
                    'extra',
                    'fieldKey',
                    'getValueFromEvent',
                    'getValueProps',
                    'htmlFor',
                    'id',
                    'initialValue',
                    'isListField',
                    'label',
                    'labelAlign',
                    'labelCol',
                    'labelWrap',
                    'messageVariables',
                    'name',
                    'normalize',
                    'noStyle',
                    'preserve',
                    'requiredMark',
                    'rules',
                    'shouldUpdate',
                    'trigger',
                    'tooltip',
                    'validateFirst',
                    'validateTrigger',
                    'valuePropName',
                    'wrapperCol'
                ])
            ),
            l.createElement(En, Object.assign({ htmlFor: I }, e, { requiredMark: x, required: h ?? S, prefixCls: t })),
            l.createElement(
                $n,
                Object.assign({}, e, f, {
                    errors: b,
                    warnings: w,
                    prefixCls: t,
                    status: j,
                    help: s,
                    marginBottom: p,
                    onErrorVisibleChanged: W
                }),
                l.createElement(ze.Provider, { value: E }, l.createElement(xe.Provider, { value: R }, _))
            )
        ),
        !!p && l.createElement('div', { className: `${i}-margin-offset`, style: { marginBottom: -p } })
    )
}
function Pn(e) {
    if (typeof e == 'function') return e
    const t = $t(e)
    return t.length <= 1 ? t[0] : t
}
const Mn = '__SPLIT__',
    _n = l.memo(
        (e) => {
            let { children: t } = e
            return t
        },
        (e, t) =>
            e.value === t.value &&
            e.update === t.update &&
            e.childProps.length === t.childProps.length &&
            e.childProps.every((r, n) => r === t.childProps[n])
    )
function Rn(e) {
    return e != null
}
function Ve() {
    return { errors: [], warnings: [], touched: !1, validating: !1, name: [], validated: !1 }
}
function Tn(e) {
    const {
            name: t,
            noStyle: r,
            className: n,
            dependencies: o,
            prefixCls: s,
            shouldUpdate: c,
            rules: a,
            children: u,
            required: f,
            label: y,
            messageVariables: M,
            trigger: _ = 'onChange',
            validateTrigger: I,
            hidden: h,
            help: S
        } = e,
        { getPrefixCls: E } = l.useContext(le),
        { name: $ } = l.useContext(k),
        i = Pn(u),
        x = typeof i == 'function',
        C = l.useContext(ze),
        { validateTrigger: b } = l.useContext(xt),
        w = I !== void 0 ? I : b,
        g = Rn(t),
        m = E('form', s),
        [d, p] = Ce(m),
        L = l.useContext(Ct),
        W = l.useRef(),
        [v, j] = hn({}),
        [R, z] = wt(() => Ve()),
        A = (N) => {
            const T = L == null ? void 0 : L.getKey(N.name)
            if ((z(N.destroy ? Ve() : N, !0), r && S !== !1 && C)) {
                let P = N.name
                if (N.destroy) P = W.current || P
                else if (T !== void 0) {
                    const [X, Y] = T
                    ;(P = [X].concat(K(Y))), (W.current = P)
                }
                C(N, P)
            }
        },
        F = (N, T) => {
            j((P) => {
                const X = Object.assign({}, P),
                    J = [].concat(K(N.name.slice(0, -1)), K(T)).join(Mn)
                return N.destroy ? delete X[J] : (X[J] = N), X
            })
        },
        [H, O] = l.useMemo(() => {
            const N = K(R.errors),
                T = K(R.warnings)
            return (
                Object.values(v).forEach((P) => {
                    N.push.apply(N, K(P.errors || [])), T.push.apply(T, K(P.warnings || []))
                }),
                [N, T]
            )
        }, [v, R.errors, R.warnings]),
        G = bn()
    function D(N, T, P) {
        return r && !h
            ? N
            : l.createElement(
                  Nn,
                  Object.assign({ key: 'row' }, e, {
                      className: Q(n, p),
                      prefixCls: m,
                      fieldId: T,
                      isRequired: P,
                      errors: H,
                      warnings: O,
                      meta: R,
                      onSubItemMetaChange: F
                  }),
                  N
              )
    }
    if (!g && !x && !o) return d(D(i))
    let B = {}
    return (
        typeof y == 'string' ? (B.label = y) : t && (B.label = String(t)),
        M && (B = Object.assign(Object.assign({}, B), M)),
        d(
            l.createElement(
                vt,
                Object.assign({}, e, { messageVariables: B, trigger: _, validateTrigger: w, onMetaChange: A }),
                (N, T, P) => {
                    const X = oe(t).length && T ? T.name : [],
                        Y = Xe(X, $),
                        J =
                            f !== void 0
                                ? f
                                : !!(
                                      a &&
                                      a.some((V) => {
                                          if (V && typeof V == 'object' && V.required && !V.warningOnly) return !0
                                          if (typeof V == 'function') {
                                              const se = V(P)
                                              return se && se.required && !se.warningOnly
                                          }
                                          return !1
                                      })
                                  ),
                        ee = Object.assign({}, N)
                    let Z = null
                    if (Array.isArray(i) && g) Z = i
                    else if (!(x && (!(c || o) || g))) {
                        if (!(o && !x && !g))
                            if (St(i)) {
                                const V = Object.assign(Object.assign({}, i.props), ee)
                                if ((V.id || (V.id = Y), S || H.length > 0 || O.length > 0 || e.extra)) {
                                    const te = []
                                    ;(S || H.length > 0) && te.push(`${Y}_help`),
                                        e.extra && te.push(`${Y}_extra`),
                                        (V['aria-describedby'] = te.join(' '))
                                }
                                H.length > 0 && (V['aria-invalid'] = 'true'),
                                    J && (V['aria-required'] = 'true'),
                                    Ot(i) && (V.ref = G(X, i)),
                                    new Set([].concat(K(oe(_)), K(oe(w)))).forEach((te) => {
                                        V[te] = function () {
                                            for (
                                                var we,
                                                    ve,
                                                    de,
                                                    Se,
                                                    me,
                                                    Oe = arguments.length,
                                                    fe = new Array(Oe),
                                                    ie = 0;
                                                ie < Oe;
                                                ie++
                                            )
                                                fe[ie] = arguments[ie]
                                            ;(de = ee[te]) === null ||
                                                de === void 0 ||
                                                (we = de).call.apply(we, [ee].concat(fe)),
                                                (me = (Se = i.props)[te]) === null ||
                                                    me === void 0 ||
                                                    (ve = me).call.apply(ve, [Se].concat(fe))
                                        }
                                    })
                                const Ue = [V['aria-required'], V['aria-invalid'], V['aria-describedby']]
                                Z = l.createElement(
                                    _n,
                                    { value: ee[e.valuePropName || 'value'], update: i, childProps: Ue },
                                    It(i, V)
                                )
                            } else x && (c || o) && !g ? (Z = i(P)) : (Z = i)
                    }
                    return D(Z, Y, J)
                }
            )
        )
    )
}
const Qe = Tn
Qe.useStatus = gn
const Ln = Qe
var Wn =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
        var r = {}
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
        if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        return r
    }
const Vn = (e) => {
        var { prefixCls: t, children: r } = e,
            n = Wn(e, ['prefixCls', 'children'])
        const { getPrefixCls: o } = l.useContext(le),
            s = o('form', t),
            c = l.useMemo(() => ({ prefixCls: s, status: 'error' }), [s])
        return l.createElement(Et, Object.assign({}, n), (a, u, f) =>
            l.createElement(
                $e.Provider,
                { value: c },
                r(
                    a.map((y) => Object.assign(Object.assign({}, y), { fieldKey: y.key })),
                    u,
                    { errors: f.errors, warnings: f.warnings }
                )
            )
        )
    },
    An = Vn
function Hn() {
    const { form: e } = l.useContext(k)
    return e
}
const U = pn
U.Item = Ln
U.List = An
U.ErrorList = Be
U.useForm = Ye
U.useFormInstance = Hn
U.useWatch = jt
U.Provider = Ft
U.create = () => {}
const ne = U,
    qn = '_container_1brn2_1',
    zn = '_bg_1brn2_13',
    Gn = '_warp_1brn2_19',
    he = { container: qn, bg: zn, warp: Gn },
    Dn = '/assets/bg-190d9be0.svg'
function Yn() {
    const e = Nt(),
        t = Pt()
    async function r(n) {
        try {
            await t.login(n), e('/dashboard')
        } catch (o) {
            console.log(o)
        }
    }
    return q.jsxs('div', {
        className: he.container,
        children: [
            q.jsx('img', { className: he.bg, src: Dn, alt: '' }),
            q.jsxs(Rt.div, {
                animate: { scale: [0.7, 1], opacity: [0.1, 1] },
                className: he.warp,
                children: [
                    q.jsx('img', { src: Mt, alt: '' }),
                    q.jsxs(ne, {
                        name: 'loginForm',
                        initialValues: { remember: !0 },
                        autoComplete: 'off',
                        style: { textAlign: 'left' },
                        onFinish: r,
                        children: [
                            q.jsx(ne.Item, {
                                name: 'username',
                                rules: [{ required: !0, message: '请输入用户名' }],
                                children: q.jsx(Ne, { placeholder: '账号' })
                            }),
                            q.jsx(ne.Item, {
                                name: 'password',
                                rules: [{ required: !0, message: '请输入密码' }],
                                children: q.jsx(Ne.Password, { placeholder: '密码' })
                            }),
                            q.jsx(ne.Item, {
                                name: 'remember',
                                valuePropName: 'checked',
                                children: q.jsx(Tt, { children: '记住我' })
                            }),
                            q.jsx(ne.Item, {
                                children: q.jsx(Fe, {
                                    type: 'primary',
                                    htmlType: 'submit',
                                    block: !0,
                                    children: '登录'
                                })
                            }),
                            q.jsx(ne.Item, { children: q.jsx(Fe, { type: 'text', block: !0, children: '注册' }) })
                        ]
                    })
                ]
            })
        ]
    })
}
export { Yn as default }
