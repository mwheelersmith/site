export default function formatWorkDuration(startDate: Date): string {
  const now = new Date();
  let months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  if (now.getDate() < startDate.getDate()) {
    months -= 1;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (remainingMonths > 0)
    parts.push(`${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`);

  return parts.join(" ") || "Less than a month";
}
