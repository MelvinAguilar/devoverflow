"use client";

import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { deleteQuestion } from "@/lib/actions/question.action";
import { deleteAnswer } from "@/lib/actions/answer.action";

interface Props {
  type: string;
  itemId: string;
}

const EditDeleteAction = ({ type, itemId }: Props) => {
  // eslint-disable-next-line no-unused-vars
  const router = useRouter();
  const pathname = usePathname();

  const handleEdit = () => {
    router.push(`/question/edit/${JSON.parse(itemId)}`);
  };

  const handleDelete = async () => {
    if (type === "Question") {
      await deleteQuestion({
        questionId: JSON.parse(itemId),
        path: pathname,
      });
    } else if (type === "Answer") {
      await deleteAnswer({
        answerId: JSON.parse(itemId),
        path: pathname,
      });
    } else {
      console.log("Error: EditDeleteAction.tsx");
    }
  };

  return (
    <div className="flex items-center justify-end gap-3 max-sm:w-full">
      {type === "Question" && (
        <Image
          src="/assets/icons/edit.svg"
          alt="edit"
          width={20}
          height={20}
          onClick={handleEdit}
          className="cursor-pointer object-contain"
        />
      )}
      <Image
        src="/assets/icons/trash.svg"
        alt="Delete"
        width={20}
        height={20}
        onClick={handleDelete}
        className="cursor-pointer object-contain"
      />
    </div>
  );
};

export default EditDeleteAction;
