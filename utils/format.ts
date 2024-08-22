export const format_date = (date_params: string) => {
  const date = new Date(date_params);
  return new Intl.DateTimeFormat('id-ID', {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function format_rupiah(
  angka: number,
  options: object = {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }
) {
  return new Intl.NumberFormat("id-ID", options).format(angka);
}