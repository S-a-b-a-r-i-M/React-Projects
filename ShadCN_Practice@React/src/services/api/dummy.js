import { FRUIT_OPTIONS } from "@/utils/dropdown-options.constants"

export const fetchFruites = async (offset, limit) => {
  return new Promise(
    (resolve) => setTimeout(
      () => resolve(FRUIT_OPTIONS.slice(offset, offset + limit)),
      500
  ))
}