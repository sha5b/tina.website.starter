import Image from "next/image";

export const GalleryBlock = ({ block, i }) => {
  return (
    <div key={block.id + i}>
    </div>
  );
};
