import Image from "next/image";

export const HeroBlock = ({ block, i }) => {
  return (
    <div key={block.id + i}>
      <div>{block.title}</div>
      <div>{block.subtitle}</div>
      {block.image && (
        <Image
          width="500"
          height="100%"
          quality="100"
          pos="relative"
          objectFit="cover"
          src={block.image}
          alt={block.title}
        />
      )}
    </div>
  );
};
