import Image from 'next/image'

export default function Logo() {
  return (
    <div
      className={`font-lemonRegular flex flex-row items-center leading-none text-white`}
    >
      <Image src='/images/logo-dark.png' width={1296} height={788} alt='logo' className='w-72'/>
    </div>
  );
}
