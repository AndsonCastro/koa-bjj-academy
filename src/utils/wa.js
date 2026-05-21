const BASE = 'https://wa.me/13056140983';
export const wa = (msg) => `${BASE}?text=${encodeURIComponent(msg)}`;
