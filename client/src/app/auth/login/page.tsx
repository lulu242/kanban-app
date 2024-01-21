'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from 'next/link';
import React, { useState } from 'react';

const LoginPage = () => {
  const [isLoginError, setIsLoginError] = useState<boolean>(false);

  const login = () => {
    // 로그인 성공 main 페이지로 이동
    // 실패 setIsLoginError(false)
  };

  return (
    <main className="bg-sky-900 h-screen text-white flex flex-col justify-center gap-7">
      <h1 className=" font-extrabold text-3xl text-center">Kanban Board</h1>
      <form className="flex flex-col gap-7 w-72 mx-auto">
        <Input
          id="loginIdInput"
          type="text"
          label="아이디"
          placeholder="아이디를 입력해주세요"
        />
        <Input
          id="loginPwInput"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
        />
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
