export const formatDate = (date?: Date): string =>
  date
    ? date.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      })
    : "";
