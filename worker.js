const pages = new Set(['products', 'about', 'contact', 'privacy-policy',
  'terms-and-conditions', 'shipping-and-delivery', 'returns-and-refunds']);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const legacy = url.pathname.match(/^\/(?:pages\/)?([^/]+)\.html$/);
    const clean = url.pathname.match(/^\/([^/]+)\/?$/);
    if (legacy && pages.has(legacy[1])) {
      url.pathname = '/' + legacy[1];
      return Response.redirect(url.toString(), 301);
    }
    if (clean && pages.has(clean[1])) {
      if (url.pathname.endsWith('/')) {
        url.pathname = '/' + clean[1];
        return Response.redirect(url.toString(), 301);
      }
      url.pathname = '/pages/' + clean[1] + '.html';
      return env.ASSETS.fetch(new Request(url.toString(), request));
    }
    if (url.pathname === '/index.html') {
      url.pathname = '/';
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === '/') {
      url.pathname = '/index.html';
      return env.ASSETS.fetch(new Request(url.toString(), request));
    }
    return env.ASSETS.fetch(request);
  },
};
