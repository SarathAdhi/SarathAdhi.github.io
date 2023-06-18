import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXRemoteProps } from "next-mdx-remote/dist/rsc";

interface Props extends MDXRemoteProps {}

const MarkDown: React.FC<Props> = ({ ...props }) => {
  return (
    <MDXRemote
      {...props}
      components={{
        p: (props) => <p {...props} className="text-justify sm:text-center" />,
        li: (props) => <li {...props} className="mt-2" />,
      }}
    />
  );
};

export default MarkDown;
