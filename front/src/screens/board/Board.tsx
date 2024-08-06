import {Link} from "react-router-dom";
import SharedTxt from "../../components/shared/sharedTxt";
import SharedSection from "../../components/shared/sharedSection";
import AllContents from "../../components/board/AllContents";
import useUser from "../../hooks/useUser";

export default function Board() {
  const {user} = useUser();
  return (
    <SharedSection className="flex flex-col py-32 px-20 h-dvh">
      <div className="relative flex flex-col gap-10 bg-white p-10 h-full">
        <div className="flex items-center gap-3">
          <SharedTxt txtType="span" txt="" className="w-2 h-5 bg-blue-400" />
          <SharedTxt txtType="h3" txt="자유 게시판" />
        </div>
        <AllContents />
        {user && (
          <div className="flex absolute bottom-0 right-10 my-5">
            <Link
              className="border border-blue-200 px-2 py-1 rounded-md"
              to="/board/write"
            >
              글쓰기
            </Link>
          </div>
        )}
      </div>
    </SharedSection>
  );
}
