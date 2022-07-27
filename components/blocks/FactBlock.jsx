export const FactBlock = ({ block, id , i }) => {
  return (
    <div key={id + i}>
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
