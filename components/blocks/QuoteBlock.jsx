export const QuoteBlock = ({ block, i }) => {
  return (
    <div key={block.id + i}>
        <div>
            {block.quote}
        </div>
        <div>
            {block.author}
        </div>
    </div>
  );
};
