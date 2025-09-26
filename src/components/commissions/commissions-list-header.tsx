interface CommissionsListHeaderProps {
  subtitle: string;
  title: string;
}

export function CommissionsListHeader({ subtitle, title }: CommissionsListHeaderProps) {
  return (
    <div className="flex flex-col gap-1 text-center">
      <p>{subtitle}</p>
      <h3 className="text-xl font-medium">{title}</h3>
    </div>
  );
}
