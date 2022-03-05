interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="h-fit w-full bg-brand-dark px-16 py-20 pb-36 font-inter text-white">
      <div className="flex flex-col items-center justify-center space-y-10 border-t-2 border-gray-700 pt-20 md:flex-row md:justify-between md:space-y-0">
        {/* left side */}
        <div className="flex w-full flex-col md:items-start">
          <h1 className="text-2xl font-clash font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-lightblue via-brand-purple to-brand-semipink text-center md:text-left">
            Throwitin
          </h1>
          <p className="text-center sm:w-11/12 md:w-7/12 md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam
            ipsum vitae culpa exercitationem, facilis perspiciatis dolor ratione
            optio neque blanditiis corrupti iste necessitatibus placeat.
          </p>
        </div>
        {/* right side  */}
        <div className="flex w-full justify-center md:justify-end lg:flex-row">
          <ul className="mr-28 space-y-2">
            <li>Start Project</li>
            <li>Fund project</li>
            <li>About Us</li>
            <li>Contact us</li>
          </ul>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
