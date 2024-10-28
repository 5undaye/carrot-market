import React from 'react';

export default function CreateAccountPage() {
  return (
    <div className='px-2 py-8'>
      <div className='*:text-carrot-white flex flex-col gap-1'>
        <span className='font-semibold text-2xl'>안녕하세요!</span>
        <span className='font-semibold text-2xl'>
          휴대폰 번호로 가입해주세요.
        </span>
        <span>
          당근은 휴대폰 번호로 가입해요. 번호는 안전하게 보관되며 어디에도
          공개되지 않아요.
        </span>
      </div>
      <form className='flex flex-col gap-4 py-4'>
        <input
          type='text'
          placeholder='휴대폰 번호(- 없이 숫자만 입력)'
          className='w-full p-2 px-4 rounded-md bg-transparent border-2 border-carrot-white focus:outline-none text-carrot-white'
        />
        <button className='w-full rounded-md p-2 border-2 border-carrot-gray text-carrot-gray'>
          인증문자 받기
        </button>
      </form>
      <div className='flex gap-2 justify-center *:text-carrot-white'>
        <span>휴대폰 번호가 변경되었나요?</span>
        <span className='underline'>이메일로 계정 찾기</span>
      </div>
    </div>
  );
}
