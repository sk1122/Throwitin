import Button from "../button";

export default function First() {
  return (
    <div className="relative w-full h-screen grid grid-cols-2">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg width="389" height="389" viewBox="0 0 389 389" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M389 194.5C389 301.919 301.919 389 194.5 389C87.0806 389 0 301.919 0 194.5C0 87.0806 87.0806 0 194.5 0C301.919 0 389 87.0806 389 194.5Z" fill="black"/>
          <path d="M194.5 194.5C194.5 301.919 194.5 194.5 194.5 389C87.0806 389 0 301.919 0 194.5C0 87.0806 87.0806 0 194.5 0C194.5 194.5 194.5 87.0806 194.5 194.5Z" fill="url(#paint0_linear_232_28)"/>
          <defs>
            <linearGradient id="paint0_linear_232_28" x1="224" y1="441" x2="-44.9634" y2="404.076" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF8CC1" />
              <stop offset="0.552282" stop-color="#9D4EDD" />
              <stop offset="1" stop-color="#59AFFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="h-screen bg-gradient flex justify-center items-start text-left flex-col text-white">
        <div className="mx-16 space-y-8">
          <h1 className="font-poppins text-5xl font-bold w-11/12">
            Creative work shows <br />
            us what’s possible. <br />
            Help fund it here.
          </h1>
          <p className="font-poppins text-sm font-light w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <Button gradient={true}>Start Project</Button>
        </div>
      </div>
      <div className="h-screen bg-gradient-to-br from-brand-heropink via-brand-lightpurple to-brand-lightblue flex justify-center items-end text-left flex-col text-white">
        <div className="ml-56 space-y-8">
          <h1 className="font-poppins text-5xl font-bold w-11/12">
            Creative work shows <br />
            us what’s possible. <br />
            Help fund it here.
          </h1>
          <p className="font-poppins text-sm font-light w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <Button gradient={false}>Create Project</Button>
        </div>
      </div>
    </div>
  );
}
