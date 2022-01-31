import Link from "next/link";
import { useAccountContext } from "../pages/_context";
import Button from "./button";

const Navbar = () => {
  const { account, isAuthenticated, login, chain, changeNetwork } =
    useAccountContext();

  return (
    <nav className="flex font-poppins justify-between w-full bg-brand-dark text-white px-16 py-6 items-center">
      <Link href="/">
        <a className="text-2xl font-bold">throwitin</a>
      </Link>
      <div className="">
        <ul className="flex space-x-5 ml-48">
          {[
            {
              name: "Start Project",
              link: "/startProject",
            },
            {
              name: "Fund Project",
              link: "/startProject",
            },
            {
              name: "Leaderboard",
              link: "/startProject",
            },
            {
              name: "About us",
              link: "/startProject",
            },
            {
              name: "Contact us",
              link: "/startProject",
            },
          ].map((item) => (
            <Link href={item.link}>
              <a className="text-sm px-2 py-1 cursor-pointer">{item.name}</a>
            </Link>
            // <li className="text-sm px-2 py-1 cursor-pointer">{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        {chain != 80001 && (
          <button className="bg-gray-100 py-2 px-4 rounded text-black flex text-sm items-center">
            <span className="mr-2">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.5 10H7.5C7.76522 10 8.01957 9.89464 8.20711 9.70711C8.39464 9.51957 8.5 9.26522 8.5 9V1C8.5 0.734784 8.39464 0.48043 8.20711 0.292893C8.01957 0.105357 7.76522 0 7.5 0H1.5C1.23478 0 0.98043 0.105357 0.792893 0.292893C0.605357 0.48043 0.5 0.734784 0.5 1V9C0.5 9.26522 0.605357 9.51957 0.792893 9.70711C0.98043 9.89464 1.23478 10 1.5 10ZM0.5 17C0.5 17.2652 0.605357 17.5196 0.792893 17.7071C0.98043 17.8946 1.23478 18 1.5 18H7.5C7.76522 18 8.01957 17.8946 8.20711 17.7071C8.39464 17.5196 8.5 17.2652 8.5 17V13C8.5 12.7348 8.39464 12.4804 8.20711 12.2929C8.01957 12.1054 7.76522 12 7.5 12H1.5C1.23478 12 0.98043 12.1054 0.792893 12.2929C0.605357 12.4804 0.5 12.7348 0.5 13V17ZM10.5 17C10.5 17.2652 10.6054 17.5196 10.7929 17.7071C10.9804 17.8946 11.2348 18 11.5 18H17.5C17.7652 18 18.0196 17.8946 18.2071 17.7071C18.3946 17.5196 18.5 17.2652 18.5 17V10C18.5 9.73478 18.3946 9.48043 18.2071 9.29289C18.0196 9.10536 17.7652 9 17.5 9H11.5C11.2348 9 10.9804 9.10536 10.7929 9.29289C10.6054 9.48043 10.5 9.73478 10.5 10V17ZM11.5 7H17.5C17.7652 7 18.0196 6.89464 18.2071 6.70711C18.3946 6.51957 18.5 6.26522 18.5 6V1C18.5 0.734784 18.3946 0.48043 18.2071 0.292893C18.0196 0.105357 17.7652 0 17.5 0H11.5C11.2348 0 10.9804 0.105357 10.7929 0.292893C10.6054 0.48043 10.5 0.734784 10.5 1V6C10.5 6.26522 10.6054 6.51957 10.7929 6.70711C10.9804 6.89464 11.2348 7 11.5 7Z"
                  fill="#000814"
                />
              </svg>
            </span>
            Dashboard
          </button>
        )}
        {chain == 80001 && (
          <button
            onClick={() => changeNetwork()}
            className="bg-gray-100 py-2 px-4 rounded text-black flex text-sm items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              viewBox="0 0 1024 1024"
              fill="none">
              <circle cx="512" cy="512" r="512" fill="#8247E5" />
              <path
                d="M681.469 402.456C669.189 395.312 653.224 395.312 639.716 402.456L543.928 457.228L478.842 492.949L383.055 547.721C370.774 554.865 354.81 554.865 341.301 547.721L265.162 504.856C252.882 497.712 244.286 484.614 244.286 470.325V385.786C244.286 371.498 251.654 358.4 265.162 351.256L340.073 309.581C352.353 302.437 368.318 302.437 381.827 309.581L456.737 351.256C469.018 358.4 477.614 371.498 477.614 385.786V440.558L542.7 403.646V348.874C542.7 334.586 535.332 321.488 521.824 314.344L383.055 235.758C370.774 228.614 354.81 228.614 341.301 235.758L200.076 314.344C186.567 321.488 179.199 334.586 179.199 348.874V507.237C179.199 521.525 186.567 534.623 200.076 541.767L341.301 620.353C353.582 627.498 369.546 627.498 383.055 620.353L478.842 566.772L543.928 529.86L639.716 476.279C651.996 469.135 667.961 469.135 681.469 476.279L756.38 517.953C768.66 525.098 777.257 538.195 777.257 552.484V637.023C777.257 651.312 769.888 664.409 756.38 671.553L681.469 714.419C669.189 721.563 653.224 721.563 639.716 714.419L564.805 672.744C552.525 665.6 543.928 652.502 543.928 638.214V583.442L478.842 620.353V675.125C478.842 689.414 486.21 702.512 499.719 709.656L640.944 788.242C653.224 795.386 669.189 795.386 682.697 788.242L823.922 709.656C836.203 702.512 844.799 689.414 844.799 675.125V516.763C844.799 502.474 837.431 489.377 823.922 482.232L681.469 402.456Z"
                fill="white"
              />
            </svg>
            Switch to Polygon
          </button>
        )}
        {!isAuthenticated && (
          <div onClick={() => login()}>
            <Button gradient={true}>Connect Wallet</Button>
          </div>
        )}
        {isAuthenticated && (
          <div>
            <Button gradient={true}>
              <span className="pr-1">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"></path>
                </svg>
              </span>
              Connected
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
