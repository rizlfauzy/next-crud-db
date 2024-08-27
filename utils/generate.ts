export function generatePagination(current_page: number, total_pages: number): (string | number)[] {
  if (total_pages <= 7) return Array.from({ length: total_pages }, (_, i) => i + 1);
  if (current_page <= 3) return [1, 2, 3, "...", total_pages - 1, total_pages];
  if (current_page >= total_pages - 2) return [1, 2, "...", total_pages - 2, total_pages - 1, total_pages];
  return [1, "...", current_page - 1, current_page, current_page + 1, "...", total_pages];
}