import Image from "next/image";

export const LogoBlock = ({ block, i }) => {
  return (
    <div key={block.id + i}>
      <div>{block.headline}</div>
      {block.logos.map((item) => {
        return (
          <>
            {item.logo && (
              <>
                <Image
                  width="250"
                  height="100%"
                  quality="100"
                  pos="relative"
                  objectFit="cover"
                  src={item.logo}
                  alt={'Logo'}
                />
              </>
            )}
          </>
        );
      })}
    </div>
  );
};
