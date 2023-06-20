"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@components/ui/sheet";
import { Button } from "@components/ui/button";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "@components/ui/scroll-area";

type Props = {
  workExp: WorkExperience[];
};

const WorkExperienceSheet: React.FC<Props> = ({ workExp = [] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-full" variant="outline">
          Work Experience
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col pd">
        <SheetHeader>
          <SheetTitle>Work Experience</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 pr-2">
          <VerticalTimeline>
            {workExp.map(
              ({ name, image, role, website, start, end, description }) => (
                <VerticalTimelineElement
                  key={name}
                  className="!text-foreground"
                  contentStyle={{
                    background: "hsl(var(--border))",
                    border: "1px solid",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid hsl(var(--foreground))",
                  }}
                  date={`${start} - ${end}`}
                  dateClassName="lg:mx-4 text-foreground"
                  icon={
                    <Link
                      target="_blank"
                      className="hover:underline"
                      href={website}
                    >
                      <Image
                        className="w-full h-full rounded-full"
                        width={100}
                        height={100}
                        src={image}
                        alt={name}
                      />
                    </Link>
                  }
                >
                  <Link
                    target="_blank"
                    className="hover:underline"
                    href={website}
                  >
                    <h4>{name}</h4>
                  </Link>

                  <h6>{role}</h6>

                  <p className="!text-sm whitespace-pre-wrap">{description}</p>
                </VerticalTimelineElement>
              )
            )}
          </VerticalTimeline>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default WorkExperienceSheet;
