# frozen_string_literal: true

Category.upsert_all(
  [
    {
      code: 'exercise',
      name: 'Exercise'
    },
    {
      code: 'education',
      name: 'Education'
    },
    {
      code: 'recipe',
      name: 'Recipe'
    }
  ],
  unique_by: 'code',
  update_only: 'name'
)
