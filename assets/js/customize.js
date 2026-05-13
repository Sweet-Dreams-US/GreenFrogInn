/* =========================================================
   The Green Frog Inn — Customize modal
   Burger doneness/cheese/toppings, wing sauce picker,
   frog-leg portion + sauce, draft size/type, cocktail mixers.
   ========================================================= */

const CUSTOMIZATIONS = {
  groups: {
    // ---- BURGER OPTIONS ----
    burgerDone: {
      label: 'cooked to',
      type: 'single',
      options: [
        { id: 'med-rare', name: 'medium-rare', delta: 0 },
        { id: 'medium',   name: 'medium',      delta: 0, default: true },
        { id: 'med-well', name: 'medium-well', delta: 0 },
        { id: 'well',     name: 'well done',   delta: 0 }
      ]
    },
    burgerCheese: {
      label: 'cheese',
      type: 'single',
      options: [
        { id: 'american',  name: 'american',  delta: 0, default: true },
        { id: 'cheddar',   name: 'cheddar',   delta: 0 },
        { id: 'swiss',     name: 'swiss',     delta: 0 },
        { id: 'pepperjack',name: 'pepper jack',delta: 0 },
        { id: 'blue',      name: 'blue cheese',delta: 0.50 },
        { id: 'none',      name: 'no cheese', delta: 0 }
      ]
    },
    burgerToppings: {
      label: 'add toppings',
      type: 'multi',
      options: [
        { id: 'bacon',      name: 'bacon',           delta: 1.50 },
        { id: 'fried-egg',  name: 'fried egg',       delta: 1.00 },
        { id: 'mushrooms',  name: 'sauteed mushrooms',delta: 0.75 },
        { id: 'onion-ring', name: 'onion ring stack',delta: 1.00 },
        { id: 'jalapeno',   name: 'jalapeños',       delta: 0.50 },
        { id: 'avocado',    name: 'avocado',         delta: 1.50 },
        { id: 'extra-patty',name: 'extra patty',     delta: 2.50 }
      ]
    },
    burgerBun: {
      label: 'bun',
      type: 'single',
      options: [
        { id: 'brioche',     name: 'brioche',     delta: 0, default: true },
        { id: 'sesame',      name: 'sesame seed', delta: 0 },
        { id: 'pretzel',     name: 'pretzel bun', delta: 0.75 },
        { id: 'lettuce-wrap',name: 'lettuce wrap',delta: 0 }
      ]
    },

    // ---- WING OPTIONS ----
    wingSauce: {
      label: 'sauce',
      type: 'single',
      options: [
        { id: 'buffalo',     name: 'classic buffalo', delta: 0, default: true },
        { id: 'hot',         name: 'hot',             delta: 0 },
        { id: 'mild',        name: 'mild',            delta: 0 },
        { id: 'honey-bbq',   name: 'honey bbq',       delta: 0 },
        { id: 'garlic-parm', name: 'garlic parmesan', delta: 0 },
        { id: 'dry-rub',     name: 'cajun dry rub',   delta: 0 },
        { id: 'naked',       name: 'naked (no sauce)',delta: 0 }
      ]
    },
    wingDip: {
      label: 'dip',
      type: 'single',
      options: [
        { id: 'blue',  name: 'blue cheese', delta: 0, default: true },
        { id: 'ranch', name: 'ranch',       delta: 0 },
        { id: 'both',  name: 'both',        delta: 0.50 }
      ]
    },

    // ---- FROG LEG OPTIONS ----
    frogSauce: {
      label: 'dipping sauce',
      type: 'single',
      options: [
        { id: 'horsey',     name: 'creamy horsey',  delta: 0, default: true },
        { id: 'cocktail',   name: 'cocktail sauce', delta: 0 },
        { id: 'tartar',     name: 'tartar',         delta: 0 },
        { id: 'remoulade',  name: 'remoulade',      delta: 0 },
        { id: 'lemon-aioli',name: 'lemon aioli',    delta: 0.50 }
      ]
    },
    frogSide: {
      label: 'side',
      type: 'single',
      options: [
        { id: 'fries',      name: 'pub fries',   delta: 0, default: true },
        { id: 'waffle',     name: 'waffle chips',delta: 0 },
        { id: 'slaw',       name: 'slaw',        delta: 0 },
        { id: 'salad',      name: 'side salad',  delta: 1.00 },
        { id: 'onion-rings',name: 'onion rings', delta: 1.00 }
      ]
    },

    // ---- SANDWICH OPTIONS ----
    sandCheese: {
      label: 'cheese',
      type: 'single',
      options: [
        { id: 'american',  name: 'american', delta: 0, default: true },
        { id: 'cheddar',   name: 'cheddar',  delta: 0 },
        { id: 'swiss',     name: 'swiss',    delta: 0 },
        { id: 'provolone', name: 'provolone',delta: 0 },
        { id: 'no-cheese', name: 'no cheese',delta: 0 }
      ]
    },
    sandBread: {
      label: 'bread',
      type: 'single',
      options: [
        { id: 'sourdough', name: 'sourdough', delta: 0, default: true },
        { id: 'rye',       name: 'rye',       delta: 0 },
        { id: 'wheat',     name: 'wheat',     delta: 0 },
        { id: 'white',     name: 'white',     delta: 0 }
      ]
    },

    // ---- DRINK OPTIONS ----
    drinkIce: {
      label: 'ice',
      type: 'single',
      options: [
        { id: 'regular', name: 'regular ice', delta: 0, default: true },
        { id: 'light',   name: 'light ice',   delta: 0 },
        { id: 'no-ice',  name: 'no ice',      delta: 0 }
      ]
    },
    cocktailMix: {
      label: 'mixer / float',
      type: 'multi',
      options: [
        { id: 'extra-lime', name: 'extra lime',  delta: 0 },
        { id: 'pineapple',  name: 'pineapple juice float', delta: 0.50 },
        { id: 'tito-float', name: "tito's float", delta: 1.50 },
        { id: 'sour',       name: 'extra sour', delta: 0 }
      ]
    },

    // ---- COMMON ----
    extras: {
      label: 'extras',
      type: 'multi',
      options: [
        { id: 'extra-sauce', name: 'extra sauce', delta: 0.50 },
        { id: 'no-onion',    name: 'no onion',    delta: 0 },
        { id: 'no-relish',   name: 'hold the relish', delta: 0 },
        { id: 'gluten-free', name: 'gluten-free bun (where available)', delta: 1.50 }
      ]
    }
  },

  // which groups apply to which item id
  items: {
    // Burgers
    'classic-burger':  ['burgerDone', 'burgerCheese', 'burgerBun', 'burgerToppings', 'extras'],
    'frog-burger':     ['burgerDone', 'burgerCheese', 'burgerBun', 'burgerToppings', 'extras'],
    'coney-burger':    ['burgerDone', 'burgerCheese', 'burgerBun', 'extras'],
    'western-burger':  ['burgerDone', 'burgerCheese', 'burgerBun', 'burgerToppings', 'extras'],
    'mushroom-swiss':  ['burgerDone', 'burgerBun', 'burgerToppings', 'extras'],
    'philly-burger':   ['burgerDone', 'burgerBun', 'extras'],
    'black-blue':      ['burgerDone', 'burgerBun', 'burgerToppings', 'extras'],
    'patty-melt':      ['burgerDone', 'extras'],
    'cardiac':         ['burgerDone', 'extras'],

    // Wings
    'wings-basket':    ['wingSauce', 'wingDip', 'extras'],

    // Frog legs
    'frog-legs':       ['frogSauce', 'frogSide'],
    'bullfrog':        ['frogSauce', 'frogSide'],

    // Sandwiches
    'reuben':          ['sandBread', 'extras'],
    'grilled-chicken': ['sandBread', 'sandCheese', 'extras'],
    'malibu-chicken':  ['sandBread', 'extras'],
    'ham-cheese':      ['sandBread', 'sandCheese', 'extras'],
    'grilled-cheese':  ['sandBread', 'extras'],
    'blt':             ['sandBread', 'extras'],
    'prime-philly':    ['sandCheese', 'extras'],
    'pork-tenderloin': ['sandBread', 'extras'],

    // Drinks
    'iced-tea':        ['drinkIce'],
    'soda':            ['drinkIce'],
    'green-frog-drink':['cocktailMix'],
    'draft-12':        ['extras'],

    // Starters
    'pretzel':         ['extras']
  }
};

