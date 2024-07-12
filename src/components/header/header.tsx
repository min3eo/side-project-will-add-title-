import Link from 'next/link';
import Logo from '@/components/logo/logo'

const Header = () => {
  return (
    <header className="">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center text-black">
          <Logo className="text-3xl hover:text-gray-300"/>
        <nav className="flex space-x-12">
          <Link href="/about" className="text-xl hover:text-gray-300">
            로그인
          </Link>
          <Link href="/popular" className="text-xl hover:text-gray-300">
            회원가입
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
