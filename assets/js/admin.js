/* =========================================================
   The Green Frog Inn — Admin Dashboard
   Tab switching, mock data with localStorage, live order feed.
   8 tabs: Dashboard, Orders, Menu, Analytics, Accounting,
   Events, Customers, Settings.
   ========================================================= */

const ADMIN_KEY = 'greenfrog.admin.v1';

/* ----- Seed data ----- */
const SEED = {
  orders: [
    { num: '#2143', name: 'Maddie R.',   mins: 1,  status: 'pending', items: ['frog leg dinner', 'draft pitcher · house', 'pub fries'],          total: 22.95 },
    { num: '#2142', name: 'Owen P.',     mins: 4,  status: 'pending', items: ['frog burger (no onion)', 'pretzel · beer cheese', 'iced tea'],    total: 14.90 },
    { num: '#2141', name: 'Rae T.',      mins: 7,  status: 'pending', items: ['the bullfrog', 'guest beer · 12oz'],                              total: 19.49 },
    { num: '#2140', name: 'Jules H.',    mins: 10, status: 'ready',   items: ['the cardiac arrest', 'fountain soda', 'onion rings'],             total: 16.94 },
    { num: '#2139', name: 'Kai L.',      mins: 14, status: 'ready',   items: ['hot wings basket', 'mushroom swiss', 'draft pitcher'],            total: 23.44 },
    { num: '#2138', name: 'Sam B.',      mins: 22, status: 'done',    items: ['classic steakburger', 'pub fries', 'soda'],                       total: 10.98 },
    { num: '#2137', name: 'Theo G.',     mins: 28, status: 'done',    items: ['frog leg dinner', 'tossed salad', 'iced tea'],                    total: 16.44 },
    { num: '#2136', name: 'Reyna M.',    mins: 36, status: 'done',    items: ['pork tenderloin', 'pub fries', 'guest beer'],                     total: 13.40 }
  ],
  menu: [
    { id: 'pretzel',         name: 'soft pretzel & beer cheese', sub: 'bavarian · house sauce',     price: 5.95,  available: true,  todaySpecial: false, category: 'starters' },
    { id: 'irish-nachos',    name: 'irish nachos',               sub: 'waffle chip platter',        price: 6.99,  available: true,  todaySpecial: false, category: 'starters' },
    { id: 'nachos-supreme',  name: 'nachos supreme',             sub: 'loaded share-size',          price: 8.99,  available: true,  todaySpecial: false, category: 'starters' },
    { id: 'snack-basket',    name: 'snack basket',               sub: 'five things fried',          price: 6.99,  available: true,  todaySpecial: false, category: 'starters' },
    { id: 'onion-rings',     name: 'onion rings',                sub: 'beer-battered',              price: 5.95,  available: true,  todaySpecial: false, category: 'starters' },
    { id: 'mozz-sticks',     name: 'mozzarella sticks',          sub: '5 sticks · marinara',        price: 5.49,  available: true,  todaySpecial: false, category: 'starters' },
    { id: 'pub-fries',       name: 'pub fries',                  sub: 'crispy & salted',            price: 4.99,  available: true,  todaySpecial: false, category: 'starters' },

    { id: 'classic-burger',  name: 'classic steakburger',        sub: '1/3-lb · american',          price: 5.99,  available: true,  todaySpecial: false, category: 'burgers' },
    { id: 'frog-burger',     name: 'frog burger',                sub: 'onion stack · 2 cheese',     price: 6.95,  available: true,  todaySpecial: true,  category: 'burgers' },
    { id: 'coney-burger',    name: 'coney burger',               sub: 'chili · onion',              price: 6.95,  available: true,  todaySpecial: false, category: 'burgers' },
    { id: 'western-burger',  name: 'western burger',             sub: 'bbq · bacon · onion',        price: 6.95,  available: true,  todaySpecial: false, category: 'burgers' },
    { id: 'mushroom-swiss',  name: 'mushroom swiss',             sub: 'mushrooms · swiss',          price: 6.95,  available: true,  todaySpecial: false, category: 'burgers' },
    { id: 'black-blue',      name: 'black-n-blue',               sub: 'blackened · blue cheese',    price: 6.95,  available: true,  todaySpecial: false, category: 'burgers' },
    { id: 'cardiac',         name: 'the cardiac arrest',         sub: 'double everything',          price: 8.99,  available: true,  todaySpecial: false, category: 'burgers' },

    { id: 'frog-legs',       name: 'frog leg dinner',            sub: 'house spec. · since 1933',   price: 11.95, available: true,  todaySpecial: true,  category: 'frog-legs' },
    { id: 'bullfrog',        name: 'the bullfrog',               sub: 'double · 2 sauces',          price: 15.99, available: true,  todaySpecial: false, category: 'frog-legs' },
    { id: 'ny-strip',        name: 'ny strip',                   sub: '12oz hand-cut',              price: 13.95, available: true,  todaySpecial: false, category: 'frog-legs' },
    { id: 'wings-basket',    name: 'hot wings basket',           sub: '6 wings · pick sauce',       price: 9.99,  available: true,  todaySpecial: false, category: 'frog-legs' },
    { id: 'crab-cakes',      name: 'crab cakes',                 sub: 'lump · remoulade',           price: 14.49, available: true,  todaySpecial: false, category: 'frog-legs' },

    { id: 'reuben',          name: 'reuben',                     sub: 'corned beef · rye',          price: 6.95,  available: true,  todaySpecial: false, category: 'sandwiches' },
    { id: 'grilled-cheese',  name: '3-cheese grilled cheese',    sub: 'three cheeses',              price: 6.95,  available: true,  todaySpecial: false, category: 'sandwiches' },
    { id: 'prime-philly',    name: 'prime rib philly',           sub: 'prime rib · provolone',      price: 7.95,  available: true,  todaySpecial: false, category: 'sandwiches' },
    { id: 'pork-tenderloin', name: 'pork tenderloin',            sub: 'hand-breaded',               price: 6.95,  available: true,  todaySpecial: false, category: 'sandwiches' },

    { id: 'draft-12',        name: 'draft beer · 12oz',          sub: 'house tap',                  price: 2.25,  available: true,  todaySpecial: false, category: 'drinks' },
    { id: 'draft-pitcher',   name: 'draft pitcher',              sub: 'house tap',                  price: 6.50,  available: true,  todaySpecial: false, category: 'drinks' },
    { id: 'green-frog-drink',name: 'the green frog (cocktail)',  sub: 'midori · vodka · lime',      price: 8.50,  available: true,  todaySpecial: true,  category: 'drinks' }
  ],
  events: [
    { day: 14, month: 'May', title: '50¢ wing monday',        sub: 'half-off wings all night · house buffalo · honey bbq', time: '5p — close' },
    { day: 15, month: 'May', title: 'build-your-own burger',  sub: '$2 off any burger · tuesday tradition',                time: '5p — close' },
    { day: 17, month: 'May', title: 'AYCE frog legs ✦',       sub: 'all you can eat · house spec. since 1933',             time: '5p — close' },
    { day: 18, month: 'May', title: 'AYCE fish fry',          sub: 'all you can eat broiled cod · slaw · pub fries',       time: '5p — close' },
    { day: 22, month: 'May', title: 'trivia night',           sub: 'team trivia · prizes · house bar tab',                 time: '7p — 9p' },
    { day: 25, month: 'May', title: 'live music · acoustic',  sub: 'local act · no cover · cash tip jar',                  time: '8p — 11p' }
  ],
  customers: [
    { name: 'Maddie Reyes',    visits: 47, spend: 832.40, lastSeen: 'today',       initial: 'M', tier: 'gold'   },
    { name: 'Owen Patterson',  visits: 38, spend: 612.50, lastSeen: 'today',       initial: 'O', tier: 'gold'   },
    { name: 'Rae Tanaka',      visits: 31, spend: 488.20, lastSeen: 'yesterday',   initial: 'R', tier: 'silver' },
    { name: 'Jules Hartman',   visits: 28, spend: 553.10, lastSeen: '2 days ago',  initial: 'J', tier: 'silver' },
    { name: 'Kai Lindstrom',   visits: 22, spend: 411.00, lastSeen: '3 days ago',  initial: 'K', tier: 'silver' },
    { name: 'Sam Boswell',     visits: 18, spend: 287.40, lastSeen: '5 days ago',  initial: 'S', tier: 'bronze' },
    { name: 'Theo Gonzales',   visits: 16, spend: 248.10, lastSeen: '1 week ago',  initial: 'T', tier: 'bronze' },
    { name: 'Reyna Mendez',    visits: 12, spend: 188.90, lastSeen: '1 week ago',  initial: 'R', tier: 'bronze' }
  ],
  settings: {
    address: '820 Spring St, Fort Wayne, IN 46808',
    phone: '(260) 420-3764',
    facebook: '@greenfroginnfw',
    pickupMin: 15,
    hours: {
      mon: '11a — 11p', tue: '11a — 11p', wed: '11a — 11p', thu: '11a — 11p',
      fri: '11a — 1a',  sat: '11a — 1a',  sun: '11a — 11p'
    }
  }
};

