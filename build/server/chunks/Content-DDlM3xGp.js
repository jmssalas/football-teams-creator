import { Z as rest_props, W as fallback, a2 as store_get, a3 as spread_attributes, _ as slot, a5 as unsubscribe_stores, X as bind_props, Y as sanitize_slots, v as push, a8 as getContext, $ as spread_props, a1 as attr, a4 as escape_html, x as pop, a0 as sanitize_props } from './index-9fQtdOsf.js';
import { w as writable } from './index3-B3IIhYL9.js';

function ButtonSkeleton($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href", "size"]);
  push();
  let href = fallback($$props["href"], void 0);
  let size = fallback($$props["size"], "default");
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes(
      {
        href,
        rel: $$restProps.target === "_blank" ? "noopener noreferrer" : void 0,
        role: "button",
        ...$$restProps
      },
      {
        "bx--skeleton": true,
        "bx--btn": true,
        "bx--btn--field": size === "field",
        "bx--btn--sm": size === "small",
        "bx--btn--lg": size === "lg",
        "bx--btn--xl": size === "xl"
      }
    )}></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...$$restProps }, {
      "bx--skeleton": true,
      "bx--btn": true,
      "bx--btn--field": size === "field",
      "bx--btn--sm": size === "small",
      "bx--btn--lg": size === "lg",
      "bx--btn--xl": size === "xl"
    })}></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { href, size });
  pop();
}
function Button($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "kind",
    "size",
    "expressive",
    "isSelected",
    "icon",
    "iconDescription",
    "tooltipAlignment",
    "tooltipPosition",
    "as",
    "skeleton",
    "disabled",
    "href",
    "tabindex",
    "type",
    "ref"
  ]);
  push();
  let hasIconOnly, iconProps, buttonProps;
  let kind = fallback($$props["kind"], "primary");
  let size = fallback($$props["size"], "default");
  let expressive = fallback($$props["expressive"], false);
  let isSelected = fallback($$props["isSelected"], false);
  let icon = fallback($$props["icon"], void 0);
  let iconDescription = fallback($$props["iconDescription"], void 0);
  let tooltipAlignment = fallback($$props["tooltipAlignment"], "center");
  let tooltipPosition = fallback($$props["tooltipPosition"], "bottom");
  let as = fallback($$props["as"], false);
  let skeleton = fallback($$props["skeleton"], false);
  let disabled = fallback($$props["disabled"], false);
  let href = fallback($$props["href"], void 0);
  let tabindex = fallback($$props["tabindex"], "0");
  let type = fallback($$props["type"], "button");
  let ref = fallback($$props["ref"], null);
  const ctx = getContext("ComposedModal");
  if (ctx && ref) {
    ctx.declareRef(ref);
  }
  hasIconOnly = (icon || $$slots.icon) && !$$slots.default;
  iconProps = {
    "aria-hidden": "true",
    class: "bx--btn__icon",
    "aria-label": iconDescription
  };
  buttonProps = {
    type: href && !disabled ? void 0 : type,
    tabindex,
    disabled: disabled === true ? true : void 0,
    href,
    "aria-pressed": hasIconOnly && kind === "ghost" && !href ? isSelected : void 0,
    ...$$restProps,
    class: [
      "bx--btn",
      expressive && "bx--btn--expressive",
      (size === "small" && !expressive || size === "sm" && !expressive || size === "small" && !expressive) && "bx--btn--sm",
      size === "field" && !expressive || size === "md" && !expressive && "bx--btn--md",
      size === "field" && "bx--btn--field",
      size === "small" && "bx--btn--sm",
      size === "lg" && "bx--btn--lg",
      size === "xl" && "bx--btn--xl",
      kind && `bx--btn--${kind}`,
      disabled && "bx--btn--disabled",
      hasIconOnly && "bx--btn--icon-only",
      hasIconOnly && "bx--tooltip__trigger",
      hasIconOnly && "bx--tooltip--a11y",
      hasIconOnly && tooltipPosition && `bx--btn--icon-only--${tooltipPosition}`,
      hasIconOnly && tooltipAlignment && `bx--tooltip--align-${tooltipAlignment}`,
      hasIconOnly && isSelected && kind === "ghost" && "bx--btn--selected",
      $$restProps.class
    ].filter(Boolean).join(" ")
  };
  if (skeleton) {
    $$payload.out += "<!--[-->";
    ButtonSkeleton($$payload, spread_props([
      { href, size },
      $$restProps,
      { style: hasIconOnly && "width: 3rem;" }
    ]));
  } else {
    $$payload.out += "<!--[!-->";
    if (as) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", { props: buttonProps }, null);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      if (href && !disabled) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<a${spread_attributes({ ...buttonProps })}>`;
        if (hasIconOnly) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<span${attr("class", ["bx--assistive-text"].filter(Boolean).join(" "))}>${escape_html(iconDescription)}</span>`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--> <!---->`;
        slot($$payload, $$props, "default", {}, null);
        $$payload.out += `<!----> `;
        if ($$slots.icon) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<!---->`;
          slot(
            $$payload,
            $$props,
            "icon",
            spread_props([
              {
                style: hasIconOnly ? "margin-left: 0" : void 0
              },
              iconProps
            ]),
            null
          );
          $$payload.out += `<!---->`;
        } else {
          $$payload.out += "<!--[!-->";
          if (icon) {
            $$payload.out += "<!--[-->";
            $$payload.out += `<!---->`;
            icon?.($$payload, spread_props([
              {
                style: hasIconOnly ? "margin-left: 0" : void 0
              },
              iconProps
            ]));
            $$payload.out += `<!---->`;
          } else {
            $$payload.out += "<!--[!-->";
          }
          $$payload.out += `<!--]-->`;
        }
        $$payload.out += `<!--]--></a>`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<button${spread_attributes({ ...buttonProps })}>`;
        if (hasIconOnly) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<span${attr("class", ["bx--assistive-text"].filter(Boolean).join(" "))}>${escape_html(iconDescription)}</span>`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--> <!---->`;
        slot($$payload, $$props, "default", {}, null);
        $$payload.out += `<!----> `;
        if ($$slots.icon) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<!---->`;
          slot(
            $$payload,
            $$props,
            "icon",
            spread_props([
              {
                style: hasIconOnly ? "margin-left: 0" : void 0
              },
              iconProps
            ]),
            null
          );
          $$payload.out += `<!---->`;
        } else {
          $$payload.out += "<!--[!-->";
          if (icon) {
            $$payload.out += "<!--[-->";
            $$payload.out += `<!---->`;
            icon?.($$payload, spread_props([
              {
                style: hasIconOnly ? "margin-left: 0" : void 0
              },
              iconProps
            ]));
            $$payload.out += `<!---->`;
          } else {
            $$payload.out += "<!--[!-->";
          }
          $$payload.out += `<!--]-->`;
        }
        $$payload.out += `<!--]--></button>`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    kind,
    size,
    expressive,
    isSelected,
    icon,
    iconDescription,
    tooltipAlignment,
    tooltipPosition,
    as,
    skeleton,
    disabled,
    href,
    tabindex,
    type,
    ref
  });
  pop();
}
function WarningFilled($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["size", "title"]);
  push();
  let labelled, attributes;
  let size = fallback($$props["size"], 16);
  let title = fallback($$props["title"], void 0);
  labelled = $$sanitized_props["aria-label"] || $$sanitized_props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$sanitized_props["tabindex"]) === 0 ? true : void 0
  };
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      preserveAspectRatio: "xMidYMid meet",
      width: size,
      height: size,
      ...attributes,
      ...$$restProps
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title>${escape_html(title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25	c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"></path><path fill="none" d="M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22	C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z" data-icon-path="inner-path" opacity="0"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
function WarningAltFilled($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["size", "title"]);
  push();
  let labelled, attributes;
  let size = fallback($$props["size"], 16);
  let title = fallback($$props["title"], void 0);
  labelled = $$sanitized_props["aria-label"] || $$sanitized_props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$sanitized_props["tabindex"]) === 0 ? true : void 0
  };
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      preserveAspectRatio: "xMidYMid meet",
      width: size,
      height: size,
      ...attributes,
      ...$$restProps
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title>${escape_html(title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill="none" d="M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z" data-icon-path="inner-path"></path><path d="M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"></path><path d="M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
function Close($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["size", "title"]);
  push();
  let labelled, attributes;
  let size = fallback($$props["size"], 16);
  let title = fallback($$props["title"], void 0);
  labelled = $$sanitized_props["aria-label"] || $$sanitized_props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$sanitized_props["tabindex"]) === 0 ? true : void 0
  };
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      preserveAspectRatio: "xMidYMid meet",
      width: size,
      height: size,
      ...attributes,
      ...$$restProps
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title>${escape_html(title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
const shouldRenderHamburgerMenu = writable(false);
const isSideNavCollapsed = writable(false);
const isSideNavRail = writable(false);
function Content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["id"]);
  var $$store_subs;
  let unsetLeftMargin;
  let id = fallback($$props["id"], "main-content");
  unsetLeftMargin = store_get($$store_subs ??= {}, "$isSideNavCollapsed", isSideNavCollapsed) && !store_get($$store_subs ??= {}, "$isSideNavRail", isSideNavRail);
  $$payload.out += `<main${spread_attributes({ id, ...$$restProps }, { "bx--content": true }, { "margin-left": unsetLeftMargin ? 0 : void 0 })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { id });
}

export { Button as B, Content as C, WarningFilled as W, Close as a, WarningAltFilled as b, shouldRenderHamburgerMenu as s };
//# sourceMappingURL=Content-DDlM3xGp.js.map
