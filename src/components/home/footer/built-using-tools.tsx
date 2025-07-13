import Image from 'next/image';

export function BuiltUsingTools() {
  return (
    <div className={'mx-auto max-w-7xl text-center px-8 mt-24 mb-24'}>
      <span className={'text-base'}>Built by engineers from</span>
      <div className={'flex flex-row flex-wrap gap-6 justify-center md:justify-between items-center mt-8 md:gap-1'}>
        <Image src={'/assets/icons/logo/stanford-logo.webp'} alt={'Stanford'} width={194} height={24} />
        <Image src={'/assets/icons/logo/cerebras-fello.svg'} alt={'Fellow logo'} width={150} height={32} />
        <Image src={'/assets/icons/logo/microsoft-logo.svg'} alt={'Microsoft logo'} width={120} height={24} />
      </div>
    </div>
  );
}
