interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="font-poppins w-full h-fit bg-brand-dark text-white px-16 py-20 pb-36">
      <div className="flex justify-around border-t-2 border-gray-700 pt-20">
        {/* left side */}
        <div className="flex flex-col w-full">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-lightblue via-brand-purple to-brand-semipink font-clash mb-3">
            THROWITIN
          </h1>
          <p className="w-7/12 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam
            ipsum vitae culpa exercitationem, facilis perspiciatis dolor ratione
            optio neque blanditiis corrupti iste necessitatibus placeat.
          </p>
        </div>
        {/* right side  */}
        <div className="w-full flex justify-center text-gray-300">
          <ul className="space-y-3 mr-28">
            {["Start Project", "Fund Project", "About us", "Contact us"].map(
              (item) => (
                <li className="cursor-pointer">{item}</li>
              )
            )}
          </ul>
          <ul className="space-y-3">
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
