import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";
import { useEffect, useState } from "react";

interface UserData {
  id: string;
  name: string;
  email: string;
}

export function Appbar() {
  const [user, setUser] = useState<UserData | null>(null);
  const [showDropdown, setShowDropDown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const UserData = JSON.parse(storedUser);
        setUser(UserData);
      } catch (err) {
        console.error("Error parsing user data:", err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  return (
    <div className="px-10 border-b py-4 flex justify-between text-2xl">
      <Link
        to={"/blogs"}
        className="flex justify-center flex-col cursor-pointer"
      >
        Bloggs
      </Link>
      <div className="flex justify-center">
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-4 cursor-pointer text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            New Post
          </button>
        </Link>

        <Link to={"/signin"}>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
          >
            Sign in
          </button>
        </Link>

        <div className="relative">
          <div
            onClick={() => setShowDropDown(!showDropdown)}
            className="cursor-pointer"
          >
            <Avatar size="big" name={user?.name || user?.email || "User"} />
          </div>

          {showDropdown && (
            <div className="fixed right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
              <div className="py-1">
                <div className="px-4 py-2 text-sm text-gray-800 border-b">
                  <div className="font-semibold text-lg">
                    {user?.name || "user"}
                  </div>
                  <div className="text-gray-700">{user?.email}</div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-base text-gray-700 cursor-pointer"
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
