import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsCharts";
import { Newspaper, Folder, User, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    // Добавляем контейнер, который займет всю ширину и центрирует контент
    <div className="w-full">
      <div className="flex flex-wrap justify-center lg:justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={
            <Newspaper className="text-slate-500 shrink-0 w-10 h-10 sm:w-14 sm:h-14 lg:w-[72px] lg:h-[72px]" />
          }
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={
            <Folder className="text-slate-500 shrink-0 w-10 h-10 sm:w-14 sm:h-14 lg:w-[72px] lg:h-[72px]" />
          }
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={
            <User className="text-slate-500 shrink-0 w-10 h-10 sm:w-14 sm:h-14 lg:w-[72px] lg:h-[72px]" />
          }
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={
            <MessageCircle className="text-slate-500 shrink-0 w-10 h-10 sm:w-14 sm:h-14 lg:w-[72px] lg:h-[72px]" />
          }
        />
      </div>

      <AnalyticsChart />

      <PostsTable title="Latest Posts" limit={5} />
    </div>
  );
}
