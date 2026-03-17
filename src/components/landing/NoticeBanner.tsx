import { AlertCircle } from "lucide-react";

const NoticeBanner = () => {
  return (
    <div className="bg-yellow-500/10 border-b border-yellow-500/20 py-2.5 px-4 overflow-hidden relative z-[60]">
      <div className="container mx-auto flex items-center justify-center gap-2 text-center">
        <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
        <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">
          <span className="text-yellow-500 font-bold mr-1">NOTICE:</span> 
          Independent setup toolkit for NVIDIA NemoClaw. Project not affiliated with or official representing NVIDIA Corporation.
        </p>
      </div>
    </div>
  );
};

export default NoticeBanner;