/* ----- State persistence ----- */
function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(ADMIN_KEY));
    if (stored && stored.menu && stored.orders) return stored;
  } catch {}
  return structuredClone(SEED);
}
function saveState(state) {
  localStorage.setItem(ADMIN_KEY, JSON.stringify(state));
}

let state = loadState();

function fmt(n) { return `$${n.toFixed(2)}`; }
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

const ORDER_PRIORITY = 'fifo';

function sortOrders(orders) {
  const stage = { pending: 0, ready: 1, done: 2 };
  return orders.slice().sort((a, b) => {
    if (stage[a.status] !== stage[b.status]) return stage[a.status] - stage[b.status];
    return b.mins - a.mins;
  });
}

function orderCard(o) {
  return el('article', { class: `order is-${o.status}` },
    el('div', { class: 'order__head' },
      el('span', { class: 'order__num' }, o.num),
      el('span', { class: 'order__time' }, `${o.mins}m ago`)
    ),
    el('div', { class: 'order__name' }, `for ${o.name}`),
    el('ul', { class: 'order__items' }, ...o.items.map(i => el('li', {}, '· ' + i))),
    el('div', { class: 'order__foot' },
      el('span', { class: 'order__total' }, fmt(o.total)),
      o.status !== 'done' ? el('button', { class: 'order__action', data: { advance: o.num } },
        o.status === 'pending' ? 'mark ready' : 'mark picked up'
      ) : el('span', { style: 'font-family:var(--font-hand);color:var(--moss-deep)' }, 'picked up ✓')
    )
  );
}

