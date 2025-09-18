function Header(){
    return(
        <>
        <div className="flex justify-between bg-sky-950">
            <h3 className="m-3 text-white font-semibold text-2xl">Travel Advisor</h3>
            <div className="flex justify-between gap-4 m-4">
                <h4 className="">Explore New Places</h4>
                <div className="bg-white px-2 py-1">
                    <img src="search.png" alt="search" className="w-6 h-6 inline" /><input type="text" name="places" placeholder="search" className="px-2 outline-0 cursor-pointer"/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header;