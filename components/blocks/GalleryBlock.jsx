import Image from "next/image";

export const GalleryBlock = ({ block, i }) => {
  return (
    <div key={block.id + i}>
      {block.gallery?.map((item) => {
        return (
          <>
            {item.image && (
              <Image
                width="500"
                height="100%"
                quality="100"
                pos="relative"
                objectFit="cover"
                src={item.image}
                alt={item.alt}
              />
            )}
          </>
        );
      })}
    </div>
  );
};