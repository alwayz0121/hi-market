import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">👸🏻</span>
        <h1 className="text-4xl">Princess Diary</h1>
        <h2 className="text-2xl">전 세계 공주들을 응원해요</h2>
      </div>

      {/* 로그인 */}
      <div className="flex flex-col items-center gap-3 w-full">
        <Link
          href={"/create-account"}
          className="w-full text-white bg-yellow-500 text-lg font-medium py-2.5 rounded-md text-center hover:bg-pink-400 transition-colors"
        >
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href={"/login"} className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
