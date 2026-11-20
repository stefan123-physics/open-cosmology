/** Pages of the High School get its own colours (app/theme-highschool.css, docs/HIGHSCHOOL-THEME.md). */
export const isHighSchoolPath = (path: string) => path === "/highschool" || path.startsWith("/highschool/");

/** Inline script for the <head>: sets data-site before the first paint (the same test as isHighSchoolPath).
 *  components/SiteSection.tsx keeps it in step on client-side navigation. */
export const SITE_SECTION_SCRIPT = `try{var p=location.pathname;if(p==='/highschool'||p.indexOf('/highschool/')===0)document.documentElement.setAttribute('data-site','highschool')}catch(e){}`;
