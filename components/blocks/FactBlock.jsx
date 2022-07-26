export const FactBlock = ({ block, i }) => {
  return (
    <div key={block.id + i}>
      {block.fact?.map((item) => {
        return(
          <>
          {item && (
            <>
            <div>{item.headline}</div>
            <div>{item.subheadline}</div>
            </>
          )}
          </>
        )
      })}
    </div>
  );
};
