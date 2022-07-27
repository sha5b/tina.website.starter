import Image from "next/image";

export const FeaturedPostBlock = ({ block, posts , id, i }) => {
  return (
    <div key={id + i}>
      {posts?.map((post)=>{
        return(
          <>
          {post.node.category == `${block.category}` && (
            <>
            <div>{post.node.title}</div>
            <div>{post.node.category}</div>
            <div>{post.node.date}</div>
            <div>{post.node.description}</div>
            {post.node.image && (
              <Image
                width="500"
                height="100%"
                quality="100"
                pos="relative"
                objectFit="cover"
                src={post.node.image}
                alt={post.node.title}
              />
            )}
            </>
          )}
          </>
        )
      })}
    </div>
  );
};