function renderOrders() {
  const container = document.querySelector('[data-orders]');
  if (!container) return;
  container.replaceChildren();
  const filter = document.querySelector('.orders-filter .chip.is-active')?.dataset.filter || 'all';
  const orders = sortOrders(state.orders).filter(o => filter === 'all' || o.status === filter);
  if (!orders.length) {
    container.append(el('div', { class: 'card', style: 'text-align:center;color:var(--ember-deep);font-family:var(--font-hand);font-size:1.2rem' }, 'no orders here yet ✦'));
    return;
  }
  for (const o of orders) container.append(orderCard(o));
  const pending = state.orders.filter(o => o.status === 'pending').length;
  const ready   = state.orders.filter(o => o.status === 'ready').length;
  const navCount = document.querySelector('[data-nav-count="orders"]');
  if (navCount) navCount.textContent = pending + ready || '';
}

function renderOrdersMini() {
  const container = document.querySelector('[data-orders-mini]');
  if (!container) return;
  container.replaceChildren();
  const recent = sortOrders(state.orders).slice(0, 4);
  for (const o of recent) container.append(orderCard(o));
}

function renderDashboardStats() {
  const totalRev = state.orders.reduce((s, o) => s + o.total, 0);
  const orderCount = state.orders.length;
  const avgTicket = orderCount ? totalRev / orderCount : 0;
  const pending = state.orders.filter(o => o.status === 'pending').length;
  const ready = state.orders.filter(o => o.status === 'ready').length;

  const setText = (sel, v) => { const n = document.querySelector(sel); if (n) n.textContent = v; };
  setText('[data-quick-rev]', fmt(totalRev));
  setText('[data-quick-orders]', orderCount);
  setText('[data-quick-queue]', pending + ready);
  setText('[data-quick-avg]', fmt(avgTicket));

  // Today's specials
  const specials = document.querySelector('[data-today-specials]');
  if (specials) {
    specials.replaceChildren();
    const todays = state.menu.filter(m => m.todaySpecial);
    todays.forEach(item => {
      specials.append(el('div', { style: 'display:flex;justify-content:space-between;padding:.6rem .75rem;background:var(--cream);border:1.5px solid var(--midnight);border-radius:8px' },
        el('div', {},
          el('div', { style: 'font-family:var(--font-display);font-weight:700;color:var(--midnight)' }, item.name),
          el('div', { style: 'font-family:var(--font-hand);color:var(--ember-deep);font-size:1rem' }, item.sub)
        ),
        el('span', { style: 'font-family:var(--font-display);font-weight:800;color:var(--ember-deep)' }, fmt(item.price))
      ));
    });
    if (!todays.length) {
      specials.append(el('div', { style: 'color:var(--ink-soft);font-family:var(--font-hand);text-align:center;padding:.5rem' }, 'no specials marked yet — head to menu tab'));
    }
  }
}

