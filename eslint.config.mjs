import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// `eslint-config-next` (e `prettier`) ainda são publicados no formato antigo
// ("extends"). O FlatCompat converte essas configs para o formato flat do
// ESLint 9, então continuamos aproveitando `next/core-web-vitals` e
// `next/typescript` sem reescrever tudo na mão.
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "../**/componentes/*",
                "../**/tipos/*",
                "../**/dados/*",
                "../**/configuracoes/*",
                "../**/utilitarios/*",
              ],
              message:
                "Use os novos nomes de pastas em inglês: @/components, @/types, @/data, @/config, @/utils",
            },
          ],
        },
      ],
    },
  },
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
