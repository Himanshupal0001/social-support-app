import { cn } from '@/lib/utils';
import { FormField } from '@/components/ui/form';

type Props = {
  values: Record<string, unknown>;
};

const prettyLabel = (key: string) => {
  return key
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

export default function ReviewStep({ values }: Props) {
  const entries = Object.entries(values ?? {});

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {entries.map(([key, value]) => (
          <div key={key} className="rounded-lg border p-3 bg-background/50">
            <div className="text-xs text-muted-foreground">
              {prettyLabel(key)}
            </div>
            <div className="mt-1 text-sm break-words">
              {value === null || value === undefined || value === ''
                ? '—'
                : String(value)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
