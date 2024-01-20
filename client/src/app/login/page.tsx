import Button from '@/components/Button';
import React from 'react';

const LoginPage = () => {
  return (
    <main className="bg-sky-900 h-screen text-white flex flex-col justify-center gap-7">
      <h1 className=" font-extrabold text-3xl text-center">Kanban Board</h1>
      <form className='flex flex-col gap-7 mx-auto'>
        <div> 
          <label htmlFor="idInput" className='text-sm'>아이디</label>
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            id="idInput"
            className='w-full text-black p-1 rounded-sm my-2'
          ></input>
        </div>
        <div>
          <label htmlFor="passwordInput" className='text-sm'>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            id="passwordInput"
            className='w-full text-black p-1 rounded-sm my-2'
          ></input>
        </div>
        <Button label="로그인 하기" type="submit" css='bg-white text-sky-900 font-semibold rounded-3xl py-1 hover:opacity-80'/>
      </form>
    </main>
  );
};

export default LoginPage;
