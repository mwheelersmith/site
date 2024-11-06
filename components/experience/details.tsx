import { Building2, Calendar } from "lucide-react";

export function ExperienceDetails({
  company,
  serviceDates,
  serviceLength,
}: {
  company: string;
  serviceDates: string;
  serviceLength: string;
}) {
  return (
    <>
      <p className="flex items-center gap-2">
        <Building2 size={16} />
        {company}
      </p>
      <p className="flex items-center gap-2">
        <Calendar size={16} />
        {serviceDates}
        <span className="text-sm text-gray-500">&bull; {serviceLength}</span>
      </p>
    </>
  );
}
