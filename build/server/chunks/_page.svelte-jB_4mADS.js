import { X as copy_payload, Y as assign_payload, t as pop, a0 as rest_props, p as push, Z as fallback, ac as store_set, a6 as spread_attributes, a4 as attr, a2 as slot, aa as ensure_array_like, _ as bind_props, a5 as store_get, a8 as unsubscribe_stores, a7 as escape_html, ad as stringify, $ as sanitize_slots, q as setContext, a3 as sanitize_props, ab as getContext, V as writable, a1 as spread_props, W as readable } from './index-B23-R4wG.js';
import './exports-CHdH9QCl.js';
import './state.svelte-B1x1JptK.js';
import { C as Close, B as Button, S as Select, a as SelectItem, W as WarningFilled, b as WarningAltFilled, i as isSideNavCollapsed, c as isSideNavRail } from './navStore-CaBMBYKV.js';

function ChevronRight($$payload, $$props) {
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
  $$payload.out += `<!--]--><path d="M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
function InlineCheckbox($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "checked",
    "indeterminate",
    "title",
    "id",
    "ref"
  ]);
  push();
  let checked = fallback($$props["checked"], false);
  let indeterminate = fallback($$props["indeterminate"], false);
  let title = fallback($$props["title"], void 0);
  let id = fallback($$props["id"], () => "ccs-" + Math.random().toString(36), true);
  let ref = fallback($$props["ref"], null);
  $$payload.out += `<div${attr("class", ["bx--checkbox--inline"].filter(Boolean).join(" "))}><input${spread_attributes(
    {
      type: "checkbox",
      checked: indeterminate ? false : checked,
      id,
      ...$$restProps,
      "aria-checked": indeterminate ? void 0 : checked
    },
    { "bx--checkbox": true }
  )}> <label${attr("for", id)}${attr("title", title)}${attr("aria-label", $$sanitized_props["aria-label"])}${attr("class", ["bx--checkbox-label"].filter(Boolean).join(" "))}></label></div>`;
  bind_props($$props, { checked, indeterminate, title, id, ref });
  pop();
}
function RadioButton($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "value",
    "checked",
    "disabled",
    "required",
    "labelPosition",
    "labelText",
    "hideLabel",
    "id",
    "name",
    "ref"
  ]);
  push();
  var $$store_subs;
  let value = fallback($$props["value"], "");
  let checked = fallback($$props["checked"], false);
  let disabled = fallback($$props["disabled"], false);
  let required = fallback($$props["required"], false);
  let labelPosition = fallback($$props["labelPosition"], "right");
  let labelText = fallback($$props["labelText"], "");
  let hideLabel = fallback($$props["hideLabel"], false);
  let id = fallback($$props["id"], () => "ccs-" + Math.random().toString(36), true);
  let name = fallback($$props["name"], void 0);
  let ref = fallback($$props["ref"], null);
  const {
    add,
    update,
    selectedValue,
    groupName,
    groupRequired
  } = getContext("RadioButtonGroup") ?? {
    groupName: readable(void 0),
    groupRequired: readable(void 0),
    selectedValue: readable(checked ? value : void 0)
  };
  if (add) {
    add({ id, checked, disabled, value });
  }
  checked = store_get($$store_subs ??= {}, "$selectedValue", selectedValue) === value;
  $$payload.out += `<div${spread_attributes({ ...$$restProps }, {
    "bx--radio-button-wrapper": true,
    "bx--radio-button-wrapper--label-left": labelPosition === "left"
  })}><input type="radio"${attr("id", id)}${attr("name", store_get($$store_subs ??= {}, "$groupName", groupName) ?? name)}${attr("checked", checked, true)}${attr("disabled", disabled, true)}${attr("required", store_get($$store_subs ??= {}, "$groupRequired", groupRequired) ?? required, true)}${attr("value", value)}${attr("class", ["bx--radio-button"].filter(Boolean).join(" "))}> <label${attr("for", id)}${attr("class", ["bx--radio-button__label"].filter(Boolean).join(" "))}><span${attr("class", ["bx--radio-button__appearance"].filter(Boolean).join(" "))}></span> `;
  if (labelText || $$slots.labelText) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span${attr("class", [hideLabel ? "bx--visually-hidden" : ""].filter(Boolean).join(" "))}><!---->`;
    slot($$payload, $$props, "labelText", {}, () => {
      $$payload.out += `${escape_html(labelText)}`;
    });
    $$payload.out += `<!----></span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></label></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    value,
    checked,
    disabled,
    required,
    labelPosition,
    labelText,
    hideLabel,
    id,
    name,
    ref
  });
  pop();
}
function Table($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "size",
    "zebra",
    "useStaticWidth",
    "sortable",
    "stickyHeader",
    "tableStyle"
  ]);
  let size = fallback($$props["size"], void 0);
  let zebra = fallback($$props["zebra"], false);
  let useStaticWidth = fallback($$props["useStaticWidth"], false);
  let sortable = fallback($$props["sortable"], false);
  let stickyHeader = fallback($$props["stickyHeader"], false);
  let tableStyle = fallback($$props["tableStyle"], void 0);
  if (stickyHeader) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<section${spread_attributes({ ...$$restProps }, { "bx--data-table_inner-container": true })}><table${attr("style", tableStyle)}${attr("class", [
      "bx--data-table",
      size === "compact" ? "bx--data-table--compact" : "",
      size === "short" ? "bx--data-table--short" : "",
      size === "tall" ? "bx--data-table--tall" : "",
      size === "medium" ? "bx--data-table--md" : "",
      sortable ? "bx--data-table--sort" : "",
      zebra ? "bx--data-table--zebra" : "",
      useStaticWidth ? "bx--data-table--static" : "",
      stickyHeader ? "bx--data-table--sticky-header" : ""
    ].filter(Boolean).join(" "))}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></table></section>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<table${spread_attributes({ ...$$restProps, style: tableStyle }, {
      "bx--data-table": true,
      "bx--data-table--compact": size === "compact",
      "bx--data-table--short": size === "short",
      "bx--data-table--tall": size === "tall",
      "bx--data-table--md": size === "medium",
      "bx--data-table--sort": sortable,
      "bx--data-table--zebra": zebra,
      "bx--data-table--static": useStaticWidth,
      "bx--data-table--sticky-header": stickyHeader
    })}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></table>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    size,
    zebra,
    useStaticWidth,
    sortable,
    stickyHeader,
    tableStyle
  });
}
function TableBody($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  $$payload.out += `<tbody${spread_attributes({ "aria-live": "polite", ...$$restProps })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></tbody>`;
}
function TableCell($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  $$payload.out += `<td${spread_attributes({ ...$$restProps })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></td>`;
}
function TableContainer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "title",
    "description",
    "stickyHeader",
    "useStaticWidth"
  ]);
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  let stickyHeader = fallback($$props["stickyHeader"], false);
  let useStaticWidth = fallback($$props["useStaticWidth"], false);
  $$payload.out += `<div${spread_attributes({ ...$$restProps }, {
    "bx--data-table-container": true,
    "bx--data-table-container--static": useStaticWidth,
    "bx--data-table--max-width": stickyHeader
  })}>`;
  if (title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", ["bx--data-table-header"].filter(Boolean).join(" "))}><h4${attr("class", ["bx--data-table-header__title"].filter(Boolean).join(" "))}>${escape_html(title)}</h4> <p${attr("class", ["bx--data-table-header__description"].filter(Boolean).join(" "))}>${escape_html(description)}</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, {
    title,
    description,
    stickyHeader,
    useStaticWidth
  });
}
function TableHead($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  $$payload.out += `<thead${spread_attributes({ ...$$restProps })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></thead>`;
}
function ArrowUp($$payload, $$props) {
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
  $$payload.out += `<!--]--><path d="M16 4L6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
function ArrowsVertical($$payload, $$props) {
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
  $$payload.out += `<!--]--><path d="M27.6 20.6L24 24.2 24 4 22 4 22 24.2 18.4 20.6 17 22 23 28 29 22zM9 4L3 10 4.4 11.4 8 7.8 8 28 10 28 10 7.8 13.6 11.4 15 10z"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
function TableHeader($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "sortable",
    "sortDirection",
    "active",
    "scope",
    "translateWithId",
    "id"
  ]);
  push();
  let ariaLabel;
  let sortable = fallback($$props["sortable"], false);
  let sortDirection = fallback($$props["sortDirection"], "none");
  let active = fallback($$props["active"], false);
  let scope = fallback($$props["scope"], "col");
  let translateWithId = fallback($$props["translateWithId"], () => "");
  let id = fallback($$props["id"], () => "ccs-" + Math.random().toString(36), true);
  ariaLabel = translateWithId();
  if (sortable) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<th${spread_attributes({
      "aria-sort": active ? sortDirection : "none",
      scope,
      "data-header": id,
      ...$$restProps
    })}><button type="button"${attr("class", [
      "bx--table-sort",
      active ? "bx--table-sort--active" : "",
      active && sortDirection === "descending" ? "bx--table-sort--ascending" : ""
    ].filter(Boolean).join(" "))}><div${attr("class", ["bx--table-header-label"].filter(Boolean).join(" "))}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></div> `;
    ArrowUp($$payload, {
      size: 20,
      "aria-label": ariaLabel,
      class: "bx--table-sort__icon"
    });
    $$payload.out += `<!----> `;
    ArrowsVertical($$payload, {
      size: 20,
      "aria-label": ariaLabel,
      class: "bx--table-sort__icon-unsorted"
    });
    $$payload.out += `<!----></button></th>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<th${spread_attributes({ scope, "data-header": id, ...$$restProps })}><div${attr("class", ["bx--table-header-label"].filter(Boolean).join(" "))}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></div></th>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    sortable,
    sortDirection,
    active,
    scope,
    translateWithId,
    id
  });
  pop();
}
function TableRow($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  $$payload.out += `<tr${spread_attributes({ ...$$restProps })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></tr>`;
}
function DataTable($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "headers",
    "rows",
    "size",
    "title",
    "description",
    "zebra",
    "sortable",
    "sortKey",
    "sortDirection",
    "expandable",
    "batchExpansion",
    "expandedRowIds",
    "nonExpandableRowIds",
    "radio",
    "selectable",
    "batchSelection",
    "selectedRowIds",
    "nonSelectableRowIds",
    "stickyHeader",
    "useStaticWidth",
    "pageSize",
    "page"
  ]);
  push();
  var $$store_subs;
  let originalRows, expandedRows, rowIds, expandableRowIds, selectableRowIds, selectAll, indeterminate, headerKeys, tableCellsByRowId, sortedRows, ascending, sorting, sortingHeader, displayedRows, displayedSortedRows, hasCustomHeaderWidth;
  let headers = fallback($$props["headers"], () => [], true);
  let rows = fallback($$props["rows"], () => [], true);
  let size = fallback($$props["size"], void 0);
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  let zebra = fallback($$props["zebra"], false);
  let sortable = fallback($$props["sortable"], false);
  let sortKey = fallback($$props["sortKey"], null);
  let sortDirection = fallback($$props["sortDirection"], "none");
  let expandable = fallback($$props["expandable"], false);
  let batchExpansion = fallback($$props["batchExpansion"], false);
  let expandedRowIds = fallback($$props["expandedRowIds"], () => [], true);
  let nonExpandableRowIds = fallback($$props["nonExpandableRowIds"], () => [], true);
  let radio = fallback($$props["radio"], false);
  let selectable = fallback($$props["selectable"], false);
  let batchSelection = fallback($$props["batchSelection"], false);
  let selectedRowIds = fallback($$props["selectedRowIds"], () => [], true);
  let nonSelectableRowIds = fallback($$props["nonSelectableRowIds"], () => [], true);
  let stickyHeader = fallback($$props["stickyHeader"], false);
  let useStaticWidth = fallback($$props["useStaticWidth"], false);
  let pageSize = fallback($$props["pageSize"], 0);
  let page = fallback($$props["page"], 0);
  const batchSelectedIds = writable(false);
  const tableRows = writable(rows);
  const resolvePath = (object, path) => {
    if (path in object) return object[path];
    return path.split(/[\.\[\]\'\"]/).filter((p) => p).reduce((o, p) => o && typeof o === "object" ? o[p] : o, object);
  };
  setContext("DataTable", {
    batchSelectedIds,
    tableRows,
    resetSelectedRowIds: () => {
      selectAll = false;
      selectedRowIds = [];
      if (refSelectAll) refSelectAll.checked = false;
    },
    filterRows: (searchValue, customFilter) => {
      const value = searchValue.trim().toLowerCase();
      if (value.length === 0) {
        tableRows.set(originalRows);
        return originalRows.map((row) => row.id);
      }
      let filteredRows = [];
      if (typeof customFilter === "function") {
        filteredRows = originalRows.filter((row) => customFilter(row, value));
      } else {
        filteredRows = originalRows.filter((row) => {
          return Object.entries(row).filter(([key]) => key !== "id").some(([key, _value]) => {
            if (typeof _value === "string" || typeof _value === "number") {
              return (_value + "")?.toLowerCase().includes(value);
            }
          });
        });
      }
      tableRows.set(filteredRows);
      return filteredRows.map((row) => row.id);
    }
  });
  let expanded = false;
  let parentRowId = null;
  let refSelectAll = null;
  const getDisplayedRows = (rows2, page2, pageSize2) => page2 && pageSize2 ? rows2.slice((page2 - 1) * pageSize2, page2 * pageSize2) : rows2;
  const formatHeaderWidth = (header) => {
    const styles = [
      header.width && `width: ${header.width}`,
      header.minWidth && `min-width: ${header.minWidth}`
    ].filter(Boolean);
    if (styles.length === 0) return void 0;
    return styles.join(";");
  };
  originalRows = [...rows];
  headers.reduce((a, c) => ({ ...a, [c.key]: c.key }), {});
  expandedRows = expandedRowIds.reduce((a, id) => ({ ...a, [id]: true }), {});
  batchSelectedIds.set(selectedRowIds);
  store_set(tableRows, rows);
  rowIds = store_get($$store_subs ??= {}, "$tableRows", tableRows).map((row) => row.id);
  expandableRowIds = rowIds.filter((id) => !nonExpandableRowIds.includes(id));
  selectableRowIds = rowIds.filter((id) => !nonSelectableRowIds.includes(id));
  selectAll = selectableRowIds.length > 0 && selectedRowIds.length === selectableRowIds.length;
  indeterminate = selectedRowIds.length > 0 && selectedRowIds.length < selectableRowIds.length;
  if (batchExpansion) {
    expandable = true;
    expanded = expandedRowIds.length === expandableRowIds.length;
  }
  if (radio || batchSelection) selectable = true;
  headerKeys = headers.map(({ key }) => key);
  tableCellsByRowId = rows.reduce(
    (rows2, row) => {
      rows2[row.id] = headerKeys.map((key, index) => ({
        key,
        value: resolvePath(row, key),
        display: headers[index].display
      }));
      return rows2;
    },
    {}
  );
  sortedRows = [
    ...store_get($$store_subs ??= {}, "$tableRows", tableRows)
  ];
  ascending = sortDirection === "ascending";
  sorting = sortable && sortKey != null;
  sortingHeader = headers.find((header) => header.key === sortKey);
  if (sorting) {
    if (sortDirection === "none") {
      sortedRows = store_get($$store_subs ??= {}, "$tableRows", tableRows);
    } else {
      sortedRows = [
        ...store_get($$store_subs ??= {}, "$tableRows", tableRows)
      ].sort((a, b) => {
        const itemA = ascending ? resolvePath(a, sortKey) : resolvePath(b, sortKey);
        const itemB = ascending ? resolvePath(b, sortKey) : resolvePath(a, sortKey);
        if (sortingHeader?.sort) return sortingHeader.sort(itemA, itemB);
        if (typeof itemA === "number" && typeof itemB === "number") return itemA - itemB;
        if ([itemA, itemB].every((item) => !item && item !== 0)) return 0;
        if (!itemA && itemA !== 0) return ascending ? 1 : -1;
        if (!itemB && itemB !== 0) return ascending ? -1 : 1;
        return itemA.toString().localeCompare(itemB.toString(), "en", { numeric: true });
      });
    }
  }
  displayedRows = getDisplayedRows(store_get($$store_subs ??= {}, "$tableRows", tableRows), page, pageSize);
  displayedSortedRows = getDisplayedRows(sortedRows, page, pageSize);
  hasCustomHeaderWidth = headers.some((header) => header.width || header.minWidth);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    TableContainer($$payload2, spread_props([
      { useStaticWidth },
      $$restProps,
      {
        children: ($$payload3) => {
          if (title || $$slots.title || description || $$slots.description) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<div${attr("class", ["bx--data-table-header"].filter(Boolean).join(" "))}>`;
            if (title || $$slots.title) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<h4${attr("class", ["bx--data-table-header__title"].filter(Boolean).join(" "))}><!---->`;
              slot($$payload3, $$props, "title", {}, () => {
                $$payload3.out += `${escape_html(title)}`;
              });
              $$payload3.out += `<!----></h4>`;
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]--> `;
            if (description || $$slots.description) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<p${attr("class", ["bx--data-table-header__description"].filter(Boolean).join(" "))}><!---->`;
              slot($$payload3, $$props, "description", {}, () => {
                $$payload3.out += `${escape_html(description)}`;
              });
              $$payload3.out += `<!----></p>`;
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]--></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--> <!---->`;
          slot($$payload3, $$props, "default", {}, null);
          $$payload3.out += `<!----> `;
          Table($$payload3, {
            zebra,
            size,
            stickyHeader,
            sortable,
            useStaticWidth,
            tableStyle: hasCustomHeaderWidth && "table-layout: fixed",
            children: ($$payload4) => {
              TableHead($$payload4, {
                children: ($$payload5) => {
                  TableRow($$payload5, {
                    children: ($$payload6) => {
                      const each_array = ensure_array_like(headers);
                      if (expandable) {
                        $$payload6.out += "<!--[-->";
                        $$payload6.out += `<th scope="col"${attr("data-previous-value", expanded ? "collapsed" : void 0)}${attr("class", ["bx--table-expand"].filter(Boolean).join(" "))}>`;
                        if (batchExpansion) {
                          $$payload6.out += "<!--[-->";
                          $$payload6.out += `<button type="button"${attr("class", ["bx--table-expand__button"].filter(Boolean).join(" "))}>`;
                          ChevronRight($$payload6, { class: "bx--table-expand__svg" });
                          $$payload6.out += `<!----></button>`;
                        } else {
                          $$payload6.out += "<!--[!-->";
                        }
                        $$payload6.out += `<!--]--></th>`;
                      } else {
                        $$payload6.out += "<!--[!-->";
                      }
                      $$payload6.out += `<!--]--> `;
                      if (selectable && !batchSelection) {
                        $$payload6.out += "<!--[-->";
                        $$payload6.out += `<th scope="col"></th>`;
                      } else {
                        $$payload6.out += "<!--[!-->";
                      }
                      $$payload6.out += `<!--]--> `;
                      if (batchSelection && !radio) {
                        $$payload6.out += "<!--[-->";
                        $$payload6.out += `<th scope="col"${attr("class", ["bx--table-column-checkbox"].filter(Boolean).join(" "))}>`;
                        InlineCheckbox($$payload6, {
                          get ref() {
                            return refSelectAll;
                          },
                          set ref($$value) {
                            refSelectAll = $$value;
                            $$settled = false;
                          },
                          "aria-label": "Select all rows",
                          checked: selectAll,
                          indeterminate
                        });
                        $$payload6.out += `<!----></th>`;
                      } else {
                        $$payload6.out += "<!--[!-->";
                      }
                      $$payload6.out += `<!--]--> <!--[-->`;
                      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                        let header = each_array[$$index];
                        if (header.empty) {
                          $$payload6.out += "<!--[-->";
                          $$payload6.out += `<th scope="col"${attr("style", formatHeaderWidth(header))}></th>`;
                        } else {
                          $$payload6.out += "<!--[!-->";
                          TableHeader($$payload6, {
                            id: header.key,
                            style: formatHeaderWidth(header),
                            sortable: sortable && header.sort !== false,
                            sortDirection: sortKey === header.key ? sortDirection : "none",
                            active: sortKey === header.key,
                            children: ($$payload7) => {
                              $$payload7.out += `<!---->`;
                              slot($$payload7, $$props, "cell-header", { header }, () => {
                                $$payload7.out += `${escape_html(header.value)}`;
                              });
                              $$payload7.out += `<!---->`;
                            },
                            $$slots: { default: true }
                          });
                        }
                        $$payload6.out += `<!--]-->`;
                      }
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBody($$payload4, {
                children: ($$payload5) => {
                  const each_array_1 = ensure_array_like(sorting ? displayedSortedRows : displayedRows);
                  $$payload5.out += `<!--[-->`;
                  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
                    let row = each_array_1[i];
                    TableRow($$payload5, {
                      "data-row": row.id,
                      "data-parent-row": expandable ? true : void 0,
                      class: `${stringify(selectedRowIds.includes(row.id) ? "bx--data-table--selected" : "")} ${stringify(expandedRows[row.id] ? "bx--expandable-row" : "")} ${stringify(expandable ? "bx--parent-row" : "")} ${stringify(expandable && parentRowId === row.id ? "bx--expandable-row--hover" : "")}`,
                      children: ($$payload6) => {
                        const each_array_2 = ensure_array_like(tableCellsByRowId[row.id]);
                        if (expandable) {
                          $$payload6.out += "<!--[-->";
                          TableCell($$payload6, {
                            class: "bx--table-expand",
                            headers: "expand",
                            "data-previous-value": !nonExpandableRowIds.includes(row.id) && expandedRows[row.id] ? "collapsed" : void 0,
                            children: ($$payload7) => {
                              if (!nonExpandableRowIds.includes(row.id)) {
                                $$payload7.out += "<!--[-->";
                                $$payload7.out += `<button type="button"${attr("aria-label", expandedRows[row.id] ? "Collapse current row" : "Expand current row")}${attr("class", ["bx--table-expand__button"].filter(Boolean).join(" "))}>`;
                                ChevronRight($$payload7, { class: "bx--table-expand__svg" });
                                $$payload7.out += `<!----></button>`;
                              } else {
                                $$payload7.out += "<!--[!-->";
                              }
                              $$payload7.out += `<!--]-->`;
                            },
                            $$slots: { default: true }
                          });
                        } else {
                          $$payload6.out += "<!--[!-->";
                        }
                        $$payload6.out += `<!--]--> `;
                        if (selectable) {
                          $$payload6.out += "<!--[-->";
                          $$payload6.out += `<td${attr("class", [
                            "bx--table-column-checkbox",
                            radio ? "bx--table-column-radio" : ""
                          ].filter(Boolean).join(" "))}>`;
                          if (!nonSelectableRowIds.includes(row.id)) {
                            $$payload6.out += "<!--[-->";
                            if (radio) {
                              $$payload6.out += "<!--[-->";
                              RadioButton($$payload6, {
                                name: `select-row-${stringify(row.id)}`,
                                checked: selectedRowIds.includes(row.id)
                              });
                            } else {
                              $$payload6.out += "<!--[!-->";
                              InlineCheckbox($$payload6, {
                                name: `select-row-${stringify(row.id)}`,
                                checked: selectedRowIds.includes(row.id)
                              });
                            }
                            $$payload6.out += `<!--]-->`;
                          } else {
                            $$payload6.out += "<!--[!-->";
                          }
                          $$payload6.out += `<!--]--></td>`;
                        } else {
                          $$payload6.out += "<!--[!-->";
                        }
                        $$payload6.out += `<!--]--> <!--[-->`;
                        for (let j = 0, $$length2 = each_array_2.length; j < $$length2; j++) {
                          let cell = each_array_2[j];
                          if (headers[j].empty) {
                            $$payload6.out += "<!--[-->";
                            $$payload6.out += `<td${attr("class", [
                              headers[j].columnMenu ? "bx--table-column-menu" : ""
                            ].filter(Boolean).join(" "))}><!---->`;
                            slot($$payload6, $$props, "cell", { row, cell, rowIndex: i, cellIndex: j }, () => {
                              $$payload6.out += `${escape_html(cell.display ? cell.display(cell.value, row) : cell.value)}`;
                            });
                            $$payload6.out += `<!----></td>`;
                          } else {
                            $$payload6.out += "<!--[!-->";
                            TableCell($$payload6, {
                              children: ($$payload7) => {
                                $$payload7.out += `<!---->`;
                                slot($$payload7, $$props, "cell", { row, cell, rowIndex: i, cellIndex: j }, () => {
                                  $$payload7.out += `${escape_html(cell.display ? cell.display(cell.value, row) : cell.value)}`;
                                });
                                $$payload7.out += `<!---->`;
                              },
                              $$slots: { default: true }
                            });
                          }
                          $$payload6.out += `<!--]-->`;
                        }
                        $$payload6.out += `<!--]-->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!----> `;
                    if (expandable) {
                      $$payload5.out += "<!--[-->";
                      $$payload5.out += `<tr data-child-row=""${attr("class", ["bx--expandable-row"].filter(Boolean).join(" "))}>`;
                      if (expandedRows[row.id] && !nonExpandableRowIds.includes(row.id)) {
                        $$payload5.out += "<!--[-->";
                        TableCell($$payload5, {
                          colspan: selectable ? headers.length + 2 : headers.length + 1,
                          children: ($$payload6) => {
                            $$payload6.out += `<div${attr("class", ["bx--child-row-inner-container"].filter(Boolean).join(" "))}><!---->`;
                            slot($$payload6, $$props, "expanded-row", { row }, null);
                            $$payload6.out += `<!----></div>`;
                          },
                          $$slots: { default: true }
                        });
                      } else {
                        $$payload5.out += "<!--[!-->";
                      }
                      $$payload5.out += `<!--]--></tr>`;
                    } else {
                      $$payload5.out += "<!--[!-->";
                    }
                    $$payload5.out += `<!--]-->`;
                  }
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      }
    ]));
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    headers,
    rows,
    size,
    title,
    description,
    zebra,
    sortable,
    sortKey,
    sortDirection,
    expandable,
    batchExpansion,
    expandedRowIds,
    nonExpandableRowIds,
    radio,
    selectable,
    batchSelection,
    selectedRowIds,
    nonSelectableRowIds,
    stickyHeader,
    useStaticWidth,
    pageSize,
    page
  });
  pop();
}
function Toolbar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["size"]);
  push();
  let size = fallback($$props["size"], "default");
  const overflowVisible = writable(false);
  setContext("Toolbar", {
    overflowVisible,
    setOverflowVisible: (visible) => {
      overflowVisible.set(visible);
    }
  });
  $$payload.out += `<section${spread_attributes(
    {
      "aria-label": "data table toolbar",
      ...$$restProps
    },
    {
      "bx--table-toolbar": true,
      "bx--table-toolbar--small": size === "sm",
      "bx--table-toolbar--normal": size === "default"
    },
    { "z-index": 1 }
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></section>`;
  bind_props($$props, { size });
  pop();
}
function Modal($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "size",
    "open",
    "danger",
    "alert",
    "passiveModal",
    "modalHeading",
    "modalLabel",
    "modalAriaLabel",
    "iconDescription",
    "hasForm",
    "hasScrollingContent",
    "primaryButtonText",
    "primaryButtonDisabled",
    "primaryButtonIcon",
    "shouldSubmitOnEnter",
    "secondaryButtonText",
    "secondaryButtons",
    "selectorPrimaryFocus",
    "preventCloseOnClickOutside",
    "id",
    "ref"
  ]);
  push();
  let modalLabelId, modalHeadingId, modalBodyId, ariaLabel;
  let size = fallback($$props["size"], void 0);
  let open = fallback($$props["open"], false);
  let danger = fallback($$props["danger"], false);
  let alert = fallback($$props["alert"], false);
  let passiveModal = fallback($$props["passiveModal"], false);
  let modalHeading = fallback($$props["modalHeading"], void 0);
  let modalLabel = fallback($$props["modalLabel"], void 0);
  let modalAriaLabel = fallback($$props["modalAriaLabel"], void 0);
  let iconDescription = fallback($$props["iconDescription"], "Close the modal");
  let hasForm = fallback($$props["hasForm"], false);
  let hasScrollingContent = fallback($$props["hasScrollingContent"], false);
  let primaryButtonText = fallback($$props["primaryButtonText"], "");
  let primaryButtonDisabled = fallback($$props["primaryButtonDisabled"], false);
  let primaryButtonIcon = fallback($$props["primaryButtonIcon"], void 0);
  let shouldSubmitOnEnter = fallback($$props["shouldSubmitOnEnter"], true);
  let secondaryButtonText = fallback($$props["secondaryButtonText"], "");
  let secondaryButtons = fallback($$props["secondaryButtons"], () => [], true);
  let selectorPrimaryFocus = fallback($$props["selectorPrimaryFocus"], "[data-modal-primary-focus]");
  let preventCloseOnClickOutside = fallback($$props["preventCloseOnClickOutside"], false);
  let id = fallback($$props["id"], () => "ccs-" + Math.random().toString(36), true);
  let ref = fallback($$props["ref"], null);
  const openStore = writable(open);
  store_set(openStore, open);
  modalLabelId = `bx--modal-header__label--modal-${id}`;
  modalHeadingId = `bx--modal-header__heading--modal-${id}`;
  modalBodyId = `bx--modal-body--${id}`;
  ariaLabel = modalLabel || $$sanitized_props["aria-label"] || modalAriaLabel || modalHeading;
  $$payload.out += `<div${spread_attributes({ role: "presentation", id, ...$$restProps }, {
    "bx--modal": true,
    "bx--modal-tall": !passiveModal,
    "is-visible": open,
    "bx--modal--danger": danger
  })}><div tabindex="-1"${attr("role", alert ? passiveModal ? "alert" : "alertdialog" : "dialog")}${attr("aria-describedby", alert && !passiveModal ? modalBodyId : void 0)} aria-modal="true"${attr("aria-label", ariaLabel)}${attr("class", [
    "bx--modal-container",
    size === "xs" ? "bx--modal-container--xs" : "",
    size === "sm" ? "bx--modal-container--sm" : "",
    size === "lg" ? "bx--modal-container--lg" : ""
  ].filter(Boolean).join(" "))}><div${attr("class", ["bx--modal-header"].filter(Boolean).join(" "))}>`;
  if (passiveModal) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button type="button"${attr("aria-label", iconDescription)}${attr("class", ["bx--modal-close"].filter(Boolean).join(" "))}>`;
    Close($$payload, {
      size: 20,
      class: "bx--modal-close__icon",
      "aria-hidden": "true"
    });
    $$payload.out += `<!----></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (modalLabel) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2${attr("id", modalLabelId)}${attr("class", ["bx--modal-header__label"].filter(Boolean).join(" "))}><!---->`;
    slot($$payload, $$props, "label", {}, () => {
      $$payload.out += `${escape_html(modalLabel)}`;
    });
    $$payload.out += `<!----></h2>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <h3${attr("id", modalHeadingId)}${attr("class", ["bx--modal-header__heading"].filter(Boolean).join(" "))}><!---->`;
  slot($$payload, $$props, "heading", {}, () => {
    $$payload.out += `${escape_html(modalHeading)}`;
  });
  $$payload.out += `<!----></h3> `;
  if (!passiveModal) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button type="button"${attr("aria-label", iconDescription)}${attr("class", ["bx--modal-close"].filter(Boolean).join(" "))}>`;
    Close($$payload, {
      size: 20,
      class: "bx--modal-close__icon",
      "aria-hidden": "true"
    });
    $$payload.out += `<!----></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div${attr("id", modalBodyId)}${attr("tabindex", hasScrollingContent ? "0" : void 0)}${attr("role", hasScrollingContent ? "region" : void 0)}${attr("aria-label", hasScrollingContent ? ariaLabel : void 0)}${attr("aria-labelledby", modalLabel ? modalLabelId : modalHeadingId)}${attr("class", [
    "bx--modal-content",
    hasForm ? "bx--modal-content--with-form" : "",
    hasScrollingContent ? "bx--modal-scroll-content" : ""
  ].filter(Boolean).join(" "))}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div> `;
  if (hasScrollingContent) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", [
      "bx--modal-content--overflow-indicator"
    ].filter(Boolean).join(" "))}></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (!passiveModal) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", [
      "bx--modal-footer",
      secondaryButtons.length === 2 ? "bx--modal-footer--three-button" : ""
    ].filter(Boolean).join(" "))}>`;
    if (secondaryButtons.length > 0) {
      $$payload.out += "<!--[-->";
      const each_array = ensure_array_like(secondaryButtons);
      $$payload.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let button = each_array[$$index];
        Button($$payload, {
          kind: "secondary",
          children: ($$payload2) => {
            $$payload2.out += `<!---->${escape_html(button.text)}`;
          },
          $$slots: { default: true }
        });
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
      if (secondaryButtonText) {
        $$payload.out += "<!--[-->";
        Button($$payload, {
          kind: "secondary",
          children: ($$payload2) => {
            $$payload2.out += `<!---->${escape_html(secondaryButtonText)}`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--> `;
    Button($$payload, {
      kind: danger ? "danger" : "primary",
      disabled: primaryButtonDisabled,
      icon: primaryButtonIcon,
      children: ($$payload2) => {
        $$payload2.out += `<!---->${escape_html(primaryButtonText)}`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, {
    size,
    open,
    danger,
    alert,
    passiveModal,
    modalHeading,
    modalLabel,
    modalAriaLabel,
    iconDescription,
    hasForm,
    hasScrollingContent,
    primaryButtonText,
    primaryButtonDisabled,
    primaryButtonIcon,
    shouldSubmitOnEnter,
    secondaryButtonText,
    secondaryButtons,
    selectorPrimaryFocus,
    preventCloseOnClickOutside,
    id,
    ref
  });
  pop();
}
function Add($$payload, $$props) {
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
  $$payload.out += `<!--]--><path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
function Subtract($$payload, $$props) {
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
  $$payload.out += `<!--]--><path d="M8 15H24V17H8z"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
function EditOff($$payload, $$props) {
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
  $$payload.out += `<!--]--><path d="M30 28.6L3.4 2 2 3.4l10.1 10.1L4 21.6V28h6.4l8.1-8.1L28.6 30 30 28.6zM9.6 26H6v-3.6l7.5-7.5 3.6 3.6L9.6 26zM29.4 6.2L29.4 6.2l-3.6-3.6c-.8-.8-2-.8-2.8 0l0 0 0 0-8 8 1.4 1.4L20 8.4l3.6 3.6L20 15.6l1.4 1.4 8-8C30.2 8.2 30.2 7 29.4 6.2L29.4 6.2zM25 10.6L21.4 7l3-3L28 7.6 25 10.6z"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
function NumberInput($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "translationIds",
    "size",
    "value",
    "step",
    "max",
    "min",
    "light",
    "readonly",
    "allowEmpty",
    "disabled",
    "hideSteppers",
    "iconDescription",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "label",
    "hideLabel",
    "translateWithId",
    "id",
    "name",
    "ref"
  ]);
  push();
  let incrementLabel, decrementLabel, error, errorId, ariaLabel;
  let size = fallback($$props["size"], void 0);
  let value = fallback($$props["value"], null);
  let step = fallback($$props["step"], 1);
  let max = fallback($$props["max"], void 0);
  let min = fallback($$props["min"], void 0);
  let light = fallback($$props["light"], false);
  let readonly = fallback($$props["readonly"], false);
  let allowEmpty = fallback($$props["allowEmpty"], false);
  let disabled = fallback($$props["disabled"], false);
  let hideSteppers = fallback($$props["hideSteppers"], false);
  let iconDescription = fallback($$props["iconDescription"], "");
  let invalid = fallback($$props["invalid"], false);
  let invalidText = fallback($$props["invalidText"], "");
  let warn = fallback($$props["warn"], false);
  let warnText = fallback($$props["warnText"], "");
  let helperText = fallback($$props["helperText"], "");
  let label = fallback($$props["label"], "");
  let hideLabel = fallback($$props["hideLabel"], false);
  let translateWithId = fallback($$props["translateWithId"], (id2) => defaultTranslations[id2]);
  const translationIds = {
    increment: "increment",
    decrement: "decrement"
  };
  let id = fallback($$props["id"], () => "ccs-" + Math.random().toString(36), true);
  let name = fallback($$props["name"], void 0);
  let ref = fallback($$props["ref"], null);
  const defaultTranslations = {
    [translationIds.increment]: "Increment number",
    [translationIds.decrement]: "Decrement number"
  };
  incrementLabel = translateWithId("increment");
  decrementLabel = translateWithId("decrement");
  error = invalid && !readonly || !allowEmpty && value == null || value > max || typeof value === "number" && value < min;
  errorId = `error-${id}`;
  ariaLabel = $$sanitized_props["aria-label"] || "Numeric input field with increment and decrement buttons";
  $$payload.out += `<div${attr("class", ["bx--form-item"].filter(Boolean).join(" "))}><div${attr("data-invalid", error || void 0)}${attr("class", [
    "bx--number",
    "bx--number--helpertext",
    readonly ? "bx--number--readonly" : "",
    light ? "bx--number--light" : "",
    hideLabel ? "bx--number--nolabel" : "",
    hideSteppers ? "bx--number--nosteppers" : "",
    size === "sm" ? "bx--number--sm" : "",
    size === "xl" ? "bx--number--xl" : ""
  ].filter(Boolean).join(" "))}>`;
  if ($$slots.label || label) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<label${attr("for", id)}${attr("class", [
      "bx--label",
      disabled ? "bx--label--disabled" : "",
      hideLabel ? "bx--visually-hidden" : ""
    ].filter(Boolean).join(" "))}><!---->`;
    slot($$payload, $$props, "label", {}, () => {
      $$payload.out += `${escape_html(label)}`;
    });
    $$payload.out += `<!----></label>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div${attr("class", [
    "bx--number__input-wrapper",
    !invalid && warn ? "bx--number__input-wrapper--warning" : ""
  ].filter(Boolean).join(" "))}><input${spread_attributes({
    type: "number",
    pattern: "[0-9]*",
    "aria-describedby": errorId,
    "data-invalid": error || void 0,
    "aria-invalid": error || void 0,
    "aria-label": label ? void 0 : ariaLabel,
    disabled,
    id,
    name,
    max,
    min,
    step,
    value: value ?? "",
    readonly,
    ...$$restProps
  })}> `;
  if (readonly) {
    $$payload.out += "<!--[-->";
    EditOff($$payload, { class: "bx--text-input__readonly-icon" });
  } else {
    $$payload.out += "<!--[!-->";
    if (invalid) {
      $$payload.out += "<!--[-->";
      WarningFilled($$payload, { class: "bx--number__invalid" });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (!invalid && warn) {
      $$payload.out += "<!--[-->";
      WarningAltFilled($$payload, {
        class: "bx--number__invalid bx--number__invalid--warning"
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> `;
  if (!hideSteppers) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", ["bx--number__controls"].filter(Boolean).join(" "))}><button type="button" tabindex="-1"${attr("title", decrementLabel || iconDescription)}${attr("aria-label", decrementLabel || iconDescription)}${attr("disabled", disabled, true)}${attr("class", [
      "bx--number__control-btn",
      "down-icon"
    ].filter(Boolean).join(" "))}>`;
    Subtract($$payload, { class: "down-icon" });
    $$payload.out += `<!----></button> <div${attr("class", ["bx--number__rule-divider"].filter(Boolean).join(" "))}></div> <button type="button" tabindex="-1"${attr("title", incrementLabel || iconDescription)}${attr("aria-label", incrementLabel || iconDescription)}${attr("disabled", disabled, true)}${attr("class", [
      "bx--number__control-btn",
      "up-icon"
    ].filter(Boolean).join(" "))}>`;
    Add($$payload, { class: "up-icon" });
    $$payload.out += `<!----></button> <div${attr("class", ["bx--number__rule-divider"].filter(Boolean).join(" "))}></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  if (!error && !warn && helperText) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", [
      "bx--form__helper-text",
      disabled ? "bx--form__helper-text--disabled" : ""
    ].filter(Boolean).join(" "))}>${escape_html(helperText)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (error) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("id", errorId)}${attr("class", ["bx--form-requirement"].filter(Boolean).join(" "))}>${escape_html(invalidText)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (!error && warn) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("id", errorId)}${attr("class", ["bx--form-requirement"].filter(Boolean).join(" "))}>${escape_html(warnText)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, {
    size,
    value,
    step,
    max,
    min,
    light,
    readonly,
    allowEmpty,
    disabled,
    hideSteppers,
    iconDescription,
    invalid,
    invalidText,
    warn,
    warnText,
    helperText,
    label,
    hideLabel,
    translateWithId,
    id,
    name,
    ref,
    translationIds
  });
  pop();
}
function TextInput($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "size",
    "value",
    "placeholder",
    "light",
    "disabled",
    "helperText",
    "id",
    "name",
    "labelText",
    "hideLabel",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "ref",
    "required",
    "inline",
    "readonly"
  ]);
  push();
  let error, helperId, errorId, warnId;
  let size = fallback($$props["size"], void 0);
  let value = fallback($$props["value"], "");
  let placeholder = fallback($$props["placeholder"], "");
  let light = fallback($$props["light"], false);
  let disabled = fallback($$props["disabled"], false);
  let helperText = fallback($$props["helperText"], "");
  let id = fallback($$props["id"], () => "ccs-" + Math.random().toString(36), true);
  let name = fallback($$props["name"], void 0);
  let labelText = fallback($$props["labelText"], "");
  let hideLabel = fallback($$props["hideLabel"], false);
  let invalid = fallback($$props["invalid"], false);
  let invalidText = fallback($$props["invalidText"], "");
  let warn = fallback($$props["warn"], false);
  let warnText = fallback($$props["warnText"], "");
  let ref = fallback($$props["ref"], null);
  let required = fallback($$props["required"], false);
  let inline = fallback($$props["inline"], false);
  let readonly = fallback($$props["readonly"], false);
  const ctx = getContext("Form");
  const isFluid = !!ctx && ctx.isFluid;
  error = invalid && !readonly;
  helperId = `helper-${id}`;
  errorId = `error-${id}`;
  warnId = `warn-${id}`;
  $$payload.out += `<div${attr("class", [
    "bx--form-item",
    "bx--text-input-wrapper",
    inline ? "bx--text-input-wrapper--inline" : "",
    light ? "bx--text-input-wrapper--light" : "",
    readonly ? "bx--text-input-wrapper--readonly" : ""
  ].filter(Boolean).join(" "))}>`;
  if (inline) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", [
      "bx--text-input__label-helper-wrapper"
    ].filter(Boolean).join(" "))}>`;
    if (labelText) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<label${attr("for", id)}${attr("class", [
        "bx--label",
        hideLabel ? "bx--visually-hidden" : "",
        disabled ? "bx--label--disabled" : "",
        inline ? "bx--label--inline" : "",
        size === "sm" ? "bx--label--inline--sm" : "",
        size === "xl" ? "bx--label--inline--xl" : ""
      ].filter(Boolean).join(" "))}><!---->`;
      slot($$payload, $$props, "labelText", {}, () => {
        $$payload.out += `${escape_html(labelText)}`;
      });
      $$payload.out += `<!----></label>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (!isFluid && helperText) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("class", [
        "bx--form__helper-text",
        disabled ? "bx--form__helper-text--disabled" : "",
        inline ? "bx--form__helper-text--inline" : ""
      ].filter(Boolean).join(" "))}>${escape_html(helperText)}</div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (!inline && (labelText || $$slots.labelText)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<label${attr("for", id)}${attr("class", [
      "bx--label",
      hideLabel ? "bx--visually-hidden" : "",
      disabled ? "bx--label--disabled" : "",
      inline ? "bx--label--inline" : "",
      inline && size === "sm" ? "bx--label--inline-sm" : "",
      inline && size === "xl" ? "bx--label--inline-xl" : ""
    ].filter(Boolean).join(" "))}><!---->`;
    slot($$payload, $$props, "labelText", {}, () => {
      $$payload.out += `${escape_html(labelText)}`;
    });
    $$payload.out += `<!----></label>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div${attr("class", [
    "bx--text-input__field-outer-wrapper",
    inline ? "bx--text-input__field-outer-wrapper--inline" : ""
  ].filter(Boolean).join(" "))}><div${attr("data-invalid", error || void 0)}${attr("data-warn", warn || void 0)}${attr("class", [
    "bx--text-input__field-wrapper",
    !invalid && warn ? "bx--text-input__field-wrapper--warning" : ""
  ].filter(Boolean).join(" "))}>`;
  if (readonly) {
    $$payload.out += "<!--[-->";
    EditOff($$payload, { class: "bx--text-input__readonly-icon" });
  } else {
    $$payload.out += "<!--[!-->";
    if (invalid) {
      $$payload.out += "<!--[-->";
      WarningFilled($$payload, { class: "bx--text-input__invalid-icon" });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (!invalid && warn) {
      $$payload.out += "<!--[-->";
      WarningAltFilled($$payload, {
        class: "bx--text-input__invalid-icon\n            bx--text-input__invalid-icon--warning"
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> <input${spread_attributes(
    {
      "data-invalid": error || void 0,
      "aria-invalid": error || void 0,
      "data-warn": warn || void 0,
      "aria-describedby": error ? errorId : warn ? warnId : helperText ? helperId : void 0,
      disabled,
      id,
      name,
      placeholder,
      value,
      required,
      readonly,
      ...$$restProps
    },
    {
      "bx--text-input": true,
      "bx--text-input--light": light,
      "bx--text-input--invalid": error,
      "bx--text-input--warning": warn,
      "bx--text-input--sm": size === "sm",
      "bx--text-input--xl": size === "xl"
    }
  )}> `;
  if (isFluid) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<hr${attr("class", ["bx--text-input__divider"].filter(Boolean).join(" "))}>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (isFluid && !inline && invalid) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("id", errorId)}${attr("class", ["bx--form-requirement"].filter(Boolean).join(" "))}>${escape_html(invalidText)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (isFluid && !inline && warn) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("id", warnId)}${attr("class", ["bx--form-requirement"].filter(Boolean).join(" "))}>${escape_html(warnText)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  if (!invalid && !warn && !isFluid && !inline && helperText) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("id", helperId)}${attr("class", [
      "bx--form__helper-text",
      disabled ? "bx--form__helper-text--disabled" : "",
      inline ? "bx--form__helper-text--inline" : ""
    ].filter(Boolean).join(" "))}>${escape_html(helperText)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (!isFluid && invalid) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("id", errorId)}${attr("class", ["bx--form-requirement"].filter(Boolean).join(" "))}>${escape_html(invalidText)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (!isFluid && !invalid && warn) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("id", warnId)}${attr("class", ["bx--form-requirement"].filter(Boolean).join(" "))}>${escape_html(warnText)}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  bind_props($$props, {
    size,
    value,
    placeholder,
    light,
    disabled,
    helperText,
    id,
    name,
    labelText,
    hideLabel,
    invalid,
    invalidText,
    warn,
    warnText,
    ref,
    required,
    inline,
    readonly
  });
  pop();
}
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
function Checkbox($$payload, $$props) {
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
  $$payload.out += `<!--]--><path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
function TrashCan($$payload, $$props) {
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
  $$payload.out += `<!--]--><path d="M12 12H14V24H12zM18 12H20V24H18z"></path><path d="M4 6V8H6V28a2 2 0 002 2H24a2 2 0 002-2V8h2V6zM8 28V8H24V28zM12 2H20V4H12z"></path></svg>`;
  bind_props($$props, { size, title });
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let openPlayer = false;
  let playerToDelete = void 0;
  let playerName = "";
  let teamsArray = data.teams;
  let selectedRowIds = data.teams.map((teams) => teams.teamA.concat(teams.teamB)).flat().map((player) => player.id);
  let numberOfTeams = data.teams.length * 2 || 2;
  const rows = data.players;
  const players = data.players.filter((player) => selectedRowIds.includes(player.id));
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Content($$payload2, {
      children: ($$payload3) => {
        const each_array_3 = ensure_array_like(rows);
        $$payload3.out += `<div class="controls svelte-l6nh51">`;
        Select($$payload3, {
          selected: numberOfTeams.toString(),
          labelText: "¿Cuántos equipos sois?",
          children: ($$payload4) => {
            SelectItem($$payload4, { value: "2" });
            $$payload4.out += `<!----> `;
            SelectItem($$payload4, { value: "4" });
            $$payload4.out += `<!----> `;
            SelectItem($$payload4, { value: "6" });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> Jugadores seleccionados: ${escape_html(selectedRowIds.length)} <div class="button-group svelte-l6nh51">`;
        Button($$payload3, {
          disabled: players.length === 0,
          children: ($$payload4) => {
            $$payload4.out += `<!---->Crear equipos`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Button($$payload3, {
          kind: "ghost",
          icon: TrashCan,
          iconDescription: "Borrar equipos"
        });
        $$payload3.out += `<!----></div></div> `;
        if (teamsArray.length > 0) {
          $$payload3.out += "<!--[-->";
          const each_array = ensure_array_like(Object.entries(teamsArray));
          $$payload3.out += `<div class="teams-container svelte-l6nh51"><!--[-->`;
          for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
            let [index, teams] = each_array[$$index_2];
            const each_array_1 = ensure_array_like(teams.teamA);
            const each_array_2 = ensure_array_like(teams.teamB);
            $$payload3.out += `<div class="team-match svelte-l6nh51"><div class="teams-grid svelte-l6nh51"><div class="team svelte-l6nh51"><h3 class="svelte-l6nh51">Equipo A (Jugadores: ${escape_html(teams.teamA.length)})</h3> <div class="players-list svelte-l6nh51"><!--[-->`;
            for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
              let player = each_array_1[$$index];
              $$payload3.out += `<p class="player-name svelte-l6nh51">${escape_html(player.name)}</p>`;
            }
            $$payload3.out += `<!--]--></div> <div class="stats svelte-l6nh51"><p class="stat-label svelte-l6nh51">Victorias: <strong>${escape_html(parseInt(teams.teamA.reduce((acc, curr) => acc + curr.victoryPercentage, 0) / teams.teamA.length))}%</strong></p></div></div> <div class="team svelte-l6nh51"><h3 class="svelte-l6nh51">Equipo B (Jugadores: ${escape_html(teams.teamB.length)})</h3> <div class="players-list svelte-l6nh51"><!--[-->`;
            for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
              let player = each_array_2[$$index_1];
              $$payload3.out += `<p class="player-name svelte-l6nh51">${escape_html(player.name)}</p>`;
            }
            $$payload3.out += `<!--]--></div> <div class="stats svelte-l6nh51"><p class="stat-label svelte-l6nh51">Victorias: <strong>${escape_html(parseInt(teams.teamB.reduce((acc, curr) => acc + curr.victoryPercentage, 0) / teams.teamB.length))}%</strong></p></div></div></div> <div class="score-section svelte-l6nh51"><div class="score-inputs svelte-l6nh51">`;
            NumberInput($$payload3, {
              label: "Goles A",
              value: teams.teamAScore,
              min: 0
            });
            $$payload3.out += `<!----> `;
            NumberInput($$payload3, {
              label: "Goles B",
              value: teams.teamBScore,
              min: 0
            });
            $$payload3.out += `<!----></div> <div class="score-button svelte-l6nh51">`;
            Button($$payload3, {
              disabled: teams.teamAScore === void 0 || teams.teamBScore === void 0,
              children: ($$payload4) => {
                $$payload4.out += `<!---->Registrar`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----></div></div></div>`;
          }
          $$payload3.out += `<!--]--></div>`;
        } else {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]--> <div class="table-section svelte-l6nh51"><div class="desktop-view svelte-l6nh51">`;
        DataTable($$payload3, {
          sortable: true,
          selectable: true,
          batchSelection: true,
          get selectedRowIds() {
            return selectedRowIds;
          },
          set selectedRowIds($$value) {
            selectedRowIds = $$value;
            $$settled = false;
          },
          size: "compact",
          headers: [
            { key: "name", value: "Nombre" },
            { key: "matchesWon", value: "Ganados" },
            { key: "matchesDrawn", value: "Empatados" },
            { key: "matchesLost", value: "Perdidos" },
            { key: "totalMatches", value: "Total" },
            { key: "victoryPercentage", value: "Victoria %" },
            { key: "goalsFor", value: "GF" },
            { key: "goalsAgainst", value: "GC" },
            { key: "buttons", value: "" }
          ],
          rows,
          children: ($$payload4) => {
            Toolbar($$payload4, {
              size: "sm",
              children: ($$payload5) => {
                $$payload5.out += `<span>`;
                Button($$payload5, {
                  iconDescription: "Añadir jugador",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Añadir jugador`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!----></span>`;
              },
              $$slots: { default: true }
            });
          },
          $$slots: {
            default: true,
            cell: ($$payload4, { row, cell }) => {
              {
                if (cell.key === "buttons") {
                  $$payload4.out += "<!--[-->";
                  if (playerToDelete?.id === row.id) {
                    $$payload4.out += "<!--[-->";
                    Button($$payload4, {
                      tooltipPosition: "right",
                      tooltipAlignment: "end",
                      kind: "danger-ghost",
                      iconDescription: "¿Seguro?",
                      icon: Checkbox,
                      size: "small"
                    });
                  } else {
                    $$payload4.out += "<!--[!-->";
                    Button($$payload4, {
                      tooltipPosition: "right",
                      tooltipAlignment: "end",
                      kind: "danger-ghost",
                      iconDescription: "Eliminar jugador",
                      icon: TrashCan,
                      size: "small"
                    });
                  }
                  $$payload4.out += `<!--]-->`;
                } else {
                  $$payload4.out += "<!--[!-->";
                  if (cell.key === "victoryPercentage") {
                    $$payload4.out += "<!--[-->";
                    $$payload4.out += `${escape_html(cell.value ? `${parseInt(cell.value)}%` : "0%")}`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                    $$payload4.out += `${escape_html(cell.value ?? "")}`;
                  }
                  $$payload4.out += `<!--]-->`;
                }
                $$payload4.out += `<!--]-->`;
              }
            }
          }
        });
        $$payload3.out += `<!----></div> <div class="mobile-view svelte-l6nh51"><div class="mobile-header svelte-l6nh51"><h3 class="svelte-l6nh51">Jugadores</h3> `;
        Button($$payload3, {
          iconDescription: "Añadir jugador",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Añadir`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----></div> <div class="cards-container svelte-l6nh51"><!--[-->`;
        for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
          let player = each_array_3[$$index_3];
          $$payload3.out += `<div${attr("class", `player-card svelte-l6nh51 ${stringify([
            selectedRowIds.includes(player.id) ? "selected" : ""
          ].filter(Boolean).join(" "))}`)}><div class="card-header svelte-l6nh51"><div class="player-info svelte-l6nh51"><h4 class="svelte-l6nh51">${escape_html(player.name)}</h4> <p class="victory-stat svelte-l6nh51">${escape_html(player.victoryPercentage ? `${parseInt(player.victoryPercentage)}%` : "0%")} victorias</p></div> <div class="card-actions svelte-l6nh51">`;
          if (playerToDelete?.id === player.id) {
            $$payload3.out += "<!--[-->";
            Button($$payload3, {
              kind: "danger-ghost",
              icon: Checkbox,
              iconDescription: "Confirmar",
              size: "small"
            });
          } else {
            $$payload3.out += "<!--[!-->";
            Button($$payload3, {
              kind: "danger-ghost",
              icon: TrashCan,
              iconDescription: "Eliminar",
              size: "small"
            });
          }
          $$payload3.out += `<!--]--></div></div> <div class="card-stats svelte-l6nh51"><div class="stat svelte-l6nh51"><span class="stat-label svelte-l6nh51">Ganados</span> <span class="stat-value svelte-l6nh51">${escape_html(player.matchesWon)}</span></div> <div class="stat svelte-l6nh51"><span class="stat-label svelte-l6nh51">Empatados</span> <span class="stat-value svelte-l6nh51">${escape_html(player.matchesDrawn)}</span></div> <div class="stat svelte-l6nh51"><span class="stat-label svelte-l6nh51">Perdidos</span> <span class="stat-value svelte-l6nh51">${escape_html(player.matchesLost)}</span></div> <div class="stat svelte-l6nh51"><span class="stat-label svelte-l6nh51">Total</span> <span class="stat-value svelte-l6nh51">${escape_html(player.totalMatches)}</span></div></div> <div class="card-footer svelte-l6nh51"><div class="goals svelte-l6nh51"><span>⚽ ${escape_html(player.goalsFor)}</span> <span>-</span> <span>${escape_html(player.goalsAgainst)}</span></div> <div class="checkbox svelte-l6nh51"><input type="checkbox"${attr("checked", selectedRowIds.includes(player.id), true)} class="svelte-l6nh51"></div></div></div>`;
        }
        $$payload3.out += `<!--]--></div></div></div>`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Modal($$payload2, {
      get open() {
        return openPlayer;
      },
      set open($$value) {
        openPlayer = $$value;
        $$settled = false;
      },
      primaryButtonText: "Añadir jugador",
      primaryButtonDisabled: playerName.trim() === "",
      selectorPrimaryFocus: "#player-name",
      children: ($$payload3) => {
        TextInput($$payload3, {
          id: "player-name",
          labelText: "Nombre del jugador",
          placeholder: "Introduce el nombre del jugador...",
          get value() {
            return playerName;
          },
          set value($$value) {
            playerName = $$value;
            $$settled = false;
          }
        });
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
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-jB_4mADS.js.map
