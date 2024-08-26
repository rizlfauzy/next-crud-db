"use client";
import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import clsx from "clsx";

export default function Pagination({ total_pages }: { total_pages: number }) {
  const path = usePathname();
  const search_params = useSearchParams();
  const current_page = Number(search_params.get("page")) || 1;

  const create_page_url = useCallback(
    (page: number | string): string => {
      const params = new URLSearchParams(search_params);
      params.set("page", page.toString());
      return `${path}?${params.toString()}`;
    },
    [path, search_params]
  );

  // const all_pages = generatePagination(current_page, total_pages);

  const PaginationNumber = ({ page, href, position, is_active }: { page: number | string; href: string; position?: "first" | "last" | "middle" | "single"; is_active: boolean }) => {
    const className = clsx(`flex height-10 width-10 items-center justify-center text-sm border`, {
      "rounded-l-sm": position === "first" || position === "single",
      "rounded-r-sm": position === "last" || position === "single",
      "z-10 bg-blue-100 border-blue-500 text-white": is_active,
      "hover:bg-gray-100": !is_active && position !== "middle",
      "text-gray-300 pointer-events-none": position === "single",
    });

    return is_active && position == "middle" ? (
      <div className={className}>{page}</div>
    ) : (
      <Link href={href} className={className}>
        {page}
      </Link>
    );
  };

  const PaginationArrow = ({ href, direction, is_disabled }: { href: string; direction: "left" | "right"; is_disabled?: boolean }): JSX.Element => {
    const className = clsx(`flex height-10 width-10 items-center justify-center text-sm border`, {
      "pointer-events-none text-gray-300": is_disabled,
      "hover:bg-gray-100": !is_disabled,
      "mr-2": direction === "left",
      "ml-2": direction === "right",
    });

    const icon = direction === "left" ? <HiChevronLeft size={20} /> : <HiChevronRight size={20} />;
    return is_disabled ? (
      <div className={className}>{icon}</div>
    ) : (
      <Link href={href} className={className}>
        {icon}
      </Link>
    );
  };

  return (
    <div className="inline-flex">
      <PaginationArrow direction="left" href={create_page_url(current_page - 1)} is_disabled={current_page <= 1} />
      <div className="flex -space-x-px">
        {all_pages.map((page, i) => {
          let position: "first" | "last" | "middle" | "single" | undefined;
          if (i === 0) position = "first";
          else if (i === all_pages.length - 1) position = "last";
          else if (all_pages.length === 1) position = "single";
          else if (page == '...') position = "middle";

          return <PaginationNumber key={i} href={create_page_url(page)} page={page} position={position} is_active={page === current_page} />;
        })}
      </div>
      <PaginationArrow direction="right" href={create_page_url(current_page + 1)} is_disabled={current_page >= total_pages} />
    </div>
  );
}
