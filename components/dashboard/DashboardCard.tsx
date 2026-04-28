import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-4 flex-1 min-w-[260px] shadow-sm">
      <CardContent className="p-0">
        <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200 truncate px-2">
          {title}
        </h3>

        <div className="flex gap-5 justify-center items-center">
          <div className="shrink-0 flex items-center justify-center">
            {icon}
          </div>

          <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
