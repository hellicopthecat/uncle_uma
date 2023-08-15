import {NavLink} from "react-router-dom";
export default function ContenstsNav({props}) {
  return (
    <nav className="flex justify-around items-center text-white h-20">
      <NavLink
        className={({isActive, isPending}) =>
          isPending
            ? `w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-white`
            : isActive
            ? `w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-red-400`
            : "w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-white"
        }
        to="/"
      >
        HOME
      </NavLink>
      <NavLink
        className={({isActive, isPending}) =>
          isPending
            ? `w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-white`
            : isActive
            ? `w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-red-400`
            : "w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-white"
        }
        to="/horseDetail"
      >
        경주마 정보
      </NavLink>
      <NavLink
        className={({isActive, isPending}) =>
          isPending
            ? `w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-white`
            : isActive
            ? `w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-red-400`
            : "w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-white"
        }
        to="/racingPlan"
      >
        전국 경마경주 계획표
      </NavLink>
      <NavLink
        className={({isActive, isPending}) =>
          isPending
            ? `w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-white`
            : isActive
            ? `w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-red-400`
            : "w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-white"
        }
        to="/dividendRate"
      >
        배당률 검색
      </NavLink>
      <NavLink
        className={({isActive, isPending}) =>
          isPending
            ? `w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-white`
            : isActive
            ? `w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-red-400`
            : "w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-white"
        }
        to="/board"
      >
        게시판
      </NavLink>
      {props === null ? null : (
        <NavLink
          className={({isActive, isPending}) =>
            isPending
              ? `w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-white`
              : isActive
              ? `w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-red-400`
              : "w-1/6 text-center lg:text-xl md:text-sm sm:text-xs text-white"
          }
          to="/chat"
        >
          채팅(구현중)
        </NavLink>
      )}
    </nav>
  );
}
