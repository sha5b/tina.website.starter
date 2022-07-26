import Image from "next/image";

export const GalleryBlock = ({ block, i }) => {
  return (
    <div key={block.id + i}>
      {block.gallery
        ? block.gallery?.map((item, i) => {
            return (
              <div>
                <Image
                  width="500"
                  height="100%"
                  quality="100"
                  pos="relative"
                  src={item.image}
                  alt={item.alt}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};
