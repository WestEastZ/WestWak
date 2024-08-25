export function calculatePagination({
  currentPage,
  total,
}: {
  currentPage: number;
  total: number;
}) {
  const totalPages = Math.ceil(total / 5);
  const pageGroup = Math.ceil(currentPage / 5);
  const lastPageGroup = Math.ceil(totalPages / 5);

  const startPage = (pageGroup - 1) * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);

  return {
    pageGroup,
    lastPageGroup,
    startPage,
    endPage,
  };
}
