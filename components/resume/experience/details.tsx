import { Building2, Calendar } from "lucide-react";

export function ExperienceDetails({
  company,
  location,
  serviceDates,
  serviceLength,
}: {
  company: string;
  location: string;
  serviceDates: string;
  serviceLength: string;
}) {
  return (
    <div className="mb-2 flex gap-8 border-b border-zinc-200 pb-2 dark:border-zinc-600">
      <p className="flex items-center gap-2">
        <Building2 size={16} />
        {company}
        <span className="hidden text-sm text-zinc-500 sm:inline-block dark:text-zinc-400">
          &bull; {location}
        </span>
      </p>
      <p className="flex items-center gap-2">
        <Calendar size={16} />
        {serviceDates}
        <span className="hidden text-sm text-zinc-500 sm:inline-block dark:text-zinc-400">
          &bull; {serviceLength}
        </span>
      </p>
    </div>
  );
}
