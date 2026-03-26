/**
 * Common helper functions for the DocuPilot test API
 */

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function paginate<T>(items: T[], page: number, perPage: number = 10): { data: T[]; total: number; page: number; pages: number } {
  const start = (page - 1) * perPage;
  return {
    data: items.slice(start, start + perPage),
    total: items.length,
    page,
    pages: Math.ceil(items.length / perPage),
  };
}

// E2E test: trigger DocuPilot webhook - 20260326T074207Z
