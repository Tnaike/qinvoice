import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export const generatePaginationLinks = (
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
) => {
  const pages: JSX.Element[] = [];

  // Always show the first page
  pages.push(
    <PaginationItem key={1}>
      <PaginationLink
        onClick={() => onPageChange(1)}
        isActive={1 === currentPage}
      >
        1
      </PaginationLink>
    </PaginationItem>
  );

  // Determine the range of pages to display
  const startPage = Math.max(2, currentPage - 1);
  const endPage = Math.min(totalPages - 1, currentPage + 1);

  // Add ellipsis if there are pages not shown at the start
  if (startPage > 2) {
    pages.push(<PaginationEllipsis key="start-ellipsis" />);
  }

  // Add page numbers in the range
  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <PaginationItem key={i}>
        <PaginationLink
          onClick={() => onPageChange(i)}
          isActive={i === currentPage}
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

  // Add ellipsis if there are pages not shown at the end
  if (endPage < totalPages - 1) {
    pages.push(<PaginationEllipsis key="end-ellipsis" />);
  }

  // Always show the last page if there are at least two pages
  if (totalPages > 1) {
    pages.push(
      <PaginationItem key={totalPages}>
        <PaginationLink
          onClick={() => onPageChange(totalPages)}
          isActive={totalPages === currentPage}
        >
          {totalPages}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return pages;
};
