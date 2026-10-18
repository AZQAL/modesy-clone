# Struktur dan Kode Proyek: modesy-clone

## Struktur Direktori
```
modesy-clone/
  AGENTS.md
  README.md
  next-env.d.ts
  next.config.ts
  package-lock.json
  package.json
  tsconfig.json
  public/
    fonts/
    icons/
    images/
      banners/
      brands/
      categories/
      products/
  src/
    app/
      globals.css
      layout.tsx
      page.tsx
      admin/
        page.tsx
      cart/
        page.tsx
      checkout/
        page.tsx
      products/
        page.tsx
        [id]/
          page.tsx
      profile/
        page.tsx
      register/
        page.tsx
      settings/
        edit-profile/
          page.tsx
        location/
          page.tsx
      wishlist/
        page.tsx
    components/
      auth/
        AccountDropdown.tsx
        LoginModal.tsx
      forms/
      home/
        FeaturedProducts.tsx
        HeroBanner.tsx
        LatestBlogPosts.tsx
        NewArrivals.tsx
        ShopByBrand.tsx
        ShopByCategory.tsx
        SpecialOffers.tsx
      layout/
        SiteFooter.tsx
        SiteHeader.tsx
      product/
        ProductActions.tsx
        ProductBreadcrumb.tsx
        ProductCard.tsx
        ProductCatalog.tsx
        ProductFilter.tsx
        ProductGrid.tsx
        ProductInfo.tsx
        ProductPagination.tsx
        ProductSearch.tsx
      ui/
    features/
      auth/
      cart/
      categories/
      orders/
      products/
        data/
          products.ts
        lib/
          shop-storage.ts
      reviews/
      vendor/
      wishlist/
    lib/
      supabase/
        auth-actions.ts
        client.ts
      utils/
    types/
```

## Isi File

### `AGENTS.md`
```
<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
```

### `README.md`
```
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```

