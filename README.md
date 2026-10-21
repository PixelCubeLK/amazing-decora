# Amazing Decora Website

This is a premium, multi-page website for Amazing Decora, built with **HTML, CSS, JavaScript, and Tailwind CSS**.

## How to Run
### CSS build

### Cloudflare Workers deployment

Set the Cloudflare build command to `npm run build` and deploy command to `npx wrangler deploy`. The root `wrangler.jsonc` publishes only `dist/`; never pass `--assets .` or use the repository root as the assets directory. The build copies website assets into `dist/` using an explicit allowlist and excludes `node_modules` and build configuration. HTML handling preserves the existing `.html` URLs. The Worker name is `amazing-decora`.

Install build tools with `npm ci`, then run `npm run build` to generate the minified `styles/site.css`. Run `npm run dev:css` to rebuild automatically while editing. Tailwind scans all pages and shared JavaScript components; keep utility class names complete in source code so they are included. Custom overrides and animations load after the generated stylesheet.

Rebuild after adding or changing Tailwind classes. Deploy `styles/site.css` with the static site; Node.js and `node_modules` are not needed on the host. The generated CSS is checked into the project so the site also works without a local build.

Production URL: `https://amazingdecora.com/`. SEO canonical URLs, social previews and `sitemap.xml` use this origin.

Before launch, configure hosting to serve HTTPS and redirect HTTP and `www.amazingdecora.com` to this origin. Redirect `/index.html` to `/` permanently to match the homepage canonical. These redirects must be configured on the chosen host; they are not implemented by this static HTML project. Verify the domain in Google Search Console, submit `https://amazingdecora.com/sitemap.xml`, and inspect the live URLs after deployment. Keep sitemap URLs in sync when adding pages.

1.  Simply double-click `index.html` to open the website in your browser.
2.  Navigate through the menu to see Products, About Us, and Contact pages.

## Contact Form Setup (IMPORTANT)
The contact form is set up to send emails to **`amazingdecora100@gmail.com`**.
**For the form to work:**
1.  Submit a test message through the form on your website.
2.  Go to your Gmail (`amazingdecora100@gmail.com`).
3.  Look for an email from **FormSubmit**.
4.  **Click the "Activate" button** in that email.
Once activated, you will receive all future customer inquiries directly to your inbox.

## Project Structure

- `index.html`: homepage and website entry point.
- `pages/`: Products, About Us, and Contact pages.
- `images/`: images grouped by purpose.
- `components/footer.js`: global footer, product and company links, social links, contact details, and copyright. Edit this file to update every page.
- `script.js`: shared website behavior.
- `components/header.js`: global header, logo, menu links, active page styles, and mobile navigation. Edit this file to update the header across all pages.

## Images
Images are organized by purpose:
- `images/brand/`: rounded favicon and original source image.
- `images/hero/`: homepage hero image.
- `images/about/`: factory and company images.
- `images/products/`: pole, pot, and orchid product images.

## Business Details

- Name: Amazing Decora
- Address: No 475, Kainaka, Kaikawala, Matale
- Contact: +94740560413, +94766073750
- Email: amazingdecora100@gmail.com

## Contact & Ordering
-   "Inquire via WhatsApp" buttons on the Products page link to `+94 74 056 0413`.
-   Footer contains links to Facebook, Instagram, and TikTok on all pages.

## Recent Changes
-   Contact form is now fully functional and sends emails to `amazingdecora100@gmail.com`.
