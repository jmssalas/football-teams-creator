import { T as copy_payload, V as assign_payload, v as push, W as fallback, X as bind_props, x as pop, Y as sanitize_slots, Z as rest_props, _ as slot, $ as spread_props, a0 as sanitize_props, a1 as attr, a2 as store_get, a3 as spread_attributes, a4 as escape_html, a5 as unsubscribe_stores, w as setContext, a6 as add_styles, a7 as ensure_array_like, a8 as getContext, a9 as stringify } from './index-9fQtdOsf.js';
import { w as writable } from './index3-B3IIhYL9.js';
import { C as Content, a as Close, s as shouldRenderHamburgerMenu, W as WarningFilled, b as WarningAltFilled, B as Button } from './Content-DDlM3xGp.js';

function ChevronDown($$payload, $$props) {
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
  $$payload.out += `<!--]--><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
function LocalStorage($$payload, $$props) {
  push();
  let key = fallback($$props["key"], "local-storage-key");
  let value = fallback($$props["value"], "");
  function clearItem() {
    localStorage.removeItem(key);
  }
  function clearAll() {
    localStorage.clear();
  }
  bind_props($$props, { key, value, clearItem, clearAll });
  pop();
}
function Select($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "selected",
    "size",
    "inline",
    "light",
    "disabled",
    "id",
    "name",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "noLabel",
    "labelText",
    "hideLabel",
    "ref",
    "required"
  ]);
  push();
  var $$store_subs;
  let errorId;
  let selected = fallback($$props["selected"], void 0);
  let size = fallback($$props["size"], void 0);
  let inline = fallback($$props["inline"], false);
  let light = fallback($$props["light"], false);
  let disabled = fallback($$props["disabled"], false);
  let id = fallback($$props["id"], () => "ccs-" + Math.random().toString(36), true);
  let name = fallback($$props["name"], void 0);
  let invalid = fallback($$props["invalid"], false);
  let invalidText = fallback($$props["invalidText"], "");
  let warn = fallback($$props["warn"], false);
  let warnText = fallback($$props["warnText"], "");
  let helperText = fallback($$props["helperText"], "");
  let noLabel = fallback($$props["noLabel"], false);
  let labelText = fallback($$props["labelText"], "");
  let hideLabel = fallback($$props["hideLabel"], false);
  let ref = fallback($$props["ref"], null);
  let required = fallback($$props["required"], false);
  const selectedValue = writable(selected);
  const defaultSelectId = writable(null);
  const defaultValue = writable(null);
  const itemTypesByValue = writable({});
  setContext("Select", {
    selectedValue,
    setDefaultValue: (id2, value) => {
      if (store_get($$store_subs ??= {}, "$defaultValue", defaultValue) === null) {
        defaultSelectId.set(id2);
        defaultValue.set(value);
      } else {
        if (store_get($$store_subs ??= {}, "$defaultSelectId", defaultSelectId) === id2) {
          selectedValue.set(value);
        }
      }
      itemTypesByValue.update((types) => ({ ...types, [value]: typeof value }));
    }
  });
  errorId = `error-${id}`;
  selectedValue.set(selected ?? store_get($$store_subs ??= {}, "$defaultValue", defaultValue));
  $$payload.out += `<div${spread_attributes({ ...$$restProps }, { "bx--form-item": true })}><div${attr("class", [
    "bx--select",
    inline ? "bx--select--inline" : "",
    light ? "bx--select--light" : "",
    invalid ? "bx--select--invalid" : "",
    disabled ? "bx--select--disabled" : "",
    warn ? "bx--select--warning" : ""
  ].filter(Boolean).join(" "))}>`;
  if (!noLabel) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<label${attr("for", id)}${attr("class", [
      "bx--label",
      hideLabel ? "bx--visually-hidden" : "",
      disabled ? "bx--label--disabled" : ""
    ].filter(Boolean).join(" "))}><!---->`;
    slot($$payload, $$props, "labelText", {}, () => {
      $$payload.out += `${escape_html(labelText)}`;
    });
    $$payload.out += `<!----></label>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (inline) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", ["bx--select-input--inline__wrapper"].filter(Boolean).join(" "))}><div${attr("data-invalid", invalid || void 0)}${attr("class", ["bx--select-input__wrapper"].filter(Boolean).join(" "))}><select${attr("aria-describedby", invalid ? errorId : void 0)}${attr("aria-invalid", invalid || void 0)}${attr("disabled", disabled || void 0, true)}${attr("required", required || void 0, true)}${attr("id", id)}${attr("name", name)}${attr("class", [
      "bx--select-input",
      size === "sm" ? "bx--select-input--sm" : "",
      size === "xl" ? "bx--select-input--xl" : ""
    ].filter(Boolean).join(" "))}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></select> `;
    ChevronDown($$payload, { class: "bx--select__arrow" });
    $$payload.out += `<!----> `;
    if (invalid) {
      $$payload.out += "<!--[-->";
      WarningFilled($$payload, { class: "bx--select__invalid-icon" });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> `;
    if (invalid) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("id", errorId)}${attr("class", ["bx--form-requirement"].filter(Boolean).join(" "))}>${escape_html(invalidText)}</div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> `;
    if (!invalid && !warn && helperText) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("class", [
        "bx--form__helper-text",
        disabled ? "bx--form__helper-text--disabled" : ""
      ].filter(Boolean).join(" "))}>${escape_html(helperText)}</div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (!inline) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("data-invalid", invalid || void 0)}${attr("class", ["bx--select-input__wrapper"].filter(Boolean).join(" "))}><select${attr("id", id)}${attr("name", name)}${attr("aria-describedby", invalid ? errorId : void 0)}${attr("disabled", disabled || void 0, true)}${attr("required", required || void 0, true)}${attr("aria-invalid", invalid || void 0)}${attr("class", [
      "bx--select-input",
      size === "sm" ? "bx--select-input--sm" : "",
      size === "xl" ? "bx--select-input--xl" : ""
    ].filter(Boolean).join(" "))}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></select> `;
    ChevronDown($$payload, { class: "bx--select__arrow" });
    $$payload.out += `<!----> `;
    if (invalid) {
      $$payload.out += "<!--[-->";
      WarningFilled($$payload, { class: "bx--select__invalid-icon" });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (!invalid && warn) {
      $$payload.out += "<!--[-->";
      WarningAltFilled($$payload, {
        class: "bx--select__invalid-icon bx--select__invalid-icon--warning"
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> `;
    if (!invalid && helperText) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("class", [
        "bx--form__helper-text",
        disabled ? "bx--form__helper-text--disabled" : ""
      ].filter(Boolean).join(" "))}>${escape_html(helperText)}</div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (invalid) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("id", errorId)}${attr("class", ["bx--form-requirement"].filter(Boolean).join(" "))}>${escape_html(invalidText)}</div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (!invalid && warn) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("id", errorId)}${attr("class", ["bx--form-requirement"].filter(Boolean).join(" "))}>${escape_html(warnText)}</div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    selected,
    size,
    inline,
    light,
    disabled,
    id,
    name,
    invalid,
    invalidText,
    warn,
    warnText,
    helperText,
    noLabel,
    labelText,
    hideLabel,
    ref,
    required
  });
  pop();
}
function SelectItem($$payload, $$props) {
  push();
  let value = fallback($$props["value"], "");
  let text = fallback($$props["text"], "");
  let hidden = fallback($$props["hidden"], false);
  let disabled = fallback($$props["disabled"], false);
  let className = fallback($$props["class"], void 0);
  let style = fallback($$props["style"], void 0);
  const id = "ccs-" + Math.random().toString(36);
  const ctx = getContext("Select") || getContext("TimePickerSelect");
  let selected = false;
  ctx.selectedValue.subscribe((currentValue) => {
    selected = currentValue === value;
  });
  ctx?.setDefaultValue?.(id, value);
  $$payload.out += `<option${attr("value", value)}${attr("disabled", disabled, true)}${attr("hidden", hidden, true)}${attr("selected", selected, true)}${attr("class", `${stringify(className)} ${stringify(["bx--select-option"].filter(Boolean).join(" "))}`)}${attr("style", style)}>${escape_html(text || value)}</option>`;
  bind_props($$props, {
    value,
    text,
    hidden,
    disabled,
    class: className,
    style
  });
  pop();
}
function Toggle($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "size",
    "toggled",
    "disabled",
    "labelA",
    "labelB",
    "labelText",
    "hideLabel",
    "id",
    "name"
  ]);
  push();
  let size = fallback($$props["size"], "default");
  let toggled = fallback($$props["toggled"], false);
  let disabled = fallback($$props["disabled"], false);
  let labelA = fallback($$props["labelA"], "Off");
  let labelB = fallback($$props["labelB"], "On");
  let labelText = fallback($$props["labelText"], "");
  let hideLabel = fallback($$props["hideLabel"], false);
  let id = fallback($$props["id"], () => "ccs-" + Math.random().toString(36), true);
  let name = fallback($$props["name"], void 0);
  $$payload.out += `<div${spread_attributes({ ...$$restProps }, { "bx--form-item": true }, { "user-select": "none" })}><input role="switch" type="checkbox"${attr("checked", toggled, true)}${attr("disabled", disabled, true)}${attr("id", id)}${attr("name", name)}${attr("class", [
    "bx--toggle-input",
    size === "sm" ? "bx--toggle-input--small" : ""
  ].filter(Boolean).join(" "))}> <label${attr("aria-label", labelText ? void 0 : $$sanitized_props["aria-label"] || "Toggle")}${attr("for", id)}${attr("class", ["bx--toggle-input__label"].filter(Boolean).join(" "))}><span${attr("class", [hideLabel ? "bx--visually-hidden" : ""].filter(Boolean).join(" "))}><!---->`;
  slot($$payload, $$props, "labelText", {}, () => {
    $$payload.out += `${escape_html(labelText)}`;
  });
  $$payload.out += `<!----></span> <span${add_styles({ "margin-top": hideLabel ? 0 : void 0 })}${attr("class", ["bx--toggle__switch"].filter(Boolean).join(" "))}><span aria-hidden="true"${attr("class", ["bx--toggle__text--off"].filter(Boolean).join(" "))}><!---->`;
  slot($$payload, $$props, "labelA", {}, () => {
    $$payload.out += `${escape_html(labelA)}`;
  });
  $$payload.out += `<!----></span> <span aria-hidden="true"${attr("class", ["bx--toggle__text--on"].filter(Boolean).join(" "))}><!---->`;
  slot($$payload, $$props, "labelB", {}, () => {
    $$payload.out += `${escape_html(labelB)}`;
  });
  $$payload.out += `<!----></span></span></label></div>`;
  bind_props($$props, {
    size,
    toggled,
    disabled,
    labelA,
    labelB,
    labelText,
    hideLabel,
    id,
    name
  });
  pop();
}
function Theme($$payload, $$props) {
  push();
  let theme = fallback($$props["theme"], "white");
  let tokens = fallback($$props["tokens"], () => ({}), true);
  let persist = fallback($$props["persist"], false);
  let persistKey = fallback($$props["persistKey"], "theme");
  let render = fallback($$props["render"], void 0);
  let toggle = fallback(
    $$props["toggle"],
    () => ({
      themes: ["white", "g100"],
      labelA: "",
      labelB: "",
      labelText: "Dark mode",
      hideLabel: false
    }),
    true
  );
  const themes = {
    white: "White",
    g10: "Gray 10",
    g80: "Gray 80",
    g90: "Gray 90",
    g100: "Gray 100"
  };
  const themeKeys = Object.keys(themes);
  let select = fallback(
    $$props["select"],
    () => ({
      themes: themeKeys,
      labelText: "Themes",
      hideLabel: false
    }),
    true
  );
  if (typeof window !== "undefined") {
    Object.entries(tokens).forEach(([token, value]) => {
      document.documentElement.style.setProperty(`--cds-${token}`, value);
    });
    if (theme in themes) {
      document.documentElement.setAttribute("theme", theme);
    } else {
      console.warn(`[Theme.svelte] invalid theme "${theme}". Value must be one of: ${JSON.stringify(Object.keys(themes))}`);
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    if (persist) {
      $$payload2.out += "<!--[-->";
      LocalStorage($$payload2, {
        get value() {
          return theme;
        },
        set value($$value) {
          theme = $$value;
          $$settled = false;
        },
        key: persistKey
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (render === "toggle") {
      $$payload2.out += "<!--[-->";
      Toggle($$payload2, spread_props([
        toggle,
        { toggled: theme === toggle.themes[1] }
      ]));
    } else {
      $$payload2.out += "<!--[!-->";
      if (render === "select") {
        $$payload2.out += "<!--[-->";
        Select($$payload2, spread_props([
          select,
          {
            get selected() {
              return theme;
            },
            set selected($$value) {
              theme = $$value;
              $$settled = false;
            },
            children: ($$payload3) => {
              const each_array = ensure_array_like(select.themes);
              $$payload3.out += `<!--[-->`;
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let theme2 = each_array[$$index];
                SelectItem($$payload3, { value: theme2, text: themes[theme2] });
              }
              $$payload3.out += `<!--]-->`;
            },
            $$slots: { default: true }
          }
        ]));
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]--> <!---->`;
    slot($$payload2, $$props, "default", { theme }, null);
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    theme,
    tokens,
    persist,
    persistKey,
    render,
    toggle,
    select
  });
  pop();
}
function Menu($$payload, $$props) {
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
  $$payload.out += `<!--]--><path d="M4 6H28V8H4zM4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4z"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
function HamburgerMenu($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "ariaLabel",
    "isOpen",
    "iconMenu",
    "iconClose",
    "ref"
  ]);
  let ariaLabel = fallback($$props["ariaLabel"], void 0);
  let isOpen = fallback($$props["isOpen"], false);
  let iconMenu = fallback($$props["iconMenu"], Menu);
  let iconClose = fallback($$props["iconClose"], Close);
  let ref = fallback($$props["ref"], null);
  $$payload.out += `<button${spread_attributes(
    {
      type: "button",
      title: ariaLabel,
      "aria-label": ariaLabel,
      ...$$restProps
    },
    {
      "bx--header__action": true,
      "bx--header__menu-trigger": true,
      "bx--header__menu-toggle": true
    }
  )}><!---->`;
  (isOpen ? iconClose : iconMenu)?.($$payload, { size: 20 });
  $$payload.out += `<!----></button>`;
  bind_props($$props, {
    ariaLabel,
    isOpen,
    iconMenu,
    iconClose,
    ref
  });
}
function Header($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "expandedByDefault",
    "isSideNavOpen",
    "uiShellAriaLabel",
    "href",
    "company",
    "platformName",
    "persistentHamburgerMenu",
    "expansionBreakpoint",
    "ref",
    "iconMenu",
    "iconClose"
  ]);
  push();
  var $$store_subs;
  let ariaLabel;
  let expandedByDefault = fallback($$props["expandedByDefault"], true);
  let isSideNavOpen = fallback($$props["isSideNavOpen"], false);
  let uiShellAriaLabel = fallback($$props["uiShellAriaLabel"], void 0);
  let href = fallback($$props["href"], void 0);
  let company = fallback($$props["company"], void 0);
  let platformName = fallback($$props["platformName"], "");
  let persistentHamburgerMenu = fallback($$props["persistentHamburgerMenu"], false);
  let expansionBreakpoint = fallback($$props["expansionBreakpoint"], 1056);
  let ref = fallback($$props["ref"], null);
  let iconMenu = fallback($$props["iconMenu"], Menu);
  let iconClose = fallback($$props["iconClose"], Close);
  let winWidth = void 0;
  isSideNavOpen = expandedByDefault && winWidth >= expansionBreakpoint && !persistentHamburgerMenu;
  ariaLabel = company ? `${company} ` : "" + (uiShellAriaLabel || $$sanitized_props["aria-label"] || platformName);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<header${attr("aria-label", ariaLabel)}${attr("class", ["bx--header"].filter(Boolean).join(" "))}><!---->`;
    slot($$payload2, $$props, "skip-to-content", {}, null);
    $$payload2.out += `<!----> `;
    if (store_get($$store_subs ??= {}, "$shouldRenderHamburgerMenu", shouldRenderHamburgerMenu) && winWidth < expansionBreakpoint || persistentHamburgerMenu) {
      $$payload2.out += "<!--[-->";
      HamburgerMenu($$payload2, {
        get isOpen() {
          return isSideNavOpen;
        },
        set isOpen($$value) {
          isSideNavOpen = $$value;
          $$settled = false;
        },
        iconClose,
        iconMenu
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <a${spread_attributes({ href, ...$$restProps }, { "bx--header__name": true })}>`;
    if (company || $$slots.company) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<span${attr("class", ["bx--header__name--prefix"].filter(Boolean).join(" "))}><!---->`;
      slot($$payload2, $$props, "company", {}, () => {
        $$payload2.out += `${escape_html(company)} `;
      });
      $$payload2.out += `<!----></span>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <!---->`;
    slot($$payload2, $$props, "platform", {}, () => {
      $$payload2.out += `${escape_html(platformName)}`;
    });
    $$payload2.out += `<!----></a> <!---->`;
    slot($$payload2, $$props, "default", {}, null);
    $$payload2.out += `<!----></header>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    expandedByDefault,
    isSideNavOpen,
    uiShellAriaLabel,
    href,
    company,
    platformName,
    persistentHamburgerMenu,
    expansionBreakpoint,
    ref,
    iconMenu,
    iconClose
  });
  pop();
}
function HeaderUtilities($$payload, $$props) {
  $$payload.out += `<div${attr("class", ["bx--header__global"].filter(Boolean).join(" "))}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
}
function SkipToContent($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href", "tabindex"]);
  let href = fallback($$props["href"], "#main-content");
  let tabindex = fallback($$props["tabindex"], "0");
  $$payload.out += `<a${spread_attributes({ href, tabindex, ...$$restProps }, { "bx--skip-to-content": true })}><!---->`;
  slot($$payload, $$props, "default", {}, () => {
    $$payload.out += `Skip to main content`;
  });
  $$payload.out += `<!----></a>`;
  bind_props($$props, { href, tabindex });
}
function HeaderGlobalAction($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["isActive", "icon", "ref"]);
  push();
  let buttonClass;
  let isActive = fallback($$props["isActive"], false);
  let icon = fallback($$props["icon"], void 0);
  let ref = fallback($$props["ref"], null);
  buttonClass = [
    "bx--header__action",
    isActive && " bx--header__action--active",
    $$restProps.class
  ].filter(Boolean).join(" ");
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Button($$payload2, spread_props([
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      },
      $$restProps,
      {
        class: buttonClass,
        $$slots: {
          icon: ($$payload3) => {
            $$payload3.out += `<!---->`;
            icon?.($$payload3, { slot: "icon", size: 20 });
            $$payload3.out += `<!---->`;
          }
        }
      }
    ]));
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { isActive, icon, ref });
  pop();
}
function BrightnessContrast($$payload, $$props) {
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
  $$payload.out += `<!--]--><path d="M15 2H17V5H15zM27 15H30V17H27zM15 27H17V30H15zM2 15H5V17H2z"></path><path d="M6.22 5.73H8.219999999999999V8.73H6.22z" transform="rotate(-45 7.227 7.236)"></path><path d="M23.27 6.23H26.27V8.23H23.27z" transform="rotate(-45 24.766 7.232)"></path><path d="M23.77 23.27H25.77V26.27H23.77z" transform="rotate(-45 24.77 24.77)"></path><path d="M5.47 25.13L7.59 23 9 24.42 6.88 26.54 5.47 25.13zM16 8a8 8 0 108 8A8 8 0 0016 8zm0 14a6 6 0 010-12z"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
function _layout($$payload, $$props) {
  let theme = "g90";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Theme($$payload2, {
      get theme() {
        return theme;
      },
      set theme($$value) {
        theme = $$value;
        $$settled = false;
      },
      persist: true
    });
    $$payload2.out += `<!----> `;
    Header($$payload2, {
      company: "Pozo Alcón",
      platformName: "Peña de Fútbol",
      children: ($$payload3) => {
        HeaderUtilities($$payload3, {
          children: ($$payload4) => {
            HeaderGlobalAction($$payload4, {
              iconDescription: theme === "white" ? "Dark" : "Bright",
              "aria-label": "Theme",
              icon: BrightnessContrast
            });
          },
          $$slots: { default: true }
        });
      },
      $$slots: {
        default: true,
        "skip-to-content": ($$payload3) => {
          {
            SkipToContent($$payload3, {});
          }
        }
      }
    });
    $$payload2.out += `<!----> `;
    Content($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->`;
        slot($$payload3, $$props, "default", {}, null);
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-CTlpY_uN.js.map
