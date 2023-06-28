import WavyText from "@components/WavyText";
import { client } from "@lib/client";
import Image from "next/image";
import React from "react";

export const revalidate = 60; // revalidate this page every 60 seconds

const CertificatePage = async () => {
  const certificatesQuery = `*[_type == "certificates"][]{
    ...,
    "image": images.asset->url
  } | order(no asc)`;
  const certificates = (await client.fetch(certificatesQuery)) as Certificate[];

  return (
    <div className="md:pb-20">
      <div className="parallax-text">
        <h1 className="!text-[30px] sm:!text-6xl">Certificates</h1>

        <WavyText as="h3" text="Certificates" />
      </div>

      <div className="container grid gap-2">
        <div className="sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mx-auto">
          {certificates.map(({ no, title, image }) => (
            <div
              key={title}
              className="group relative rounded-lg overflow-hidden"
            >
              <Image
                className=""
                width={1000}
                height={1000}
                src={image}
                loading="lazy"
                alt={title}
                draggable={false}
              />

              <div className="pd absolute top-0 left-0 w-full h-full grid place-content-center text-center bg-foreground/80 text-background scale-0 group-hover:scale-100 duration-200">
                <h6>{title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