function isCustomizable(id) {
  const groups = CUSTOMIZATIONS.items[id];
  return Array.isArray(groups) && groups.length > 0;
}

function defaultOptionsFor(id) {
  const groups = CUSTOMIZATIONS.items[id] || [];
  const opts = {};
  for (const g of groups) {
    const def = CUSTOMIZATIONS.groups[g];
    if (!def) continue;
    if (def.type === 'single') {
      const d = def.options.find(o => o.default) || def.options[0];
      opts[g] = d.id;
    } else {
      opts[g] = [];
    }
  }
  return opts;
}

function priceWithOptions(basePrice, id, options) {
  const groups = CUSTOMIZATIONS.items[id] || [];
  let total = basePrice;
  for (const g of groups) {
    const def = CUSTOMIZATIONS.groups[g];
    if (!def) continue;
    const sel = options?.[g];
    if (def.type === 'single') {
      const opt = def.options.find(o => o.id === sel);
      if (opt) total += opt.delta;
    } else if (Array.isArray(sel)) {
      for (const optId of sel) {
        const opt = def.options.find(o => o.id === optId);
        if (opt) total += opt.delta;
      }
    }
  }
  return Math.max(0, total);
}

function optionsKey(options) {
  if (!options) return '';
  const keys = Object.keys(options).sort();
  return keys.map(k => `${k}=${Array.isArray(options[k]) ? options[k].slice().sort().join(',') : options[k]}`).join('|');
}

