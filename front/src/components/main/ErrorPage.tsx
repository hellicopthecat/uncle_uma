import {useNavigate} from "react-router-dom";
import SharedSection from "../shared/sharedSection";
import SharedTxt from "../shared/sharedTxt";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <SharedSection className="py-32 h-dvh">
      <div className="flex flex-col items-center justify-center gap-10 h-full bg-white">
        <SharedTxt txtType="h2" txt="잘못된 페이지로 오셨어요." />
        <button
          onClick={() => navigate("/")}
          className="bg-orange-400 h-20 w-40 font-semibold text-2xl rounded-full text-white transition duration-300 ease-in-out hover:ring-4 hover:ring-red-500"
        >
          홈으로
        </button>
      </div>
    </SharedSection>
  );
}
