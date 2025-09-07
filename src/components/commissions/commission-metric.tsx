interface CommissionMetricProps {
  title: string;
  value: string;
}

export function CommissionMetric({ title, value }: CommissionMetricProps) {
  return (
    <div className="flex flex-1 border border-b-2 border-e-2 rounded-lg p-5 min-w-max">
      <p className="flex flex-1/5 items-center">{title}</p>
      <span className="flex flex-1 items-center justify-end">{value}</span>
    </div>
  );
};
