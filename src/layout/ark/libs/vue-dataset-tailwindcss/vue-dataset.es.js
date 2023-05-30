import { ref as b, computed as f, watch as C, provide as u, renderSlot as R, nextTick as j, inject as i, openBlock as v, createElementBlock as g, toDisplayString as c, createBlock as L, resolveDynamicComponent as B, withCtx as M, Fragment as A, renderList as F, createCommentVNode as K, createElementVNode as m, normalizeClass as k, withModifiers as N } from "vue";
const p = {
  show: "Show",
  entries: "entries",
  previous: "Previous",
  next: "Next",
  showing: "Showing",
  showingTo: "to",
  showingOf: "of",
  showingEntries: "entries"
}, V = "...";
function z(t, n, s) {
  let e;
  return function() {
    const r = this, o = arguments;
    clearTimeout(e), s && !e && t.apply(r, o), e = setTimeout(function() {
      e = null, s || t.apply(r, o);
    }, n);
  };
}
function O(t) {
  for (const n in t)
    return !1;
  return !0;
}
function G(t, n) {
  const e = [], r = [];
  let o;
  if (e.push(1), t <= 1)
    return e;
  for (let a = n - 2; a <= n + 2; a++)
    a < t && a > 1 && e.push(a);
  e.push(t);
  for (let a = 0; a < e.length; a++)
    o && (e[a] - o === 2 ? r.push(o + 1) : e[a] - o !== 1 && r.push(V)), r.push(e[a]), o = e[a];
  return r;
}
function W(t, n = {}) {
  const s = [];
  let e;
  const r = t.length;
  return t = t.map(function(o, a) {
    return o[0] === "-" ? (s[a] = -1, o = o.substring(1)) : s[a] = 1, o;
  }), function(o, a) {
    for (e = 0; e < r; e++) {
      const d = t[e], w = n[d] ? n[d](o.value[d]) : o.value[d], _ = n[d] ? n[d](a.value[d]) : a.value[d];
      if (w > _)
        return s[e];
      if (w < _)
        return -s[e];
    }
    return 0;
  };
}
function q(t, n) {
  for (const s in n)
    t = t.filter(function(e) {
      const r = e.value;
      for (const o in r)
        if (o === s) {
          if (typeof n[s] == "function")
            return n[s](r[o]);
          if (n[s] === "" || r[o] === n[s])
            return !0;
        }
      return !1;
    });
  return t;
}
function H(t, n, s, e) {
  e = String(e).toLowerCase();
  for (const r in s)
    if (t.length === 0 || t.indexOf(r) !== -1) {
      const o = String(s[r]).toLowerCase();
      for (const a in n)
        if (a === r && typeof n[a] == "function") {
          const d = n[a](o, e, s);
          if (d === !0)
            return d;
        }
      if (o.indexOf(e) >= 0)
        return !0;
    }
  return !1;
}
const y = (t, n) => {
  const s = t.__vccOpts || t;
  for (const [e, r] of n)
    s[e] = r;
  return s;
}, J = {
  props: {
    dsData: {
      type: Array,
      default: () => []
    },
    dsFilterFields: {
      type: Object,
      default: () => ({})
    },
    dsSortby: {
      type: Array,
      default: () => []
    },
    dsSearchIn: {
      type: Array,
      default: () => []
    },
    dsSearchAs: {
      type: Object,
      default: () => ({})
    },
    dsSortAs: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:dsData"],
  /**
   * @param {{
   *   dsData: Record<string, any>[];
   *   dsFilterFields: { [fieldId in string]: (columnValue: any) => boolean | any };
   *   dsSortby: string[];
   *   dsSearchIn: string[];
   *   dsSearchAs: { [id in string]: (columnValue: any, searchString: string) => boolean };
   *   dsSortAs: { [id in string]: (columnValue: any) => any };
   * }} props
   */
  setup(t, { emit: n }) {
    const s = b(1), e = b(""), r = b(10), o = b(p), a = b([]), d = (l) => {
      e.value = l;
    }, w = async (l) => {
      r.value = l, await j(), s.value > S.value && _(x.value[x.value.length - 1]);
    }, _ = (l) => {
      s.value = l;
    }, T = f(() => a.value.slice(I.value, D.value)), x = f(() => G(S.value, s.value)), P = f(() => a.value.length), S = f(() => Math.ceil(P.value / r.value)), I = f(() => (s.value - 1) * r.value), D = f(() => s.value * r.value);
    return C(P, (l, h) => {
      _(1);
    }), C(
      () => [t.dsData, e, t.dsSortby, t.dsFilterFields, t.dsSearchIn, t.dsSearchAs, t.dsSortAs],
      () => {
        let l = [];
        !e.value && !t.dsSortby.length && O(t.dsFilterFields) ? l = t.dsData.map((h, E) => E) : (l = t.dsData.map((h, E) => ({ index: E, value: h })), O(t.dsFilterFields) || (l = q(l, t.dsFilterFields)), e.value && (l = l.filter((h) => H(t.dsSearchIn, t.dsSearchAs, h.value, e.value))), t.dsSortby.length && l.sort(W(t.dsSortby, t.dsSortAs)), l = l.map((h) => h.index)), a.value = l, n(
          "update:dsData",
          l.map((h) => t.dsData[h])
        );
      },
      {
        immediate: !0,
        deep: !0
      }
    ), u("dsIndexes", a), u("search", d), u("showEntries", w), u("setActive", _), u("datasetI18n", o), u(
      "dsData",
      f(() => t.dsData)
    ), u("dsRows", T), u("dsPages", x), u("dsResultsNumber", P), u("dsPagecount", S), u("dsFrom", I), u("dsTo", D), u("dsPage", s), {
      dsIndexes: a,
      dsShowEntries: r,
      dsResultsNumber: P,
      dsPage: s,
      dsPagecount: S,
      dsFrom: I,
      dsTo: D,
      dsRows: T,
      dsPages: x,
      search: d,
      showEntries: w,
      setActive: _
    };
  }
};
function Q(t, n, s, e, r, o) {
  return R(t.$slots, "default", {
    ds: {
      dsIndexes: e.dsIndexes,
      dsShowEntries: e.dsShowEntries,
      dsResultsNumber: e.dsResultsNumber,
      dsPage: e.dsPage,
      dsPagecount: e.dsPagecount,
      dsFrom: e.dsFrom,
      dsTo: e.dsTo,
      dsData: s.dsData,
      dsRows: e.dsRows,
      dsPages: e.dsPages,
      search: e.search,
      showEntries: e.showEntries,
      setActive: e.setActive
    }
  });
}
const me = /* @__PURE__ */ y(J, [["render", Q]]), U = {
  setup() {
    const t = i("dsResultsNumber"), n = i("dsFrom"), s = i("dsTo"), e = f(() => t.value !== 0 ? n.value + 1 : 0), r = f(() => s.value >= t.value ? t.value : s.value);
    return {
      datasetI18n: i("datasetI18n"),
      dsResultsNumber: t,
      showing: e,
      showingTo: r
    };
  }
};
function X(t, n, s, e, r, o) {
  return v(), g("div", null, c(e.datasetI18n.showing) + " " + c(e.showing) + " " + c(e.datasetI18n.showingTo) + " " + c(e.showingTo) + " " + c(e.datasetI18n.showingOf) + " " + c(e.dsResultsNumber) + " " + c(e.datasetI18n.showingEntries), 1);
}
const _e = /* @__PURE__ */ y(U, [["render", X]]), Y = {
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  setup() {
    const t = f(() => {
      const n = [];
      for (let s = i("dsFrom").value; s < i("dsTo").value; s++)
        n.push(s);
      return n;
    });
    return {
      dsData: i("dsData"),
      dsRows: i("dsRows"),
      indexes: t
    };
  }
};
function Z(t, n, s, e, r, o) {
  return v(), L(B(s.tag), null, {
    default: M(() => [
      (v(!0), g(A, null, F(e.dsRows, (a, d) => R(t.$slots, "default", {
        row: e.dsData[a],
        rowIndex: a,
        index: e.indexes[d]
      })), 256)),
      e.dsRows.length ? K("", !0) : R(t.$slots, "noDataFound", { key: 0 })
    ]),
    _: 3
  });
}
const be = /* @__PURE__ */ y(Y, [["render", Z]]), $ = {
  setup() {
    const t = b(V), n = i("dsPage"), s = i("dsPagecount"), e = f(() => n.value === 1), r = f(() => n.value === s.value || s.value === 0);
    return {
      datasetI18n: i("datasetI18n"),
      setActive: i("setActive"),
      dsPages: i("dsPages"),
      dsPagecount: s,
      dsPage: n,
      morePages: t,
      disabledPrevious: e,
      disabledNext: r
    };
  }
}, ee = { class: "pagination" }, te = ["tabindex", "aria-disabled"], se = ["onClick"], ne = {
  key: 1,
  class: "page-link"
}, ae = ["tabindex", "aria-disabled"];
function re(t, n, s, e, r, o) {
  return v(), g("ul", ee, [
    m("li", {
      class: k(["page-item", e.disabledPrevious && "disabled"])
    }, [
      m("a", {
        class: "page-link",
        href: "#",
        tabindex: e.disabledPrevious ? "-1" : null,
        "aria-disabled": e.disabledPrevious ? "true" : null,
        onClick: n[0] || (n[0] = N((a) => e.setActive(e.dsPage !== 1 && e.dsPagecount !== 0 ? e.dsPage - 1 : e.dsPage), ["prevent"]))
      }, c(e.datasetI18n.previous), 9, te)
    ], 2),
    (v(!0), g(A, null, F(e.dsPages, (a, d) => (v(), g("li", {
      key: d,
      class: k(["page-item", a === e.dsPage && "active", a === e.morePages && "disabled"])
    }, [
      a !== e.morePages ? (v(), g("a", {
        key: 0,
        class: "page-link",
        href: "#",
        onClick: N((w) => e.setActive(a), ["prevent"])
      }, c(a), 9, se)) : (v(), g("span", ne, c(a), 1))
    ], 2))), 128)),
    m("li", {
      class: k(["page-item", e.disabledNext && "disabled"])
    }, [
      m("a", {
        class: "page-link",
        href: "#",
        tabindex: e.disabledNext ? "-1" : null,
        "aria-disabled": e.disabledNext ? "true" : null,
        onClick: n[1] || (n[1] = N((a) => e.setActive(e.dsPage !== e.dsPagecount && e.dsPagecount !== 0 ? e.dsPage + 1 : e.dsPage), ["prevent"]))
      }, c(e.datasetI18n.next), 9, ae)
    ], 2)
  ]);
}
const we = /* @__PURE__ */ y($, [["render", re]]), oe = {
  props: {
    dsSearchPlaceholder: {
      type: String,
      default: ""
    },
    wait: {
      type: Number,
      default: 0
    }
  },
  setup(t) {
    const n = i("search"), s = b(""), e = z((r) => {
      n(r);
    }, t.wait);
    return {
      dsSearch: s,
      input: e
    };
  }
}, de = { class: "border-b-2 border-[#005087" }, le = ["placeholder", "value"];
function ie(t, n, s, e, r, o) {
  return v(), g("div", de, [
    m("input", {
      type: "text",
      placeholder: s.dsSearchPlaceholder,
      class: "",
      value: e.dsSearch,
      onInput: n[0] || (n[0] = (a) => e.input(a.target.value))
    }, null, 40, le)
  ]);
}
const ye = /* @__PURE__ */ y(oe, [["render", ie]]), ce = {
  props: {
    dsShowEntries: {
      type: Number,
      default: 10
    },
    dsShowEntriesLovs: {
      type: Array,
      default: () => [
        { value: 5, text: 5 },
        { value: 10, text: 10 },
        { value: 25, text: 25 },
        { value: 50, text: 50 },
        { value: 100, text: 100 }
      ]
    }
  },
  emits: ["changed"],
  setup(t, { emit: n }) {
    const s = i("showEntries"), e = (r) => {
      n("changed", Number(r.target.value)), s(Number(r.target.value));
    };
    return s(Number(t.dsShowEntries)), {
      datasetI18n: i("datasetI18n"),
      change: e
    };
  }
}, ue = { class: "" }, fe = ["value"], ve = ["value"];
function ge(t, n, s, e, r, o) {
  return v(), g("div", ue, [
    m("label", null, c(e.datasetI18n.show), 1),
    m("select", {
      value: s.dsShowEntries,
      class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg",
      onChange: n[0] || (n[0] = (...a) => e.change && e.change(...a))
    }, [
      (v(!0), g(A, null, F(s.dsShowEntriesLovs, (a) => (v(), g("option", {
        key: a.value,
        value: a.value
      }, c(a.text), 9, ve))), 128))
    ], 40, fe),
    m("label", null, c(e.datasetI18n.entries), 1)
  ]);
}
const xe = /* @__PURE__ */ y(ce, [["render", ge]]);
export {
  me as Dataset,
  _e as DatasetInfo,
  be as DatasetItem,
  we as DatasetPager,
  ye as DatasetSearch,
  xe as DatasetShow
};
