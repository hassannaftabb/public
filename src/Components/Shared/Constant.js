export const ButtonMd = ({ text, navigate, onClick, type }) => {
  return (
    <button
      className=' py-3 px-16 font-medium tracking-wide bg-[#314668] text-white rounded-[5px]'
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
export const ButtonSm = ({ text, navigate, onClick, type }) => {
  return (
    <button
      className='py-3 px-14 font-medium tracking-wide bg-[#314668] text-white rounded-[5px]'
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
export const ButtonLg = ({ text, navigate, onClick, type }) => {
  return (
    <button
      className=' py-3 px-24 font-medium tracking-wide bg-[#314668] text-white rounded-[5px]'
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
