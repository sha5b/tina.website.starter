import Image from "next/image";

export const LogoBlock = ({ block, i }) => {
  return (
    <div key={block.id + i}>
      <div>{block.headline}</div>
    </div>
  );
};
