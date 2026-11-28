# Replacement sources for the High School (if Siyavula closes)

Checked 2026-11-28 on each provider's own pages, by an AI assistant. **Not legal advice:** this records what each page says. Robots.txt files were read with `curl`. Already ruled out by AGENTS.md (OpenStax, LibreTexts, Khan Academy, CK-12, IOPSpark, Wikiwijs, Wikipedia/Wikibooks, Light and Matter, ESA/CERN text, Isaac Physics, Springer, BCcampus) was not fetched.

Compatibility rule used: CC BY, CC BY-NC, CC BY-NC-SA (any version) or public domain may go into a CC BY-NC-SA 4.0 site. CC BY-NC-SA 3.0 (Unported and US) lets an adaptation use "a later version of this License with the same License Elements" (section 4(b)), so 3.0 material can go into 4.0.

## 1. Candidates already in the plan

### MIT OpenCourseWare
- **Licence:** CC BY-NC-SA 4.0. Adaptation allowed.
- **AI:** Terms (https://ocw.mit.edu/pages/privacy-and-terms-of-use/, "last updated 08/11/2026") have a section "Permitted Use of AI Training": "OCW content may be used to train, develop, and improve artificial intelligence". Non-commercial only, with attribution, derivatives under CC BY-NC-SA 4.0. No TDM or scraping clause. robots.txt: `User-Agent: * Allow: /`, no AI-bot rules.
- **Third parties:** external sites have their own terms; items marked "excluded from our Creative Commons license" or "All rights reserved" stay out (as now).
- **High-school material:** "Highlights for High School" **has ended**: search results show MIT's notice that the site was taken down and part of it moved to OCW (the notice at support.learn.mit.edu returned **HTTP 403**; owner should open https://support.learn.mit.edu/hc/en-us/articles/42905588232091 in a browser). The OCW collection "Introductory Science and Math" lists only 8.01SC, 8.02, 18.01SC, 18.02SC (no high-school course).
  Courses at OCW level "High School" found: **RES.8-009 Introduction to Oscillations and Waves** (Summer 2017, MITES, rising seniors; lecture notes, problem sets, exams) and **RES.8-010 Introduction to Statistical Physics** (the URL is **Summer 2018**, not 2017 as docs/HIGHSCHOOL-PLAN.md §2.0 implies: `res-8-010-introduction-to-statistical-physics-summer-2018`; entropy from information, laws of thermodynamics, Boltzmann distribution).
  **RES.HS-001 "Chandra Astrophysics Institute"** (named in §2.0 for Block 7): its expected URL returned 404 and searches found no page. Owner should check whether it still exists.
  Confirmed live: 8.01SC, 8.20 (IAP 2021), 22.01 (Fall 2016), RES.18-005 Highlights of Calculus.
- **Coverage:** university level except RES.8-009/8-010. Blocks 1–3 (8.01SC), 5 (RES.8-009, 8.03), 6 (8.02), 4 partly (RES.8-010: entropy, not everyday heat), 7 (22.01 decay/half-life), 8 (8.20, 8.286). Needs simplifying to VWO level everywhere.
- **Verdict: good** (the AI terms are the clearest of all sources), but it cannot replace Siyavula at school level on its own.

### MIT BLOSSOMS (web.mit.edu/blossoms)
- **Licence:** https://web.mit.edu/blossoms/terms_use.html: "Creative Commons' Attribution-Noncommercial-Share Alike 3.0 license" (US port). Adaptation allowed (3.0 to 4.0 as above). Page footer "© 2021".
- **AI:** no clause about AI, TDM or scraping on the terms page. robots.txt blocks only system folders (`/afs/`, `/cgi-bin/`, …), no AI-bot rules.
- **Third parties:** "Any material under copyright held by a third party may be subject to additional intellectual property notices"; check each lesson's Credits.
- **Coverage (28 physics lessons on /videos/topic/physics):** free fall; uniform circular motion and centrifugal force; static and kinetic friction; forces and angles; static equilibrium; recognizing forces; gravity work; mystery of motion (momentum, kinetic energy); gravity assist and angular momentum; physics of pool, racing cars, boomerangs, donkey carts, sailing, kites; Gay-Lussac's gas law (American football); elasticity of solids; plasma, the fourth state of matter; ice cube melting in fresh vs salt water; soap bubbles; mysteries of magnetism; fingerprinting gravity; galaxies and dark matter; measuring distances in the Milky Way; earthquakes. Also a maths section. These are 1–2 lesson video modules with hand-outs, good level (secondary school), but they are single topics, not a course.
- **Verdict: good** as support for Blocks 1–4, 6 and 8; not a main source.

### OpenLearn (Open University)
- **Licence:** FAQ (https://www.open.edu/openlearn/about-openlearn/frequently-asked-questions-on-openlearn): content OpenLearn owns is CC BY-NC-SA 4.0; derivatives must keep OU and author credit and add a canonical link to the OpenLearn URL; no implied endorsement.
- **AI:** no AI, TDM or scraping clause in the FAQ, nor in the OU "Conditions of use of Open University websites" (https://about.open.ac.uk/strategy-and-policies/policies-and-statements/conditions-use-open-university-websites, no date shown). **www.open.edu robots.txt could not be read**: it returns HTTP 403 / a Cloudflare challenge to automated clients. Owner should open https://www.open.edu/robots.txt in a browser and look for `ai-train`, GPTBot, ClaudeBot.
- **Third parties:** extracts from other rights holders listed in each course's acknowledgements may not be modified or used alone; images carry their own licence symbol; embedded third-party content not covered.
- **Coverage (found):** *Dynamics* (position, velocity, acceleration, Newton's laws; extract from MST210), *What are waves?*, *Electromagnetism: testing Coulomb's law* (level 2, 4 h), *The science of nuclear energy*, *Particle physics* (level 1, 5 h), *The restless Universe* (classical to quantum, level 2), *Understanding science: what we cannot know* week 3 (quantum), *Galaxies, stars and planets* (level 1, 8 h), *Moons of our Solar System*, *An introduction to exoplanets*, *Unsolved problems in cosmology*. The OpenLearn physics listing has 7 pages (79 items, articles mixed in) and could not be filtered automatically: owner should browse it for maths and heat titles. Level: first-year Open University, close to VWO.
- **Verdict: usable with care** (robots.txt unverified; acknowledgements must be read per course). Patchy coverage: Blocks 1, 5, 6, 7, 8.

### Stitz–Zeager, *Precalculus*
- **Licence:** https://www.stitz-zeager.com/ shows a CC BY-NC-SA 3.0 badge; current text is the 3rd Corrected Edition (July 2013), a preliminary 4th edition and "Precalculus 4i" on Ximera. Adaptation allowed. The PDF front matter could not be fetched (connection reset): read the copyright page by hand.
- **AI:** none on the site. robots.txt has only a sitemap line, no AI rules.
- **Coverage:** Block 0 only: Chapter 0 prerequisites; 1 relations and functions; 2 linear and quadratic; 3 polynomial; 4 rational; 5 further topics in functions; 6 exponential and logarithmic; 7–9 systems, conics, sequences; 10 trigonometry; 11 applications of trigonometry (vectors, polar). Level: US college algebra, fits VWO wiskunde B.
- **Verdict: good** for Block 0.

### CLP Calculus (UBC)
- **Licence:** https://personal.math.ubc.ca/~CLP/CLP1/: "licensed under a Creative Commons BY-NC-SA 4.0 International License". The main page asks non-UBC users to email clp@ugrad.math.ubc.ca (a request, not a condition). Adaptation allowed.
- **AI:** none on the pages. personal.math.ubc.ca robots.txt returned **403** to curl; owner may open it in a browser.
- **Coverage:** Block 0 only (derivatives, integrals); first-year university level, above VWO in places.
- **Verdict: good** for the calculus lessons of Block 0.

### NASA (science.nasa.gov, nasa.gov, Glenn, Imagine the Universe)
- **Licence:** https://www.nasa.gov/nasa-brand-center/images-and-media/ (updated Oct 27, 2026): NASA content is "generally are not subject to copyright in the United States"; insignia, logotype and identifiers are not public domain; credit NASA as source.
- **AI (new since 2026-11-20 wording):** the page now uses "Super Intelligence (SI)" terms (citing a Sept. 29, 2026 executive order). It says insignia may not "appear with SI generated imagery"; outputs "should be attributed to the SI product itself, not NASA"; do "not imply any review or permission"; NASA "strongly encourages" marking SI-generated products. No ban on reading or rewriting. This matches the current rule (no insignia, never "according to NASA"); consider saying in the credits that AI helped rewrite NASA material.
- **Third parties:** "NASA occasionally uses copyright-protected material of third parties"; that gives no rights to others.
- robots.txt (science.nasa.gov, www1.grc.nasa.gov, imagine.gsfc.nasa.gov): no AI-bot rules.
- **Coverage, larger than the plan assumes:** the Glenn Research Center *Beginner's Guide to Aeronautics* (https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/) has school-level pages on Newton's laws, free fall, equations of motion, relative velocity, weight and gravitational force, vectors, conservation of energy, momentum and mass, centre of gravity, **gas pressure, temperature, density, Boyle's law, Charles and Gay-Lussac's law, ideal gas equation of state, kinetic theory of gases, specific heats, heat transfer, zeroth, first and second law of thermodynamics, entropy, work done by a gas**. *Imagine the Universe* (imagine.gsfc.nasa.gov) covers the EM spectrum, spectra and atoms; science.nasa.gov covers the universe, dark matter and dark energy. So NASA covers Blocks 1–4 (mechanics and gases at school level), 5 (EM spectrum) and 7–8.
- **Verdict: good**; Glenn is the best open source found for Block 4.

### ESO (eso.org)
- **Licence:** https://www.eso.org/public/copyright/ (no date): images, videos, "texts of press releases, announcements, pictures of the week, blog posts and captions" are CC BY 4.0; "other texts on the ESO website are not released under Creative Commons"; no logo; 2004 education-page images are third-party.
- **AI:** "you must clearly indicate if you have used AI to modify our content". No TDM clause. robots.txt has no AI-bot rules.
- **Coverage:** Block 8 only (news-level astronomy and cosmology).
- **Verdict: good** for Block 8, with the AI note in the credits (as now).

### PhET
- The licensing page is rendered by JavaScript and returned no text to automated fetching today; robots.txt has no AI-bot rules. Rely on the 2026-11-20 check in AGENTS.md (CC BY-NC 4.0, no AI clause). Simulations only, no text.
- **Verdict: good** for interactive support in all blocks; not a text source.

## 2. New candidates

### Open Yale Courses (oyc.yale.edu): PHYS 200, PHYS 201, ASTR 160
- **Licence:** https://oyc.yale.edu/terms (no date): "Most of the lectures and course material within Open Yale Courses are licensed under a Creative Commons" … "Attribution-Noncommercial-Share Alike 3.0 license". Attribution must name the Yale faculty member, Yale and the OYC URL; web reuse should include the licence. Adaptation allowed (3.0 to 4.0). **This settles AGENTS.md's open point on Yale ASTR 160 ("licence unclear … until the Terms of Use on oyc.yale.edu are checked"):** the terms say CC BY-NC-SA 3.0.
- **AI:** no AI, TDM or scraping clause. robots.txt has no AI-bot rules.
- **Third parties:** "third-party content is not covered under the Creative Commons license"; check each lecture.
- **Coverage:** PHYS 200 (Shankar), 24 lectures: vectors, Newton's laws, inclined planes, work-energy, Kepler, momentum, rotation, torque, relativity, simple harmonic motion and waves, fluids and Bernoulli, thermodynamics, first and second law, entropy. PHYS 201, 25 lectures: electrostatics, fields, Gauss, potential, capacitors, resistance, circuits, magnetism, Ampère, Faraday and Lenz, AC circuits, Maxwell and EM waves, **ray optics, wave theory of light**, quantum experiments and wave-particle duality. Transcripts are full and clear. Level: first-year university, but Shankar's explanations simplify well. Blocks 1–7.
- **Verdict: good** (strong for 5 optics, 6 and 7).

### astroEDU (IAU Office of Astronomy for Education, astroedu.iau.org)
- **Licence:** https://astroedu.iau.org/en/about/: "all the astroEDU activities will be licensed through the Creative Commons Attribution 4.0 International (CC BY 4.0)". No terms page linked; robots.txt is 404 (no rules).
- **AI:** none found.
- **Third parties:** none stated on the about page; check each activity's image credits.
- **Coverage:** hands-on activities (ages listed), mostly 10–19: measuring the sky, measuring an exoplanet, exoplanet transits, the gravity battle, how telescopes work, hidden rainbows (spectra), light play, the 3D Universe series (Milky Way, Laniakea), SKAO and invisible light. Blocks 5 (light), 7 (spectra) and 8; activities, not textbook text.
- **Verdict: usable with care** (good licence, thin as a text source).

### Murphy, *Energy and Human Ambitions on a Finite Planet* (UC San Diego, eScholarship)
- **Licence:** reported CC BY-NC 4.0 on eScholarship and the Open Textbook Library ("© 2022 T. W. Murphy, Jr.; Creative Commons Attribution-NonCommercial 4.0"). The eScholarship page returned no text and the PDF did not download automatically, so **the front matter was not read**: owner should open https://escholarship.org/uc/item/9js5291m and check the copyright page and figure credits (171 figures).
- **AI:** none found. escholarship.org robots.txt blocks only Amazonbot fully.
- **Coverage:** Blocks 3–4 (energy, power, heat engines, energy in society); non-majors university level, algebra only, close to VWO.
- **Verdict: usable with care** until the front matter is read.

### TeachEngineering (teachengineering.org)
- **Terms:** https://www.teachengineering.org/policies/termsofuse (no date): no Creative Commons licence; academic users need "prior authorization" to "externally distribute … modified or unmodified versions"; users agree not "to scrape data". (Its robots.txt explicitly allows GPTBot and ClaudeBot, but the terms decide.)
- **Verdict: not usable.**

### Also looked at
- *Body Physics* (Open Oregon, named in §2.0): openoregon.pressbooks.pub returned **HTTP 403** to the page fetch. Owner should open its front matter in a browser; if it says it is adapted from OpenStax *College Physics*, it falls under Writing rule 10 and must not be used.
- Illustrative Mathematics high school: licence page not readable automatically; not checked.

## 3. Ranked coverage of the nine blocks without Siyavula

| Block | Sources, best first | Gaps |
|---|---|---|
| 0 Maths toolkit | Stitz–Zeager; CLP-1/2; MIT RES.18-005; BLOSSOMS maths | units, scientific notation, significant figures: write our own |
| 1 Motion | NASA Glenn; Yale PHYS 200 L1–4; MIT 8.01SC; BLOSSOMS (free fall, circular motion); OpenLearn *Dynamics* | none serious |
| 2 Forces and gravity | NASA Glenn; BLOSSOMS (friction, equilibrium, forces and angles); Yale PHYS 200 L3–4, 7; 8.01SC | none serious |
| 3 Energy and momentum | NASA Glenn; Yale PHYS 200 L5–8; 8.01SC; BLOSSOMS; Murphy | none serious |
| 4 Matter and heat | NASA Glenn (gas laws, kinetic theory, specific heat, heat transfer, laws of thermodynamics); Yale PHYS 200 L20–24; MIT RES.8-010; Murphy; BLOSSOMS (gas law, elasticity, plasma, melting) | **phase changes and latent heat**, conduction at school level: weak |
| 5 Waves, sound and light | MIT RES.8-009; Yale PHYS 200 L17–18 and PHYS 201 L14–18; OpenLearn *What are waves?*; NASA EM spectrum; astroEDU | **sound** (pitch, loudness, resonance) and school-level lenses: weak |
| 6 Electricity and magnetism | Yale PHYS 201 L1–15; MIT 8.02; BLOSSOMS magnetism; OpenLearn Coulomb's law; PhET | **simple circuits at school level** (series/parallel, household power): only university sources and PhET |
| 7 Atoms and radiation | MIT 22.01; Yale PHYS 201 L19–21; NASA Imagine the Universe; OpenLearn particle physics, nuclear energy, *Restless Universe* | atom models at school level: thin |
| 8 Modern physics and cosmology | NASA; ESO; OpenLearn; BLOSSOMS; astroEDU; MIT 8.20; Yale ASTR 160; site's 8.286 | none |

**Overall:** NASA Glenn + Yale PHYS 200/201 + MIT OCW + Stitz–Zeager cover Blocks 0–3 and 8 well and Blocks 4–7 adequately. No source found replaces Siyavula's school-level, textbook-style presentation; the weak spots are phase changes/latent heat, sound, school-level circuits and atom models.

**For the owner to open in a browser (blocked to automated fetching):** https://www.open.edu/robots.txt (Cloudflare challenge); the MIT "What happened to Highlights for High School" notice at support.learn.mit.edu (403); the Body Physics front matter on openoregon.pressbooks.pub (403); https://personal.math.ubc.ca/robots.txt (403); the Murphy front matter on eScholarship; whether MIT RES.HS-001 still exists.

## Additions after the research (2026-11-28, Account B, from pages the owner opened in a browser)

- **Siyavula robots.txt** (read by Account B with curl, 2026-11-28): one rule set for all crawlers (`User-agent: *`), no AI-crawler lines (no GPTBot, ClaudeBot, `ai-train`), and the textbook pages under `/read/` are not disallowed. (It disallows `/ai`, Siyavula's own product path.) With the CC BY 3.0 footer of the cited section pages and terms without an AI clause, nothing restricts AI-assisted rewriting of those pages. Of 560 section pages scanned on 2026-11-20, 462 carry the CC BY footer and 98 a closed-copyright footer; the closed ones form 13 whole chapters (equations and inequalities Gr 10–11, probability Gr 10–12, electric circuits Gr 10–12, longitudinal waves Gr 10, classification of matter Gr 10, quantitative aspects of chemical change Gr 10–11, the lithosphere Gr 11). None of the 99 pages the site cites is closed. No public reason for the closed chapters was found; the owner asks Siyavula.
- **OpenLearn robots.txt** (pasted by the owner, 2026-11-28): names GPTBot, Amazonbot, CCBot, ClaudeBot and Google-Extended together with `User-agent: *` and gives them `Allow: /` (only admin, profile and badge paths are disallowed). OpenLearn explicitly lets AI crawlers in. **Verdict raised to good** for AI use; coverage at school level stays patchy.
- **Body Physics: Motion to Metabolism** (Lawrence Davis, Open Oregon; book page pasted by the owner): "Copyright © by Lawrence Davis is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License, except where otherwise noted." No mention of OpenStax on the book page; no AI clause. The first edition was archived on 2026-03-27; a second edition exists at https://openoregon.pressbooks.pub/bodyphysics2ed/ (use that one). Coverage: measurement and uncertainty, density and buoyancy, forces, friction, torque, motion, momentum, work, energy, power, heat transfer, thermal radiation, cooling, the laws of thermodynamics (High School Blocks 1–4; it partly fills the Block 4 gap). **Still to check** before use: the "Who Created Body Physics?" front-matter page (whether any part is adapted from OpenStax; if so, Writing rule 10 rules that part out) and the second edition's licence.
- **Murphy, *Energy and Human Ambitions on a Finite Planet*** (copyright page pasted by the owner): "© 2022 T. W. Murphy, Jr.", licensed CC BY-NC 4.0; images not created by the author are listed in a separate Image Attributions section (third-party: never reuse; the cover photos are courtesy NASA and the author). No AI clause. CC BY-NC material may be adapted into this CC BY-NC-SA site with attribution (as for Ferreras). **Verdict: good with care** (text only, credit author and publisher, indicate changes, no third-party images). Coverage: energy, power, heat and thermodynamics, nuclear and solar energy (supports Blocks 3, 4, 7, 8).
