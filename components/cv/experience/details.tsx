export function ExperienceDetails({
  location,
  serviceDates,
  serviceLength,
}: {
  location: string;
  serviceDates: string;
  serviceLength: string;
}) {
  return (
    <p className="cv-entry-details text-muted mt-2 font-mono text-sm leading-relaxed">
      {serviceDates} &middot; {serviceLength} &middot; {location}
    </p>
  );
}