function lineKey(id, options) {
  const k = optionsKey(options);
  return k ? `${id}#${k}` : id;
}

function summarizeOptions(id, options) {
  const groups = CUSTOMIZATIONS.items[id] || [];
  const parts = [];
  for (const g of groups) {
    const def = CUSTOMIZATIONS.groups[g];
    if (!def) continue;
    const sel = options?.[g];
    if (def.type === 'single') {
      const opt = def.options.find(o => o.id === sel);
      if (opt && !opt.default) parts.push(opt.name);
    } else if (Array.isArray(sel) && sel.length) {
      for (const optId of sel) {
        const opt = def.options.find(o => o.id === optId);
        if (opt) parts.push(opt.name);
      }
    }
  }
  return parts.join(' · ');
}

/* ---------------- Modal ---------------- */
const Customizer = (() => {
  let current = null;

  function el(tag, attrs = {}, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class')      node.className = v;
      else if (k === 'data')  Object.entries(v).forEach(([dk, dv]) => node.dataset[dk] = dv);
      else if (k.startsWith('aria-')) node.setAttribute(k, v);
      else if (k === 'style') node.setAttribute('style', v);
      else                    node[k] = v;
    }
    for (const c of children.flat()) {
      if (c == null || c === false) continue;
      node.append(c.nodeType ? c : document.createTextNode(String(c)));
    }
    return node;
  }

  function fmt(n) { return `$${n.toFixed(2)}`; }
  function fmtDelta(d) {
    if (d === 0) return '';
    return d > 0 ? `+$${d.toFixed(2)}` : `−$${Math.abs(d).toFixed(2)}`;
  }

  function render() {
    const groups = CUSTOMIZATIONS.items[current.id] || [];
    const titleEl = document.querySelector('[data-modal-title]');
    const descEl = document.querySelector('[data-modal-desc]');
    const groupsEl = document.querySelector('[data-modal-groups]');
    const totalEl = document.querySelector('[data-modal-total]');
    const confirmBtn = document.querySelector('[data-modal-confirm]');
    const removeBtn = document.querySelector('[data-modal-remove]');

    titleEl.textContent = current.name;
    descEl.textContent = current.sub || '';

    groupsEl.replaceChildren();
    for (const g of groups) {
      const def = CUSTOMIZATIONS.groups[g];
      if (!def) continue;
      const wrap = el('div', { class: 'opt-group' },
        el('h3', { class: 'opt-group__label' }, def.label));
      const optsRow = el('div', { class: 'opt-group__options' });
      for (const opt of def.options) {
        const isSel = def.type === 'single'
          ? current.options[g] === opt.id
          : (current.options[g] || []).includes(opt.id);
        const pill = el('button', {
          type: 'button',
          class: 'opt-pill' + (isSel ? ' is-selected' : ''),
          data: { optGroup: g, optId: opt.id, optType: def.type }
        }, opt.name);
        if (opt.delta !== 0) {
          pill.append(el('span', { class: 'opt-delta' }, fmtDelta(opt.delta)));
        }
        optsRow.append(pill);
      }
      wrap.append(optsRow);
      groupsEl.append(wrap);
    }

    totalEl.textContent = fmt(priceWithOptions(current.basePrice, current.id, current.options));

    if (current.editingKey) {
      confirmBtn.textContent = 'save changes';
      removeBtn.style.display = '';
    } else {
      confirmBtn.textContent = 'add to tab';
      removeBtn.style.display = 'none';
    }
  }

  function open(item, opts = {}) {
    current = {
      id: item.id,
      name: item.name,
      basePrice: parseFloat(item.basePrice ?? item.price),
      sub: item.sub,
      emoji: item.emoji,
      options: opts.options ? structuredClone(opts.options) : defaultOptionsFor(item.id),
      editingKey: opts.editingKey || null
    };
    render();
    const modal = document.querySelector('[data-modal]');
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => modal.classList.add('is-open'));
  }

  function close() {
    const modal = document.querySelector('[data-modal]');
    modal.classList.remove('is-open');
    setTimeout(() => modal.setAttribute('hidden', ''), 280);
    document.body.style.overflow = '';
    current = null;
  }

  function togglePill(group, optId, type) {
    if (!current) return;
    if (type === 'single') {
      current.options[group] = optId;
    } else {
      const arr = current.options[group] || [];
      const i = arr.indexOf(optId);
      if (i >= 0) arr.splice(i, 1);
      else arr.push(optId);
      current.options[group] = arr;
    }
    render();
  }

  function confirm() {
    if (!current) return;
    const finalPrice = priceWithOptions(current.basePrice, current.id, current.options);
    const sum = summarizeOptions(current.id, current.options);
    const lineItem = {
      id: current.id,
      name: current.name,
      basePrice: current.basePrice,
      price: finalPrice,
      sub: sum || current.sub || '',
      emoji: current.emoji,
      options: current.options,
      key: lineKey(current.id, current.options)
    };

    if (current.editingKey) {
      window.FrogCart.replaceLine(current.editingKey, lineItem);
    } else {
      window.FrogCart.add(lineItem);
    }
    if (typeof window.frogToast === 'function') {
      window.frogToast(`${lineItem.name} → tab`);
    }
    close();
  }

  function removeLine() {
    if (!current?.editingKey) return;
    window.FrogCart.removeKey(current.editingKey);
    if (typeof window.frogToast === 'function') {
      window.frogToast(`removed from tab`);
    }
    close();
  }

  return { open, close, togglePill, confirm, removeLine, isCustomizable, defaultOptionsFor, priceWithOptions, summarizeOptions, lineKey };
})();