### `next-env.d.ts`
```
/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";
import "./.next/dev/types/root-params.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

### `next.config.ts`
```
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
```

### `package-lock.json`
```
{
  "name": "modesy-clone",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "modesy-clone",
      "version": "0.1.0",
      "dependencies": {
        "@supabase/ssr": "^0.12.7",
        "@supabase/supabase-js": "^2.117.3",
        "lucide-react": "^1.55.0",
        "next": "16.4.0",
        "react": "19.3.0",
        "react-dom": "19.3.0"
      },
      "devDependencies": {
        "@tailwindcss/turbopack": "^4",
        "@types/node": "^20",
        "@types/react": "^19",
        "@types/react-dom": "^19",
        "babel-plugin-react-compiler": "1.0.0",
        "tailwindcss": "^4",
        "typescript": "^5"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.3.0.tgz",
      "integrity": "sha512-U4+70Pc5ZS9osnCBCE5Jha/ciHM+Yp+CNMNC/7HvYbNRk1Ldd+f7qO65W5qfhu/TCv+/ozljlXXe9Nj8419DMA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.29.7.tgz",
      "integrity": "sha512-Pb5ijPrZ89GDH8223L4UP8i6QApWxs04RbPQJTeWDV0/keR2E36MeKnyr6LYmUUvqRRI+Iv87SuF1W6ErINzYw==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.29.7.tgz",
      "integrity": "sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.8.tgz",
      "integrity": "sha512-Vj1jF3cPfxg7OAfoI7QnVKLoILlm2JF9pnVHrX8qx7AHMiYWT+NDAA7jChlNgRS4WTLc/fD1lXLmPixluj+3Gg==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.11.3",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.11.3.tgz",
      "integrity": "sha512-Xz4Tpyki7XyrpbUK1jR1AhdAdaXyhhY4lZ3neLodmhpuWfy2PAQN5B46sAiU4liOXGLkHypn/qU+jvfWSCYYLA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.1.0.tgz",
      "integrity": "sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.35.5.tgz",
      "integrity": "sha512-QRUlFQ0WxvdWyqqG/WtI3iupfD5rBzmCHXSdPsY91sAtVtTo7Q4cb6zOccZ3gqEqkr0f1As1ehLqmEpDsRf+lg==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.35.5.tgz",
      "integrity": "sha512-+BR255RhDlpygUpOc/Jdt1nT6DQ3XG/ERo5wbcdOf5Q320dKtPCKPLR1LJs9VGXRaMa8l1uUa0tkCNOXiAxZUw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-freebsd-wasm32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-freebsd-wasm32/-/sharp-freebsd-wasm32-0.35.5.tgz",
      "integrity": "sha512-Y/z91nEZ4uIBX5X3nfTovjU9lHNKFYbL2lpHCLVNmXQK03VIZvXBBt0KxbPGp2SdGSF+2mQU4e+hQaWOt86iAw==",
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "dependencies": {
        "@img/sharp-wasm32": "0.35.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.3.4.tgz",
      "integrity": "sha512-5R89nBYiRdUlSWJxPhO+GVtaXzXSxKnRu/xqMn3KTA3L9EB9Oy/P+Nn2f2vlhPuUdy/Zusb2DarbyTpGCfEDuw==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.3.4.tgz",
      "integrity": "sha512-iR2OKH80yi0U+dUplyh3/xdpFvps6YkCwsXenIJxqxR1v9o+xtKTGbS9H7cps+2Vxjc8B1j96p75NmTGjIhtpQ==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.3.4.tgz",
      "integrity": "sha512-LmRtTsOHuvM2+wlO2Db37dx5MiZhB0FvSunciw48YjdOkZz9KAiRbm8ujeMOA1INqmei5NapFxYEK1D1ZSidmw==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.3.4.tgz",
      "integrity": "sha512-Y3dgX/6lE2QhQb+Gxy0WZxfg9MEm/JBjamZpS2IklP7xIQoKN4hzAm7KcMVGtaVDt3neE9OKBC7vAfonA/Lr1A==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.3.4.tgz",
      "integrity": "sha512-Le6boB8Tai0Nis+gIxIpKx68UDVVIqdR8Tin5Yf1z2LJJQLDJvCDRqRu+jC2qCoD+eIomonmOwB4smBRxfVpYQ==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.3.4.tgz",
      "integrity": "sha512-aHkkIEHPRdQEegJN20MLmGtxYD9R2wQr3Cwpddnu5+YKMt6Uzax7S9h5gpZTo8wyrGuZSlfQ63OevL5mTyOC7Q==",
      "cpu": [
        "riscv64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.3.4.tgz",
      "integrity": "sha512-ra/mB6MikESDUO7Yg+Mi95bFBb9GsObURuhnOv3OqknjGe9sZrG8tCe9q0xSIGrtLgvgw0gKnFWcK4blSgQOuQ==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.3.4.tgz",
      "integrity": "sha512-GJ//SSXbnwSDes02umB3nDJLFcQzw8a18V8fyhqr6tV515tOEMdImjjxj1AoafMRz56F3PHgftnj1QEKSU1zkw==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.3.4.tgz",
      "integrity": "sha512-hvulFwtjUcagsis6BBxHwGFwWoNZjgYmULGVrZcyfNbjA8hKILbRxGg15/7w5HDyXHXUos/j6baAWqnCyQ2DWA==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.3.4.tgz",
      "integrity": "sha512-6zXKeE/p39I1AmA3cJG35eyBGNqNddLnUXjhwBnsGjFPWqf5VKkDBEqaEkPDoTEtkxwi2vv8Tcr2mDyP4So7Fg==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.35.5.tgz",
      "integrity": "sha512-LEaXK2WdXVK5ykcw0buWyPMsmLLL2vpHLD6yrNSW+JGEL3BZPA4tpKN6iaMc4AxTTAoaX/sU1rOL51lcIz48ZQ==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.35.5.tgz",
      "integrity": "sha512-LYVx5JTsOM2CBzmxreh+nl64/3H6Xb09iSLknqH47z2T2DFFxDeFLP5y4dJwe6H7uGQlHPyEEtIqyo3DYsRwdQ==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.35.5.tgz",
      "integrity": "sha512-QVxAAq8evVRI9ia2vqgwrmWucn5Dfv+JdWzj75pD8omHLPSP7f8p20O8jxzjCcuCEQEOtYOZUmX1hkiZ0kdevA==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-riscv64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.35.5.tgz",
      "integrity": "sha512-LtdreXguaavKODPIfzJ4kffx7UNt1omwtK0rch4EBbbSTXPnxWmYSayXdLJw0fJzQ97kHt1gL/yh4tvU+nCyRQ==",
      "cpu": [
        "riscv64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.35.5.tgz",
      "integrity": "sha512-UZasTOFiYzotTsGOCu42BfUzP6Tu6Do/947iRm1RsLKvlllxwGcn4RN27LibGWceix4Y+Pmw3jsnTcCQIgWjqA==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.35.5.tgz",
      "integrity": "sha512-SxFtLTeJInhAA9Q836kux2vZNeOBQEx658qvbboZScr0wIARym3IcGmW7KpVD5sbVg0Ojy+udFQdayYIZyoNog==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.35.5.tgz",
      "integrity": "sha512-9HbMclmI1zlNkFRs3z9/eBtDjfD0sGlrX1z6b1qwmiFY5ElDLh4BC0LPBdVp7z1DXFiKlIcznf+ZlsuZzLxQqg==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.35.5.tgz",
      "integrity": "sha512-4KOphqB035HrVdqLZfCgMzzERrQkkzOwRhl4OAkRO1YCldbaFjySXMaK534Mo0V+LndnlJk+sbUyLeU0ULyD1A==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.35.5.tgz",
      "integrity": "sha512-Ptsga1su4tQx+LLF1ECS9U6nz5kmrXKo6XVbtR48Ke3ZRxxgaWBu7IDtEe1quo8hiupwm6WFqxVlXaSf7IINGQ==",
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.11.3"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-webcontainers-wasm32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-webcontainers-wasm32/-/sharp-webcontainers-wasm32-0.35.5.tgz",
      "integrity": "sha512-hfhF/FmoQyTUkA0bIKFOtw536BQSeBMe6BF6QyWlrPxT754+TFLaZ7sKKTfvvM0yJgKgaYTwnFCIZ/GuDw5SUA==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/sharp-wasm32": "0.35.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.35.5.tgz",
      "integrity": "sha512-X4t7g+7ZA5DKblCBEXGjUqqemj4vczING/5viFwAL8h4N3qYeyjwdCvRLHi4EdOUI+2Z7UFlp1VM+p/AuEtm6Q==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.35.5.tgz",
      "integrity": "sha512-5Zm82LoBc43nhwNybZlG7Y1KO//Zhsn306fQl29ZOuStHLGTo3BWL83q3cznX0poxSAMuYL1On/BHBxkBeKr6A==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.35.5.tgz",
      "integrity": "sha512-x76eH0vEiHlcMQu8Y8IenntaACtddpT6W0wmXtWrnKcnKI7ME5DdgqhAD6SEWOEl1v2zDvkZDhFA9KnURwpfqg==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.6.0.tgz",
      "integrity": "sha512-T7jf+5zgsZHwNJ4lvQ7/aezbyk0nNX+zJVWpmHA7VYsEx7a7qr5Rg5IbtJFqkgze5Y2sruq1RUY8Q837Od7iFw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@next/env": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-16.4.0.tgz",
      "integrity": "sha512-pyLlT5oafGlX8X7xjgGNXz5dNIDSxREm+qD6i9VLSZiZFopA/XWl8NM/KPmLx/8EG/++c49iid3gNWSQW1+2dQ==",
      "license": "MIT"
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-16.4.0.tgz",
      "integrity": "sha512-yyZ+9MgViAKLLb5l1gPBGjRwnq3teNLb5Zx6JEw8LzNSTjlsnp+baUHFxTgl7PpjCmKf48VQfyipG1eBflb48Q==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-16.4.0.tgz",
      "integrity": "sha512-RePEEejEj1Auf5s9qEcG0JbcDP3ceNUS/ofNX8AhxzgIjTVlZIHMatlp16YplcSMpsVo/ZMQHJTjbMYJznjGUg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-16.4.0.tgz",
      "integrity": "sha512-HhsyCqd+NpmvDDVY/LqkAN24f+QVvXh3ie+PfcwKinWL2Mu826JymQxJXGjAIfmJ4VlHjp4Pe/nZtXtUoEMAqw==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-16.4.0.tgz",
      "integrity": "sha512-sN9Pf+Zh+RpZAOmbR7d8KAA8T61CVhawtbEJ2Bk6QrRzx6Z/6haaF4UiwBzytM96GRRRWZh9/WALIEO3npMamA==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-16.4.0.tgz",
      "integrity": "sha512-D5M5xLWQVd1CvR+L7BickM1weRfmM41x3L1NWcnKY/oyJJqr1qwaCgmu3dMAhLBOMdZwSuDCRV6DJRRpiUkbDQ==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-16.4.0.tgz",
      "integrity": "sha512-8d5WLS6a9YalqpOgXdlbvonFu+sIgjA+CO6tGzetrpPVcUL56foa7B7664h41rAlbLi5fJwK4vWji3zf4QDy+w==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-16.4.0.tgz",
      "integrity": "sha512-sQuOIiW3snb48UwrBcDMvFA/u03qtw2LeuSIxFIQ9AJuW9UG/4Ddsfo+eV73PnZwBhyncMtsKVh7PrzMol2/fA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-16.4.0.tgz",
      "integrity": "sha512-6/33lCuxpdHUy27RegyGM/5uTpF7YZd3UR4D0gpkOA/tWY5YR7msbQjqPgCZmSmxrrTLGCXYA4A8vT2H5DPGTQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@supabase/auth-js": {
      "version": "2.117.3",
      "resolved": "https://registry.npmjs.org/@supabase/auth-js/-/auth-js-2.117.3.tgz",
      "integrity": "sha512-XOZV+jllcU2Hzij8SwgM78zl0lOEr6BTjzi2MYkBb39nOAQzb5AelGpMUvVj7lwGSB11JmpAs/FEQroAyFzWEA==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=22.0.0"
      }
    },
    "node_modules/@supabase/functions-js": {
      "version": "2.117.3",
      "resolved": "https://registry.npmjs.org/@supabase/functions-js/-/functions-js-2.117.3.tgz",
      "integrity": "sha512-6GuizbP4N5xWaxEVUsI+UQpJdmMmn0t3sYNpObo9gCAldvM22gFjnYzRVmkHxp5ylU21azEYmiWVwk9iDgCMkQ==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=22.0.0"
      }
    },
    "node_modules/@supabase/phoenix": {
      "version": "0.4.5",
      "resolved": "https://registry.npmjs.org/@supabase/phoenix/-/phoenix-0.4.5.tgz",
      "integrity": "sha512-aAn9H9ovVyeApKy11OWOrrOGq8DV68yWeH4ud2lN9fzn4aO8Zb5GLL9m1pUg9nLqIcT+ZDfAcsZe0E/nqdv2lw==",
      "license": "MIT"
    },
    "node_modules/@supabase/postgrest-js": {
      "version": "2.117.3",
      "resolved": "https://registry.npmjs.org/@supabase/postgrest-js/-/postgrest-js-2.117.3.tgz",
      "integrity": "sha512-NpyTgullu6tw11ojYKTdZg9HannZ4mu4FUlhc9V5zDXOVllUJzEmuyLM+WWoYF0BurfrRvarimpm3SR8P0Gzfw==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=22.0.0"
      }
    },
    "node_modules/@supabase/realtime-js": {
      "version": "2.117.3",
      "resolved": "https://registry.npmjs.org/@supabase/realtime-js/-/realtime-js-2.117.3.tgz",
      "integrity": "sha512-4W4ISbreRygNXbhwqxeqyuRul8RPx+SF+Hp2IT8wctebQEHSVCULfKatiRiEhmasfoXvYm2AHV4XFsOxhoousA==",
      "license": "MIT",
      "dependencies": {
        "@supabase/phoenix": "0.4.5",
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=22.0.0"
      }
    },
    "node_modules/@supabase/ssr": {
      "version": "0.12.7",
      "resolved": "https://registry.npmjs.org/@supabase/ssr/-/ssr-0.12.7.tgz",
      "integrity": "sha512-wiBtEie1KkRJi9RrZWY3R2imRhX1JY7qMyUCH2z9AUk15gQebNEplM+urbCKamdxaTJLXUU6LlpkJsaxhojCEg==",
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.2"
      },
      "peerDependencies": {
        "@supabase/supabase-js": "^2.114.0"
      }
    },
    "node_modules/@supabase/storage-js": {
      "version": "2.117.3",
      "resolved": "https://registry.npmjs.org/@supabase/storage-js/-/storage-js-2.117.3.tgz",
      "integrity": "sha512-QhUxFC33Crlw6WDeA4hLADdi1PzjI3c4UJs7ivWHHEnU7ulmCWEZSDaRCuIfmsjUwbHYaIfRNFQNsm+IsGYS6w==",
      "license": "MIT",
      "dependencies": {
        "iceberg-js": "^0.8.1",
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=22.0.0"
      }
    },
    "node_modules/@supabase/supabase-js": {
      "version": "2.117.3",
      "resolved": "https://registry.npmjs.org/@supabase/supabase-js/-/supabase-js-2.117.3.tgz",
      "integrity": "sha512-K+f8PimXDunPWQ63CKRXaF5pbVPJxmfw5ryAnh0s9S9PkwcuqBjiSpIaqpF7KLDljeYwXIL85ST8QxaO0+XuvA==",
      "license": "MIT",
      "dependencies": {
        "@supabase/auth-js": "2.117.3",
        "@supabase/functions-js": "2.117.3",
        "@supabase/postgrest-js": "2.117.3",
        "@supabase/realtime-js": "2.117.3",
        "@supabase/storage-js": "2.117.3"
      },
      "engines": {
        "node": ">=22.0.0"
      },
      "peerDependencies": {
        "@opentelemetry/api": ">=1.0.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        }
      }
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.23",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.23.tgz",
      "integrity": "sha512-5lSsMOTXURePglDfvuAQUqkGek9Hg2kksOYay2m0+XR++b2NWYL/4sWyuvVBIs8oKnJaxkdi9whaL/sqN13afw==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.3.3.tgz",
      "integrity": "sha512-/T8IKEsf9VTU6tLjgC7+sv2mOPtQxzE2jMw7u4Tt40Tx+QSZxpzh95/H6cMKoja9XuW7iMdLJYBB0o9G1CaAgg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "^5.24.1",
        "jiti": "^2.7.0",
        "lightningcss": "1.32.0",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.3.3.tgz",
      "integrity": "sha512-krXjAikiaFSPaK/FkAQT5UTx3VormQaiZ5hBFlJZ9UFQGB/rwg1MZIhHAG9smMQRTdyJxP6Qt5MwMtdyU5FWrA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-x64": "4.3.3",
        "@tailwindcss/oxide-freebsd-x64": "4.3.3",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-musl": "4.3.3",
        "@tailwindcss/oxide-linux-x64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-x64-musl": "4.3.3",
        "@tailwindcss/oxide-wasm32-wasi": "4.3.3",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.3.3",
        "@tailwindcss/oxide-win32-x64-msvc": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.3.3.tgz",
      "integrity": "sha512-Y85A2gmPSkl5Ve5qR86GL4HT509cFqQh1aes9p3sSkyTPwt0Pppf3GkwGe4JPACcRYjgJIEhQgM6dBClnr0NYw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.3.3.tgz",
      "integrity": "sha512-BiaWatpBcERQFDlOjRDpIVXuFK5PJez5SA4JMg6VYZdBYU+qKfV/vqjcIs+IYmtitf1xYQZTwXvU/8y4lfZUGw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.3.3.tgz",
      "integrity": "sha512-fAeUqfV5ndhxRwai8cXGzdLvul9utWOmeTkv69unv4ZXixjn61Z+p9lCWdwOwA3TYboG3BwdVuN/RDjhBRl0mw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.3.3.tgz",
      "integrity": "sha512-iyf5bV6+wnAlflVeEy7R25dupxTNECZN5QMI0qNT6eT+EgaGdZcKhGkr5SdoaWiLJ3spLqIY9VCeSGrwmtg4kw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.3.3.tgz",
      "integrity": "sha512-aAYUprJAJQWWbRrPvtjdroZ56Md+JM8pMiopS6xGEwDfLhqj+2ver2p4nU4Mb3CRqcMmNBjo8KkUgcxhkzVQGQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.3.3.tgz",
      "integrity": "sha512-nDxldcEENOxZRzC2uu9jrutZdAAQtb+8WWDCSnWL1zvBk1+FN+x6MtDViPB5AJMfttVCUhehGWus3XBPgatM/w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.3.3.tgz",
      "integrity": "sha512-Md44bD6veX/PC5iyF8cDVnw4HBIANZepRZZ7a8DQOvkfo5WUBwcp6iAuCUz23u+4SUkhJlD3eL7hNdW8ezd/kA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.3.3.tgz",
      "integrity": "sha512-tx7us1muwOKAKWao2v/GaafFeQboE6aj88vC6ziN2NCGcRm8gWUhwjzg+YdVB1e4boAtdtma4L43onunI6NS4w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.3.3.tgz",
      "integrity": "sha512-SJxX60smvHgasZoBy11dX6YRjXJFovwWBoedhbQPOBzgFWBHGB+TVPWB9BxzR7TTxU8FQZAI2AyiNCMzFm8Img==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.3.3.tgz",
      "integrity": "sha512-jx1+rPhY/5Ympkktd656HBWEBLxP7dH06losBLjjf5vgCODXvi9KhtftWcMIwTFIDqBr7cRnQkdLnAG+IOlGvQ==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.11.1",
        "@emnapi/runtime": "^1.11.1",
        "@emnapi/wasi-threads": "^1.2.2",
        "@napi-rs/wasm-runtime": "^1.1.4",
        "@tybys/wasm-util": "^0.10.2",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.3.3.tgz",
      "integrity": "sha512-3rc292Ca2ceK6Ulcc/bAVnTs/3nDtoPhyEKlgPv+yQJQi/JS/AMJlqzxvlDacL1nekbrcf6bTqp/jV4qgnPxNQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.3.3.tgz",
      "integrity": "sha512-yJ0pwIVc/nYeGoV02WtsN8KYyLQv7kyI2wDnkezyJlGGjkd4QLwDGAwl47YpPJeuI0M0ObaXGSPjvWDPeTPggw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/turbopack": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/turbopack/-/turbopack-4.3.3.tgz",
      "integrity": "sha512-FgL4wRgItNdXcDjcgYUSd59gNsWqNVK4GotjZimZMmt7OOIkRNqH2QEUcRXLdBDXvwTsi5rkYxDxzfrFUkmObQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.3.3",
        "@tailwindcss/oxide": "4.3.3",
        "tailwindcss": "4.3.3"
      }
    },
    "node_modules/@types/node": {
      "version": "20.19.43",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.43.tgz",
      "integrity": "sha512-6oYBAi5ikg4Pl+kGsoYtawUMBT2zZMCvPNF7pVLnHZfd1zf38DRiWn/gT01RYCdUqkv7Fhr+C9ot4/tb+2sVvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.3.0.tgz",
      "integrity": "sha512-N0rFCuH9YoxG9/m61l9MfpJKfmLOVU0em7ipIz6TRgSSkvReLB9vL85GB+yr8Bs5leqpvg96JSwF4ZS1s4viQg==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.3.0.tgz",
      "integrity": "sha512-ZI7bU42mZXXKHn/qNLEw2IrbiINU7X5+vfgdixBHkCNpYWXjKgfQ/P+uyGb5CjOLB9UcnTeg3rylQtV2hym44Q==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.3.0"
      }
    },
    "node_modules/babel-plugin-react-compiler": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-react-compiler/-/babel-plugin-react-compiler-1.0.0.tgz",
      "integrity": "sha512-Ixm8tFfoKKIPYdCCKYTsqv+Fd4IJ0DQqMyEimo+pxUOMUR9cVPlwTrFt9Avu+3cb6Zp3mAzl+t1MrG2fxxKsxw==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.26.0"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.11.28",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.11.28.tgz",
      "integrity": "sha512-br0LOmjJqr6Rt4AEkadbcNf67Zpo7EPwKsWbjnRrJIa1QYFHQBqM4C7F2WTbV8ahTEcg1Eo+Y0aWjjORInYFyA==",
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001815",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001815.tgz",
      "integrity": "sha512-uDybUEyfgbyJJ93J1vikTylBX31AkdVYeVPeffMQpf8XN7hSfr0oZOn4VFOIMNvtU5+rHvC5Udg2TgtJKHm23Q==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.1.1.tgz",
      "integrity": "sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "devOptional": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/enhanced-resolve": {
      "version": "5.26.0",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.26.0.tgz",
      "integrity": "sha512-9vhedylFonb2YGogzUKX6+Ja72gOJbN1QHAqdrvqLwhdl/QWbKopzoUC9EbQNVsAns/bx/4uyqalrQAoy1IByw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/iceberg-js": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/iceberg-js/-/iceberg-js-0.8.1.tgz",
      "integrity": "sha512-1dhVQZXhcHje7798IVM+xoo/1ZdVfzOMIc8/rgVSijRK38EDqOJoGula9N/8ZI5RD8QTxNQtK/Gozpr+qUqRRA==",
      "license": "MIT",
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lucide-react": {
      "version": "1.55.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-1.55.0.tgz",
      "integrity": "sha512-bSozQHiI3/8q7JvgoqVRGOYUi7fYT3siAZwmZsljjsOH2Husp/2ODdFf/leD+ZC/2yKfn7r8oh6yeoR3ITR5vA==",
      "license": "ISC",
      "peerDependencies": {
        "@types/react": "*",
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.20",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.20.tgz",
      "integrity": "sha512-uKdg2G3GNCKQn9byYOpxbGqrT2fGO5KRt5J/8b3pok8rT6qxGWF6hxMyJiEYtAf+FVyYuD9hRaDqX5uPFYJ4ZQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/next": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/next/-/next-16.4.0.tgz",
      "integrity": "sha512-N2C+9q89Z/oLrsepSRS4jRMtwmUZAoZuAHU0e9T6+sAB5DdhADmrnOW+zjYijlrYFmVfmQhGVGy9eMFoB7UgKg==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "16.4.0",
        "@swc/helpers": "0.5.23",
        "baseline-browser-mapping": "^2.9.19",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.5.23",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "16.4.0",
        "@next/swc-darwin-x64": "16.4.0",
        "@next/swc-linux-arm64-gnu": "16.4.0",
        "@next/swc-linux-arm64-musl": "16.4.0",
        "@next/swc-linux-x64-gnu": "16.4.0",
        "@next/swc-linux-x64-musl": "16.4.0",
        "@next/swc-win32-arm64-msvc": "16.4.0",
        "@next/swc-win32-x64-msvc": "16.4.0",
        "sharp": "^0.35.4"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.51.1",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/postcss": {
      "version": "8.5.23",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.23.tgz",
      "integrity": "sha512-g50586zr4bZmwFiTlflMu8E0bDTb5I5gertgwAKmsdUlTQIhZtunzUlD1WSzwcVWPoAVpsrA6vlfCD7oXvRwgg==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.16",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/react": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/react/-/react-19.3.0.tgz",
      "integrity": "sha512-E8LUcbtBWt20bbl2YoHfx4ZDBdxVTfOKtCZn9cDSJ4l6/nuoApcpIBcj47t2wZoVX8g2ZHuMHbiShgCR1T5Sog==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.3.0.tgz",
      "integrity": "sha512-JDk8dgif51OjFoDE70+OT9ICyYr+69HlmihNwp1+Nsfbna3t5sIiCa9ZJktDmQ4/1b/rn26hIAR2uYXDMr5r0Q==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.28.0"
      },
      "peerDependencies": {
        "react": "^19.3.0"
      }
    },
    "node_modules/scheduler": {
      "version": "0.28.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.28.0.tgz",
      "integrity": "sha512-juorfCmIkIw8tT+p5BXSm6PJjQF/ycEYmKyzURCIt/RaZIhL+PulbQ9Yu2z1HdOJDdqDTlxA1+xKBmHXJsczAw==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "license": "ISC",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sharp": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.35.5.tgz",
      "integrity": "sha512-Ywn4OnzGukp7CDMrp08RQ50YKmuwG47brZgIVPTvBaaAfQlRlygrRqSrxdCiL9M+LlzLBiJ68IR1QqvzHyjC7g==",
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/colour": "^1.1.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.8.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.35.5",
        "@img/sharp-darwin-x64": "0.35.5",
        "@img/sharp-freebsd-wasm32": "0.35.5",
        "@img/sharp-libvips-darwin-arm64": "1.3.4",
        "@img/sharp-libvips-darwin-x64": "1.3.4",
        "@img/sharp-libvips-linux-arm": "1.3.4",
        "@img/sharp-libvips-linux-arm64": "1.3.4",
        "@img/sharp-libvips-linux-ppc64": "1.3.4",
        "@img/sharp-libvips-linux-riscv64": "1.3.4",
        "@img/sharp-libvips-linux-s390x": "1.3.4",
        "@img/sharp-libvips-linux-x64": "1.3.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.3.4",
        "@img/sharp-linux-arm": "0.35.5",
        "@img/sharp-linux-arm64": "0.35.5",
        "@img/sharp-linux-ppc64": "0.35.5",
        "@img/sharp-linux-riscv64": "0.35.5",
        "@img/sharp-linux-s390x": "0.35.5",
        "@img/sharp-linux-x64": "0.35.5",
        "@img/sharp-linuxmusl-arm64": "0.35.5",
        "@img/sharp-linuxmusl-x64": "0.35.5",
        "@img/sharp-webcontainers-wasm32": "0.35.5",
        "@img/sharp-win32-arm64": "0.35.5",
        "@img/sharp-win32-ia32": "0.35.5",
        "@img/sharp-win32-x64": "0.35.5"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.2.tgz",
      "integrity": "sha512-KGj/8Y43x35aZVDtt+J4mK1hoLGHULMYfSkODJNQjNDC3oW1PqPoxMwo0pLUsWM/UEGzON/NxeHywEfNXNP3Vw==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.3.3.tgz",
      "integrity": "sha512-gOhV3P7ufE62QDGg1zVaTgCR+EtPv92k2nIhVcVKcLmxT1sUBsQGhnZj175j+MqRt4zLF7ic+sCYjfhxMxj7YQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    }
  }
}
```

### `package.json`
```
{
  "name": "modesy-clone",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "@supabase/ssr": "^0.12.7",
    "@supabase/supabase-js": "^2.117.3",
    "lucide-react": "^1.55.0",
    "next": "16.4.0",
    "react": "19.3.0",
    "react-dom": "19.3.0"
  },
  "devDependencies": {
    "@tailwindcss/turbopack": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### `tsconfig.json`
```
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

### `src/app/globals.css`
```

@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #333333;
  --muted: #777777;
  --border: #eeeeee;
  --primary: #f35d5d;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-roboto);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}


body {
  margin: 0;
  background: var(--background);
  color: #333333;
  font-family: var(--font-roboto), Arial, sans-serif;
  font-size: 14px;
  line-height: 1.6;
}


button,
input,
select,
textarea {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
  height: auto;
}

::selection {
  background: var(--primary);
  color: #ffffff;
}
```

### `src/app/layout.tsx`
```

import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Modesy - Buy and Sell Used Stuff",
    template: "%s | Modesy",
  },
  description:
    "Buy and sell products through the Modesy marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable}`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
```

### `src/app/page.tsx`
```

import HeroBanner from "@/components/home/HeroBanner";
import ShopByCategory from "@/components/home/ShopByCategory";
import SpecialOffers from "@/components/home/SpecialOffers";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import NewArrivals from "@/components/home/NewArrivals";
import ShopByBrand from "@/components/home/ShopByBrand";
import LatestBlogPosts from "@/components/home/LatestBlogPosts";

export default function HomePage() {
  return (
    <>

      <main>
        <HeroBanner />
        <ShopByCategory />
        <SpecialOffers />
        <FeaturedProducts />
        <NewArrivals />
        <ShopByBrand />
        <LatestBlogPosts />
      </main>

    </>
  );
}
```

### `src/app/admin/page.tsx`
```
"use client";

