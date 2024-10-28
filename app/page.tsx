import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-between min-h-screen'>
      <div className='*:text-carrot-white my-auto flex flex-col gap-2 items-center w-full'>
        <span className='text-9xl mb-10'>🥕</span>
        <span className='text-3xl font-semibold'>당신 근처의 당근</span>
        <div className='flex flex-col items-center'>
          <span>동네라서 가능한 모든 것</span>
          <span>지금 내 동네를 선택하고 시작해보세요!</span>
        </div>
      </div>

      <div className='flex flex-col w-full gap-4 p-6'>
        <button className='bg-carrot-orange text-carrot-white font-semibold p-4 rounded-md w-full hover:bg-carrot-lightOrange transition-colors'>
          시작하기
        </button>
        <div className='flex justify-center gap-2'>
          <span className='text-carrot-gray'>이미 계정이 있나요?</span>
          <Link href='/login' className='hover:underline'>
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
