const typescriptRules = {
  "no-shadow": "off",
  "jsdoc/require-param-type": "off",
  "jsdoc/require-property-type": "off",
  "jsdoc/require-returns-type": "off",
  "@typescript-eslint/consistent-type-definitions": "error",
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-non-null-assertion": "error",
  "@typescript-eslint/no-shadow": "error",
  "@typescript-eslint/no-unused-vars": "error",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "enumMember",
      format: ["PascalCase"],
    },
    {
      selector: ["variable", "function", "classMethod"],
      leadingUnderscore: "allow",
      trailingUnderscore: "allow",
      format: ["camelCase", "PascalCase"],
    },
    {
      selector: ["interface"],
      leadingUnderscore: "allow",
      trailingUnderscore: "allow",
      format: ["PascalCase"],
    },
  ],
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-namespace": "off",
  "@next/next/no-img-element": "off",
  "no-unused-vars": [
    "error",
    {
      argsIgnorePattern: "^_",
    },
  ],
  eqeqeq: ["error", "always"],
};

export default typescriptRules;
