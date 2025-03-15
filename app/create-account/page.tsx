import {
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/16/solid";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요 :)</h1>
        <h2 className="text-xl">공주 가입 신청서를 작성해요 :)</h2>
      </div>

      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <input
            className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-yellow-500 border-none placeholder:text-neutral-400"
            type="text"
            placeholder="이름"
            required
          />
          <span className="text-red-500 font-medium">
            이름을 잘못 작성했어요
          </span>
        </div>

        <button className="primary-btn h-10">공주 가입하기</button>
      </form>

      <div className="w-full h-px bg-neutral-500"></div>

      <Link
        href={"/sms"}
        className="primary-btn h-10 flex justify-center items-center gap-3"
      >
        <span>
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        </span>
        <span>SMS로 가입하기</span>
      </Link>
    </div>
  );
}
