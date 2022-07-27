export const QuoteBlock = ({ block, id , i }) => {
  return (
    <div key={id + i}>
        <div>
            {block.quote}
        </div>
        <div>
            {block.author}
        </div>
    </div>
  );
};