export default function AdminPage() {
return (
<main className="min-h-screen bg-white p-8 text-gray-800">
<h1 className="text-3xl font-bold">Admin Panel</h1>
<p className="mt-3 text-gray-600">
Selamat datang di VYRO Admin Panel.
</p>
</main>
);
}
```

### `src/app/cart/page.tsx`
```

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Trash2 } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import type { Product } from "@/components/product/ProductCard";
import {
  getCart,
  removeFromCart,
} from "@/features/products/lib/shop-storage";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCart(getCart());
    setIsLoaded(true);
  }, []);

  function handleRemove(id: number) {
    setCart(removeFromCart(id));
  }

  const subtotal = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-white text-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 border-b border-gray-200 pb-5">
            <h1 className="text-2xl font-semibold text-gray-900">
              Shopping Cart
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Review your items before proceeding to checkout.
            </p>
          </div>

          {!isLoaded ? null : cart.length === 0 ? (
            <div className="flex min-h-80 flex-col items-center justify-center px-5 text-center">
              <ShoppingBag
                size={48}
                strokeWidth={1.3}
                className="text-gray-300"
              />

              <h2 className="mt-5 text-xl font-medium text-gray-800">
                Your cart is empty!
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                You have no items in your shopping cart.
              </p>

              <Link
                href="/products"
                className="mt-6 inline-flex items-center gap-2 bg-teal-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-700"
              >
                <ShoppingBag size={16} />
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_350px]">
              <section className="min-w-0">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">
                    Cart Items
                  </h2>
                  <span className="text-sm text-gray-500">
                    {cart.length} {cart.length === 1 ? "item" : "items"}
                  </span>
                </div>

                <div className="overflow-x-auto border border-gray-200">
                  <table className="w-full min-w-142.5 border-collapse text-left">
                    <thead className="bg-gray-50">
                      <tr className="border-b border-gray-200">
                        <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                          Product
                        </th>
                        <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600">
                          Price
                        </th>
                        <th className="px-4 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-600">
                          Subtotal
                        </th>
                        <th className="px-3 py-4" />
                      </tr>
                    </thead>

                    <tbody>
                      {cart.map((product) => (
                        <tr
                          key={product.id}
                          className="border-b border-gray-100 last:border-0"
                        >
                          <td className="px-4 py-5">
                            <div className="flex items-center gap-4">
                              <Link
                                href={`/products/${product.id}`}
                                className="h-20 w-20 shrink-0 overflow-hidden bg-gray-100"
                              >
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="h-full w-full object-cover"
                                />
                              </Link>

                              <div className="min-w-0">
                                <Link
                                  href={`/products/${product.id}`}
                                  className="text-sm font-medium text-gray-900 hover:text-teal-600"
                                >
                                  {product.name}
                                </Link>

                                <p className="mt-1 text-xs text-gray-500">
                                  {product.category}
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                  Sold by {product.seller}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-4 py-5 text-sm text-gray-700">
                            {formatPrice(product.price)}
                          </td>

                          <td className="px-4 py-5 text-right text-sm font-medium text-gray-900">
                            {formatPrice(product.price)}
                          </td>

                          <td className="px-3 py-5 text-right">
                            <button
                              type="button"
                              onClick={() => handleRemove(product.id)}
                              aria-label={`Remove ${product.name} from cart`}
                              className="inline-flex rounded p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                            >
                              <Trash2 size={17} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Link
                  href="/products"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-teal-600"
                >
                  <ArrowRight size={15} className="rotate-180" />
                  Continue Shopping
                </Link>
              </section>

              <aside className="border border-gray-200 p-5 sm:p-6">
                <h2 className="border-b border-gray-200 pb-4 text-lg font-semibold text-gray-900">
                  Cart Summary
                </h2>

                <div className="space-y-4 py-5">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-gray-500">
                      Subtotal ({cart.length}{" "}
                      {cart.length === 1 ? "item" : "items"})
                    </span>
                    <span className="font-medium text-gray-900">
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className="text-gray-700">Calculated at checkout</span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-gray-900">
                        Total
                      </span>
                      <span className="text-xl font-semibold text-gray-900">
                        {formatPrice(subtotal)}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      Shipping costs and final order details will be confirmed
                      during checkout.
                    </p>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="flex w-full items-center justify-center gap-2 bg-teal-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
                >
                  Proceed to Checkout
                  <ArrowRight size={17} />
                </Link>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    Secure checkout
                  </p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
```

### `src/app/checkout/page.tsx`
```

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import type { Product } from "@/components/product/ProductCard";
import {
  getCart,
  removeFromCart,
} from "@/features/products/lib/shop-storage";

type CheckoutForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  notes: string;
};

const initialForm: CheckoutForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  postalCode: "",
  country: "Indonesia",
  notes: "",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

const inputClass =
  "mt-2 w-full rounded-sm border border-gray-300 bg-white px-3 py-3 text-sm text-gray-800 outline-none transition focus:border-teal-600";

export default function CheckoutPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [form, setForm] = useState<CheckoutForm>(initialForm);
  const [isLoaded, setIsLoaded] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  useEffect(() => {
    setCart(getCart());
    setIsLoaded(true);
  }, []);

  const subtotal = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  // Ongkos kirim belum dikonfigurasi.
  const shipping = 0;
  const total = subtotal + shipping;

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleRemove(id: number) {
    setCart(removeFromCart(id));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (cart.length === 0) return;

    setOrderSubmitted(true);
  }

  if (!isLoaded) {
    return (
      <>
        <SiteHeader />
        <main className="min-h-[50vh] bg-white" />
        <SiteFooter />
      </>
    );
  }

  if (orderSubmitted) {
    return (
      <>
        <SiteHeader />

        <main className="flex min-h-[65vh] flex-col items-center justify-center bg-white px-4 py-16 text-center">
          <CheckCircle2
            size={58}
            strokeWidth={1.3}
            className="text-teal-600"
          />

          <h1 className="mt-6 text-2xl font-semibold text-gray-900">
            Checkout Information Completed
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500">
            Your shipping information has been validated in this demo.
            No order has been saved and no payment has been processed yet.
          </p>

          <button
            type="button"
            onClick={() => setOrderSubmitted(false)}
            className="mt-6 border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Back to Checkout
          </button>

          <Link
            href="/products"
            className="mt-4 text-sm text-teal-700 hover:text-teal-800"
          >
            Continue Shopping
          </Link>
        </main>

        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 border-b border-gray-200 pb-5">
            <h1 className="text-2xl font-semibold text-gray-900">
              Checkout
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Enter your shipping details and review your order.
            </p>
          </div>

          {cart.length === 0 ? (
            <div className="flex min-h-80 flex-col items-center justify-center text-center">
              <ShoppingBag
                size={48}
                strokeWidth={1.3}
                className="text-gray-300"
              />

              <h2 className="mt-5 text-xl font-medium text-gray-900">
                Your cart is empty
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Add a product to your cart before checking out.
              </p>

              <Link
                href="/products"
                className="mt-6 bg-teal-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-700"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_380px]">
              <form
                id="checkout-form"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <section>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center bg-gray-100 text-sm font-semibold text-gray-700">
                      1
                    </span>

                    <h2 className="text-lg font-semibold text-gray-900">
                      Contact Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="text-sm font-medium text-gray-700">
                      First Name *
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        autoComplete="given-name"
                        required
                        className={inputClass}
                        placeholder="First name"
                      />
                    </label>

                    <label className="text-sm font-medium text-gray-700">
                      Last Name *
                      <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        autoComplete="family-name"
                        required
                        className={inputClass}
                        placeholder="Last name"
                      />
                    </label>

                    <label className="text-sm font-medium text-gray-700">
                      Email Address *
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        className={inputClass}
                        placeholder="you@example.com"
                      />
                    </label>

                    <label className="text-sm font-medium text-gray-700">
                      Phone Number *
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        required
                        className={inputClass}
                        placeholder="Phone number"
                      />
                    </label>
                  </div>
                </section>

                <section className="border-t border-gray-200 pt-8">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center bg-gray-100 text-sm font-semibold text-gray-700">
                      2
                    </span>

                    <h2 className="text-lg font-semibold text-gray-900">
                      Shipping Address
                    </h2>
                  </div>

                  <div className="space-y-5">
                    <label className="block text-sm font-medium text-gray-700">
                      Street Address *
                      <input
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        autoComplete="street-address"
                        required
                        className={inputClass}
                        placeholder="Street, building, house number"
                      />
                    </label>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <label className="text-sm font-medium text-gray-700">
                        City / Regency *
                        <input
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          autoComplete="address-level2"
                          required
                          className={inputClass}
                          placeholder="City or regency"
                        />
                      </label>

                      <label className="text-sm font-medium text-gray-700">
                        Province *
                        <input
                          name="state"
                          value={form.state}
                          onChange={handleChange}
                          autoComplete="address-level1"
                          required
                          className={inputClass}
                          placeholder="Province"
                        />
                      </label>

                      <label className="text-sm font-medium text-gray-700">
                        Postal Code *
                        <input
                          name="postalCode"
                          value={form.postalCode}
                          onChange={handleChange}
                          autoComplete="postal-code"
                          required
                          className={inputClass}
                          placeholder="Postal code"
                        />
                      </label>

                      <label className="text-sm font-medium text-gray-700">
                        Country *
                        <select
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          autoComplete="country-name"
                          required
                          className={inputClass}
                        >
                          <option value="Indonesia">Indonesia</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Other">Other</option>
                        </select>
                      </label>
                    </div>

                    <label className="block text-sm font-medium text-gray-700">
                      Order Notes (Optional)
                      <textarea
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        rows={4}
                        className={inputClass}
                        placeholder="Additional delivery instructions..."
                      />
                    </label>
                  </div>
                </section>

                <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href="/cart"
                    className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-teal-700"
                  >
                    <ArrowLeft size={16} />
                    Return to Cart
                  </Link>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
                  >
                    Complete Checkout
                    <ArrowRight size={17} />
                  </button>
                </div>
              </form>

              <aside className="border border-gray-200 p-5 sm:p-6">
                <h2 className="border-b border-gray-200 pb-4 text-lg font-semibold text-gray-900">
                  Order Summary
                </h2>

                <div className="space-y-5 py-5">
                  {cart.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-3"
                    >
                      <Link
                        href={`/products/${product.id}`}
                        className="h-20 w-20 shrink-0 overflow-hidden bg-gray-100"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </Link>

                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/products/${product.id}`}
                          className="text-sm font-medium text-gray-800 hover:text-teal-700"
                        >
                          {product.name}
                        </Link>

                        <p className="mt-1 text-xs text-gray-500">
                          {product.category}
                        </p>

                        <p className="mt-2 text-sm font-semibold text-gray-900">
                          {formatPrice(product.price)}
                        </p>

                        <button
                          type="button"
                          onClick={() => handleRemove(product.id)}
                          className="mt-2 text-xs text-gray-500 underline hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 border-t border-gray-200 pt-5">
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-gray-500">
                      Subtotal ({cart.length}{" "}
                      {cart.length === 1 ? "item" : "items"})
                    </span>

                    <span className="font-medium text-gray-900">
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className="text-gray-600">Calculated later</span>
                  </div>

                  <div className="flex items-center justify-between gap-3 border-t border-gray-200 pt-4">
                    <span className="font-semibold text-gray-900">
                      Total
                    </span>

                    <span className="text-xl font-semibold text-gray-900">
                      {formatPrice(total)}
                    </span>
                  </div>

                  <p className="text-xs leading-5 text-gray-500">
                    Shipping charges and payment options have not been
                    configured yet.
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-center gap-2 border-t border-gray-200 pt-5 text-xs text-gray-500">
                  <CheckCircle2 size={15} className="text-teal-600" />
                  Order details are ready for review
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
```

### `src/app/products/page.tsx`
```

import ProductCatalog from "@/components/product/ProductCatalog";

export default function ProductsPage() {
  return <ProductCatalog />;
}
```

### `src/app/products/[id]/page.tsx`
```

"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShoppingBag, X } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductInfo from "@/components/product/ProductInfo";
import ProductActions from "@/components/product/ProductActions";

import { products } from "@/features/products/data/products";
import type { Product } from "@/components/product/ProductCard";

import {
    getWishlist,
    getCart,
    toggleWishlist,
    toggleCart,
} from "@/features/products/lib/shop-storage";

function formatPrice(price: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(price);
}

export default function ProductDetailPage() {
    const params = useParams<{ id: string }>();
    const router = useRouter();

    const productId = Number(params.id);

    const product: Product | undefined = products.find(
        (item) => item.id === productId
    );

    const [isWishlisted, setIsWishlisted] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    const [showCartPopup, setShowCartPopup] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!product) {
            setIsLoaded(true);
            return;
        }

        setIsWishlisted(
            getWishlist().some((item) => item.id === product.id)
        );

        setAddedToCart(
            getCart().some((item) => item.id === product.id)
        );

        setIsLoaded(true);
    }, [product]);

    function handleToggleWishlist() {
        if (!product) return;

        const updatedWishlist = toggleWishlist(product);

        setIsWishlisted(
            updatedWishlist.some((item) => item.id === product.id)
        );
    }

    function handleToggleCart() {
        if (!product) return;

        // Jika produk sudah ada di keranjang, klik akan menghapusnya.
        if (addedToCart) {
            const updatedCart = toggleCart(product);

            setAddedToCart(
                updatedCart.some((item) => item.id === product.id)
            );

            return;
        }

        // Jika belum ada, tambahkan produk dan tampilkan popup.
        const updatedCart = toggleCart(product);

        setAddedToCart(
            updatedCart.some((item) => item.id === product.id)
        );

        setShowCartPopup(true);
    }

    if (!product) {
        return (
            <>
                <SiteHeader />

                <main className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 text-center">
                    <ShoppingBag
                        size={48}
                        strokeWidth={1.3}
                        className="text-gray-300"
                    />

                    <h1 className="mt-5 text-2xl font-semibold text-gray-900">
                        Product Not Found
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        The product you are looking for does not exist.
                    </p>

                    <Link
                        href="/products"
                        className="mt-6 inline-flex items-center gap-2 bg-teal-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-700"
                    >
                        Browse Products
                        <ArrowRight size={16} />
                    </Link>
                </main>

                <SiteFooter />
            </>
        );
    }

    return (
        <>
            <SiteHeader />

            <main className="min-h-screen bg-white">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <ProductBreadcrumb
                        productName={product.name}
                        category={product.category}
                    />

                    <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
                        {/* Product image */}
                        <div className="flex items-start justify-center">
                            <div className="w-full overflow-hidden bg-gray-50">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="aspect-square h-auto w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Product information */}
                        <div className="flex flex-col">
                            <ProductInfo product={product} />

                            <ProductActions
                                isWishlisted={isWishlisted}
                                addedToCart={addedToCart}
                                onToggleWishlist={handleToggleWishlist}
                                onToggleCart={handleToggleCart}
                            />

                            <div className="mt-8 border-t border-gray-200 pt-5">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2
                                        size={17}
                                        className="text-teal-600"
                                    />
                                    <span>Product available</span>
                                </div>

                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    Sold by{" "}
                                    <span className="font-medium text-gray-700">
                                        {product.seller}
                                    </span>
                                </p>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    Category: {product.category}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <SiteFooter />

            {/* Add to Cart popup */}
            {showCartPopup && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setShowCartPopup(false)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="cart-popup-title"
                        className="relative w-full max-w-lg bg-white p-6 shadow-xl sm:p-8"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            aria-label="Close popup"
                            onClick={() => setShowCartPopup(false)}
                            className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-900"
                        >
                            <X size={21} />
                        </button>

                        <div className="border-b border-gray-200 pb-5 pr-6">
                            <div className="flex items-center gap-2 text-sm font-medium text-teal-700">
                                <CheckCircle2 size={18} />
                                <span>Product successfully added to your cart!</span>
                            </div>

                            <h2
                                id="cart-popup-title"
                                className="mt-3 text-xl font-semibold text-gray-900"
                            >
                                Added to Shopping Cart
                            </h2>
                        </div>

                        <div className="flex gap-4 py-6">
                            <div className="h-24 w-24 shrink-0 overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <Link
                                    href={`/products/${product.id}`}
                                    onClick={() => setShowCartPopup(false)}
                                    className="text-sm font-medium text-gray-900 transition-colors hover:text-teal-600"
                                >
                                    {product.name}
                                </Link>

                                <p className="mt-2 text-xs text-gray-500">
                                    Sold by {product.seller}
                                </p>

                                <p className="mt-3 text-base font-semibold text-gray-900">
                                    {formatPrice(product.price)}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 border-t border-gray-200 pt-5 sm:flex-row">
                            <button
                                type="button"
                                onClick={() => setShowCartPopup(false)}
                                className="flex-1 border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                Continue Shopping
                            </button>

                            <button
                                type="button"
                                onClick={() => router.push("/cart")}
                                className="flex flex-1 items-center justify-center gap-2 bg-teal-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-700"
                            >
                                <ShoppingBag size={17} />
                                View Cart
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={() => router.push("/checkout")}
                            className="mt-3 w-full border border-teal-600 px-4 py-3 text-sm font-medium text-teal-700 transition-colors hover:bg-teal-50"
                        >
                            Proceed to Checkout
                            <ArrowRight size={16} className="ml-2 inline" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
```

### `src/app/profile/page.tsx`
```

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  UserRound,
  ChevronRight,
  LoaderCircle,
  AlertCircle,
  Users,
  Star,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Profile = {
  id: string;
  full_name: string | null;
  role: string;
  created_at: string;
};

type ProfileTab = "followers" | "following" | "reviews";

const tabs: {
  id: ProfileTab;
  label: string;
  count: number;
}[] = [
  { id: "followers", label: "Followers", count: 0 },
  { id: "following", label: "Following", count: 0 },
  { id: "reviews", label: "My Reviews", count: 0 },
];

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeTab, setActiveTab] =
    useState<ProfileTab>("followers");

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      const supabase = createClient();

      try {
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError) throw authError;

        if (!user) {
          if (active) {
            setErrorMessage("Please log in to view this profile.");
            setLoading(false);
          }
          return;
        }

        const { data, error } = await supabase
          .from("profiles")
          .select("id, full_name, role, created_at")
          .eq("id", user.id)
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          if (active) {
            setErrorMessage("Profile information could not be found.");
            setLoading(false);
          }
          return;
        }

        if (active) {
          setProfile(data as Profile);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to load profile:", error);

        if (active) {
          setErrorMessage(
            "Unable to load profile information. Please try again."
          );
          setLoading(false);
        }
      }
    }

    void loadProfile();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center bg-white">
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <LoaderCircle size={20} className="animate-spin" />
          Loading profile...
        </div>
      </main>
    );
  }

  if (errorMessage || !profile) {
    return (
      <main className="min-h-[50vh] bg-white px-5 py-16">
        <div className="mx-auto max-w-xl text-center">
          <AlertCircle
            size={36}
            className="mx-auto mb-4 text-gray-400"
          />
          <h1 className="text-xl font-semibold text-gray-800">
            Profile
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            {errorMessage || "Profile information is unavailable."}
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center rounded bg-[#00a99d] px-5 py-2.5 text-sm text-white hover:bg-[#008f85]"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const displayName =
    profile.full_name?.trim() || "Modesy Member";

  const memberSince = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(profile.created_at));

  const activeTabLabel =
    tabs.find((tab) => tab.id === activeTab)?.label ?? "Followers";

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-1.5 text-sm">
          <Link
            href="/"
            className="text-gray-400 transition hover:text-[#00a99d]"
          >
            Home
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-gray-700">Followers</span>
        </div>

        {/* Profile header */}
        <section className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {/* Avatar */}
          <div className="flex h-50 w-50 shrink-0 items-center justify-center overflow-hidden rounded bg-[#f0e6e1]">
            <svg
              viewBox="0 0 200 200"
              role="img"
              aria-label="Default profile avatar illustration"
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="200" height="200" fill="#f3d4c8" />
              <circle cx="135" cy="65" r="43" fill="#e99c80" />
              <path
                d="M0 76 Q22 45 45 63 Q62 49 80 75 Q98 82 110 98 L200 58 L200 200 L0 200Z"
                fill="#e9d9d0"
              />
              <path
                d="M0 100 Q25 85 45 112 Q65 98 82 124 Q108 114 130 139 Q160 123 200 144 L200 200 L0 200Z"
                fill="#d3c6c0"
              />
              <path
                d="M0 161 Q20 151 40 160 Q66 143 89 163 Q117 144 139 158 Q167 136 200 151 L200 200 L0 200Z"
                fill="#536b78"
              />
              <path
                d="M0 181 Q22 169 42 181 Q70 161 91 180 Q119 164 142 181 Q168 159 200 173 L200 200 L0 200Z"
                fill="#293347"
              />
            </svg>
          </div>

          {/* User information */}
          <div className="min-w-0 pt-0.5">
            <h1 className="wrap-break-word text-3xl font-semibold leading-tight text-[#292929]">
              {displayName}
            </h1>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <span
                className="h-3.5 w-3.5 rounded-full bg-[#80ca86]"
                aria-label="Online status indicator"
              />
              <span>Last seen:</span>
              <span className="text-gray-600">Just Now</span>
            </div>

            <p className="mt-7 text-base text-gray-500">
              Member since {memberSince}
            </p>
          </div>
        </section>

        {/* Profile tabs */}
        <section className="mt-14">
          <div
            role="tablist"
            aria-label="Profile activity"
            className="flex overflow-x-auto border-b border-gray-200"
          >
            {tabs.map((tab) => {
              const selected = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="profile-tab-content"
                  onClick={() => setActiveTab(tab.id)}
                  className={`-mb-px flex shrink-0 items-center justify-center gap-1.5 border-b-2 px-5 py-4 text-sm transition sm:min-w-49 sm:text-base ${
                    selected
                      ? "border-[#292929] font-medium text-black"
                      : "border-transparent text-gray-700 hover:text-[#00a99d]"
                  }`}
                >
                  {tab.label}
                  <span>({tab.count})</span>
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div
            id="profile-tab-content"
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="flex min-h-47.5 items-center justify-center px-4 py-12"
          >
            <div className="text-center">
              {activeTab === "followers" && (
                <Users
                  size={27}
                  strokeWidth={1.5}
                  className="mx-auto mb-3 text-gray-300"
                />
              )}

              {activeTab === "following" && (
                <UserRound
                  size={27}
                  strokeWidth={1.5}
                  className="mx-auto mb-3 text-gray-300"
                />
              )}

              {activeTab === "reviews" && (
                <Star
                  size={27}
                  strokeWidth={1.5}
                  className="mx-auto mb-3 text-gray-300"
                />
              )}

              <p className="text-base text-gray-500">
                No records found!
              </p>
              <p className="mt-1 text-xs text-gray-400">
                {activeTabLabel}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
```

### `src/app/register/page.tsx`
```

"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff, UserRound } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const inputClass =
        "mt-2 w-full border border-gray-300 px-3 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-teal-600";

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setMessage("");
        setSuccess(false);

        const cleanName = name.trim();
        const cleanEmail = email.trim();

        if (!cleanName) {
            setMessage("Nama lengkap wajib diisi.");
            return;
        }

        if (password.length < 6) {
            setMessage("Password harus terdiri dari minimal 6 karakter.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Konfirmasi password tidak cocok.");
            return;
        }

        setLoading(true);

        try {
            const supabase = createClient();

            const { data, error } = await supabase.auth.signUp({
                email: cleanEmail,
                password,
                options: {
                    data: {
                        full_name: cleanName,
                    },
                },
            });

            if (error) {
                setMessage(error.message);
                return;
            }

            setSuccess(true);

            if (data.session) {
                setMessage(
                    "Pendaftaran berhasil! Akun kamu sudah dibuat dan berhasil masuk."
                );
            } else {
                setMessage(
                    "Pendaftaran berhasil! Periksa email kamu untuk mengonfirmasi akun sebelum login."
                );
            }

            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        } catch {
            setMessage(
                "Terjadi kesalahan saat menghubungkan ke server. Periksa koneksi dan konfigurasi Supabase."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <SiteHeader />

            <main className="min-h-[75vh] bg-white px-4 py-10 sm:py-14">
                <div className="mx-auto w-full max-w-lg">
                    <Link
                        href="/"
                        className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-teal-700"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>

                    <div className="border border-gray-200 bg-white p-6 sm:p-9">
                        <div className="mb-7 border-b border-gray-200 pb-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center bg-teal-50 text-teal-700">
                                <UserRound size={24} />
                            </div>

                            <h1 className="text-2xl font-semibold text-gray-900">
                                Create an Account
                            </h1>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Register with VYRO to start shopping.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    placeholder="Enter your full name"
                                    required
                                    maxLength={100}
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="Enter your email address"
                                    required
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        autoComplete="new-password"
                                        placeholder="Minimum 6 characters"
                                        required
                                        minLength={6}
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        className={`${inputClass} pr-11`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        className="absolute right-3 top-1/2 mt-1 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Confirm Password
                                </label>

                                <div className="relative">
                                    <input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        autoComplete="new-password"
                                        placeholder="Re-enter your password"
                                        required
                                        value={confirmPassword}
                                        onChange={(event) =>
                                            setConfirmPassword(event.target.value)
                                        }
                                        className={`${inputClass} pr-11`}
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(!showConfirmPassword)
                                        }
                                        aria-label={
                                            showConfirmPassword ? "Hide password" : "Show password"
                                        }
                                        className="absolute right-3 top-1/2 mt-1 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {message && (
                                <p
                                    role="status"
                                    className={`border p-3 text-sm leading-6 ${success
                                            ? "border-green-200 bg-green-50 text-green-700"
                                            : "border-red-200 bg-red-50 text-red-700"
                                        }`}
                                >
                                    {message}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-teal-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? "Creating Account..." : "Create Account"}
                            </button>
                        </form>

                        <div className="mt-6 border-t border-gray-200 pt-5 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    href="/"
                                    className="font-semibold text-teal-600 hover:text-teal-700 hover:underline"
                                >
                                    Return to Home
                                </Link>
                            </p>
                            <p className="mt-2 text-xs text-gray-400">
                                You can open Login from the website header.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <SiteFooter />
        </>
    );
}
```

### `src/app/settings/edit-profile/page.tsx`
```

"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  UserRoundCog,
  MapPin,
  Truck,
  Link2,
  Share2,
  LockKeyhole,
  UserRoundX,
  Camera,
  LoaderCircle,
  CheckCircle,
  AlertCircle,
  UserRound,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Profile = {
  id: string;
  full_name: string | null;
  role: string;
  slug: string | null;
  phone: string | null;
  tax_registration_number: string | null;
  cover_image_type: string | null;
  notify_on_message: boolean | null;
  show_email: boolean | null;
  show_phone: boolean | null;
  avatar_url: string | null;
  cover_image_url: string | null;
};

const sidebarItems = [
  {
    label: "Update Profile",
    icon: UserRoundCog,
    href: "/settings/edit-profile",
  },
  {
    label: "Location",
    icon: MapPin,
    href: "/settings/location",
  },
  {
    label: "Shipping Address",
    icon: Truck,
    href: "/settings/shipping-address",
  },
  {
    label: "Affiliate Links",
    icon: Link2,
    href: "/settings/affiliate-links",
  },
  {
    label: "Social Media",
    icon: Share2,
    href: "/settings/social-media",
  },
  {
    label: "Change Password",
    icon: LockKeyhole,
    href: "/settings/change-password",
  },
  {
    label: "Delete Account",
    icon: UserRoundX,
    href: "/settings/delete-account",
  },
];

export default function EditProfilePage() {
  const router = useRouter();
  const pathname = usePathname();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [slug, setSlug] = useState("");
  const [phone, setPhone] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [coverType, setCoverType] = useState("full_width");
  const [notifyOnMessage, setNotifyOnMessage] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      try {
        const supabase = createClient();

        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError) throw authError;

        if (!user) {
          router.replace("/login");
          return;
        }

        const { data, error } = await supabase
          .from("profiles")
          .select(
            "id, full_name, role, slug, phone, tax_registration_number, cover_image_type, notify_on_message, show_email, show_phone, avatar_url, cover_image_url"
          )
          .eq("id", user.id)
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          throw new Error("Profile information could not be found.");
        }

        if (!active) return;

        const item = data as Profile;
        const nameParts = (item.full_name ?? "").trim().split(/\s+/);

        setProfile(item);
        setEmail(user.email ?? "");
        setFirstName(nameParts[0] ?? "");
        setLastName(nameParts.slice(1).join(" "));
        setSlug(item.slug ?? "");
        setPhone(item.phone ?? "");
        setTaxNumber(item.tax_registration_number ?? "");
        setCoverType(item.cover_image_type ?? "full_width");
        setNotifyOnMessage(item.notify_on_message ?? false);
        setShowEmail(item.show_email ?? false);
        setShowPhone(item.show_phone ?? false);
      } catch (error) {
        console.error("Failed to load profile:", error);

        if (active) {
          setErrorMessage(
            error instanceof Error
              ? error.message
              : "Unable to load profile."
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    void loadProfile();

    return () => {
      active = false;
    };
  }, [router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!profile || saving) return;

    const first = firstName.trim();
    const last = lastName.trim();
    const fullName = [first, last].filter(Boolean).join(" ");

    if (!first) {
      setErrorMessage("Please enter your first name.");
      return;
    }

    setSaving(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const supabase = createClient();

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user || user.id !== profile.id) {
        throw new Error(
          "Your session has expired. Please log in again."
        );
      }

      if (email.trim() !== (user.email ?? "")) {
        const { error } = await supabase.auth.updateUser({
          email: email.trim(),
        });

        if (error) throw error;
      }

      const { data, error } = await supabase
        .from("profiles")
        .update({
          full_name: fullName,
          slug: slug.trim() || null,
          phone: phone.trim() || null,
          tax_registration_number: taxNumber.trim() || null,
          cover_image_type: coverType,
          notify_on_message: notifyOnMessage,
          show_email: showEmail,
          show_phone: showPhone,
        })
        .eq("id", user.id)
        .select(
          "id, full_name, role, slug, phone, tax_registration_number, cover_image_type, notify_on_message, show_email, show_phone, avatar_url, cover_image_url"
        )
        .single();

      if (error) throw error;

      setProfile(data as Profile);

      setSuccessMessage(
        email.trim() !== (user.email ?? "")
          ? "Profile saved. Check your email to confirm the email address change."
          : "Profile updated successfully."
      );

      router.refresh();
    } catch (error) {
      console.error("Failed to save profile:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to save profile. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  const inputClass =
    "block h-10 w-full rounded-sm border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-teal-600";

  const labelClass =
    "mb-2 block text-sm font-medium text-gray-800";

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <LoaderCircle className="animate-spin text-teal-600" size={28} />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-7">
        <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-teal-600">
            Home
          </Link>
          <span>/</span>
          <span>Profile Settings</span>
          <span>/</span>
          <span className="text-gray-800">Update Profile</span>
        </nav>

        <h1 className="mb-5 text-2xl font-medium">
          Profile Settings
        </h1>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[193px_minmax(0,1fr)]">
          <aside className="space-y-0.5">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-10 items-center gap-3 rounded-sm px-3 text-sm transition ${
                    isActive
                      ? "bg-gray-100 text-gray-800"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </aside>

          <section className="min-w-0">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-20 h-52 border border-gray-100 bg-gray-50">
                {profile?.cover_image_url && (
                  <img
                    src={profile.cover_image_url}
                    alt="Profile cover"
                    className="h-full w-full object-cover"
                  />
                )}

                <div className="absolute -bottom-9 left-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-orange-50 shadow-sm">
                  {profile?.avatar_url ? (
                    <img
                      src={profile.avatar_url}
                      alt="Profile avatar"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-orange-50 text-orange-200">
                      <UserRound size={66} strokeWidth={1} />
                    </div>
                  )}
                </div>

                <span
                  aria-label="Profile cover image"
                  title="Profile cover image"
                  className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white"
                >
                  <Camera size={16} />
                </span>

                <span
                  aria-label="Profile picture"
                  title="Profile picture"
                  className="absolute bottom-0 left-40 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white"
                >
                  <Camera size={19} />
                </span>
              </div>

              <p className="mb-5 text-xs text-gray-500">
                *Click on the save changes button after selecting your image
              </p>

              {errorMessage && (
                <div
                  role="alert"
                  className="mb-4 flex items-start gap-2 border border-red-200 bg-red-50 p-3 text-sm text-red-600"
                >
                  <AlertCircle size={17} className="mt-0.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {successMessage && (
                <div
                  role="status"
                  className="mb-4 flex items-start gap-2 border border-green-200 bg-green-50 p-3 text-sm text-green-700"
                >
                  <CheckCircle size={17} className="mt-0.5 shrink-0" />
                  <span>{successMessage}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="slug" className={labelClass}>
                    Slug
                  </label>
                  <input
                    id="slug"
                    value={slug}
                    onChange={(event) => setSlug(event.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    required
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="taxNumber" className={labelClass}>
                    Tax Registration Number
                  </label>
                  <input
                    id="taxNumber"
                    value={taxNumber}
                    onChange={(event) => setTaxNumber(event.target.value)}
                    placeholder="Tax Registration Number"
                    className={inputClass}
                  />
                </div>

                <div className="pt-1">
                  <span className={labelClass}>Cover Image Type</span>

                  <div className="flex flex-wrap items-center gap-10">
                    <label className="flex cursor-pointer items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="coverType"
                        value="full_width"
                        checked={coverType === "full_width"}
                        onChange={() => setCoverType("full_width")}
                        className="h-4 w-4 accent-teal-600"
                      />
                      Full Width
                    </label>

                    <label className="flex cursor-pointer items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="coverType"
                        value="boxed"
                        checked={coverType === "boxed"}
                        onChange={() => setCoverType("boxed")}
                        className="h-4 w-4 accent-teal-600"
                      />
                      Boxed
                    </label>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <label className="flex cursor-pointer items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={notifyOnMessage}
                      onChange={(event) =>
                        setNotifyOnMessage(event.target.checked)
                      }
                      className="h-4 w-4 accent-teal-600"
                    />
                    Send me an email when someone sends me a message
                  </label>

                  <label className="flex cursor-pointer items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={showEmail}
                      onChange={(event) =>
                        setShowEmail(event.target.checked)
                      }
                      className="h-4 w-4 accent-teal-600"
                    />
                    Show my email address
                  </label>

                  <label className="flex cursor-pointer items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={showPhone}
                      onChange={(event) =>
                        setShowPhone(event.target.checked)
                      }
                      className="h-4 w-4 accent-teal-600"
                    />
                    Show my phone number
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-sm bg-teal-600 px-5 text-xs font-medium text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {saving && (
                      <LoaderCircle size={14} className="animate-spin" />
                    )}
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
```

### `src/app/settings/location/page.tsx`
```

"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  UserRoundCog,
  MapPin,
  Truck,
  Link2,
  Share2,
  LockKeyhole,
  UserRoundX,
  LoaderCircle,
  CheckCircle,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type LocationData = {
  country: string;
  state: string;
  city: string;
  address: string;
  zip_code: string;
};

const countries = [
  {
    name: "Indonesia",
    states: [
      "Aceh",
      "Bali",
      "Banten",
      "Bengkulu",
      "DI Yogyakarta",
      "DKI Jakarta",
      "Gorontalo",
      "Jambi",
      "Jawa Barat",
      "Jawa Tengah",
      "Jawa Timur",
      "Kalimantan Barat",
      "Kalimantan Selatan",
      "Kalimantan Tengah",
      "Kalimantan Timur",
      "Kalimantan Utara",
      "Kepulauan Bangka Belitung",
      "Kepulauan Riau",
      "Lampung",
      "Maluku",
      "Maluku Utara",
      "Nusa Tenggara Barat",
      "Nusa Tenggara Timur",
      "Papua",
      "Papua Barat",
      "Papua Barat Daya",
      "Papua Pegunungan",
      "Papua Selatan",
      "Papua Tengah",
      "Riau",
      "Sulawesi Barat",
      "Sulawesi Selatan",
      "Sulawesi Tengah",
      "Sulawesi Tenggara",
      "Sulawesi Utara",
      "Sumatera Barat",
      "Sumatera Selatan",
      "Sumatera Utara",
    ],
  },
  {
    name: "Malaysia",
    states: [
      "Johor",
      "Kedah",
      "Kelantan",
      "Kuala Lumpur",
      "Melaka",
      "Negeri Sembilan",
      "Pahang",
      "Penang",
      "Perak",
      "Perlis",
      "Sabah",
      "Sarawak",
      "Selangor",
      "Terengganu",
    ],
  },
  {
    name: "Singapore",
    states: ["Central", "East", "North", "North-East", "West"],
  },
  {
    name: "United States",
    states: [
      "California",
      "Florida",
      "New York",
      "Texas",
      "Washington",
    ],
  },
];

const sidebarItems = [
  {
    label: "Update Profile",
    href: "/settings/edit-profile",
    icon: UserRoundCog,
  },
  {
    label: "Location",
    href: "/settings/location",
    icon: MapPin,
  },
  {
    label: "Shipping Address",
    href: "/settings/shipping-address",
    icon: Truck,
  },
  {
    label: "Affiliate Links",
    href: "/settings/affiliate-links",
    icon: Link2,
  },
  {
    label: "Social Media",
    href: "/settings/social-media",
    icon: Share2,
  },
  {
    label: "Change Password",
    href: "/settings/change-password",
    icon: LockKeyhole,
  },
  {
    label: "Delete Account",
    href: "/settings/delete-account",
    icon: UserRoundX,
  },
];

const inputClass =
  "block h-10 w-full rounded-sm border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none placeholder:text-gray-400 focus:border-teal-600";

const selectClass =
  "block h-10 w-full rounded-sm border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-teal-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400";

const labelClass =
  "mb-2 block text-sm font-medium text-gray-800";

export default function LocationPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [location, setLocation] = useState<LocationData>({
    country: "",
    state: "",
    city: "",
    address: "",
    zip_code: "",
  });

  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    let active = true;

    async function loadLocation() {
      try {
        const supabase = createClient();

        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError) throw authError;

        if (!user) {
          router.replace("/login");
          return;
        }

        const { data, error } = await supabase
          .from("profiles")
          .select("id, country, state, city, address, zip_code")
          .eq("id", user.id)
          .maybeSingle();

        if (error) throw error;

        if (!data) {
          throw new Error(
            "Profile tidak ditemukan. Pastikan data profil sudah tersedia."
          );
        }

        if (!active) return;

        setUserId(user.id);

        setLocation({
          country: data.country ?? "",
          state: data.state ?? "",
          city: data.city ?? "",
          address: data.address ?? "",
          zip_code: data.zip_code ?? "",
        });
      } catch (error) {
        console.error("Failed to load location:", error);

        if (active) {
          setErrorMessage(
            error instanceof Error
              ? error.message
              : "Gagal memuat informasi lokasi."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadLocation();

    return () => {
      active = false;
    };
  }, [router]);

  function updateField(field: keyof LocationData, value: string) {
    setLocation((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrorMessage("");
    setSuccessMessage("");
  }

  function handleCountryChange(country: string) {
    setLocation((previous) => ({
      ...previous,
      country,
      state: "",
    }));

    setErrorMessage("");
    setSuccessMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!userId || saving) return;

    setSaving(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const supabase = createClient();

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError) throw authError;

      if (!user || user.id !== userId) {
        throw new Error(
          "Sesi login berakhir. Silakan login kembali."
        );
      }

      const { error } = await supabase
        .from("profiles")
        .update({
          country: location.country.trim() || null,
          state: location.state.trim() || null,
          city: location.city.trim() || null,
          address: location.address.trim() || null,
          zip_code: location.zip_code.trim() || null,
        })
        .eq("id", user.id);

      if (error) throw error;

      setSuccessMessage("Location updated successfully.");
      router.refresh();
    } catch (error) {
      console.error("Failed to save location:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Gagal menyimpan lokasi. Silakan coba lagi."
      );
    } finally {
      setSaving(false);
    }
  }

  const selectedCountry = countries.find(
    (country) => country.name === location.country
  );

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <LoaderCircle
          size={28}
          className="animate-spin text-teal-600"
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-700">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-7 sm:px-6 lg:px-8">
        <nav className="mb-5 flex flex-wrap items-center gap-1 text-xs text-gray-400">
          <Link href="/" className="hover:text-teal-600">
            Home
          </Link>

          <ChevronRight size={14} />

          <span>Profile Settings</span>

          <ChevronRight size={14} />

          <span className="text-gray-700">Location</span>
        </nav>

        <h1 className="mb-5 text-2xl font-medium text-gray-900">
          Profile Settings
        </h1>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-4">
          <aside className="space-y-1 md:col-span-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-10 items-center gap-3 rounded-sm px-3 text-sm transition ${
                    active
                      ? "bg-gray-100 text-gray-800"
                      : "text-gray-600 hover:bg-gray-50 hover:text-teal-600"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </aside>

          <section className="min-w-0 md:col-span-3">
            <div className="mb-6 border-b border-gray-200 pb-4">
              <h2 className="text-lg font-medium text-gray-900">
                Location
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Manage your address and location information.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <div
                  role="alert"
                  className="mb-5 flex items-start gap-2 border border-red-200 bg-red-50 p-3 text-sm text-red-600"
                >
                  <AlertCircle
                    size={17}
                    className="mt-0.5 shrink-0"
                  />
                  <span>{errorMessage}</span>
                </div>
              )}

              {successMessage && (
                <div
                  role="status"
                  className="mb-5 flex items-start gap-2 border border-green-200 bg-green-50 p-3 text-sm text-green-700"
                >
                  <CheckCircle
                    size={17}
                    className="mt-0.5 shrink-0"
                  />
                  <span>{successMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="country" className={labelClass}>
                    Country
                  </label>

                  <select
                    id="country"
                    autoComplete="country-name"
                    value={location.country}
                    onChange={(event) =>
                      handleCountryChange(event.target.value)
                    }
                    className={selectClass}
                  >
                    <option value="">Select Country</option>

                    {countries.map((country) => (
                      <option
                        key={country.name}
                        value={country.name}
                      >
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="state" className={labelClass}>
                    State / Province
                  </label>

                  <select
                    id="state"
                    autoComplete="address-level1"
                    value={location.state}
                    onChange={(event) =>
                      updateField("state", event.target.value)
                    }
                    className={selectClass}
                    disabled={!location.country || !selectedCountry}
                  >
                    <option value="">Select State / Province</option>

                    {(selectedCountry?.states ?? []).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="address" className={labelClass}>
                    Address
                  </label>

                  <input
                    id="address"
                    autoComplete="street-address"
                    value={location.address}
                    onChange={(event) =>
                      updateField("address", event.target.value)
                    }
                    className={inputClass}
                    placeholder="Enter your address"
                  />
                </div>

                <div>
                  <label htmlFor="zip_code" className={labelClass}>
                    ZIP / Postal Code
                  </label>

                  <input
                    id="zip_code"
                    autoComplete="postal-code"
                    value={location.zip_code}
                    onChange={(event) =>
                      updateField("zip_code", event.target.value)
                    }
                    className={inputClass}
                    placeholder="Enter your postal code"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end border-t border-gray-200 pt-5">
                <button
                  type="submit"
                  disabled={saving || !userId}
                  className="inline-flex h-9 items-center justify-center gap-2 rounded-sm bg-teal-600 px-5 text-sm font-medium text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving && (
                    <LoaderCircle
                      size={15}
                      className="animate-spin"
                    />
                  )}

                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
```

### `src/app/wishlist/page.tsx`
```
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/components/product/ProductCard";

import {
  getWishlist,
  getCart,
  removeFromWishlist,
  toggleCart,
} from "@/features/products/lib/shop-storage";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cartIds, setCartIds] = useState<number[]>([]);

  useEffect(() => {
    setWishlist(getWishlist());
    setCartIds(getCart().map((product) => product.id));
  }, []);

  function handleRemove(id: number) {
    setWishlist(removeFromWishlist(id));
  }

  function handleToggleCart(product: Product) {
    const updatedCart = toggleCart(product);
    setCartIds(updatedCart.map((item) => item.id));
  }

  return (
    <>
      <SiteHeader />

      <main className="min-h-87.5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-2xl font-semibold text-gray-800">
            Wishlist
          </h1>

          {wishlist.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm text-gray-600">
                No products found!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {wishlist.map((product) => (
                <article
                  key={product.id}
                  className="group relative border border-gray-200 bg-white"
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="block aspect-square overflow-hidden bg-gray-50"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleRemove(product.id)}
                    aria-label={`Remove ${product.name} from wishlist`}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-red-500 hover:bg-red-50"
                  >
                    <Heart size={17} fill="currentColor" />
                  </button>

                  <div className="p-4">
                    <Link
                      href={`/products/${product.id}`}
                      className="line-clamp-2 text-sm font-medium text-gray-800 hover:text-red-500"
                    >
                      {product.name}
                    </Link>

                    <p className="mt-2 text-sm font-semibold text-gray-900">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(product.price)}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Sold by {product.seller}
                    </p>

                    <button
                      type="button"
                      onClick={() => handleToggleCart(product)}
                      className="mt-4 flex w-full items-center justify-center gap-2 border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:border-red-500 hover:bg-red-500 hover:text-white"
                    >
                      <ShoppingCart size={15} />
                      {cartIds.includes(product.id)
                        ? "Remove from Cart"
                        : "Add to Cart"}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleRemove(product.id)}
                      className="mt-2 flex w-full items-center justify-center gap-2 px-3 py-2 text-xs text-gray-500 hover:text-red-500"
                    >
                      <Trash2 size={14} />
                      Remove from Wishlist
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
```

### `src/components/auth/AccountDropdown.tsx`
```

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  UserRound,
  LayoutDashboard,
  Wallet,
  ShoppingBag,
  Ticket,
  MessageCircle,
  Settings,
  ShieldCheck,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type AccountDropdownProps = {
  email?: string;
  role: string;
};

type MenuItem = {
  label: string;
  href: string;
  icon: typeof UserRound;
};

export default function AccountDropdown({
  role,
}: AccountDropdownProps) {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Menu khusus berdasarkan role.
  const dashboardItem: MenuItem | null =
    role === "super_admin"
      ? {
          label: "Admin Panel",
          href: "/admin",
          icon: ShieldCheck,
        }
      : role === "moderator"
        ? {
            label: "Dashboard",
            href: "/moderator",
            icon: LayoutDashboard,
          }
        : role === "vendor"
          ? {
              label: "Dashboard",
              href: "/vendor/dashboard",
              icon: LayoutDashboard,
            }
          : null;

  // Menu akun yang ditampilkan untuk semua role.
  const accountItems: MenuItem[] = [
    {
      label: "Profile",
      href: "/profile",
      icon: UserRound,
    },
    {
      label: "Wallet",
      href: "/wallet",
      icon: Wallet,
    },
    {
      label: "Orders",
      href: "/orders",
      icon: ShoppingBag,
    },
    {
      label: "My Coupons",
      href: "/my-coupons",
      icon: Ticket,
    },
    {
      label: "Messages",
      href: "/messages",
      icon: MessageCircle,
    },
    {
      label: "Profile Settings",
      href: "/settings/edit-profile",
      icon: Settings,
    },
  ];

  const menuItems: MenuItem[] = [
    ...(dashboardItem ? [dashboardItem] : []),
    ...accountItems,
  ];

  // Tutup dropdown saat klik di luar atau menekan Escape.
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Logout Supabase.
  async function handleLogout() {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Logout gagal:", error.message);
        setIsLoggingOut(false);
        return;
      }

      setIsOpen(false);
      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Terjadi kesalahan saat logout:", error);
      setIsLoggingOut(false);
    }
  }

  // Teks tombol navbar berdasarkan role.
  const accountLabel =
    role === "super_admin"
      ? "Admin"
      : role === "moderator"
        ? "Moderator"
        : role === "vendor"
          ? "Vendor"
          : "My Account";

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={accountLabel}
        className="flex items-center gap-1 rounded px-1 py-1 text-xs text-gray-600 transition hover:text-[#00a99d] sm:text-sm"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
          <UserRound size={14} strokeWidth={1.7} />
        </span>

        <span className="hidden max-w-20 truncate sm:inline">
          {accountLabel}
        </span>

        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-full z-100 mt-1.5 w-48 overflow-hidden rounded border border-gray-200 bg-white py-1 shadow-lg"
        >
          <div>
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600 transition hover:bg-gray-50 hover:text-[#00a99d] sm:text-sm"
                >
                  <Icon
                    size={14}
                    strokeWidth={1.7}
                    className="shrink-0"
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-1 border-t border-gray-100 pt-1">
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm"
            >
              <LogOut size={14} strokeWidth={1.7} />
              <span>
                {isLoggingOut ? "Logging out..." : "Logout"}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
```

### `src/components/auth/LoginModal.tsx`
```

"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, X, LockKeyhole, Mail } from "lucide-react";
import { loginWithPassword } from "@/lib/supabase/auth-actions";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({
  isOpen,
  onClose,
}: LoginModalProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setShowPassword(false);
      setErrorMessage("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && !loading) {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, loading, onClose]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const result = await loginWithPassword(email, password);

      if (!result.success) {
        setErrorMessage(result.message);
        return;
      }

      // Login berhasil: tetap arahkan pengguna ke halaman utama.
      // Navbar akan membaca sesi dan role untuk menampilkan dropdown profil.
      onClose();
      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Login gagal:", error);

      setErrorMessage(
        "Terjadi kesalahan saat login. Silakan coba kembali.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-4 py-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !loading) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        className="relative w-full max-w-md rounded-md bg-white p-6 shadow-xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          disabled={loading}
          aria-label="Tutup login"
          className="absolute right-4 top-4 rounded p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50"
        >
          <X size={21} />
        </button>

        <div className="mb-6">
          <h2
            id="login-title"
            className="text-2xl font-semibold text-gray-800"
          >
            Login
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Masuk ke akun Modesy kamu untuk melanjutkan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="login-email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <div className="flex items-center rounded border border-gray-300 focus-within:border-red-400">
              <Mail
                size={18}
                className="ml-3 shrink-0 text-gray-400"
              />

              <input
                id="login-email"
                type="email"
                autoComplete="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                disabled={loading}
                className="w-full rounded bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 disabled:bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="login-password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <div className="flex items-center rounded border border-gray-300 focus-within:border-red-400">
              <LockKeyhole
                size={18}
                className="ml-3 shrink-0 text-gray-400"
              />

              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Masukkan password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                disabled={loading}
                className="w-full rounded bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 disabled:bg-gray-50"
              />

              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                aria-label={
                  showPassword ? "Sembunyikan password" : "Tampilkan password"
                }
                className="mr-3 text-gray-400 transition hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {errorMessage && (
            <div
              role="alert"
              className="rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600"
            >
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Memproses..." : "Login"}
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-gray-500">
          Dengan login, kamu dapat mengakses fitur sesuai role akunmu.
        </p>
      </div>
    </div>
  );
}
```

### `src/components/home/FeaturedProducts.tsx`
```
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Black midi skirt with white flowers",
    seller: "Trendshop",
    price: 48,
    oldPrice: 55,
    image: "/images/products/floral-women-sundress.jpg",
  },
  {
    id: 2,
    name: "Handcrafted decorative pillow for a luxurious touch",
    seller: "Admin",
    price: 59,
    oldPrice: 69,
    image: "/images/products/decorative-pillow.jpg",
  },
  {
    id: 3,
    name: "Floral women sundress",
    seller: "Admin",
    price: 80,
    oldPrice: 89,
    image: "/images/products/floral-women-sundress.jpg",
  },
  {
    id: 4,
    name: "Sun hat for women protection cap",
    seller: "Trendshop",
    price: 29,
    oldPrice: null,
    image: "/images/products/summer-fashion-top-lace.jpg",
  },
  {
    id: 5,
    name: "Sneaker shoes men",
    seller: "Admin",
    price: 89,
    oldPrice: 100,
    image: "/images/products/black-sneakers.jpg",
  },
  {
    id: 6,
    name: "Women kipling bailey saddle handbag",
    seller: "Admin",
    price: 59,
    oldPrice: 69,
    image: "/images/products/women-saddle-handbag.jpg",
  },
  {
    id: 7,
    name: "Cobalt man t-shirt all colors",
    seller: "Trendshop",
    price: null,
    oldPrice: null,
    image: "/images/products/summer-fashion-top-lace.jpg",
  },
  {
    id: 8,
    name: "Adorable animals photo pack",
    seller: "Admin",
    price: 0,
    oldPrice: null,
    image: "/images/products/animal-colorful-digital-prints.jpg",
  },
  {
    id: 9,
    name: "Moment of inspiration piano music",
    seller: "Admin",
    price: 15,
    oldPrice: 34,
    image: "/images/products/animal-colorful-digital-prints.jpg",
  },
  {
    id: 10,
    name: "Animation of popular vacation spots",
    seller: "Admin",
    price: 10,
    oldPrice: 15,
    image: "/images/products/animal-colorful-digital-prints.jpg",
  },
  {
    id: 11,
    name: "Light blue women shirt",
    seller: "Trendshop",
    price: 49,
    oldPrice: 69,
    image: "/images/products/women-lace-blouse.jpg",
  },
  {
    id: 12,
    name: "Summer fashion top lace",
    seller: "Trendshop",
    price: 65,
    oldPrice: 79,
    image: "/images/products/summer-fashion-top-lace.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          Featured Products
        </h2>

        <Link
          href="/products"
          className="text-sm text-gray-600 transition-colors hover:text-teal-600"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="group min-w-0">
            <div className="relative overflow-hidden bg-gray-100">
              <Link
                href={`/products?search=${encodeURIComponent(product.name)}`}
                aria-label={`View ${product.name}`}
                className="relative block aspect-3/4 w-full"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <button
                type="button"
                aria-label={`Add ${product.name} to wishlist`}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-colors hover:text-teal-600"
              >
                <Heart size={18} />
              </button>

              <button
                type="button"
                aria-label={`Add ${product.name} to cart`}
                className="absolute bottom-3 left-3 right-3 flex translate-y-2 items-center justify-center gap-2 bg-white px-3 py-3 text-sm text-gray-700 opacity-100 transition-all duration-300 hover:bg-teal-500 hover:text-white sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>

            <div className="pt-3">
              <Link
                href={`/products?search=${encodeURIComponent(product.name)}`}
                className="line-clamp-2 min-h-11 text-sm font-medium leading-5 text-gray-800 transition-colors hover:text-teal-600"
              >
                {product.name}
              </Link>

              <p className="mt-1 text-xs text-gray-500">
                {product.seller}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                {product.price === null ? (
                  <span className="text-sm font-medium text-teal-600">
                    Request a quote
                  </span>
                ) : (
                  <>
                    <span className="text-base font-semibold text-gray-800">
                      {product.price === 0
                        ? "Free"
                        : `$${product.price}`}
                    </span>

                    {product.oldPrice !== null && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.oldPrice}
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/products"
          className="inline-flex items-center justify-center border border-gray-300 px-8 py-3 text-sm text-gray-700 transition-colors hover:border-teal-500 hover:bg-teal-500 hover:text-white"
        >
          Load More
        </Link>
      </div>
    </section>
  );
}
```

### `src/components/home/HeroBanner.tsx`
```
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    title: "Buy Nice and Unique Clothes",
    description:
      "Discover quality premium basics and trendy essentials at surprisingly affordable prices",
    image: "/images/banners/hero-clothing.jpg",
    link: "/products",
    button: "Explore Now",
  },
  {
    title: "Discover Products You Love",
    description:
      "Explore unique products and find something special for your everyday needs",
    image: "/images/banners/hero-fashion.jpg",
    link: "/products",
    button: "Shop Now",
  },
];

export default function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  function previousSlide() {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  }

  function nextSlide() {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section className="w-full">
      <div className="relative h-70 w-full overflow-hidden bg-gray-300 sm:h-85 lg:h-95">
  <img
    key={slide.image}
    src={slide.image}
    alt={slide.title}
    className="absolute inset-0 block h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/10" />

        {/* Konten di atas gambar */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="w-full px-5 sm:px-8 lg:px-5">
            <h1 className="max-w-xl text-3xl font-semibold leading-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white drop-shadow-md sm:text-lg lg:text-2xl">
              {slide.description}
            </p>

            <Link
              href={slide.link}
              className="mt-8 inline-flex items-center justify-center rounded-sm bg-gray-950 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-teal-600"
            >
              {slide.button}
            </Link>
          </div>
        </div>

        {/* Tombol sebelumnya */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-5 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 text-gray-700 transition-colors hover:bg-white sm:h-12 sm:w-12"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Tombol berikutnya */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-5 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 text-gray-700 transition-colors hover:bg-white sm:h-12 sm:w-12"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
```

### `src/components/home/LatestBlogPosts.tsx`
```
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Gift Ideas for Every Budget: From Affordable to Luxury",
    image: "/images/products/summer-fashion-top-lace.jpg",
    href: "/blog/life-style/gift-ideas-for-every-budget-from-affordable-to-luxury",
  },
  {
    id: 2,
    title: "Fashion Trends and Style Inspiration",
    image: "/images/products/women-lace-blouse.jpg",
    href: "/blog",
  },
  {
    id: 3,
    title: "How to Choose Everyday Fashion",
    image: "/images/products/floral-women-sundress.jpg",
    href: "/blog",
  },
  {
    id: 4,
    title: "Ideas for a Beautiful Home",
    image: "/images/products/decorative-pillow.jpg",
    href: "/blog",
  },
];

export default function LatestBlogPosts() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Latest Blog Posts
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <article key={post.id} className="min-w-0">
            <Link
              href={post.href}
              className="relative block aspect-3/2 w-full overflow-hidden bg-gray-100"
              aria-label={post.title}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </Link>

            <h3 className="mt-3 text-base font-semibold leading-6 text-gray-800">
              <Link
                href={post.href}
                className="transition-colors hover:text-red-500"
              >
                {post.title}
              </Link>
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
```

### `src/components/home/NewArrivals.tsx`
```
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Colorful women scarves",
    seller: "Trendshop",
    price: 25,
    oldPrice: null,
    image: "/images/products/women-lace-blouse.jpg",
  },
  {
    id: 2,
    name: "Women's ankle boot with different colors",
    seller: "Admin",
    price: 79,
    oldPrice: 99,
    image: "/images/products/black-sneakers.jpg",
  },
  {
    id: 3,
    name: "Navy polka dot dress",
    seller: "Trendshop",
    price: 65,
    oldPrice: 79,
    image: "/images/products/floral-women-sundress.jpg",
  },
  {
    id: 4,
    name: "Modern grey couch and pillows",
    seller: "Admin",
    price: 250,
    oldPrice: null,
    image: "/images/products/decorative-pillow.jpg",
  },
  {
    id: 5,
    name: "Black fashion women backpack",
    seller: "Admin",
    price: 55,
    oldPrice: 69,
    image: "/images/products/gucci-backpack.jpg",
  },
  {
    id: 6,
    name: "Handcrafted decorative pillow",
    seller: "Admin",
    price: 59,
    oldPrice: 69,
    image: "/images/products/decorative-pillow.jpg",
  },
  {
    id: 7,
    name: "Black midi skirt with white flowers",
    seller: "Trendshop",
    price: 48,
    oldPrice: 55,
    image: "/images/products/floral-women-sundress.jpg",
  },
  {
    id: 8,
    name: "Women kipling bailey saddle handbag",
    seller: "Admin",
    price: 59,
    oldPrice: 69,
    image: "/images/products/women-saddle-handbag.jpg",
  },
  {
    id: 9,
    name: "Animal colorful digital prints",
    seller: "Trendshop",
    price: 29,
    oldPrice: 39,
    image: "/images/products/animal-colorful-digital-prints.jpg",
  },
  {
    id: 10,
    name: "Floral women sundress",
    seller: "Admin",
    price: 80,
    oldPrice: 89,
    image: "/images/products/floral-women-sundress.jpg",
  },
  {
    id: 11,
    name: "Seychelles women's brown ankle bootie",
    seller: "Admin",
    price: 89,
    oldPrice: null,
    image: "/images/products/black-sneakers.jpg",
  },
  {
    id: 12,
    name: "Ship illustration royalty free image",
    seller: "Trendshop",
    price: 15,
    oldPrice: null,
    image: "/images/products/animal-colorful-digital-prints.jpg",
  },
];

export default function NewArrivals() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          New Arrivals
        </h2>

        <Link
          href="/products?sort=newest"
          className="text-sm text-gray-600 transition-colors hover:text-teal-600"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="group min-w-0">
            <div className="relative overflow-hidden bg-gray-100">
              <Link
                href={`/products?search=${encodeURIComponent(product.name)}`}
                aria-label={`View ${product.name}`}
                className="relative block aspect-3/4 w-full"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <button
                type="button"
                aria-label={`Add ${product.name} to wishlist`}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-colors hover:text-teal-600"
              >
                <Heart size={18} />
              </button>

              <button
                type="button"
                aria-label={`Add ${product.name} to cart`}
                className="absolute bottom-3 left-3 right-3 flex translate-y-2 items-center justify-center gap-2 bg-white px-3 py-3 text-sm text-gray-700 opacity-100 transition-all duration-300 hover:bg-teal-500 hover:text-white sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>

            <div className="pt-3">
              <Link
                href={`/products?search=${encodeURIComponent(product.name)}`}
                className="line-clamp-2 min-h-11 text-sm font-medium leading-5 text-gray-800 transition-colors hover:text-teal-600"
              >
                {product.name}
              </Link>

              <p className="mt-1 text-xs text-gray-500">
                {product.seller}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="text-base font-semibold text-gray-800">
                  ${product.price}
                </span>

                {product.oldPrice !== null && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
```

### `src/components/home/ShopByBrand.tsx`
```
"use client";

import { useState } from "react";

const brands = [
  { id: 1, name: "DIESEL", style: "text-2xl font-black italic text-red-600" },
  { id: 2, name: "DOCKERS", style: "text-lg font-black text-black" },
  { id: 3, name: "GUCCI", style: "text-lg font-serif font-bold text-black" },
  { id: 4, name: "H&M", style: "text-4xl font-black italic text-red-600" },
  {
    id: 5,
    name: "HUGO BOSS",
    style: "text-lg font-black text-black",
  },
  {
    id: 6,
    name: "LACOSTE",
    style: "text-2xl font-bold text-black",
  },
  {
    id: 7,
    name: "Lee Cooper",
    style: "text-xl font-bold italic text-red-600",
  },
  {
    id: 8,
    name: "Levi's",
    style: "text-2xl font-black text-red-600",
  },
  {
    id: 9,
    name: "PUMA",
    style: "text-2xl font-black italic text-black",
  },
  {
    id: 10,
    name: "adidas",
    style: "text-2xl font-black text-black",
  },
];

export default function ShopByBrand() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleBrands = Array.from({ length: 8 }, (_, index) => {
    return brands[(startIndex + index) % brands.length];
  });

  function showPrevious() {
    setStartIndex((current) =>
      (current - 1 + brands.length) % brands.length
    );
  }

  function showNext() {
    setStartIndex((current) => (current + 1) % brands.length);
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Shop By Brand
      </h2>

      <div className="relative border border-gray-200 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
          {visibleBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className={`flex h-28 items-center justify-center overflow-hidden border-gray-100 px-2 ${
                index !== 7 ? "border-r" : ""
              }`}
            >
              <span
                className={`${brand.style} whitespace-nowrap text-center`}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous brands"
          className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={showNext}
          aria-label="Next brands"
          className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
```

### `src/components/home/ShopByCategory.tsx`
```

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Clothing", image: "/images/products/summer-fashion-top-lace.jpg", slug: "clothing" },
  { name: "Home & Living", image: "/images/products/decorative-pillow.jpg", slug: "home-living" },
  { name: "Toys & Entertainment", image: "/images/products/animal-colorful-digital-prints.jpg", slug: "toys-entertainment" },
  { name: "Women's Clothing", image: "/images/products/floral-women-sundress.jpg", slug: "womens-clothing" },
  { name: "Men's Clothing", image: "/images/products/black-sneakers.jpg", slug: "mens-clothing" },
  { name: "Furniture", image: "/images/products/decorative-pillow.jpg", slug: "furniture" },
  { name: "Necklaces & Accessories", image: "/images/products/women-saddle-handbag.jpg", slug: "necklaces-accessories" },
  { name: "Graphics", image: "/images/products/animal-colorful-digital-prints.jpg", slug: "graphics" },
  { name: "Painting", image: "/images/products/animal-colorful-digital-prints.jpg", slug: "painting" },
  { name: "Boots", image: "/images/products/black-sneakers.jpg", slug: "boots" },
  { name: "Decorative Pillows", image: "/images/products/decorative-pillow.jpg", slug: "decorative-pillows" },
  { name: "Handbags", image: "/images/products/gucci-backpack.jpg", slug: "handbags" },
];

export default function ShopByCategory() {
  return (
    <section className="w-full bg-white py-10 sm:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Shop By Category
          </h2>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-500"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="group flex min-w-0 flex-col items-center text-center"
            >
              <div className="relative aspect-square w-full max-w-36 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="144px"
                  className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-white">
                    Shop Now
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>

              <h3 className="mt-3 text-sm font-semibold text-gray-800 transition-colors group-hover:text-red-500">
                {category.name}
              </h3>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
```

### `src/components/home/SpecialOffers.tsx`
```

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Animal colorful digital prints",
    seller: "Trendshop",
    price: 29,
    oldPrice: 39,
    discount: 25,
    image: "/images/products/animal-colorful-digital-prints.jpg",
  },
  {
    id: 2,
    name: "Summer fashion top lace",
    seller: "Trendshop",
    price: 65,
    oldPrice: 79,
    discount: 17,
    image: "/images/products/summer-fashion-top-lace.jpg",
  },
  {
    id: 3,
    name: "Women lace blouse with different colors",
    seller: "Trendshop",
    price: 69,
    oldPrice: 79,
    discount: 12,
    image: "/images/products/women-lace-blouse.jpg",
  },
  {
    id: 4,
    name: "Floral women sundress",
    seller: "Admin",
    price: 80,
    oldPrice: 89,
    discount: 10,
    image: "/images/products/floral-women-sundress.jpg",
  },
  {
    id: 5,
    name: "Gucci nylon fabric smart backpack",
    seller: "Admin",
    price: 55,
    oldPrice: 69,
    discount: 20,
    image: "/images/products/gucci-backpack.jpg",
  },
  {
    id: 6,
    name: "Black sneakers with white sole",
    seller: "Admin",
    price: 69,
    oldPrice: 89,
    discount: 22,
    image: "/images/products/black-sneakers.jpg",
  },
  {
    id: 7,
    name: "Women kipling bailey saddle handbag",
    seller: "Admin",
    price: 59,
    oldPrice: 69,
    discount: 14,
    image: "/images/products/women-saddle-handbag.jpg",
  },
  {
    id: 8,
    name: "Handcrafted decorative pillow",
    seller: "Admin",
    price: 59,
    oldPrice: 69,
    discount: 14,
    image: "/images/products/decorative-pillow.jpg",
  },
];

export default function SpecialOffers() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          Special Offers
        </h2>

        <Link
          href="/products"
          className="text-sm text-gray-600 transition-colors hover:text-teal-600"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="group min-w-0">
            <div className="relative overflow-hidden bg-gray-100">
              <Link
                href={`/products?search=${encodeURIComponent(product.name)}`}
                aria-label={`View ${product.name}`}
                className="relative block aspect-3/4 w-full"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <span className="absolute left-3 top-3 bg-teal-500 px-2 py-1 text-xs font-medium text-white">
                -{product.discount}%
              </span>

              <button
                type="button"
                aria-label={`Add ${product.name} to wishlist`}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-colors hover:text-teal-600"
              >
                <Heart size={18} />
              </button>

              <button
                type="button"
                aria-label={`Add ${product.name} to cart`}
                className="absolute bottom-3 left-3 right-3 flex translate-y-2 items-center justify-center gap-2 bg-white px-3 py-3 text-sm text-gray-700 opacity-0 transition-all duration-300 hover:bg-teal-500 hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>

            <div className="pt-3">
              <Link
                href={`/products?search=${encodeURIComponent(product.name)}`}
                className="line-clamp-2 min-h-11 text-sm font-medium leading-5 text-gray-800 transition-colors hover:text-teal-600"
              >
                {product.name}
              </Link>

              <p className="mt-1 text-xs text-gray-500">
                {product.seller}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="text-base font-semibold text-gray-800">
                  ${product.price}
                </span>

                <span className="text-sm text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
```

### `src/components/layout/SiteFooter.tsx`
```

"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Women's Clothing", href: "/products" },
      { label: "Men's Clothing", href: "/products" },
      { label: "Home & Living", href: "/products" },
      { label: "Accessories", href: "/products" },
    ],
  },
  {
    title: "My Account",
    links: [
      { label: "Login", href: "/login" },
      { label: "Register", href: "/register" },
      { label: "Wishlist", href: "/wishlist" },
      { label: "Shopping Cart", href: "/cart" },
    ],
  },
];

const socialLinks = [
  { label: "FB", name: "Facebook", href: "https://www.facebook.com/" },
  { label: "IG", name: "Instagram", href: "https://www.instagram.com/" },
  { label: "X", name: "X", href: "https://x.com/" },
  { label: "YT", name: "YouTube", href: "https://www.youtube.com/" },
];

export default function SiteFooter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleNewsletterSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Newsletter subscription is not connected yet.");
  }

  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="/"
              className="inline-flex items-center text-2xl font-bold tracking-tight text-gray-900"
            >
              M<span className="text-teal-500">o</span>desy
            </a>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Discover unique products and shop from independent sellers.
              Find fashion, accessories, home essentials, and more.
            </p>

            {/* Social media */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-xs font-semibold text-gray-500 transition-colors hover:border-teal-500 hover:bg-teal-500 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer navigation */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-teal-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter - right column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Newsletter
            </h3>

            <p className="mb-4 text-sm leading-6 text-gray-500">
              Subscribe to our newsletter to receive the latest news,
              updates, and special offers.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessage("");
                }}
                placeholder="Enter your email"
                aria-label="Email address for newsletter"
                autoComplete="email"
                required
                className="w-full min-w-0 rounded border border-gray-300 px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-teal-500"
              />

              <button
                type="submit"
                className="w-full rounded bg-teal-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-700"
              >
                Subscribe
              </button>
            </form>

            {message && (
              <p
                role="status"
                className="mt-3 text-sm text-gray-500"
              >
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Contact information */}
        <div className="mt-10 grid grid-cols-1 gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="shrink-0" />
            <span>Worldwide Marketplace</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} className="shrink-0" />
            <span>Customer Support</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} className="shrink-0" />
            <span>Contact Us</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Modesy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

### `src/components/layout/SiteHeader.tsx`
```

"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  X,
  MapPin,
  Plus,
} from "lucide-react";
import type { AuthChangeEvent, Session } from "@supabase/supabase-js";

import AccountDropdown from "@/components/auth/AccountDropdown";
import LoginModal from "@/components/auth/LoginModal";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

type Account = {
  id: string;
  email: string | undefined;
  role: string | null;
};

type AuthUser = {
  id: string;
  email: string | undefined;
};

const categories = [
  { label: "Clothing", href: "/shop?category=clothing" },
  { label: "Shoes", href: "/shop?category=shoes" },
  { label: "Home & Living", href: "/shop?category=home-living" },
  { label: "Jewelry & Accessories", href: "/shop?category=accessories" },
  { label: "Toys & Entertainment", href: "/shop?category=toys" },
  { label: "Graphics & Photos", href: "/shop?category=graphics" },
  { label: "Video & Audio", href: "/shop?category=audio" },
  { label: "Web Templates & Code", href: "/shop?category=templates" },
];

export default function SiteHeader() {
  const router = useRouter();

  const [account, setAccount] = useState<Account | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const requestIdRef = useRef(0);

  const loadAccount = useCallback(async (user: AuthUser | null) => {
    const requestId = ++requestIdRef.current;

    if (!user) {
      setAccount(null);
      return;
    }

    const { data: profile, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (requestId !== requestIdRef.current) return;

    if (error) {
      console.error("Gagal memuat profil:", error.message);

      setAccount({
        id: user.id,
        email: user.email,
        role: null,
      });

      return;
    }

    setAccount({
      id: user.id,
      email: user.email,
      role: profile?.role ?? null,
    });
  }, []);

  // Pertahankan listener autentikasi yang sebelumnya berhasil.
  useEffect(() => {
    let active = true;
    let lastUserId: string | null | undefined = undefined;
    let scheduledUserId: string | null | undefined = undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        if (!active) return;

        const user = session?.user
          ? {
              id: session.user.id,
              email: session.user.email,
            }
          : null;

        const userId = user?.id ?? null;

        if (userId === lastUserId) return;

        lastUserId = userId;
        scheduledUserId = userId;

        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
          if (!active || scheduledUserId !== userId) return;
          void loadAccount(user);
        }, 0);
      },
    );

    return () => {
      active = false;

      if (timer) clearTimeout(timer);

      subscription.unsubscribe();
      requestIdRef.current += 1;
    };
  }, [loadAccount]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchTerm.trim();

    router.push(
      query ? `/shop?q=${encodeURIComponent(query)}` : "/shop",
    );

    setIsMobileMenuOpen(false);
    setIsSearchVisible(false);
  }

  function openSellPage(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!account) {
      event.preventDefault();
      setIsLoginOpen(true);
    }
  }

  return (
    <>
      <header className="relative z-50 w-full border-t-2 border-[#444444] bg-white text-[#555555]">
        {/* BARIS ATAS */}
        <div className="border-b border-gray-200">
          <div className="mx-auto flex min-h-11 max-w-7xl items-center justify-between gap-3 px-4">
            <div className="flex items-center gap-4 text-xs sm:text-sm">
              <Link
                href="/contact"
                className="transition hover:text-[#00a99d]"
              >
                Contact
              </Link>

              <Link
                href="/sell"
                onClick={openSellPage}
                className="transition hover:text-[#00a99d]"
              >
                Sell on Modesy
              </Link>
            </div>

            <div className="flex items-center gap-3 text-xs sm:gap-5 sm:text-sm">
              <Link
                href="/location"
                className="hidden items-center gap-1.5 transition hover:text-[#00a99d] lg:flex"
              >
                <MapPin size={14} />
                Location
              </Link>

              <select
                aria-label="Currency"
                defaultValue="USD ($)"
                className="max-w-20 cursor-pointer bg-transparent text-xs outline-none sm:max-w-none sm:text-sm"
              >
                <option>USD ($)</option>
                <option>IDR (Rp)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>

              <select
                aria-label="Language"
                defaultValue="English"
                className="hidden max-w-24 cursor-pointer bg-transparent text-xs outline-none sm:block sm:max-w-none sm:text-sm"
              >
                <option>English</option>
                <option>Indonesia</option>
              </select>

              {account ? (
                <AccountDropdown
                  email={account.email}
                  role={account.role ?? "member"}
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsLoginOpen(true)}
                  className="flex items-center gap-1.5 whitespace-nowrap transition hover:text-[#00a99d]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">
                    <span className="text-sm">👤</span>
                  </span>
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* LOGO, PENCARIAN, CART, WISHLIST, SELL NOW */}
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:gap-6">
          <Link
            href="/"
            className="shrink-0 text-3xl font-bold tracking-tight text-[#444444]"
          >
            M<span className="text-[#00a99d]">o</span>desy
          </Link>

          <form
            onSubmit={handleSearch}
            className="hidden min-w-0 max-w-2xl flex-1 md:flex"
          >
            <div className="flex h-12 w-full items-center rounded bg-[#f5f5f5] px-4">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search for products, categories or brands"
                className="min-w-0 flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                aria-label="Search products"
                className="text-gray-500 transition hover:text-[#00a99d]"
              >
                <Search size={21} strokeWidth={1.7} />
              </button>
            </div>
          </form>

          <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-5">
            <Link
              href="/cart"
              aria-label="Cart"
              className="flex items-center gap-1.5 transition hover:text-[#00a99d]"
            >
              <ShoppingCart size={23} strokeWidth={1.6} />
              <span className="hidden text-sm lg:inline">Cart</span>
            </Link>

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="flex items-center gap-1.5 transition hover:text-[#00a99d]"
            >
              <Heart size={24} strokeWidth={1.6} />
              <span className="hidden text-sm lg:inline">Wishlist</span>
            </Link>

            <Link
              href="/sell"
              onClick={openSellPage}
              className="hidden h-10 items-center justify-center gap-1.5 rounded bg-[#00a99d] px-4 text-sm font-medium text-white transition hover:bg-[#008f85] lg:flex"
            >
              <Plus size={16} />
              Sell Now
            </Link>

            <button
              type="button"
              aria-label="Search"
              onClick={() => setIsSearchVisible((previous) => !previous)}
              className="text-gray-600 hover:text-[#00a99d] md:hidden"
            >
              <Search size={21} />
            </button>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen((previous) => !previous)}
              className="text-gray-600 hover:text-[#00a99d] md:hidden"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* PENCARIAN MOBILE */}
        {isSearchVisible && (
          <div className="px-4 pb-3 md:hidden">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search for products, categories or brands"
                className="h-10 min-w-0 flex-1 rounded-l border border-gray-300 px-3 text-sm outline-none focus:border-[#00a99d]"
              />

              <button
                type="submit"
                aria-label="Search products"
                className="flex h-10 w-10 items-center justify-center rounded-r bg-[#00a99d] text-white"
              >
                <Search size={17} />
              </button>
            </form>
          </div>
        )}

        {/* KATEGORI */}
        <nav className="border-t border-gray-100">
          <div className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto px-4 py-3 text-xs whitespace-nowrap sm:gap-6 sm:text-sm lg:gap-7">
            {categories.map((category) => (
              <Link
                key={category.label}
                href={category.href}
                className="shrink-0 text-gray-700 transition hover:text-[#00a99d]"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* MENU MOBILE */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white px-4 py-3 md:hidden">
            <div className="flex flex-col">
              {categories.map((category) => (
                <Link
                  key={category.label}
                  href={category.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border-b border-gray-100 py-2.5 text-sm transition hover:text-[#00a99d]"
                >
                  {category.label}
                </Link>
              ))}

              <Link
                href="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-gray-100 py-2.5 text-sm"
              >
                Cart
              </Link>

              <Link
                href="/wishlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-gray-100 py-2.5 text-sm"
              >
                Wishlist
              </Link>

              <Link
                href="/sell"
                onClick={(event) => {
                  setIsMobileMenuOpen(false);
                  openSellPage(event);
                }}
                className="mt-3 flex h-10 items-center justify-center gap-2 rounded bg-[#00a99d] text-sm font-medium text-white"
              >
                <Plus size={16} />
                Sell Now
              </Link>
            </div>
          </div>
        )}
      </header>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}
```

### `src/components/product/ProductActions.tsx`
```
"use client";

import { Heart, ShoppingCart } from "lucide-react";

type ProductActionsProps = {
  isWishlisted: boolean;
  addedToCart: boolean;
  onToggleWishlist: () => void;
  onToggleCart: () => void;
};

export default function ProductActions({
  isWishlisted,
  addedToCart,
  onToggleWishlist,
  onToggleCart,
}: ProductActionsProps) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {/* Tombol keranjang */}
      <button
        type="button"
        onClick={onToggleCart}
        className={`flex flex-1 items-center justify-center gap-2 rounded px-5 py-3 text-sm font-medium transition-colors ${
          addedToCart
            ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
            : "bg-teal-600 text-white hover:bg-teal-700"
        }`}
      >
        <ShoppingCart size={18} />
        {addedToCart ? "Remove from Cart" : "Add to Cart"}
      </button>

      {/* Tombol wishlist */}
      <button
        type="button"
        onClick={onToggleWishlist}
        aria-pressed={isWishlisted}
        className={`flex items-center justify-center gap-2 rounded border px-5 py-3 text-sm font-medium transition-colors ${
          isWishlisted
            ? "border-red-300 bg-red-50 text-red-500"
            : "border-gray-300 text-gray-700 hover:border-red-300 hover:text-red-500"
        }`}
      >
        <Heart
          size={18}
          fill={isWishlisted ? "currentColor" : "none"}
        />
        {isWishlisted ? "Wishlisted" : "Wishlist"}
      </button>
    </div>
  );
}
```

### `src/components/product/ProductBreadcrumb.tsx`
```
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type ProductBreadcrumbProps = {
  productName: string;
  category: string;
};

export default function ProductBreadcrumb({
  productName,
  category,
}: ProductBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1 transition-colors hover:text-teal-600"
      >
        <Home size={15} />
        Home
      </Link>

      <ChevronRight size={15} />

      <Link
        href="/products"
        className="transition-colors hover:text-teal-600"
      >
        Products
      </Link>

      <ChevronRight size={15} />

      <span className="transition-colors hover:text-teal-600">
        {category}
      </span>

      <ChevronRight size={15} />

      <span
        className="max-w-52 truncate font-medium text-gray-800"
        aria-current="page"
      >
        {productName}
      </span>
    </nav>
  );
}
```

### `src/components/product/ProductCard.tsx`
```
"use client";

import { Heart, ShoppingCart } from "lucide-react";

export type Product = {
  id: number;
  name: string;
  seller: string;
  price: number;
  oldPrice: number;
  category: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
  isWishlisted: boolean;
  isInCart: boolean;
  onToggleWishlist: (id: number) => void;
  onToggleCart: (id: number) => void;
};

export default function ProductCard({
  product,
  isWishlisted,
  isInCart,
  onToggleWishlist,
  onToggleCart,
}: ProductCardProps) {
  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <article className="group overflow-hidden rounded border border-gray-200 bg-white transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <a
          href={`/products/${product.id}`}
          aria-label={`Lihat ${product.name}`}
          className="block h-full w-full"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {discount > 0 && (
          <span className="absolute left-3 top-3 rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
            -{discount}%
          </span>
        )}

        <button
          type="button"
          onClick={() => onToggleWishlist(product.id)}
          aria-label={
            isWishlisted
              ? `Hapus ${product.name} dari wishlist`
              : `Tambahkan ${product.name} ke wishlist`
          }
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow transition-colors ${
            isWishlisted
              ? "text-red-500"
              : "text-gray-500 hover:text-red-500"
          }`}
        >
          <Heart
            size={18}
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="p-4">
        <p className="mb-1 text-xs text-gray-500">{product.category}</p>

        <a
          href={`/products/${product.id}`}
          className="line-clamp-2 min-h-10 text-sm font-medium text-gray-800 hover:text-teal-600"
        >
          {product.name}
        </a>

        <p className="mt-2 text-xs text-gray-500">
          Sold by {product.seller}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="font-semibold text-gray-900">
            {formatPrice(product.price)}
          </span>

          {product.oldPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => onToggleCart(product.id)}
          className={`mt-4 flex w-full items-center justify-center gap-2 rounded px-3 py-2 text-sm font-medium transition-colors ${
            isInCart
              ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
              : "bg-teal-600 text-white hover:bg-teal-700"
          }`}
        >
          <ShoppingCart size={16} />
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}
```

### `src/components/product/ProductCatalog.tsx`
```
"use client";

import { useEffect, useMemo, useState } from "react";
import ProductSearch from "@/components/product/ProductSearch";
import ProductFilter from "@/components/product/ProductFilter";
import ProductGrid from "@/components/product/ProductGrid";
import ProductPagination from "@/components/product/ProductPagination";
import { products } from "@/features/products/data/products";

const PRODUCTS_PER_PAGE = 6;

export default function ProductCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("default");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(
    () => ["all", ...new Set(products.map((product) => product.category))],
    []
  );

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    const minimum = minPrice === "" ? null : Number(minPrice);
    const maximum = maxPrice === "" ? null : Number(maxPrice);

    const result = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(keyword) ||
        product.seller.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword);

      const matchesCategory =
        category === "all" || product.category === category;

      const matchesMinPrice =
        minimum === null || product.price >= minimum;

      const matchesMaxPrice =
        maximum === null || product.price <= maximum;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });

    switch (sort) {
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;

      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;

      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;

      default:
        break;
    }

    return result;
  }, [search, category, minPrice, maxPrice, sort]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, minPrice, maxPrice, sort]);

  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  function toggleWishlist(id: number) {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function toggleCart(id: number) {
    setCart((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function resetFilters() {
    setSearch("");
    setCategory("all");
    setMinPrice("");
    setMaxPrice("");
    setSort("default");
    setCurrentPage(1);
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Products
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Discover products from our marketplace.
          </p>
        </div>

        <ProductSearch
          search={search}
          onSearchChange={setSearch}
          sort={sort}
          onSortChange={setSort}
        />

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-4">
          <div className="md:col-span-1">
            <ProductFilter
              categories={categories}
              category={category}
              onCategoryChange={setCategory}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onMinPriceChange={setMinPrice}
              onMaxPriceChange={setMaxPrice}
              onReset={resetFilters}
            />
          </div>

          <section className="min-w-0 md:col-span-3">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {paginatedProducts.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900">
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>

              {wishlist.length > 0 && (
                <p className="text-sm text-gray-500">
                  Wishlist: {wishlist.length}
                </p>
              )}

              {cart.length > 0 && (
                <p className="text-sm text-gray-500">
                  Cart: {cart.length}
                </p>
              )}
            </div>

            <ProductGrid
              products={paginatedProducts}
              wishlist={wishlist}
              cart={cart}
              onToggleWishlist={toggleWishlist}
              onToggleCart={toggleCart}
            />

            <ProductPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
```

### `src/components/product/ProductFilter.tsx`
```
"use client";

import { SlidersHorizontal } from "lucide-react";

type ProductFilterProps = {
  categories: string[];
  category: string;
  onCategoryChange: (value: string) => void;
  minPrice: string;
  maxPrice: string;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onReset: () => void;
};

export default function ProductFilter({
  categories,
  category,
  onCategoryChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  onReset,
}: ProductFilterProps) {
  return (
    <aside className="h-fit rounded border border-gray-200 bg-white p-5">
      <div className="mb-5 flex items-center gap-2 border-b border-gray-200 pb-4">
        <SlidersHorizontal size={18} className="text-teal-600" />
        <h2 className="text-base font-semibold text-gray-900">
          Filter Products
        </h2>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 text-sm font-semibold text-gray-800">
          Categories
        </h3>

        <div className="space-y-3">
          {categories.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
            >
              <input
                type="radio"
                name="product-category"
                value={item}
                checked={category === item}
                onChange={() => onCategoryChange(item)}
                className="accent-teal-600"
              />
              <span>{item === "all" ? "All Categories" : item}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-800">
          Price Range
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="min-price"
              className="mb-1 block text-xs text-gray-500"
            >
              Minimum
            </label>
            <input
              id="min-price"
              type="number"
              min="0"
              value={minPrice}
              onChange={(event) => onMinPriceChange(event.target.value)}
              placeholder="Min price"
              className="w-full min-w-0 rounded border border-gray-300 px-2 py-2 text-sm outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label
              htmlFor="max-price"
              className="mb-1 block text-xs text-gray-500"
            >
              Maximum
            </label>
            <input
              id="max-price"
              type="number"
              min="0"
              value={maxPrice}
              onChange={(event) => onMaxPriceChange(event.target.value)}
              placeholder="Max price"
              className="w-full min-w-0 rounded border border-gray-300 px-2 py-2 text-sm outline-none focus:border-teal-500"
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-5 w-full rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-teal-600 hover:text-teal-600"
      >
        Reset Filters
      </button>
    </aside>
  );
}
```

### `src/components/product/ProductGrid.tsx`
```
"use client";

import ProductCard, { type Product } from "@/components/product/ProductCard";

type ProductGridProps = {
  products: Product[];
  wishlist: number[];
  cart: number[];
  onToggleWishlist: (id: number) => void;
  onToggleCart: (id: number) => void;
};

export default function ProductGrid({
  products,
  wishlist,
  cart,
  onToggleWishlist,
  onToggleCart,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex min-h-64 flex-col items-center justify-center rounded border border-gray-200 bg-white px-6 py-12 text-center">
        <h2 className="text-lg font-semibold text-gray-900">
          No products found
        </h2>

        <p className="mt-2 max-w-md text-sm text-gray-500">
          We couldn't find any products matching your search or filter.
          Try changing your search keywords or resetting the filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isWishlisted={wishlist.includes(product.id)}
          isInCart={cart.includes(product.id)}
          onToggleWishlist={onToggleWishlist}
          onToggleCart={onToggleCart}
        />
      ))}
    </div>
  );
}
```

### `src/components/product/ProductInfo.tsx`
```
import type { Product } from "@/components/product/ProductCard";

type ProductInfoProps = {
  product: Product;
};

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="mt-8 border-t border-gray-200 pt-5 text-sm text-gray-500">
      <p>
        <span className="font-medium text-gray-800">Seller:</span>{" "}
        {product.seller}
      </p>

      <p className="mt-2">
        <span className="font-medium text-gray-800">Category:</span>{" "}
        {product.category}
      </p>

      <p className="mt-2">
        <span className="font-medium text-gray-800">Product ID:</span>{" "}
        {product.id}
      </p>
    </div>
  );
}
```

### `src/components/product/ProductPagination.tsx`
```
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type ProductPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function ProductPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProductPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Product pagination"
      className="mt-8 flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-10 items-center gap-1 rounded border border-gray-300 px-3 text-sm text-gray-600 transition-colors hover:border-teal-600 hover:text-teal-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={16} />
        <span>Previous</span>
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
            className={`h-10 min-w-10 rounded border px-3 text-sm transition-colors ${
              currentPage === page
                ? "border-teal-600 bg-teal-600 text-white"
                : "border-gray-300 text-gray-600 hover:border-teal-600 hover:text-teal-600"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-10 items-center gap-1 rounded border border-gray-300 px-3 text-sm text-gray-600 transition-colors hover:border-teal-600 hover:text-teal-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span>Next</span>
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
```

### `src/components/product/ProductSearch.tsx`
```
"use client";

import { Search, SlidersHorizontal } from "lucide-react";

type ProductSearchProps = {
  search: string;
  onSearchChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
};

export default function ProductSearch({
  search,
  onSearchChange,
  sort,
  onSortChange,
}: ProductSearchProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search products..."
          aria-label="Search products"
          className="w-full rounded border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-teal-500"
        />
      </div>

      <div className="flex items-center gap-3">
        <SlidersHorizontal size={18} className="shrink-0 text-gray-500" />

        <label htmlFor="product-sort" className="whitespace-nowrap text-sm text-gray-600">
          Sort by:
        </label>

        <select
          id="product-sort"
          value={sort}
          onChange={(event) => onSortChange(event.target.value)}
          className="min-w-0 rounded border border-gray-300 bg-white px-3 py-3 text-sm outline-none focus:border-teal-500"
        >
          <option value="default">Default</option>
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>
    </div>
  );
}
```

### `src/features/products/data/products.ts`
```
import type { Product } from "@/components/product/ProductCard";

export const products: Product[] = [
  {
    id: 1,
    name: "Animal Colorful Digital Prints",
    seller: "Trendshop",
    price: 29,
    oldPrice: 39,
    category: "Graphics",
    image: "/images/products/animal-colorful-digital-prints.jpg",
  },
  {
    id: 2,
    name: "Summer Fashion Top Lace",
    seller: "Trendshop",
    price: 65,
    oldPrice: 79,
    category: "Women's Clothing",
    image: "/images/products/summer-fashion-top-lace.jpg",
  },
  {
    id: 3,
    name: "Women Lace Blouse",
    seller: "Trendshop",
    price: 69,
    oldPrice: 79,
    category: "Women's Clothing",
    image: "/images/products/women-lace-blouse.jpg",
  },
  {
    id: 4,
    name: "Floral Women Sundress",
    seller: "Admin",
    price: 80,
    oldPrice: 89,
    category: "Women's Clothing",
    image: "/images/products/floral-women-sundress.jpg",
  },
  {
    id: 5,
    name: "Gucci Nylon Fabric Smart Backpack",
    seller: "Admin",
    price: 55,
    oldPrice: 69,
    category: "Accessories",
    image: "/images/products/gucci-backpack.jpg",
  },
  {
    id: 6,
    name: "Black Sneakers With White Sole",
    seller: "Admin",
    price: 69,
    oldPrice: 89,
    category: "Shoes",
    image: "/images/products/black-sneakers.jpg",
  },
  {
    id: 7,
    name: "Women Saddle Handbag",
    seller: "Admin",
    price: 59,
    oldPrice: 69,
    category: "Accessories",
    image: "/images/products/women-saddle-handbag.jpg",
  },
  {
    id: 8,
    name: "Handcrafted Decorative Pillow",
    seller: "Admin",
    price: 59,
    oldPrice: 69,
    category: "Home & Living",
    image: "/images/products/decorative-pillow.jpg",
  },
];
```

### `src/features/products/lib/shop-storage.ts`
```
import type { Product } from "@/components/product/ProductCard";

const WISHLIST_KEY = "vyro-wishlist";
const CART_KEY = "vyro-cart";

function readProducts(key: string): Product[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const value = localStorage.getItem(key);

    if (!value) {
      return [];
    }

    return JSON.parse(value) as Product[];
  } catch {
    return [];
  }
}

function writeProducts(key: string, products: Product[]) {
  localStorage.setItem(key, JSON.stringify(products));
}

export function getWishlist(): Product[] {
  return readProducts(WISHLIST_KEY);
}

export function getCart(): Product[] {
  return readProducts(CART_KEY);
}

export function toggleWishlist(product: Product): Product[] {
  const current = getWishlist();
  const exists = current.some((item) => item.id === product.id);

  const updated = exists
    ? current.filter((item) => item.id !== product.id)
    : [...current, product];

  writeProducts(WISHLIST_KEY, updated);

  return updated;
}

export function toggleCart(product: Product): Product[] {
  const current = getCart();
  const exists = current.some((item) => item.id === product.id);

  const updated = exists
    ? current.filter((item) => item.id !== product.id)
    : [...current, product];

  writeProducts(CART_KEY, updated);

  return updated;
}

export function removeFromWishlist(id: number): Product[] {
  const updated = getWishlist().filter((item) => item.id !== id);

  writeProducts(WISHLIST_KEY, updated);

  return updated;
}

export function removeFromCart(id: number): Product[] {
  const updated = getCart().filter((item) => item.id !== id);

  writeProducts(CART_KEY, updated);

  return updated;
}
```

### `src/lib/supabase/auth-actions.ts`
```
"use client";

import { createClient } from "@/lib/supabase/client";

export type UserRole =
  | "super_admin"
  | "moderator"
  | "vendor"
  | "member";

export type LoginResult =
  | {
      success: true;
      role: UserRole;
    }
  | {
      success: false;
      message: string;
    };

export async function loginWithPassword(
  email: string,
  password: string,
): Promise<LoginResult> {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });

  if (error) {
    console.error("Login gagal:", error.message);

    return {
      success: false,
      message: error.message,
    };
  }

  if (!data.user) {
    return {
      success: false,
      message: "Data pengguna tidak ditemukan.",
    };
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", data.user.id)
    .maybeSingle();

  if (profileError || !profile) {
    console.error("Profil gagal dimuat:", profileError?.message);

    return {
      success: false,
      message:
        "Login berhasil, tetapi profil belum ditemukan. Periksa tabel profiles.",
    };
  }

  const allowedRoles: UserRole[] = [
    "super_admin",
    "moderator",
    "vendor",
    "member",
  ];

  if (!allowedRoles.includes(profile.role as UserRole)) {
    return {
      success: false,
      message: "Role akun tidak dikenali.",
    };
  }

  return {
    success: true,
    role: profile.role as UserRole,
  };
}

export async function logoutUser() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Logout gagal:", error.message);
    return {
      success: false,
      message: error.message,
    };
  }

  return { success: true };
}
```

### `src/lib/supabase/client.ts`
```

import { createBrowserClient } from "@supabase/ssr";

let supabaseClient: ReturnType<typeof createBrowserClient> | undefined;

export function createClient() {
  if (!supabaseClient) {
    supabaseClient = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }

  return supabaseClient;
}
```
