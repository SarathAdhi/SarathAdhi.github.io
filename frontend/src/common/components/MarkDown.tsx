import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXRemoteProps } from "next-mdx-remote/dist/rsc";

interface Props extends MDXRemoteProps {}

const MarkDown: React.FC<Props> = ({ ...props }) => {
  return (
    <MDXRemote
      {...props}
      components={{
        p: (props) => <p {...props} className="inline text-justify" />,
        li: (props) => (
          <li {...props} className="mt-2 !list-inside !list-decimal" />
        ),
        a: (props) => (
          <a
            target="_blank"
            {...props}
            className="hover:underline text-blue-600"
          />
        ),
      }}
    />
  );
};

export default MarkDown;
