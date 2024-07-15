import {ISharedTxt} from "../../type/componentsTypes";

export default function SharedTxt({txtType, txt, className}: ISharedTxt) {
  switch (txtType) {
    case "h1":
      return (
        <h1
          className={`${className} text-6xl  font-extrabold transition-all ease-in-out duration-200`}
        >
          {txt}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${className} text-4xl font-bold transition-all ease-in-out duration-200`}
        >
          {txt}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${className} text-3xl font-bold transition-all ease-in-out duration-200`}
        >
          {txt}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`${className} text-2xl font-semibold transition-all ease-in-out duration-200`}
        >
          {txt}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`${className} text-xl font-semibold transition-all ease-in-out duration-200`}
        >
          {txt}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`${className} font-semibold transition-all ease-in-out duration-200`}
        >
          {txt}
        </h6>
      );
    case "p":
      return (
        <p className={`${className} transition-all ease-in-out duration-200`}>
          {txt}
        </p>
      );
    case "span":
      return <span className={`${className} text-sm`}>{txt}</span>;
  }
}
