"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
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

const WorkExperienceSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-full" variant="outline">
          Work Experience
        </Button>
      </SheetTrigger>

      <SheetContent className="overflow-auto pd">
        <SheetHeader>
          <SheetTitle>Work Experience</SheetTitle>

          {/* 
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>

        <div className="overflow-auto">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="!text-background"
              contentStyle={{
                background: "hsl(var(--foreground))",
              }}
              contentArrowStyle={{
                borderRight: "7px solid hsl(var(--foreground))",
              }}
              date="2011 - present"
              dateClassName="mx-4 text-foreground"
              // icon={<WorkIcon />}
            >
              <h4 className="">Creative Director</h4>
              <h6 className="">Miami, FL</h6>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="!text-background"
              contentStyle={{
                background: "hsl(var(--foreground))",
              }}
              contentArrowStyle={{
                borderRight: "7px solid hsl(var(--foreground))",
              }}
              date="2011 - present"
              dateClassName="mx-4 text-foreground"
              // icon={<WorkIcon />}
            >
              <h6 className="">Creative Director</h6>
              <h6 className="">Miami, FL</h6>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WorkExperienceSheet;
