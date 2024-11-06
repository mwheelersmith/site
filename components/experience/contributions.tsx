export function ExperienceContributions({
  contributions,
}: {
  contributions: string[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium">Key Contributions</p>
      <ol className="ms-4 flex list-outside list-disc flex-col gap-4">
        {contributions.map((contribution, index) => (
          <li key={index}>{contribution}</li>
        ))}
      </ol>
    </div>
  );
}
