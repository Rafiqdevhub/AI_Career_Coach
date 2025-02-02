import { getCoverLetter } from "@/actions/coverLetter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import CoverLetterPreview from "../_components/CoverLetterPreview";

const AiCoverLetter = async () => {
  const coverLetter = await getCoverLetter(id);
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <Link href="/ai-cover-letter">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>
        <h1 className="text-6xl font-bold gradient-title mb-6">
          {coverLetter?.jobTitle} at {coverLetter?.companyName}
        </h1>
      </div>
      <CoverLetterPreview content={coverLetter?.content} />
    </div>
  );
};

export default AiCoverLetter;
