import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  showPreviousNext: boolean;
};

export default function Paginator({
  currentPage,
  totalPages,
  onPageChange,
  showPreviousNext,
}: PaginatorProps) {
  return (
    <Pagination className="mt-6">
      <PaginationContent>
        {showPreviousNext && totalPages ? (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => onPageChange(currentPage - 1)}
              className={`h-10 ${
                currentPage <= 1
                  ? "pointer-events-none disabled:cursor-not-allowed disabled:opacity-75"
                  : ""
              }`}
              aria-disabled={currentPage <= 1}
            />
          </PaginationItem>
        ) : null}
        {/* {generatePaginationLinks(currentPage, totalPages, onPageChange)} */}
        {showPreviousNext && totalPages ? (
          <PaginationItem>
            <PaginationNext
              onClick={() => onPageChange(currentPage + 1)}
              className={`h-10 ${
                currentPage >= totalPages
                  ? "pointer-events-none disabled:cursor-not-allowed disabled:opacity-75"
                  : ""
              }`}
              aria-disabled={currentPage >= totalPages}
            />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
}