function renderStats() {
  const totalRev = state.orders.reduce((s, o) => s + o.total, 0);
  const orderCount = state.orders.length;
  const avgTicket = orderCount ? totalRev / orderCount : 0;
  const pending = state.orders.filter(o => o.status === 'pending').length;
  const stats = [
    { label: "today's revenue", val: fmt(totalRev), delta: '↑ 18% vs yesterday', deltaClass: 'up' },
    { label: 'orders today',    val: orderCount,    delta: '↑ 6 vs avg',          deltaClass: 'up' },
    { label: 'avg ticket',      val: fmt(avgTicket),delta: '↑ $2.20 vs week',    deltaClass: 'up' },
    { label: 'in queue',        val: pending,       delta: pending ? 'eyes up' : 'all caught up', deltaClass: pending ? 'down' : 'up' }
  ];
  document.querySelectorAll('[data-stat-row]').forEach(row => {
    row.replaceChildren();
    for (const s of stats) {
      row.append(el('div', { class: 'stat' },
        el('div', { class: 'stat__label' }, s.label),
        el('div', { class: 'stat__value' }, s.val),
        el('div', { class: `stat__delta ${s.deltaClass}` }, s.delta)
      ));
    }
  });

  // Customer-tab stat row
  const cust = state.customers;
  const totalCust = cust.length;
  const totalSpend = cust.reduce((s, c) => s + c.spend, 0);
  const gold = cust.filter(c => c.tier === 'gold').length;
  const recent = cust.filter(c => c.lastSeen === 'today' || c.lastSeen === 'yesterday').length;
  const cstats = [
    { label: 'tracked customers', val: totalCust,           delta: 'top 8 listed',    deltaClass: 'up' },
    { label: 'gold members',      val: gold,                delta: '20+ visits',      deltaClass: 'up' },
    { label: 'total spend (top)', val: fmt(totalSpend),     delta: 'lifetime',        deltaClass: 'up' },
    { label: 'in last 24h',       val: recent,              delta: 'visits',          deltaClass: 'up' }
  ];
  document.querySelectorAll('[data-stat-row-cust]').forEach(row => {
    row.replaceChildren();
    for (const s of cstats) {
      row.append(el('div', { class: 'stat' },
        el('div', { class: 'stat__label' }, s.label),
        el('div', { class: 'stat__value' }, s.val),
        el('div', { class: `stat__delta ${s.deltaClass}` }, s.delta)
      ));
    }
  });
}

function renderMenu() {
  const container = document.querySelector('[data-menu-edit]');
  if (!container) return;
  container.replaceChildren();
  for (const item of state.menu) {
    const card = el('div', { class: `menu-edit ${item.available ? '' : 'is-disabled'}`, data: { id: item.id } },
      el('div', { class: 'menu-edit__name' }, item.name,
        item.todaySpecial ? el('span', { style: 'font-family:var(--font-hand);color:var(--ember-deep);font-size:.95rem' }, 'today ✦') : null
      ),
      el('div', { class: 'menu-edit__sub' }, item.sub),
      el('div', { class: 'menu-edit__price' },
        el('span', {}, '$'),
        el('input', { type: 'number', step: '0.25', value: item.price, data: { field: 'price' } })
      ),
      el('div', { class: 'menu-edit__row' },
        el('label', { class: 'toggle' },
          el('input', { type: 'checkbox', checked: item.available, data: { field: 'available' } }),
          el('span', { class: 'toggle__track' }),
          el('span', {}, item.available ? 'available' : 'sold out')
        ),
        el('button', { class: 'chip', data: { special: item.id } }, item.todaySpecial ? '★ today' : 'mark today')
      )
    );
    container.append(card);
  }
}

