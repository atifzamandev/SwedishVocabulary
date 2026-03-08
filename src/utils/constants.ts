// ── Category "enum" ──────────────────────────────────────────
// Using `as const` instead of TypeScript `enum` because
// `erasableSyntaxOnly: true` in tsconfig disallows enums.
// This pattern is runtime-identical to an enum — it produces
// a plain JS object with string values accessible as
// Category.BodyParts, Category.Fruits, etc.

export const Category = {
  BodyParts: 'Body Parts',
  Fruits: 'Fruits',
  Vegetables: 'Vegetables',
  Groceries: 'Groceries',
} as const

export type Category = (typeof Category)[keyof typeof Category]

// ── Category display config ───────────────────────────────────
export const CATEGORY_CONFIG: Record<Category, { bg: string; emoji: string }> = {
  [Category.BodyParts]: { bg: 'bg-card-body', emoji: '🧍' },
  [Category.Fruits]: { bg: 'bg-card-fruits', emoji: '🍎' },
  [Category.Vegetables]: { bg: 'bg-card-vegetables', emoji: '🥦' },
  [Category.Groceries]: { bg: 'bg-card-groceries', emoji: '🛒' },
}

// ── Derived array for rendering ───────────────────────────────
export const CATEGORIES = Object.values(Category).map((title) => ({
  title,
  ...CATEGORY_CONFIG[title],
}))
