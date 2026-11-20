# Fonts served from this folder

- `NotoSansMath-Regular.woff2`: Noto Sans Math, Copyright 2022 The Noto Project Authors (https://github.com/notofonts/math), licensed under the SIL Open Font License, Version 1.1 (https://openfontlicense.org). Unmodified copy of the Google Fonts woff2 file. It is a fallback for maths symbols in plain text (⟨ ⟩ ∇ ⊗ ∫ …) that the text fonts lack; `app/layout.tsx` loads it with `next/font/local` and a `unicode-range` limited to the maths blocks, so it is only downloaded on pages that use such a symbol.

The other fonts (EB Garamond, Source Serif 4, Atkinson Hyperlegible, Lexend, all SIL OFL 1.1) are fetched by `next/font/google` at build time and served from this site.
