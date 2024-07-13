import {ISharedTxt} from "../../type/componentsTypes";

export default function SharedTxt({txtType, txt, className}: ISharedTxt) {
  switch (txtType) {
    case "h1":
      return (
        <h1
          className={`${className} text-2xl md:text-5xl font-extrabold transition-all ease-in-out duration-200`}
        >
          {txt}
        </h1>
      );
    case "h2":
      return <h2 className={className}>{txt}</h2>;
    case "h3":
      return <h3 className={className}>{txt}</h3>;
    case "h4":
      return <h4 className={className}>{txt}</h4>;
    case "h5":
      return <h5 className={className}>{txt}</h5>;
    case "h6":
      return <h6 className={className}>{txt}</h6>;
    case "p":
      return <p className={className}>{txt}</p>;
    case "span":
      return <span className={className}>{txt}</span>;
  }
}
