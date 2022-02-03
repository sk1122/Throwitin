interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="font-poppins w-full h-fit bg-brand-dark text-white px-16 py-20 pb-36">
      <div className="flex justify-around border-t-2 border-gray-700 pt-20">
        {/* left side */}
        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-lightblue via-brand-purple to-brand-semipink">
            THROWITIN
          </h1>
          <p className="w-7/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam
            ipsum vitae culpa exercitationem, facilis perspiciatis dolor ratione
            optio neque blanditiis corrupti iste necessitatibus placeat.
          </p>
        </div>
        {/* right side  */}
        <div className="w-full flex justify-center">
          <ul className="space-y-2 mr-28">
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
