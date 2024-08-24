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

export function format_phone_number(phone: string) {
  // only allow numbers 0 - 9 max 12 char
  const clean_phone = phone.replace(/\D/g, "").substring(0, 12);
  // check if the length of the phone number is more than 4
  if (clean_phone.length > 4) {
    // check if the length of the phone number is less than 8
    if (clean_phone.length < 8) {
      // return the phone number with the format 08x xxxx xxxx
      return clean_phone.replace(/(\d{4})/, "$1 ");
    }
    // return the phone number with the format 08x xxx xxxx
    return clean_phone.replace(/(\d{4})(\d{4})/, "$1 $2 ");
  }
  // return the phone number with the format 08x xxxx
  return clean_phone;
}