function TopBar(){
  return (
      <div className="navbar bg-blue-700 text-neutral-content rounded-lg tool-bar">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Teacher & Student  Management</a>
      </div>
      <div className="flex-none mx-10">
        <div className="form-control">
          <input type="text" placeholder="Search" className=" bg-neutral-content input input-bordered w-24 md:w-auto" />
        </div>
      </div>
    </div>
  )
}

export default TopBar