import Link from "next/link";

import Image from "next/image";
import React from "react";
import RenderTag from "./RenderTag";

const hotQuestions = [
  {
    _id: "1",
    title: "How to use React Query?",
  },
  {
    _id: "2",
    title: "How to use React Query?",
  },
  {
    _id: "3",
    title: "How to use React Query?",
  },
];
const popularTags = [
  {
    _id: "1",
    name: "React",
    numberOfQuestions: 10,
  },
  {
    _id: "2",
    name: "React",
    numberOfQuestions: 10,
  },
  {
    _id: "3",
    name: "React",
    numberOfQuestions: 10,
  },
  {
    _id: "4",
    name: "React",
    numberOfQuestions: 10,
  },
];

const RightSidebar = async () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question: any) => (
            <Link
              key={question._id}
              href={`/question/${question._id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.numberOfQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
