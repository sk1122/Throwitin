interface Props {
  title: string;
}

const SmallCard = (props: Props) => {
  return (
    <div className="bg-transparent rounded-2xl relative">
      <img
        src="https://uploads-ssl.webflow.com/61b7b245b5c320797216ea74/61b8ff681298d7fc8cc69d4a_Card1-1.png"
        className="w-[255px] h-[255px]"
        alt=""
      />
      <div className="absolute left-8 top-8 font-semibold">{props.title}</div>
    </div>
  );
};

export default SmallCard;
