import "boxicons/css/boxicons.min.css";

function Header() {

  const toggleMobileMenu = () =>{
    const mobileMenu = document.getElementById("mobileMenu");

    if(mobileMenu.classList.contains('hidden')){
      mobileMenu.classList.remove('hidden');
    }else{
      mobileMenu.classList.add('hidden');
    }
  }

  return (
    <header className="py-1 px-7  sticky bg-black flex justify-between items-center  top-0 w-full border-b-[0.3px] border-[#babff]">
      {/* left section  */}
      <div className="flex lg:gap-14 gap-4">
        <img
          className="w-12 md:w-16 m-3"
          src="/images/logo.png"
          alt=""
          srcset=""
        />
        <div className=" hidden md:flex gap-5 items-center ">
          <button className="h-8 px-6  text-nowrap bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium hover:opacity-80 ">
            PLAY NOW
          </button>
          <button className="h-8 px-6  text-nowrap bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium hover:opacity-80 ">
            PLAY NOW
          </button>
        </div>
      </div>

      {/* Right section */}
      <nav className=" hidden md:flex gap-5 lg:gap-9">
        <a
          href="#"
          className="relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i class="bx bx-user-circle"></i> User
        </a>
        <a
          href="#"
          className="relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i class="bx bx-diamond"></i> Diomond
        </a>
        <a
          href="#"
          className="relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i class="bx bx-chevrons-up"></i> Level Up
        </a>
        <a
          href="#"
          className="relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i class="bx bx-store"></i> Shop
        </a>
      </nav>



    
      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2">
        <i class="bx bx-menu"></i>
      </button>

        {/* Mobile menu button - visible only on mobile  */}
      <div id="mobileMenu" className="hidden  md:hidden fixed top-20 left-0 right-0 p-5 bg-black">
         <nav className="flex flex-col gap-5 items-center p-5">
        <a
          href="#"
          className="relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i class="bx bx-user-circle"></i>User
        </a>
        <a
          href="#"
          className="relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i class="bx bx-diamond"></i> Dimonad
        </a>
        <a
          href="#"
          className="relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i class="bx bx-chevrons-up"></i> Level Up
        </a>
        <a
          href="#"
          className="relative text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap"
        >
          <i class="bx bx-store"></i> Shop
        </a>
      </nav>
      <div className="flex flex-col gap-5 w-[100%] px-20">
        <button className="bg-purple-700 py-2 rounded">Play Now</button>
        <button className="bg-gray-700 py-2 rounded">NFT Store</button>
      </div>
        
      </div>
    </header>
  );
}

export default Header;
