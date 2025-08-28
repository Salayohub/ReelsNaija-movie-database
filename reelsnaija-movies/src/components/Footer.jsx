// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-yellow-500  py-6 grid gap-26 w-full ">
      
      
      <div className="flex flex-wrap justify-between items-center px-4 w-full bg-amber-800 md:px-20 py-5">

       <div className=" bg-red-500"><img src="../public/reelslogo.png" alt="footerlogo" className="h-50" /></div> 
       
        <div className=" flex justify-center items-center gap-7 h-auto px-4 py-20 basis-2.5/5 bg-blue-800">

        <div> <p className="text-black font-medium underline text-xl">Menu</p>
          <a href="/privacy" className="hover:text-red-500">Privacy Policy</a>
          <br /><a href="/about" className="hover:text-red-500">About Us</a><br />
          <a href="/contact" className="hover:text-red-500">Contact</a>
        </div>
     

      
        <div> <p className="text-black font-medium underline text-xl">Menu</p>
          <a href="/privacy" className="hover:text-red-500">Privacy Policy</a>
          <br /><a href="/about" className="hover:text-red-500">About Us</a><br />
          <a href="/contact" className="hover:text-red-500">Contact</a>
        </div>
      

      <div>
        <h2>Follow us on social media</h2>
        <p>your gateway to amazing african and global stories.<br />
        stay connected with us and never miss an update</p>
        <div className="flex">
          <img src="" alt="fb" />
          <img src="" alt="ig" />
          <img src="" alt="tw" />
        </div>
      </div>
      </div>
    </div>
      <p className="text-gray-400 text-center text-sm">© {new Date().getFullYear()} ReelNaija. All rights reserved.</p>
    </footer>
  );
}
