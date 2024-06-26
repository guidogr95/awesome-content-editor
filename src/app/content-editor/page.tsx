import PageWrapper from "@/components/page-wrapper/page-wrapper";
import TextEditorPanel from "@/components/text-editor-panel/text-editor-panel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MonkeyTools - YT Video Analyser",
};

const ContentEditorPage = () => {

	return (
		<PageWrapper>
			<TextEditorPanel/>
		</PageWrapper>
	);
};

export default ContentEditorPage;