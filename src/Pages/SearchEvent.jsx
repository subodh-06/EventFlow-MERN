import SearchBar from "@/components/ui/Searchbar"

function SearchEvent() {
 

  return (
    <>
   <section className=" bg-[#141413] flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center text-center bg-zinc-800 rounded-xl py-20 px-6 mt-1">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-50">Find Your Next Event</h1>
      <p className="text-lg text-gray-200 mt-4  mb-1.5 max-w-xl">Discover and attend amazing events happening near you!</p>
  
    <SearchBar/>
      </div>
    </section>
    </>
  )
}

export default SearchEvent