window.FrogCustomize = Customizer;

/* ---------------- Wiring ---------------- */
document.addEventListener('DOMContentLoaded', () => {

  // Capture-phase hijack for customizable items
  document.addEventListener('click', e => {
    const addBtn = e.target.closest('[data-add]');
    if (!addBtn) return;
    const id = addBtn.dataset.id;
    if (!isCustomizable(id)) return;
    e.stopImmediatePropagation();
    e.preventDefault();
    Customizer.open({
      id,
      name: addBtn.dataset.name,
      basePrice: parseFloat(addBtn.dataset.price),
      sub: addBtn.dataset.sub,
      emoji: addBtn.dataset.emoji
    });
  }, true);

  // Modal interactions
  document.addEventListener('click', e => {
    if (e.target.closest('[data-modal-close]'))   Customizer.close();
    if (e.target.closest('[data-modal-confirm]')) Customizer.confirm();
    if (e.target.closest('[data-modal-remove]'))  Customizer.removeLine();

    const pill = e.target.closest('.opt-pill');
    if (pill) {
      Customizer.togglePill(pill.dataset.optGroup, pill.dataset.optId, pill.dataset.optType);
    }

    const editBtn = e.target.closest('.cart-line__edit');
    if (editBtn) {
      const line = editBtn.closest('.cart-line');
      const key = line.dataset.key;
      const item = window.FrogCart.getAll().find(i => (i.key || i.id) === key);
      if (item && isCustomizable(item.id)) {
        Customizer.open({
          id: item.id,
          name: item.name,
          basePrice: item.basePrice ?? item.price,
          sub: item.sub,
          emoji: item.emoji
        }, { options: item.options, editingKey: key });
      }
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const modal = document.querySelector('[data-modal]');
      if (modal && !modal.hasAttribute('hidden')) Customizer.close();
    }
  });
});
