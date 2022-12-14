function HeaderIcon({ Icon, active }) {
    return (
      <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-pink-100 rounded-xl active:border-b-2 active:border-b-2 active:border-pink-500 group">
          <Icon 
              className={`h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-pink-500 ${active && "text-pink-500"}`} />
      </div>
    )
  }
  
  export default HeaderIcon