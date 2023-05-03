"use client";
import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoIosGitCompare } from "react-icons/io";
import { FaStarOfLife } from "react-icons/fa";
import FeedbackRating from "@/components/FeedbackRating";

type Props = {
  status: any;
};

function Complaint_stages({ status }: Props) {
  const [feedback, setfeedback] = useState(false);

  const date = "Mar 08 2023";
  return (
    <>
      <VerticalTimeline layout="1-column-left" lineColor="#aaa">
        {status.map((stage: any, index: number) => (
          <div key={index}>
            <VerticalTimelineElement
              className="relative mb-6"
              contentStyle={{
                background: "#fff",
                color: "black",
                height: "8rem",
                border: "1px solid #eee",
                borderRadius: "8px",
              }}
              iconStyle={{
                background: "white",
                color: "black",
                fontSize: "9px",
                padding: "9px 0px 0px 6px",
                fontWeight: "bold",
              }}
              contentArrowStyle={{ borderRight: "10px solid #FBB64F" }}
              // icon={<IoIosGitCompare />}
              icon={stage.updatedAt}
            >
              <div className="flex flex-col">
                <div className="parent flex justify-between text-lg font-bold">
                  <h3
                    className={`${
                      stage.state === "Initiated" ? "text-initiatedColor" : ""
                    }  ${
                      stage.state === "InProgress" ? "text-inprogessColor" : ""
                    } ${
                      stage.state === "Completed" ? "text-completedColor" : ""
                    } ${stage.state === "Closed" ? "text-closedColor" : ""}`}
                  >
                    {stage.state}
                  </h3>
                  <h3 className="text-sm text-gray-400">
                    {stage.updatedAt.split("T")[1].split(".")[0]}
                  </h3>
                </div>
                <div className="flex flex-col mt-6">
                  <span className="text-gray-500">Comments:</span>
                  <span>Your complaint is {stage.state}</span>
                </div>
              </div>

              <div
                className={`h-[103%] w-1 top-0 right-0 rounded-tr-md rounded-br-md absolute  ${
                  stage.state === "Initiated" ? "bg-initiatedColor" : ""
                }  ${stage.state === "InProgress" ? "bg-inprogessColor" : ""} ${
                  stage.state === "Completed" ? "bg-completedColor" : ""
                } ${stage.state === "Closed" ? "bg-closedColor" : ""}`}
              ></div>
            </VerticalTimelineElement>
            {stage.state == "Completed" ? (
              <VerticalTimelineElement
                className="relative "
                contentStyle={{
                  background: "#fff",
                  color: "black",
                  height: "8rem",
                  border: "1px solid #eee",
                  borderRadius: "8px",
                }}
                iconStyle={{
                  background: "white",
                  color: "black",
                  fontSize: "9px",
                  padding: "9px 0px 0px 6px",
                  fontWeight: "bold",
                }}
                contentArrowStyle={{ borderRight: "10px solid #1A5980" }}
                // icon={<IoIosGitCompare />}
                icon={date}
              >
                <div className="flex flex-col">
                  <div className="parent flex justify-between text-lg font-bold">
                    <h3 className="text-[#1A5980]">Feedback</h3>
                    <h3 className="text-sm text-gray-400">04:00 pm</h3>
                  </div>
                  <div className="flex flex-col mt-4">
                    <span className="text-gray-500 mb-1">
                      Are you satisfied with our service:
                    </span>
                    <button
                      onClick={() => setfeedback(!feedback)}
                      className="w-1/2 py-1 px-2 bg-[#1A5980] text-white text-sm rounded-lg shadow-md"
                    >
                      Feedback
                    </button>
                  </div>
                </div>

                <div className="h-[103%] w-1 bg-[#1A5980] top-0 right-0 rounded-tr-md rounded-br-md absolute"></div>
              </VerticalTimelineElement>
            ) : (
              ""
            )}
          </div>
        ))}
      </VerticalTimeline>
      {/* To open feedback window popup*/}
      {feedback ? (
        <FeedbackRating feedback={feedback} setfeedback={setfeedback} />
      ) : (
        ""
      )}
    </>
  );
}

export default Complaint_stages;