// Must match next.config.ts's `basePath`. next/image does not automatically
// prefix `src` with basePath under `images: { unoptimized: true }` in this
// Next.js version — confirmed by inspecting the static export output, where
// image src attributes came out as bare "/images/..." instead of
// "/bigfoot-adventures-site/images/...". Internal navigation uses next/link
// instead of raw <a> tags, since Link does handle basePath correctly.
export const BASE_PATH = "/bigfoot-adventures-site";
