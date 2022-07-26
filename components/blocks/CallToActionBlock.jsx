import Link from "next/link";

export const CallToActionBlock = ({ block, i }) => {
  return (
    <div key={block.id + i}>
      <div>{block.title}</div>
      <div>{block.subtitle}</div>
      <Link href={block.button.href}>
        <button>{block.button.label}</button>
      </Link>
    </div>
  );
};