function renderAnalytics() {
  const days = ['mon','tue','wed','thu','fri','sat','sun'];
  const revenue = [1420, 1180, 1640, 2245, 2480, 2080, 795];
  const max = Math.max(...revenue);
  const chart = document.querySelector('[data-chart-rev]');
  if (chart) {
    chart.replaceChildren();
    days.forEach((d, i) => {
      chart.append(el('div', { class: 'chart-bar__col' },
        el('div', { class: 'chart-bar__bar', style: `height:${(revenue[i]/max)*100}%` },
          el('span', { class: 'chart-bar__val' }, fmt(revenue[i]))
        ),
        el('span', { class: 'chart-bar__label' }, d)
      ));
    });
  }
  const top = document.querySelector('[data-top-list]');
  if (top) {
    top.replaceChildren();
    const sellers = [
      { name: 'frog leg dinner',     sold: 124, rev: 1481.80 },
      { name: 'frog burger',         sold:  98, rev:  681.10 },
      { name: 'hot wings basket',    sold:  82, rev:  819.18 },
      { name: 'the bullfrog',        sold:  54, rev:  863.46 },
      { name: 'draft pitcher',       sold:  72, rev:  468.00 }
    ];
    sellers.forEach((s, i) => {
      top.append(el('div', { class: 'top-item' },
        el('span', { class: 'top-rank' }, '#' + (i+1)),
        el('div', {},
          el('div', { class: 'top-name' }, s.name),
          el('div', { class: 'top-meta' }, `${s.sold} sold this week`)
        ),
        el('span', { class: 'top-rev' }, fmt(s.rev))
      ));
    });
  }
}

function renderAccounting() {
  const tbody = document.querySelector('[data-acct-rows]');
  if (!tbody) return;
  const rows = [
    { cat: 'frog legs & platters', rev: 3920, cost: 1488, profit: 2432 },
    { cat: 'gourmet burgers',      rev: 2860, cost: 1144, profit: 1716 },
    { cat: 'starters & sides',     rev: 1840, cost:  662, profit: 1178 },
    { cat: 'drafts & drinks',      rev: 2410, cost:  723, profit: 1687 },
    { cat: 'sandwiches',           rev:  810, cost:  340, profit:  470 }
  ];
  tbody.replaceChildren();
  let totalRev = 0, totalCost = 0, totalProfit = 0;
  for (const r of rows) {
    totalRev += r.rev; totalCost += r.cost; totalProfit += r.profit;
    tbody.append(el('tr', {},
      el('td', {}, r.cat),
      el('td', { class: 'num' }, fmt(r.rev)),
      el('td', { class: 'num' }, fmt(r.cost)),
      el('td', { class: 'num' }, fmt(r.profit)),
      el('td', { class: 'num' }, ((r.profit/r.rev)*100).toFixed(0) + '%')
    ));
  }
  tbody.append(el('tr', { class: 'total' },
    el('td', {}, 'TOTAL · this week'),
    el('td', { class: 'num' }, fmt(totalRev)),
    el('td', { class: 'num' }, fmt(totalCost)),
    el('td', { class: 'num' }, fmt(totalProfit)),
    el('td', { class: 'num' }, ((totalProfit/totalRev)*100).toFixed(0) + '%')
  ));
}

function renderEvents() {
  const list = document.querySelector('[data-events-list]');
  if (!list) return;
  list.replaceChildren();
  for (const ev of state.events) {
    list.append(el('div', { class: 'event' },
      el('div', { class: 'event__date' },
        el('div', { class: 'event__day' }, ev.day),
        el('div', { class: 'event__month' }, ev.month)
      ),
      el('div', {},
        el('div', { class: 'event__title' }, ev.title),
        el('div', { class: 'event__sub' }, ev.sub)
      ),
      el('span', { class: 'event__time' }, ev.time)
    ));
  }
}

function renderCustomers() {
  const list = document.querySelector('[data-customer-list]');
  if (!list) return;
  list.replaceChildren();
  for (const c of state.customers) {
    const tierColors = {
      gold:   { bg: 'var(--ember)',     fg: 'var(--midnight)' },
      silver: { bg: 'var(--moss)',      fg: 'var(--paper)'    },
      bronze: { bg: 'var(--peach)',     fg: 'var(--paper)'    }
    };
    const t = tierColors[c.tier] || tierColors.bronze;
    list.append(el('div', { class: 'customer-row' },
      el('div', { class: 'customer-row__avatar' }, c.initial),
      el('div', { class: 'customer-row__id' },
        el('div', { class: 'customer-row__name' }, c.name),
        el('div', { class: 'customer-row__meta' }, `last seen: ${c.lastSeen}`)
      ),
      el('div', { class: 'customer-row__stat' },
        el('div', { class: 'customer-row__num' }, c.visits),
        el('div', { class: 'customer-row__lbl' }, 'visits')
      ),
      el('div', { class: 'customer-row__stat' },
        el('div', { class: 'customer-row__num' }, fmt(c.spend)),
        el('div', { class: 'customer-row__lbl' }, 'lifetime')
      ),
      el('span', { class: 'customer-row__tier', style: `background:${t.bg};color:${t.fg}` }, c.tier)
    ));
  }
}

