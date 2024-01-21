'use client';
import Button from '@/components/Button';
import Link from 'next/link';
import Input from '../../../components/Input';
import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

// TODO: 컴포넌트(input만할지, form을 할지, icon), 함수 분리해서 정리하기
const SignupPage = () => {
  const [passwordIsActive, setPasswordIsActive] = useState<boolean>(true);
  const [idMessage, setIdMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');

  const eyeIconHandler = () => {
    setPasswordIsActive(!passwordIsActive);
  };

  // TODO: 아이디, 비번 유효성 검사 후 결과 반환하는 함수 짜기
  const idValidate = (id: string) => {
    // 아이디는 5~20자의 영문 소문자, 숫자로만 사용 가능합니다. -> 먼저 검사(정규식)
    // 이미 존재하는 아이디입니다. -> fetch로 결과값으로 검사
    // 유효하면 ''
  };

  const passwordValidate = (password: string) => {
    // 비밀번호는 6~16자의 영문 대/소문자, 숫자, 특수문자를 사용해주세요. -> 정규식
    // 유효하면 ''
  };

  const singUp = () => {};

  return (
    <main className="bg-sky-900 h-screen text-white flex flex-col justify-center gap-7">
      <h1 className=" font-extrabold text-3xl text-center">Kanban Board</h1>
      <form className="flex flex-col gap-7 w-72 mx-auto">
        <div>
          <Input
            id="signupIdInput"
            type="text"
            placeholder="아이디를 입력해주세요"
            label="아이디"
            onBlur={idValidate}
          />
          <div className="text-xs">{idMessage}</div>
        </div>
        <div className="relative">
          <Input
            id="signupPwInput"
            label="비밀번호"
            type={passwordIsActive ? 'password' : 'text'}
            placeholder="비밀번호를 입력해주세요"
            onBlur={passwordValidate}
          />
          {passwordIsActive ? (
            <FaRegEyeSlash
              size="20"
              className="text-sky-900 absolute top-[38px] right-1"
              onClick={eyeIconHandler}
            />
          ) : (
            <FaRegEye
              size="20"
              className="text-sky-900 absolute top-[38px] right-1"
              onClick={eyeIconHandler}
            />
          )}
          <div className="text-xs">{passwordMessage} </div>
        </div>
        <Button
          label="회원가입 하기"
          type="submit"
          css="bg-white text-sky-900 font-semibold rounded-3xl py-1 hover:opacity-80"
          onClick={(e) => {}}
        />
        <div className=" text-right hover:underline">
          <Link href="/auth/login">이미 회원이신가요? 로그인 하기</Link>
        </div>
      </form>
    </main>
  );
};

export default SignupPage;
