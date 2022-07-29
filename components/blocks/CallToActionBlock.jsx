import Link from "next/link";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

export const CallToActionBlock = ({ block, id, i }) => {
  return (
    <div key={id + i}>
      <div>{block.title}</div>
      <div>{block.subtitle}</div>
      {block.button && (
        <>
          <Link href={block.button.href ?? '/'}>
            <Button fontSize={'lg'} p={'2rem'}>{block.button.label}</Button>
          </Link>
        </>
      )}
    </div>
  );
};
