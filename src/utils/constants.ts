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
export const CATEGORY_CONFIG: Record<Category, { bg: string; emoji: string; slug: string }> = {
  [Category.BodyParts]: { bg: 'bg-card-body', emoji: '🧍', slug: 'BodyParts' },
  [Category.Fruits]: { bg: 'bg-card-fruits', emoji: '🍎', slug: 'Fruits' },
  [Category.Vegetables]: { bg: 'bg-card-vegetables', emoji: '🥦', slug: 'Vegetables' },
  [Category.Groceries]: { bg: 'bg-card-groceries', emoji: '🛒', slug: 'Groceries' },
}

// ── Slug → Category value (for route params) ─────────────────
export const SLUG_TO_CATEGORY: Record<string, Category> = Object.fromEntries(
  Object.entries(Category).map(([key, value]) => [key, value as Category])
)

// ── Derived array for rendering ───────────────────────────────
export const CATEGORIES = Object.values(Category).map((title) => ({
  title,
  ...CATEGORY_CONFIG[title],
}))
