import Image from "next/image";

export const LogoBlock = ({ block, i }) => {
  return (
    <div key={block.id + i}>
      <div>{block.headline}</div>
      {block
        ? block.logos?.map((item, i) => {
            return (
              <div>
                <Image
                  width="125"
                  height="100%"
                  quality="100"
                  pos="relative"
                  objectFit="fill"
                  src={item.logo}
                  alt={item.logo}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};
