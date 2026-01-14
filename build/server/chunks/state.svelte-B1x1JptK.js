import { ae as noop } from './index-B23-R4wG.js';
import './exports-CHdH9QCl.js';

let updated;
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    data: {},
    form: null,
    error: null,
    params: {},
    route: { id: null },
    state: {},
    status: -1,
    url: new URL("https://example.com")
  });
  updated = { current: false };
} else {
  updated = new class Updated {
    current = false;
  }();
}

export { updated as u };
//# sourceMappingURL=state.svelte-B1x1JptK.js.map
