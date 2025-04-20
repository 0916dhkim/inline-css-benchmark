# Inline CSS Benchmark

## Method

I wrote 3 equivalent pages with inline css, Tailwind CSS, and Styled Components.
Each page had 6822 DOM elements (measured with `document.getElementsByTagName('*').length`).
For context, Amazon main page has ~2700 elements, YouTube feed ~7300 elements, and Gmail dashboard ~5500 elements.

I measured the performance of each page using https://pagespeed.web.dev

## Result

- Inline CSS
  - Mobile FCP: 1.4s
  - Mobile LCP: 1.4s
  - Mobile TBT: 130ms
  - Desktop FCP: 0.3s
  - Desktop LCP: 0.4s
  - Desktop TBT: 290ms
- Tailwind CSS
  - Mobile FCP: 1.4s
  - Mobile LCP: 1.4s
  - Mobile TBT: 140ms
  - Desktop FCP: 0.3s
  - Desktop LCP: 0.4s
  - Desktop TBT: 180ms
- Styled Components
  - Mobile FCP: 1.4s
  - Mobile LCP: 1.4s
  - Mobile TBT: 250ms
  - Desktop FCP: 0.3s
  - Desktop LCP: 0.3s
  - Desktop TBT: 160ms

## Conclusion

The choice of CSS didn't affect the FCP and LCP times in a meaningful way.

Inlining CSS does increase the TBT, so developers would need to pay more attention when rendering larger number of elements or applying more rules.
