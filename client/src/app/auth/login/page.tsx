'use client';
import Button from '@/components/Button';
import Link from 'next/link';
import React, { useState } from 'react';

const LoginPage = () => {
  const [isLoginError, setIsLoginError] = useState<boolean>(false);

  const login = () => {
    // 로그인 성공 main 페이지로 이동
    // 실패 setIsLoginError(false)
  }

  return (
    <main className="bg-sky-900 h-screen text-white flex flex-col justify-center gap-7">
      <h1 className=" font-extrabold text-3xl text-center">Kanban Board</h1>
      <form className="flex flex-col gap-7 w-72 mx-auto">
        <div>
          <label htmlFor="idInput" className="text-sm">
            아이디
          </label>
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            id="idInput"
            className="w-full text-black p-1 rounded-sm my-2"
          ></input>
        </div>
        <div>
          <label htmlFor="passwordInput" className="text-sm">
            비밀번호
          </label>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            id="passwordInput"
            className="w-full text-black p-1 rounded-sm my-2"
          ></input>
        </div>
        {isLoginError && (
          <div className="text-sm">
            아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시
            확인해주세요
          </div>
        )}
        <Button
          label="로그인 하기"
          type="submit"
          css="bg-white text-sky-900 font-semibold rounded-3xl py-1 hover:opacity-80"
        />
        <div className=" text-right hover:underline">
          <Link href="/auth/signup">아직 회원이 아니신가요? 회원가입 하기</Link>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
