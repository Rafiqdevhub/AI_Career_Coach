import { Badge } from "@/components/ui/badge";

const DashboardView = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Badge variant="outline">Last updated</Badge>
      </div>
    </div>
  );
};

export default DashboardView;
