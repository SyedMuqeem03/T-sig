/* eslint-disable react/prop-types */
function Item({
  name = "Name",
  price = "Price",
  quantity = 0,
  className = "",
}) {
  return (
    <div className={`grid grid-cols-3 grid-flow-col text-xl gap-1 ${className} hover:bg-blue-500`}>
      <div className=" rounded-sm bg-white/20 px-4 p-2 col-span-2">{name}</div>
      <div className=" rounded-sm bg-white/20 text-center p-2 ">{price}</div>
      <div className=" rounded-sm bg-white/20 text-center p-2 px-4 font-medium ">{quantity}</div>
    </div>
  );
}

export default Item;
