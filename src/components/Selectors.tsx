interface SelectorsProps {
  text: string;
  options: string[];
}

const Selectors = ({ text, options }: SelectorsProps) => {
  return (
    <div >
      <p>{text}</p>
      {/* <div>
        {options.map((option) => (
          <p key={option}>{option}</p>
        ))}
      </div> */}
    </div>
  );
};

export default Selectors;