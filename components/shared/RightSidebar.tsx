import Image from "next/image";
import Link from "next/link";
import RenderTags from "./RenderTags";

const RightSidebar = () => {
  const hotQuestions = [
    { _id: 1, title: "How do i use express as a custom server in NextJs" },
    { _id: 2, title: "How do i use express as a custom server in NextJs" },
    { _id: 3, title: "How do i use express as a custom server in NextJs" },
    { _id: 4, title: "How do i use express as a custom server in NextJs" },
  ];

  const popularTags = [
    { _id: "1", name: "javascript", totalQuestions: 15 },
    { _id: "2", name: "react", totalQuestions: 50 },
    { _id: "3", name: "next", totalQuestions: 45 },
    { _id: "4", name: "vue", totalQuestions: 25 },
    { _id: "5", name: "redux", totalQuestions: 5 },
  ];
  return (
    <div
      className="background-light900_dark200 light-border
    custom-scrollbar sticky top-0 ml-auto flex h-screen w-[350px] flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top - Questions </h3>
        <div className="mt-7 flex w-full flex-col gap-8">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
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
        <h3 className="h3-bold text-dark200_light900">Popular Tags </h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTags
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
