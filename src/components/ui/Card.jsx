const Card = (props) => {
  return (
    <div className="col-span-2 md:col-span-3 lg:col-span-4 card">
      <div className=" flex flex-col">{props.children}</div>
    </div>
  );
};
export default Card;