function renderSettings() {
  const s = state.settings;
  const set = (sel, val) => { const node = document.querySelector(sel); if (node) node.value = val; };
  set('[data-setting="address"]',   s.address);
  set('[data-setting="phone"]',     s.phone);
  set('[data-setting="facebook"]',  s.facebook);
  set('[data-setting="pickupMin"]', s.pickupMin);
  for (const [day, hours] of Object.entries(s.hours)) {
    set(`[data-setting="hours-${day}"]`, hours);
  }
}

function renderAll() {
  renderStats();
  renderDashboardStats();
  renderOrders();
  renderOrdersMini();
  renderMenu();
  renderAnalytics();
  renderAccounting();
  renderEvents();
  renderCustomers();
  renderSettings();
}

function switchTab(name) {
  document.querySelectorAll('.admin__nav button').forEach(b => {
    b.classList.toggle('is-active', b.dataset.tab === name);
  });
  document.querySelectorAll('.admin__tab').forEach(t => {
    t.classList.toggle('is-active', t.dataset.tab === name);
  });
  const titles = {
    dashboard:  ['dashboard',           "here's how the frog is doing today"],
    orders:     ['orders today',        'live pickup queue · refresh as they come in'],
    menu:       ['menu',                "edit prices, mark sold-out, set today's special"],
    analytics:  ['analytics',           "last 7 days · what's selling"],
    accounting: ['accounting',          'revenue, cost, profit · this week'],
    events:     ['events',              'upcoming nights at the frog'],
    customers:  ['customers',           'your regulars · loyalty program'],
    settings:   ['settings',            'hours, location, the boring stuff']
  };
  const [t, sub] = titles[name] || ['admin', ''];
  const titleNode = document.querySelector('[data-page-title]');
  const subNode = document.querySelector('[data-page-sub]');
  if (titleNode) titleNode.textContent = t;
  if (subNode) subNode.textContent = sub;
  history.replaceState(null, '', '#' + name);
}

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  const initialTab = (location.hash || '#dashboard').slice(1);
  switchTab(initialTab);

  document.addEventListener('click', e => {
    const tabBtn = e.target.closest('.admin__nav button');
    if (tabBtn) { switchTab(tabBtn.dataset.tab); return; }

    const advance = e.target.closest('[data-advance]')?.dataset.advance;
    if (advance) {
      const o = state.orders.find(o => o.num === advance);
      if (o) {
        o.status = o.status === 'pending' ? 'ready' : 'done';
        saveState(state);
        renderStats();
        renderDashboardStats();
        renderOrders();
        renderOrdersMini();
      }
    }

    const filter = e.target.closest('.orders-filter .chip');
    if (filter) {
      filter.parentElement.querySelectorAll('.chip').forEach(c => c.classList.toggle('is-active', c === filter));
      renderOrders();
    }

    const special = e.target.closest('[data-special]')?.dataset.special;
    if (special) {
      const item = state.menu.find(m => m.id === special);
      if (item) {
        item.todaySpecial = !item.todaySpecial;
        saveState(state);
        renderMenu();
        renderDashboardStats();
      }
    }
  });

  document.addEventListener('change', e => {
    const card = e.target.closest('.menu-edit');
    if (card) {
      const item = state.menu.find(m => m.id === card.dataset.id);
      if (!item) return;
      const field = e.target.dataset.field;
      if (field === 'price') item.price = parseFloat(e.target.value) || 0;
      if (field === 'available') item.available = e.target.checked;
      saveState(state);
      renderMenu();
      return;
    }
    const setting = e.target.closest('[data-setting]');
    if (setting) {
      const key = setting.dataset.setting;
      if (key.startsWith('hours-')) {
        const day = key.replace('hours-', '');
        state.settings.hours[day] = setting.value;
      } else if (key === 'pickupMin') {
        state.settings.pickupMin = parseInt(setting.value) || 15;
      } else {
        state.settings[key] = setting.value;
      }
      saveState(state);
    }
  });

  document.querySelector('[data-reset]')?.addEventListener('click', () => {
    if (confirm('Reset the demo data? (this only affects this browser)')) {
      state = structuredClone(SEED);
      saveState(state);
      renderAll();
    }
  });
});

window.FrogAdmin = { state, renderAll, saveState, ORDER_PRIORITY, switchTab };
