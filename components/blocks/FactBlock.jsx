export const FactBlock = ({ block, i }) => {
  return (
    <div key={block.id + i}>
      {block.fact
        ? block.fact?.map((item, i) => {
            return (
              <>
                <h1>{item.headline}</h1>
                <h2>{item.subheadline}</h2>
              </>
            );
          })
        : null}
    </div>
  );
};
