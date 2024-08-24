'use client'

import { useState, useEffect } from "react"
import { useRouter } from "@/navigation"

import { useTranslations } from "next-intl"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { FIRST_PAGE, PER_PAGE } from "../../lib/constants"

function Pagination({ currentPage, path, response }) {

    const [current, setCurrent] = useState(+currentPage || 1)

    const router = useRouter()

    const t = useTranslations("shared")

    const total = response?.meta?.pagination?.total
    const hasNextPage = currentPage * PER_PAGE < total
    const hasPrevPage = currentPage > FIRST_PAGE

    const handlePaginationClick = (direction) => {
        direction === "next" ? setCurrent((prev) => prev + 1) : setCurrent((prev) => prev - 1)
    }

    useEffect(() => {
        router.replace(path + current, { scroll: false })
    }, [current])


    return (
        <div className="flex items-center gap-2 mt-auto">
            {hasPrevPage && (
                <button onClick={() => handlePaginationClick("prev")} className="flex items-center gap-2">
                 <ChevronLeft /> {t("previous")}
                </button>
            )}

            {hasPrevPage && hasNextPage && (' // ')}
            
            {hasNextPage && (
                <button onClick={() => handlePaginationClick("next")} className="flex items-center gap-2">
                    {t("next")} <ChevronRight />
                </button>
            )}
        </div>
    )
}

export default Pagination